import React from 'react';

export default function Features() {
  const featuresList = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: 'Ekspresowy czas serwisu',
      description: 'Czas serwisu 1-4 godzin. Standardowa regeneracja gotowa w 24 - 48 godzin.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: 'Pisemna Gwarancja',
      description: 'Udzielamy pełnego zabezpieczenia gwarancyjnego na wykonane usługi + protokół wyważający na każdą wykonaną pracę.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
      title: 'Precyzyjne wyważanie',
      description: 'Wyważamy dynamicznie z najwyższą dokładnością.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
      title: 'Dojazd i odbiór 24/7',
      description: 'Odbiór wału napędowego od klienta z całej Polski. Świadczymy usługę naprawę wału napędowego w samochodach dostawczych i ciężarowych z dojazdem do klienta 24/7 (demontaż-naprawa-montaż).',
    },
  ];

  return (
    <section id="atuty" className="section section-bg">
      <div className="container">
        <div className="section-header">
          <span className="section-overline">Dlaczego ProCardan</span>
          <h2 className="section-title">Dlaczego warto nam zaufać?</h2>
          <p className="section-desc">
            Dzięki połączeniu zaawansowanej wiedzy technicznej oraz precyzyjnych maszyn, zapewniamy najwyższe standardy obsługi wałów kardana.
          </p>
        </div>

        <div className="features-grid">
          {featuresList.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon-wrapper">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
