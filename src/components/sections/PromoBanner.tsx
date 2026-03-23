'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Star, ArrowRight } from 'lucide-react';

export function PromoBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative mt-20 overflow-hidden bg-gradient-to-r from-formaroute-red-600 via-formaroute-red-700 to-formaroute-blue-700 py-3 text-white"
    >
      {/* Background shimmer */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="container-custom relative">
        <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-4">
          {/* Badge ouverture */}
          <span className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wide backdrop-blur-sm">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-yellow-300" />
            Ouverture le 1er avril 2026
          </span>

          {/* Offre */}
          <p className="text-sm font-medium sm:text-base">
            Forfait Permis B à{' '}
            <span className="font-bold text-yellow-300">990€</span>
            <span className="mx-1 text-white/60 line-through">1 090€</span>
            pour les{' '}
            <span className="font-bold text-yellow-300">20 premiers inscrits</span>
          </p>

          {/* CTA */}
          <a
            href="tel:+33134198326"
            className="flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-sm font-bold text-formaroute-blue-700 transition-all hover:bg-yellow-300 hover:text-slate-900"
          >
            <Phone className="h-3.5 w-3.5" />
            Appeler maintenant
          </a>
        </div>
      </div>
    </motion.div>
  );
}
