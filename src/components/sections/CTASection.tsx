'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-br from-formaroute-blue-600 via-formaroute-blue-700 to-formaroute-blue-800">
      {/* Decorative Elements */}
      <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-formaroute-red-500/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      
      {/* Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="container-custom relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <Calendar className="h-4 w-4" />
              Évaluation gratuite et sans engagement
            </span>

            {/* Heading */}
            <h2 className="mt-6 font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Prêt à prendre la route ?
            </h2>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              Réservez votre évaluation gratuite et commencez votre formation 
              avec l'auto-école de référence à Domont.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              asChild
              size="xl"
              className="bg-white text-formaroute-blue-600 shadow-xl hover:bg-slate-50"
            >
              <Link href="/reservation">
                Réserver maintenant
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10"
            >
              <a href="tel:+33XXXXXXXXX">
                <Phone className="h-5 w-5" />
                01 XX XX XX XX
              </a>
            </Button>
          </motion.div>

          {/* Trust Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/60"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-lg">
                ✓
              </span>
              <span>Sans engagement</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-lg">
                ✓
              </span>
              <span>Réponse rapide</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-lg">
                ✓
              </span>
              <span>Financement possible</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
