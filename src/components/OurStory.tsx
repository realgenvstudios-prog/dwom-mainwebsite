'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function OurStory() {
  return (
    <section id="about" className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-[1360px] gap-12 px-6 pt-20 md:grid-cols-2 md:items-center md:gap-16 md:px-12 md:pt-24 lg:px-16">
        {/* Courier, sitting flush on the bottom edge of the section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease }}
          className="order-2 flex justify-center self-end md:order-1"
        >
          <div className="relative aspect-[881/1246] w-[300px] sm:w-[400px] lg:w-[520px]">
            <Image
              src="/images/courier.webp"
              alt="Smiling DWOM courier in a red helmet holding a DWOM grocery bag"
              fill
              sizes="(min-width: 1024px) 520px, 400px"
              className="object-contain object-bottom"
            />
          </div>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease, delay: 0.15 }}
          className="order-1 md:order-2 md:pb-24"
        >
          <h2 className="max-w-[640px] text-[32px] font-semibold leading-[1.15] tracking-[-0.025em] text-[#111] md:text-[40px] lg:text-[46px]">
            We started with a simple idea: getting good food shouldn&apos;t require so much effort.
          </h2>
          <p className="mt-8 max-w-[640px] text-[17px] leading-[1.45] text-[#111] md:mt-10 md:text-[18px]">
            &ldquo;DWOM is building a better way for people to access food in Ghana starting with grocery delivery and
            growing toward a more connected food system.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
