export default function Features() {
  const features = [
    {
      icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
      title: 'Ekspresowy czas serwisu',
      desc: 'Ekspresowa naprawa trwa zaledwie 1–4 godziny, a standardowa regeneracja zajmuje od 24 do 48 godzin.',
    },
    {
      icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
      title: 'Pisemna gwarancja',
      desc: 'Zapewniamy pełną ochronę gwarancyjną na wszystkie usługi. Do każdej pracy dołączamy oficjalny protokół wyważenia.',
    },
    {
      icon: <><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></>,
      title: 'Precyzyjne wyważanie',
      desc: 'Proces wyważania realizujemy dynamicznie, zachowując najwyższą dokładność i parametry fabryczne.',
    },
    {
      icon: <><rect x="1" y="3" width="15" height="13" rx="2" ry="2" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></>,
      title: 'Odbiór i dostawa wałów',
      desc: 'Odbieramy uszkodzony wał od klienta, regenerujemy go i wysyłamy naprawiony na terenie całej Polski.',
    },
    {
      icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />,
      title: 'Pomoc drogowa 24/7',
      desc: 'Świadczymy usługę naprawy wałów napędowych w samochodach dostawczych i ciężarowych z dojazdem do klienta 24/7 (demontaż – naprawa – montaż).',
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
          {features.map(({ title, desc, icon }, idx) => (
            <div key={title} className={`feature-card ${idx < 2 ? 'feature-card-featured' : ''}`}>
              <div className="feature-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {icon}
                </svg>
              </div>
              <h3 className="feature-title">{title}</h3>
              <p className="feature-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
