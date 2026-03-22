# 🌙 Eid Mubarak Greeting Project

A beautiful, interactive, and fully responsive web application designed to send personalized Eid greetings. The project combines modern web technologies with elegant Arabic typography and animations to create a memorable experience for visitors.

## ✨ Features

- **🌠 Animated Entry Portal (`index.html`)**
  - Stunning starry night background with twinkling stars.
  - Interactive "Enter" button leading to the main greeting.
  - Automatically captures visitor information (IP, Location, Device, Browser) and logs it securely to a Google Sheet via a webhook.

- **🎉 Main Greeting Card (`eid-mubarak.html`)**
  - Rich UI with animated glowing crescent, floating lanterns, and shimmering text.
  - High-quality Arabic calligraphy (`Scheherazade New`, `Amiri`, and `Tajawal` fonts).
  - Built-in music player featuring an Eid song (`eid-song.m4a`).
  - Seamless responsive design optimized for mobile and desktop screens.

- **📱 QR Code Generator (`qrcard.html`)**
  - Automatically generates a custom QR code linking to the Eid greeting (`eid.eyadai.dev`).
  - Allows users to easily scan and open the greeting on their devices.
  - Provides a one-click "Download as Image" button to save the QR card as a PNG for easy sharing.

- **📊 Backend Logging (`google-apps-script.js`)**
  - A lightweight, serverless Google Apps Script backend.
  - Logs visitor details silently into a Google Spreadsheet the moment they enter the site.

## 🚀 Getting Started

1. **Host the Website:**
   Upload all HTML, image (`.jpg`), and audio (`.m4a`) files to any web hosting service (e.g., Vercel, Netlify, GitHub Pages, or a custom server like `eyadai.dev`).

2. **Configure the Google Apps Script Webhook:**
   - Create a new Google Spreadsheet named "Eid Visitors Log" with appropriate column headers (Timestamp, IP, City, Region, etc.).
   - Open Apps Script from the spreadsheet and paste the contents of `google-apps-script.js`.
   - Deploy as a "Web App" accessible by "Anyone".
   - Copy the webhook URL and paste it into the `index.html` file (under the `WEBHOOK_URL` constant).

3. **Share the Greeting:**
   Use the `qrcard.html` page to generate, download, and share the QR code image with family and friends!

## 🛠️ Built With

- **HTML5 & CSS3:** For structure and beautiful styling, animations, and gradients.
- **Vanilla JavaScript:** For interactive elements, visitor IP fetching (via `ipapi.co`), QR generation, and webhook requests.
- **Google Apps Script:** As a serverless backend for visitor tracking.
- **Libraries Included:** `qr-code-styling` (for custom QR codes) and `html-to-image` (for downloading the QR card).

## 📝 License

Developed by **Eyad AI**.
All rights reserved © 2026.
