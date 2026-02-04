'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CreatorCodes() {
  const features = [
    {
      title: 'For Creators',
      description: 'Share your recipes on Socials and earn rewards when followers buy through DWOM.',
      bgColor: 'bg-yellow-100',
    },
    {
      title: 'For Everyone',
      description: 'Normal users can generate private codes too! Share your "Home List" with family in one click.',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Recipe-to-Cart',
      description: 'Enter a friend\'s code to automatically fill your cart with their exact market findings.',
      bgColor: 'bg-blue-100',
    },
  ];

  const steps = [
    {
      number: 1,
      title: 'Browse the Store',
      description: 'Explore the catalog and select from a wide range of products available within the app\'s marketplace.',
      image: '/images/creator-code-step-1.png',
      alt: 'Browse the Store',
    },
    {
      number: 2,
      title: 'Build Your Cart',
      description: 'Tap the "Add" button on your favorite items to compile your personalized shopping list in one place.',
      image: '/images/creator-code-step-2.png',
      alt: 'Build Your Cart',
    },
    {
      number: 3,
      title: 'Generate Your Unique ID',
      description: 'Once your list is ready, tap the "Create Cart ID" button to transform your items into a shareable DWOM code.',
      image: '/images/creator-code-step-3.png',
      alt: 'Generate Your Unique ID',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-8 px-4 md:px-8 lg:px-16 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Creator & Recipe Codes
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-800 max-w-4xl mx-auto">
              Pass grocery lists instantly. Follow your favorite food influencers and get their exact ingredient lists with one click.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-8 px-4 md:px-8 lg:px-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="flex flex-col items-center"
              >
                {/* Phone Mockup */}
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full max-w-xs mb-8 h-96"
                >
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    className="object-contain"
                    priority={index === 0}
                  />
                </motion.div>

                {/* Description */}
                <div className="text-center">
                  <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                    <span className="font-bold">{step.number}. {step.title}:</span> {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`${feature.bgColor} rounded-3xl p-8 md:p-10 lg:p-12`}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
