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

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <ProductGrid />
        <SegmentsSection />
        <EvokeAdvantage />
        <PartnershipModel />
        <ContactForm />
      </main>
      <Footer />
      <a href="#contact" className="floating-cta" aria-label="Contact Us">
        <PhoneCall size={24} color="#fff" fill="#fff" />
      </a>
    </div>
  );
}

export default App;
