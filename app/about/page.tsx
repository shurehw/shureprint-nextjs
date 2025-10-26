'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

const metadata = {
  title: 'About Us | Shureprint - LA Print & Packaging Company',
  description: 'Family-owned print and packaging company based in LA. Decades of experience serving hospitality, food service, and retail brands.',
};

export default function AboutPage() {
  return (
    <div className="page-wrap">
      <Navigation />
      <main className="main-wrap">
        <section className="company-section" style={{ paddingTop: '6vw', paddingBottom: '6vw' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2vw' }}>
            <h1 className="company-heading" style={{ marginBottom: '2vw' }}>
              Who We Are
            </h1>

            <div style={{ fontSize: 'max(1.2vw, 18px)', lineHeight: '1.8', marginBottom: '4vw' }}>
              <p style={{ marginBottom: '1.5vw' }}>
                Shureprint is a family-owned print and packaging company based in Los Angeles. We&apos;ve been doing this for decades, working with restaurants, hotels, retailers, and brands that care about the details.
              </p>
              <p style={{ marginBottom: '1.5vw' }}>
                We&apos;re not a faceless corporation. When you work with us, you get direct access to people who know your project inside and out. No account managers playing telephone—just real conversations with folks who can actually make decisions.
              </p>
              <p style={{ marginBottom: '1.5vw' }}>
                Our specialty is hospitality and food service, but we work with all kinds of businesses. If you need custom packaging, chances are we&apos;ve done something similar before.
              </p>
            </div>

            <div style={{ marginBottom: '4vw', padding: '2vw', backgroundColor: '#f6efe8', borderRadius: '0.5vw' }}>
              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginBottom: '1.5vw', fontWeight: 600 }}>
                What we believe
              </h2>
              <div style={{ fontSize: 'max(1.1vw, 17px)', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '1vw' }}>
                  <strong>Good packaging matters.</strong> It&apos;s part of your brand experience. We take that seriously.
                </p>
                <p style={{ marginBottom: '1vw' }}>
                  <strong>Honesty beats salesmanship.</strong> We&apos;ll tell you what&apos;s realistic, even if it&apos;s not what you want to hear.
                </p>
                <p style={{ marginBottom: '1vw' }}>
                  <strong>Relationships are long-term.</strong> We&apos;re not chasing one-off orders. We want to be your go-to for years.
                </p>
                <p style={{ marginBottom: '1vw' }}>
                  <strong>Details compound.</strong> Small improvements in quality, timing, and service add up over time.
                </p>
              </div>
            </div>

            <div style={{ marginBottom: '4vw' }}>
              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginBottom: '1.5vw', fontWeight: 600 }}>
                Why hospitality?
              </h2>
              <p style={{ fontSize: 'max(1.1vw, 17px)', lineHeight: '1.8', marginBottom: '1.5vw' }}>
                Hotels and restaurants have unique packaging needs. They order in volume but need flexibility. They care about brand presentation but also have tight margins. And when they run out of takeout bags on a Friday night, it&apos;s a problem.
              </p>
              <p style={{ fontSize: 'max(1.1vw, 17px)', lineHeight: '1.8' }}>
                We understand those pressures because we&apos;ve been serving this industry for years. We know how to balance quality, cost, and timing for businesses that can&apos;t afford mistakes.
              </p>
            </div>

            <div style={{ marginBottom: '4vw' }}>
              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginBottom: '1.5vw', fontWeight: 600 }}>
                Our services
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2vw' }}>
                {[
                  { title: 'Warehousing & Fulfillment', link: '/capabilities/warehousing-fulfillment' },
                  { title: 'Managing Timelines', link: '/capabilities/managing-timelines' },
                  { title: 'Sourcing', link: '/capabilities/sourcing' },
                  { title: 'Mock Ups & Sampling', link: '/capabilities/mock-ups-sampling' },
                  { title: 'Design & Creative Direction', link: '/capabilities/design-creative-direction' }
                ].map((service, index) => (
                  <Link
                    key={index}
                    href={service.link}
                    style={{
                      padding: '1.5vw',
                      border: '1px solid #000',
                      borderRadius: '0.5vw',
                      textDecoration: 'none',
                      color: '#000',
                      transition: 'all 0.3s ease',
                      fontSize: 'max(1.1vw, 17px)',
                      fontWeight: 600,
                      display: 'block'
                    }}
                    className="service-link"
                  >
                    {service.title} →
                  </Link>
                ))}
              </div>
            </div>

            <div style={{ borderTop: '1px solid #000', paddingTop: '3vw', textAlign: 'center' }}>
              <h2 style={{ fontSize: 'max(2vw, 32px)', marginBottom: '1.5vw', fontWeight: 400 }}>
                Want to work together?
              </h2>
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
                Get in touch →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .service-link:hover {
          background-color: #e3fc02;
          transform: translateY(-3px);
        }
      `}</style>
    </div>
  );
}
