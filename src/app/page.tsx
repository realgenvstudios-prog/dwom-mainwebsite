import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OriginStory from '@/components/OriginStory';
import HowItWorks from '@/components/HowItWorks';
import WaitlistSection from '@/components/WaitlistSection';
import JoinSection from '@/components/JoinSection';
import Footer from '@/components/Footer';
import BetaRequestModal from '@/components/BetaRequestModal';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <OriginStory />
      <HowItWorks />
      <WaitlistSection />
      <JoinSection />
      <Footer />
      <BetaRequestModal />
    </main>
  );
}
