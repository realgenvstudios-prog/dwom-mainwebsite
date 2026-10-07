import Image from 'next/image';
import { AppStoreBadge, GooglePlayBadge } from './StoreBadges';

export default function Hero() {
  return (
    <section id="get-the-app" className="scroll-mt-16 bg-white pt-16 md:scroll-mt-[88px] md:pt-[88px]">
      <div className="relative h-[300px] w-full sm:h-auto sm:aspect-[3014/980]">
        <Image
          src="/images/hero-produce.jpg"
          alt="Fresh tomatoes, cherries, broccoli, bananas and garden eggs"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="mx-auto max-w-[1080px] px-6 pt-16 text-center md:pt-24">
        <h1 className="text-display text-ink">Save on Groceries and Everyday Essentials</h1>
        <p className="text-lead mx-auto mt-6 max-w-[680px] text-subtle md:mt-8">
          Get what you need from the market without making the trip.
          <br className="hidden md:block" /> Fresh groceries and everyday food essentials, delivered to your door.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:mt-12">
          <GooglePlayBadge />
          <AppStoreBadge />
        </div>
      </div>
    </section>
  );
}
