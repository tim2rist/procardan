import { useState, useEffect } from 'react';
import CookieModal from './CookieModal';

const CONSENT_KEY = 'cookie-consent-preferences';

const DEFAULT_PREFS = { essential: true, analytical: false, marketing: false };

/**
 * Removes any previously injected analytics/marketing scripts when consent is revoked.
 * Injection is handled here once real GA4 / Meta Pixel IDs are available —
 * add script injection inside the `if (prefs.analytical)` and `if (prefs.marketing)` blocks below.
 */
function applyConsent(prefs) {
  if (!prefs.analytical) {
    document.getElementById('google-analytics-script')?.remove();
    document.getElementById('google-analytics-init')?.remove();
  }
  if (!prefs.marketing) {
    document.getElementById('meta-pixel-script')?.remove();
  }
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preferences, setPreferences] = useState(DEFAULT_PREFS);

  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_KEY);
    if (!saved) {
      // Small delay for a smoother entrance animation on first visit.
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
    const parsed = JSON.parse(saved);
    setPreferences(parsed);
    applyConsent(parsed);
  }, []);

  useEffect(() => {
    const open = () => setIsModalOpen(true);
    window.addEventListener('open-cookie-settings', open);
    return () => window.removeEventListener('open-cookie-settings', open);
  }, []);

  const save = (prefs) => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    applyConsent(prefs);
    setIsVisible(false);
  };

  if (!isVisible && !isModalOpen) return null;

  return (
    <>
      {isVisible && (
        <div className="cookie-banner" role="dialog" aria-labelledby="cookie-title">
          <div className="cookie-banner-content">
            <h4 id="cookie-title">Dbamy o Twoją prywatność</h4>
            <p>
              Używamy plików cookie, aby ułatwić Ci korzystanie z naszej witryny oraz do celów statystycznych. Możesz zaakceptować wszystkie pliki cookie lub dostosować ich ustawienia. Więcej informacji znajdziesz w naszej{' '}
              <a href="/polityka-prywatnosci.html" target="_blank" rel="noopener noreferrer">Polityce Prywatności</a>.
            </p>
            <div className="cookie-banner-actions">
              <button className="cookie-btn-settings" onClick={() => setIsModalOpen(true)}>Ustawienia</button>
              <button className="btn btn-secondary" onClick={() => save(DEFAULT_PREFS)}>Odrzucam</button>
              <button className="btn btn-primary" onClick={() => save({ essential: true, analytical: true, marketing: true })}>Akceptuję</button>
            </div>
          </div>
        </div>
      )}

      <CookieModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={save}
        savedPreferences={preferences}
      />
    </>
  );
}
