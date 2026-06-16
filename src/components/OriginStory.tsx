'use client';

import { motion } from 'framer-motion';

const perks = [
  {
    emoji: '🎯',
    title: 'Priority Support — Always',
    description:
      'Founding Members get a direct WhatsApp line to the team. Not a chatbot. Not a form. A real person who knows your order history.',
    featured: true,
  },
  {
    emoji: '🚚',
    title: 'Free Delivery — For Your First 10 Orders',
    description:
      'As a thank-you for helping us build this, Founding Members get free delivery on their first 10 orders. No codes, no conditions, automatic.',
    featured: false,
  },
  {
    emoji: '📦',
    title: 'Shape the Product',
    description:
      'Your feedback directly influences what we build next, new item categories, delivery windows, subscription options. You vote, we build it.',
    featured: false,
  },
  {
    emoji: '🥇',
    title: 'Permanent Founding Member Status',
    description:
      'Your profile is marked as a Founding Member for life. A small thing now, meaningful when DWOM is the default way people shop.',
    featured: false,
  },
];

export default function OriginStory() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#e53935] font-semibold text-sm uppercase tracking-widest mb-4"
        >
          Why Private?
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight mb-6"
        >
          We are limiting access to{' '}
          <em className="text-[#e53935] italic">ensure</em>{' '}
          elite quality.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 text-base md:text-lg leading-relaxed mb-8"
        >
          Most delivery apps scale fast and sacrifice quality. We are taking the opposite approach:{' '}
          <span className="font-bold text-[#1a1a1a]">
            50 Founding Members, personally onboarded, hand-delivered
          </span>{' '}
          with zero compromise. When the waitlist is full, we close it.
        </motion.p>

        {/* Perks */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
          {perks.map((perk, index) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className={`flex items-start gap-3 bg-white rounded-2xl p-4 border ${
                perk.featured
                  ? 'border-2 border-[#e53935]'
                  : 'border border-gray-200'
              }`}
            >
              <span className="text-2xl md:text-3xl flex-shrink-0">{perk.emoji}</span>
              <div>
                <h3 className="font-bold text-[#1a1a1a] text-sm md:text-base mb-1">
                  {perk.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{perk.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10"
        >
          <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openBetaModal'))}
              className="inline-flex items-center justify-center gap-2 w-auto min-w-[170px] bg-black text-white px-4 py-3 rounded-2xl hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-sm md:w-auto md:min-w-[170px] md:px-8 md:py-4 md:text-base cursor-pointer"
            >
              Request Beta Access →
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
