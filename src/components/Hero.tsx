'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Apple, Play } from 'lucide-react';

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
                  Buy Ghanaian market items using English, Twi, or shorthand. From
                  Koobi to Ayoyo, we understand your list and deliver it instantly
                </motion.p>

                {/* App Store Buttons - Desktop positioning */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="hidden md:flex mt-8 gap-3 relative md:z-20"
                  id="download"
                >
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 bg-black text-white px-5 py-2.5 md:px-6 md:py-3 rounded-2xl hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap text-sm md:text-base"
                  >
                    <Apple className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                    <div className="text-left">
                      <div className="text-[8px] md:text-[10px] uppercase tracking-wide opacity-90 leading-tight">
                        Download on the
                      </div>
                      <div className="text-base md:text-lg font-bold -mt-0.5">App Store</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 bg-black text-white px-5 py-2.5 md:px-6 md:py-3 rounded-2xl hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap text-sm md:text-base"
                  >
                    <Play className="w-5 h-5 md:w-6 md:h-6 fill-current flex-shrink-0" />
                    <div className="text-left">
                      <div className="text-[8px] md:text-[10px] uppercase tracking-wide opacity-90 leading-tight">
                        Get it on
                      </div>
                      <div className="text-base md:text-lg font-bold -mt-0.5">GOOGLE PLAY</div>
                    </div>
                  </motion.a>
                </motion.div>
              </div>

              {/* App Store Buttons - Mobile positioning (on right) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="md:hidden flex flex-col gap-2 relative z-20 flex-shrink-0"
                id="download-mobile"
              >
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-1.5 bg-black text-white px-3 py-1.5 rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap text-xs"
                >
                  <Apple className="w-4 h-4 flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-[7px] uppercase tracking-wide opacity-90 leading-tight">
                      Download on the
                    </div>
                    <div className="text-sm font-bold -mt-0.5">App Store</div>
                  </div>
                </motion.a>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-1.5 bg-black text-white px-3 py-1.5 rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap text-xs"
                >
                  <Play className="w-4 h-4 fill-current flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-[7px] uppercase tracking-wide opacity-90 leading-tight">
                      Get it on
                    </div>
                    <div className="text-sm font-bold -mt-0.5">GOOGLE PLAY</div>
                  </div>
                </motion.a>
              </motion.div>
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

          {/* Mobile Feature Cards - shown only on smaller screens */}
          <div className="lg:hidden grid grid-cols-2 gap-4 mt-8">
            {featureCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-4 shadow-lg relative overflow-hidden"
              >
                <h3 className="font-bold text-sm text-[#1a1a1a]">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
