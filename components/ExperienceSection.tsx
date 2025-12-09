'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: 'Experiență Culinară',
      description:
        'Fiecare preparat e gândit pentru a-ți oferi o poveste de savoare. Chef-ul nostru combină tehnici clasice cu inovație contemporană pentru rezultate memorabile.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      title: 'Selecție de Vinuri',
      description:
        'Sommelierul nostru a creat o listă de vinuri care complementează perfect fiecare preparat. De la vinuri românești boutique la etichete internaționale rare.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
      title: 'Atmosferă Intimă',
      description:
        'Cu doar [XX] mese, oferim o experiență exclusivă unde fiecare oaspete primește atenția pe care o merită. Perfectă pentru momente speciale care rămân în amintire.',
    },
  ];

  return (
    <section className="section-padding bg-white">
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
            Ce Te Așteaptă
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
            Mai Mult Decât o Cină
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center p-8 rounded-sm bg-background hover:bg-white hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="inline-block text-secondary mb-6 group-hover:scale-110 transition-transform duration-300">
                {exp.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                {exp.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
