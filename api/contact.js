// api/contact.js
// Vercel Serverless Function — Contact Form Handler
// Replaces legacy mail.php (PHP not supported on Vercel).
//
// Required environment variable (set in Vercel Dashboard > Settings > Environment Variables):
//   RESEND_API_KEY  — your API key from https://resend.com
//
// Optional (defaults shown below):
//   CONTACT_TO_EMAIL  — recipient address (default: procardan1@gmail.com)
//   CONTACT_FROM_EMAIL — sender address  (default: no-reply@procardan.pl)

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL   = process.env.CONTACT_TO_EMAIL   || 'procardan1@gmail.com';
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL  || 'ProCardan Serwis <no-reply@procardan.pl>';

// Simple in-memory rate limiter (resets per cold-start; good enough for low-traffic sites)
const ipTimestamps = new Map();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX       = 3;       // max submissions per IP per window

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (ipTimestamps.get(ip) || []).filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  if (timestamps.length >= RATE_LIMIT_MAX) return true;
  timestamps.push(now);
  ipTimestamps.set(ip, timestamps);
  return false;
}

function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://procardan.pl');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

export default async function handler(req, res) {
  setCorsHeaders(res);

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting by IP
  const clientIp = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress || 'unknown';
  if (isRateLimited(clientIp)) {
    return res.status(429).json({ error: 'Too many requests. Please wait a moment before trying again.' });
  }

  const { name, phone, message, honeypot } = req.body;

  // --- Honeypot anti-spam check ---
  // The "honeypot" field is a hidden input that bots fill in but humans leave empty.
  if (honeypot) {
    // Silently succeed to confuse bots — do not actually send
    return res.status(200).json({ success: true });
  }

  // --- Input validation ---
  const safeName    = String(name    || '').trim();
  const safePhone   = String(phone   || '').trim();
  const safeMessage = String(message || '').trim();

  if (!safeName || !safePhone || !safeMessage) {
    return res.status(400).json({ error: 'Wszystkie pola są wymagane.' });
  }

  if (safeName.length > 100 || safePhone.length > 30 || safeMessage.length > 2000) {
    return res.status(400).json({ error: 'Dane wejściowe są za długie.' });
  }

  // --- Send email via Resend ---
  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to:   [TO_EMAIL],
      subject: `Nowe zapytanie od: ${safeName} (procardan.pl)`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px;">
          <h2 style="color: #e01e2b; margin-bottom: 4px;">Nowe zapytanie ofertowe</h2>
          <p style="font-size: 12px; color: #999; margin-top: 0;">Źródło: procardan.pl — formularz kontaktowy</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 16px 0;" />

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 12px; background: #f9f9f9; font-weight: bold; width: 160px;">Imię i nazwisko</td>
              <td style="padding: 8px 12px;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold;">Numer telefonu</td>
              <td style="padding: 8px 12px;"><a href="tel:${safePhone}" style="color: #e01e2b;">${safePhone}</a></td>
            </tr>
          </table>

          <div style="margin-top: 16px;">
            <p style="font-weight: bold; margin-bottom: 4px;">Wiadomość:</p>
            <div style="background: #f9f9f9; border-left: 4px solid #e01e2b; padding: 12px 16px; white-space: pre-wrap;">${safeMessage.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
          </div>

          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 11px; color: #aaa;">Wiadomość wysłana automatycznie z serwisu procardan.pl</p>
        </div>
      `,
    });

    if (error) {
      console.error('[contact] Resend API error:', error);
      return res.status(500).json({ error: 'Wystąpił błąd podczas wysyłania. Spróbuj ponownie lub zadzwoń bezpośrednio.' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('[contact] Unexpected error:', err);
    return res.status(500).json({ error: 'Nieoczekiwany błąd serwera.' });
  }
}
