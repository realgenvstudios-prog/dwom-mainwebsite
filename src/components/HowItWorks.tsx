'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Browse or write your list',
    description:
      'Explore our full product catalogue and add items directly, or just type your list in English, Twi, or shorthand "ayoyo", "koobi for soup", "2 tins of tomatoes". Either way works.',
  },
  {
    number: '02',
    title: 'We sort it instantly',
    description:
      'Our local AI prices and organizes your items in seconds, sourced fresh from our micro-hub. No guesswork, no back-and-forth.',
  },
  {
    number: '03',
    title: 'Delivered to your gate',
    description:
      'A dedicated rider brings everything straight to your door. Fast. Fresh. No minimum order required.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#e53935] font-semibold text-sm uppercase tracking-widest mb-4"
        >
          How It Works
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight mb-10"
        >
          Three steps. That's it.
        </motion.h2>

        <div className="space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="flex gap-5 pb-10 relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[19px] top-10 bottom-0 w-px bg-gray-200" />
              )}

              {/* Number circle */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#e53935] text-white flex items-center justify-center text-sm font-bold z-10">
                {step.number}
              </div>

              {/* Content */}
              <div className="pt-1">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-1">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
