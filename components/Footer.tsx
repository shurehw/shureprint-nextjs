'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <footer style={{ background: '#000', color: '#fff', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: '6rem 3rem 3rem' }}>
      <div style={{ width: '100%', maxWidth: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem', paddingBottom: '3rem', marginBottom: '2rem', borderBottom: '1px solid #333' }}>
          <div className="footer_column">
            <h5 className="footer_heading">Navigation</h5>
            <Link href="/" className="footer_link" aria-label="Home">
              Home
            </Link>
            <Link href="/about" className="footer_link" aria-label="About Shureprint">
              About
            </Link>
            <Link href="/capabilities" className="footer_link" aria-label="Our capabilities and services">
              Capabilities
            </Link>
            <Link href="/shop" className="footer_link" aria-label="Shop custom packaging products">
              Shop
            </Link>
            <Link href="/contact-page" className="footer_link" aria-label="Contact us">
              Contact
            </Link>
          </div>
          <div className="footer_column">
            <h5 className="footer_heading">Contact</h5>
            <Link href="tel:3235269500" className="footer_link" aria-label="Call Shureprint at 323-526-9500">
              323.526.9500
            </Link>
            <Link href="mailto:info@shureprint.com" className="footer_link" aria-label="Email Shureprint at info@shureprint.com">
              info@shureprint.com
            </Link>
            <Link
              href="https://www.google.com/maps/place/2215+S+Santa+Fe+Ave,+Los+Angeles,+CA+90058"
              target="_blank"
              rel="noopener noreferrer"
              className="footer_link"
              aria-label="View Shureprint location on Google Maps: 2215 S Santa Fe Ave, Los Angeles, CA 90058"
            >
              2215 S Santa Fe Ave<br />Los Angeles, CA 90058
            </Link>
          </div>
          <div className="footer_column">
            <h5 className="footer_heading">Hours</h5>
            <div className="footer_link">Mon-Fri: 8:00am-5:00pm</div>
            <div className="footer_link">Sat-Sun: Closed</div>
          </div>
          <div className="footer_column">
            <h5 className="footer_heading">Newsletter</h5>
            <div className="form-block w-form">
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form" style={{ display: showSuccess ? 'none' : 'flex', gap: '0.5rem' }}>
                <label htmlFor="newsletter-email" className="sr-only">Email address for newsletter</label>
                <input
                  type="email"
                  id="newsletter-email"
                  className="text-field is--footer w-input"
                  maxLength={256}
                  name="Email"
                  placeholder="Email"
                  required
                  aria-required="true"
                />
                <input
                  type="submit"
                  value="→"
                  className="footer-button is--newsletter w-button"
                  aria-label="Subscribe to newsletter"
                />
              </form>
              <div className="newsletter-success" style={{ display: showSuccess ? 'block' : 'none', color: '#fff', fontSize: '0.9rem' }} role="status" aria-live="polite">
                <div>Thank you! Your submission has been received!</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div className="footer_text">
            © 2024 Shureprint. All rights reserved.
            <span style={{ margin: '0 1rem', color: '#999' }}>•</span>
            Powered by <Link href="https://shurehospitalitywholesale.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', transition: 'opacity 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>Shure Hospitality Wholesale</Link>
          </div>
          <div className="footer_links">
            <Link href="https://shureprint.b2bwave.com/" className="footer_link" aria-label="Client portal login">
              Client Portal
            </Link>
            <Link href="/privacy" className="footer_link" aria-label="Privacy policy">
              Privacy Policy
            </Link>
            <Link href="/terms" className="footer_link" aria-label="Terms and conditions">
              Terms & Conditions
            </Link>
            <Link href="/about" className="footer_link" aria-label="About Shureprint">
              About Us
            </Link>
            <Link href="/client-list" className="footer_link" aria-label="View our client list">
              Clients
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
