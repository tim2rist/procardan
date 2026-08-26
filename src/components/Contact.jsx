import React, { useState } from 'react';

// ─── Status enum ─────────────────────────────────────────────────────────────
const STATUS = { IDLE: 'idle', LOADING: 'loading', SUCCESS: 'success', ERROR: 'error' };

// ─── Spinner SVG ─────────────────────────────────────────────────────────────
function Spinner() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ animation: 'spin 0.8s linear infinite', display: 'inline-block' }}
      aria-hidden="true"
    >
      <path d="M21 12a9 9 0 1 1-6.22-8.56" />
    </svg>
  );
}

export default function Contact() {
  const [status, setStatus]   = useState(STATUS.IDLE);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name     = form.name.value.trim();
    const phone    = form.phone.value.trim();
    const message  = form.message.value.trim();
    const consent  = form.consent.checked;
    const botcheck = form.botcheck?.value || '';

    // ── Client-side validation ────────────────────────────────────────────
    if (!name || !phone || !message || !consent) {
      alert('Proszę wypełnić wszystkie pola formularza i zaznaczyć zgodę RODO.');
      return;
    }

    setStatus(STATUS.LOADING);
    setErrorMsg('');

    try {
      const response = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ name, phone, message, botcheck }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus(STATUS.SUCCESS);
        form.reset();
        // Auto-reset after 7 s so the user can submit again
        setTimeout(() => setStatus(STATUS.IDLE), 7000);
      } else {
        setStatus(STATUS.ERROR);
        setErrorMsg(
          data.error || 'Wystąpił błąd podczas wysyłania. Spróbuj ponownie lub skontaktuj się telefonicznie.'
        );
      }
    } catch {
      setStatus(STATUS.ERROR);
      setErrorMsg('Błąd połączenia. Upewnij się, że masz połączenie z internetem i spróbuj ponownie.');
    }
  };

  const isLoading = status === STATUS.LOADING;

  return (
    <section id="kontakt" className="section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-overline">Szybki kontakt</span>
          <h2 className="section-title">Szybki kontakt i lokalizacja</h2>
          <p className="section-desc">
            Chcesz wycenić regenerację lub wyważyć wał napędowy? Napisz do nas lub zadzwoń bezpośrednio.
          </p>
        </div>

        {/* Contact Form & Info Grid */}
        <div className="contact-grid">

          {/* Left Column: Form */}
          <div className="contact-card">
            <h3>Napisz do nas</h3>

            {/* ── Success Banner ── */}
            {status === STATUS.SUCCESS && (
              <div
                className="form-status success"
                role="alert"
                style={{ display: 'flex', marginBottom: '24px', alignItems: 'center', gap: '8px' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Wiadomość została wysłana pomyślnie. Skontaktujemy się z Tobą telefonicznie!
              </div>
            )}

            {/* ── Error Banner ── */}
            {status === STATUS.ERROR && (
              <div
                className="form-status error"
                role="alert"
                style={{ display: 'flex', marginBottom: '24px', alignItems: 'center', gap: '8px',
                  color: '#c53030', background: '#fff5f5', border: '1px solid #fed7d7',
                  borderRadius: '8px', padding: '12px 16px' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                {errorMsg}
              </div>
            )}

            <form id="contactForm" className="contact-form" onSubmit={handleSubmit} noValidate>

              {/* ── Honeypot (hidden from humans, filled by bots) ── */}
              <input
                type="text"
                name="botcheck"
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="form-group-row" style={{ gridTemplateColumns: '1fr' }}>
                <div>
                  <label htmlFor="contact-name" className="form-label">Imię i nazwisko *</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    className="form-control"
                    placeholder="np. Jan Kowalski"
                    required
                    disabled={isLoading}
                  />
                </div>
                <div style={{ marginTop: '15px' }}>
                  <label htmlFor="contact-phone" className="form-label">Numer telefonu *</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    className="form-control"
                    placeholder="np. 500-05-23-23"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="form-label">Wiadomość *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-control"
                  placeholder="Opisz problem z wałem, podaj typ pojazdu..."
                  required
                  disabled={isLoading}
                />
              </div>

              {/* GDPR / RODO Checkbox */}
              <div className="form-checkbox-wrapper">
                <label className="form-checkbox-label" htmlFor="contact-rodo">
                  <input
                    type="checkbox"
                    id="contact-rodo"
                    name="consent"
                    className="form-checkbox"
                    required
                    disabled={isLoading}
                  />
                  <span>
                    Wyrażam zgodę na przetwarzanie moich danych osobowych w celu obsługi zapytania ofertowego, zgodnie z{' '}
                    <a href="/polityka-prywatnosci.html" target="_blank" rel="noopener noreferrer">
                      Polityką Prywatności
                    </a>.
                  </span>
                </label>
              </div>

              {/* Submit Button — shows spinner while loading */}
              <button
                type="submit"
                id="submitBtn"
                className="btn btn-primary form-submit-btn"
                disabled={isLoading}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                {isLoading ? (
                  <>
                    <Spinner />
                    Wysyłanie...
                  </>
                ) : (
                  'Wyślij wiadomość'
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Contact Details & Google Maps */}
          <div className="location-column">

            <div className="contact-card" style={{ padding: '30px', boxShadow: 'none', border: '1px solid var(--color-border)' }}>
              <h3>Dane kontaktowe</h3>

              <div className="contact-info-list" style={{ gap: '20px' }}>
                {/* Phone */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <h3>Telefon (Zadzwoń teraz)</h3>
                    <p>
                      <a href="tel:500052323" className="contact-phone-link" style={{ fontSize: '24px', fontWeight: '800' }}>
                        500-05-23-23
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <h3>E-mail</h3>
                    <p><a href="mailto:procardan1@gmail.com" className="contact-email-link">procardan1@gmail.com</a></p>
                  </div>
                </div>

                {/* Address */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <h3>Adres serwisu</h3>
                    <p>ul. Wodzisławska 1, 52-017 Wrocław</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="map-card" style={{ position: 'relative', minHeight: '320px', padding: 0, border: '1px solid var(--color-border)', overflow: 'hidden' }}>
              <iframe
                title="Mapa dojazdu ProCardan"
                src="https://maps.google.com/maps?q=51.080731,17.087877&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px', borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Floating Map Branding Badge */}
              <div style={{ position: 'absolute', top: '15px', left: '15px', backgroundColor: 'var(--color-white)', padding: '10px 15px', borderRadius: '6px', boxShadow: 'var(--shadow-md)', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--color-border)' }}>
                <img src="/logo_mark.png" alt="ProCardan Logo Mark" style={{ height: '24px', width: 'auto' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '13px', fontWeight: '800', color: 'var(--color-charcoal)', lineHeight: '1.2' }}>ProCardan</span>
                  <span style={{ fontSize: '10px', color: 'var(--color-gray-muted)', fontWeight: '500' }}>ul. Wodzisławska 1</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
