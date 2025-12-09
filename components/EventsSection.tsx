'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function EventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:col-span-3 space-y-6"
          >
            <div>
              <p className="text-secondary uppercase tracking-widest text-sm font-display mb-2">
                Evenimente Private
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                Sărbătorește Momentele Speciale cu Noi
              </h2>
            </div>

            <p className="text-text-secondary leading-relaxed text-lg">
              Oferim spațiul perfect pentru evenimente private - de la cine romantice pentru doi,
              până la evenimente corporate pentru până la [XX] persoane. Meniul personalizat și
              servicii dedicate fac fiecare ocazie memorabilă.
            </p>

            {/* Event Types */}
            <div className="space-y-3 pt-4">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-6 h-6 text-secondary flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <h4 className="font-display font-semibold text-primary mb-1">
                    Aniversări & Cereri în Căsătorie
                  </h4>
                  <p className="text-text-secondary text-sm">
                    Creăm momente magice pentru cele mai importante zile din viața ta
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg
                  className="w-6 h-6 text-secondary flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <h4 className="font-display font-semibold text-primary mb-1">
                    Cine de Afaceri & Corporate
                  </h4>
                  <p className="text-text-secondary text-sm">
                    Impresionează-ți partenerii într-un ambient sofisticat și profesionist
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg
                  className="w-6 h-6 text-secondary flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <h4 className="font-display font-semibold text-primary mb-1">
                    Petreceri Private
                  </h4>
                  <p className="text-text-secondary text-sm">
                    Spațiu exclusiv pentru grupuri până la [XX] persoane cu meniu personalizat
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg
                  className="w-6 h-6 text-secondary flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <h4 className="font-display font-semibold text-primary mb-1">
                    Degustări de Vinuri Exclusive
                  </h4>
                  <p className="text-text-secondary text-sm">
                    Experiențe culinare tematice ghidate de sommelierul nostru
                  </p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary inline-flex items-center space-x-2 mt-6"
            >
              <span>Discută cu Noi despre Evenimentul Tău</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 relative h-[600px] rounded-sm overflow-hidden shadow-2xl"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070')",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
