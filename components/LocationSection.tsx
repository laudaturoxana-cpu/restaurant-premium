'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="locatie" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-secondary uppercase tracking-widest text-sm font-display mb-2">
            Locație
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
            Ne Găsești în Inima Bucureștiului
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 h-[500px] rounded-sm overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8701083229683!2d26.096306315562377!3d44.43927797910157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770aaa0b7%3A0x58147f39579fe6fa!2sBucharest!5e0!3m2!1sen!2sro!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location Map"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-sm shadow-lg space-y-6"
          >
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="text-secondary flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-display font-semibold text-primary mb-1">Adresă</h4>
                <p className="text-text-secondary text-sm">
                  [Strada Exemplu], Nr. [X]<br />
                  Sector [X], București
                </p>
              </div>
            </div>

            {/* Schedule */}
            <div className="flex items-start space-x-4">
              <div className="text-secondary flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-display font-semibold text-primary mb-2">Program</h4>
                <div className="text-text-secondary text-sm space-y-1">
                  <p>Luni - Joi: 18:00 - 23:00</p>
                  <p>Vineri - Sâmbătă: 18:00 - 00:00</p>
                  <p>Duminică: 18:00 - 23:00</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="text-secondary flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-display font-semibold text-primary mb-1">Telefon</h4>
                <a
                  href="tel:0721000000"
                  className="text-secondary hover:text-secondary-dark transition-colors duration-300 text-sm"
                >
                  0721 XXX XXX
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="text-secondary flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-display font-semibold text-primary mb-1">Email</h4>
                <a
                  href="mailto:contact@restaurant.ro"
                  className="text-secondary hover:text-secondary-dark transition-colors duration-300 text-sm break-all"
                >
                  contact@restaurant.ro
                </a>
              </div>
            </div>

            {/* Parking */}
            <div className="flex items-start space-x-4">
              <div className="text-secondary flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-display font-semibold text-primary mb-1">Parcare</h4>
                <p className="text-text-secondary text-sm">
                  Disponibilă în parcare [Nume] (2 min)
                </p>
              </div>
            </div>

            {/* Metro */}
            <div className="flex items-start space-x-4">
              <div className="text-secondary flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-display font-semibold text-primary mb-1">Metro</h4>
                <p className="text-text-secondary text-sm">Stația [Nume] (5 min)</p>
              </div>
            </div>

            {/* Google Maps Button */}
            <a
              href="https://maps.google.com/?q=[NUME+RESTAURANT]+București"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-secondary hover:bg-secondary-dark text-white px-6 py-3 rounded-sm font-display text-sm uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Deschide în Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
