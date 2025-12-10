'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

type GalleryImage = {
  url: string;
  category: 'toate' | 'preparate' | 'ambient' | 'evenimente';
  alt: string;
};

const galleryImages: GalleryImage[] = [
  {
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800',
    category: 'preparate',
    alt: 'Preparat signature',
  },
  {
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800',
    category: 'ambient',
    alt: 'Interior restaurant',
  },
  {
    url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800',
    category: 'preparate',
    alt: 'Preparat gourmet',
  },
  {
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800',
    category: 'ambient',
    alt: 'Masă aranjată',
  },
  {
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800',
    category: 'preparate',
    alt: 'Plating artistic',
  },
  {
    url: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800',
    category: 'evenimente',
    alt: 'Event privat',
  },
  {
    url: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800',
    category: 'preparate',
    alt: 'Desert gourmet',
  },
  {
    url: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=800',
    category: 'ambient',
    alt: 'Bar restaurant',
  },
  {
    url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800',
    category: 'preparate',
    alt: 'Preparat principal',
  },
];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState<'toate' | 'preparate' | 'ambient' | 'evenimente'>('toate');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filters = [
    { id: 'toate' as const, label: 'Toate' },
    { id: 'preparate' as const, label: 'Preparate' },
    { id: 'ambient' as const, label: 'Ambient' },
    { id: 'evenimente' as const, label: 'Evenimente' },
  ];

  const filteredImages = activeFilter === 'toate'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <>
      <section id="galerie" className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Header - Responsive */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <p className="text-secondary uppercase tracking-[0.2em] text-xs sm:text-sm font-display mb-3 sm:mb-4">
              Galerie
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-primary mb-3 sm:mb-4 px-4">
              Fiecare Farfurie, o Operă de Artă
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4 leading-relaxed">
              Descoperă atmosfera și preparatele noastre prin imaginile care spun povestea restaurantului
            </p>
          </motion.div>

          {/* Filters - Responsive rounded buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-display text-xs sm:text-sm uppercase tracking-wide transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-secondary to-secondary-dark text-white shadow-lg shadow-secondary/30'
                    : 'bg-white text-text-secondary hover:bg-secondary/10 border border-secondary/20'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid - Responsive masonry-like */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.url}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.03, y: -8 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl aspect-square"
                onClick={() => setSelectedImage(image.url)}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${image.url}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <motion.svg
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="w-12 h-12 sm:w-16 sm:h-16 text-white drop-shadow-lg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </motion.svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal - Better responsive */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.1, rotate: 90 }}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white hover:text-secondary transition-colors duration-300 bg-white/10 backdrop-blur-md rounded-full p-2 sm:p-3"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, type: "spring" }}
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </>
  );
}
