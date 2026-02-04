import Navbar from '@/components/Navbar';
import Subscriptions from '@/components/Subscriptions';
import Footer from '@/components/Footer';

export default function SubscriptionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Subscriptions />
      <Footer />
    </main>
  );
}
