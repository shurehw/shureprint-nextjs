'use client';

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="w-layout-grid main-grid">
        <div id="w-node-b30e6dcb-e5b2-2d6c-bb09-dc8cfc9d3241-4cfb33a9" className="content-wrapper padding-bottom-medium">
          <h1 className="heading-large margin-bottom-small">Don&apos;t see it? we can probably do it. Reach out.</h1>
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
        <div id="w-node-b30e6dcb-e5b2-2d6c-bb09-dc8cfc9d3251-4cfb33a9">
          <img
            src="https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/626b6563cdd51f21a77dc032_shure.png"
            loading="lazy"
            style={{transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-360deg) skew(0, 0)'}}
            alt=""
            className="contact_spin"
          />
        </div>
        <div id="w-node-b30e6dcb-e5b2-2d6c-bb09-dc8cfc9d3253-4cfb33a9">
          <div className="flex-horizontal inner-padding-small">
            <div className="ui-dot"></div>
            <div className="heading-small">Press Enquiries</div>
          </div>
        </div>
        <div id="w-node-b30e6dcb-e5b2-2d6c-bb09-dc8cfc9d3262-4cfb33a9">
          <div className="flex-horizontal inner-padding-small">
            <div className="ui-dot"></div>
            <div className="heading-small">Grab A Coffee</div>
          </div>
        </div>
        <div id="w-node-b30e6dcb-e5b2-2d6c-bb09-dc8cfc9d3271-4cfb33a9">
          <div className="flex-horizontal inner-padding-small">
            <div className="ui-dot"></div>
            <div className="heading-small">New Business</div>
          </div>
        </div>
      </div>
    </section>
  );
}
