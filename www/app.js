// --- Leitner "5 Fächer" box system ---
// Box 0: Daily, Box 1: 2 Days, Box 2: 1 Week, Box 3: 2 Weeks, Box 4: 1 Month.
// Boxes are progress labels only -- every card is always studyable, any
// time; a box tile is just an optional filter on the queue.
const BOX_LABELS = ["Daily", "2 Days", "1 Week", "2 Weeks", "1 Month"];
const BOX_INTERVAL_DAYS = [1, 2, 7, 14, 30];

const STORAGE_ENTRIES = "vocabulator_entries";
const STORAGE_PROGRESS = "vocabulator_progress";
const STORAGE_DIRECTION = "vocabulator_direction";
const STORAGE_ACTIVE_LANGUAGE = "vocabulator_active_language";
const SEED_VERSION_KEY = "vocabulator_seed_version";
const SEED_VERSION = 2; // bump when seed data files change, to merge/resync entries

// English is always the fixed known language. Adding a new target language
// later just means adding a LANGUAGES entry + a seed data file -- entries
// only need translations for the languages they actually have.
const LANGUAGES = [
  { code: "rw", label: "Kinyarwanda" },
  { code: "de", label: "German (A1)" },
];

// entry: { id, en, cat, translations: { [langCode]: { text, pron, lit, verify } } }
let entries = [];
// progress keyed by "<entryId>:<langCode>" since knowing a word in one
// language says nothing about knowing it in another.
let progress = {};
let queue = [];
let currentIndex = 0;
let activeCats = new Set();
let activeBoxFilter = null; // null = all boxes, else 0-4
let direction = localStorage.getItem(STORAGE_DIRECTION) || "en-target"; // "en-target" or "target-en"
let activeLanguage = localStorage.getItem(STORAGE_ACTIVE_LANGUAGE) || "rw";
let editingId = null;
let currentView = "study";

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

function loadState() {
  const storedEntries = localStorage.getItem(STORAGE_ENTRIES);
  entries = storedEntries ? JSON.parse(storedEntries) : [];

  const seedVersion = Number(localStorage.getItem(SEED_VERSION_KEY) || 0);
  if (seedVersion < SEED_VERSION) {
    const byKey = new Map(entries.map((e) => [seedKey(e), e]));
    const seedEntries = [].concat(window.RW_SEED_ENTRIES || [], window.DE_A1_SEED_ENTRIES || []);
    for (const seed of seedEntries) {
      const existing = byKey.get(seedKey(seed));
      if (existing) {
        // Seed data owns the category for entries it created (e.g. a
        // reclassification into new tiers) -- resync it even if already
        // merged before, so a data-only content update takes effect.
        existing.cat = seed.cat;
      } else {
        entries.push({ id: uid(), ...seed });
      }
    }
    localStorage.setItem(SEED_VERSION_KEY, String(SEED_VERSION));
    saveEntries();
  }

  const storedProgress = localStorage.getItem(STORAGE_PROGRESS);
  progress = storedProgress ? JSON.parse(storedProgress) : {};
}

function saveEntries() {
  localStorage.setItem(STORAGE_ENTRIES, JSON.stringify(entries));
}

function saveProgress() {
  localStorage.setItem(STORAGE_PROGRESS, JSON.stringify(progress));
}

function progressKey(entryId, lang) {
  return entryId + ":" + lang;
}

function getProgress(entryId, lang) {
  const key = progressKey(entryId, lang);
  if (!progress[key]) progress[key] = { box: 0, due: todayStr() };
  return progress[key];
}

function currentLanguage() {
  return LANGUAGES.find((l) => l.code === activeLanguage) || LANGUAGES[0];
}

function categoriesForActiveLanguage() {
  const cats = new Set();
  for (const e of entries) {
    if (e.translations[activeLanguage]) cats.add(e.cat);
  }
  return [...cats].sort();
}

function getStudyQueue() {
  return entries
    .filter((e) => e.translations[activeLanguage])
    .filter((e) => activeCats.has(e.cat))
    .filter((e) => activeBoxFilter === null || getProgress(e.id, activeLanguage).box === activeBoxFilter)
    .sort((a, b) => {
      const pa = getProgress(a.id, activeLanguage);
      const pb = getProgress(b.id, activeLanguage);
      return pa.box - pb.box || (pa.due < pb.due ? -1 : 1);
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
  for (const e of entries) {
    if (!e.translations[activeLanguage]) continue;
    counts[getProgress(e.id, activeLanguage).box]++;
  }
  const el = document.getElementById("boxesOverview");
  el.innerHTML = BOX_LABELS.map(
    (label, i) => `
      <button class="box-tile${activeBoxFilter === i ? " active" : ""}" data-box="${i}" type="button">
        <div class="box-count">${counts[i]}</div>
        <div class="box-name">${label}</div>
      </button>`
  ).join("");
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

function renderCurrentCard() {
  const noCardsEl = document.getElementById("noCards");
  const cardEl = document.getElementById("card");

  if (currentIndex >= queue.length) {
    noCardsEl.hidden = false;
    cardEl.hidden = true;
    document.getElementById("noCardsText").textContent =
      activeBoxFilter !== null
        ? `No cards in "${BOX_LABELS[activeBoxFilter]}" right now.`
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
  document.getElementById("cardVerify").hidden = !t.verify;
  document.getElementById("cardFront").textContent = promptText;
  document.getElementById("cardBack").textContent = answerText;
  document.getElementById("cardLit").textContent = t.lit || "";

  // The pronunciation guide belongs to the target-language text -- show it
  // wherever that text is, but the note often gives the answer away
  // outright, so it always stays behind "Show answer".
  document.getElementById("cardFrontPron").textContent = targetIsPrompt ? pronText : "";
  document.getElementById("cardFrontPron").hidden = !targetIsPrompt;
  document.getElementById("cardPron").textContent = targetIsPrompt ? "" : pronText;

  document.getElementById("cardBackWrap").hidden = true;
  document.getElementById("showAnswerBtn").hidden = false;
  document.getElementById("judgeButtons").hidden = true;
}

function renderEditForm(entry) {
  const langSections = LANGUAGES.map((l) => {
    const t = entry.translations[l.code] || { text: "", pron: "", lit: "", verify: false };
    return `
      <div class="edit-lang-section">
        <div class="edit-lang-label">${l.label}</div>
        <input class="edit-text" data-lang="${l.code}" type="text" placeholder="${l.label} translation" value="${escapeHtml(t.text)}" />
        <input class="edit-pron" data-lang="${l.code}" type="text" placeholder="Pronunciation (optional)" value="${escapeHtml(t.pron || "")}" />
        <input class="edit-lit" data-lang="${l.code}" type="text" placeholder="Note / example (optional)" value="${escapeHtml(t.lit || "")}" />
        <label class="edit-verify-row">
          <input class="edit-verify" data-lang="${l.code}" type="checkbox" ${t.verify ? "checked" : ""} />
          Needs verification by a fluent speaker
        </label>
      </div>`;
  }).join("");

  return `
    <div class="card-row editing" data-id="${entry.id}">
      <div class="edit-form">
        <input class="edit-en" type="text" placeholder="English phrase" value="${escapeHtml(entry.en)}" />
        <input class="edit-cat" type="text" placeholder="Category" value="${escapeHtml(entry.cat)}" />
        ${langSections}
        <div class="edit-actions">
          <button class="btn secondary edit-cancel" type="button">Cancel</button>
          <button class="btn primary edit-save" type="button">Save</button>
        </div>
      </div>
    </div>`;
}

function renderManage() {
  document.getElementById("inputBack").placeholder = currentLanguage().label + " translation";

  const listEl = document.getElementById("cardList");
  listEl.innerHTML = entries
    .map((entry) => {
      if (entry.id === editingId) return renderEditForm(entry);
      const langBadges = LANGUAGES.filter((l) => entry.translations[l.code])
        .map((l) => `<span class="lang-badge">${l.code.toUpperCase()}</span>`)
        .join("");
      return `
        <div class="card-row" data-id="${entry.id}">
          <div class="row-text">
            <div class="row-front">${escapeHtml(entry.en)}</div>
            <div class="row-back">${escapeHtml(entry.cat)}</div>
          </div>
          <div class="row-langs">${langBadges}</div>
          <div class="row-actions">
            <button class="row-edit" title="Edit">✎</button>
            <button class="row-delete" title="Delete">✕</button>
          </div>
        </div>`;
    })
    .join("");
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
  panel.hidden = !panel.hidden;
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

document.getElementById("menuStudyBtn").addEventListener("click", () => {
  switchView("study");
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

document.getElementById("addCardForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const enInput = document.getElementById("inputFront");
  const targetInput = document.getElementById("inputBack");
  const en = enInput.value.trim();
  const target = targetInput.value.trim();
  if (!en || !target) return;

  const id = uid();
  const cats = categoriesForActiveLanguage();
  entries.push({
    id,
    en,
    cat: cats[0] || "General",
    translations: { [activeLanguage]: { text: target, pron: "", lit: "", verify: false } },
  });
  saveEntries();

  enInput.value = "";
  targetInput.value = "";
  renderManage();
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
    const entry = entries.find((x) => x.id === id);
    const en = row.querySelector(".edit-en").value.trim();
    if (!en) return;
    entry.en = en;
    entry.cat = row.querySelector(".edit-cat").value.trim() || "General";
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
        verify: row.querySelector(`.edit-verify[data-lang="${l.code}"]`).checked,
      };
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
renderSubtitle();
renderLanguageMenu();
renderCatFilter();
renderDirectionToggle();
renderStudy();
