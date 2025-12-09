'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function DeveloperSignature() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="section-padding bg-background-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-sm shadow-xl p-10 md:p-14 text-center border-2 border-[#2B5A8F]/10"
        >
          {/* Heading */}
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
            Îți place acest website?
          </h3>

          {/* Developer Name */}
          <p className="text-lg text-text-secondary mb-6">
            Design și dezvoltare de:{' '}
            <span className="font-display font-semibold text-primary">Roxana Lăudatu</span>
          </p>

          {/* Description */}
          <p className="text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
            Creez site-uri premium pentru restaurante, hoteluri și business-uri care vor să se remarce
            prin experiențe digitale memorabile și conversii crescute.
          </p>

          {/* CTA Button */}
          <motion.a
            href="https://calendly.com/laudatu-roxana/30min"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#2B5A8F] hover:bg-[#234a75] text-white px-10 py-4 rounded-sm font-display font-medium text-base uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-2xl mb-8"
          >
            Vreau un Site ca Acesta
          </motion.a>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-2 text-sm text-text-secondary">
              <svg className="w-5 h-5 text-[#2B5A8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Design personalizat</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-text-secondary">
              <svg className="w-5 h-5 text-[#2B5A8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Optimizat pentru conversii</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-text-secondary">
              <svg className="w-5 h-5 text-[#2B5A8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Implementare rapidă</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
