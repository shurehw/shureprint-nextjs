'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

const clients = [
  {
    name: 'Show Me Your Mumu',
    industry: 'Fashion & Retail',
    image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/629fa92e4d65b26ca3ff3c5a_Screen%20Shot%202022-06-03%20at%2010.13.25%20AM.png',
    srcSet: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/629fa92e4d65b26ca3ff3c5a_Screen%20Shot%202022-06-03%20at%2010.13.25%20AM-p-500.png 500w, https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/629fa92e4d65b26ca3ff3c5a_Screen%20Shot%202022-06-03%20at%2010.13.25%20AM-p-800.png 800w, https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/629fa92e4d65b26ca3ff3c5a_Screen%20Shot%202022-06-03%20at%2010.13.25%20AM.png 840w',
    description: 'Custom packaging and branded materials for this bohemian fashion brand.'
  },
  {
    name: 'Butchers Daughter',
    industry: 'Hospitality & Food',
    image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d1e2b97ff90ab88f1e53_butchers%20d%20-%20shure.jpg',
    srcSet: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d1e2b97ff90ab88f1e53_butchers%20d%20-%20shure-p-500.jpeg 500w, https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d1e2b97ff90ab88f1e53_butchers%20d%20-%20shure-p-800.jpeg 800w, https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d1e2b97ff90ab88f1e53_butchers%20d%20-%20shure-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d1e2b97ff90ab88f1e53_butchers%20d%20-%20shure.jpg 1440w',
    description: 'Print and packaging solutions for this plant-based restaurant concept.'
  },
  {
    name: 'Private Suite',
    industry: 'Hospitality',
    image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d3b6c1a363870695e01e_Private%20Suite%20-%20Coaster%202.jpg',
    srcSet: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d3b6c1a363870695e01e_Private%20Suite%20-%20Coaster%202-p-500.jpeg 500w, https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d3b6c1a363870695e01e_Private%20Suite%20-%20Coaster%202-p-800.jpeg 800w, https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d3b6c1a363870695e01e_Private%20Suite%20-%20Coaster%202-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d3b6c1a363870695e01e_Private%20Suite%20-%20Coaster%202.jpg 1242w',
    description: 'Premium coasters and branded collateral for luxury hospitality.'
  },
  {
    name: 'Ggiata',
    industry: 'Hospitality & Food',
    image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d5b383066813e09d47ff_106280626_1153403391696087_3587181388759746777_n.jpg',
    srcSet: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d5b383066813e09d47ff_106280626_1153403391696087_3587181388759746777_n-p-500.jpeg 500w, https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d5b383066813e09d47ff_106280626_1153403391696087_3587181388759746777_n-p-800.jpeg 800w, https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d5b383066813e09d47ff_106280626_1153403391696087_3587181388759746777_n-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d5b383066813e09d47ff_106280626_1153403391696087_3587181388759746777_n.jpg 1440w',
    description: 'Custom packaging for this modern Italian restaurant.'
  },
  {
    name: 'The Nice Guy',
    industry: 'Hospitality',
    image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/629fae47bf3fd4cb576e3afe_Untitled%20design.gif',
    srcSet: '',
    description: 'Branded materials for this exclusive LA hotspot.'
  },
  {
    name: 'Delilah',
    industry: 'Hospitality',
    image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/629faeaea8acdb862e92a484_Untitled%20design-2.gif',
    srcSet: '',
    description: 'Custom print collateral for this upscale supper club.'
  }
];

export default function ClientListPage() {
  return (
    <div className="page-wrap">
      <Navigation />
      <main className="main-wrap">
        <section className="company-section" style={{ paddingTop: '6vw' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2vw' }}>
            <h1 className="company-heading" style={{ marginBottom: '2vw' }}>
              Brands we work with
            </h1>
            <p style={{ fontSize: 'max(1.2vw, 18px)', lineHeight: '1.6', marginBottom: '4vw', maxWidth: '800px' }}>
              From restaurants and hotels to fashion brands and retailers, we partner with businesses that care about the details. Here&apos;s a look at some of the work we&apos;re proud of.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '3vw',
              marginBottom: '4vw'
            }}>
              {clients.map((client, index) => (
                <div
                  key={index}
                  style={{
                    borderBottom: '1px solid #000',
                    paddingBottom: '2vw',
                    transition: 'transform 0.3s ease',
                  }}
                  className="client-card"
                >
                  <div style={{
                    aspectRatio: '4/3',
                    overflow: 'hidden',
                    marginBottom: '1.5vw',
                    borderRadius: '0.5vw'
                  }}>
                    <img
                      src={client.image}
                      alt={`${client.name} custom packaging by Shureprint`}
                      srcSet={client.srcSet || undefined}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                      className="client-card-image"
                    />
                  </div>
                  <div style={{
                    fontSize: 'max(0.9vw, 14px)',
                    color: '#666',
                    marginBottom: '0.5vw',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {client.industry}
                  </div>
                  <h3 style={{
                    fontSize: 'max(1.5vw, 24px)',
                    fontWeight: 600,
                    marginBottom: '1vw'
                  }}>
                    {client.name}
                  </h3>
                  <p style={{
                    fontSize: 'max(1vw, 16px)',
                    lineHeight: '1.6',
                    color: '#333'
                  }}>
                    {client.description}
                  </p>
                </div>
              ))}
            </div>

            <div style={{
              borderTop: '1px solid #000',
              paddingTop: '3vw',
              textAlign: 'center'
            }}>
              <h2 style={{
                fontSize: 'max(2vw, 32px)',
                marginBottom: '1.5vw',
                fontWeight: 400
              }}>
                Ready to join them?
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
                  textDecoration: 'none',
                  transition: 'background-color 0.3s ease'
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
        .client-card:hover {
          transform: translateY(-5px);
        }
        .client-card:hover .client-card-image {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
