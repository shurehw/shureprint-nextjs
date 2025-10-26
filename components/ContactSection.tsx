'use client';

import Link from 'next/link';

const clients = [
  {
    name: 'Show Me Your Mumu',
    image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/629fa92e4d65b26ca3ff3c5a_Screen%20Shot%202022-06-03%20at%2010.13.25%20AM.png',
    srcSet: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/629fa92e4d65b26ca3ff3c5a_Screen%20Shot%202022-06-03%20at%2010.13.25%20AM-p-500.png 500w, https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/629fa92e4d65b26ca3ff3c5a_Screen%20Shot%202022-06-03%20at%2010.13.25%20AM-p-800.png 800w, https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/629fa92e4d65b26ca3ff3c5a_Screen%20Shot%202022-06-03%20at%2010.13.25%20AM.png 840w',
  },
  {
    name: 'Private Suite',
    image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d3b6c1a363870695e01e_Private%20Suite%20-%20Coaster%202.jpg',
    srcSet: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d3b6c1a363870695e01e_Private%20Suite%20-%20Coaster%202-p-500.jpeg 500w, https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d3b6c1a363870695e01e_Private%20Suite%20-%20Coaster%202-p-800.jpeg 800w, https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d3b6c1a363870695e01e_Private%20Suite%20-%20Coaster%202-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d3b6c1a363870695e01e_Private%20Suite%20-%20Coaster%202.jpg 1242w',
  },
  {
    name: 'Ggiata',
    image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d5b383066813e09d47ff_106280626_1153403391696087_3587181388759746777_n.jpg',
    srcSet: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d5b383066813e09d47ff_106280626_1153403391696087_3587181388759746777_n-p-500.jpeg 500w, https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d5b383066813e09d47ff_106280626_1153403391696087_3587181388759746777_n-p-800.jpeg 800w, https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d5b383066813e09d47ff_106280626_1153403391696087_3587181388759746777_n-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d5b383066813e09d47ff_106280626_1153403391696087_3587181388759746777_n.jpg 1440w',
  },
  {
    name: 'The Nice Guy',
    image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/629fae47bf3fd4cb576e3afe_Untitled%20design.gif',
    srcSet: '',
  },
  {
    name: 'Delilah',
    image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/629faeaea8acdb862e92a484_Untitled%20design-2.gif',
    srcSet: '',
  },
];

export default function ContactSection() {
  return (
    <section className="contact-section">
      <h2 className="company-heading">
        <Link href="/client-list" className="company-link">→ Client Examples</Link>
        <br />
      </h2>

      <div className="list-works-wrapper">
        <div className="collection-list-wrapper-2 w-dyn-list">
          <div role="list" className="w-dyn-items">
            {clients.map((client, index) => (
              <div
                key={index}
                data-w-id="23a068e9-0911-829a-fead-0dc9d6e376bd"
                role="listitem"
                className="collection-works w-dyn-item"
              >
                <div data-w-id="41ea29f5-1c0e-c481-9cde-e84099878775" className="hover-image-wrapper">
                  <div className="inner-work-image">
                    <img
                      src={client.image}
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet={client.srcSet || undefined}
                      className="content-image"
                    />
                  </div>
                </div>
                <div className="w-layout-grid grid-work-list">
                  <div id="w-node-a1a7b308-9b5d-78fd-a504-4d65a1efbf81-4cfb33a9" className="content-image-wrapper">
                    <img
                      src={client.image}
                      loading="lazy"
                      alt=""
                      sizes="(max-width: 479px) 87vw, (max-width: 767px) 92vw, (max-width: 991px) 94vw, 100vw"
                      srcSet={client.srcSet || undefined}
                      className="content-image"
                    />
                  </div>
                  <Link
                    id="w-node-a1a7b308-9b5d-78fd-a504-4d65a1efbf83-4cfb33a9"
                    href="#"
                    className="list-link margin-bottom-small w-inline-block"
                  >
                    <h2 className="heading-large">{client.name}</h2>
                    <img
                      src="https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/62467e9f74f3012057ced356_Arrow-cta.svg"
                      loading="lazy"
                      data-w-id="a1a7b308-9b5d-78fd-a504-4d65a1efbf86"
                      alt=""
                      className="arrow-cta"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link href="#" data-w-id="23a068e9-0911-829a-fead-0dc9d6e376c1" className="nav-link content w-inline-block">
          <div data-w-id="23a068e9-0911-829a-fead-0dc9d6e376c2" className="hover-underline"></div>
        </Link>
        <div className="button-wrapper inner-padding-medium">
          <Link href="/client-list" data-w-id="23a068e9-0911-829a-fead-0dc9d6e376c4" className="nav-link content w-inline-block">
            <div className="flex-horizontal">
              <div className="text-navlink">View all cases</div>
              <img
                src="https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/62467e9f74f3012057ced356_Arrow-cta.svg"
                loading="lazy"
                alt=""
                className="arrow"
              />
            </div>
            <div data-w-id="23a068e9-0911-829a-fead-0dc9d6e376c9" className="hover-underline"></div>
          </Link>
        </div>
      </div>

      <div className="w-layout-grid main-grid">
        <div id="w-node-b30e6dcb-e5b2-2d6c-bb09-dc8cfc9d3241-4cfb33a9" className="content-wrapper padding-bottom-medium">
          <h1 className="heading-large margin-bottom-small">Don&apos;t see it? we can probably do it. Reach out. </h1>
        </div>
        <div id="w-node-b30e6dcb-e5b2-2d6c-bb09-dc8cfc9d3244-4cfb33a9">
          <div className="w-form">
            <form id="wf-form-Email-Form" name="wf-form-Email-Form" data-name="Email Form" method="get">
              <input className="text-field w-input" maxLength={256} name="Name-2" placeholder="Name" type="text" id="Name-2" required />
              <input className="text-field w-input" maxLength={256} name="Email-3" placeholder="Email" type="email" id="Email-3" required />
              <textarea placeholder="Your message" maxLength={5000} id="Message-2" name="Message-2" className="textarea w-input"></textarea>
              <input type="submit" data-wait="Please wait..." className="form-button w-button" value="Submit" />
            </form>
            <div className="success-message w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="error-message w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities Grid */}
      <div className="w-layout-grid main-grid" style={{ marginTop: '4vw', paddingBottom: '4vw' }}>
        <div className="capabilities-grid" style={{
          gridColumn: '1 / -1',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '1vw'
        }}>
          {[
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
              title: 'Sourcing Domestically & Internationally',
              image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/62687678f8b61eafb2fd3aa4_Rectangle%2070.png',
              link: '/capabilities/sourcing-domestically-internationally'
            },
            {
              title: 'Mock Ups, Sampling, Prototyping',
              image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/626876a6a05d92df606ecd42_Rectangle%2069.png',
              link: '/capabilities/mock-ups-sampling-prototyping'
            },
            {
              title: 'Design & Creative Direction',
              image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/626876b7c2220c9894e55cfc_Rectangle%2071.png',
              link: '/capabilities/design-creative-direction'
            }
          ].map((capability, index) => (
            <Link
              key={index}
              href={capability.link}
              className="capability-tile"
              style={{
                position: 'relative',
                aspectRatio: '1',
                overflow: 'hidden',
                textDecoration: 'none',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.5vw',
                transition: 'transform 0.3s ease'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${capability.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  zIndex: 0
                }}
              />
              <div style={{ position: 'relative', zIndex: 1, fontSize: '2vw' }}>↓</div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontSize: '1vw', fontWeight: '500', marginBottom: '0.5vw', lineHeight: '1.2' }}>
                  {capability.title}
                </h3>
                <div style={{ fontSize: '0.9vw' }}>→ View</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
