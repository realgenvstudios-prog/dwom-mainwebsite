'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Subscriptions() {
  const features = [
    {
      icon: '🎁',
      title: 'Extra Products Free',
      description: 'Get bonus products added to every delivery just for being a subscriber.',
    },
    {
      icon: '🛒',
      title: 'Pick Your Own Items',
      description: 'No fixed bundles. Choose exactly what you want every time.',
    },
    {
      icon: '🔄',
      title: 'Edit Before Delivery',
      description: 'Change your items anytime before your delivery arrives.',
    },
    {
      icon: '⏰',
      title: 'Your Schedule',
      description: 'Choose weekly or monthly delivery frequency.',
    },
    {
      icon: '📦',
      title: 'Reliable Delivery',
      description: 'Fresh products delivered consistently on your schedule.',
    },
    {
      icon: '🤝',
      title: 'Total Control',
      description: 'Pause, skip, or cancel anytime. No hidden fees.',
    },
  ];

  const plans = [
    {
      title: 'Weekly',
      frequency: 'Every 7 days',
      icon: '📅',
      description: 'Fresh products every week',
      bonus: '2-3 Free Items',
      features: [
        'Delivery every 7 days',
        '2-3 free products added',
        'Edit items anytime',
        'Skip any delivery',
        'Always fresh stock',
      ],
    },
    {
      title: 'Monthly',
      frequency: 'Every 30 days',
      icon: '📦',
      description: 'Maximum bulk and savings',
      bonus: '3-6 Free Items',
      features: [
        'Delivery every 30 days',
        '3-6 free products added',
        'Edit items anytime',
        'Maximum savings',
        'Perfect for planning',
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-[#FF6B6B] to-[#FF5252] flex items-center justify-center py-20 px-4 md:px-8 lg:px-16 overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Subscribe & Get Extra Products Free
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto mb-12 leading-relaxed">
              Pick exactly what you want. Choose when you want it delivered. Get bonus products just for subscribing. That's DWOM subscription simple, flexible, rewarding.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Link
                href="#how-it-works"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                How It Works
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Subscribers Love DWOM Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
          >
            Why Subscribers Love DWOM
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Delivery Frequency Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Delivery Frequency
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Pick your schedule, then browse and select your products
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="border-2 border-gray-200 rounded-3xl p-8 md:p-10 lg:p-12 hover:border-red-500 transition-colors duration-300"
              >
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.frequency}</p>
                  <div className="text-6xl mb-4">{plan.icon}</div>
                  <p className="text-lg text-gray-700">{plan.description}</p>
                </div>

                {/* Bonus Products Box */}
                <div className="bg-red-100 border-l-4 border-red-500 rounded-lg p-6 mb-8">
                  <p className="text-sm text-gray-700 mb-2">Bonus Products</p>
                  <p className="text-2xl font-bold text-gray-900">{plan.bonus}</p>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={feature}>
                      <div className="flex items-center gap-3">
                        <span className="text-green-500 font-bold">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                      {featureIndex < plan.features.length - 1 && (
                        <div className="border-t border-gray-200 mt-4" />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 overflow-hidden" id="how-it-works">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Simple 5-step process to get your meal pack delivered
            </p>
          </motion.div>

          {/* Steps 1-4 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                number: 1,
                icon: '⏰',
                title: 'Pick Frequency',
                description: 'Choose weekly, or monthly delivery.',
              },
              {
                number: 2,
                icon: '🛒',
                title: 'Select Products',
                description: 'Browse and pick exactly what you want.',
              },
              {
                number: 3,
                icon: '🎁',
                title: 'Get Bonus Items',
                description: 'Bonus products added automatically.',
              },
              {
                number: 4,
                icon: '📦',
                title: 'Receive Delivery',
                description: 'Your products arrive fresh on schedule.',
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl p-8 text-center relative"
              >
                {/* Numbered Badge */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-5xl mb-6 mt-2">{step.icon}</div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Step 5 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-start"
          >
            <div className="bg-white rounded-xl p-8 text-center relative w-full md:w-1/2 lg:w-1/4">
              {/* Numbered Badge */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                5
              </div>

              {/* Icon */}
              <div className="text-5xl mb-6 mt-2">🔄</div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Edit for Next Time
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Change items before each delivery.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Complete Flexibility & Control Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-green-100 rounded-2xl border-l-8 border-green-600 p-10 md:p-14 lg:p-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900">
              Complete Flexibility & Control
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
              {[
                {
                  icon: '✏️',
                  title: 'Edit Anytime',
                  description: 'Change products before each delivery.',
                },
                {
                  icon: '⏸️',
                  title: 'Pause',
                  description: 'Take a break. Resume whenever ready.',
                },
                {
                  icon: '⏩',
                  title: 'Skip',
                  description: 'Skip any delivery. No penalties.',
                },
                {
                  icon: '🔄',
                  title: 'Switch Frequency',
                  description: 'Change from weekly to monthly instantly.',
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="text-center"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Cancel Card */}
            <div className="flex justify-center md:justify-start">
              <div className="text-center">
                <div className="text-5xl mb-4">❌</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Cancel
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Cancel anytime. No hidden fees.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
