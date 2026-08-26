import React from 'react';

export default function Footer() {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 30,
        behavior: 'smooth',
      });
    }
  };

  const handleOpenCookieSettings = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-cookie-settings'));
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          {/* Column 1: Logo & Brief tagline */}
          <div className="footer-column">
            <a href="#" className="footer-logo" onClick={(e) => handleNavClick(e, 'home')} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img 
                src="/logo_mark.png" 
                alt="ProCardan Logo Mark" 
                style={{ height: '36px', width: 'auto' }} 
              />
              <span>Pro<span className="footer-logo-accent" style={{ color: 'var(--color-accent-red)' }}>Cardan</span></span>
            </a>
            <p className="footer-tagline">
              Profesjonalny serwis wałów napędowych. Regeneracja, dynamiczne wyważanie oraz produkcja wałów kardana we Wrocławiu.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-column">
            <h4>Nawigacja</h4>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
                  Strona główna
                </a>
              </li>
              <li>
                <a href="#o-nas" onClick={(e) => handleNavClick(e, 'o-nas')}>
                  O nas
                </a>
              </li>
              <li>
                <a href="#uslugi" onClick={(e) => handleNavClick(e, 'uslugi')}>
                  Usługi
                </a>
              </li>
              <li>
                <a href="#galeria" onClick={(e) => handleNavClick(e, 'galeria')}>
                  Galeria
                </a>
              </li>
              <li>
                <a href="#kontakt" onClick={(e) => handleNavClick(e, 'kontakt')}>
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal Credentials / Address */}
          <div className="footer-column">
            <h4>Dane Firmy</h4>
            <div className="footer-credentials">
              <p><strong>ProCardan</strong></p>
              {/* TODO: Replace [WSTAW_NIP] with the company's actual 10-digit NIP number */}
              <p style={{ fontSize: '13px', color: '#a0aec0' }}>NIP: [WSTAW_NIP]</p>
              <p>ul. Wodzisławska 1, 52-017 Wrocław</p>
              <p>Tel: <a href="tel:500052323" style={{ color: 'var(--color-white)', fontWeight: '600' }}>500-05-23-23</a></p>
              <p>E-mail: <a href="mailto:procardan1@gmail.com" style={{ color: '#a0aec0' }}>procardan1@gmail.com</a></p>
            </div>
          </div>

        </div>

        {/* Footer Bottom (Legal and Compliance Links) */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ProCardan. Wszelkie prawa zastrzeżone.</p>
          
          <div className="footer-legal-links">
            <a href="/polityka-prywatnosci.html" target="_blank" rel="noopener noreferrer">
              Polityka Prywatności
            </a>
            <a href="#cookie-settings" onClick={handleOpenCookieSettings}>
              Polityka Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
