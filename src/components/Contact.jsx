export default function Contact() {
  return (
    <section id="kontakt" className="section">
      <div className="container">

        <div className="section-header">
          <span className="section-overline">Szybki kontakt</span>
          <h2 className="section-title">Zadzwoń i umów serwis</h2>
          <p className="section-desc">
            Chcesz wycenić regenerację lub wyważyć wał napędowy? Zadzwoń bezpośrednio – doradzimy i ustalimy termin.
          </p>
        </div>

        <div className="contact-grid">

          <div className="contact-card contact-phone-card">
            <div className="contact-card-top">
              <div className="phone-hero-block">
                <div className="phone-icon-ring">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="phone-hero-text">
                  <span className="phone-hero-label">Zadzwoń teraz</span>
                  <a href="tel:+48500052323" className="phone-hero-number">+48 500 05 23 23</a>
                </div>
              </div>

              <a href="tel:+48500052323" className="btn btn-primary contact-call-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Połącz z serwisem
              </a>
            </div>

            <div className="contact-hours">
              <div className="hours-item">
                <div className="hours-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="hours-content">
                  <strong className="hours-title">Pracujemy:</strong>
                  <div className="hours-list">
                    <span>Poniedziałek – Piątek: 7:30 – 16:00</span>
                    <span>Sobota: Do uzgodnienia</span>
                  </div>
                </div>
              </div>

              <div className="hours-item">
                <div className="hours-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="hours-content">
                  <span>Nasz doradca jest do Państwa dyspozycji pod numerem telefonu 500-05-23-23 od poniedziałku do soboty w godzinach 7:30–20:00.</span>
                </div>
              </div>
            </div>

            <div className="contact-email-row">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="email-icon">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>Napisz do nas:</span>
              <a href="mailto:procardan1@gmail.com" className="email-link">procardan1@gmail.com</a>
            </div>
          </div>

          <div className="contact-card contact-location-card">
            <div className="location-header-block">
              <h3>Lokalizacja serwisu</h3>

              <div className="location-info-row">
                <div className="location-pin-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="location-address-text">
                  <span className="location-label">Adres warsztatu:</span>
                  <p className="location-address">ul. Wodzisławska 1, 52-017 Wrocław</p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=51.080731,17.087877"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary contact-navigate-btn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                Nawiguj do serwisu (Google Maps)
              </a>
            </div>

            <div className="map-embed-container">
              <iframe
                title="Mapa dojazdu ProCardan"
                src="https://maps.google.com/maps?q=51.080731,17.087877&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, width: '100%', height: '100%', minHeight: '240px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="map-badge">
                <img src="/logo_mark.png" alt="ProCardan" style={{ height: '22px', width: 'auto' }} />
                <div>
                  <span className="map-badge-name">ProCardan</span>
                  <span className="map-badge-sub">ul. Wodzisławska 1</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
