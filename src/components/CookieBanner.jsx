import React, { useState, useEffect } from 'react';
import CookieModal from './CookieModal';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytical: false,
    marketing: false,
  });

  // Dynamic script loader for cookie compliance
  const handleScriptInjection = (prefs) => {
    // =========================================================
    // TODO: Replace placeholder IDs before enabling analytics!
    //   - Google Analytics: replace 'G-XXXXXXXXXX' with your real GA4 Measurement ID
    //   - Meta Pixel:       replace 'XXXXXXXXXXXXXXX' with your real Pixel ID
    // Both blocks are commented out below until real keys are provided.
    // =========================================================

    // --- 1. Analytical Scripts (Google Analytics) ---
    // DISABLED: Placeholder GA ID (G-XXXXXXXXXX). Uncomment after adding real ID.
    /*
    if (prefs.analytical) {
      if (!document.getElementById('google-analytics-script')) {
        const gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
        gaScript.id = 'google-analytics-script';
        document.head.appendChild(gaScript);

        const gaInitScript = document.createElement('script');
        gaInitScript.id = 'google-analytics-init';
        gaInitScript.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `;
        document.head.appendChild(gaInitScript);
      }
    } else {
      const gaScript = document.getElementById('google-analytics-script');
      const gaInitScript = document.getElementById('google-analytics-init');
      if (gaScript) gaScript.remove();
      if (gaInitScript) gaInitScript.remove();
    }
    */
    // Cleanup any previously injected GA scripts (safety net)
    if (!prefs.analytical) {
      const gaScript = document.getElementById('google-analytics-script');
      const gaInitScript = document.getElementById('google-analytics-init');
      if (gaScript) gaScript.remove();
      if (gaInitScript) gaInitScript.remove();
    }

    // --- 2. Marketing Scripts (Meta Pixel) ---
    // DISABLED: Placeholder Pixel ID (XXXXXXXXXXXXXXX). Uncomment after adding real ID.
    /*
    if (prefs.marketing) {
      if (!document.getElementById('meta-pixel-script')) {
        const pixelScript = document.createElement('script');
        pixelScript.id = 'meta-pixel-script';
        pixelScript.innerHTML = `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'XXXXXXXXXXXXXXX');
          fbq('track', 'PageView');
        `;
        document.head.appendChild(pixelScript);
      }
    } else {
      const pixelScript = document.getElementById('meta-pixel-script');
      if (pixelScript) pixelScript.remove();
    }
    */
    // Cleanup any previously injected Pixel scripts (safety net)
    if (!prefs.marketing) {
      const pixelScript = document.getElementById('meta-pixel-script');
      if (pixelScript) pixelScript.remove();
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem('cookie-consent-preferences');
    if (!saved) {
      // Delay slightly for premium animation look
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    } else {
      const parsedPrefs = JSON.parse(saved);
      setPreferences(parsedPrefs);
      handleScriptInjection(parsedPrefs);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { essential: true, analytical: true, marketing: true };
    localStorage.setItem('cookie-consent-preferences', JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    handleScriptInjection(allAccepted);
    setIsVisible(false);
  };

  const handleDeclineAll = () => {
    const allDeclined = { essential: true, analytical: false, marketing: false };
    localStorage.setItem('cookie-consent-preferences', JSON.stringify(allDeclined));
    setPreferences(allDeclined);
    handleScriptInjection(allDeclined);
    setIsVisible(false);
  };

  const handleSavePreferences = (prefs) => {
    localStorage.setItem('cookie-consent-preferences', JSON.stringify(prefs));
    setPreferences(prefs);
    handleScriptInjection(prefs);
    setIsVisible(false);
  };

  // Exposed listener for footers / privacy policies to open settings again
  useEffect(() => {
    const handleOpenSettings = () => {
      setIsModalOpen(true);
    };
    window.addEventListener('open-cookie-settings', handleOpenSettings);
    return () => window.removeEventListener('open-cookie-settings', handleOpenSettings);
  }, []);

  if (!isVisible && !isModalOpen) return null;

  return (
    <>
      {isVisible && (
        <div className="cookie-banner" role="dialog" aria-labelledby="cookie-title">
          <div className="cookie-banner-content">
            <h4 id="cookie-title">Dbamy o Twoją prywatność</h4>
            <p>
              Używamy plików cookie, aby ułatwić Ci korzystanie z naszej witryny oraz do celów statystycznych. Możesz zaakceptować wszystkie pliki cookie lub dostosować ich ustawienia. Więcej informacji znajdziesz w naszej{' '}
              <a href="/polityka-prywatnosci.html" target="_blank" rel="noopener noreferrer">
                Polityce Prywatności
              </a>
              .
            </p>
            <div className="cookie-banner-actions">
              <button className="cookie-btn-settings" onClick={() => setIsModalOpen(true)}>
                Ustawienia
              </button>
              <button className="btn btn-secondary" onClick={handleDeclineAll}>
                Odrzucam
              </button>
              <button className="btn btn-primary" onClick={handleAcceptAll}>
                Akceptuję
              </button>
            </div>
          </div>
        </div>
      )}

      <CookieModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSavePreferences}
        savedPreferences={preferences}
      />
    </>
  );
}
