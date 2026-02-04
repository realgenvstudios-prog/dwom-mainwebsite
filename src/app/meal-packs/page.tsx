import Navbar from '@/components/Navbar';
import MealPacks from '@/components/MealPacks';
import Footer from '@/components/Footer';

export default function MealPacksPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <MealPacks />
      <Footer />
    </main>
  );
}
