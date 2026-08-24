import React from 'react';

export default function Services() {
  return (
    <section id="uslugi" className="section services-section">
      <div className="services-overlay" />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-overline">Nasza Oferta</span>
          <h2 className="section-title">Nasza oferta usługowa</h2>
          <p className="section-desc">
            Oferujemy profesjonalne, kompleksowe wsparcie w zakresie naprawy, diagnostyki i projektowania układów przeniesienia napędu.
          </p>
        </div>

        {/* Services Grid (3 Columns) */}
        <div className="services-grid">
          
          {/* Card 1: Regeneracja */}
          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <h3>Regeneracja wałów</h3>
            <p>
              Kompleksowa naprawa polegająca na wymianie zużytych elementów: podpór, krzyżaków (zarówno zagniatanych, jak i zabezpieczanych pierścieniami), przegubów homokinetycznych oraz złączy kołnierzowych i wielowypustowych.
            </p>
          </div>

          {/* Card 2: Wyważanie */}
          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <h3>Wyważanie dynamiczne</h3>
            <p>
              Wyważamy wały napędowe (1-, 2- i 3-częściowe) na specjalistycznych maszynach renomowanych firm. Eliminujemy wibracje z precyzją rzędu setnych części grama, zapobiegając uszkodzeniom łożysk podpory i skrzyni biegów.
            </p>
          </div>

          {/* Card 3: Produkcja */}
          <div className="service-card">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" />
                <polygon points="18 2 22 6 12 16 8 16 8 12 18 2" />
              </svg>
            </div>
            <h3>Produkcja wałów</h3>
            <p>
              Projektujemy i wykonujemy fabrycznie nowe wały napędowe od podstaw. Tworzymy rozwiązania pod indywidualne zamówienie na podstawie dostarczonej specyfikacji, rysunków technicznych lub pomiarów z maszyny klienta.
            </p>
          </div>

        </div>

        {/* Bottom Box: Supported Vehicles */}
        <div className="service-card-vehicles">
          <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--color-charcoal)', marginBottom: '8px' }}>
            Obsługiwane pojazdy i maszyny
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--color-gray-text)' }}>
            Nasz warsztat posiada zaplecze techniczne przystosowane do pracy z wałami napędowymi każdego typu i przeznaczenia:
          </p>

          <div className="vehicles-list">
            
            {/* Vehicle 1: Osobowe */}
            <div className="vehicle-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
              <span>Samochody Osobowe</span>
            </div>

            {/* Vehicle 2: Dostawcze */}
            <div className="vehicle-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="14" y="3" width="8" height="13" rx="2" ry="2" />
                <rect x="1" y="8" width="13" height="8" rx="2" ry="2" />
                <path d="M18 16h-4V8h5v6" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
              <span>Pojazdy Dostawcze</span>
            </div>

            {/* Vehicle 3: Ciężarowe */}
            <div className="vehicle-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
                <polygon points="16 5 23 5 23 16 16 16 16 5" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
              <span>Ciężarowe & TIR</span>
            </div>

            {/* Vehicle 4: Rolnicze & Budowlane */}
            <div className="vehicle-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 17h-2.5a2.5 2.5 0 0 1-5 0h-5a2.5 2.5 0 0 1-5 0H2v-5h3l2-3h7l2 3h4v2" />
                <circle cx="17" cy="17" r="2.5" />
                <circle cx="7" cy="17" r="2.5" />
                <path d="M21 9v3" />
              </svg>
              <span>Maszyny Rolnicze & Budowlane</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
