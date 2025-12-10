'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer - Better responsive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Column 1: About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-serif font-bold mb-3 sm:mb-4 text-secondary">
              [LOGO]
            </h3>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              Experiențe culinare rafinate în inima Bucureștiului. Pasiune pentru autenticitate și
              atenție la fiecare detaliu.
            </p>
            {/* Social Media - Responsive icons */}
            <div className="flex space-x-3 sm:space-x-4">
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, backgroundColor: "rgb(184, 149, 106)" }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, backgroundColor: "rgb(184, 149, 106)" }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, backgroundColor: "rgb(184, 149, 106)" }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="TripAdvisor"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-secondary uppercase tracking-wide">
              Link-uri Rapide
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {['Despre Noi', 'Meniu', 'Galerie', 'Rezervări', 'Evenimente Private', 'Contact'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-white/70 hover:text-secondary transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Column 3: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-secondary uppercase tracking-wide">
              Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-white/70">
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <span>[Strada Exemplu], Nr. [X]<br />Sector [X], București</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href="tel:0721000000" className="hover:text-secondary transition-colors duration-300">
                  0721 XXX XXX
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:contact@restaurant.ro"
                  className="hover:text-secondary transition-colors duration-300"
                >
                  contact@restaurant.ro
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  Luni - Joi: 18:00 - 23:00<br />
                  Vineri - Sâmbătă: 18:00 - 00:00<br />
                  Duminică: 18:00 - 23:00
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-secondary uppercase tracking-wide">
              Newsletter
            </h4>
            <p className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4">
              Primește meniul lunar și oferte exclusive
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Email-ul tău"
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300 text-xs sm:text-sm"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, backgroundColor: "rgb(166, 124, 82)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-secondary hover:bg-secondary-dark text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-display text-xs sm:text-sm uppercase tracking-wide transition-all duration-300"
              >
                Abonează-te
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom - Better responsive */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 text-xs sm:text-sm text-white/60">
            <div className="text-center md:text-left order-2 md:order-1">
              <p>© {currentYear} [NUME RESTAURANT]. Toate drepturile rezervate.</p>
            </div>

            <div className="text-center order-1 md:order-2">
              <p>
                Website creat de:{' '}
                <a
                  href="https://calendly.com/laudatu-roxana/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-secondary-light transition-colors duration-300 font-medium"
                >
                  Roxana Lăudatu
                </a>
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-center md:text-right order-3">
              <a href="#" className="hover:text-secondary transition-colors duration-300">
                Politica de confidențialitate
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="#" className="hover:text-secondary transition-colors duration-300">
                Termeni și condiții
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
