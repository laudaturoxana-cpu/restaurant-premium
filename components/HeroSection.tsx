'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070')",
          }}
        />
        {/* Modern gradient overlay with glassmorphism hint */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </motion.div>

      {/* Animated particles/dots effect */}
      <div className="absolute inset-0 z-[1] opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-secondary rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-secondary/60 rounded-full animate-pulse delay-100" />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-secondary/80 rounded-full animate-pulse delay-200" />
        <div className="absolute bottom-60 right-1/3 w-3 h-3 bg-secondary/40 rounded-full animate-pulse delay-300" />
      </div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full"
      >
        {/* Glassmorphism Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
          className="inline-block mb-6 sm:mb-8"
        >
          <span className="backdrop-blur-md bg-white/10 text-secondary text-xs sm:text-sm uppercase tracking-[0.2em] font-display border border-secondary/30 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg shadow-secondary/20">
            București | Est. 20XX
          </span>
        </motion.div>

        {/* Main Title with text gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold mb-4 sm:mb-6 leading-[1.1] sm:leading-tight"
        >
          <span className="bg-gradient-to-r from-white via-white to-secondary bg-clip-text text-transparent drop-shadow-2xl">
            [NUME RESTAURANT]
          </span>
        </motion.h1>

        {/* Subtitle with better spacing */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 font-serif italic mb-4 sm:mb-6 px-4"
        >
          Unde fiecare masă devine o poveste
        </motion.p>

        {/* Description with max-width for readability */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Descoperă echilibrul perfect între autenticitate și inovație culinară.
          În fiecare seară, îți pregătim mai mult decât o cină - îți oferim o amintire.
        </motion.p>

        {/* CTA Buttons - responsive stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 px-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(184, 149, 106, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#rezervare')}
            className="w-full sm:w-auto bg-gradient-to-r from-secondary to-secondary-dark text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-display font-semibold text-sm sm:text-base uppercase tracking-wide shadow-2xl shadow-secondary/50 transition-all duration-300 hover:shadow-secondary/70"
          >
            Rezervă o Masă
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#meniu')}
            className="w-full sm:w-auto backdrop-blur-md bg-white/10 border-2 border-white/30 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-display font-semibold text-sm sm:text-base uppercase tracking-wide transition-all duration-300 hover:bg-white/20"
          >
            Explorează Meniul
          </motion.button>
        </motion.div>

        {/* Trust Badges - responsive grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-white/70 text-xs sm:text-sm max-w-4xl mx-auto px-4"
        >
          {[
            { icon: "✓", text: "Chef cu experiență internațională" },
            { icon: "✓", text: "Ingrediente premium zilnice" },
            { icon: "★", text: "Rating 4.9 din 500+ recenzii" },
            { icon: "☀", text: "Terasă sezonieră premium" }
          ].map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
              className="flex flex-col items-center space-y-2 sm:space-y-3 backdrop-blur-sm bg-white/5 p-3 sm:p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-secondary/20 rounded-full text-secondary text-lg sm:text-xl">
                {badge.icon}
              </div>
              <p className="text-center leading-snug">{badge.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - hidden on small mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block"
      >
        <button
          onClick={() => scrollToSection('#despre')}
          className="flex flex-col items-center text-white/60 hover:text-white transition-colors duration-300 group"
        >
          <span className="text-xs sm:text-sm mb-2 font-display uppercase tracking-wide">Descoperă mai mult</span>
          <motion.svg
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-secondary transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </motion.svg>
        </button>
      </motion.div>
    </section>
  );
}
