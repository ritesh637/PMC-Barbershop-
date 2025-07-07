import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Gallery from '@/components/Gallery';
import Barbers from '@/components/Barbers';
import LocationContact from '@/components/LocationContact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import About from '@/components/About';

export default function Home() {
  return (
    <main className="bg-[#1f1f1f] min-h-screen w-full text-white">
      <Header />
      <Hero />
      <About/>
      <Services />
      <Testimonials />
      <Pricing />
      <Gallery />
      <Barbers />
      <LocationContact />
      <FAQ />
      <Footer />
    </main>
  );
}
