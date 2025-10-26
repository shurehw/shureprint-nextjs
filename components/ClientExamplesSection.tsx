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
  {
    name: 'Butchers Daughter',
    image: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d1e2b97ff90ab88f1e53_butchers%20d%20-%20shure.jpg',
    srcSet: 'https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d1e2b97ff90ab88f1e53_butchers%20d%20-%20shure-p-500.jpeg 500w, https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d1e2b97ff90ab88f1e53_butchers%20d%20-%20shure-p-800.jpeg 800w, https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d1e2b97ff90ab88f1e53_butchers%20d%20-%20shure-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/62453a78ddc3de39ad34b9a2/6268d1e2b97ff90ab88f1e53_butchers%20d%20-%20shure.jpg 1440w',
  },
];

export default function ClientExamplesSection() {
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
                      alt={client.name}
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
                      alt={client.name}
                      sizes="(max-width: 479px) 87vw, (max-width: 767px) 92vw, (max-width: 991px) 94vw, 100vw"
                      srcSet={client.srcSet || undefined}
                      className="content-image"
                    />
                  </div>
                  <Link
                    id="w-node-a1a7b308-9b5d-78fd-a504-4d65a1efbf83-4cfb33a9"
                    href="/client-list"
                    className="list-link margin-bottom-small w-inline-block"
                  >
                    <h2 className="heading-large">{client.name}</h2>
                    <img
                      src="https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/62467e9f74f3012057ced356_Arrow-cta.svg"
                      loading="lazy"
                      alt=""
                      className="arrow"
                    />
                  </Link>
                  <div data-w-id="23a068e9-0911-829a-fead-0dc9d6e376c9" className="hover-underline"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="padding-top-medium">
          <Link href="/client-list" className="more-link w-inline-block">
            <div className="inline">
              <div>View all cases</div>
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
    </section>
  );
}
