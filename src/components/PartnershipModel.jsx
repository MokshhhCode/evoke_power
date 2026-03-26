import { motion } from 'framer-motion';
import { DollarSign, Settings, Wifi, Wrench, CheckCircle2, TrendingUp } from 'lucide-react';
import './PartnershipModel.css';

const steps = [
  { icon: Wifi, step: '01', title: 'Install & Go Live', desc: 'We handle site assessment, charger installation, network setup, and commissioning—completely managed.' },
  { icon: Settings, step: '02', title: 'Set Your Pricing', desc: 'You control the per-unit price. Our platform enforces a ₹2/unit gateway fee; your margin is yours to define.' },
  { icon: DollarSign, step: '03', title: 'Revenue Flows Daily', desc: 'Every session generates revenue settled to your account within 24 hours via Razorpay—zero manual intervention.' },
  { icon: Wrench, step: '04', title: 'We Maintain, You Earn', desc: 'Unmanned operation. Our team handles upkeep, software updates, and customer support—your asset earns on autopilot.' },
];

const metrics = [
  { value: '₹2', label: 'Per Unit Gateway Fee', desc: 'Transparent, flat platform fee.' },
  { value: '100%', label: 'Revenue Ownership', desc: "Every rupee above the gateway fee is yours." },
  { value: '24H', label: 'Payment Settlement', desc: 'Daily payout via Razorpay.' },
  { value: '5yr', label: 'Hardware Warranty', desc: 'We cover the iron; you count the returns.' },
];

export default function PartnershipModel() {
  return (
    <section className="partnership" id="partnership">
      <div className="partnership__bg" aria-hidden="true">
        <div className="partnership__orb--l" />
        <div className="partnership__orb--r" />
      </div>

      <div className="container">
        <motion.div
          className="partnership__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Partnership Model</span>
          <h2 className="section-title">Unmanned Revenue.<br />Fully Managed Infrastructure.</h2>
          <p className="section-subtitle">
            Your premises becomes a profit center. Our technology, our maintenance, your income—a true passive revenue stream.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="partnership__steps">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.step}
                className="partner-step"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="partner-step__num">{s.step}</div>
                <div className="partner-step__content">
                  <div className="partner-step__icon-row">
                    <div className="icon-3d-housing partner-icon-size" style={{ '--theme-color': '#70B354' }}>
                      <Icon className="icon-3d-svg" size={24} strokeWidth={2.5} />
                    </div>
                    <h3 className="partner-step__title">{s.title}</h3>
                  </div>
                  <p className="partner-step__desc">{s.desc}</p>
                </div>
                {i < steps.length - 1 && <div className="partner-step__connector" />}
              </motion.div>
            );
          })}
        </div>

        {/* Metrics Row */}
        <motion.div
          className="partnership__metrics"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="partnership__metrics-header">
            <TrendingUp className="icon-3d-svg" size={20} strokeWidth={2.5} style={{ '--theme-color': '#70B354' }} />
            <span>Revenue Model at a Glance</span>
          </div>
          <div className="partnership__metrics-grid">
            {metrics.map(m => (
              <div key={m.label} className="partner-metric">
                <div className="partner-metric__value">{m.value}</div>
                <div className="partner-metric__label">{m.label}</div>
                <div className="partner-metric__desc">{m.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ROI pill */}
        <motion.div
          className="partnership__roi-pill"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CheckCircle2 className="icon-3d-svg" size={20} strokeWidth={2.5} style={{ '--theme-color': '#70B354' }} />
          <span>Average partner sites achieve full ROI within <strong>18–24 months</strong> with zero operational involvement</span>
        </motion.div>
      </div>
    </section>
  );
}
