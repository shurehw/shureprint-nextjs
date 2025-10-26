'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <>
      <Navigation />
      <div className="section hero wf-section">
        <div className="marquee">
          <div className="marquee-track is--desk">
            <img src="https://assets.website-files.com/622fa56ecc9274a545158f70/626f7180a82a856ca86eaaab_hey!%20what%E2%80%99s%20up.png" alt="" className="marquee-image" />
            <img src="https://assets.website-files.com/622fa56ecc9274a545158f70/626f7180a82a856ca86eaaab_hey!%20what%E2%80%99s%20up.png" alt="" className="marquee-image" />
            <img src="https://assets.website-files.com/622fa56ecc9274a545158f70/626f7180a82a856ca86eaaab_hey!%20what%E2%80%99s%20up.png" alt="" className="marquee-image" />
            <img src="https://assets.website-files.com/622fa56ecc9274a545158f70/626f7180a82a856ca86eaaab_hey!%20what%E2%80%99s%20up.png" alt="" className="marquee-image" />
            <img src="https://assets.website-files.com/622fa56ecc9274a545158f70/626f7180a82a856ca86eaaab_hey!%20what%E2%80%99s%20up.png" alt="" className="marquee-image" />
            <img src="https://assets.website-files.com/622fa56ecc9274a545158f70/626f7180a82a856ca86eaaab_hey!%20what%E2%80%99s%20up.png" alt="" className="marquee-image" />
          </div>
          <div className="marquee-track">
            <img src="https://assets.website-files.com/622fa56ecc9274a545158f70/6246165ac21f31848333e767_Shure%20Print.png" alt="" className="marquee-image" />
            <img src="https://assets.website-files.com/622fa56ecc9274a545158f70/6246165ac21f31848333e767_Shure%20Print.png" alt="" className="marquee-image" />
            <img src="https://assets.website-files.com/622fa56ecc9274a545158f70/6246165ac21f31848333e767_Shure%20Print.png" alt="" className="marquee-image" />
          </div>
        </div>

        <div className="container-2 padding-bottom-large w-container">
          <div className="w-layout-grid main-grid">
            <div id="w-node-aa8bdea7-e535-28ee-cfd7-700999b98dc4-cbfb33af" className="content-wrapper padding-bottom-medium">
              <h1 className="heading-large margin-bottom-small">
                If you'd like to learn more about how we can help evolve your brand, get in touch.
              </h1>
            </div>
            <div id="w-node-aa8bdea7-e535-28ee-cfd7-700999b98dc7-cbfb33af">
              <div className="w-form">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="text-field w-input"
                    maxLength={256}
                    name="Name-2"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="email"
                    className="text-field w-input"
                    maxLength={256}
                    name="Email-3"
                    placeholder="Email"
                    required
                  />
                  <textarea
                    placeholder="Your message"
                    maxLength={5000}
                    name="Message-2"
                    className="textarea w-input"
                  />
                  <input
                    type="submit"
                    value="Submit"
                    className="form-button w-button"
                  />
                </form>
              </div>
            </div>
            <div id="w-node-aa8bdea7-e535-28ee-cfd7-700999b98dd4-cbfb33af">
              <img
                src="https://assets.website-files.com/622fa56ecc9274a545158f70/626b6563cdd51f21a77dc032_shure.png"
                alt=""
                className="contact_spin"
              />
            </div>
            <div id="w-node-aa8bdea7-e535-28ee-cfd7-700999b98dd6-cbfb33af">
              <div className="flex-horizontal inner-padding-small">
                <div className="ui-dot"></div>
                <div className="heading-small">Press Enquiries</div>
              </div>
            </div>
            <div id="w-node-aa8bdea7-e535-28ee-cfd7-700999b98de5-cbfb33af">
              <div className="flex-horizontal inner-padding-small">
                <div className="ui-dot"></div>
                <div className="heading-small">Grab A Coffee</div>
              </div>
            </div>
            <div id="w-node-aa8bdea7-e535-28ee-cfd7-700999b98df4-cbfb33af">
              <div className="flex-horizontal inner-padding-small">
                <div className="ui-dot"></div>
                <div className="heading-small">New Business</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
