import { motion } from 'framer-motion';
import { Flag, Award, Clock, ShieldCheck, Banknote, Wrench } from 'lucide-react';
import './EvokeAdvantage.css';

const advantages = [
  {
    icon: Flag,
    title: 'Low Import Reliance',
    subtitle: 'Indigenous Build',
    desc: 'Over 70% locally sourced components. Reduced dependency on global supply chains means better uptime, faster service, and competitive pricing.',
    color: '#70B354',
  },
  {
    icon: Award,
    title: 'Superior Build Quality',
    subtitle: 'Hardware First',
    desc: 'Each unit is IP54-rated, CE/BIS certified, and tested at 10,000 charge cycles prior to deployment. Built to last a decade.',
    color: '#7C3AED',
  },
  {
    icon: Clock,
    title: '24-Hour Settlement',
    subtitle: 'Revenue Clarity',
    desc: 'Your revenue from every session is settled within 24 hours—no withheld funds, no lengthy reconciliation. Powered by Razorpay.',
    color: '#D14F2B',
  },
  {
    icon: ShieldCheck,
    title: '5-Year Comprehensive Warranty',
    subtitle: 'Zero-Risk Hardware',
    desc: 'Full cover on all hardware components including PCB, connectors, and display. Backed by an on-ground service team across India.',
    color: '#70B354',
  },
  {
    icon: Banknote,
    title: 'In-house Finance Options',
    subtitle: 'Capital Light Entry',
    desc: 'Start with minimal upfront investment. Our dedicated financing desk offers EMI and revenue-sharing structures for qualified partners.',
    color: '#7C3AED',
  },
  {
    icon: Wrench,
    title: 'Prompt Service SLA',
    subtitle: '4-Hour Response',
    desc: '95% of all field escalations resolved within 4 hours. Our engineers are stationed across key corridors for immediate intervention.',
    color: '#D14F2B',
  },
];

export default function EvokeAdvantage() {
  return (
    <section className="advantage" id="advantage">
      {/* Background accent */}
      <div className="advantage__bg" aria-hidden="true">
        <div className="advantage__orb" />
      </div>

      <div className="container">
        <motion.div
          className="advantage__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">The Evoke Advantage</span>
          <h2 className="section-title">Why Industry Leaders<br />Choose Evoke</h2>
          <p className="section-subtitle">
            Six pillars that differentiate us from generic EV charging providers—embedded in every product, process, and partnership.
          </p>
        </motion.div>

        <div className="advantage__grid">
          {advantages.map((adv, i) => (
            <AdvantageCard key={adv.title} adv={adv} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AdvantageCard({ adv, index }) {
  const Icon = adv.icon;
  return (
    <motion.div
      className="adv-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
    >
      <div className="icon-3d-housing adv-icon-size" style={{ '--theme-color': adv.color }}>
        <Icon className="icon-3d-svg" size={24} strokeWidth={2.5} />
      </div>
      <div className="adv-card__subtitle" style={{ color: adv.color }}>{adv.subtitle}</div>
      <h3 className="adv-card__title">{adv.title}</h3>
      <p className="adv-card__desc">{adv.desc}</p>
      <div className="adv-card__bar" style={{ background: `linear-gradient(90deg, ${adv.color}, transparent)` }} />
    </motion.div>
  );
}
