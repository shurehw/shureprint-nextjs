import Link from 'next/link';
import BuiltForGreatBrands from './BuiltForGreatBrands';

export default function CompanySection() {
  return (
    <section className="company-section">
      <h2 className="company-heading">
        <Link href="/capabilities" className="company-link">Beyond Printing → Full Supply Chain Partner</Link>
        <br />
      </h2>

      <div className="home-grid is--company">
        <div className="home_grid-left">
          <p className="desk-80">
            <em>We're not just a print shop. shureprint offers complete supply chain services: warehousing, fulfillment, international sourcing, and design—all from our LA facility. Built by hospitality industry leaders with decades of experience, we combine the expertise of enterprise suppliers with white-glove personal service.</em>
          </p>
          <div style={{ display: 'flex', gap: '1vw', marginTop: '2vw', flexWrap: 'wrap' }}>
            <Link href="/capabilities/warehousing-fulfillment" style={{
              padding: '0.8vw 1.5vw',
              background: '#e3fc02',
              color: '#000',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '0.9vw',
              fontWeight: 600,
              border: '1px solid #000'
            }}>
              Warehousing & Fulfillment
            </Link>
            <Link href="/capabilities/design-creative-direction" style={{
              padding: '0.8vw 1.5vw',
              background: '#fff',
              color: '#000',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '0.9vw',
              border: '1px solid #000'
            }}>
              Unlimited Design Revisions
            </Link>
            <Link href="/about" style={{
              padding: '0.8vw 1.5vw',
              background: '#fff',
              color: '#000',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '0.9vw',
              border: '1px solid #000'
            }}>
              Who We Are →
            </Link>
          </div>
        </div>
        <div className="home_grid-right">
          <div id="w-node-_30eade6f-a7a0-df92-bb3a-7f52bd6ef125-4cfb33a9" className="home-company_image-wrap">
            <img
              src="https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/6268e51868b3d70ed00b662d_shure_2256.jpg"
              loading="lazy"
              sizes="(max-width: 479px) 82vw, (max-width: 767px) 81vw, (max-width: 991px) 27vw, 31vw"
              srcSet="https://assets.website-files.com/622fa56ecc9274a545158f70/6268e51868b3d70ed00b662d_shure_2256-p-500.jpeg 500w, https://assets.website-files.com/622fa56ecc9274a545158f70/6268e51868b3d70ed00b662d_shure_2256-p-800.jpeg 800w, https://assets.website-files.com/622fa56ecc9274a545158f70/6268e51868b3d70ed00b662d_shure_2256-p-1080.jpeg 1080w, https://assets.website-files.com/622fa56ecc9274a545158f70/6268e51868b3d70ed00b662d_shure_2256.jpg 1535w"
              alt=""
              className="home-company_image"
            />
            <img
              src="https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/626f7b2535ad8a2f523d4bec_Group%20207.png"
              loading="lazy"
              width="447"
              sizes="(max-width: 479px) 93vw, (max-width: 767px) 72vw, (max-width: 991px) 27vw, 29vw"
              alt="Built For Great Brands"
              srcSet="https://assets.website-files.com/622fa56ecc9274a545158f70/626f7b2535ad8a2f523d4bec_Group%20207-p-500.png 500w, https://assets.website-files.com/622fa56ecc9274a545158f70/626f7b2535ad8a2f523d4bec_Group%20207.png 729w"
              className="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
