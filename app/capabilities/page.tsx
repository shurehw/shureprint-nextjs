'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Capabilities() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const capabilities = [
    {
      id: 'design',
      title: 'Design & Creative Direction',
      icon: 'https://assets.website-files.com/622fa56ecc9274a545158f70/626f7842c42cf94245d108e8_Group%20204.png',
      intro: 'Your brand, your vision, our packaging. No matter what you are looking to create, we can make a product to grow your brand.',
      features: ['Design & Art Services', 'Trend Reports & Forecasting', 'Value Engineering'],
      metrics: { value: '100+', label: 'Brands Designed' },
      testimonial: '"Shureprint transformed our vision into stunning packaging that our customers love."',
      client: 'Show Me Your Mumu',
      cta: 'Request Design Consultation',
      ctaLink: '/contact-page?service=design',
      details: 'Full design services including concept development, 3D rendering, print-ready files, and unlimited revisions. Our team works directly with you to bring your brand vision to life.'
    },
    {
      id: 'sampling',
      title: 'Sampling',
      icon: 'https://assets.website-files.com/622fa56ecc9274a545158f70/626f78e2f1df6593c0ca3ca5_Group%20206.png',
      intro: 'Know exactly what your product looks like before you order it.',
      features: ['Realistic Mock-Ups & Prototypes', 'Pre-production Samples', 'Paper & Fabric Swatches'],
      metrics: { value: '48hr', label: 'Sample Turnaround' },
      testimonial: '"Seeing physical samples before committing saved us thousands."',
      client: 'The Nice Guy',
      cta: 'Order Sample Package',
      ctaLink: '/contact-page?service=sampling&type=sample',
      details: 'Get physical samples shipped to your door. See and feel the quality, materials, and print before placing your full order. Free samples available for qualified projects.'
    },
    {
      id: 'sourcing',
      title: 'Sourcing',
      icon: 'https://assets.website-files.com/622fa56ecc9274a545158f70/626f7852d198e90a4713e8ce_Group%20205.png',
      intro: 'Make supply chain disruption a thing of the past.',
      features: ['Low Minimums', 'High Quality, Vetted Manufacturers', 'Competitive Pricing'],
      metrics: { value: '95%', label: 'On-Time Delivery' },
      testimonial: '"Reliable sourcing partner that never lets us run out of stock."',
      client: 'Butchers Daughter',
      cta: 'Get Sourcing Quote',
      ctaLink: '/contact-page?service=sourcing',
      details: 'We work with local, domestic, and international manufacturing partners. Whether sourcing from LA or globally, we ensure quality products arrive on schedule.'
    },
    {
      id: 'timelines',
      title: 'Managing Timelines',
      icon: 'https://assets.website-files.com/622fa56ecc9274a545158f70/626f7ab4c42cf9b8a4d11bb7_13.png',
      intro: 'Hit every deadline. Our team works on YOUR schedule.',
      features: ['Short & Long Lead Available', 'Quality Assurance & Control', 'Supply Chain Management'],
      metrics: { value: '7-14', label: 'Day Avg Turnaround' },
      testimonial: '"They hit every deadline for our restaurant opening. Flawless execution."',
      client: 'Private Suite',
      cta: 'Discuss Timeline',
      ctaLink: '/contact-page?service=timelines',
      details: 'From rush orders to long-term planning, we manage production timelines so you have exactly what you need when you need it. Real-time updates throughout production.'
    },
    {
      id: 'warehousing',
      title: 'Warehousing & Fulfillment',
      icon: 'https://assets.website-files.com/622fa56ecc9274a545158f70/6268e096cbec0d34a659d79e_Group%20202.png',
      intro: 'Not just storage, peace of mind.',
      features: ['Custom & Stock Inventory', 'Convenient DTLA location', 'Fulfillment, Co-Packing, Dropshipping'],
      metrics: { value: '500+', label: 'SKUs Managed' },
      testimonial: '"Having inventory in their LA warehouse saves us time and money every month."',
      client: 'Ggiata',
      cta: 'Get Warehousing Quote',
      ctaLink: '/contact-page?service=warehousing',
      details: '15,000 sq ft warehouse in downtown LA. Store custom inventory, get automatic reorder alerts, and enjoy same-day fulfillment for local deliveries.'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="page-wrap">
      <Navigation />

      {/* Quick Navigation */}
      <nav style={{
        position: 'sticky',
        top: '80px',
        zIndex: 100,
        background: '#f6efe8',
        borderBottom: '1px solid #ddd',
        padding: '1vw 2vw',
        display: 'flex',
        gap: '1vw',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        {capabilities.map((cap) => (
          <button
            key={cap.id}
            onClick={() => scrollToSection(cap.id)}
            style={{
              background: 'transparent',
              border: '1px solid #000',
              borderRadius: '50px',
              padding: '0.5vw 1.5vw',
              fontSize: '0.9vw',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            className="quick-nav-btn"
          >
            {cap.title}
          </button>
        ))}
      </nav>

      <main className="main-wrap">
        <header className="hero-section">
          <div className="banner">
            <div className="text-block">• Printing Designing Creating•</div>
          </div>
          <div className="marquee">
            <div className="marquee-track is--desk">
              <img src="https://assets.website-files.com/622fa56ecc9274a545158f70/6246165ac21f31848333e767_Shure%20Print.png" alt="Shureprint logo banner" className="marquee-image" />
              <img src="https://assets.website-files.com/622fa56ecc9274a545158f70/6268c22b55d76712d8defd0d_Capabilities.png" alt="Capabilities banner" className="marquee-image" />
              <img src="https://assets.website-files.com/622fa56ecc9274a545158f70/6268c22b55d76712d8defd0d_Capabilities.png" alt="Capabilities banner" className="marquee-image" />
              <img src="https://assets.website-files.com/622fa56ecc9274a545158f70/6268c22b55d76712d8defd0d_Capabilities.png" alt="Capabilities banner" className="marquee-image" />
            </div>
            <div className="marquee-track">
              <img src="https://assets.website-files.com/622fa56ecc9274a545158f70/6246165ac21f31848333e767_Shure%20Print.png" alt="Shureprint logo banner" className="marquee-image" />
              <img src="https://assets.website-files.com/622fa56ecc9274a545158f70/6246165ac21f31848333e767_Shure%20Print.png" alt="Shureprint logo banner" className="marquee-image" />
              <img src="https://assets.website-files.com/622fa56ecc9274a545158f70/6246165ac21f31848333e767_Shure%20Print.png" alt="Shureprint logo banner" className="marquee-image" />
            </div>
          </div>

          {/* Image Grid Sections */}
          <div data-w-id="2b0d6da6-dd51-e37a-5ebd-8e204832976f" className="track">
            <div className="sticky-wrapper">
              <div className="w-layout-grid grid-about">
                <div className="frame-grid">
                  <img src="https://assets.website-files.com/622fa56ecc9274a545158f70/626f6c5d12ae8368b03d051c_Job_0413.jpg" alt="Custom branded retail packaging and bags" className="content-image" />
                </div>
                <div className="frame-grid">
                  <img src="https://assets.website-files.com/622fa56ecc9274a545158f70/626860fc145f91565907bf0b_shure_2245.jpg" alt="Custom printed hospitality packaging solutions" className="content-image" />
                </div>
                <div className="frame-grid">
                  <img src="https://assets.website-files.com/622fa56ecc9274a545158f70/626860fc467053ca8c4f024b_shure_2227.jpg" alt="Premium custom boxes and packaging materials" className="content-image" />
                </div>
                <div className="frame-grid">
                  <img src="https://assets.website-files.com/622fa56ecc9274a545158f70/626860fb2865ec2787ceb3b4_shure_2247.jpg" alt="Branded paper bags for retail businesses" className="content-image" />
                </div>
                <div className="frame-grid med-size">
                  <img src="https://assets.website-files.com/622fa56ecc9274a545158f70/6268e51868b3d70ed00b662d_shure_2256.jpg" alt="Shureprint warehousing and fulfillment services" className="content-image" />
                </div>
              </div>
            </div>
          </div>

          {/* Page Heading */}
          <div style={{ textAlign: 'center', padding: '4vw 2vw' }}>
            <h1 className="heading-large">Our Capabilities</h1>
            <p style={{ fontSize: '1.2vw', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
              Full-service packaging solutions from design to fulfillment
            </p>
          </div>

          {/* Capability Sections */}
          {capabilities.map((capability, index) => (
            <div
              key={capability.id}
              id={capability.id}
              className={`hero-products ${index % 2 === 0 ? '' : 'second'}`}
            >
              <div className={`w-layout-grid main-grid-2 ${capability.id === 'sampling' ? 'art-background' : ''}`}>
                <div className="sticky-wrapper-heading">
                  <h2 className="heading-medium text-uppercase"><em>{capability.title}</em></h2>
                  <div className={`div-block-${index + 6}`}>
                    <img src={capability.icon} alt={`${capability.title} icon`} className={index === 0 ? 'contact_spin image-4' : `image-${index + 4}`} />
                  </div>

                  {/* Metrics Badge */}
                  <div style={{
                    marginTop: '2vw',
                    padding: '1.5vw',
                    background: '#e3fc02',
                    borderRadius: '0.5vw',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '2vw', fontWeight: 'bold', color: '#000' }}>
                      {capability.metrics.value}
                    </div>
                    <div style={{ fontSize: '0.8vw', color: '#000', marginTop: '0.5vw' }}>
                      {capability.metrics.label}
                    </div>
                  </div>
                </div>

                <div>
                  <p className="main-paragraph">
                    <strong>{capability.intro}</strong>
                    <br /><br />
                  </p>

                  <h3 className="heading-medium text-uppercase inner-padding-medium">
                    <strong>{capability.features.map((f, i) => (
                      <span key={i}>~ {f}<br />{i < capability.features.length - 1 ? <br /> : ''}</span>
                    ))}</strong>
                  </h3>

                  {/* Testimonial */}
                  <div style={{
                    marginTop: '2vw',
                    padding: '1.5vw',
                    background: '#f6efe8',
                    borderLeft: '4px solid #000',
                    fontStyle: 'italic',
                    fontSize: '1vw',
                    lineHeight: '1.6'
                  }}>
                    {capability.testimonial}
                    <div style={{ marginTop: '0.5vw', fontWeight: 'bold', fontStyle: 'normal' }}>
                      — {capability.client}
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <button
                    onClick={() => setExpandedSection(expandedSection === capability.id ? null : capability.id)}
                    style={{
                      marginTop: '1.5vw',
                      padding: '0.8vw 1.5vw',
                      background: 'transparent',
                      border: '1px solid #000',
                      borderRadius: '50px',
                      cursor: 'pointer',
                      fontSize: '0.9vw',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5vw'
                    }}
                  >
                    {expandedSection === capability.id ? '− Hide Details' : '+ Learn More'}
                  </button>

                  {expandedSection === capability.id && (
                    <div style={{
                      marginTop: '1vw',
                      padding: '1.5vw',
                      background: '#fff',
                      border: '1px solid #ddd',
                      borderRadius: '0.5vw',
                      fontSize: '1vw',
                      lineHeight: '1.6',
                      animation: 'slideDown 0.3s ease'
                    }}>
                      {capability.details}
                    </div>
                  )}

                  {/* Service-Specific CTA */}
                  <Link
                    href={capability.ctaLink}
                    style={{
                      display: 'inline-block',
                      marginTop: '2vw',
                      padding: '1vw 2vw',
                      background: '#000',
                      color: '#fff',
                      borderRadius: '50px',
                      textDecoration: 'none',
                      fontSize: '1vw',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                    className="capability-cta"
                  >
                    {capability.cta} →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </header>

        {/* Contact Form Section */}
        <div className="section hero wf-section">
          <div className="container-2 padding-bottom-large w-container">
            <div className="w-layout-grid main-grid">
              <div className="content-wrapper padding-bottom-medium">
                <h2 className="heading-large margin-bottom-small">
                  Ready to get started?
                </h2>
                <p style={{ fontSize: '1.2vw', marginTop: '1vw', color: '#666' }}>
                  Let's discuss how our capabilities can help evolve your brand.
                </p>
                <Link
                  href="/contact-page"
                  style={{
                    display: 'inline-block',
                    marginTop: '2vw',
                    padding: '1.2vw 3vw',
                    background: '#e3fc02',
                    color: '#000',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontSize: '1.1vw',
                    fontWeight: '600',
                    border: '2px solid #000'
                  }}
                >
                  Schedule Consultation →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .quick-nav-btn:hover {
          background: #e3fc02 !important;
          transform: translateY(-2px);
        }

        .capability-cta:hover {
          background: #333 !important;
          transform: scale(1.05);
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          nav {
            top: 60px !important;
            padding: 2vw !important;
          }

          .quick-nav-btn {
            font-size: 3vw !important;
            padding: 1.5vw 3vw !important;
          }

          .sticky-wrapper-heading {
            position: relative !important;
            top: 0 !important;
          }

          .main-grid-2 > div {
            grid-column: 1 / -1 !important;
          }
        }
      `}</style>
    </div>
  );
}
