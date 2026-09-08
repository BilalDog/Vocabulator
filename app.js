// --- Leitner "5 Fächer" box system ---
// Box 0: Daily, Box 1: 2 Days, Box 2: 1 Week, Box 3: 2 Weeks, Box 4: 1 Month
const BOX_LABELS = ["Daily", "2 Days", "1 Week", "2 Weeks", "1 Month"];
const BOX_INTERVAL_DAYS = [1, 2, 7, 14, 30];

const STORAGE_CARDS = "vocabulator_cards";
const STORAGE_PROGRESS = "vocabulator_progress";

const SEED_CARDS = [
  { front: "Muraho", back: "Hello" },
  { front: "Mwaramutse", back: "Good morning" },
  { front: "Mwiriwe", back: "Good afternoon / evening" },
  { front: "Amakuru?", back: "How are you? (What's new?)" },
  { front: "Ni meza", back: "I'm fine / It's good" },
  { front: "Murakoze", back: "Thank you" },
  { front: "Murakoze cyane", back: "Thank you very much" },
  { front: "Nta kibazo", back: "No problem" },
  { front: "Yego", back: "Yes" },
  { front: "Oya", back: "No" },
  { front: "Mbabarira", back: "Sorry / Excuse me" },
  { front: "Witwa nde?", back: "What is your name?" },
  { front: "Nitwa...", back: "My name is..." },
  { front: "Ubu se wowe?", back: "And you? (in reply)" },
  { front: "Nyabuneka", back: "Please" },
  { front: "Sinumva", back: "I don't understand" },
  { front: "Waba uvuga icyongereza?", back: "Do you speak English?" },
  { front: "Ndashaka amazi", back: "I want water" },
  { front: "Bingahe?", back: "How much is it?" },
  { front: "Aho ni he?", back: "Where is it?" },
  { front: "Mfasha", back: "Help me" },
  { front: "Ijoro ryiza", back: "Good night" },
  { front: "Murabeho", back: "Goodbye" },
  { front: "Turabonana", back: "See you later" },
  { front: "Ndagukunda", back: "I love you" },
];

let cards = [];
let progress = {};
let queue = [];
let currentIndex = 0;
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

function loadState() {
  const storedCards = localStorage.getItem(STORAGE_CARDS);
  if (storedCards) {
    cards = JSON.parse(storedCards);
  } else {
    cards = SEED_CARDS.map((c) => ({ id: uid(), ...c }));
    saveCards();
  }

  const storedProgress = localStorage.getItem(STORAGE_PROGRESS);
  progress = storedProgress ? JSON.parse(storedProgress) : {};

  // Ensure every card has progress; new cards start in Box 0, due today.
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
  document.getElementById("cardFront").textContent = card.front;
  document.getElementById("cardBack").textContent = card.back;

  document.getElementById("cardBackWrap").hidden = true;
  document.getElementById("showAnswerBtn").hidden = false;
  document.getElementById("judgeButtons").hidden = true;
}

function renderManage() {
  const listEl = document.getElementById("cardList");
  listEl.innerHTML = cards
    .map((card) => {
      const p = progress[card.id];
      return `
        <div class="card-row" data-id="${card.id}">
          <div class="row-text">
            <div class="row-front">${escapeHtml(card.front)}</div>
            <div class="row-back">${escapeHtml(card.back)}</div>
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
  currentView = view;
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

document.getElementById("showAnswerBtn").addEventListener("click", () => {
  document.getElementById("cardBackWrap").hidden = false;
  document.getElementById("showAnswerBtn").hidden = true;
  document.getElementById("judgeButtons").hidden = false;
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
  const frontInput = document.getElementById("inputFront");
  const backInput = document.getElementById("inputBack");
  const front = frontInput.value.trim();
  const back = backInput.value.trim();
  if (!front || !back) return;

  const id = uid();
  cards.push({ id, front, back });
  progress[id] = { box: 0, due: todayStr() };
  saveCards();
  saveProgress();

  frontInput.value = "";
  backInput.value = "";
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

// --- Init ---
loadState();
renderStudy();
