/*
 * ══════════════════════════════════════════════════
 *   Eid Greeting — Visitor Log (Google Apps Script)
 * ══════════════════════════════════════════════════
 *
 *   HOW TO SET UP:
 *
 *   1. Go to https://sheets.google.com → Create a new blank spreadsheet
 *   2. Name it "Eid Visitors Log"
 *   3. In Row 1, add these headers:
 *      A1: Timestamp
 *      B1: IP Address
 *      C1: City
 *      D1: Region
 *      E1: Country
 *      F1: Device
 *      G1: Browser
 *      H1: Screen Size
 *      I1: Language
 *      J1: Referrer
 *      K1: Consented
 *      L1: User Agent
 *
 *   4. Go to Extensions → Apps Script
 *   5. Delete any code in the editor
 *   6. Paste ALL the code below (from "function doPost" to the end)
 *   7. Click Save (Ctrl+S)
 *   8. Click "Deploy" → "New deployment"
 *   9. Click the gear icon → Select "Web app"
 *  10. Set:
 *        - Description: "Eid Visitor Log"
 *        - Execute as: "Me"
 *        - Who has access: "Anyone"
 *  11. Click "Deploy"
 *  12. Click "Authorize access" → Choose your Google account → Allow
 *  13. Copy the Web App URL (looks like: https://script.google.com/macros/s/xxxxx/exec)
 *  14. Open index.html and replace the WEBHOOK_URL value with your URL
 *
 * ══════════════════════════════════════════════════
 */

function doPost(e) {
  try {
    var lock = LockService.getScriptLock();
    lock.tryLock(10000);

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date().toLocaleString('en-GB', { timeZone: 'Asia/Riyadh' }),
      data.ip || 'N/A',
      data.city || 'N/A',
      data.region || 'N/A',
      data.country || 'N/A',
      data.device || 'N/A',
      data.browser || 'N/A',
      data.screenSize || 'N/A',
      data.language || 'N/A',
      data.referrer || 'Direct',
      data.consented || 'No',
      data.userAgent || 'N/A'
    ]);

    lock.releaseLock();

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput('Eid Visitor Log — Endpoint Active');
}
