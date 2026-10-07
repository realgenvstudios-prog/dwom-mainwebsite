'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function GoodFood() {
  const reduceMotion = useReducedMotion();

  return (
    // z-10 lets the bag hang over the top of the next section
    <section className="relative z-10 bg-white">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 pt-20 md:grid-cols-2 md:items-end md:gap-8 md:px-12 md:pt-32">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease }}
          className="md:pb-[120px]"
        >
          <h2 className="text-[36px] font-semibold leading-[1.1] tracking-[-0.025em] text-[#111] md:text-[48px]">
            Good food,
            <br />
            taken care of.
          </h2>
          <p className="mt-6 max-w-[400px] text-[17px] leading-[1.45] text-[#111] md:text-[19px]">
            DWOM makes it easier to get the groceries you need without the trip, the carrying, or the extra hassle.
          </p>
          <Link
            href="/#get-the-app"
            className="mt-10 inline-block rounded-full bg-[#111] px-7 py-3 text-[15px] text-white transition-colors hover:bg-[#333] md:mt-12 md:text-[17px]"
          >
            Get the app
          </Link>
        </motion.div>

        {/* Floating bag, pushed down so it overlaps the next section */}
        <div className="flex justify-center md:translate-y-14 md:justify-end md:pr-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease, delay: 0.15 }}
          >
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -16, 0], rotate: [7, 5.5, 7] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ rotate: 7 }}
              className="relative aspect-[417/601] w-[260px] will-change-transform sm:w-[320px] md:w-[440px]"
            >
              <Image
                src="/images/grocery-bag.png"
                alt="Paper grocery bag filled with peppers, an apple, a carrot, cucumber and lettuce"
                fill
                sizes="(min-width: 768px) 440px, 320px"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
