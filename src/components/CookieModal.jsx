import { useState, useEffect } from 'react';

export default function CookieModal({ isOpen, onClose, onSave, savedPreferences }) {
  const [preferences, setPreferences] = useState({
    essential: true,
    analytical: false,
    marketing: false,
  });

  // Sync local state when the modal opens or parent preferences change.
  useEffect(() => {
    if (isOpen && savedPreferences) setPreferences(savedPreferences);
  }, [isOpen, savedPreferences]);

  if (!isOpen) return null;

  const toggle = (key) => {
    if (key === 'essential') return; // Essential cookies cannot be disabled.
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const COOKIE_OPTIONS = [
    {
      key: 'essential',
      label: 'Niezbędne',
      badge: <span className="cookie-badge-required">Wymagane</span>,
      desc: 'Te pliki cookie są kluczowe dla prawidłowego działania naszej strony, umożliwiając bezpieczną nawigację i poprawne ładowanie zawartości.',
      disabled: true,
    },
    {
      key: 'analytical',
      label: 'Statystyki i Analizy',
      desc: 'Pomagają nam analizować ruch na stronie i optymalizować działanie serwisu. Wszystkie dane statystyczne są zbierane anonimowo.',
      ariaLabel: 'Ciasteczka analityczne',
    },
    {
      key: 'marketing',
      label: 'Marketing i Reklama',
      desc: 'Umożliwiają dostosowanie treści promocyjnych do Twoich preferencji oraz optymalizację prowadzonych działań reklamowych.',
      ariaLabel: 'Ciasteczka marketingowe',
    },
  ];

  return (
    <div
      className="cookie-modal-overlay"
      onClick={onClose}
      role="button"
      aria-label="Zamknij ustawienia prywatności"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClose(); }}
    >
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

          {COOKIE_OPTIONS.map(({ key, label, badge, desc, disabled, ariaLabel }) => (
            <div
              key={key}
              className="cookie-option-card"
              onClick={() => toggle(key)}
              style={!disabled ? { cursor: 'pointer' } : undefined}
            >
              <div className="cookie-option-checkbox-wrapper">
                <input
                  type="checkbox"
                  id={`cookie-${key}`}
                  className="form-checkbox"
                  checked={preferences[key]}
                  disabled={disabled}
                  onChange={() => {}}
                  aria-label={ariaLabel}
                />
              </div>
              <div className="cookie-option-text">
                <h4>{label} {badge}</h4>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cookie-modal-footer">
          <button
            className="btn btn-secondary"
            onClick={() => { onSave({ essential: true, analytical: true, marketing: true }); onClose(); }}
          >
            Akceptuj wszystkie
          </button>
          <button className="btn btn-primary" onClick={() => { onSave(preferences); onClose(); }}>
            Zapisz preferencje
          </button>
        </div>
      </div>
    </div>
  );
}
