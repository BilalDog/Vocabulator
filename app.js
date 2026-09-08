// --- Leitner "5 Fächer" box system ---
// Box 0: Daily, Box 1: 2 Days, Box 2: 1 Week, Box 3: 2 Weeks, Box 4: 1 Month
const BOX_LABELS = ["Daily", "2 Days", "1 Week", "2 Weeks", "1 Month"];
const BOX_INTERVAL_DAYS = [1, 2, 7, 14, 30];

const STORAGE_CARDS = "vocabulator_cards";
const STORAGE_PROGRESS = "vocabulator_progress";
const SEED_VERSION_KEY = "vocabulator_seed_version";
const SEED_VERSION = 2; // bump when SEED_CARDS content changes, to merge in new cards

const CATEGORIES = [
  { key: "greetings", label: "Greetings" },
  { key: "directions", label: "Directions" },
  { key: "food", label: "Food" },
  { key: "shopping", label: "Shopping" },
];

// Each phrase: en (English prompt), rw (Kinyarwanda answer), pron (rough
// pronunciation), lit (literal meaning / usage note), cat (category),
// verify (true = translation not yet confirmed by a fluent speaker).
const SEED_CARDS = [
  // ---------- Greetings & politeness ----------
  { en: "Hello / Good day", rw: "Muraho", pron: "moo-RAH-ho", lit: "General greeting, any time of day.", cat: "greetings", verify: false },
  { en: "Good morning", rw: "Mwaramutse", pron: "mwah-rah-MOOT-seh", lit: "Said in the morning.", cat: "greetings", verify: false },
  { en: "Good evening", rw: "Mwiriwe", pron: "mwee-REE-weh", lit: "Said in the afternoon/evening.", cat: "greetings", verify: false },
  { en: "How are you?", rw: "Amakuru?", pron: "ah-mah-KOO-roo", lit: "Literally: “(any) news?” — the standard ‘how are you’.", cat: "greetings", verify: false },
  { en: "I'm fine / It's good", rw: "Ni meza", pron: "nee MEH-zah", lit: "Reply to “Amakuru?”. Literally “(it is) good”.", cat: "greetings", verify: false },
  { en: "Thank you", rw: "Murakoze", pron: "moo-rah-KOH-zeh", lit: "Polite ‘thank you’ (to one or more people).", cat: "greetings", verify: false },
  { en: "Thank you very much", rw: "Murakoze cyane", pron: "moo-rah-KOH-zeh CHAH-neh", lit: "‘cyane’ = very much.", cat: "greetings", verify: false },
  { en: "Please", rw: "Nyabuneka", pron: "nyah-boo-NEH-kah", lit: "Used to say ‘please’.", cat: "greetings", verify: false },
  { en: "Yes", rw: "Yego", pron: "YEH-go", lit: "", cat: "greetings", verify: false },
  { en: "No", rw: "Oya", pron: "OH-yah", lit: "", cat: "greetings", verify: false },
  { en: "Excuse me / Sorry", rw: "Mbabarira", pron: "mbah-bah-REE-rah", lit: "‘Forgive me’ — to get attention or apologise.", cat: "greetings", verify: true },
  { en: "Goodbye", rw: "Murabeho", pron: "moo-rah-BEH-ho", lit: "Said to someone staying/leaving.", cat: "greetings", verify: false },
  { en: "See you later", rw: "Turabonana", pron: "too-rah-boh-NAH-nah", lit: "‘We'll see each other’.", cat: "greetings", verify: true },
  { en: "What is your name?", rw: "Witwa nde?", pron: "WEET-wah n-DEH", lit: "Literally: ‘You are called who?’", cat: "greetings", verify: false },
  { en: "My name is ___", rw: "Nitwa ___", pron: "NEET-wah ___", lit: "‘I am called ___’.", cat: "greetings", verify: false },
  { en: "I don't understand", rw: "Sinumva", pron: "see-NOOM-vah", lit: "‘I don't hear/understand’.", cat: "greetings", verify: false },
  { en: "Do you speak English?", rw: "Uvuga Icyongereza?", pron: "oo-VOO-gah ee-chon-geh-REH-zah", lit: "‘Do you speak English?’", cat: "greetings", verify: true },
  { en: "I speak a little Kinyarwanda", rw: "Mvuga Ikinyarwanda gicye", pron: "m-VOO-gah ee-kin-yar-WAN-dah GEE-cheh", lit: "‘gicye’ = a little.", cat: "greetings", verify: true },
  { en: "No problem / It's okay", rw: "Nta kibazo", pron: "n-tah kee-BAH-zoh", lit: "Literally ‘no problem/question’.", cat: "greetings", verify: false },

  // ---------- Directions & getting around ----------
  { en: "Where is ___?", rw: "___ iri he?", pron: "___ EE-ree heh", lit: "‘iri he’ = is where. Word order: [thing] iri he?", cat: "directions", verify: true },
  { en: "Where is the toilet?", rw: "Ubwiherero buri he?", pron: "oo-bwee-heh-REH-roh BOO-ree heh", lit: "", cat: "directions", verify: true },
  { en: "Where is the market?", rw: "Isoko riri he?", pron: "ee-SOH-koh REE-ree heh", lit: "", cat: "directions", verify: true },
  { en: "How much does it cost to go to ___?", rw: "Kujya ___ ni angahe?", pron: "koo-JYAH ___ nee an-GAH-heh", lit: "‘Going to ___ is how much?’", cat: "directions", verify: true },
  { en: "I want to go to ___", rw: "Nshaka kujya ___", pron: "n-SHAH-kah koo-JYAH ___", lit: "‘I want to go (to) ___’.", cat: "directions", verify: true },
  { en: "Stop here, please", rw: "Hagarara hano, nyabuneka", pron: "hah-gah-RAH-rah HAH-no, nyah-boo-NEH-kah", lit: "Useful in a taxi/moto.", cat: "directions", verify: true },
  { en: "Left", rw: "Ibumoso", pron: "ee-boo-MOH-so", lit: "", cat: "directions", verify: true },
  { en: "Right", rw: "Iburyo", pron: "ee-BOO-ryo", lit: "", cat: "directions", verify: true },
  { en: "Straight ahead", rw: "Imbere", pron: "eem-BEH-reh", lit: "‘Forward / ahead’.", cat: "directions", verify: true },
  { en: "Here", rw: "Hano", pron: "HAH-no", lit: "", cat: "directions", verify: false },
  { en: "There", rw: "Hariya", pron: "hah-REE-yah", lit: "", cat: "directions", verify: false },
  { en: "Is it far?", rw: "Ni kure?", pron: "nee KOO-reh", lit: "‘kure’ = far.", cat: "directions", verify: false },
  { en: "It's near", rw: "Ni hafi", pron: "nee HAH-fee", lit: "‘hafi’ = near.", cat: "directions", verify: false },

  // ---------- Food & eating ----------
  { en: "I'm hungry", rw: "Ndashonje", pron: "n-dah-SHOHN-jeh", lit: "", cat: "food", verify: true },
  { en: "I'm thirsty", rw: "Mfite inyota", pron: "m-FEE-teh een-YOH-tah", lit: "Literally ‘I have thirst’.", cat: "food", verify: true },
  { en: "Water, please", rw: "Amazi, nyabuneka", pron: "ah-MAH-zee, nyah-boo-NEH-kah", lit: "‘amazi’ = water.", cat: "food", verify: false },
  { en: "I would like ___", rw: "Nifuza ___", pron: "nee-FOO-zah ___", lit: "‘I would like ___’.", cat: "food", verify: true },
  { en: "The bill, please", rw: "Fagitire, nyabuneka", pron: "fah-gee-TEE-reh, nyah-boo-NEH-kah", lit: "‘fagitire’ = bill (from French ‘facture’).", cat: "food", verify: true },
  { en: "It's delicious", rw: "Biraryoshye", pron: "bee-rah-RYOH-shyeh", lit: "‘It is tasty’.", cat: "food", verify: true },
  { en: "I'm full / I'm satisfied", rw: "Narahaze", pron: "nah-rah-HAH-zeh", lit: "", cat: "food", verify: true },
  { en: "Tea", rw: "Icyayi", pron: "ee-CHAH-yee", lit: "", cat: "food", verify: false },
  { en: "Coffee", rw: "Ikawa", pron: "ee-KAH-wah", lit: "", cat: "food", verify: false },
  { en: "Milk", rw: "Amata", pron: "ah-MAH-tah", lit: "", cat: "food", verify: false },
  { en: "Bread", rw: "Umugati", pron: "oo-moo-GAH-tee", lit: "", cat: "food", verify: false },
  { en: "Meat", rw: "Inyama", pron: "een-YAH-mah", lit: "", cat: "food", verify: false },
  { en: "I don't eat meat", rw: "Sinya inyama", pron: "seen-YAH een-YAH-mah", lit: "‘I don't eat meat’.", cat: "food", verify: true },

  // ---------- Shopping & money ----------
  { en: "How much is it?", rw: "Ni angahe?", pron: "nee an-GAH-heh", lit: "The key shopping phrase.", cat: "shopping", verify: false },
  { en: "That's expensive", rw: "Birahenze", pron: "bee-rah-HEN-zeh", lit: "‘It is expensive’.", cat: "shopping", verify: true },
  { en: "Reduce the price a little", rw: "Gabanya gato", pron: "gah-BAHN-yah GAH-toh", lit: "For bargaining. ‘Reduce a little’.", cat: "shopping", verify: true },
  { en: "I want to buy this", rw: "Nshaka kugura iki", pron: "n-SHAH-kah koo-GOO-rah EE-kee", lit: "", cat: "shopping", verify: true },
  { en: "I don't want it", rw: "Sinshaka", pron: "seen-SHAH-kah", lit: "‘I don't want (it)’.", cat: "shopping", verify: false },
  { en: "Do you have ___?", rw: "Ufite ___?", pron: "oo-FEE-teh ___", lit: "‘Do you have ___?’", cat: "shopping", verify: false },
  { en: "Money", rw: "Amafaranga", pron: "ah-mah-fah-RAN-gah", lit: "Also the word for Rwandan francs.", cat: "shopping", verify: false },
  { en: "Give me change, please", rw: "Mpa amasaranga asigaye, nyabuneka", pron: "m-PAH ah-mah-sah-RAN-gah ah-see-GAH-yeh", lit: "Rough; ‘give me the remaining money’.", cat: "shopping", verify: true },
  { en: "One", rw: "Rimwe", pron: "REEM-weh", lit: "Counting (1).", cat: "shopping", verify: false },
  { en: "Two", rw: "Kabiri", pron: "kah-BEE-ree", lit: "Counting (2).", cat: "shopping", verify: false },
  { en: "Three", rw: "Gatatu", pron: "gah-TAH-too", lit: "Counting (3).", cat: "shopping", verify: false },
];

let cards = [];
let progress = {};
let queue = [];
let currentIndex = 0;
let activeCats = new Set(CATEGORIES.map((c) => c.key));

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

function idOf(seed) {
  return seed.rw + "|" + seed.en;
}

function loadState() {
  const storedCards = localStorage.getItem(STORAGE_CARDS);
  const seedVersion = Number(localStorage.getItem(SEED_VERSION_KEY) || 0);

  if (storedCards) {
    cards = JSON.parse(storedCards);
  } else {
    cards = [];
  }

  if (seedVersion < SEED_VERSION) {
    const existingIds = new Set(cards.map((c) => idOf(c)));
    for (const seed of SEED_CARDS) {
      if (!existingIds.has(idOf(seed))) {
        cards.push({ id: uid(), ...seed });
      }
    }
    localStorage.setItem(SEED_VERSION_KEY, String(SEED_VERSION));
    saveCards();
  }

  const storedProgress = localStorage.getItem(STORAGE_PROGRESS);
  progress = storedProgress ? JSON.parse(storedProgress) : {};

  let changed = false;
  for (const card of cards) {
    if (!progress[card.id]) {
      progress[card.id] = { box: 0, due: todayStr() };
      changed = true;
    }
  }
  if (changed) saveProgress();
}

function saveCards() {
  localStorage.setItem(STORAGE_CARDS, JSON.stringify(cards));
}

function saveProgress() {
  localStorage.setItem(STORAGE_PROGRESS, JSON.stringify(progress));
}

function getDueQueue() {
  const today = todayStr();
  return cards
    .filter((c) => activeCats.has(c.cat || "greetings"))
    .filter((c) => progress[c.id] && progress[c.id].due <= today)
    .sort((a, b) => progress[a.id].box - progress[b.id].box);
}

function markCorrect(cardId) {
  const p = progress[cardId];
  p.box = Math.min(p.box + 1, BOX_LABELS.length - 1);
  p.due = addDays(todayStr(), BOX_INTERVAL_DAYS[p.box]);
  saveProgress();
}

function markWrong(cardId) {
  const p = progress[cardId];
  p.box = 0;
  p.due = todayStr();
  saveProgress();
}

function catLabel(key) {
  const c = CATEGORIES.find((c) => c.key === key);
  return c ? c.label : key || "General";
}

// --- Rendering ---

function renderBoxesOverview() {
  const counts = [0, 0, 0, 0, 0];
  for (const card of cards) {
    counts[progress[card.id].box]++;
  }
  const el = document.getElementById("boxesOverview");
  el.innerHTML = BOX_LABELS.map(
    (label, i) => `
      <div class="box-tile">
        <div class="box-count">${counts[i]}</div>
        <div class="box-name">${label}</div>
      </div>`
  ).join("");
}

function renderCatFilter() {
  const el = document.getElementById("catFilter");
  el.innerHTML = CATEGORIES.map(
    (c) => `<button class="chip${activeCats.has(c.key) ? " on" : ""}" data-cat="${c.key}">${c.label}</button>`
  ).join("");
}

function renderStudy() {
  renderBoxesOverview();
  queue = getDueQueue();
  currentIndex = 0;
  renderCurrentCard();
}

function renderCurrentCard() {
  const noCardsEl = document.getElementById("noCards");
  const cardEl = document.getElementById("card");

  if (currentIndex >= queue.length) {
    noCardsEl.hidden = false;
    cardEl.hidden = true;
    return;
  }

  noCardsEl.hidden = true;
  cardEl.hidden = false;

  const card = queue[currentIndex];
  const p = progress[card.id];

  document.getElementById("cardBoxLabel").textContent = BOX_LABELS[p.box];
  document.getElementById("cardCounter").textContent = `${currentIndex + 1} / ${queue.length}`;
  document.getElementById("cardCat").textContent = catLabel(card.cat);
  document.getElementById("cardVerify").hidden = !card.verify;
  document.getElementById("cardFront").textContent = card.en;
  document.getElementById("cardBack").textContent = card.rw;
  document.getElementById("cardPron").textContent = card.pron ? `[${card.pron}]` : "";
  document.getElementById("cardLit").textContent = card.lit || "";

  document.getElementById("cardBackWrap").hidden = true;
  document.getElementById("showAnswerBtn").hidden = false;
  document.getElementById("judgeButtons").hidden = true;
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();
  const pick =
    voices.find((v) => /rw|kiny/i.test(v.lang)) ||
    voices.find((v) => /sw/i.test(v.lang)) ||
    voices.find((v) => /en/i.test(v.lang));
  if (pick) u.voice = pick;
  u.rate = 0.85;
  window.speechSynthesis.speak(u);
}

function renderManage() {
  const listEl = document.getElementById("cardList");
  listEl.innerHTML = cards
    .map((card) => {
      const p = progress[card.id];
      return `
        <div class="card-row" data-id="${card.id}">
          <div class="row-text">
            <div class="row-front">${escapeHtml(card.en)}</div>
            <div class="row-back">${escapeHtml(card.rw)}${card.pron ? " &middot; [" + escapeHtml(card.pron) + "]" : ""}</div>
          </div>
          <span class="row-box">${BOX_LABELS[p.box]}</span>
          <button class="row-delete" title="Delete">✕</button>
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
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === view);
  });
  document.querySelectorAll(".view").forEach((section) => {
    section.classList.toggle("active", section.id === `view-${view}`);
  });
  if (view === "study") renderStudy();
  if (view === "manage") renderManage();
}

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => switchView(btn.dataset.view));
});

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

document.getElementById("showAnswerBtn").addEventListener("click", () => {
  document.getElementById("cardBackWrap").hidden = false;
  document.getElementById("showAnswerBtn").hidden = true;
  document.getElementById("judgeButtons").hidden = false;
});

document.getElementById("speakBtn").addEventListener("click", () => {
  const card = queue[currentIndex];
  if (card) speak(card.rw);
});

document.getElementById("correctBtn").addEventListener("click", () => {
  const card = queue[currentIndex];
  markCorrect(card.id);
  currentIndex++;
  renderBoxesOverview();
  renderCurrentCard();
});

document.getElementById("wrongBtn").addEventListener("click", () => {
  const card = queue[currentIndex];
  markWrong(card.id);
  currentIndex++;
  renderBoxesOverview();
  renderCurrentCard();
});

document.getElementById("addCardForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const enInput = document.getElementById("inputFront");
  const rwInput = document.getElementById("inputBack");
  const en = enInput.value.trim();
  const rw = rwInput.value.trim();
  if (!en || !rw) return;

  const id = uid();
  cards.push({ id, en, rw, pron: "", lit: "", cat: "greetings", verify: false });
  progress[id] = { box: 0, due: todayStr() };
  saveCards();
  saveProgress();

  enInput.value = "";
  rwInput.value = "";
  renderManage();
});

document.getElementById("cardList").addEventListener("click", (e) => {
  if (!e.target.classList.contains("row-delete")) return;
  const row = e.target.closest(".card-row");
  const id = row.dataset.id;
  cards = cards.filter((c) => c.id !== id);
  delete progress[id];
  saveCards();
  saveProgress();
  renderManage();
});

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => {};
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}

// --- Init ---
loadState();
renderCatFilter();
renderStudy();
