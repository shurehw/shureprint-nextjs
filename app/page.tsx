import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ClientExamplesSection from '@/components/ClientExamplesSection';
import FeaturedSection from '@/components/FeaturedSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import CompanySection from '@/components/CompanySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="page-wrap">
      <Navigation />
      <main className="main-wrap">
        <Hero />
        <ClientExamplesSection />
        <FeaturedSection />
        <CapabilitiesSection />
        <CompanySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
