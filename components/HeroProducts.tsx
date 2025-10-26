import Link from 'next/link';

const products = [
  {
    name: 'Pizza Boxes',
    image: 'https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/62685d31ecade0804d8524ec_iPhone%2013%2C%2012%20Pro%20%E2%80%93%209.png',
    href: '#',
  },
  {
    name: 'PR Boxes',
    image: 'https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/626f68346ae06067b974d543_mrbeast.png',
    href: '#',
  },
  {
    name: 'Eurotote',
    image: 'https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/62685d3024d3c32a38b4f629_iPhone%2013%2C%2012%20Pro%20%E2%80%93%2011.png',
    href: '#',
  },
  {
    name: 'Kraft',
    image: 'https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/62685d3282e6747f714cb5bc_iPhone%2013%2C%2012%20Pro%20%E2%80%93%2015.png',
    href: '#',
  },
  {
    name: 'Cups',
    image: 'https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/62685d301aeb8325840d8922_iPhone%2013%2C%2012%20Pro%20%E2%80%93%2014.png',
    href: '/product',
  },
  {
    name: 'Containers',
    image: 'https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/62685d309dc65b656789fc25_iPhone%2013%2C%2012%20Pro%20%E2%80%93%2010.png',
    href: '#',
  },
];

export default function HeroProducts() {
  return (
    <aside className="hero_products">
      <div className="hero_products-container">
        {products.map((product, index) => (
          <Link
            href={product.href}
            key={index}
            className="hero_products-item w-inline-block"
          >
            <div className="hero_products-blur">
              <div className="hero_products-view">View Product →</div>
            </div>
            <img
              src={product.image}
              loading="lazy"
              alt={`${product.name} custom branded products`}
              className="hero_products-image"
            />
            <h5 className="hero_products-name">{product.name}</h5>
          </Link>
        ))}
      </div>
    </aside>
  );
}
