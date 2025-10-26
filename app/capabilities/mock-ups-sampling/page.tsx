import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Mock Ups & Sampling | Shureprint',
  description: 'See and feel your custom packaging before committing to production. Physical samples and digital mockups available.',
};

export default function MockUpsPage() {
  return (
    <div className="page-wrap">
      <Navigation />
      <main className="main-wrap">
        <section className="company-section" style={{ paddingTop: '6vw', paddingBottom: '6vw' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2vw' }}>
            <h1 className="company-heading" style={{ marginBottom: '2vw' }}>
              Mock Ups & Sampling
            </h1>

            <div style={{ fontSize: 'max(1.2vw, 18px)', lineHeight: '1.8', marginBottom: '3vw' }}>
              <p style={{ marginBottom: '1.5vw' }}>
                Never order blind. We provide physical samples and digital mockups so you know exactly what you&apos;re getting before production starts.
              </p>
              <p style={{ marginBottom: '1.5vw' }}>
                Samples let you check quality, size, and print accuracy. Mockups help you visualize how your branding will look on the final product.
              </p>
            </div>

            <div style={{ marginBottom: '3vw', padding: '2vw', backgroundColor: '#f6efe8', borderRadius: '0.5vw' }}>
              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginBottom: '1.5vw', fontWeight: 600 }}>
                What we offer
              </h2>
              <div style={{ fontSize: 'max(1.1vw, 17px)', lineHeight: '1.8' }}>
                <div style={{ marginBottom: '2vw' }}>
                  <strong>Physical samples</strong>
                  <ul style={{ paddingLeft: '1.5vw', marginTop: '0.5vw' }}>
                    <li style={{ marginBottom: '0.5vw' }}>Blank samples to check size and material</li>
                    <li style={{ marginBottom: '0.5vw' }}>Printed prototypes with your artwork</li>
                    <li style={{ marginBottom: '0.5vw' }}>Turnaround: 5-7 business days</li>
                    <li style={{ marginBottom: '0.5vw' }}>Cost varies by complexity</li>
                  </ul>
                </div>
                <div>
                  <strong>Digital mockups</strong>
                  <ul style={{ paddingLeft: '1.5vw', marginTop: '0.5vw' }}>
                    <li style={{ marginBottom: '0.5vw' }}>Photorealistic renders of your design</li>
                    <li style={{ marginBottom: '0.5vw' }}>Great for approvals and marketing materials</li>
                    <li style={{ marginBottom: '0.5vw' }}>Faster than physical samples</li>
                    <li style={{ marginBottom: '0.5vw' }}>Usually included at no extra cost</li>
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '3vw' }}>
              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginBottom: '1.5vw', fontWeight: 600 }}>
                Why samples matter
              </h2>
              <div style={{ fontSize: 'max(1.1vw, 17px)', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '1vw' }}>• Avoid costly mistakes before committing to a full run</p>
                <p style={{ marginBottom: '1vw' }}>• See how colors print on actual materials</p>
                <p style={{ marginBottom: '1vw' }}>• Test functionality (does it fold right? fit your product?)</p>
                <p style={{ marginBottom: '1vw' }}>• Get stakeholder buy-in with something tangible</p>
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
                Request a sample →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
