import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track sections to highlight active menu item
      const sections = ['home', 'o-nas', 'uslugi', 'kontakt'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 30, // optimized scroll offset
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          {/* Logo */}
          <a href="#" className="logo" onClick={(e) => handleNavClick(e, 'home')} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img 
              src="/logo_mark.png" 
              alt="ProCardan Logo Mark" 
              style={{ height: '36px', width: 'auto' }} 
            />
            <span>Pro<span className="logo-accent">Cardan</span></span>
          </a>

          {/* Desktop Nav Menu (Ordered: Strona główna -> O nas -> Usługi -> Galeria -> Kontakt) */}
          <nav>
            <ul className="nav-menu">
              <li>
                <a
                  href="#home"
                  className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, 'home')}
                >
                  Strona główna
                </a>
              </li>
              <li>
                <a
                  href="#o-nas"
                  className={`nav-link ${activeSection === 'o-nas' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, 'o-nas')}
                >
                  O nas
                </a>
              </li>
              <li>
                <a
                  href="#uslugi"
                  className={`nav-link ${activeSection === 'uslugi' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, 'uslugi')}
                >
                  Usługi
                </a>
              </li>

              <li>
                <a
                  href="#kontakt"
                  className={`nav-link ${activeSection === 'kontakt' ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, 'kontakt')}
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </nav>

          {/* Call-to-action Phone Button */}
          <div className="header-cta">
            <a href="tel:500052323" className="btn btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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
              500-05-23-23
            </a>
          </div>

          {/* Hamburger Mobile Toggle */}
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

      {/* Mobile Drawer Menu (Ordered: Strona główna -> O nas -> Usługi -> Galeria -> Kontakt) */}
      <ul className={`mobile-nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <li>
          <a
            href="#home"
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'home')}
          >
            Strona główna
          </a>
        </li>
        <li>
          <a
            href="#o-nas"
            className={`nav-link ${activeSection === 'o-nas' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'o-nas')}
          >
            O nas
          </a>
        </li>
        <li>
          <a
            href="#uslugi"
            className={`nav-link ${activeSection === 'uslugi' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'uslugi')}
          >
            Usługi
          </a>
        </li>

        <li>
          <a
            href="#kontakt"
            className={`nav-link ${activeSection === 'kontakt' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'kontakt')}
          >
            Kontakt
          </a>
        </li>
        <li style={{ marginTop: '20px' }}>
          <a href="tel:500052323" className="btn btn-primary" style={{ width: '100%' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
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
            Zadzwoń teraz
          </a>
        </li>
      </ul>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-overlay" onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </>
  );
}
