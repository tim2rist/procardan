import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
// Gallery removed per client request
import Contact from './components/Contact';
import SEOKeywords from './components/SEOKeywords';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import MobileCTA from './components/MobileCTA';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <AboutUs />
        <Services />
        {/* Gallery removed per client request */}
        <Contact />
        <SEOKeywords />
      </main>
      <Footer />
      <CookieBanner />
      <MobileCTA />
    </>
  );
}

export default App;
