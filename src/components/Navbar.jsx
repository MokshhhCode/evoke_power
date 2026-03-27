import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Segments', href: '#segments' },
  { label: 'Advantage', href: '#advantage' },
  { label: 'Partnership', href: '#partnership' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container navbar__inner">
          {/* Logo Image */}
          <a href="#" className="navbar__logo" aria-label="EVOKE POWER Home">
            <img
              src="/evoke-logo.png"
              alt="Evoke Power Logo"
              className="navbar__logo-img"
            />
            <div className="navbar__logo-text">
              <span className="navbar__logo-evoke">EVOKE</span>
              <span className="navbar__logo-power">POWER</span>
            </div>
          </a>

          {/* Desktop Links */}
          <ul className="navbar__links" role="list">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} className="navbar__link">{link.label}</a>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="navbar__actions">
            <a href="#contact" className="btn-primary navbar__cta" id="hero-partner-cta">
              Partner With Us <ChevronRight size={16} />
            </a>
            <button
              className="navbar__hamburger"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="mobile-drawer__links" role="list">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="mobile-drawer__link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setMobileOpen(false)}>
                  Partner With Us
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
