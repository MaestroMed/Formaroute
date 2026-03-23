'use client';

import { motion } from 'framer-motion';
import { Star, ExternalLink, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GOOGLE_REVIEW_URL = 'https://g.page/r/CVku8ribbwIZEAE/review';

export function Testimonials() {
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
          <span className="badge-primary mb-4">Avis clients</span>
          <h2 className="heading-lg text-slate-900">
            Ce que nos{' '}
            <span className="text-formaroute-blue-600">élèves</span> pensent de nous
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Retrouvez tous les avis de nos élèves directement sur notre page Google.
          </p>
        </motion.div>

        {/* Google CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mx-auto mt-16 max-w-2xl"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-formaroute-blue-50 to-slate-50 p-10 text-center shadow-sm">
            {/* Google logo area */}
            <div className="mb-6 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-md">
                <span className="text-4xl font-black">
                  <span className="text-[#4285F4]">G</span>
                </span>
              </div>
            </div>

            {/* Stars */}
            <div className="mb-4 flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-7 w-7 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <p className="mb-2 text-xl font-bold text-slate-900">
              Ils nous font confiance
            </p>
            <p className="mb-8 text-slate-600">
              Consultez les avis authentiques de nos élèves sur Google et
              partagez votre propre expérience.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Star className="h-5 w-5 fill-yellow-300 text-yellow-300" />
                  Laisser un avis Google
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MessageSquare className="h-5 w-5" />
                  Voir tous les avis
                </a>
              </Button>
            </div>

            {/* Decorative badge */}
            <div className="absolute right-6 top-6 rounded-full bg-white px-3 py-1 text-sm font-semibold text-slate-700 shadow-sm">
              Google My Business
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
