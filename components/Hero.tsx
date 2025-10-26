import Link from 'next/link';

export default function Hero() {
  return (
    <header className="hero-section">
      <div className="banner">
        <div className="text-block">• Printing Designing Creating •</div>
      </div>

      <div style={{ textAlign: 'center', padding: '3vw 2vw' }}>
        <h1 style={{ fontSize: 'max(3vw, 36px)', marginBottom: '1vw', fontWeight: 400, maxWidth: '900px', margin: '0 auto 1vw' }}>
          Premium print & packaging with expert design
        </h1>
        <p style={{ fontSize: 'max(1.2vw, 18px)', color: '#666', maxWidth: '700px', margin: '0 auto 2vw', lineHeight: '1.6' }}>
          Hospitality-focused. Design-forward. Unlimited revisions. Full supply chain services from LA.
        </p>
        <div style={{ display: 'flex', gap: '1vw', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/contact-page"
            style={{
              display: 'inline-block',
              fontSize: 'max(1.1vw, 17px)',
              padding: '1.2vw 2.5vw',
              backgroundColor: '#000',
              color: '#fff',
              borderRadius: '100vw',
              textDecoration: 'none',
              border: '1px solid #000',
              transition: 'all 0.3s ease',
              fontWeight: '400'
            }}
          >
            Request a Quote →
          </Link>
          <Link
            href="/capabilities/design-creative-direction"
            style={{
              display: 'inline-block',
              fontSize: 'max(1.1vw, 17px)',
              padding: '1.2vw 2.5vw',
              backgroundColor: '#f6efe8',
              color: '#000',
              borderRadius: '100vw',
              textDecoration: 'none',
              border: '1px solid #000',
              transition: 'all 0.3s ease',
              fontWeight: '400'
            }}
          >
            See Design Services
          </Link>
        </div>
      </div>

      <div className="marquee">
        <div className="marquee-track is--desk">
          {[...Array(6)].map((_, i) => (
            <img
              key={`desk-${i}`}
              src="https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/625762e6d10a111af9c654bb_Shureprint.png"
              loading="lazy"
              alt="Shureprint"
              className="marquee-image"
            />
          ))}
        </div>
        <div className="marquee-track">
          {[...Array(3)].map((_, i) => (
            <img
              key={`mobile-${i}`}
              src="https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/6246165ac21f31848333e767_Shure%20Print.png"
              loading="lazy"
              alt="Shure Print"
              className="marquee-image"
            />
          ))}
        </div>
      </div>

      <div className="div-block-4">
        <div className="hero-product-item">
          <img
            src="https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/62745951c8f8742f2b75ba83_Artboard%20%E2%80%93%2001.png"
            loading="lazy"
            alt=""
            className="image-3"
          />
          <div className="hero-product-overlay" />
        </div>
        <div className="hero-product-item">
          <img
            src="https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/6279742fcf35ee7958c5d5a9_Artboard%20%E2%80%93%207.jpg"
            loading="lazy"
            alt=""
            className="image-10"
          />
          <div className="hero-product-overlay" />
        </div>
      </div>
    </header>
  );
}
