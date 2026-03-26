import { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { ChevronRight, ArrowDown, Zap, Shield, Clock } from 'lucide-react';
import './HeroSection.css';

const stats = [
  { value: '3.3kW', label: 'Min Charge Rate' },
  { value: '480kW', label: 'Max Charge Rate' },
  { value: '5 Yr', label: 'Warranty' },
  { value: '24H', label: 'Settlement' },
];

const FLOAT_VARIANTS = {
  initial: { opacity: 0, y: 30 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="hero" id="home" aria-label="Hero">
      {/* — Real Photo Background — */}
      <div className="hero__photo-bg" aria-hidden="true">
        {/* Real EV charging station photo from Unsplash */}
        <img
          src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1920&q=80&fit=crop"
          alt=""
          className="hero__photo-img"
        />
        <div className="hero__photo-overlay" />
      </div>

      {/* — Liquid Glass Orbs on top — */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__grid" />
        <div className="hero__scanline" />
      </div>

      <motion.div className="container hero__content" style={{ y, opacity }}>
        {/* Eyebrow */}
        <motion.div custom={0} variants={FLOAT_VARIANTS} initial="initial" animate="animate">
          <span className="section-label">India's Industrial EV Charging Partner</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 custom={1} variants={FLOAT_VARIANTS} initial="initial" animate="animate" className="hero__headline">
          Empowering the
          <br />
          <span className="hero__headline-accent">Future of Mobility</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p custom={2} variants={FLOAT_VARIANTS} initial="initial" animate="animate" className="hero__sub">
          High-performance charging solutions from 3.3kW to 480kW.
          <br />
          Built for reliability, designed for scale.
        </motion.p>

        {/* CTAs */}
        <motion.div custom={3} variants={FLOAT_VARIANTS} initial="initial" animate="animate" className="hero__ctas">
          <a href="#contact" className="btn-primary hero__btn-primary" id="hero-get-started">
            Request Installation <ChevronRight size={18} />
          </a>
          <a href="#products" className="btn-secondary" id="hero-view-products">
            View Products
          </a>
        </motion.div>

        {/* Trust Chips */}
        <motion.div custom={4} variants={FLOAT_VARIANTS} initial="initial" animate="animate" className="hero__trust">
          <div className="hero__trust-chip">
            <Zap size={14} color="#70B354" /> Indigenous Build
          </div>
          <div className="hero__trust-chip">
            <Shield size={14} color="#70B354" /> 5-Year Warranty
          </div>
          <div className="hero__trust-chip">
            <Clock size={14} color="#70B354" /> 24H Settlement
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          custom={5} variants={FLOAT_VARIANTS} initial="initial" animate="animate"
          className="hero__stats"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="hero__stat">
              <div className="hero__stat-value">{stat.value}</div>
              <div className="hero__stat-label">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#products"
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        aria-label="Scroll to Products"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
