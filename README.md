# Vocabulator

A flashcard app for learning everyday Kinyarwanda phrases, using the
**"5 Fächer" (5-box) Leitner system**. Installable as a PWA on Android (and
other platforms).

## How it works

Cards live in one of 5 boxes, each with a review interval:

| Box | Interval |
|-----|----------|
| 1   | Daily |
| 2   | Every 2 days |
| 3   | Every week |
| 4   | Every 2 weeks |
| 5   | Every month |

Every card starts in Box 1. Each study session shows the cards that are due
today, prompting you in **English**. You try to recall the Kinyarwanda, then
tap "Show answer" to reveal it (with a rough pronunciation guide, a 🔊
listen button, and a usage/literal note). You judge yourself:

- **✓ Knew it** — the card advances to the next box (a longer interval).
- **✗ Didn't know it** — the card goes back to Box 1 (daily review).

Cards are grouped into categories (Greetings, Directions, Food, Shopping) —
filter which ones show up in your study queue via the chips at the top.
Phrases tagged **"verify"** haven't been confirmed by a fluent speaker yet —
double-check them before relying on them.

Progress is stored in the browser's `localStorage`, so it persists between
visits on the same device/browser.

## Installing on Android

The app is a Progressive Web App (manifest + service worker + icons), so
Chrome on Android can install it like a native app — but this only works
when the site is served over **HTTPS** (or `localhost`); it will **not**
offer to install when opened directly from a `file://` path.

Easiest way to get an HTTPS URL for this repo:

1. On GitHub: **Settings → Pages** → set source to the `main` branch (root),
   save. GitHub gives you a URL like
   `https://<your-username>.github.io/Vocabulator/`.
2. Open that URL in Chrome on your Android phone.
3. Tap the **⋮** menu → **"Install app"** (or you'll see an automatic
   "Add to Home screen" banner). Confirm.
4. The app now launches full-screen from your home screen like any other
   installed app, and works offline after the first load.

(Any other static host — Netlify, Vercel, Cloudflare Pages, etc. — works the
same way, since there's no backend/build step required.)

## Running locally

No build step required. To test PWA features (install prompt, offline
support) you need to serve it over HTTP rather than opening the file
directly, e.g.:

```bash
python3 -m http.server 8080
```

then open `http://localhost:8080` in your browser.

## Managing cards

Use the "Manage Cards" tab to add your own phrases or delete existing ones.
The built-in seed list has ~55 everyday Kinyarwanda phrases across
greetings, directions, food, and shopping.
