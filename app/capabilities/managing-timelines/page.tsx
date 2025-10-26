import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Managing Timelines | Shureprint',
  description: 'We keep your custom packaging projects on schedule. Realistic timelines, proactive updates, and backup plans when things get tight.',
};

export default function TimelinesPage() {
  return (
    <div className="page-wrap">
      <Navigation />
      <main className="main-wrap">
        <section className="company-section" style={{ paddingTop: '6vw', paddingBottom: '6vw' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2vw' }}>
            <h1 className="company-heading" style={{ marginBottom: '2vw' }}>
              Managing Timelines
            </h1>

            <div style={{ fontSize: 'max(1.2vw, 18px)', lineHeight: '1.8', marginBottom: '3vw' }}>
              <p style={{ marginBottom: '1.5vw' }}>
                Deadlines matter. Whether it&apos;s a product launch, event, or seasonal campaign, we know your packaging needs to arrive on time.
              </p>
              <p style={{ marginBottom: '1.5vw' }}>
                We&apos;ve been doing this long enough to give you real timelines—not optimistic ones. And if something comes up, we&apos;ll let you know immediately and work on solutions.
              </p>
            </div>

            <div style={{ marginBottom: '3vw', padding: '2vw', backgroundColor: '#f6efe8', borderRadius: '0.5vw' }}>
              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginBottom: '1.5vw', fontWeight: 600 }}>
                Typical timelines
              </h2>
              <ul style={{ fontSize: 'max(1.1vw, 17px)', lineHeight: '1.8', paddingLeft: '1.5vw' }}>
                <li style={{ marginBottom: '1vw' }}>Standard production: 3-4 weeks after art approval</li>
                <li style={{ marginBottom: '1vw' }}>Rush orders: 1-2 weeks (when possible)</li>
                <li style={{ marginBottom: '1vw' }}>International sourcing: 6-8 weeks</li>
                <li style={{ marginBottom: '1vw' }}>Samples and prototypes: 5-7 business days</li>
              </ul>
            </div>

            <div style={{ marginBottom: '3vw' }}>
              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginBottom: '1.5vw', fontWeight: 600 }}>
                How we stay on track
              </h2>
              <div style={{ fontSize: 'max(1.1vw, 17px)', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '1vw' }}>• Clear production schedules from day one</p>
                <p style={{ marginBottom: '1vw' }}>• Proactive updates at key milestones</p>
                <p style={{ marginBottom: '1vw' }}>• Built-in buffer for unexpected delays</p>
                <p style={{ marginBottom: '1vw' }}>• Backup suppliers for urgent situations</p>
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
                Get a timeline for your project →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
