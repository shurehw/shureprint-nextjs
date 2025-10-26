import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Shureprint',
  description: 'Privacy policy for Shureprint. How we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <div className="page-wrap">
      <Navigation />
      <main className="main-wrap">
        <section className="company-section" style={{ paddingTop: '6vw', paddingBottom: '6vw' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2vw' }}>
            <h1 className="company-heading" style={{ marginBottom: '2vw' }}>
              Privacy Policy
            </h1>

            <p style={{ fontSize: 'max(1vw, 16px)', marginBottom: '2vw', color: '#666' }}>
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div style={{ fontSize: 'max(1.1vw, 17px)', lineHeight: '1.8' }}>
              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginTop: '2vw', marginBottom: '1vw', fontWeight: 600 }}>
                Information We Collect
              </h2>
              <p style={{ marginBottom: '1.5vw' }}>
                When you contact us, place an order, or use our website, we may collect:
              </p>
              <ul style={{ marginBottom: '2vw', paddingLeft: '1.5vw' }}>
                <li style={{ marginBottom: '0.5vw' }}>Name and contact information (email, phone, address)</li>
                <li style={{ marginBottom: '0.5vw' }}>Business information and purchase history</li>
                <li style={{ marginBottom: '0.5vw' }}>Payment and billing information</li>
                <li style={{ marginBottom: '0.5vw' }}>Website usage data (cookies, IP address, browsing behavior)</li>
              </ul>

              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginTop: '2vw', marginBottom: '1vw', fontWeight: 600 }}>
                How We Use Your Information
              </h2>
              <p style={{ marginBottom: '1.5vw' }}>We use your information to:</p>
              <ul style={{ marginBottom: '2vw', paddingLeft: '1.5vw' }}>
                <li style={{ marginBottom: '0.5vw' }}>Process and fulfill your orders</li>
                <li style={{ marginBottom: '0.5vw' }}>Communicate about your projects and orders</li>
                <li style={{ marginBottom: '0.5vw' }}>Send invoices and payment reminders</li>
                <li style={{ marginBottom: '0.5vw' }}>Improve our products and services</li>
                <li style={{ marginBottom: '0.5vw' }}>Send occasional updates (you can opt out anytime)</li>
              </ul>

              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginTop: '2vw', marginBottom: '1vw', fontWeight: 600 }}>
                Information Sharing
              </h2>
              <p style={{ marginBottom: '1.5vw' }}>
                We don&apos;t sell your information. We may share it with:
              </p>
              <ul style={{ marginBottom: '2vw', paddingLeft: '1.5vw' }}>
                <li style={{ marginBottom: '0.5vw' }}>Service providers (payment processors, shipping companies)</li>
                <li style={{ marginBottom: '0.5vw' }}>Manufacturing partners (only what&apos;s needed for production)</li>
                <li style={{ marginBottom: '0.5vw' }}>Legal authorities (if required by law)</li>
              </ul>

              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginTop: '2vw', marginBottom: '1vw', fontWeight: 600 }}>
                Data Security
              </h2>
              <p style={{ marginBottom: '1.5vw' }}>
                We take reasonable measures to protect your information from unauthorized access, including secure servers, encryption, and access controls. However, no system is 100% secure.
              </p>

              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginTop: '2vw', marginBottom: '1vw', fontWeight: 600 }}>
                Your Rights
              </h2>
              <p style={{ marginBottom: '1.5vw' }}>You have the right to:</p>
              <ul style={{ marginBottom: '2vw', paddingLeft: '1.5vw' }}>
                <li style={{ marginBottom: '0.5vw' }}>Access the information we have about you</li>
                <li style={{ marginBottom: '0.5vw' }}>Request corrections to your information</li>
                <li style={{ marginBottom: '0.5vw' }}>Request deletion of your information</li>
                <li style={{ marginBottom: '0.5vw' }}>Opt out of marketing communications</li>
              </ul>

              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginTop: '2vw', marginBottom: '1vw', fontWeight: 600 }}>
                Cookies
              </h2>
              <p style={{ marginBottom: '1.5vw' }}>
                Our website uses cookies to improve your browsing experience and understand how visitors use our site. You can disable cookies in your browser settings, but some features may not work properly.
              </p>

              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginTop: '2vw', marginBottom: '1vw', fontWeight: 600 }}>
                Changes to This Policy
              </h2>
              <p style={{ marginBottom: '1.5vw' }}>
                We may update this policy occasionally. Changes will be posted on this page with an updated date.
              </p>

              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginTop: '2vw', marginBottom: '1vw', fontWeight: 600 }}>
                Contact Us
              </h2>
              <p style={{ marginBottom: '1.5vw' }}>
                If you have questions about this privacy policy or want to exercise your rights, contact us through our contact page.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
