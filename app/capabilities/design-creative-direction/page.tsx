import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Design & Creative Direction | Shureprint',
  description: 'Custom packaging design services. From concept to print-ready files, we help you create packaging that stands out.',
};

export default function DesignPage() {
  return (
    <div className="page-wrap">
      <Navigation />
      <main className="main-wrap">
        <section className="company-section" style={{ paddingTop: '6vw', paddingBottom: '6vw' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2vw' }}>
            <h1 className="company-heading" style={{ marginBottom: '1vw' }}>
              Design & Creative Direction
            </h1>

            <div style={{
              fontSize: 'max(1.5vw, 24px)',
              fontWeight: 600,
              color: '#e3fc02',
              background: '#000',
              padding: '1vw 2vw',
              borderRadius: '0.5vw',
              marginBottom: '2vw',
              display: 'inline-block'
            }}>
              ✨ Unlimited Design Revisions Until You&apos;re 100% Satisfied
            </div>

            <div style={{ fontSize: 'max(1.2vw, 18px)', lineHeight: '1.8', marginBottom: '3vw' }}>
              <p style={{ marginBottom: '1.5vw' }}>
                Good packaging isn&apos;t just functional—it tells your brand story. Whether you need a full rebrand or just help setting up print files, we&apos;ve got you covered.
              </p>
              <p style={{ marginBottom: '1.5vw' }}>
                We work with your existing brand guidelines or help you develop new ones. The goal is always the same: packaging that looks great and prints perfectly. And yes, that means unlimited revisions—we iterate until it&apos;s right.
              </p>
            </div>

            <div style={{ marginBottom: '3vw', padding: '2vw', backgroundColor: '#f6efe8', borderRadius: '0.5vw' }}>
              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginBottom: '1.5vw', fontWeight: 600 }}>
                Design services
              </h2>
              <ul style={{ fontSize: 'max(1.1vw, 17px)', lineHeight: '1.8', paddingLeft: '1.5vw' }}>
                <li style={{ marginBottom: '1vw' }}>Custom packaging design from scratch</li>
                <li style={{ marginBottom: '1vw' }}>Brand adaptation for existing logos and guidelines</li>
                <li style={{ marginBottom: '1vw' }}>Structural design for unique shapes and dielines</li>
                <li style={{ marginBottom: '1vw' }}>Print-ready file setup and color matching</li>
                <li style={{ marginBottom: '1vw' }}>Art direction and creative consultation</li>
              </ul>
            </div>

            <div style={{ marginBottom: '3vw' }}>
              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginBottom: '1.5vw', fontWeight: 600 }}>
                How we work
              </h2>
              <div style={{ fontSize: 'max(1.1vw, 17px)', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '1vw' }}>
                  <strong>1. Discovery</strong><br />
                  We learn about your brand, audience, and goals.
                </p>
                <p style={{ marginBottom: '1vw' }}>
                  <strong>2. Concepts</strong><br />
                  We present initial design directions for your feedback.
                </p>
                <p style={{ marginBottom: '1vw' }}>
                  <strong>3. Refinement</strong><br />
                  We dial in the details until everything is perfect.
                </p>
                <p style={{ marginBottom: '1vw' }}>
                  <strong>4. Production files</strong><br />
                  We prep print-ready artwork and manage the production process.
                </p>
              </div>
            </div>

            <div style={{ marginBottom: '3vw' }}>
              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginBottom: '1.5vw', fontWeight: 600 }}>
                Already have a designer?
              </h2>
              <p style={{ fontSize: 'max(1.1vw, 17px)', lineHeight: '1.8' }}>
                No problem. We can work with your in-house team or agency to make sure files are print-ready and meet technical specifications. Think of us as your production partner.
              </p>
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
                Let&apos;s design something →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
