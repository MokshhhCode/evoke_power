import { motion } from 'framer-motion';
import { Zap, Home, Building2, Truck, Star, TrendingUp } from 'lucide-react';
import './ProductGrid.css';

const products = [
  {
    id: 'ac-home',
    tier: 'AC Home',
    power: '3.3kW',
    type: 'AC',
    subtitle: 'Residential & Light Commercial',
    icon: Home,
    color: '#70B354',
    badge: 'Ownership',
    badgeVariant: 'badge-green',
    features: ['Type-2 Connector', 'Smart Load Management', 'Mobile App Control', 'NFC Payment Ready'],
    ideal: 'Housing Societies · Apartments · Offices',
  },
  {
    id: 'ac-commercial',
    tier: 'AC Commercial',
    power: '22kW',
    type: 'AC',
    subtitle: 'Commercial & Fleet Charging',
    icon: Building2,
    color: '#7C3AED',
    badge: 'Co-ownership',
    badgeVariant: 'badge-violet',
    features: ['CCS2 + CHAdeMO', 'OCPP 1.6/2.0', 'Revenue Dashboard', 'Multi-user Access'],
    sessions: '6× faster than home',
    ideal: 'Malls · Hotels · Restaurants',
    featured: true,
  },
  {
    id: 'dc-fast',
    tier: 'DC Fast',
    power: '60kW',
    type: 'DC',
    subtitle: 'Fast DC Charging',
    icon: Zap,
    color: '#D14F2B',
    badge: 'Franchise',
    badgeVariant: 'badge-orange',
    features: ['CCS2 + CHAdeMO', 'RFID + App Auth', 'Real-time Monitoring', '24×7 Support'],
    sessions: '80% in ~30 min',
    ideal: 'Petrol Pumps · Highway Stops',
  },
  {
    id: 'dc-ultra',
    tier: 'DC Ultra-Fast',
    power: '120kW',
    type: 'DC',
    subtitle: 'High-Capacity DC Hub',
    icon: TrendingUp,
    color: '#70B354',
    badge: 'Co-ownership',
    badgeVariant: 'badge-green',
    features: ['Dual Simultaneous Charge', 'Dynamic Load Balancing', 'Grid Integration', 'Remote Diagnostics'],
    sessions: '80% in ~20 min',
    ideal: 'Fleet Depots · Large Malls',
  },
  {
    id: 'dc-hyperfast',
    tier: 'DC Hyperfast',
    power: '240kW',
    type: 'DC',
    subtitle: 'Highway-Grade Infrastructure',
    icon: Truck,
    color: '#7C3AED',
    badge: 'Franchise',
    badgeVariant: 'badge-violet',
    features: ['4 Simultaneous Sessions', 'Modular Design', 'V2G Ready', 'AI Demand Prediction'],
    sessions: '80% in 10 min',
    ideal: 'Highways · Interstate Corridors',
  },
  {
    id: 'dc-industrial',
    tier: 'DC Industrial',
    power: '480kW',
    type: 'DC',
    subtitle: 'Industrial Mega-Charging Hub',
    icon: Star,
    color: '#D14F2B',
    badge: 'Flagship',
    badgeVariant: 'badge-orange',
    features: ['6 Simultaneous Sessions', 'Liquid Cooled Cable', 'Substation Integration', 'Enterprise SLA'],
    sessions: '80% in <8 min',
    ideal: 'Bus Depots · Industrial Parks',
    featured: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ProductGrid() {
  return (
    <section className="products" id="products">
      <div className="container">
        <motion.div
          className="products__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Hardware Portfolio</span>
          <h2 className="section-title">Charging Solutions for Every Scale</h2>
          <p className="section-subtitle">
            From residential AC chargers to industrial 480kW DC hubs—every unit built with Indigenous precision and tested to global standards.
          </p>

          {/* Model selector tabs */}
          <div className="products__models" role="list" aria-label="Business models">
            {['Ownership', 'Co-ownership', 'Franchise'].map(m => (
              <div key={m} className="products__model-chip">{m}</div>
            ))}
          </div>
        </motion.div>

        <div className="products__grid">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  const Icon = product.icon;
  return (
    <motion.div
      className={`product-card ${product.featured ? 'product-card--featured' : ''}`}
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
    >
      <div className="product-card__beam" style={{ background: `linear-gradient(90deg, ${product.color}, transparent)` }} />
      
      <div className="product-card__header">
        <div className={`badge ${product.badgeVariant}`}>{product.badge}</div>
        <div className="product-card__type" style={{ color: product.color, borderColor: `${product.color}30` }}>{product.type}</div>
      </div>

      {/* Power */}
      <div className="product-card__power-row">
        <div className="icon-3d-housing" style={{ '--theme-color': product.color }}>
          <Icon className="icon-3d-svg" size={26} strokeWidth={2.5} />
        </div>
        <div>
          <div className="product-card__power">{product.power}</div>
          <div className="product-card__tier">{product.tier}</div>
        </div>
      </div>

      <p className="product-card__subtitle">{product.subtitle}</p>

      {/* Sessions stat */}
      <div className="product-card__speed" style={{ borderColor: `${product.color}33` }}>
        <Zap size={13} color={product.color} />
        <span style={{ color: product.color }}>{product.sessions}</span>
      </div>

      {/* Features */}
      <ul className="product-card__features">
        {product.features.map(f => (
          <li key={f} className="product-card__feature">
            <div className="product-card__feature-dot" style={{ background: product.color }} />
            {f}
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="product-card__footer">
        <div className="product-card__ideal">{product.ideal}</div>
        <a href="#contact" className="btn-primary product-card__btn-quote" style={{ marginTop: '12px', width: '100%', justifyContent: 'center', padding: '12px 16px', fontSize: '14px' }}>
          Get Quote →
        </a>
      </div>
    </motion.div>
  );
}
