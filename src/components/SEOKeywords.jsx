import React from 'react';

export default function SEOKeywords() {
  const cities = [
    'Augustów', 'Biała Podlaska', 'Białystok', 'Bielsko-Biała', 'Bydgoszcz',
    'Bytom', 'Częstochowa', 'Dąbrowa Górnicza', 'Elbląg', 'Gdańsk',
    'Gdynia', 'Gliwice', 'Gorzów Wielkopolski', 'Grudziądz', 'Jastrzębie-Zdrój',
    'Jaworzno', 'Jelenia Góra', 'Kalisz', 'Katowice', 'Kędzierzyn-Koźle',
    'Kielce', 'Konin', 'Koszalin', 'Kraków', 'Legnica',
    'Lublin', 'Lubliniec', 'Łódź', 'Mielec', 'Mikołów',
    'Mysłowice', 'Myszków', 'Nowy Sącz', 'Nowy Targ', 'Olsztyn',
    'Opole', 'Orzesze', 'Otwock', 'Piła', 'Piotrków Trybunalski',
    'Płock', 'Poznań', 'Puławy', 'Racibórz', 'Radom',
    'Radomsko', 'Ruda Śląska', 'Rybnik', 'Rzeszów', 'Sieradz',
    'Skarżysko-Kamienna', 'Sosnowiec', 'Stalowa Wola', 'Szczecin', 'Szczecinek',
    'Świnoujście', 'Tarnobrzeg', 'Tarnowskie Góry', 'Tarnów', 'Toruń',
    'Tychy', 'Tczew', 'Wałbrzych', 'Warszawa', 'Włocławek',
    'Wodzisław Śląski', 'Wrocław', 'Zabrze', 'Zakopane', 'Zawiercie',
    'Zielona Góra', 'Żory', 'Żywiec',
  ];

  return (
    <section className="seo-section">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '40px' }}>
          <span className="section-overline">Nasz zasięg</span>
          <h2 className="section-title">Obszar działania: Wrocław - Dolny Śląsk oraz cała Polska</h2>
        </div>

        {/* CTA Text Block */}
        <div className="seo-cta-block">
          <p className="seo-text">
            Firma <strong>ProCardan</strong> świadczy profesjonalne usługi w zakresie:{' '}
            <strong>regeneracja wałów napędowych</strong>,{' '}
            <strong>wyważanie dynamiczne</strong> oraz{' '}
            <strong>produkcja wałów na zamówienie</strong>. Zapraszamy do kontaktu klientów
            indywidualnych oraz firmy transportowe. Zapewniamy szybki transport, diagnozę
            i terminową realizację zleceń.
          </p>
        </div>

        {/* Cities Section */}
        <div className="seo-cities-full">
          <h3 className="seo-cities-title">
            Z naszych usług korzystają mieszkańcy takich miast, jak:
          </h3>
          <div className="seo-cities-list">
            {cities.map((city, idx) => (
              <div key={idx} className="seo-city-badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="seo-city-icon"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{city}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
