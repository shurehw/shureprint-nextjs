import Link from 'next/link';

const products = {
  boxes: [
    {
      name: 'Pizza Boxes',
      mainImage: 'https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/62685d31ecade0804d8524ec_iPhone%2013%2C%2012%20Pro%20%E2%80%93%209.png',
      secondaryImage: 'https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/62685e97557feb2338bc778e_276059313_360020046017773_7608679211577365184_n.jpg',
      spinner1: 'https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/62466f0c1c31600ed302fa00_Untitled-1.png',
      spinner2: 'https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/6246704c3f1bf146ebf857fe_viewmore.png',
    },
    {
      name: 'PR Boxes',
      mainImage: 'https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/626f68346ae06067b974d543_mrbeast.png',
      secondaryImage: 'https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/626f694cc42cf97f47d0b413_Job_0386.jpg',
      spinner2: 'https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/6246704c3f1bf146ebf857fe_viewmore.png',
    },
  ],
  paperBags: [
    {
      name: 'Eurotote',
      mainImage: 'https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/62685d3024d3c32a38b4f629_iPhone%2013%2C%2012%20Pro%20%E2%80%93%2011.png',
      secondaryImage: 'https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/626860fb2865ec2787ceb3b4_shure_2247.jpg',
      spinner1: 'https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/6246704c3f1bf146ebf857fe_viewmore.png',
      spinner2: 'https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/6246704c3f1bf146ebf857fe_viewmore.png',
    },
    {
      name: 'Kraft',
      mainImage: 'https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/62685d3282e6747f714cb5bc_iPhone%2013%2C%2012%20Pro%20%E2%80%93%2015.png',
      secondaryImage: 'https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/626860fc467053a64a4f024a_shure_2223.jpg',
      spinner2: 'https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/6246704c3f1bf146ebf857fe_viewmore.png',
    },
  ],
  cupsContainers: [
    {
      name: 'Cups',
      mainImage: 'https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/62685d301aeb8325840d8922_iPhone%2013%2C%2012%20Pro%20%E2%80%93%2014.png',
      secondaryImage: 'https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/626860fbccbf7769c9332d53_shure_2264.jpg',
      spinner1: 'https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/6246704c3f1bf146ebf857fe_viewmore.png',
      spinner2: 'https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/6246704c3f1bf146ebf857fe_viewmore.png',
    },
    {
      name: 'Containers',
      mainImage: 'https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/62685d309dc65b656789fc25_iPhone%2013%2C%2012%20Pro%20%E2%80%93%2010.png',
      secondaryImage: 'https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/62686211467053d0854f18a2_Screen%20Shot%202022-04-26%20at%202.19.22%20PM.png',
      spinner2: 'https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/6246704c3f1bf146ebf857fe_viewmore.png',
    },
  ],
};

export default function FeaturedSection() {
  return (
    <section className="featured-section">
      <div className="desk-80">
        <h2 className="featured-heading">
          Hi! We&apos;re shureprint, a personalized LA-based print and packaging company devoted to branding, hospitality, and design.
        </h2>
      </div>
      <div className="desk-80"></div>

      {/* Boxes */}
      <div className="home-grid">
        <div className="home_grid-left">
          <h3 className="featured_category-name">Boxes<br /></h3>
        </div>
        <div className="home_grid-right">
          {products.boxes.map((product, index) => (
            <Link href="/shop?category=Boxes" key={index} className="featured-product w-inline-block">
              <div className="featured-product_top">
                <img src={product.mainImage} loading="eager" alt="" className="featured_products-image" />
                {product.spinner1 && <img src={product.spinner1} loading="lazy" alt="" className="buy-spinner_first" />}
                {product.spinner2 && <img src={product.spinner2} loading="lazy" alt="" className="buy-spinner" />}
                <img src={product.secondaryImage} loading="eager" alt="" className="featured_products-image-secondary" />
              </div>
              <div className="featured-product_bottom">
                <h4 className="featured-product_name">{product.name}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Link href="/product" className="footer-button w-button">
        → View Our Complete Line up
      </Link>

      {/* Paper Bags */}
      <div className="home-grid">
        <div className="home_grid-left">
          <h3 className="featured_category-name">Paper Bags<br /></h3>
        </div>
        <div className="home_grid-right">
          {products.paperBags.map((product, index) => (
            <Link href="/shop?category=Paper+Bags" key={index} className="featured-product w-inline-block">
              <div className="featured-product_top">
                <img src={product.mainImage} loading="eager" alt="" className="featured_products-image" />
                {product.spinner1 && <img src={product.spinner1} loading="lazy" alt="" className="buy-spinner_first" />}
                {product.spinner2 && <img src={product.spinner2} loading="lazy" alt="" className="buy-spinner" />}
                <img src={product.secondaryImage} loading="eager" alt="" className="featured_products-image-secondary" />
              </div>
              <div className="featured-product_bottom">
                <h4 className="featured-product_name">{product.name}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Link href="/product" className="footer-button w-button">
        → View Our Complete Line up
      </Link>

      {/* Cups & Containers */}
      <div className="home-grid">
        <div className="home_grid-left">
          <h3 className="featured_category-name">Cups & Containers<br /></h3>
        </div>
        <div className="home_grid-right">
          {products.cupsContainers.map((product, index) => (
            <Link href="/shop?category=Cups+%26+Containers" key={index} className="featured-product w-inline-block">
              <div className="featured-product_top">
                <img src={product.mainImage} loading="eager" alt="" className="featured_products-image" />
                {product.spinner1 && <img src={product.spinner1} loading="lazy" alt="" className="buy-spinner_first" />}
                {product.spinner2 && <img src={product.spinner2} loading="lazy" alt="" className="buy-spinner" />}
                <img src={product.secondaryImage} loading="eager" alt="" className="featured_products-image-secondary" />
              </div>
              <div className="featured-product_bottom">
                <h4 className="featured-product_name">{product.name}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Link href="/product" className="footer-button w-button">
        → View Our Complete Line up
      </Link>
    </section>
  );
}
