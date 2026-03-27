import { useState, useEffect } from 'react';
import './index.css';
import { PhoneCall } from 'lucide-react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import SegmentsSection from './components/SegmentsSection';
import EvokeAdvantage from './components/EvokeAdvantage';
import PartnershipModel from './components/PartnershipModel';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import LegalPage from './components/LegalPage';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const legalPages = ['#privacy', '#terms', '#refund', '#shipping'];
  const isLegal = legalPages.includes(currentHash);
  const legalType = currentHash.replace('#', '');

  return (
    <div className="app">
      <Navbar />
      <main>
        {isLegal ? (
          <LegalPage type={legalType} />
        ) : (
          <>
            <HeroSection />
            <ProductGrid />
            <SegmentsSection />
            <EvokeAdvantage />
            <PartnershipModel />
            <ContactForm />
          </>
        )}
      </main>
      <Footer />
      {!isLegal && (
        <a href="#contact" className="floating-cta" aria-label="Contact Us">
          <PhoneCall size={24} color="#fff" fill="#fff" />
        </a>
      )}
    </div>
  );
}

export default App;
