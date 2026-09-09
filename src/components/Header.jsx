import { useState, useEffect } from 'react';

const PHONE_SVG = (
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
);

const NAV_ITEMS = [
  { label: 'Strona główna', id: 'home' },
  { label: 'O nas',         id: 'o-nas' },
  { label: 'Usługi',        id: 'uslugi' },
  { label: 'Kontakt',       id: 'kontakt' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track the visible section to highlight the correct nav item.
      const scrollPosition = window.scrollY + 100;
      for (const { id } of NAV_ITEMS) {
        const el = document.getElementById(id);
        if (el && scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const el = document.getElementById(targetId);
    if (el) window.scrollTo({ top: el.offsetTop - 30, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <a href="#" className="logo" onClick={(e) => scrollTo(e, 'home')} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/logo_mark.png" alt="ProCardan Logo Mark" style={{ height: '36px', width: 'auto' }} />
            <span>Pro<span className="logo-accent">Cardan</span></span>
          </a>

          <nav>
            <ul className="nav-menu">
              {NAV_ITEMS.map(({ label, id }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`nav-link ${activeSection === id ? 'active' : ''}`}
                    onClick={(e) => scrollTo(e, id)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-cta">
            <a href="tel:500052323" className="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                {PHONE_SVG}
              </svg>
              500-05-23-23
            </a>
          </div>

          <button
            className="mobile-nav-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </header>

      <ul className={`mobile-nav-menu ${isMobileMenuOpen ? 'open' : ''}`} role="navigation" aria-label="Menu mobilne">
        {NAV_ITEMS.map(({ label, id }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`nav-link ${activeSection === id ? 'active' : ''}`}
              onClick={(e) => scrollTo(e, id)}
            >
              {label}
            </a>
          </li>
        ))}
        <li style={{ marginTop: '20px' }}>
          <a href="tel:500052323" className="btn btn-primary" style={{ width: '100%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
              {PHONE_SVG}
            </svg>
            Zadzwoń teraz
          </a>
        </li>
      </ul>

      {isMobileMenuOpen && (
        <div
          className="mobile-nav-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
          role="button"
          aria-label="Zamknij menu"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsMobileMenuOpen(false); }}
        />
      )}
    </>
  );
}
