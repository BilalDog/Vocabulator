# Vocabulator

A flashcard app for learning vocabulary, using the **"5 Fächer" (5-box)
Leitner system**. Packaged as a real installable Android app (no hosting
required) via [Capacitor](https://capacitorjs.com/).

## Languages

English is always the known language; pick a target language from the ☰
menu in the top right:

- **Kinyarwanda** — ~55 everyday phrases (greetings, directions, food,
  shopping), curated by hand. Entries tagged **"verify"** haven't been
  confirmed by a fluent speaker yet — double-check them before relying on
  them.
- **German (A1)** — the official [Goethe-Zertifikat A1 "Start Deutsch
  1"](https://www.goethe.de/) Wortliste (the certification word list),
  ~750 entries, extracted directly from the source document with each
  official example sentence kept as a usage note. Its ~685 general-vocab
  entries are split into three category chips — **Tier 1 (Essential)**,
  **Tier 2 (Common)**, **Tier 3 (Extended)** — by everyday frequency, so
  you're not facing the whole list at once; work through Tier 1 first,
  then expand. The other categories (Zahlen, Wochentage, Monate, ...) are
  the document's own small supplementary word groups.

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
and a usage/example note). You judge yourself:

- **✓ Knew it** — the card advances to the next box.
- **✗ Didn't know it** — the card goes back to Box 1.

Cards are grouped into categories — filter which ones show up in your
study queue via the chips at the top (categories are specific to whichever
language you're studying; "Hide filters" tucks the chips away if you don't
need them). The box/progress overview lives in the ☰ menu — tap any of the
5 tiles (Daily / 2 Days / 1 Week / 2 Weeks / 1 Month) to narrow the queue
to just the cards currently sitting in that box; tap it again to go back
to studying everything. A tile shows a small **!** badge when at least one
card in it is due for review (its last interval has elapsed) — this is
just a reminder, not a lock, since every card stays studyable regardless.

Progress is stored on-device (`localStorage` inside the app's WebView), so
it persists between launches.

## Managing cards

Open **Manage Cards** from the ☰ menu to add, edit, or delete entries. The
list shows every entry (regardless of which language you're currently
studying) with a badge for each language it already has a translation for.
Tapping the edit (✎) icon on a row shows one section per language — fill
in a section that's empty to add that language's translation to an
existing entry, which is the way to backfill entries when a new language
is added later. Adding a new card via the form at the top adds it for
whichever language is currently active.

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
