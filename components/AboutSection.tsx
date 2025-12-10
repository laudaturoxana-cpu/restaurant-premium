'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: "20XX", label: "Anul deschiderii" },
    { value: "[X] Ani", label: "Experiență Chef" },
    { value: "XX Mese", label: "Exclusive per seară" },
    { value: "4.9 ★", label: "Rating mediu" }
  ];

  return (
    <section id="despre" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image - Responsive height and order */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group order-2 lg:order-1"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070')",
              }}
            />
            {/* Subtle overlay for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

            {/* Glassmorphism badge */}
            <div className="absolute bottom-6 left-6 backdrop-blur-md bg-white/90 px-6 py-3 rounded-xl border border-white/20 shadow-xl">
              <p className="text-secondary font-display font-semibold text-sm uppercase tracking-wide">
                Chef cu experiență internațională
              </p>
            </div>
          </motion.div>

          {/* Content - Better spacing and responsive text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-secondary uppercase tracking-[0.2em] text-xs sm:text-sm font-display mb-3 sm:mb-4"
              >
                Despre Noi
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-primary mb-4 sm:mb-6 leading-tight"
              >
                Pasiune, Autenticitate și Atenție la Detaliu
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4 sm:space-y-5 text-text-secondary leading-relaxed text-sm sm:text-base lg:text-lg"
            >
              <p>
                Am deschis <span className="font-semibold text-primary">[NUME RESTAURANT]</span> din
                dorința de a aduce Bucureștiului o experiență culinară care depășește așteptările.
                Fiecare ingredient este ales cu grijă de chef-ul nostru <span className="font-semibold">[NUME CHEF]</span>,
                care aduce o experiență de peste X ani în bucătăriile de top din [ȚARA].
              </p>

              <p>
                Credem că o masă memorabilă înseamnă echilibru perfect între aromă, prezentare și
                atmosferă. De aceea, fiecare detaliu contează - de la farfuriile pe care servim,
                până la muzica care te însoțește pe parcursul serii.
              </p>

              <p>
                Meniul nostru celebrează ingredientele sezoniere și tehnicile clasice, reinterpretate
                cu o notă contemporană. Fiecare preparat spune o poveste și reflectă dedicarea noastră
                pentru excelență culinară.
              </p>
            </motion.div>

            {/* Stats - Responsive grid with hover effects */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="border-l-4 border-secondary pl-3 sm:pl-4 hover:border-secondary-dark transition-all duration-300 cursor-default group"
                >
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-primary mb-1 group-hover:text-secondary transition-colors duration-300">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-text-secondary uppercase tracking-wide leading-tight">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(184, 149, 106, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#meniu');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary inline-flex items-center space-x-2 mt-4 sm:mt-6"
            >
              <span>Descoperă Meniul Nostru</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
