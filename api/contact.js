// api/contact.js
// Vercel Serverless Function — Contact Form Handler (Nodemailer + Gmail SMTP)
//
// ─── Production setup (Vercel Dashboard → Settings → Environment Variables) ───
//   GMAIL_USER  — your Gmail address, e.g. procardan1@gmail.com
//   GMAIL_PASS  — Gmail App Password (NOT your login password).
//                 Generate at: https://myaccount.google.com/apppasswords
//                 (Requires 2-Step Verification enabled on the account.)
//
// ─── Dev / Mock Mode ─────────────────────────────────────────────────────────
//   If GMAIL_USER or GMAIL_PASS are absent, the function runs in mock mode:
//   it logs the payload to the console, simulates a 1 s delay, and returns
//   200 OK — so the frontend demo works seamlessly without any credentials.
//
// ─── Optional overrides ──────────────────────────────────────────────────────
//   CONTACT_TO_EMAIL   — recipient (default: procardan1@gmail.com)

import nodemailer from 'nodemailer';

// ─── Config ───────────────────────────────────────────────────────────────────
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;
const TO_EMAIL   = process.env.CONTACT_TO_EMAIL || 'procardan1@gmail.com';

const IS_MOCK_MODE = !GMAIL_USER || !GMAIL_PASS;

// ─── Rate limiter (in-memory, resets per cold-start) ─────────────────────────
const ipTimestamps = new Map();
const RATE_LIMIT_MS  = 60_000; // window: 1 minute
const RATE_LIMIT_MAX = 3;      // max requests per IP per window

function isRateLimited(ip) {
  const now  = Date.now();
  const hits = (ipTimestamps.get(ip) || []).filter(t => now - t < RATE_LIMIT_MS);
  if (hits.length >= RATE_LIMIT_MAX) return true;
  hits.push(now);
  ipTimestamps.set(ip, hits);
  return false;
}

// ─── Nodemailer transporter (created once per warm instance) ─────────────────
let transporter = null;

function getTransporter() {
  if (transporter) return transporter;
  transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // SSL
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS,
    },
  });
  return transporter;
}

// ─── HTML email template ─────────────────────────────────────────────────────
function buildEmailHtml(name, phone, message) {
  const safeMsg = message.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px;">
      <h2 style="color: #e01e2b; margin-bottom: 4px;">Nowe zapytanie ofertowe</h2>
      <p style="font-size: 12px; color: #999; margin-top: 0;">
        Źródło: procardan.pl — formularz kontaktowy
      </p>
      <hr style="border: 0; border-top: 1px solid #eee; margin: 16px 0;" />

      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 12px; background: #f9f9f9; font-weight: bold; width: 160px; border: 1px solid #eee;">
            Imię i nazwisko
          </td>
          <td style="padding: 8px 12px; border: 1px solid #eee;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; background: #f9f9f9; font-weight: bold; border: 1px solid #eee;">
            Numer telefonu
          </td>
          <td style="padding: 8px 12px; border: 1px solid #eee;">
            <a href="tel:${phone}" style="color: #e01e2b;">${phone}</a>
          </td>
        </tr>
      </table>

      <div style="margin-top: 16px;">
        <p style="font-weight: bold; margin-bottom: 6px;">Wiadomość:</p>
        <div style="background: #f9f9f9; border-left: 4px solid #e01e2b; padding: 12px 16px; white-space: pre-wrap;">
          ${safeMsg}
        </div>
      </div>

      <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
      <p style="font-size: 11px; color: #aaa;">
        Wiadomość wysłana automatycznie z serwisu procardan.pl
      </p>
    </div>
  `;
}

// ─── Main handler ─────────────────────────────────────────────────────────────
export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting
  const clientIp = req.headers['x-forwarded-for']?.split(',')[0]?.trim()
    || req.socket?.remoteAddress
    || 'unknown';
  if (isRateLimited(clientIp)) {
    return res.status(429).json({
      error: 'Zbyt wiele zapytań. Poczekaj chwilę i spróbuj ponownie.',
    });
  }

  const { name, phone, message, botcheck } = req.body ?? {};

  // ── Honeypot check ─────────────────────────────────────────────────────────
  if (botcheck) {
    // Silently succeed — confuses automated bots without revealing the trap
    return res.status(200).json({ success: true });
  }

  // ── Input validation ───────────────────────────────────────────────────────
  const safeName    = String(name    ?? '').trim();
  const safePhone   = String(phone   ?? '').trim();
  const safeMessage = String(message ?? '').trim();

  if (!safeName || !safePhone || !safeMessage) {
    return res.status(400).json({ error: 'Wszystkie pola są wymagane.' });
  }
  if (safeName.length > 100 || safePhone.length > 30 || safeMessage.length > 2000) {
    return res.status(400).json({ error: 'Dane wejściowe są za długie.' });
  }

  // ── DEV / MOCK MODE ────────────────────────────────────────────────────────
  if (IS_MOCK_MODE) {
    console.log('=================================================');
    console.log('[contact] ⚙️  MOCK MODE — GMAIL_USER/GMAIL_PASS not set.');
    console.log('[contact] Simulating email dispatch. Payload:');
    console.log(`  To:      ${TO_EMAIL}`);
    console.log(`  Name:    ${safeName}`);
    console.log(`  Phone:   ${safePhone}`);
    console.log(`  Message: ${safeMessage}`);
    console.log('=================================================');

    // Simulate realistic network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return res.status(200).json({ success: true, mock: true });
  }

  // ── PRODUCTION — Send via Gmail SMTP ──────────────────────────────────────
  try {
    const smtp = getTransporter();

    await smtp.sendMail({
      from:    `"ProCardan Serwis" <${GMAIL_USER}>`,
      to:      TO_EMAIL,
      replyTo: GMAIL_USER,
      subject: `Nowe zapytanie od: ${safeName} (procardan.pl)`,
      html:    buildEmailHtml(safeName, safePhone, safeMessage),
      text: [
        `Nowe zapytanie ofertowe — procardan.pl`,
        `Imię i nazwisko: ${safeName}`,
        `Numer telefonu:  ${safePhone}`,
        ``,
        `Wiadomość:`,
        safeMessage,
      ].join('\n'),
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('[contact] SMTP error:', err.message);
    return res.status(500).json({
      error: 'Wystąpił błąd podczas wysyłania. Spróbuj ponownie lub zadzwoń bezpośrednio.',
    });
  }
}
