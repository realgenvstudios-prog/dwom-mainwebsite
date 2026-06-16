'use client';

import { motion } from 'framer-motion';

export default function JoinSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center">

        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#e53935]/10 text-[#e53935] text-xs font-semibold px-4 py-2 rounded-full mb-5 uppercase tracking-widest"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          Applications close when we reach 50
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight mb-2"
        >
          Join the first 50.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18, duration: 0.6 }}
          className="text-3xl md:text-4xl text-[#e53935] leading-tight mb-5"
          style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontWeight: 700 }}
        >
          Shape how Accra shops.
        </motion.p>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-gray-500 text-base leading-relaxed max-w-lg mb-6"
        >
          No app store. No public launch. Just a small group of people getting exceptionally fresh groceries delivered, faster than a text.
        </motion.p>

        {/* Spots remaining badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.32, duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#e53935]/10 text-[#e53935] text-sm font-medium px-5 py-2 rounded-full mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#e53935] animate-pulse" />
          40 spots remaining
        </motion.div>

        {/* Fine print */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.44, duration: 0.5 }}
          className="text-gray-400 text-sm"
        >
          Your application is reviewed by a founder within 24 hours. No spam.
        </motion.p>

      </div>
    </section>
  );
}
