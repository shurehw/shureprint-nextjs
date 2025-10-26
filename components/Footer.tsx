'use client';

import Link from 'next/link';

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Newsletter submission logic would go here
  };

  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="footer_column">
          <h5 className="footer_heading">Navigation</h5>
          <Link href="/" className="footer_link">
            Home
          </Link>
          <Link href="/capabilities" className="footer_link">
            Capabilities
          </Link>
          <Link href="/product" className="footer_link">
            Product Offerings
          </Link>
          <Link href="/contact-page" className="footer_link">
            Contact Us
          </Link>
        </div>
        <div className="footer_column">
          <h5 className="footer_heading">Contact</h5>
          <Link href="tel:3235269500" className="footer_link">
            323.526.9500
          </Link>
          <Link href="mailto:info@shureprint.com" className="footer_link">
            info@shureprint.com
          </Link>
          <Link
            href="https://www.google.com/maps/place/2215+S+Santa+Fe+Ave,+Los+Angeles,+CA+90058"
            target="_blank"
            rel="noopener noreferrer"
            className="footer_link"
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
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <input
                type="email"
                className="text-field is--footer w-input"
                maxLength={256}
                name="Email"
                placeholder="Email"
                required
              />
              <input
                type="submit"
                value="→"
                className="footer-button is--newsletter w-button"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="footer_text">© 2024 Shureprint. All rights reserved.</div>
        <div className="footer_links">
          <Link href="https://shurepreint.b2bwave.com/" className="footer_link">
            Client Portal
          </Link>
          <Link href="/contact-page" className="footer_link">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
