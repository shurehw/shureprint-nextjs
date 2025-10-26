import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturedSection from '@/components/FeaturedSection';
import CompanySection from '@/components/CompanySection';
import ContactSection from '@/components/ContactSection';
import HeroProducts from '@/components/HeroProducts';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="page-wrap">
      <Navigation />
      <main className="main-wrap">
        <Hero />
        <FeaturedSection />
        <CompanySection />
        <ContactSection />
      </main>
      <HeroProducts />
      <Footer />
    </div>
  );
}
