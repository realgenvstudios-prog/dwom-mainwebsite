'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { name: 'Meal Packs', href: '/meal-packs' },
  { name: 'Creator Codes', href: '/creator-codes' },
  { name: 'Subscriptions', href: '/subscriptions' },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl"
    >
      <nav className="bg-[#f5f5f5]/90 backdrop-blur-md rounded-full px-4 md:px-6 py-2.5 md:py-3 flex items-center justify-between shadow-sm">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative w-14 md:w-16 h-10 md:h-12">
            <Image
              src="/images/logo.png"
              alt="DWOM"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Nav Links - Hidden on mobile, shown on md and up */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <div key={link.name} className="flex items-center">
              <Link
                href={link.href}
                className="px-3 md:px-4 py-2 text-[#1a1a1a] font-medium text-xs md:text-sm hover:text-[#e53935] transition-colors duration-300"
              >
                {link.name}
              </Link>
              {index < navLinks.length - 1 && (
                <span className="text-gray-300">|</span>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="#download"
            className="bg-[#e53935] text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-xs md:text-sm hover:bg-[#c62828] transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            GET APP
          </Link>
        </motion.div>
      </nav>
    </motion.header>
  );
}
