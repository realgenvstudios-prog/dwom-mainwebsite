'use client';

import { motion } from 'framer-motion';

const values = [
  { label: 'Affordable Prices' },
  { label: 'No Minimum Order' },
  { label: 'Fast Delivery' },
  { label: 'Quality Guaranteed' },
  { label: 'Client Obsessed' },
];

export default function OriginStory() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#e53935] font-semibold text-sm uppercase tracking-widest mb-4"
        >
          Why DWOM Exists
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight mb-6"
        >
          Born out of a real problem.
        </motion.h2>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-4 text-gray-600 text-base leading-relaxed mb-8"
        >
          <p>
            Back in university, our founders <span className="font-semibold text-[#1a1a1a]">Ted, Prince, and Gideon</span> kept running into the same frustration getting fresh, affordable groceries was a real hassle. Minimum orders were too high, delivery was slow, and prices felt unpredictable.
          </p>
          <p>
            So they built DWOM. A grocery app made specifically for Ghanaians. Browse our full product catalogue, or simply type your list in English, Twi, or shorthand <span className="font-semibold text-[#1a1a1a]">"2 cups of Ayoyo"</span> or <span className="font-semibold text-[#1a1a1a]">"kontomire for soup"</span> we understand it either way and get it to you fast.
          </p>
          <p>
            No minimum order. No overpriced markups. Just fresh local ingredients, delivered to your gate faster than a text.
          </p>
        </motion.div>

        {/* Founders */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="flex -space-x-2">
            {['T', 'P', 'G'].map((initial, i) => (
              <div
                key={initial}
                className="w-9 h-9 rounded-full bg-[#e53935] text-white flex items-center justify-center text-sm font-bold border-2 border-white"
                style={{ zIndex: 3 - i }}
              >
                {initial}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            Founded by <span className="text-[#1a1a1a] font-medium">Ted, Prince & Gideon</span>
          </p>
        </motion.div>

        {/* Value Pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap gap-2"
        >
          {values.map((v) => (
            <span
              key={v.label}
              className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full"
            >
              {v.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
