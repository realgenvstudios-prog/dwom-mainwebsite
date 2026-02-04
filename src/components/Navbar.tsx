'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Meal Packs', href: '/meal-packs' },
  { name: 'Creator Codes', href: '/creator-codes' },
  { name: 'Subscriptions', href: '/subscriptions' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl"
    >
      <nav className="bg-[#f5f5f5]/90 backdrop-blur-md rounded-full px-4 md:px-6 py-2.5 md:py-3 flex items-center justify-between shadow-sm relative">
        {/* Logo */}
        <Link href="/" className="flex items-center z-10">
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
          className="hidden md:block"
        >
          <Link
            href="#download"
            className="bg-[#e53935] text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-xs md:text-sm hover:bg-[#c62828] transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            GET APP
          </Link>
        </motion.div>

        {/* Hamburger Menu - Mobile Only */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center p-2"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-[#1a1a1a]" />
          ) : (
            <Menu className="w-6 h-6 text-[#1a1a1a]" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden absolute top-full left-1/2 -translate-x-1/2 w-[95vw] max-w-6xl mt-2 bg-[#f5f5f5]/95 backdrop-blur-md rounded-3xl shadow-lg p-4 z-40"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-4 py-3 text-[#1a1a1a] font-medium text-sm hover:text-[#e53935] transition-colors duration-300 border-b border-gray-200 last:border-b-0"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-2"
          >
            <Link
              href="#download"
              className="block w-full bg-[#e53935] text-white px-4 py-2.5 rounded-full font-semibold text-sm hover:bg-[#c62828] transition-colors duration-300 shadow-lg hover:shadow-xl text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              GET APP
            </Link>
          </motion.div>
        </motion.div>
      )}
    </motion.header>
  );
}
