'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: 1,
    emoji: '📝',
    title: 'Request Access',
    description:
      'Fill out your details. We review every application to ensure we can serve your area to our standard. You hear back within 24 hours.',
  },
  {
    number: 2,
    emoji: '👋',
    title: 'The Welcome Concierge',
    description:
      'Once approved, one of our founders personally messages you to verify your location and configure your device for the private DWOM build.',
  },
  {
    number: 3,
    emoji: '📦',
    title: 'The First Run',
    description:
      'You place your first order. We hand-deliver it with a Founder\'s Note to ensure everything is perfect: items, timing, packaging.',
  },
  {
    number: 4,
    emoji: '🔄',
    title: 'Feedback Loop',
    description:
      'You become a Founding Member with a direct line to us. Suggest new features, request items, flag issues. We move fast on feedback.',
  },
];

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="py-20 px-4 md:px-8 bg-[#e53935]">
      <div className="max-w-3xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-white/70 font-semibold text-xs uppercase tracking-widest mb-4 text-center"
        >
          The Beta Onboarding Process
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4 text-center"
        >
          How we bring you in.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-white/80 text-base text-center max-w-xl mx-auto mb-14"
        >
          We review every application personally to ensure we can maintain our service standards in your specific area. Here is what happens once you apply.
        </motion.p>

        {/* Steps Grid */}
        <div className="grid grid-cols-2 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="bg-white rounded-2xl p-3 flex flex-col items-center text-center shadow-sm"
            >
              {/* Icon with number badge */}
              <div className="relative mb-4">
                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-2xl">
                  {step.emoji}
                </div>
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#e53935] text-white text-xs font-bold flex items-center justify-center">
                  {step.number}
                </span>
              </div>
              <h3 className="font-bold text-[#1a1a1a] text-sm mb-1">{step.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

