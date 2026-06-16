'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
      },
    }),
  };

  const featureCards = [
    {
      title: 'Write Your List',
      description: 'English, Twi, or shorthand. Just type it in the Note-to-Order box.',
      position: 'left-top',
    },
    {
      title: 'Hyperlocal Sourcing',
      description: 'Items are picked fresh from our East Legon micro-hub.',
      position: 'left-bottom',
    },
    {
      title: 'AI Categorization',
      description: 'Our local AI prices and organizes your items instantly.',
      position: 'right-top',
    },
    {
      title: 'Instant Delivery',
      description: 'A dedicated rider brings it to your gate in record time.',
      position: 'right-bottom',
    },
  ];

  const ingredientImages = [
    {
      src: '/images/vegetables-1.png',
      alt: 'Dried fish',
      className: 'left-0 md:left-4 lg:left-8 top-8 md:top-12 lg:top-20 w-40 h-32 md:w-56 md:h-40 lg:w-64 lg:h-44 -rotate-6',
    },
    {
      src: '/images/onions.png',
      alt: 'Onions',
      className: 'left-0 md:left-4 lg:left-8 bottom-4 md:bottom-8 lg:bottom-12 w-40 h-32 md:w-48 md:h-36 lg:w-48 lg:h-36 rotate-6',
    },
    {
      src: '/images/peppers.png',
      alt: 'Peppers',
      className: 'right-0 md:right-4 lg:right-8 top-8 md:top-12 lg:top-0 w-40 h-32 md:w-56 md:h-40 lg:w-56 lg:h-44 rotate-6',
    },
    {
      src: '/images/yam.png',
      alt: 'Yam',
      className: 'right-0 md:right-4 lg:right-8 bottom-4 md:bottom-8 lg:bottom-0 w-40 h-32 md:w-56 md:h-40 lg:w-56 lg:h-44 rotate-6',
    },
  ];

  return (
    <section className="min-h-screen pt-32 pb-16 px-4 md:px-8 lg:px-16 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          {/* Left Content */}
          <div className="lg:col-span-4 relative z-10">
            {/* Mobile Layout: Heading left, Buttons right */}
            <div className="flex gap-4 items-start md:block lg:block">
              {/* Heading and Description */}
              <div>
                {/* Launching Soon badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-3 shadow-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  PRIVATE BETA · 40 SPOTS REMAINING
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold italic leading-tight"
                  initial="hidden"
                  animate="visible"
                >
                  <motion.span custom={0} variants={textVariants} className="block">
                    Fresh Local
                  </motion.span>
                  <motion.span
                    custom={1}
                    variants={textVariants}
                    className="block text-[#e53935]"
                  >
                    Ingredients.
                  </motion.span>
                  <motion.span custom={2} variants={textVariants} className="block">
                    Faster than
                  </motion.span>
                  <motion.span custom={3} variants={textVariants} className="block">
                    a text.
                  </motion.span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="mt-6 text-gray-600 text-base md:text-lg max-w-md"
                >
                  DWOM is currently a by invitation grocery service delivering Ghanaian market staples from Koobi to Ayoyo straight to your gate in Accra. We are currently in a private beta for our first 50 Founding Members.
                </motion.p>

                {/* Request BETA Access Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="mt-8 relative z-20"
                >
                  <motion.button
                    onClick={() => window.dispatchEvent(new CustomEvent('openBetaModal'))}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 w-auto min-w-[170px] bg-black text-white px-4 py-3 rounded-2xl hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-sm md:w-full md:min-w-0 md:px-6 md:py-4 md:text-base cursor-pointer"
                  >
                    Request BETA Access →
                  </motion.button>
                  <p className="mt-3 text-xs sm:text-sm text-gray-600 max-w-[18rem] md:max-w-md">
                    <span className="block font-bold text-gray-900">Beta members are onboarded directly by Us.</span>
                    <span className="block md:inline">
                      DWOM will launch publicly on the App Store &amp; Google Play after the founding cohort closes.
                    </span>
                    <span className="block">Applications reviewed within 24 hours.</span>
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Decorative Potatoes Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="absolute -bottom-20 -left-10 w-64 h-48 hidden lg:block"
            >
              <Image
                src="/images/potatoes.png"
                alt="Fresh potatoes"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* Center - Phone and Feature Cards */}
          <div className="lg:col-span-8 relative flex justify-center items-center min-h-[600px]">
            {ingredientImages.map((image) => (
              <div
                key={image.src}
                className={`absolute opacity-100 pointer-events-none ${image.className}`}
              >
                <Image src={image.src} alt={image.alt} fill className="object-contain" />
              </div>
            ))}
            {/* Left Feature Cards */}
            <div className="absolute left-12 top-1/2 -translate-y-1/2 space-y-6 hidden md:block z-10">
              {featureCards
                .filter((card) => card.position.startsWith('left'))
                .map((card, index) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                    className="bg-white rounded-2xl p-4 shadow-lg max-w-[200px] relative overflow-hidden"
                  >
                    <h3 className="font-bold text-sm text-[#1a1a1a]">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {card.description}
                    </p>
                  </motion.div>
                ))}
            </div>

            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
              className="relative z-10"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative w-64 md:w-72 h-[500px] md:h-[580px]"
              >
                <Image
                  src="/images/phone-mockup.png"
                  alt="DWOM App"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Right Feature Cards */}
            <div className="absolute right-12 top-1/2 -translate-y-1/2 space-y-6 hidden md:block z-10">
              {featureCards
                .filter((card) => card.position.startsWith('right'))
                .map((card, index) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                    className="bg-white rounded-2xl p-4 shadow-lg max-w-[200px] relative overflow-hidden"
                  >
                    <h3 className="font-bold text-sm text-[#1a1a1a]">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {card.description}
                    </p>
                  </motion.div>
                ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
