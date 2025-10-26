import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms & Conditions | Shureprint',
  description: 'Terms and conditions for working with Shureprint. Order policies, payment terms, and liability.',
};

export default function TermsPage() {
  return (
    <div className="page-wrap">
      <Navigation />
      <main className="main-wrap">
        <section className="company-section" style={{ paddingTop: '6vw', paddingBottom: '6vw' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2vw' }}>
            <h1 className="company-heading" style={{ marginBottom: '2vw' }}>
              Terms & Conditions
            </h1>

            <p style={{ fontSize: 'max(1vw, 16px)', marginBottom: '2vw', color: '#666' }}>
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div style={{ fontSize: 'max(1.1vw, 17px)', lineHeight: '1.8' }}>
              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginTop: '2vw', marginBottom: '1vw', fontWeight: 600 }}>
                Order Acceptance
              </h2>
              <p style={{ marginBottom: '1.5vw' }}>
                All orders are subject to acceptance by Shureprint. We reserve the right to refuse or cancel any order for any reason, including product availability, errors in pricing, or suspected fraud.
              </p>

              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginTop: '2vw', marginBottom: '1vw', fontWeight: 600 }}>
                Pricing & Payment
              </h2>
              <p style={{ marginBottom: '1.5vw' }}>
                Prices are quoted based on current costs and are subject to change. Final pricing is confirmed in your quote or invoice. Payment terms:
              </p>
              <ul style={{ marginBottom: '2vw', paddingLeft: '1.5vw' }}>
                <li style={{ marginBottom: '0.5vw' }}>50% deposit required before production begins</li>
                <li style={{ marginBottom: '0.5vw' }}>Balance due before shipment</li>
                <li style={{ marginBottom: '0.5vw' }}>Net 30 terms available for approved accounts</li>
                <li style={{ marginBottom: '0.5vw' }}>Late payments may incur fees</li>
              </ul>

              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginTop: '2vw', marginBottom: '1vw', fontWeight: 600 }}>
                Artwork & Proofs
              </h2>
              <p style={{ marginBottom: '1.5vw' }}>
                You are responsible for providing print-ready artwork or approving our designs. We provide proofs for your approval before production. Once you approve a proof, we are not responsible for errors in the approved artwork.
              </p>

              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginTop: '2vw', marginBottom: '1vw', fontWeight: 600 }}>
                Production & Delivery
              </h2>
              <p style={{ marginBottom: '1.5vw' }}>
                Production timelines are estimates, not guarantees. We do our best to meet deadlines but are not liable for delays caused by circumstances beyond our control (supplier issues, shipping delays, etc.).
              </p>
              <p style={{ marginBottom: '1.5vw' }}>
                Custom print orders may have a +/- 10% variance in quantity. You will be billed for the actual quantity produced.
              </p>

              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginTop: '2vw', marginBottom: '1vw', fontWeight: 600 }}>
                Returns & Refunds
              </h2>
              <p style={{ marginBottom: '1.5vw' }}>
                Custom printed products are non-refundable unless there is a manufacturing defect or error on our part. Claims must be made within 7 days of delivery with photo evidence.
              </p>

              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginTop: '2vw', marginBottom: '1vw', fontWeight: 600 }}>
                Liability
              </h2>
              <p style={{ marginBottom: '1.5vw' }}>
                Our liability is limited to the cost of the order. We are not responsible for indirect damages, lost profits, or consequential damages arising from delays, errors, or defects.
              </p>

              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginTop: '2vw', marginBottom: '1vw', fontWeight: 600 }}>
                Intellectual Property
              </h2>
              <p style={{ marginBottom: '1.5vw' }}>
                You represent that you own or have permission to use all artwork, logos, and content provided to us. You agree to indemnify us against any claims related to intellectual property infringement.
              </p>

              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginTop: '2vw', marginBottom: '1vw', fontWeight: 600 }}>
                Cancellations
              </h2>
              <p style={{ marginBottom: '1.5vw' }}>
                Orders can be canceled before production begins for a full refund (minus any design fees). Once production has started, cancellations may incur fees for work completed.
              </p>

              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginTop: '2vw', marginBottom: '1vw', fontWeight: 600 }}>
                Governing Law
              </h2>
              <p style={{ marginBottom: '1.5vw' }}>
                These terms are governed by the laws of California, United States. Any disputes will be resolved in Los Angeles County courts.
              </p>

              <h2 style={{ fontSize: 'max(1.5vw, 24px)', marginTop: '2vw', marginBottom: '1vw', fontWeight: 600 }}>
                Contact
              </h2>
              <p style={{ marginBottom: '1.5vw' }}>
                Questions about these terms? Reach out through our contact page.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
