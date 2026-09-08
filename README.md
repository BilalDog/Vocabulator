# Vocabulator

A simple flashcard app for learning everyday Kinyarwanda sentences, using the
**"5 Fächer" (5-box) Leitner system**.

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
today. You flip the card yourself to see the answer, then judge whether you
knew it:

- **✓ Knew it** — the card advances to the next box (a longer interval).
- **✗ Didn't know it** — the card goes back to Box 1 (daily review).

Progress is stored in the browser's `localStorage`, so it persists between
visits on the same device/browser.

## Running it

No build step or server required — just open `index.html` in a browser.

## Managing cards

Use the "Manage Cards" tab to add your own Kinyarwanda phrases (with English
meaning) or delete existing ones. The built-in seed list has ~25 common
everyday phrases to get started; feel free to correct or extend them since
translations were curated without a native-speaker review.
