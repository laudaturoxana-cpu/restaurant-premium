'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

type Testimonial = {
  name: string;
  review: string;
  rating: number;
  source: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Maria T.',
    review:
      'Am aniversat aici 10 ani de căsătorie și totul a fost impecabil. De la cocktailul de bun venit până la desertul final, fiecare detaliu a fost gândit. Risotto-ul cu trufe negre a fost cea mai bună experiență culinară din București.',
    rating: 5,
    source: 'Google Reviews',
  },
  {
    name: 'Alexandru P.',
    review:
      'Atmosferă elegantă, serviciu ireproșabil și mâncare de neuitat. Chef-ul a ieșit personal să ne întrebe cum a fost masa - gestul ăsta spune totul despre dedicarea lor. Vom reveni cu siguranță!',
    rating: 5,
    source: 'Google Reviews',
  },
  {
    name: 'Diana M.',
    review:
      'Cel mai bun restaurant italian din București, fără îndoială. Ingredientele sunt proaspete, prepararea impecabilă, iar vinurile selectate perfect. Prețurile reflectă calitatea - merită fiecare leu.',
    rating: 5,
    source: 'Google Reviews',
  },
  {
    name: 'Radu C.',
    review:
      'Am organizat o cină de afaceri cu parteneri internaționali și au fost extrem de impresionați. Meniul degustare a fost o călătorie culinară excepțională. Serviciul discret dar atent la fiecare detaliu.',
    rating: 5,
    source: 'Google Reviews',
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-secondary uppercase tracking-widest text-sm font-display mb-2">
            Ce Spun Oaspeții Noștri
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
            Recenzii Autentice
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {visibleTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-sm shadow-lg"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-secondary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-text-secondary italic mb-6 leading-relaxed">
                &quot;{testimonial.review}&quot;
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-display font-semibold text-primary">
                  {testimonial.name}
                </p>
                <p className="text-sm text-text-secondary">Via {testimonial.source}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-secondary w-8'
                  : 'bg-secondary/30 hover:bg-secondary/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Google Reviews Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-secondary hover:text-secondary-dark transition-colors duration-300 font-display uppercase text-sm tracking-wide"
          >
            <span>Citește mai multe recenzii pe Google</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
