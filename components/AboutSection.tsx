'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="despre" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070')",
              }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <p className="text-secondary uppercase tracking-widest text-sm font-display mb-2">
                Despre Noi
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                Pasiune, Autenticitate și Atenție la Detaliu
              </h2>
            </div>

            <div className="space-y-4 text-text-secondary leading-relaxed">
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
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="border-l-4 border-secondary pl-4">
                <p className="text-3xl font-serif font-bold text-primary mb-1">20XX</p>
                <p className="text-sm text-text-secondary uppercase tracking-wide">Anul deschiderii</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <p className="text-3xl font-serif font-bold text-primary mb-1">[X] Ani</p>
                <p className="text-sm text-text-secondary uppercase tracking-wide">Experiență Chef</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <p className="text-3xl font-serif font-bold text-primary mb-1">XX Mese</p>
                <p className="text-sm text-text-secondary uppercase tracking-wide">Exclusive per seară</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <p className="text-3xl font-serif font-bold text-primary mb-1">4.9 ★</p>
                <p className="text-sm text-text-secondary uppercase tracking-wide">Rating mediu</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#meniu');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary inline-flex items-center space-x-2 mt-4"
            >
              <span>Descoperă Meniul Nostru</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
