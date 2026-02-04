'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MealPacks() {
  const benefits = [
    {
      icon: '💰',
      title: 'Save Time',
      description: '15-25% off compared to buying items individually. Our bulk purchasing power means bigger savings for you every time.',
    },
    {
      icon: '⏱️',
      title: 'Save More',
      description: 'No more wandering through aisles or making endless shopping lists. One click gives you a complete meal solution.',
    },
    {
      icon: '🍽️',
      title: 'Meal Inspiration',
      description: 'Get ideas for what to cook with pre-planned combinations from our chefs. Perfect for when you\'re stumped for dinner ideas.',
    },
    {
      icon: '🥗',
      title: 'Quality Guaranteed',
      description: 'Every ingredient is sourced from trusted merchants and verified for freshness. We only partner with the best.',
    },
    {
      icon: '📦',
      title: 'Fast Delivery',
      description: 'Reliable delivery straight to your door. Same-day delivery available in selected areas.',
    },
    {
      icon: '✅',
      title: '100% Satisfaction',
      description: 'Not happy? Return unused portions for a full refund within 30 minutes. We guarantee your satisfaction.',
    },
  ];

  const steps = [
    {
      number: 1,
      title: 'Quality Guaranteed',
      description: 'Explore our collection of meal packs organized by category, cuisine, and dietary preference.',
      icon: '🔍',
    },
    {
      number: 2,
      title: 'Choose Your Pack',
      description: 'Select the bundle that matches your needs. Each includes a full ingredient list, serving size, and recipes.',
      icon: '📋',
    },
    {
      number: 3,
      title: 'Add to Cart',
      description: 'Add one or multiple bundles to your cart. Mix and match or stock up for the week.',
      icon: '🛒',
    },
    {
      number: 4,
      title: 'Fast Delivery',
      description: 'Your meal pack arrives fresh and ready to cook. Unbox, follow the recipe, and enjoy!',
      icon: '🚚',
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
              Smart Meal Solutions for Every Occasion
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto mb-12 leading-relaxed">
              Curated meal bundles designed to save you time, money, and effort. Get everything you need for delicious meals, delivered fresh to your door.
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

      {/* Benefits Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
          >
            Smart Meal Solutions for Every Occasion
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white overflow-hidden" id="how-it-works">
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
              Simple 4-step process to get your meal pack delivered
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-gray-50 rounded-lg p-8 text-center relative"
              >
                {/* Number Badge */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-5xl mb-6 mt-2">{step.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
