import { Zap, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import './Footer.css';

const policyLinks = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms & Conditions', href: '#terms' },
  { label: 'Refund & Cancellation Policy', href: '#refund' },
  { label: 'Shipping & Delivery Policy', href: '#shipping' },
];

const quickLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Segments', href: '#segments' },
  { label: 'The Evoke Advantage', href: '#advantage' },
  { label: 'Partnership Model', href: '#partnership' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__divider" />
      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <div className="footer__logo-icon">
              <Zap size={18} strokeWidth={2.5} color="#70B354" />
            </div>
            <span className="footer__logo-text">EVOKE <span className="footer__logo-accent">POWER</span></span>
          </div>
          <p className="footer__tagline">
            High-performance EV charging infrastructure built for India's commercial and residential landscape.
          </p>
          <div className="footer__contact-list">
            <div className="footer__contact-item"><Mail size={14} />aryan.shinde@evokepower.in</div>
            <div className="footer__contact-item"><Phone size={14} />+91 7399469999</div>
            <div className="footer__contact-item"><MapPin size={14} />Satara-Pandharpur Highway, Koregaon, Satara</div>
          </div>
          <div className="footer__gstin">EVOKE POWER LLP | Owner: Aryan Shinde</div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <div className="footer__col-title">Quick Links</div>
          <ul className="footer__links">
            {quickLinks.map(l => (
              <li key={l.label}><a href={l.href} className="footer__link">{l.label}</a></li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="footer__col">
          <div className="footer__col-title">Legal & Compliance</div>
          <ul className="footer__links">
            {policyLinks.map(l => (
              <li key={l.label}>
                <a href={l.href} className="footer__link footer__link--policy">
                  {l.label} <ExternalLink size={11} />
                </a>
              </li>
            ))}
          </ul>
          <div className="footer__razorpay">
            <div className="footer__razorpay-dot" />
            <span>Payments via Razorpay</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span className="footer__copy">© {year} EVOKE POWER LLP. All rights reserved.</span>
          <span className="footer__made">Engineered in India 🇮🇳</span>
        </div>
      </div>
    </footer>
  );
}
