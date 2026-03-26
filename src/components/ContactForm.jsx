import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MapPin, MessageSquare, Building2, ChevronDown } from 'lucide-react';
import './ContactForm.css';

const intents = ['Request Installation', 'Partner with Us', 'Franchise Enquiry', 'Technical Support', 'Other'];
const segments = ['Mall', 'Society / Apartment', 'Office / IT Park', 'Petrol Pump', 'Restaurant', 'Hotel', 'Highway / Corridor', 'Industrial Park'];

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', segment: '', intent: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://formsubmit.co/ajax/aryan.shinde@evokepower.in", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New EVOKE POWER Enquiry from ${form.name}`,
          _template: "table",
          _captcha: "false",
          Name: form.name,
          Email: form.email,
          Phone: form.phone,
          City: form.city,
          Property_Type: form.segment,
          Purpose: form.intent,
          Message: form.message || 'No additional details provided.'
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError("Failed to send enquiry. Please try again or contact us directly.");
      }
    } catch (err) {
      setError("A network error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__bg" aria-hidden="true">
        <div className="contact__orb" />
      </div>

      <div className="container contact__inner">
        {/* Left: Info */}
        <motion.div
          className="contact__info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Contact / Lead Gen</span>
          <h2 className="section-title">Start Your EV<br />Charging Journey</h2>
          <p className="contact__info-desc">
            Whether you want to install chargers at your property or explore a franchise partnership, our team responds within 2 working hours.
          </p>

          <div className="contact__detail-list">
            <div className="contact__detail"><Mail size={16} color="#70B354" /><span>aryan.shinde@evokepower.in</span></div>
            <div className="contact__detail"><Phone size={16} color="#70B354" /><span>+91 7399469999</span></div>
            <div className="contact__detail"><MapPin size={16} color="#70B354" /><span>Satara-Pandharpur Highway, Koregaon, Satara</span></div>
            <div className="contact__detail"><Building2 size={16} color="#70B354" /><span>EVOKE POWER LLP | Owner: Aryan Shinde</span></div>
          </div>

          <div className="contact__razorpay-badge">
            <div className="contact__razorpay-dot" />
            <span>Payments Powered by Razorpay | PCI DSS Compliant</span>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          className="contact__form-wrap"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {submitted ? (
            <div className="contact__success">
              <div className="contact__success-icon">✓</div>
              <h3>Enquiry Received</h3>
              <p>Our team will reach out within 2 working hours. Thank you for choosing EVOKE POWER.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} id="installation-form" noValidate>
              <h3 className="contact__form-title">Request Installation / Partner Enquiry</h3>

              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="cf-name">Full Name *</label>
                  <div className="contact__input-wrap">
                    <User size={15} className="contact__input-icon" />
                    <input id="cf-name" name="name" type="text" placeholder="Aryan Shinde" value={form.name} onChange={handleChange} required />
                  </div>
                </div>
                <div className="contact__field">
                  <label htmlFor="cf-email">Email Address *</label>
                  <div className="contact__input-wrap">
                    <Mail size={15} className="contact__input-icon" />
                    <input id="cf-email" name="email" type="email" placeholder="you@company.in" value={form.email} onChange={handleChange} required />
                  </div>
                </div>
              </div>

              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="cf-phone">Phone Number *</label>
                  <div className="contact__input-wrap">
                    <Phone size={15} className="contact__input-icon" />
                    <input id="cf-phone" name="phone" type="tel" placeholder="+91 73994 69999" value={form.phone} onChange={handleChange} required />
                  </div>
                </div>
                <div className="contact__field">
                  <label htmlFor="cf-city">City / Location *</label>
                  <div className="contact__input-wrap">
                    <MapPin size={15} className="contact__input-icon" />
                    <input id="cf-city" name="city" type="text" placeholder="Satara, Maharashtra" value={form.city} onChange={handleChange} required />
                  </div>
                </div>
              </div>

              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="cf-segment">Property Type</label>
                  <div className="contact__input-wrap contact__select-wrap">
                    <Building2 size={15} className="contact__input-icon" />
                    <select id="cf-segment" name="segment" value={form.segment} onChange={handleChange}>
                      <option value="">Select segment...</option>
                      {segments.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <ChevronDown size={15} className="contact__select-arrow" />
                  </div>
                </div>
                <div className="contact__field">
                  <label htmlFor="cf-intent">Purpose *</label>
                  <div className="contact__input-wrap contact__select-wrap">
                    <MessageSquare size={15} className="contact__input-icon" />
                    <select id="cf-intent" name="intent" value={form.intent} onChange={handleChange} required>
                      <option value="">Select purpose...</option>
                      {intents.map(i => <option key={i} value={i}>{i}</option>)}
                    </select>
                    <ChevronDown size={15} className="contact__select-arrow" />
                  </div>
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="cf-message">Additional Details</label>
                <textarea id="cf-message" name="message" rows={4} placeholder="Tell us about your premises, number of parking slots, daily footfall..." value={form.message} onChange={handleChange} />
              </div>

              {error && <div className="contact__error-message" style={{ color: '#ff6b6b', fontSize: '14px', marginBottom: '16px' }}>{error}</div>}

              <button type="submit" className="btn-primary contact__submit" id="contact-submit-btn" disabled={isSubmitting} style={{ opacity: isSubmitting ? 0.7 : 1 }}>
                {isSubmitting ? 'Sending...' : 'Submit Enquiry'} {!isSubmitting && <Send size={16} />}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
