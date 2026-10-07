'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

export default function GoodFood() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-y section-x bg-white">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-[5fr_7fr] md:gap-12">
        <div>
          <h2 className="text-headline text-ink">
            Good food,
            <br />
            taken care of.
          </h2>
          <p className="text-lead mt-6 max-w-[420px] text-subtle">
            DWOM makes it easier to get the groceries you need without the trip, the carrying, or the extra hassle.
          </p>
        </div>

        {/* The page's one moving element: the bag floats gently */}
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="relative mx-auto aspect-[1342/1010] w-full max-w-[680px] will-change-transform"
        >
          <Image
            src="/images/grocery-bag.webp"
            alt="Red DWOM tote bag full of groceries beside the DWOM app on a phone"
            fill
            sizes="(min-width: 768px) 680px, 100vw"
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
