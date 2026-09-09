const scrollToSection = (e, targetId) => {
  e.preventDefault();
  const el = document.getElementById(targetId);
  if (el) window.scrollTo({ top: el.offsetTop - 30, behavior: 'smooth' });
};

const openCookieSettings = (e) => {
  e.preventDefault();
  window.dispatchEvent(new CustomEvent('open-cookie-settings'));
};

const NAV_LINKS = [
  { label: 'Strona główna', id: 'home' },
  { label: 'O nas',         id: 'o-nas' },
  { label: 'Usługi',        id: 'uslugi' },
  { label: 'Kontakt',       id: 'kontakt' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-column">
            <a href="#" className="footer-logo" onClick={(e) => scrollToSection(e, 'home')} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/logo_mark.png" alt="ProCardan Logo Mark" style={{ height: '36px', width: 'auto' }} />
              <span>Pro<span className="footer-logo-accent" style={{ color: 'var(--color-accent-red)' }}>Cardan</span></span>
            </a>
            <p className="footer-tagline">
              Profesjonalny serwis wałów napędowych. Regeneracja, dynamiczne wyważanie oraz produkcja wałów kardana we Wrocławiu.
            </p>
          </div>

          <div className="footer-column">
            <h4>Nawigacja</h4>
            <ul className="footer-links">
              {NAV_LINKS.map(({ label, id }) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={(e) => scrollToSection(e, id)}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Dane Firmy</h4>
            <div className="footer-credentials">
              <p><strong>ProCardan</strong></p>
              <p>ul. Wodzisławska 1, 52-017 Wrocław</p>
              <p>Tel: <a href="tel:500052323" style={{ color: 'var(--color-white)', fontWeight: '600' }}>500-05-23-23</a></p>
              <p>E-mail: <a href="mailto:procardan1@gmail.com" style={{ color: '#a0aec0' }}>procardan1@gmail.com</a></p>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ProCardan. Wszelkie prawa zastrzeżone.</p>
          <div className="footer-legal-links">
            <a href="/polityka-prywatnosci.html" target="_blank" rel="noopener noreferrer">Polityka Prywatności</a>
            <a href="#cookie-settings" onClick={openCookieSettings}>Polityka Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
