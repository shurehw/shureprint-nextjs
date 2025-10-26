import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Sourcing | Shureprint',
  description: 'Domestic and international sourcing for custom packaging. We find the right manufacturers for your budget and quality standards.',
};

export default function SourcingPage() {
  return (
    <div className="page-wrap">
      <Navigation />
      <main className="main-wrap">
        <section className="company-section" style={{ paddingTop: '6vw', paddingBottom: '6vw' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2vw' }}>
            <h1 className="company-heading" style={{ marginBottom: '2vw' }}>
              Sourcing
            </h1>

            <div style={{ fontSize: 'max(1.2vw, 18px)', lineHeight: '1.8', marginBottom: '3vw' }}>
              <p style={{ marginBottom: '1.5vw' }}>
                We work with manufacturers domestically and internationally to find the right fit for your project. Budget matters, but so does quality—we help you balance both.
              </p>
              <p style={{ marginBottom: '1.5vw' }}>
                Our network includes vetted partners across the US and Asia, all with proven track records for reliability and quality control.
              </p>
            </div>

            <div style={{ marginBottom: '3vw', padding: '2vw', backgroundColor: '#f6efe8', borderRadius: '0.5vw' }}>
              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginBottom: '1.5vw', fontWeight: 600 }}>
                Domestic vs International
              </h2>
              <div style={{ fontSize: 'max(1.1vw, 17px)', lineHeight: '1.8' }}>
                <div style={{ marginBottom: '2vw' }}>
                  <strong>Domestic (US-based)</strong>
                  <ul style={{ paddingLeft: '1.5vw', marginTop: '0.5vw' }}>
                    <li style={{ marginBottom: '0.5vw' }}>Faster turnaround (2-4 weeks)</li>
                    <li style={{ marginBottom: '0.5vw' }}>Easier communication and QC</li>
                    <li style={{ marginBottom: '0.5vw' }}>Higher per-unit cost</li>
                    <li style={{ marginBottom: '0.5vw' }}>Best for smaller quantities or rush orders</li>
                  </ul>
                </div>
                <div>
                  <strong>International (Asia)</strong>
                  <ul style={{ paddingLeft: '1.5vw', marginTop: '0.5vw' }}>
                    <li style={{ marginBottom: '0.5vw' }}>Lower per-unit cost</li>
                    <li style={{ marginBottom: '0.5vw' }}>Great for large volume orders</li>
                    <li style={{ marginBottom: '0.5vw' }}>Longer lead times (6-8 weeks)</li>
                    <li style={{ marginBottom: '0.5vw' }}>We handle logistics and quality oversight</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '3vw' }}>
              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginBottom: '1.5vw', fontWeight: 600 }}>
                What we source
              </h2>
              <div style={{ fontSize: 'max(1.1vw, 17px)', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '1vw' }}>• Custom printed boxes and mailers</p>
                <p style={{ marginBottom: '1vw' }}>• Paper bags, totes, and shopping bags</p>
                <p style={{ marginBottom: '1vw' }}>• Food packaging and to-go containers</p>
                <p style={{ marginBottom: '1vw' }}>• Specialty items and hard-to-find products</p>
              </div>
            </div>

            <div style={{ borderTop: '1px solid #000', paddingTop: '2vw', textAlign: 'center' }}>
              <Link
                href="/contact-page"
                className="nav_button w-button"
                style={{
                  display: 'inline-block',
                  fontSize: 'max(1vw, 16px)',
                  padding: '1.2vw 2.5vw',
                  backgroundColor: '#000',
                  color: '#fff',
                  borderRadius: '100vw',
                  textDecoration: 'none'
                }}
              >
                Tell us what you need →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
