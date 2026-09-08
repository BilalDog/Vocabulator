# Vocabulator

A flashcard app for learning everyday Kinyarwanda phrases, using the
**"5 Fächer" (5-box) Leitner system**. Packaged as a real installable
Android app (no hosting required) via [Capacitor](https://capacitorjs.com/).

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
flashcards in your hand. A toggle above the card lets you pick the
direction: **English → Kinyarwanda** (default — recall the Kinyarwanda
phrase) or **Kinyarwanda → English** (recognize the meaning instead); your
choice is remembered. Tap "Show answer" to reveal it (with a rough
pronunciation guide and a usage/literal note). You judge yourself:

- **✓ Knew it** — the card advances to the next box.
- **✗ Didn't know it** — the card goes back to Box 1.

Cards are grouped into categories (Greetings, Directions, Food, Shopping) —
filter which ones show up in your study queue via the chips at the top. Tap
any of the 5 box tiles (Daily / 2 Days / 1 Week / 2 Weeks / 1 Month) to
narrow the queue to just the cards currently sitting in that box; tap it
again to go back to studying everything. Phrases tagged **"verify"**
haven't been confirmed by a fluent speaker yet — double-check them before
relying on them.

Progress is stored on-device (`localStorage` inside the app's WebView), so
it persists between launches.

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
directly on your own device). Building it again after editing phrases in
`www/app.js` just means pushing — the workflow re-runs and produces a fresh
APK, always signed with the same committed debug key
(`android/app/debug.keystore`) so future installs update in place instead of
conflicting.

> **One-time step:** if you already installed an APK built *before* this
> fixed keystore was added, Android will refuse to install the new one over
> it ("app not installed as package conflicts with an existing package") —
> that older build was signed with a random, throwaway key. Uninstall the
> old Vocabulator app once, then install the new APK. Every build from here
> on shares the same signing key, so this only needs doing once.

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

## Managing cards

Use the "Manage Cards" tab in the app to add your own phrases or delete
existing ones. The built-in seed list has ~55 everyday Kinyarwanda phrases
across greetings, directions, food, and shopping. Edit `www/app.js`
directly to change the seed list (`SEED_CARDS`).
