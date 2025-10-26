import Link from 'next/link';
import BuiltForGreatBrands from './BuiltForGreatBrands';

export default function CompanySection() {
  return (
    <section className="company-section">
      <h2 className="company-heading">
        <Link href="/product" className="company-link">We Do More→ </Link>
        <br />
      </h2>
      <h2 className="company-heading">
        <Link href="/contact-page" className="company-link">Who We Are</Link>
        <Link href="#" className="company-link">→</Link>
        <br />
      </h2>

      <div className="home-grid is--company">
        <div className="home_grid-left">
          <p className="desk-80">
            <em>shureprint is the only custom packaging source built by industry leaders in hospitality with decades of experience. We bring you the industry knowledge and supply-side connections of larger companies with unrivaled personal service. While the restaurant industry is our bread and butter, we service a wide range of clients -- from small start ups to large corporations.</em>
          </p>
          <Link href="/contact-page" className="button w-button">
            → Contact us
          </Link>
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
