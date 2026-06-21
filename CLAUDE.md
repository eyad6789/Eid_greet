# Eid_Greeting

Static Arabic (RTL) Eid al-Fitr greeting website with visitor logging; finished seasonal project (built March 2026), deployed at https://eid.eyadai.dev/.

## Stack

- Pure static HTML5/CSS3 + vanilla JavaScript — no build system, no package manager, no dependencies to install.
- Google Apps Script (`google-apps-script.js`) as serverless backend: logs visitors to a Google Sheet via webhook POST.
- CDN libraries (loaded in `qrcard.html` only): `qr-code-styling@1.5.0` (unpkg), `html-to-image@1.11.11` (cdnjs).
- Google Fonts: Scheherazade New, Amiri, Tajawal (Arabic typography).
- External API: `ipapi.co/json/` for visitor IP/geolocation (called from `index.html`).

## Structure

Flat repo, no subdirectories. All files at root:

| File | Purpose |
|---|---|
| `index.html` | Entry point. Consent/entry portal; fetches visitor info (ipapi.co), POSTs it to the Apps Script webhook (`WEBHOOK_URL` const ~line 566), then redirects to `eid-mubarak.html` |
| `eid-mubarak.html` | Main greeting card (~2,900 lines, 89 KB, all CSS/JS inline). Crescent/lantern animations, plays `eid-song.m4a` |
| `qrcard.html` | QR-code card generator pointing to https://eid.eyadai.dev/; downloads card as PNG |
| `google-apps-script.js` | Backend code to paste into Google Apps Script (doPost appends row to "Eid Visitors Log" sheet). Not served to browsers |
| `eid-song.m4a` | 4 MB background audio used by `eid-mubarak.html` — never read it |
| `photo_2026-03-20_00-37-11.jpg` | 153 KB photo, referenced by NO page (dead asset) |

## Commands

- No install/build/test steps — open HTML files directly or serve statically: `python3 -m http.server 8000`
- No tests exist.
- Deploy: upload all HTML + `.m4a` + `.jpg` to any static host (site lives at eid.eyadai.dev).
- Git remote: https://github.com/eyad6789/Eid_greet.git

## Conventions & Gotchas

- All pages are Arabic RTL: keep `lang="ar" dir="rtl"` on `<html>` and Tajawal/Amiri/Scheherazade fonts.
- The Apps Script webhook URL is hardcoded in `index.html` (`WEBHOOK_URL`); changing the Apps Script deployment requires updating that constant.
- Each page duplicates the same CSS theme variables (`--purple-deep`, `--gold`, etc.) inline — no shared stylesheet; edits must be repeated per file.
- `google-apps-script.js` runs only inside Google Apps Script (uses `SpreadsheetApp`, `LockService`) — do not lint/run it as Node.
- Visitor tracking collects IP, location, device, browser into a Google Sheet; treat as privacy-sensitive.
- No `.gitignore` in the repo.

## Do NOT read (large/irrelevant; also denied in .claude/settings.json)

- `eid-song.m4a` (4 MB binary audio)
- `photo_2026-03-20_00-37-11.jpg` (binary image)
- `.git/`
