'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

type MenuItem = {
  name: string;
  description: string;
  ingredients: string;
  price: number;
  image: string;
  badges?: ('vegan' | 'spicy' | 'signature' | 'new')[];
};

const menuData: Record<string, MenuItem[]> = {
  antreu: [
    {
      name: 'Carpaccio de Vită',
      description: 'File de vită Angus, rucola, parmezan, trufe',
      ingredients: 'vită Angus, rucola, parmezan, ulei trufe',
      price: 68,
      image: 'https://images.unsplash.com/photo-1625938145312-788b23e5325f?q=80&w=400',
      badges: ['signature'],
    },
    {
      name: 'Salată Burrata',
      description: 'Burrata cremosă, roșii heirloom, busuioc proaspăt',
      ingredients: 'burrata, roșii heirloom, busuioc, reducție balsamic',
      price: 52,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400',
      badges: ['vegan'],
    },
  ],
  principale: [
    {
      name: 'Risotto cu Trufe Negre',
      description: 'Risotto Carnaroli, trufe negre proaspete, parmezan',
      ingredients: 'orez Carnaroli, trufe negre, parmezan Reggiano, vin alb',
      price: 95,
      image: 'https://images.unsplash.com/photo-1476124369491-c1f1a2e004f7?q=80&w=400',
      badges: ['signature', 'new'],
    },
    {
      name: 'File de Vită Wagyu',
      description: 'File Wagyu 250g, cartofi fondant, sos demi-glace',
      ingredients: 'vită Wagyu, cartofi, unt, demi-glace',
      price: 185,
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=400',
      badges: ['signature'],
    },
  ],
  deserturi: [
    {
      name: 'Cremă Catalană',
      description: 'Desert tradițional catalan cu vanilie Madagascar',
      ingredients: 'vanilie Madagascar, zahăr caramelizat, gălbenuș',
      price: 38,
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=400',
    },
    {
      name: 'Tiramisu Clasic',
      description: 'Rețetă autentică italiană, mascarpone, espresso',
      ingredients: 'mascarpone, savoiardi, espresso, cacao',
      price: 42,
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=400',
      badges: ['signature'],
    },
  ],
};

export default function MenuSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState('antreu');

  const tabs = [
    { id: 'antreu', label: 'Antreu' },
    { id: 'principale', label: 'Preparate Principale' },
    { id: 'deserturi', label: 'Deserturi' },
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'vegan':
        return 'bg-accent-green text-white';
      case 'spicy':
        return 'bg-red-500 text-white';
      case 'signature':
        return 'bg-secondary text-white';
      case 'new':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case 'vegan':
        return '🌱';
      case 'spicy':
        return '🌶️';
      case 'signature':
        return '⭐';
      case 'new':
        return '🆕';
      default:
        return '';
    }
  };

  return (
    <section id="meniu" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header - Responsive text */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <p className="text-secondary uppercase tracking-[0.2em] text-xs sm:text-sm font-display mb-3 sm:mb-4">
            Meniul Nostru
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-primary mb-3 sm:mb-4 px-4">
            Experiențe Culinare Rafinate
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4 leading-relaxed">
            Fiecare preparat este creat cu ingrediente premium, selectate zilnic pentru prospețime maximă
          </p>
        </motion.div>

        {/* Tabs - Responsive with scrollable on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-display text-xs sm:text-sm uppercase tracking-wide transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-secondary to-secondary-dark text-white shadow-lg shadow-secondary/30'
                  : 'bg-background text-text-secondary hover:bg-secondary/10 border border-secondary/20'
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items Grid - Better responsive */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          {menuData[activeTab]?.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
              className="card-premium group cursor-pointer"
            >
              <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden rounded-t-lg">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {item.badges && (
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-wrap gap-2">
                    {item.badges.map((badge) => (
                      <motion.span
                        key={badge}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                        className={`${getBadgeColor(badge)} px-2.5 sm:px-3 py-1 rounded-full text-xs font-display uppercase tracking-wide shadow-lg backdrop-blur-sm`}
                      >
                        {getBadgeIcon(badge)} {badge}
                      </motion.span>
                    ))}
                  </div>
                )}
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-text-secondary mb-3 text-sm sm:text-base leading-relaxed">{item.description}</p>
                <p className="text-xs sm:text-sm text-text-secondary/80 italic mb-4 leading-relaxed">
                  {item.ingredients}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xl sm:text-2xl font-display font-semibold text-secondary">
                    {item.price} lei
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "rgb(184, 149, 106)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-secondary/10 hover:text-white text-secondary px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 text-xs sm:text-sm font-display uppercase tracking-wide shadow-sm hover:shadow-md"
                  >
                    + Adaugă
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tasting Menu Banner - Modern glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          className="mt-12 sm:mt-16 bg-gradient-to-r from-secondary/10 via-secondary/5 to-secondary/10 rounded-2xl p-6 sm:p-8 md:p-12 text-center border-2 border-secondary/20 backdrop-blur-sm shadow-xl"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
            className="inline-block bg-gradient-to-r from-secondary to-secondary-dark text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-display uppercase tracking-wide mb-4 sm:mb-6 shadow-lg shadow-secondary/30"
          >
            ⭐ Experiență Premium
          </motion.span>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-primary mb-3 sm:mb-4 px-4">
            Meniu Degustare Chef [NUME]
          </h3>
          <p className="text-text-secondary mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4 leading-relaxed">
            O călătorie culinară în 7 preparate, fiecare ales și pregătit special pentru a evidenția
            tehnicile și ingredientele premium ale sezonului curent
          </p>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-secondary mb-6 sm:mb-8">XXX lei/persoană</p>
          <motion.button
            onClick={() => {
              const element = document.querySelector('#rezervare');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(184, 149, 106, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Rezervă pentru Meniul Degustare
          </motion.button>
        </motion.div>

        {/* PDF Download - Responsive */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8 sm:mt-12 px-4"
        >
          <p className="text-text-secondary mb-4 text-sm sm:text-base">
            Meniul nostru se schimbă sezonier pentru a reflecta ingredientele cele mai proaspete
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, x: 5 }}
            className="inline-flex items-center space-x-2 text-secondary hover:text-secondary-dark transition-colors duration-300 font-display uppercase text-xs sm:text-sm tracking-wide"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Descarcă meniul complet (PDF)</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
