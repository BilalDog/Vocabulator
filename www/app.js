// --- Leitner "5 Fächer" box system ---
// Box 0: Daily, Box 1: 2 Days, Box 2: 1 Week, Box 3: 2 Weeks, Box 4: 1 Month.
// Boxes are progress labels only -- every card is always studyable, any
// time; a box tile is just an optional filter on the queue.
const BOX_LABELS = ["Daily", "2 Days", "1 Week", "2 Weeks", "1 Month"];
const BOX_INTERVAL_DAYS = [1, 2, 7, 14, 30];

const STORAGE_ENTRIES = "vocabulator_entries";
const STORAGE_PROGRESS = "vocabulator_progress";
const STORAGE_MARKED = "vocabulator_marked";
const STORAGE_DIRECTION = "vocabulator_direction";
const STORAGE_ACTIVE_LANGUAGE = "vocabulator_active_language";
const STORAGE_FILTERS_VISIBLE = "vocabulator_filters_visible";
const SEED_VERSION_KEY = "vocabulator_seed_version";
const SEED_VERSION = 9; // bump when seed data files change, to merge/resync entries

// English is always the fixed known language. Adding a new target language
// later just means adding a LANGUAGES entry + a seed data file -- entries
// only need translations for the languages they actually have.
const LANGUAGES = [
  { code: "rw", label: "Kinyarwanda" },
  { code: "de", label: "German (A1)" },
];

// entry: { id, en, cat, translations: { [langCode]: { text, pron, lit } } }
let entries = [];
// progress keyed by "<entryId>:<langCode>" since knowing a word in one
// language says nothing about knowing it in another.
let progress = {};
// marked keyed the same way as progress -- a marked word is studyable both
// under its own category and under the synthetic MARKED_CATEGORY chip, so
// selecting either one is enough to bring it into the queue.
let marked = {};
const MARKED_CATEGORY = "★ Markiert";
let queue = [];
let currentIndex = 0;
let activeCats = new Set();
let activeBoxFilter = null; // the box tile the user explicitly tapped, else null
// Which box the current queue actually came from -- either activeBoxFilter,
// or, when that's null, whichever box getStudyQueue() auto-picked (see
// below). Used to word the "no cards" message and to know whether other
// boxes still have cards waiting once this one is finished.
let effectiveBoxFilter = null;
let direction = localStorage.getItem(STORAGE_DIRECTION) || "en-target"; // "en-target" or "target-en"
let activeLanguage = localStorage.getItem(STORAGE_ACTIVE_LANGUAGE) || "rw";
let editingId = null;
const NEW_ENTRY_ID = "__new__";
let currentView = "study";
let filtersVisible = localStorage.getItem(STORAGE_FILTERS_VISIBLE) !== "false";

// Manage Cards has its own independent filter state -- unlike Study, it
// shows every entry across every language by default (so you can backfill
// a translation that's missing), but an optional language filter narrows
// it down to just that language's entries and switches the list to show
// their actual text instead of the English gloss.
let manageLangFilter = null; // null = all languages, else a LANGUAGES code
let manageCats = new Set();
let manageSearch = "";

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function addDays(dateStr, days) {
  const d = new Date(dateStr + "T00:00:00");
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function seedKey(seed) {
  const lang = Object.keys(seed.translations)[0];
  return lang + ":" + seed.translations[lang].text + "|" + seed.en;
}

// Some German entries were originally seeded as bare dictionary "stems"
// (e.g. "ander-") that are never actually used uninflected -- replaced
// with a natural, usable word form (and a clearer English gloss). Since
// that changes the seedKey (text+en), an already-saved entry needs
// patching in place before the normal seedKey-based merge below, or it'd
// just get a duplicate added alongside the old broken one instead of
// being fixed.
const LEGACY_DE_FIXES = {
  "all-": ["alle", "all"],
  "ander-": ["andere", "other"],
  "best-": ["beste", "best"],
  "dein-": ["dein", "your (informal, singular)"],
  "dies-": ["dieser", "this; this one"],
  "ein-": ["ein", "a; one"],
  "Feier-": ["der Feiertag", "the (public) holiday"],
  "jed-": ["jeder", "each; every"],
  "letzt-": ["letzte", "last"],
  "lieb-": ["lieb", "dear; nice"],
  "Lieblings-": ["der Lieblingsfilm", "(the) favorite movie"],
  "meist-": ["die meisten", "most (of them/people)"],
  "nächst-": ["nächste", "next"],
  "unser-": ["unser", "our"],
  "welch-": ["welcher", "which"],
};

function loadState() {
  const storedEntries = localStorage.getItem(STORAGE_ENTRIES);
  entries = storedEntries ? JSON.parse(storedEntries) : [];

  for (const e of entries) {
    const t = e.translations.de;
    const fix = t && LEGACY_DE_FIXES[t.text];
    if (fix) {
      t.text = fix[0];
      e.en = fix[1];
    }
  }

  const seedVersion = Number(localStorage.getItem(SEED_VERSION_KEY) || 0);
  if (seedVersion < SEED_VERSION) {
    if (seedVersion < 7) {
      // The "Sätze" category was fully replaced in version 7 (complex
      // Hören/Schreiben dialogue sentences swapped for short, simple
      // Sprechen-exam material) -- drop the old sentences so they don't
      // linger alongside the new ones. A plain seedKey merge below only
      // adds and resyncs, it never removes.
      const validSaetzeKeys = new Set(
        (window.DE_A1_SEED_ENTRIES || [])
          .filter((e) => e.cat === "Sätze")
          .map((e) => seedKey(e))
      );
      entries = entries.filter((e) => {
        if (e.cat !== "Sätze" || !e.translations.de) return true;
        return validSaetzeKeys.has(seedKey(e));
      });
    }
    const byKey = new Map(entries.map((e) => [seedKey(e), e]));
    const seedEntries = [].concat(window.RW_SEED_ENTRIES || [], window.DE_A1_SEED_ENTRIES || []);
    for (const seed of seedEntries) {
      const existing = byKey.get(seedKey(seed));
      if (existing) {
        // Seed data owns the category for entries it created (e.g. a
        // reclassification into new tiers) -- resync it even if already
        // merged before, so a data-only content update takes effect.
        existing.cat = seed.cat;
        // Same for an added/changed "du" (informal) phrasing -- the
        // seedKey (text+en) is untouched by adding this field, so a
        // matched entry otherwise wouldn't pick it up at all.
        const seedLang = Object.keys(seed.translations)[0];
        const seedDu = seed.translations[seedLang].du;
        if (seedDu && existing.translations[seedLang]) {
          existing.translations[seedLang].du = seedDu;
        }
      } else {
        entries.push({ id: uid(), ...seed });
      }
    }
    localStorage.setItem(SEED_VERSION_KEY, String(SEED_VERSION));
    saveEntries();
  }

  const storedProgress = localStorage.getItem(STORAGE_PROGRESS);
  progress = storedProgress ? JSON.parse(storedProgress) : {};

  const storedMarked = localStorage.getItem(STORAGE_MARKED);
  marked = storedMarked ? JSON.parse(storedMarked) : {};
}

function saveEntries() {
  localStorage.setItem(STORAGE_ENTRIES, JSON.stringify(entries));
}

function saveProgress() {
  localStorage.setItem(STORAGE_PROGRESS, JSON.stringify(progress));
}

function saveMarked() {
  localStorage.setItem(STORAGE_MARKED, JSON.stringify(marked));
}

function progressKey(entryId, lang) {
  return entryId + ":" + lang;
}

function getProgress(entryId, lang) {
  const key = progressKey(entryId, lang);
  if (!progress[key]) progress[key] = { box: 0, due: todayStr() };
  return progress[key];
}

function isMarked(entryId, lang) {
  return !!marked[progressKey(entryId, lang)];
}

function toggleMarked(entryId, lang) {
  const key = progressKey(entryId, lang);
  if (marked[key]) delete marked[key];
  else marked[key] = true;
  saveMarked();
}

// A word's categories are normally just its own "cat", but a marked word
// also belongs to MARKED_CATEGORY -- selecting either chip alone is enough
// to bring it into the queue (union, not intersection).
function categoriesOfEntry(entry) {
  const cats = [entry.cat];
  if (isMarked(entry.id, activeLanguage)) cats.push(MARKED_CATEGORY);
  return cats;
}

function currentLanguage() {
  return LANGUAGES.find((l) => l.code === activeLanguage) || LANGUAGES[0];
}

function categoriesForActiveLanguage() {
  const cats = new Set();
  for (const e of entries) {
    if (!e.translations[activeLanguage]) continue;
    for (const c of categoriesOfEntry(e)) cats.add(c);
  }
  return [...cats].sort();
}

function getStudyQueue() {
  const candidates = entries
    .filter((e) => e.translations[activeLanguage])
    .filter((e) => categoriesOfEntry(e).some((c) => activeCats.has(c)));

  // Without an explicit box tile tapped, study one box at a time instead
  // of silently blending every box into one continuous session -- default
  // to the lowest (most due) box that actually has cards. Moving on to a
  // later box is then a deliberate tap on its tile, not something that
  // just happens mid-session once the current one runs out.
  effectiveBoxFilter = activeBoxFilter;
  if (effectiveBoxFilter === null) {
    for (const e of candidates) {
      const box = getProgress(e.id, activeLanguage).box;
      if (effectiveBoxFilter === null || box < effectiveBoxFilter) effectiveBoxFilter = box;
    }
  }

  return candidates
    .filter((e) => effectiveBoxFilter === null || getProgress(e.id, activeLanguage).box === effectiveBoxFilter)
    .sort((a, b) => {
      const pa = getProgress(a.id, activeLanguage);
      const pb = getProgress(b.id, activeLanguage);
      return pa.due < pb.due ? -1 : pa.due > pb.due ? 1 : 0;
    });
}

function markCorrect(entryId) {
  const p = getProgress(entryId, activeLanguage);
  p.box = Math.min(p.box + 1, BOX_LABELS.length - 1);
  p.due = addDays(todayStr(), BOX_INTERVAL_DAYS[p.box]);
  saveProgress();
}

function markWrong(entryId) {
  const p = getProgress(entryId, activeLanguage);
  p.box = 0;
  p.due = todayStr();
  saveProgress();
}

// --- Rendering ---

function renderSubtitle() {
  document.getElementById("subtitle").textContent = "English ↔ " + currentLanguage().label;
}

function renderLanguageMenu() {
  const el = document.getElementById("languageMenuItems");
  el.innerHTML = LANGUAGES.map(
    (l) => `<button class="menu-lang-btn${l.code === activeLanguage ? " on" : ""}" data-lang="${l.code}">${l.label}</button>`
  ).join("");
}

function switchLanguage(code) {
  if (code === activeLanguage) return;
  activeLanguage = code;
  localStorage.setItem(STORAGE_ACTIVE_LANGUAGE, code);
  activeCats = new Set(categoriesForActiveLanguage());
  activeBoxFilter = null;
  renderLanguageMenu();
  renderSubtitle();
  renderCatFilter();
  renderDirectionToggle();
  renderStudy();
  if (currentView === "manage") renderManage();
}

function renderBoxesOverview() {
  const counts = [0, 0, 0, 0, 0];
  const dueSoon = [false, false, false, false, false];
  const today = todayStr();
  for (const e of entries) {
    if (!e.translations[activeLanguage]) continue;
    const p = getProgress(e.id, activeLanguage);
    counts[p.box]++;
    if (p.due <= today) dueSoon[p.box] = true;
  }
  const el = document.getElementById("boxesOverview");
  el.innerHTML = BOX_LABELS.map(
    (label, i) => `
      <button class="box-tile${activeBoxFilter === i ? " active" : ""}" data-box="${i}" type="button">
        ${dueSoon[i] ? '<span class="box-reminder" title="Ready to review">!</span>' : ""}
        <div class="box-count">${counts[i]}</div>
        <div class="box-name">${label}</div>
      </button>`
  ).join("");
}

function setFiltersVisible(visible) {
  filtersVisible = visible;
  localStorage.setItem(STORAGE_FILTERS_VISIBLE, String(visible));
  document.getElementById("catFilter").hidden = !visible;
  document.getElementById("filtersToggleBtn").textContent = visible ? "Hide filters ▲" : "Show filters ▼";
}

function renderCatFilter() {
  const cats = categoriesForActiveLanguage();
  const el = document.getElementById("catFilter");
  el.innerHTML = cats
    .map((c) => `<button class="chip${activeCats.has(c) ? " on" : ""}" data-cat="${escapeHtml(c)}">${escapeHtml(c)}</button>`)
    .join("");
}

function renderDirectionToggle() {
  const lang = currentLanguage();
  const el = document.getElementById("directionToggle");
  el.innerHTML = `
    <button class="direction-btn${direction === "en-target" ? " on" : ""}" data-direction="en-target">English → ${lang.label}</button>
    <button class="direction-btn${direction === "target-en" ? " on" : ""}" data-direction="target-en">${lang.label} → English</button>
  `;
}

function renderStudy() {
  renderBoxesOverview();
  queue = getStudyQueue();
  currentIndex = 0;
  renderCurrentCard();
}

// --- Pronunciation playback ---
// English/German use the device's built-in speech synthesis voices, which
// are near-universal for those languages. Kinyarwanda has no reliable TTS
// voice on any mainstream platform, so it can only ever be played from a
// pre-recorded audio file (translations.<lang>.audio, see rw-seed.js) --
// there's no in-between "best effort" here, since a wrong-language voice
// mangling Kinyarwanda is worse than no button at all.
const SPEECH_LANG_TAGS = { en: "en-US", de: "de-DE" };

function speakText(text, langCode) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  const bcp47 = SPEECH_LANG_TAGS[langCode];
  if (bcp47) u.lang = bcp47;
  const voices = window.speechSynthesis.getVoices();
  const pick = voices.find((v) => v.lang.toLowerCase().startsWith(langCode));
  if (pick) u.voice = pick;
  u.rate = 0.9;
  window.speechSynthesis.speak(u);
}

function playAudioFile(path) {
  new Audio(path).play().catch(() => {});
}

// Returns a click handler for this side of the card, or null if it can't
// be spoken at all (so the caller can hide the button instead of showing
// one that does nothing).
function speakHandlerFor(langCode, text, audioPath) {
  if (SPEECH_LANG_TAGS[langCode]) return () => speakText(text, langCode);
  if (audioPath) return () => playAudioFile(audioPath);
  return null;
}

function renderCurrentCard() {
  const noCardsEl = document.getElementById("noCards");
  const cardEl = document.getElementById("card");

  if (currentIndex >= queue.length) {
    noCardsEl.hidden = false;
    cardEl.hidden = true;
    const moreElsewhere =
      activeBoxFilter === null &&
      effectiveBoxFilter !== null &&
      entries.some(
        (e) =>
          e.translations[activeLanguage] &&
          categoriesOfEntry(e).some((c) => activeCats.has(c)) &&
          getProgress(e.id, activeLanguage).box !== effectiveBoxFilter
      );
    document.getElementById("noCardsText").textContent = activeBoxFilter !== null
      ? `No cards in "${BOX_LABELS[activeBoxFilter]}" right now.`
      : moreElsewhere
        ? `Done with "${BOX_LABELS[effectiveBoxFilter]}" for now — pick another box from the ☰ menu to keep studying.`
        : "No cards match the current filters. Add more cards, or adjust the category filter.";
    return;
  }

  noCardsEl.hidden = true;
  cardEl.hidden = false;

  const entry = queue[currentIndex];
  const p = getProgress(entry.id, activeLanguage);
  const t = entry.translations[activeLanguage];

  const targetIsPrompt = direction === "target-en";
  const promptText = targetIsPrompt ? t.text : entry.en;
  const answerText = targetIsPrompt ? entry.en : t.text;
  const pronText = t.pron ? `[${t.pron}]` : "";

  document.getElementById("cardBoxLabel").textContent = BOX_LABELS[p.box];
  document.getElementById("cardCounter").textContent = `${currentIndex + 1} / ${queue.length}`;
  document.getElementById("cardCat").textContent = entry.cat;
  const markBtn = document.getElementById("markBtn");
  const nowMarked = isMarked(entry.id, activeLanguage);
  markBtn.textContent = nowMarked ? "★" : "☆";
  markBtn.classList.toggle("on", nowMarked);
  document.getElementById("cardFront").textContent = promptText;
  document.getElementById("cardBack").textContent = answerText;
  document.getElementById("cardLit").textContent = t.lit || "";

  const frontLang = targetIsPrompt ? activeLanguage : "en";
  const backLang = targetIsPrompt ? "en" : activeLanguage;
  const frontAudio = targetIsPrompt ? t.audio : null;
  const backAudio = targetIsPrompt ? null : t.audio;

  const speakFrontBtn = document.getElementById("speakFrontBtn");
  const frontHandler = speakHandlerFor(frontLang, promptText, frontAudio);
  speakFrontBtn.hidden = !frontHandler;
  speakFrontBtn.onclick = frontHandler;

  const speakBackBtn = document.getElementById("speakBackBtn");
  const backHandler = speakHandlerFor(backLang, answerText, backAudio);
  speakBackBtn.hidden = !backHandler;
  speakBackBtn.onclick = backHandler;

  // The pronunciation guide belongs to the target-language text -- show it
  // wherever that text is, but the note often gives the answer away
  // outright, so it always stays behind "Show answer".
  document.getElementById("cardFrontPron").textContent = targetIsPrompt ? pronText : "";
  document.getElementById("cardFrontPron").hidden = !targetIsPrompt;
  document.getElementById("cardPron").textContent = targetIsPrompt ? "" : pronText;

  // The informal "du" phrasing belongs to the target-language text just
  // like the pronunciation guide -- same side, same reveal rules.
  const duText = t.du ? `Informal: ${t.du}` : "";
  document.getElementById("cardFrontDu").textContent = targetIsPrompt ? duText : "";
  document.getElementById("cardFrontDu").hidden = !targetIsPrompt || !t.du;
  document.getElementById("cardDu").textContent = targetIsPrompt ? "" : duText;
  document.getElementById("cardDu").hidden = targetIsPrompt || !t.du;

  document.getElementById("cardBackWrap").hidden = true;
  document.getElementById("showAnswerBtn").hidden = false;
  document.getElementById("judgeButtons").hidden = true;
}

function renderEditForm(entry) {
  const isNew = entry === null;
  const id = isNew ? NEW_ENTRY_ID : entry.id;
  const en = isNew ? "" : entry.en;
  const translations = isNew ? {} : entry.translations;

  // The category dropdown only offers existing categories to pick from --
  // real ones, not the synthetic "marked" pseudo-category, which isn't a
  // storable cat value. If the entry's current cat isn't among them (a
  // stale/legacy value), keep it as an extra option so saving the form
  // without touching the dropdown doesn't silently change it.
  const knownCats = categoriesForActiveLanguage().filter((c) => c !== MARKED_CATEGORY);
  const currentCat = isNew ? knownCats[0] || "General" : entry.cat;
  const catOptions = knownCats.includes(currentCat) ? knownCats : [currentCat, ...knownCats];

  const langSections = LANGUAGES.map((l) => {
    const t = translations[l.code] || { text: "", pron: "", lit: "" };
    return `
      <div class="edit-lang-section">
        <div class="edit-lang-label">${l.label}</div>
        <input class="edit-text" data-lang="${l.code}" type="text" placeholder="${l.label} translation" value="${escapeHtml(t.text)}" />
        <input class="edit-pron" data-lang="${l.code}" type="text" placeholder="Pronunciation (optional)" value="${escapeHtml(t.pron || "")}" />
        <input class="edit-lit" data-lang="${l.code}" type="text" placeholder="Note / example (optional)" value="${escapeHtml(t.lit || "")}" />
      </div>`;
  }).join("");

  return `
    <div class="card-row editing" data-id="${id}">
      <div class="edit-form">
        <input class="edit-en" type="text" placeholder="English phrase" value="${escapeHtml(en)}" />
        <select class="edit-cat">
          ${catOptions.map((c) => `<option value="${escapeHtml(c)}"${c === currentCat ? " selected" : ""}>${escapeHtml(c)}</option>`).join("")}
        </select>
        ${langSections}
        <div class="edit-actions">
          <button class="btn secondary edit-cancel" type="button">Cancel</button>
          <button class="btn primary edit-save" type="button">${isNew ? "Add" : "Save"}</button>
        </div>
      </div>
    </div>`;
}

function categoriesForManage() {
  const cats = new Set();
  for (const e of entries) {
    if (manageLangFilter && !e.translations[manageLangFilter]) continue;
    cats.add(e.cat);
  }
  return [...cats].sort();
}

function manageFilteredEntries() {
  const q = manageSearch.trim().toLowerCase();
  return entries.filter((e) => {
    if (manageLangFilter && !e.translations[manageLangFilter]) return false;
    if (!manageCats.has(e.cat)) return false;
    if (!q) return true;
    if (e.en.toLowerCase().includes(q)) return true;
    return LANGUAGES.some((l) => {
      const t = e.translations[l.code];
      return t && t.text.toLowerCase().includes(q);
    });
  });
}

function renderManageLangFilter() {
  const el = document.getElementById("manageLangFilter");
  const allChip = `<button class="chip${manageLangFilter === null ? " on" : ""}" data-lang="">All languages</button>`;
  const langChips = LANGUAGES.map(
    (l) => `<button class="chip${manageLangFilter === l.code ? " on" : ""}" data-lang="${l.code}">${escapeHtml(l.label)}</button>`
  ).join("");
  el.innerHTML = allChip + langChips;
}

function renderManageCatFilter() {
  const cats = categoriesForManage();
  const el = document.getElementById("manageCatFilter");
  el.innerHTML = cats
    .map((c) => `<button class="chip${manageCats.has(c) ? " on" : ""}" data-cat="${escapeHtml(c)}">${escapeHtml(c)}</button>`)
    .join("");
}

function renderManageList() {
  const listEl = document.getElementById("cardList");
  const rows = manageFilteredEntries().map((entry) => {
    if (entry.id === editingId) return renderEditForm(entry);
    const langBadges = LANGUAGES.filter((l) => entry.translations[l.code])
      .map((l) => `<span class="lang-badge">${l.code.toUpperCase()}</span>`)
      .join("");
    // With a language filter active, lead with that language's own text
    // (what you're actually there to manage) instead of the English gloss.
    const frontText = manageLangFilter ? entry.translations[manageLangFilter].text : entry.en;
    const backText = manageLangFilter ? `${entry.en} · ${entry.cat}` : entry.cat;
    return `
      <div class="card-row" data-id="${entry.id}">
        <div class="row-text">
          <div class="row-front">${escapeHtml(frontText)}</div>
          <div class="row-back">${escapeHtml(backText)}</div>
        </div>
        <div class="row-langs">${langBadges}</div>
        <div class="row-actions">
          <button class="row-edit" title="Edit">✎</button>
          <button class="row-delete" title="Delete">✕</button>
        </div>
      </div>`;
  });
  if (editingId === NEW_ENTRY_ID) rows.unshift(renderEditForm(null));
  listEl.innerHTML = rows.join("");
}

function renderManage() {
  renderManageLangFilter();
  renderManageCatFilter();
  renderManageList();
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// --- Event wiring ---

function switchView(view) {
  currentView = view;
  document.querySelectorAll(".view").forEach((section) => {
    section.classList.toggle("active", section.id === `view-${view}`);
  });
  if (view === "study") renderStudy();
  if (view === "manage") renderManage();
}

document.getElementById("menuBtn").addEventListener("click", () => {
  const panel = document.getElementById("menuPanel");
  const opening = panel.hidden;
  panel.hidden = !panel.hidden;
  if (opening) switchView("study");
});

document.addEventListener("click", (e) => {
  const panel = document.getElementById("menuPanel");
  const btn = document.getElementById("menuBtn");
  if (!panel.hidden && !panel.contains(e.target) && e.target !== btn) {
    panel.hidden = true;
  }
});

document.getElementById("languageMenuItems").addEventListener("click", (e) => {
  const code = e.target.dataset.lang;
  if (!code) return;
  switchLanguage(code);
  document.getElementById("menuPanel").hidden = true;
});

document.getElementById("menuManageBtn").addEventListener("click", () => {
  switchView("manage");
  document.getElementById("menuPanel").hidden = true;
});

document.getElementById("backToStudyLink").addEventListener("click", () => switchView("study"));

document.getElementById("catFilter").addEventListener("click", (e) => {
  const key = e.target.dataset.cat;
  if (!key) return;
  if (activeCats.has(key)) {
    if (activeCats.size > 1) activeCats.delete(key);
  } else {
    activeCats.add(key);
  }
  renderCatFilter();
  renderStudy();
});

document.getElementById("directionToggle").addEventListener("click", (e) => {
  const newDirection = e.target.dataset.direction;
  if (!newDirection || newDirection === direction) return;
  direction = newDirection;
  localStorage.setItem(STORAGE_DIRECTION, direction);
  renderDirectionToggle();
  renderCurrentCard();
});

document.getElementById("boxesOverview").addEventListener("click", (e) => {
  const tile = e.target.closest(".box-tile");
  if (!tile) return;
  const boxIndex = Number(tile.dataset.box);
  activeBoxFilter = activeBoxFilter === boxIndex ? null : boxIndex;
  renderStudy();
  switchView("study");
  document.getElementById("menuPanel").hidden = true;
});

document.getElementById("filtersToggleBtn").addEventListener("click", () => {
  setFiltersVisible(document.getElementById("catFilter").hidden);
});

document.getElementById("markBtn").addEventListener("click", () => {
  const entry = queue[currentIndex];
  if (!entry) return;
  toggleMarked(entry.id, activeLanguage);
  renderCatFilter();
  renderCurrentCard();
});

document.getElementById("showAnswerBtn").addEventListener("click", () => {
  document.getElementById("cardBackWrap").hidden = false;
  document.getElementById("showAnswerBtn").hidden = true;
  document.getElementById("judgeButtons").hidden = false;
});

document.getElementById("correctBtn").addEventListener("click", () => {
  const entry = queue[currentIndex];
  markCorrect(entry.id);
  currentIndex++;
  renderBoxesOverview();
  renderCurrentCard();
});

document.getElementById("wrongBtn").addEventListener("click", () => {
  const entry = queue[currentIndex];
  markWrong(entry.id);
  currentIndex++;
  renderBoxesOverview();
  renderCurrentCard();
});

document.getElementById("addCardBtn").addEventListener("click", () => {
  editingId = NEW_ENTRY_ID;
  renderManage();
});

document.getElementById("manageLangFilter").addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;
  manageLangFilter = e.target.dataset.lang || null;
  manageCats = new Set(categoriesForManage());
  renderManageLangFilter();
  renderManageCatFilter();
  renderManageList();
});

document.getElementById("manageCatFilter").addEventListener("click", (e) => {
  const key = e.target.dataset.cat;
  if (!key) return;
  if (manageCats.has(key)) {
    if (manageCats.size > 1) manageCats.delete(key);
  } else {
    manageCats.add(key);
  }
  renderManageCatFilter();
  renderManageList();
});

document.getElementById("manageSearchInput").addEventListener("input", (e) => {
  manageSearch = e.target.value;
  renderManageList();
});

document.getElementById("cardList").addEventListener("click", (e) => {
  const row = e.target.closest(".card-row");
  if (!row) return;
  const id = row.dataset.id;

  if (e.target.classList.contains("row-delete")) {
    entries = entries.filter((x) => x.id !== id);
    for (const key of Object.keys(progress)) {
      if (key.startsWith(id + ":")) delete progress[key];
    }
    saveEntries();
    saveProgress();
    renderManage();
  } else if (e.target.classList.contains("row-edit")) {
    editingId = id;
    renderManage();
  } else if (e.target.classList.contains("edit-cancel")) {
    editingId = null;
    renderManage();
  } else if (e.target.classList.contains("edit-save")) {
    const isNew = id === NEW_ENTRY_ID;
    const en = row.querySelector(".edit-en").value.trim();
    if (!en) return;
    const entry = isNew ? { id: uid(), en: "", cat: "", translations: {} } : entries.find((x) => x.id === id);
    entry.en = en;
    entry.cat = row.querySelector(".edit-cat").value || "General";
    for (const l of LANGUAGES) {
      const text = row.querySelector(`.edit-text[data-lang="${l.code}"]`).value.trim();
      if (!text) {
        delete entry.translations[l.code];
        continue;
      }
      entry.translations[l.code] = {
        text,
        pron: row.querySelector(`.edit-pron[data-lang="${l.code}"]`).value.trim(),
        lit: row.querySelector(`.edit-lit[data-lang="${l.code}"]`).value.trim(),
      };
    }
    if (isNew) {
      if (Object.keys(entry.translations).length === 0) return;
      entries.push(entry);
    }
    saveEntries();
    editingId = null;
    renderManage();
  }
});

if ("serviceWorker" in navigator && !window.Capacitor) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}

// --- Init ---
loadState();
activeCats = new Set(categoriesForActiveLanguage());
manageCats = new Set(categoriesForManage());
renderSubtitle();
renderLanguageMenu();
renderCatFilter();
setFiltersVisible(filtersVisible);
renderDirectionToggle();
renderStudy();
