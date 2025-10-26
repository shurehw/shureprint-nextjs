'use client';

import Link from 'next/link';

const capabilities = [
  {
    title: 'Warehousing & Fulfillment',
    image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/626f6b0aa0717ad483ac8131_Rectangle%2073.png',
    link: '/capabilities/warehousing-fulfillment'
  },
  {
    title: 'Managing Timelines',
    image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/62687664a05d92aa786eccd3_Rectangle%2073.png',
    link: '/capabilities/managing-timelines'
  },
  {
    title: 'Sourcing',
    image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/626876d3a0717a5ffaac9705_Rectangle%2073.png',
    link: '/capabilities/sourcing'
  },
  {
    title: 'Mock Ups/Sampling',
    image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/62687760fc9854aa85f84e9f_Rectangle%2073.png',
    link: '/capabilities/mock-ups-sampling'
  },
  {
    title: 'Design & Creative Direction',
    image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/626877d8a05d926fe16ece83_Rectangle%2073.png',
    link: '/capabilities/design-creative-direction'
  }
];

export default function CapabilitiesSection() {
  return (
    <section className="company-section" style={{ paddingTop: '4vw', paddingBottom: '4vw' }}>
      <h2 className="company-heading">Our Capabilities</h2>

      <div className="capabilities-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '1vw'
      }}>
        {capabilities.map((capability, index) => (
          <Link key={index} href={capability.link} className="capability-tile" style={{
            position: 'relative',
            aspectRatio: '1',
            overflow: 'hidden',
            borderRadius: '0.5vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '1.5vw',
            color: '#fff',
            transition: 'transform 0.3s ease'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${capability.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 0
            }} />
            <div style={{ position: 'relative', zIndex: 1, fontSize: '2vw' }}>↓</div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 style={{ fontSize: '1.2vw', fontWeight: 600, marginBottom: '0.5vw' }}>{capability.title}</h3>
              <div style={{ fontSize: '1vw' }}>→ View</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
