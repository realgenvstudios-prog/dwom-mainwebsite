'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ease = [0.25, 0.1, 0.25, 1] as const;

const photos = [
  {
    src: '/images/family-cooking.webp',
    alt: 'Mother cooking pasta with her two young children in a home kitchen',
    position: 'object-[60%_center]',
  },
  {
    src: '/images/accra-evening.webp',
    alt: 'Accra neighbourhood at dusk with city lights in the distance',
    position: 'object-center',
  },
  {
    src: '/images/grocery-haul.webp',
    alt: 'Weekly grocery haul of plantain, meat, tomatoes, potatoes and pantry items',
    position: 'object-[30%_center]',
  },
  {
    src: '/images/friends-cooking.webp',
    alt: 'Three friends making pizza together at a kitchen counter',
    position: 'object-[center_60%]',
  },
];

export default function Gallery() {
  return (
    <section className="bg-[#f8f7f4] px-4 pt-20 pb-20 md:px-12 md:pt-[100px] md:pb-[104px] lg:px-[72px]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9, ease }}
        className="text-center"
      >
        <h2 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.025em] text-[#111] md:text-[46px]">
          Less to handle. More to enjoy.
        </h2>
        <p className="mt-4 text-[17px] text-[#111] md:mt-5 md:text-[21px]">Grocery delivery across Accra</p>
      </motion.div>

      <div className="mx-auto mt-10 grid max-w-[1600px] grid-cols-2 gap-2.5 md:mt-9 lg:grid-cols-4">
        {photos.map((photo, i) => (
          <motion.div
            key={photo.src}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease, delay: i * 0.1 }}
            className="group relative aspect-[442/458] overflow-hidden"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className={`object-cover ${photo.position} transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]`}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
