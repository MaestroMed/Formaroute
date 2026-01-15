'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: 'Marie L.',
    formation: 'Permis B',
    text: "Excellente auto-école ! Les moniteurs sont très pédagogues et patients. J'ai eu mon permis du premier coup grâce à leurs conseils. Je recommande vivement Formaroute à tous ceux qui veulent passer leur permis dans de bonnes conditions.",
    rating: 5,
    date: 'Janvier 2024',
    initials: 'ML',
  },
  {
    id: 2,
    name: 'Thomas D.',
    formation: 'Conduite Accompagnée',
    text: "Super expérience ! L'équipe est vraiment à l'écoute et s'adapte au rythme de chacun. Les véhicules sont récents et bien entretenus. J'ai adoré ma formation et je me sens confiant sur la route.",
    rating: 5,
    date: 'Décembre 2023',
    initials: 'TD',
  },
  {
    id: 3,
    name: 'Sophie M.',
    formation: 'Stage Points',
    text: "Stage très instructif et bien animé. Les intervenants sont professionnels et le contenu vraiment intéressant. Je repars avec une nouvelle vision de la sécurité routière. Merci à toute l'équipe !",
    rating: 5,
    date: 'Novembre 2023',
    initials: 'SM',
  },
  {
    id: 4,
    name: 'Lucas R.',
    formation: 'Permis B',
    text: "J'avais peur de conduire mais grâce à mon moniteur, j'ai pris confiance petit à petit. L'ambiance est vraiment bienveillante et on se sent soutenu tout au long de la formation.",
    rating: 5,
    date: 'Octobre 2023',
    initials: 'LR',
  },
  {
    id: 5,
    name: 'Emma B.',
    formation: 'Code de la Route',
    text: "La plateforme en ligne est top et les cours en salle avec les moniteurs sont très utiles. J'ai eu mon code en seulement 3 semaines ! Très satisfaite de cette formation.",
    rating: 5,
    date: 'Septembre 2023',
    initials: 'EB',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const nextIndex = prev + newDirection;
      if (nextIndex < 0) return testimonials.length - 1;
      if (nextIndex >= testimonials.length) return 0;
      return nextIndex;
    });
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section overflow-hidden bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="badge-primary mb-4">Témoignages</span>
          <h2 className="heading-lg text-slate-900">
            Ce que nos{' '}
            <span className="text-formaroute-blue-600">élèves</span> disent
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Découvrez les avis de nos élèves et leur expérience chez Formaroute.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative mt-16">
          <div className="mx-auto max-w-4xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="relative rounded-3xl bg-gradient-to-br from-formaroute-blue-50 to-slate-50 p-8 md:p-12"
              >
                {/* Quote Icon */}
                <Quote className="absolute right-8 top-8 h-16 w-16 text-formaroute-blue-200" />

                <div className="relative">
                  {/* Rating */}
                  <div className="mb-6 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          'h-6 w-6',
                          i < currentTestimonial.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'fill-slate-200 text-slate-200'
                        )}
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <blockquote className="text-xl text-slate-700 md:text-2xl">
                    "{currentTestimonial.text}"
                  </blockquote>

                  {/* Author */}
                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-formaroute-blue-600 text-xl font-bold text-white">
                      {currentTestimonial.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">
                        {currentTestimonial.name}
                      </p>
                      <p className="text-sm text-slate-500">
                        {currentTestimonial.formation} • {currentTestimonial.date}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={() => paginate(-1)}
              className="absolute -left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg transition-all hover:bg-formaroute-blue-50 hover:shadow-xl md:-left-6"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="h-6 w-6 text-slate-600" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute -right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg transition-all hover:bg-formaroute-blue-50 hover:shadow-xl md:-right-6"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="h-6 w-6 text-slate-600" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={cn(
                  'h-2 rounded-full transition-all',
                  index === currentIndex
                    ? 'w-8 bg-formaroute-blue-600'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                )}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Google Reviews Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://g.page/formaroute"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-formaroute-blue-600 hover:text-formaroute-blue-700"
          >
            <span className="font-semibold">Voir tous nos avis sur Google</span>
            <span className="flex items-center gap-1 rounded-full bg-formaroute-blue-100 px-3 py-1 text-sm">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              4.8
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
