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
          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-secondary uppercase tracking-widest text-sm font-display mb-2">
              Galerie
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Fiecare Farfurie, o Operă de Artă
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Descoperă atmosfera și preparatele noastre prin imaginile care spun povestea restaurantului
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-sm font-display text-sm uppercase tracking-wide transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-secondary text-white shadow-lg'
                    : 'bg-white text-text-secondary hover:bg-secondary/10 border border-secondary/20'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.url}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-sm shadow-lg aspect-square"
                onClick={() => setSelectedImage(image.url)}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${image.url}')` }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-secondary transition-colors duration-300"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </>
  );
}
