'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const highlights = [
  'Moniteurs diplômés d\'État',
  'Taux de réussite élevé',
  'Véhicules récents',
  'Financement CPF',
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-formaroute-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      {/* Decorative Elements */}
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-formaroute-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-formaroute-red-500/10 blur-3xl" />

      <div className="container-custom relative flex min-h-screen items-center pt-20">
        <div className="grid gap-12 py-20 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-col justify-center"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 rounded-full bg-formaroute-blue-100 px-4 py-2 text-sm font-medium text-formaroute-blue-700">
                <span className="flex h-2 w-2 rounded-full bg-formaroute-blue-600" />
                Nouvelle auto-école à Domont
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              className="mt-6 font-heading text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Votre{' '}
              <span className="text-formaroute-blue-600">permis</span>
              <br />
              commence{' '}
              <span className="text-formaroute-red-600">ici</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl text-lg text-slate-600 md:text-xl"
            >
              Auto-école Formaroute à Domont. Formation au code de la route, 
              permis B, conduite accompagnée et stage de récupération de points. 
              Votre réussite est notre priorité.
            </motion.p>

            {/* Highlights */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 grid grid-cols-2 gap-3"
            >
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-formaroute-blue-600" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Button asChild size="xl">
                <Link href="/reservation">
                  Évaluation gratuite
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link href="/formations">Découvrir nos formations</Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={fadeInUp}
              className="mt-10 flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-formaroute-blue-100 text-sm font-bold text-formaroute-blue-600"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="ml-1 font-semibold text-slate-900">4.8/5</span>
                </div>
                <a
                  href="https://g.page/r/CVku8ribbwIZEAE/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-formaroute-blue-600 hover:underline"
                >
                  Voir nos avis Google
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="relative z-10 overflow-hidden rounded-3xl bg-gradient-to-br from-formaroute-blue-600 to-formaroute-blue-800 p-8 shadow-2xl">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-formaroute-red-500/20" />
                
                <div className="relative space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
                      <span className="text-4xl">🚗</span>
                    </div>
                  <div>
                    <p className="text-sm text-white/70">Permis B</p>
                    <p className="text-2xl font-bold text-white">à partir de 1 090€</p>
                  </div>
                  </div>

                  <div className="h-px bg-white/20" />

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-3xl font-bold text-white">85%</p>
                      <p className="text-sm text-white/70">Taux de réussite</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-3xl font-bold text-white">20h</p>
                      <p className="text-sm text-white/70">Minimum légal</p>
                    </div>
                  </div>

                  <div className="h-px bg-white/20" />

                  <div className="space-y-3">
                    {['Code inclus', 'Véhicule double commande', 'Accompagnement examen'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-400" />
                        <span className="text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -left-12 top-1/4 z-20 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
                    ✅
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Examen réussi !</p>
                    <p className="text-sm text-slate-500">Marie L. - Permis B</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -right-8 bottom-1/4 z-20 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-formaroute-blue-100 text-2xl">
                    📅
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">RDV confirmé</p>
                    <p className="text-sm text-slate-500">Évaluation gratuite</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-slate-300 p-2"
        >
          <div className="h-2 w-1 rounded-full bg-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
