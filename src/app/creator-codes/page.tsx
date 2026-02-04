import Navbar from '@/components/Navbar';
import CreatorCodes from '@/components/CreatorCodes';
import Footer from '@/components/Footer';

export default function CreatorCodesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <CreatorCodes />
      <Footer />
    </main>
  );
}
