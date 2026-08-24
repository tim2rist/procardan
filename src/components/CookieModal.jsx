import React, { useState, useEffect } from 'react';

export default function CookieModal({ isOpen, onClose, onSave, savedPreferences }) {
  const [preferences, setPreferences] = useState({
    essential: true,
    analytical: false,
    marketing: false,
  });

  // Synchronize state when modal is opened or when parent preferences update
  useEffect(() => {
    if (isOpen && savedPreferences) {
      setPreferences(savedPreferences);
    }
  }, [isOpen, savedPreferences]);

  if (!isOpen) return null;

  const handleToggle = (key) => {
    if (key === 'essential') return; // Cannot disable essential cookies
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    onSave(preferences);
    onClose();
  };

  return (
    <div className="cookie-modal-overlay" onClick={onClose}>
      <div className="cookie-modal animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
        <div className="cookie-modal-header">
          <h3>Ustawienia Prywatności</h3>
          <button className="cookie-modal-close" onClick={onClose} aria-label="Zamknij modal">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="cookie-modal-body">
          <p style={{ fontSize: '13px', color: 'var(--color-gray-text)', marginBottom: '10px' }}>
            Szanujemy Twoją prywatność. Poniżej możesz dostosować zgody na wykorzystanie plików cookie w naszym serwisie.
          </p>

          {/* Option 1: Essential (Checked & Disabled by default) */}
          <div className="cookie-option-card">
            <div className="cookie-option-checkbox-wrapper">
              <input
                type="checkbox"
                id="cookie-essential"
                className="form-checkbox"
                checked={preferences.essential}
                disabled
              />
            </div>
            <div className="cookie-option-text">
              <h4>
                Niezbędne <span className="cookie-badge-required">Wymagane</span>
              </h4>
              <p>
                Te pliki cookie są kluczowe dla prawidłowego działania naszej strony, umożliwiając bezpieczną nawigację i poprawne ładowanie zawartości.
              </p>
            </div>
          </div>

          {/* Option 2: Analytical (Unchecked by default) */}
          <div className="cookie-option-card" onClick={() => handleToggle('analytical')} style={{ cursor: 'pointer' }}>
            <div className="cookie-option-checkbox-wrapper">
              <input
                type="checkbox"
                id="cookie-analytical"
                className="form-checkbox"
                checked={preferences.analytical}
                onChange={() => {}}
                aria-label="Ciasteczka analityczne"
              />
            </div>
            <div className="cookie-option-text">
              <h4>Statystyki i Analizy</h4>
              <p>
                Pomagają nam analizować ruch na stronie i optymalizować działanie serwisu. Wszystkie dane statystyczne są zbierane anonimowo.
              </p>
            </div>
          </div>

          {/* Option 3: Marketing (Unchecked by default) */}
          <div className="cookie-option-card" onClick={() => handleToggle('marketing')} style={{ cursor: 'pointer' }}>
            <div className="cookie-option-checkbox-wrapper">
              <input
                type="checkbox"
                id="cookie-marketing"
                className="form-checkbox"
                checked={preferences.marketing}
                onChange={() => {}}
                aria-label="Ciasteczka marketingowe"
              />
            </div>
            <div className="cookie-option-text">
              <h4>Marketing i Reklama</h4>
              <p>
                Umożliwiają dostosowanie treści promocyjnych do Twoich preferencji oraz optymalizację prowadzonych działań reklamowych.
              </p>
            </div>
          </div>
        </div>

        <div className="cookie-modal-footer">
          <button className="btn btn-secondary" onClick={() => {
            const acceptAll = { essential: true, analytical: true, marketing: true };
            onSave(acceptAll);
            onClose();
          }}>
            Akceptuj wszystkie
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            Zapisz preferencje
          </button>
        </div>
      </div>
    </div>
  );
}
