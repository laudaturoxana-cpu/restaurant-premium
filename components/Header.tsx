'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Despre Noi', href: '#despre' },
    { name: 'Meniu', href: '#meniu' },
    { name: 'Galerie', href: '#galerie' },
    { name: 'Locație', href: '#locatie' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'backdrop-blur-xl bg-primary/90 shadow-2xl shadow-black/20 border-b border-white/10'
          : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo - responsive size */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wider hover:text-secondary transition-colors cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          [LOGO]
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => scrollToSection(item.href)}
              className="relative text-white hover:text-secondary transition-colors duration-300 font-display text-sm uppercase tracking-wide group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
            </motion.button>
          ))}
        </nav>

        {/* Desktop CTA & Phone */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          <a
            href="tel:0721000000"
            className="text-white hover:text-secondary transition-colors duration-300 flex items-center space-x-2 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="hidden xl:inline">0721 XXX XXX</span>
          </a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => scrollToSection('#rezervare')}
            className="bg-gradient-to-r from-secondary to-secondary-dark text-white px-6 py-2.5 rounded-full font-display font-medium text-sm uppercase tracking-wide shadow-lg shadow-secondary/30 hover:shadow-secondary/50 transition-all duration-300"
          >
            Rezervă
          </motion.button>
        </div>

        {/* Mobile/Tablet Menu Button */}
        <button
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Fullscreen overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed inset-0 top-[60px] sm:top-[68px] backdrop-blur-2xl bg-primary/95 overflow-hidden z-40"
          >
            <nav className="flex flex-col h-full px-6 sm:px-8 py-8 sm:py-12 overflow-y-auto">
              <div className="flex-1 space-y-2 sm:space-y-3">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.href)}
                    className="w-full text-left text-white hover:text-secondary hover:bg-white/5 transition-all duration-300 font-display text-base sm:text-lg uppercase tracking-wide py-4 px-4 rounded-lg border-b border-white/10"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>

              {/* Mobile Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="mt-8 space-y-4 border-t border-white/10 pt-6"
              >
                <a
                  href="tel:0721000000"
                  className="flex items-center justify-center space-x-3 text-white hover:text-secondary transition-colors duration-300 bg-white/5 py-4 rounded-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm sm:text-base font-display">0721 XXX XXX</span>
                </a>
                <button
                  onClick={() => scrollToSection('#rezervare')}
                  className="w-full bg-gradient-to-r from-secondary to-secondary-dark text-white px-6 py-4 rounded-full font-display font-semibold text-sm sm:text-base uppercase tracking-wide shadow-xl shadow-secondary/40"
                >
                  Rezervă o Masă
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
