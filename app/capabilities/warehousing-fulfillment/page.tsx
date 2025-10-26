import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Warehousing & Fulfillment | Shureprint',
  description: 'LA-based warehousing and order fulfillment for custom packaging. Store your inventory with us and we\'ll ship when you need it.',
};

export default function WarehousingPage() {
  return (
    <div className="page-wrap">
      <Navigation />
      <main className="main-wrap">
        <section className="company-section" style={{ paddingTop: '6vw', paddingBottom: '6vw' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2vw' }}>
            <h1 className="company-heading" style={{ marginBottom: '2vw' }}>
              Warehousing & Fulfillment
            </h1>

            <div style={{ fontSize: 'max(1.2vw, 18px)', lineHeight: '1.8', marginBottom: '3vw' }}>
              <p style={{ marginBottom: '1.5vw' }}>
                We get it—storing boxes of custom packaging isn&apos;t exactly convenient. That&apos;s why we offer warehousing and fulfillment from our LA facility.
              </p>
              <p style={{ marginBottom: '1.5vw' }}>
                Order your packaging in bulk to get the best pricing, and we&apos;ll hold it for you. When you need a shipment, just let us know. We&apos;ll pack and ship directly to your locations.
              </p>
            </div>

            <div style={{ marginBottom: '3vw', padding: '2vw', backgroundColor: '#f6efe8', borderRadius: '0.5vw' }}>
              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginBottom: '1.5vw', fontWeight: 600 }}>
                How it works
              </h2>
              <ul style={{ fontSize: 'max(1.1vw, 17px)', lineHeight: '1.8', paddingLeft: '1.5vw' }}>
                <li style={{ marginBottom: '1vw' }}>You place your order (the bigger, the better pricing)</li>
                <li style={{ marginBottom: '1vw' }}>We produce and store it at our warehouse</li>
                <li style={{ marginBottom: '1vw' }}>Request shipments as needed—no minimums</li>
                <li style={{ marginBottom: '1vw' }}>We pack and ship to your locations</li>
              </ul>
            </div>

            <div style={{ marginBottom: '3vw' }}>
              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginBottom: '1.5vw', fontWeight: 600 }}>
                Perfect for
              </h2>
              <div style={{ fontSize: 'max(1.1vw, 17px)', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '1vw' }}>• Multi-location restaurants and retailers</p>
                <p style={{ marginBottom: '1vw' }}>• Businesses with limited storage space</p>
                <p style={{ marginBottom: '1vw' }}>• Brands that need flexible, on-demand fulfillment</p>
                <p style={{ marginBottom: '1vw' }}>• Anyone who wants to save on per-unit costs without the storage hassle</p>
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
                Let&apos;s talk about your needs →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
