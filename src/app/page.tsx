import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import GoodFood from '@/components/GoodFood';
import Values from '@/components/Values';
import OurStory from '@/components/OurStory';
import Gallery from '@/components/Gallery';
import AppShowcase from '@/components/AppShowcase';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <GoodFood />
      <Values />
      <OurStory />
      <Gallery />
      <AppShowcase />
      <Footer />
    </main>
  );
}
