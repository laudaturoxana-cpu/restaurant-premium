'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function ReservationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    preferences: '',
    tastingMenu: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          email: '',
          date: '',
          time: '',
          guests: '2',
          preferences: '',
          tastingMenu: false,
        });
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const timeSlots = [
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
    '22:00',
    '22:30',
  ];

  return (
    <section id="rezervare" className="section-padding bg-gradient-to-b from-secondary/5 to-secondary/10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Rezervă-ți Masa Acum
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Garantăm cele mai bune mese pentru rezervările făcute în avans
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-sm shadow-2xl"
        >
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="inline-block mb-6"
              >
                <svg
                  className="w-20 h-20 text-accent-green mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                Rezervare Trimisă cu Succes!
              </h3>
              <p className="text-text-secondary">
                Vei primi confirmarea în maxim 2 ore. Mulțumim!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-display font-medium text-primary mb-2">
                    Nume Complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                    placeholder="Ion Popescu"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-display font-medium text-primary mb-2">
                    Telefon <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                    placeholder="0721 XXX XXX"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-display font-medium text-primary mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                  placeholder="email@exemplu.ro"
                />
              </div>

              {/* Date, Time, Guests */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-display font-medium text-primary mb-2">
                    Data <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-display font-medium text-primary mb-2">
                    Ora <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Selectează</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-display font-medium text-primary mb-2">
                    Persoane <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                  >
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'persoană' : 'persoane'}
                      </option>
                    ))}
                    <option value="10+">10+ persoane</option>
                  </select>
                </div>
              </div>

              {/* Preferences */}
              <div>
                <label htmlFor="preferences" className="block text-sm font-display font-medium text-primary mb-2">
                  Preferințe Speciale
                </label>
                <textarea
                  id="preferences"
                  name="preferences"
                  value={formData.preferences}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Aniversare, intoleranțe alimentare, cerințe speciale..."
                />
              </div>

              {/* Tasting Menu Checkbox */}
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="tastingMenu"
                  name="tastingMenu"
                  checked={formData.tastingMenu}
                  onChange={handleChange}
                  className="w-5 h-5 text-secondary focus:ring-2 focus:ring-secondary border-gray-300 rounded"
                />
                <label htmlFor="tastingMenu" className="text-sm text-text-secondary">
                  Doresc informații despre meniul degustare
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-base py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Se trimite...</span>
                  </>
                ) : (
                  <span>Confirmă Rezervarea</span>
                )}
              </button>

              {/* Info Text */}
              <p className="text-sm text-text-secondary text-center">
                Vei primi confirmarea în maxim 2 ore. Pentru rezervări de peste 6 persoane sau
                evenimente speciale, te rugăm să ne suni direct.
              </p>
            </form>
          )}
        </motion.div>

        {/* Alternative Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-text-secondary mb-4">
            Preferi să vorbești direct?
          </p>
          <a
            href="tel:0721000000"
            className="inline-flex items-center space-x-2 text-secondary hover:text-secondary-dark transition-colors duration-300 font-display text-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>0721 XXX XXX</span>
            <span className="text-sm text-text-secondary">(răspundem 10:00-22:00)</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
