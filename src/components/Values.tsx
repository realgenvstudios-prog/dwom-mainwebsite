'use client';

import { motion } from 'framer-motion';

const ease = [0.25, 0.1, 0.25, 1] as const;

const LeafIcon = (
  <svg viewBox="0 0 24 24" className="h-11 w-11" aria-hidden>
    <path d="M21 3C11 3 4.5 7.5 4.5 14.5c0 1.6.4 3 1 4.2L3.5 21l1.2 1.2 2-2.1c1.3.9 2.9 1.4 4.6 1.4C18.5 21.5 22 14 21 3Z" fill="currentColor" />
    <path d="M6.5 19.5C9 15.5 12.5 11.5 17 8" fill="none" stroke="#e6e8de" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const BadgeIcon = (
  <svg viewBox="0 0 24 24" className="h-12 w-12" aria-hidden>
    <path
      d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      fill="currentColor"
    />
    <path d="m8.5 12.2 2.4 2.3 4.6-4.6" fill="none" stroke="#e6e8de" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HandHeartIcon = (
  <svg viewBox="0 0 24 24" className="h-12 w-12" fill="currentColor" aria-hidden>
    <path d="M12 3.2c-1.1-1.7-4.3-1.4-4.3 1.2 0 2 2.6 3.7 4.3 5.1 1.7-1.4 4.3-3.1 4.3-5.1 0-2.6-3.2-2.9-4.3-1.2Z" />
    <path d="M4 15.2c0-.7.6-1.2 1.2-1.2h4.1c1.2 0 2.1.5 2.7 1.1h2.6c.9 0 1.5.6 1.5 1.3l3.6-1.8c.9-.4 1.9.1 1.9 1 0 .5-.3.9-.7 1.2l-5.3 3.4c-.8.5-1.7.8-2.7.8H6.2c-.6 0-1.2.2-1.6.6L4 21Z" />
  </svg>
);

const ScaleIcon = (
  <svg viewBox="0 0 24 24" className="h-12 w-12" fill="currentColor" aria-hidden>
    <circle cx="12" cy="3.4" r="1.4" />
    <path d="M11.1 4.5h1.8v15h-1.8z" />
    <path d="M4 7.2 20 5.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M6 7 3.3 13.5M6 7l2.7 6.5M18 5.8l-2.7 6.5M18 5.8l2.7 6.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
    <path d="M2.8 13.5h6.4a3.2 3.2 0 0 1-6.4 0ZM14.8 12.3h6.4a3.2 3.2 0 0 1-6.4 0Z" />
  </svg>
);

const values = [
  {
    title: 'Freshness',
    body: "We don't compromise on the quality of the food we deliver.",
    icon: LeafIcon,
  },
  {
    title: 'Reliability',
    body: 'When you order with DWOM, you should know what to expect.',
    icon: BadgeIcon,
  },
  {
    title: 'Care',
    body: 'From ordering to delivery, the experience should feel considered.',
    icon: HandHeartIcon,
  },
  {
    title: 'Value',
    body: 'We build systems that help make grocery shopping more practical for your household.',
    icon: ScaleIcon,
  },
];

export default function Values() {
  return (
    <section className="bg-[#f3f1ec] px-6 pt-20 pb-20 md:px-12 md:pt-[190px] md:pb-28">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        {values.map((value, i) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease, delay: i * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <div className="flex h-[96px] w-[96px] items-center justify-center rounded-full border border-[#c8cfbd] bg-[#e6e8de] text-[#5b6e45]">
              {value.icon}
            </div>
            <h3 className="mt-10 text-[26px] font-semibold tracking-[-0.02em] text-[#111] md:text-[28px]">
              {value.title}
            </h3>
            <p className="mt-4 max-w-[290px] text-[17px] leading-[1.4] text-[#111] md:text-[19px]">
              {value.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
