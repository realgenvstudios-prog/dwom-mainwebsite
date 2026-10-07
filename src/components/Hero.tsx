'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { AppStoreBadge, GooglePlayBadge } from './StoreBadges';

export default function Hero() {
  return (
    <section id="get-the-app" className="scroll-mt-16 bg-white pt-16 md:scroll-mt-[88px] md:pt-[88px]">
      <div className="relative flex min-h-[520px] w-full items-center justify-center overflow-hidden sm:min-h-0 sm:aspect-[2000/733]">
        <Image
          src="/images/hero-produce.jpg"
          alt="Fresh tomatoes, cherries, broccoli, bananas and garden eggs"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />

        {/* Copy + store badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative mx-auto max-w-5xl px-6 py-16 text-center text-white"
        >
          <h1 className="text-[32px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[40px] md:text-[46px] lg:whitespace-nowrap">
            Save on Groceries and Everyday Essentials
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-[17px] leading-snug md:mt-7 md:text-[21px]">
            Get what you need from the market without making the trip.
            <br className="hidden sm:block" /> Fresh groceries and everyday food essentials, delivered to your door.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:mt-12 md:gap-5">
            <GooglePlayBadge className="border-white/40" />
            <AppStoreBadge className="border-white/40" />
          </div>
          <p className="mt-4 text-[15px] tracking-tight text-white/90">
            Available on the App Store &amp; PlayStore
          </p>
        </motion.div>
      </div>
    </section>
  );
}
