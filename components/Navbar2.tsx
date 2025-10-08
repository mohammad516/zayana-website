'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <motion.header
        className={`w-full sticky top-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'shadow-xl backdrop-blur-xl bg-white/80 border-b border-gold-400/20'
            : 'bg-gradient-to-r from-white/95 via-[#f8f7f3]/90 to-white/95 backdrop-blur-sm'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo + Text */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <a href="/" className="flex items-center group space-x-3">
                {/* Logo Image */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <Image
                    src="/logo2t.png"
                    alt="Hasbini Art Logo"
                    width={60}
                    height={60}
                    priority
                    className="h-12 w-auto object-contain sm:h-14 md:h-16"
                  />
                </motion.div>

                 {/* Brand Text */}
                 <motion.span
                   initial={{ opacity: 0, x: -10 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.8, delay: 0.4 }}
                   className="relative text-lg sm:text-xl md:text-2xl font-bold tracking-wide bg-gradient-to-r from-[#C9B037] via-[#E6C200] to-[#B8870B] bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(212,175,55,0.35)]"
                   style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 700 }}
                 >
                   {/* soft pulsing gold glow behind text (non-hover) */}
                   <motion.span
                     aria-hidden
                     className="absolute -inset-1 -z-10 rounded-xl blur-[10px]"
                     style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(212,175,55,0.22), transparent 70%)' }}
                     animate={{ opacity: [0.22, 0.34, 0.22] }}
                     transition={{ duration: 3.6, ease: 'easeInOut', repeat: Infinity }}
                   />
                   HASBINI ART
                   {/* continuous subtle shimmer sweep over text (non-hover) */}
                   <motion.span
                     aria-hidden
                     className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                     initial={{ x: '-120%' }}
                     animate={{ x: '120%' }}
                     transition={{ duration: 1.6, ease: 'easeOut', repeat: Infinity, repeatDelay: 2.6 }}
                   />
                 </motion.span>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm sm:text-base transition-all duration-300 ${
                    isActive(link.href) 
                      ? 'text-gold-400' 
                      : 'text-[#1a1a1a] hover:text-gold-400'
                  }`}
                  style={{ 
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontWeight: isActive(link.href) ? 600 : 500
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gold-400 ${
                      isActive(link.href) ? 'w-full' : 'w-0'
                    }`}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />
                </motion.a>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <motion.div
              className="hidden md:flex items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.a
                href="/contact"
                className="group flex items-center space-x-2 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 text-black px-4 py-2.5 rounded-full text-sm transition-all duration-300 hover:from-gold-300 hover:via-gold-200 hover:to-gold-400 hover:shadow-lg"
                style={{ 
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontWeight: 600
                }}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Work With Us</span>
                <motion.div className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.a>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors duration-200"
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Menu className="w-6 h-6 text-[#1a1a1a]" />
            </motion.button>
          </div>
        </div>

        {/* Bottom Gradient Line */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fixed inset-0 z-50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Backdrop */}
              <motion.div
                className="absolute inset-0 bg-black/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
              />

              {/* Menu Panel */}
              <motion.div
                className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl border-l border-gold-400/20"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <div className="flex flex-col h-full bg-white">
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
                    <motion.span 
                      className="text-lg text-[#1a1a1a]"
                      style={{ 
                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                        fontWeight: 700
                      }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      Menu
                    </motion.span>
                    <motion.button
                      onClick={() => setMenuOpen(false)}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                      whileHover={{ rotate: 90 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <X className="w-6 h-6 text-[#1a1a1a]" />
                    </motion.button>
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex-1 px-6 py-8 bg-white">
                    <div className="space-y-2">
                      {navLinks.map((link, index) => (
                        <motion.a
                          key={link.href}
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className={`block text-lg py-3 px-4 rounded-lg transition-all duration-300 ${
                            isActive(link.href) 
                              ? 'text-[#111] bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500' 
                              : 'text-[#1a1a1a] hover:text-gold-400 hover:bg-gray-100'
                          }`}
                          style={{ 
                            fontFamily: 'var(--font-inter), Inter, sans-serif',
                            fontWeight: isActive(link.href) ? 600 : 500
                          }}
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                          whileHover={{ x: 4 }}
                        >
                          {link.label}
                        </motion.a>
                      ))}
                    </div>
                  </nav>

                  {/* Mobile CTA */}
                  <motion.div 
                    className="px-6 pb-6 bg-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <motion.a
                      href="/contact"
                      className="group flex items-center justify-center space-x-2 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 text-[#111] px-6 py-3 rounded-full font-medium transition-all duration-300 hover:from-gold-300 hover:via-gold-200 hover:to-gold-400"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Work With Us</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.a>
                  </motion.div>

                  {/* Footer */}
                  <div className="p-6 border-t border-gray-200 bg-white">
                    <motion.div
                      className="text-sm text-gray-600 font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    >
                      Hasbini-Art Est.
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
