import React from 'react';

export default function Hero() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 30,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />
      
      {/* Sleek SVG engineering schematic gear in the background */}
      <svg
        className="hero-vector-bg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        <circle cx="50" cy="50" r="40" strokeDasharray="5 5" />
        <circle cx="50" cy="50" r="30" />
        <circle cx="50" cy="50" r="10" />
        {/* Gear Teeth */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 360) / 12;
          return (
            <line
              key={i}
              x1="50"
              y1="50"
              x2="50"
              y2="5"
              transform={`rotate(${angle} 50 50)`}
              strokeWidth="1"
            />
          );
        })}
      </svg>

      <div className="container hero-container">
        {/* Left Column: Text & CTAs */}
        <div className="hero-content animate-fade-in-up">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <img src="/logo_mark.png" alt="ProCardan Logo Mark" style={{ height: '26px', width: 'auto' }} />
            <span className="hero-overline" style={{ margin: 0 }}>Profesjonalny serwis wałów napędowych</span>
          </div>
          <h1 className="hero-title" style={{ fontSize: '42px', lineHeight: '1.2' }}>
            Kompleksowa regeneracja i produkcja wałów napędowych – ProCardan
          </h1>
          <p className="hero-subtitle">
            Przywracamy pełną sprawność wałów napędowych do samochodów osobowych, dostawczych, ciężarowych, autobusów, pojazdów szynowych oraz maszyn rolniczych i budowlanych. Gwarancja jakości, precyzyjne wyważanie i szybki terminy realizacji.
          </p>
          <div className="hero-actions">
            <a href="tel:500052323" className="btn btn-primary">
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
                className="btn-icon"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Zadzwoń: 500 05 23 23
            </a>
            <a href="#kontakt" onClick={handleScrollToContact} className="btn btn-secondary">
              Zapytaj o wycenę
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
                className="btn-icon"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Premium Interactive Floating Benefits Card */}
        <div className="hero-illustration animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="hero-card">
            <h3 className="hero-card-title">Dlaczego ProCardan?</h3>
            
            <div className="hero-card-item">
              <div className="hero-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div className="hero-card-text">
                <h3>Ekspresowy czas serwisu</h3>
                <p>Czas serwisu 1-4 godzin. Standardowa regeneracja gotowa w 24 - 48 godzin.</p>
              </div>
            </div>

            <div className="hero-card-item">
              <div className="hero-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <div className="hero-card-text">
                <h3>Pisemna Gwarancja</h3>
                <p>Udzielamy pełnego zabezpieczenia gwarancyjnego na wykonane usługi + protokół wyważający na każdą wykonaną pracę.</p>
              </div>
            </div>

            <div className="hero-card-item">
              <div className="hero-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              </div>
              <div className="hero-card-text">
                <h3>Precyzyjne wyważanie</h3>
                <p>Wyważamy dynamicznie z najwyższą dokładnością.</p>
              </div>
            </div>

            <div className="hero-card-item">
              <div className="hero-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div className="hero-card-text">
                <h3>Dojazd i odbiór 24/7</h3>
                <p>Odbiór wału napędowego od klienta z całej Polski. Naprawa z dojazdem do klienta 24/7 (demontaż-naprawa-montaż).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
