import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import './LegalPage.css';

const content = {
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'March 27, 2026',
    sections: [
      { h: 'Information We Collect', p: 'We collect information you provide directly to us when you request an installation, franchise, or technical support. This includes your name, email address, phone number, and property details. For charging sessions via our app, we collect vehicle details and charging history.' },
      { h: 'How We Use Your Information', p: 'We use the information to respond to your inquiries, process your partner applications, securely process payments, and provide customer support for our EV charging infrastructure. Location data is used to help you find the nearest EVOKE station.' },
      { h: 'Data Security', p: 'We implement industry-standard security measures, including Razorpay\'s PCI DSS compliant gateway for all transactions. Your personal and financial data is strictly protected and never sold to third parties.' },
      { h: 'User Rights', p: 'You have the right to request access to, correction, or deletion of your personal data stored on our platform. Contact our support team for any data-related requests.' },
      { h: 'Contact Us', p: 'If you have questions about this policy or your data, contact us directly at aryan.shinde@evokepower.in.' }
    ]
  },
  terms: {
    title: 'Terms & Conditions',
    lastUpdated: 'March 27, 2026',
    sections: [
      { h: 'Acceptance of Terms', p: 'By using EVOKE POWER LLP services, our website, mobile application, or physical charging infrastructure, you agree to comply with and be bound by these terms. If you do not agree, please do not use our services.' },
      { h: 'Service Usage & Guidelines', p: 'Our EV chargers are provided exclusively for designated electric vehicles. Users must follow all posted safety guidelines, hardware instructions, and parking regulations at our charging stations. Misuse of equipment may result in account suspension.' },
      { h: 'Payments & Gateway', p: 'All transactions for charging sessions and partnership deposits are final and processed securely via the Razorpay payment gateway. You agree to provide accurate payment information. EVOKE POWER is not liable for temporary service interruptions from banking partners.' },
      { h: 'Liability Limitations', p: 'EVOKE POWER LLP is not liable for indirect, incidental, or consequential damages to vehicles or devices resulting from improper use of the charging equipment, natural disasters, or grid power surges.' },
      { h: 'Governing Law & Jurisdiction', p: 'These terms are governed by the laws of India. Any disputes arising from or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in Satara, Maharashtra.' }
    ]
  },
  refund: {
    title: 'Refund & Cancellation Policy',
    lastUpdated: 'March 27, 2026',
    sections: [
      { h: 'Charging Sessions', p: 'Once an EV charging session has commenced and electricity is successfully dispensed, the transaction cannot be cancelled. If a session is interrupted due to hardware failure, power outage, or a system error on our end, the unutilized wallet amount will be automatically refunded to your original payment method within 5-7 business days.' },
      { h: 'Partner & Franchise Investments', p: 'Deposits and payments made for hardware installation or franchise rights are subject to the specific terms outlined in your signed partnership agreement. Please refer to your contract for the exact cancellation clauses and forfeiture percentages.' },
      { h: 'Failed Transactions', p: 'If money is debited from your account but the charging session fails to start (e.g., due to network timeouts), the full amount will be automatically refunded by our payment gateway (Razorpay) within 48 to 72 hours without manual intervention.' },
      { h: 'Requesting a Manual Refund', p: 'If you believe you have been incorrectly charged, please email details of the transaction to aryan.shinde@evokepower.in within 7 days of the incident for review.' }
    ]
  },
  shipping: {
    title: 'Shipping & Delivery Policy',
    lastUpdated: 'March 27, 2026',
    sections: [
      { h: 'Hardware Delivery (B2B)', p: 'For our franchise and installation partners, charging units (AC or DC) are dispatched within 14-21 business days from the date of receiving the initial deposit and successful site assessment completion.' },
      { h: 'Logistics Partners', p: 'We utilize premium, verified industrial logistics partners for transporting heavy EV chargers safely across India. You will receive an official tracking link to monitor your unit\'s journey once it departs from our manufacturing/assembly facility.' },
      { h: 'Installation Timelines', p: 'Physical delivery is followed by the installation process. Our engineering team typically requires 3-7 additional business days post-delivery to complete physical commissioning, grid integration, and digital onboarding, depending on site readiness.' },
      { h: 'Digital Services Delivery', p: 'Software access, CMS dashboard credentials, and remote monitoring capabilities are delivered digitally to your registered email address immediately upon successful hardware verification.' }
    ]
  }
};

export default function LegalPage({ type }) {
  const data = content[type];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  if (!data) return null;

  return (
    <div className="legal-page">
      <div className="container legal-page__inner">
        <a href="#" className="legal-page__back">
          <ArrowLeft size={16} /> Back to Home
        </a>
        <h1 className="legal-page__title">{data.title}</h1>
        <div className="legal-page__meta">Last Updated: {data.lastUpdated}</div>
        
        <div className="legal-page__content">
          <p>
            Welcome to EVOKE POWER LLP. Please read these {data.title.toLowerCase()} carefully. 
            This document sets forth the legal obligations and rights governing your use of our EV charging infrastructure, digital platforms, and partnership models as required by Indian banking and compliance standards.
          </p>
          
          {data.sections.map((sec, i) => (
            <div key={i} className="legal-page__section">
              <h2>{i + 1}. {sec.h}</h2>
              <p>{sec.p}</p>
            </div>
          ))}

          <div className="legal-page__section">
            <h2>Company Information</h2>
            <div className="legal-page__contact-box">
              <p><strong>Evoke Power LLP</strong></p>
              <p>Owner: Aryan Shinde</p>
              <p>Registration/Operations: Satara-Pandharpur Highway, Koregaon, Satara, Maharashtra, India</p>
              <p>Email: <a href="mailto:aryan.shinde@evokepower.in" style={{ color: 'var(--green)' }}>aryan.shinde@evokepower.in</a></p>
              <p>Phone: +91 7399469999</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
