import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Product | Shureprint',
  description: 'Shureprint Product Page',
};

const productCategories = [
  {
    name: 'Stock / Unbranded',
    image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/626f6bd4f31a951208c8b293_agenlaku-indonesia-SRFOOdORhKw-unsplash%20(1).jpg',
    href: '#',
  },
  {
    name: 'Pizza Boxes',
    image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/626865be85969322d8ca1bd6_iPhone%2013%2C%2012%20Pro%20%E2%80%93%209.png',
    href: '#',
  },
  {
    name: 'Merch',
    image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/62686a218ea646db2be51e4f_iPhone%2013%2C%2012%20Pro%20%E2%80%93%2024.png',
    href: '#',
  },
  {
    name: 'Pens',
    image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/626868ddd5cdff05162f3a50_iPhone%2013%2C%2012%20Pro%20%E2%80%93%2020.png',
    href: '#',
  },
  {
    name: 'Food Safe Paper',
    image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/626868e985dfeb1bba20743c_iPhone%2013%2C%2012%20Pro%20%E2%80%93%2021.png',
    href: '#',
  },
  {
    name: 'Cups & Containers',
    image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/626865ecd003da6a4dff0eda_iPhone%2013%2C%2012%20Pro%20%E2%80%93%2014.png',
    href: '#',
  },
  {
    name: 'Stickers & Labels',
    image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/626869fcf64501a7dbbd34d4_iPhone%2013%2C%2012%20Pro%20%E2%80%93%2023.png',
    href: '#',
  },
  {
    name: 'Matches',
    image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/626866125a7e9240a0f049d9_iPhone%2013%2C%2012%20Pro%20%E2%80%93%2012.png',
    href: '#',
  },
  {
    name: 'Napkins & Coasters',
    image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/62686bf0d5cdff4beb2f5b7e_iPhone%2013%2C%2012%20Pro%20%E2%80%93%2022.png',
    href: '#',
  },
  {
    name: 'Paper Bags',
    image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268662581ae5d1003751b18_iPhone%2013%2C%2012%20Pro%20%E2%80%93%2015.png',
    href: '#',
  },
  {
    name: 'Boxes',
    image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268667b717c3143eed37845_iPhone%2013%2C%2012%20Pro%20%E2%80%93%2017.png',
    href: '#',
  },
];

export default function Product() {
  return (
    <>
      <Navigation />
      <div className="main-wrap">
        <header className="hero-section">
          <div className="banner">
            <div className="text-block">• Printing• Designing Creating •</div>
          </div>
          <div className="marquee">
            <div className="marquee-track is--desk">
              <img src="https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/626f7607d608a480f1a6b3c6_Products.png" alt="Products banner" className="marquee-image" />
              <img src="https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/626f7607d608a480f1a6b3c6_Products.png" alt="Products banner" className="marquee-image" />
              <img src="https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/626f7607d608a480f1a6b3c6_Products.png" alt="Products banner" className="marquee-image" />
              <img src="https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/626f7607d608a480f1a6b3c6_Products.png" alt="Products banner" className="marquee-image" />
              <img src="https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/626f7607d608a480f1a6b3c6_Products.png" alt="Products banner" className="marquee-image" />
              <img src="https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/626f7607d608a480f1a6b3c6_Products.png" alt="Products banner" className="marquee-image" />
            </div>
            <div className="marquee-track">
              <img src="https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/6246165ac21f31848333e767_Shure%20Print.png" alt="Shureprint logo banner" className="marquee-image" />
              <img src="https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/6246165ac21f31848333e767_Shure%20Print.png" alt="Shureprint logo banner" className="marquee-image" />
              <img src="https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/6246165ac21f31848333e767_Shure%20Print.png" alt="Shureprint logo banner" className="marquee-image" />
            </div>
          </div>

          <div className="hero-products">
            <div className="w-dyn-list">
              <div role="list" className="collection-list w-dyn-items">
                {productCategories.map((category, index) => (
                  <div role="listitem" className="w-dyn-item" key={index}>
                    <Link href={category.href} className="hero_products-item w-inline-block">
                      <img
                        src={category.image}
                        loading="eager"
                        alt={`${category.name} custom printed products`}
                        className="hero_products-image"
                      />
                      <h4 className="hero_products-arrow">↓</h4>
                      <h4 className="hero_products-arrow-view">→ View</h4>
                      <h4 className="hero_products-name">{category.name}</h4>
                      <div className="hero_products-blur"></div>
                      <h4 className="hero_products-view">View</h4>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>
      </div>
      <Footer />
    </>
  );
}
