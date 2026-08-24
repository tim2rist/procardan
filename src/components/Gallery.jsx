import React, { useState, useEffect, useRef } from 'react';

const galleryItems = [
  {
    id: 1,
    category: 'osobowe',
    tag: 'Osobowe / AWD',
    title: 'Wał BMW xDrive / Audi Quattro',
    desc: 'Dwuczęściowy wał napędowy z podporą i przegubami homokinetycznymi, wyważony dynamicznie.',
    blueprint: (
      <svg role="img" aria-label="naprawa wału napędowego kardan" viewBox="0 0 160 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <title>naprawa wału napędowego kardan</title>
        <line x1="10" y1="50" x2="150" y2="50" stroke="#ff2e3b" strokeWidth="0.5" strokeDasharray="3 3" />
        <rect x="25" y="42" width="40" height="16" fill="#2d3748" stroke="#cbd5e0" />
        <rect x="95" y="42" width="40" height="16" fill="#2d3748" stroke="#cbd5e0" />
        <rect x="65" y="35" width="30" height="30" rx="3" fill="#1a202c" stroke="#cbd5e0" />
        <circle cx="80" cy="50" r="4" fill="#ff2e3b" />
        <rect x="15" y="38" width="10" height="24" fill="#a0aec0" rx="1" />
        <rect x="135" y="38" width="10" height="24" fill="#a0aec0" rx="1" />
      </svg>
    )
  },
  {
    id: 2,
    category: 'dostawcze',
    tag: 'Dostawcze / LCV',
    title: 'Wał Mercedes Sprinter / Crafter',
    desc: 'Wzmacniany wał trzyczęściowy z dwiema podporami i przegubami krzyżakowymi typu zagniatanego.',
    blueprint: (
      <svg role="img" aria-label="naprawa wału napędowego kardan" viewBox="0 0 160 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <title>naprawa wału napędowego kardan</title>
        <line x1="5" y1="50" x2="155" y2="50" stroke="#ff2e3b" strokeWidth="0.5" strokeDasharray="3 3" />
        <rect x="15" y="43" width="30" height="14" fill="#2d3748" stroke="#cbd5e0" />
        <rect x="65" y="43" width="30" height="14" fill="#2d3748" stroke="#cbd5e0" />
        <rect x="115" y="43" width="30" height="14" fill="#2d3748" stroke="#cbd5e0" />
        <circle cx="50" cy="50" r="10" fill="#1a202c" stroke="#cbd5e0" />
        <circle cx="105" cy="50" r="10" fill="#1a202c" stroke="#cbd5e0" />
        <rect x="47" y="38" width="6" height="24" rx="1" fill="#cbd5e0" />
        <rect x="102" y="38" width="6" height="24" rx="1" fill="#cbd5e0" />
      </svg>
    )
  },
  {
    id: 3,
    category: 'maszyny',
    tag: 'Maszyny / Ciężarowe',
    title: 'Wał Przemysłowy / Maszyny',
    desc: 'Wał o wysokim momencie obrotowym z kołnierzami krzyżowymi, dedykowany do maszyn rolniczych i budowlanych.',
    blueprint: (
      <svg role="img" aria-label="wyważanie dynamiczne wału maszyn budowlanych" viewBox="0 0 160 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <title>wyważanie dynamiczne wału maszyn budowlanych</title>
        <line x1="10" y1="50" x2="150" y2="50" stroke="#ff2e3b" strokeWidth="0.5" strokeDasharray="3 3" />
        <rect x="35" y="38" width="90" height="24" fill="#2d3748" stroke="#cbd5e0" />
        <circle cx="35" cy="50" r="14" fill="#1a202c" stroke="#cbd5e0" />
        <circle cx="125" cy="50" r="14" fill="#1a202c" stroke="#cbd5e0" />
        <rect x="10" y="30" width="10" height="40" fill="#a0aec0" rx="1" />
        <rect x="140" y="30" width="10" height="40" fill="#a0aec0" rx="1" />
      </svg>
    )
  },
  {
    id: 4,
    category: 'osobowe',
    tag: 'Motorsport / Off-road',
    title: 'Wał Wzmocniony / Custom',
    desc: 'Indywidualny projekt z rury chromowo-molibdenowej (CrMo) o zwiększonej odporności na skręcanie.',
    blueprint: (
      <svg role="img" aria-label="nowy wał napędowy na zamówienie" viewBox="0 0 160 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <title>nowy wał napędowy na zamówienie</title>
        <line x1="10" y1="50" x2="150" y2="50" stroke="#ff2e3b" strokeWidth="0.5" strokeDasharray="3 3" />
        <rect x="25" y="44" width="110" height="12" fill="#2d3748" stroke="#cbd5e0" />
        <rect x="20" y="36" width="6" height="28" fill="#ff2e3b" />
        <rect x="134" y="36" width="6" height="28" fill="#ff2e3b" />
        <circle cx="77" cy="50" r="8" fill="#1a202c" stroke="#cbd5e0" />
      </svg>
    )
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState('wszystkie');
  const [activeItem, setActiveItem] = useState(null);
  // Controls whether items are in their "visible" transition state
  const [visible, setVisible] = useState(true);
  const pendingFilter = useRef(null);

  const filteredItems = filter === 'wszystkie'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  const handleFilterChange = (newFilter) => {
    if (newFilter === filter) return;
    // Phase 1: fade out
    setVisible(false);
    pendingFilter.current = newFilter;
  };

  // Phase 2: after fade-out transition (200ms), swap filter then fade back in
  useEffect(() => {
    if (!visible && pendingFilter.current !== null) {
      const timer = setTimeout(() => {
        setFilter(pendingFilter.current);
        pendingFilter.current = null;
        // Next frame: fade in
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setVisible(true));
        });
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  // Initial mount: ensure visible
  useEffect(() => { setVisible(true); }, []);

  return (
    <section id="galeria" className="section section-bg">
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-overline">Galeria &amp; Realizacje</span>
          <h2 className="section-title">Galeria zrealizowanych projektów</h2>
          <p className="section-desc">
            Przykłady wyprodukowanych oraz zregenerowanych wałów napędowych w naszym warsztacie. Kliknij w produkt, aby zobaczyć szczegóły techniczne.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="gallery-filters">
          <button
            className={`filter-btn ${filter === 'wszystkie' ? 'active' : ''}`}
            onClick={() => handleFilterChange('wszystkie')}
          >
            Wszystkie
          </button>
          <button
            className={`filter-btn ${filter === 'osobowe' ? 'active' : ''}`}
            onClick={() => handleFilterChange('osobowe')}
          >
            Osobowe / Custom
          </button>
          <button
            className={`filter-btn ${filter === 'dostawcze' ? 'active' : ''}`}
            onClick={() => handleFilterChange('dostawcze')}
          >
            Dostawcze (LCV)
          </button>
          <button
            className={`filter-btn ${filter === 'maszyny' ? 'active' : ''}`}
            onClick={() => handleFilterChange('maszyny')}
          >
            Maszyny i Ciężarowe
          </button>
        </div>

        {/* Gallery Grid — stable wrapper, items animate individually */}
        <div className="gallery-grid">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="gallery-item"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.97)',
                transition: `opacity 0.28s ease ${idx * 55}ms, transform 0.28s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 55}ms`,
              }}
              onClick={() => setActiveItem(item)}
            >
              <div className="gallery-visual">
                {item.blueprint}
                <div className="gallery-visual-content">
                  <span className="gallery-tag">{item.tag}</span>
                  <h3 className="gallery-item-title">{item.title}</h3>
                  <p className="gallery-item-desc">{item.desc}</p>
                </div>
              </div>
              <div className="gallery-zoom-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Blueprint viewer Modal */}
        {activeItem && (
          <div className="lightbox" onClick={() => setActiveItem(null)} role="dialog" aria-modal="true">
            <button className="lightbox-close" onClick={() => setActiveItem(null)} aria-label="Zamknij podgląd">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div className="lightbox-content animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
              <div className="lightbox-visual-wrapper">
                {activeItem.blueprint}
              </div>
              <div className="lightbox-details">
                <span className="gallery-tag">{activeItem.tag}</span>
                <h3 className="lightbox-title">{activeItem.title}</h3>
                <p className="lightbox-desc">{activeItem.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '24px', borderTop: '1px solid var(--color-border)', paddingTop: '15px' }}>
                  <img src="/logo_mark.png" alt="Certyfikat jakości ProCardan" loading="lazy" style={{ height: '28px', width: 'auto', opacity: 0.8 }} />
                  <div style={{ fontSize: '12px', color: 'var(--color-gray-muted)', fontFamily: 'monospace', lineHeight: '1.3' }}>
                    PRO CARDAN QUALITY APPROVED<br />
                    ISO 1940-1 G6.3 | BICIE: &lt;0.05mm
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
