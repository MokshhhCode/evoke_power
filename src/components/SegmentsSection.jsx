import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Building2, Briefcase, Droplets, UtensilsCrossed, Hotel, Navigation2, Users } from 'lucide-react';
import './SegmentsSection.css';

const segments = [
  { id: 'malls', label: 'Malls', icon: ShoppingBag, color: '#70B354', desc: 'Premium EV charging as a tenant amenity' },
  { id: 'societies', label: 'Societies', icon: Users, color: '#7C3AED', desc: 'Shared & individual home charging hubs' },
  { id: 'offices', label: 'Offices', icon: Briefcase, color: '#D14F2B', desc: 'Employee and visitor charging at premises' },
  { id: 'petrol-pumps', label: 'Petrol Pumps', icon: Droplets, color: '#70B354', desc: 'Future-ready EV lane integration' },
  { id: 'restaurants', label: 'Restaurants', icon: UtensilsCrossed, color: '#7C3AED', desc: 'Charge while customers dine' },
  { id: 'hotels', label: 'Hotels', icon: Hotel, color: '#D14F2B', desc: 'Premium hospitality charging suite' },
  { id: 'highways', label: 'Highways', icon: Navigation2, color: '#70B354', desc: 'Long-range corridor fast charging' },
  { id: 'others', label: 'Industrial Parks', icon: Building2, color: '#7C3AED', desc: 'Fleet & logistics depot charging hubs' },
];

export default function SegmentsSection() {
  const trackRef = useRef(null);

  return (
    <section className="segments" id="segments">
      <div className="container">
        <motion.div
          className="segments__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Target Segments</span>
          <h2 className="section-title">Built for Every Venue,<br />Scaled for Every Need</h2>
          <p className="section-subtitle">
            Our infrastructure seamlessly integrates across diverse commercial and residential environments.
          </p>
        </motion.div>
      </div>

      {/* Scroll Track */}
      <div className="segments__scroll-outer" ref={trackRef}>
        <div className="segments__track">
          {[...segments, ...segments].map((seg, i) => (
            <SegmentCard key={`${seg.id}-${i}`} seg={seg} index={i % segments.length} />
          ))}
        </div>
      </div>

      {/* Grid view on mobile / wide screens */}
      <div className="container">
        <div className="segments__grid">
          {segments.map((seg, i) => (
            <SegmentCard key={seg.id} seg={seg} index={i} grid />
          ))}
        </div>
      </div>
    </section>
  );
}

function SegmentCard({ seg, index, grid }) {
  const Icon = seg.icon;
  return (
    <motion.div
      className={`segment-card ${grid ? 'segment-card--grid' : ''}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: grid ? index * 0.07 : 0, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.04, transition: { duration: 0.25 } }}
    >
      <div className="icon-3d-housing segment-icon-size" style={{ '--theme-color': seg.color }}>
        <Icon className="icon-3d-svg" size={28} strokeWidth={2.5} />
      </div>
      <div className="segment-card__label">{seg.label}</div>
      <div className="segment-card__desc">{seg.desc}</div>
    </motion.div>
  );
}
