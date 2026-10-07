'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function AppShowcase() {
  return (
    <section className="bg-white px-4 pt-24 pb-12 md:px-12 md:pt-[150px] md:pb-[140px] lg:px-[69px]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9, ease }}
        className="text-center"
      >
        <h2 className="text-[34px] font-semibold leading-[1.1] tracking-[-0.025em] text-[#111] md:text-[48px]">
          Your market, in your pocket.
        </h2>
        <p className="mx-auto mt-5 max-w-[500px] text-[17px] leading-snug text-[#111] md:mt-7 md:text-[21px]">
          Everything you need to make your grocery run easier right from your phone.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.1, ease, delay: 0.1 }}
        className="relative mx-auto mt-12 aspect-[2745/996] max-w-[1600px] overflow-hidden rounded-2xl bg-[#d4483e] md:mt-16 md:rounded-[20px]"
      >
        <Image
          src="/images/app-screens.webp"
          alt="DWOM app screens: browsing categories, writing a market list, naming a delivery plan, and the AI shopping list"
          fill
          sizes="(min-width: 1600px) 1600px, 100vw"
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}
