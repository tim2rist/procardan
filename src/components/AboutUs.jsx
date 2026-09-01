import React from 'react';

export default function AboutUs() {
  return (
    <section id="o-nas" className="section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Text & Technical Details */}
          <div className="about-content">
            <span className="section-overline">O nas & Technologia</span>
            <h2 className="section-title section-title-left">O nas — Eksperci od wałów Cardana</h2>
            
            <div className="about-text">
              <p>
                W <strong>ProCardan</strong> specjalizujemy się w profesjonalnym serwisie, wyważaniu oraz produkcji wałów napędowych. Łączymy pasję do mechaniki precyzyjnej z nowoczesną technologią obróbki metalu.
              </p>
              <p>
                Kluczowym elementem naszej pracy jest eliminacja bicia i wibracji. Stosujemy zaawansowane, dynamiczne wyważarki renomowanych firm. Maszyny te diagnozują odchylenia rzędu setnych części grama, co przekłada się na długą, bezawaryjną pracę podpór, przegubów oraz skrzyń biegów. Każdy wyprodukowany lub naprawiony wał przechodzi dokładną kontrolę.
              </p>
            </div>

            {/* Stats list */}
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Lat doświadczenia</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">12 000+</span>
                <span className="stat-label">Naprawionych wałów</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">99,9%</span>
                <span className="stat-label">Zadowolonych klientów</span>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Diagnostic Screen (Premium CSS & SVG) */}
          <div className="about-visual-container">
            <div className="about-visual-wrapper">
              <div className="about-visual-bg" />
              <div className="about-visual-content">
                
                {/* SVG representing a balancing machine / shaft axis */}
                <svg className="machine-svg" viewBox="0 0 200 80" fill="none">
                  {/* Shaft Centerline */}
                  <line x1="20" y1="40" x2="180" y2="40" stroke="#555" strokeWidth="1" strokeDasharray="3 3" />
                  
                  {/* Flanges */}
                  <rect x="30" y="20" width="8" height="40" fill="#a0aec0" rx="1" />
                  <rect x="162" y="20" width="8" height="40" fill="#a0aec0" rx="1" />
                  
                  {/* Shaft Tube */}
                  <rect x="38" y="28" width="124" height="24" fill="#333" stroke="#ff2e3b" strokeWidth="1.5" />
                  
                  {/* Bearings/Supports */}
                  <path d="M70 40 L65 60 L75 60 Z" fill="#4a5568" />
                  <path d="M130 40 L125 60 L135 60 Z" fill="#4a5568" />
                  
                  {/* Animated Wave representing vibration diagnostic */}
                  <path
                    className="machine-wave"
                    d="M38 40 Q 53.5 25, 69 40 T 99.5 40 T 130 40 T 162 40"
                    stroke="#ff2e3b"
                    strokeWidth="2"
                    fill="none"
                  />
                  
                  {/* Diagnostic Target Dot */}
                  <circle cx="100" cy="40" r="4" fill="#ff2e3b" />
                </svg>

                {/* Machine Info */}
                <div style={{ zIndex: 5 }}>
                  <div style={{ fontFamily: 'monospace', fontSize: '12px', color: '#a0aec0', marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                    <img src="/logo_mark.png" alt="ProCardan" style={{ height: '14px', width: 'auto', filter: 'brightness(1.5)' }} />
                    <span>POMIAR PRO CARDAN</span>
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: '800', letterSpacing: '1px', color: '#ffffff' }}>
                    WYWAŻANIE DYNAMICZNE
                  </div>
                  <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '10px', fontFamily: 'monospace', fontSize: '11px', color: '#cbd5e0' }}>
                    <div>OBROTY: <span style={{ color: '#48bb78', fontWeight: 'bold' }}>3200 RPM</span></div>
                    <div>TOLERANCJA: <span style={{ color: '#48bb78', fontWeight: 'bold' }}>&lt; 0.1g</span></div>
                  </div>
                  <span className="machine-indicator">
                    <span style={{ width: '6px', height: '6px', backgroundColor: '#ff5252', borderRadius: '50%', display: 'inline-block', marginRight: '6px', animation: 'pulse 1s infinite' }}></span>
                    SYSTEM DIAGNOSTYCZNY OK
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
