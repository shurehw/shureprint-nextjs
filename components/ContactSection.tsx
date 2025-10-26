'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('Name-2'),
      email: formData.get('Email-3'),
      message: formData.get('Message-2'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowSuccess(true);
        e.currentTarget.reset();
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        setShowError(true);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="w-layout-grid main-grid">
        <div id="w-node-b30e6dcb-e5b2-2d6c-bb09-dc8cfc9d3241-4cfb33a9" className="content-wrapper padding-bottom-medium">
          <h1 className="heading-large margin-bottom-small">Don&apos;t see it? we can probably do it. Reach out.</h1>
        </div>
        <div id="w-node-b30e6dcb-e5b2-2d6c-bb09-dc8cfc9d3244-4cfb33a9">
          <div className="w-form">
            <form id="wf-form-Email-Form" name="wf-form-Email-Form" data-name="Email Form" onSubmit={handleSubmit}>
              <label htmlFor="Name-2" className="sr-only">Name</label>
              <input className="text-field w-input" maxLength={256} name="Name-2" placeholder="Name" type="text" id="Name-2" required aria-required="true" />
              <label htmlFor="Email-3" className="sr-only">Email</label>
              <input className="text-field w-input" maxLength={256} name="Email-3" placeholder="Email" type="email" id="Email-3" required aria-required="true" />
              <label htmlFor="Message-2" className="sr-only">Message</label>
              <textarea placeholder="Your message" maxLength={5000} id="Message-2" name="Message-2" className="textarea w-input" aria-describedby="message-hint"></textarea>
              <span id="message-hint" className="sr-only">Enter your message here. Maximum 5000 characters.</span>
              <input type="submit" data-wait="Please wait..." className="form-button w-button" value={isSubmitting ? 'Sending...' : 'Submit'} disabled={isSubmitting} />
            </form>
            <div className="success-message w-form-done" style={{ display: showSuccess ? 'block' : 'none' }} role="status" aria-live="polite">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="error-message w-form-fail" style={{ display: showError ? 'block' : 'none' }} role="alert" aria-live="polite">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
        <div id="w-node-b30e6dcb-e5b2-2d6c-bb09-dc8cfc9d3251-4cfb33a9">
          <img
            src="https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/626b6563cdd51f21a77dc032_shure.png"
            loading="lazy"
            style={{transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-360deg) skew(0, 0)'}}
            alt="Shureprint contact form decorative spinning logo"
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
