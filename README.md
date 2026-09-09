# Vocabulator

A flashcard app for learning vocabulary, using the **"5 Fächer" (5-box)
Leitner system**. Packaged as a real installable Android app (no hosting
required) via [Capacitor](https://capacitorjs.com/).

## Languages

English is always the known language; pick a target language from the ☰
menu in the top right:

- **Kinyarwanda** — ~55 everyday phrases (greetings, directions, food,
  shopping), curated by hand.
- **German (A1)** — the official [Goethe-Zertifikat A1 "Start Deutsch
  1"](https://www.goethe.de/) Wortliste (the certification word list),
  ~800 entries, extracted directly from the source document with each
  official example sentence kept as a usage note, plus a couple dozen
  common words found missing after cross-checking three real exam papers
  (the Modellsatz and two Übungssätze). Its general-vocab entries are
  split into three category chips — **Level 1**, **Level 2**, **Level 3**
  — by everyday frequency, so you're not facing the whole list at once;
  work through Level 1 first, then expand. **Zahlen**, **Farben**, and
  **Himmelsrichtungen** are the document's own small supplementary word
  groups; **Zeit** collects that same list's other time-related words —
  weekdays, months, seasons, seconds/minutes/days/weeks/years, and parts
  of the day; **Maße & Gewichte** and **Land** cover its measurement units
  and country/nationality words. A **Sätze** category holds ~44 short,
  simple sentences for the
  exam's **Sprechen** (speaking) part — self-introduction lines, sample
  information questions, and polite requests — modeled on the actual
  Kandidatenblätter cue cards (topics and pictures) from those same three
  exam papers, so they're realistic things to actually say out loud, not
  just vocabulary in isolation.

Vocabulary is stored as one list of English entries, each optionally
carrying a translation per language — adding a third language later is
just new translation data, not a new app structure.

## How it works

Cards live in one of 5 boxes, each with a review interval:

| Box | Interval |
|-----|----------|
| 1   | Daily |
| 2   | Every 2 days |
| 3   | Every week |
| 4   | Every 2 weeks |
| 5   | Every month |

Every card starts in Box 1. The boxes are progress labels, not a lock —
every card is always available to study, any time, like a real stack of
flashcards in your hand. Progress is tracked separately per language, so
knowing a word in Kinyarwanda doesn't affect its German box.

A toggle above the card lets you pick the direction: **English → target
language** (default — recall the translation) or **target language →
English** (recognize the meaning instead); your choice is remembered. Tap
"Show answer" to reveal it (with a pronunciation guide where available,
and a usage/example note). A small 🔊 button sits next to each side's text
and plays it out loud when that side's language can actually be spoken —
English and German use the device's built-in text-to-speech voices;
Kinyarwanda has no reliable TTS voice on any platform, so it only plays
from a real recording bundled with an entry (`translations.rw.audio`) and
the button stays hidden until one exists for that word. Since the German
**Sätze** are all phrased with the formal "Sie" (that's how the actual
exam is conducted), about half of them also show an informal "du"
alternative right underneath once revealed, for sentences that actually
address the listener (e.g. "Können Sie...?" also shows "Informal: Kannst
du...?") — sentences with no listener-directed pronoun don't get one,
since there's no Sie/du distinction to make there. You judge yourself:

- **✓ Knew it** — the card advances to the next box.
- **✗ Didn't know it** — the card goes back to Box 1.

Tap the **☆** star in the top-right of the card to mark it — it fills in
(**★**) and the word also becomes available under a synthetic
**"★ Markiert"** category chip, alongside its normal category (selecting
either one is enough to bring it into the queue, not both at once), so
you can pull together a personal study set of tricky words regardless of
which category they're actually in.

Cards are grouped into categories — filter which ones show up in your
study queue via the chips at the top (categories are specific to whichever
language you're studying; "Hide filters" tucks the chips away if you don't
need them). The box/progress overview lives in the ☰ menu — tap any of the
5 tiles (Daily / 2 Days / 1 Week / 2 Weeks / 1 Month) to narrow the queue
to just the cards currently sitting in that box; tap it again to go back
to the default. A tile shows a small **!** badge when at least one card in
it is due for review (its last interval has elapsed) — this is just a
reminder, not a lock, since every card stays studyable regardless.

Without tapping a tile, the default queue only pulls from your lowest
(most due) box with cards in it — finishing it doesn't quietly roll on
into the next box's cards mid-session; moving on to a later box is always
a deliberate tap on its tile, not something that just happens once the
current one runs out.

Progress is stored on-device (`localStorage` inside the app's WebView), so
it persists between launches.

## Managing cards

Open **Manage Cards** from the ☰ menu to add, edit, or delete entries. By
default the list shows every entry across every language, each with a
badge for the languages it already has a translation for; a **search**
box filters by English or any translation's text, and its own **language**
and **category** filter chips narrow the list further — independent of
whatever you're actively studying. Picking a specific language chip also
switches each row to show that language's own text (with the English
gloss underneath) instead of always leading with English. Tapping the
edit (✎) icon on a row opens one section per language — fill in a section
that's empty to add that language's translation to an existing entry,
which is the way to backfill entries when a new language is added later.
"+ Add card" opens that same per-language form for a new entry, with its
category chosen from a dropdown of existing categories.

Editing or deleting one of the built-in words sticks permanently, even
across future word-list updates: an edited entry is never touched by a
later update again (a fresh word list can't overwrite your correction),
and a deleted one is never brought back. Only newly-added words from a
future update show up alongside your changes.

## Get the Android APK

The web app (in `www/`) is bundled directly into a native Android app with
Capacitor — everything runs locally on the device, offline, with **no
hosting needed**. A GitHub Actions workflow builds the actual `.apk` file
(this repo's sandboxed dev environment can't reach the Android SDK's
download servers, but GitHub's own CI runners can):

1. Push to this repo (already done for this branch) — this triggers the
   **Build Android APK** workflow automatically. You can also trigger it
   manually from the **Actions** tab (`workflow_dispatch`).
2. Open the repo on GitHub → **Actions** tab → the latest **Build Android
   APK** run → download the **vocabulator-debug-apk** artifact (a `.zip`
   containing `app-debug.apk`).
3. Transfer `app-debug.apk` to your Android phone (or open the Actions page
   directly in your phone's browser and download it there).
4. Tap the file to install. Android will ask you to allow installs from
   that source (Settings → apps → "Install unknown apps") the first time —
   allow it, then install.
5. Launch "Vocabulator" from your app drawer. It works fully offline from
   then on.

This is a debug build (unsigned for the Play Store, fine for installing
directly on your own device). Building it again after editing the seed
data just means pushing — the workflow re-runs and produces a fresh APK,
always signed with the same committed debug key
(`android/app/debug.keystore`) so future installs update in place instead
of conflicting.

### Building the APK yourself instead

If you have Android Studio (or just the Android SDK + a JDK) on your own
machine, you don't need GitHub Actions at all:

```bash
npm install
npx cap sync android
cd android
./gradlew assembleDebug
# output: android/app/build/outputs/apk/debug/app-debug.apk
```

## Running the web version locally

No build step required for the plain web app. To test PWA features (install
prompt, offline support) serve it over HTTP rather than opening the file
directly, e.g.:

```bash
cd www
python3 -m http.server 8080
```

then open `http://localhost:8080` in your browser. On Android Chrome this
can also be "installed" as a PWA (⋮ menu → "Install app") if you host it
somewhere over HTTPS — but the APK above is the no-hosting option.

## Project structure

- `www/app.js` — app logic (Leitner boxes, menu/navigation, rendering).
- `www/data/rw-seed.js`, `www/data/de-a1-seed.js` — seed vocabulary per
  language, each `window.<X>_SEED_ENTRIES`, merged into the entry list on
  first load (bump `SEED_VERSION` in `app.js` after editing a seed file so
  existing installs pick up the changes).
- `android/`, `capacitor.config.json`, `package.json` — the Capacitor
  Android wrapper (see "Get the Android APK" above).
