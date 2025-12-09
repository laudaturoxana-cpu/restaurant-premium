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
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-secondary uppercase tracking-widest text-sm font-display mb-2">
            Meniul Nostru
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Experiențe Culinare Rafinate
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Fiecare preparat este creat cu ingrediente premium, selectate zilnic pentru prospețime maximă
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-sm font-display text-sm uppercase tracking-wide transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-secondary text-white shadow-lg'
                  : 'bg-background text-text-secondary hover:bg-secondary/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {menuData[activeTab]?.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium group"
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                {item.badges && (
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {item.badges.map((badge) => (
                      <span
                        key={badge}
                        className={`${getBadgeColor(badge)} px-3 py-1 rounded-full text-xs font-display uppercase tracking-wide`}
                      >
                        {getBadgeIcon(badge)} {badge}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                  {item.name}
                </h3>
                <p className="text-text-secondary mb-3">{item.description}</p>
                <p className="text-sm text-text-secondary italic mb-4">
                  {item.ingredients}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-display font-semibold text-secondary">
                    {item.price} lei
                  </span>
                  <button className="bg-secondary/10 hover:bg-secondary hover:text-white text-secondary px-4 py-2 rounded-sm transition-all duration-300 text-sm font-display uppercase tracking-wide">
                    + Adaugă
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tasting Menu Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-secondary/10 via-secondary/5 to-secondary/10 rounded-sm p-8 md:p-12 text-center border-2 border-secondary/20"
        >
          <span className="inline-block bg-secondary text-white px-4 py-2 rounded-full text-xs font-display uppercase tracking-wide mb-4">
            ⭐ Experiență Premium
          </span>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-3">
            Meniu Degustare Chef [NUME]
          </h3>
          <p className="text-text-secondary mb-4 max-w-2xl mx-auto">
            O călătorie culinară în 7 preparate, fiecare ales și pregătit special pentru a evidenția
            tehnicile și ingredientele premium ale sezonului curent
          </p>
          <p className="text-4xl font-serif font-bold text-secondary mb-6">XXX lei/persoană</p>
          <button
            onClick={() => {
              const element = document.querySelector('#rezervare');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            Rezervă pentru Meniul Degustare
          </button>
        </motion.div>

        {/* PDF Download */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-text-secondary mb-4">
            Meniul nostru se schimbă sezonier pentru a reflecta ingredientele cele mai proaspete
          </p>
          <a
            href="#"
            className="inline-flex items-center space-x-2 text-secondary hover:text-secondary-dark transition-colors duration-300 font-display uppercase text-sm tracking-wide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Descarcă meniul complet (PDF)</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
