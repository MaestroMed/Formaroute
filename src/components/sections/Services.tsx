'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Gift } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formations } from '@/data/formations';
import { FormationIcon } from '@/components/icons/FormationIcon';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function Services() {
  // Get the 6 main formations for display
  const displayedFormations = formations.filter(
    (f) => !f.comingSoon && f.id !== 'evaluation'
  ).slice(0, 6);

  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="badge-primary mb-4">Nos formations</span>
          <h2 className="heading-lg text-slate-900">
            Des formations adaptées à{' '}
            <span className="text-formaroute-blue-600">vos besoins</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Que vous passiez votre premier permis ou que vous souhaitiez récupérer des points,
            nous avons la formation qu'il vous faut.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {displayedFormations.map((formation) => {
            const isPopular = formation.popular;
            const isNew = formation.new;
            const codeInclus = formation.features.some((f) =>
              f.toLowerCase().startsWith('code valable')
            );

            return (
              <motion.div key={formation.id} variants={itemVariants}>
                <Link href={`/formations/${formation.slug}`}>
                  <div
                    className={cn(
                      'group relative h-full overflow-hidden rounded-2xl border-2 bg-white p-6 transition-all duration-300',
                      'hover:-translate-y-2 hover:shadow-xl',
                      isPopular
                        ? 'border-formaroute-blue-200 hover:border-formaroute-blue-400'
                        : 'border-slate-100 hover:border-formaroute-blue-200'
                    )}
                  >
                    {/* Badge */}
                    {(isPopular || isNew) && (
                      <div className="absolute right-4 top-4">
                        <span
                          className={cn(
                            'badge',
                            isNew ? 'badge-secondary' : 'badge-primary'
                          )}
                        >
                          {isNew ? 'Nouveau' : 'Populaire'}
                        </span>
                      </div>
                    )}

                    {/* Icon */}
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-formaroute-blue-100 text-formaroute-blue-600 transition-colors group-hover:bg-formaroute-blue-600 group-hover:text-white">
                      <FormationIcon slug={formation.slug} className="h-7 w-7" />
                    </div>

                    {/* Content */}
                    <h3 className="mb-2 font-heading text-xl font-bold text-slate-900">
                      {formation.shortTitle}
                    </h3>
                    <p className="mb-4 line-clamp-2 text-slate-600">
                      {formation.shortDescription}
                    </p>

                    {/* Price & CTA */}
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-sm text-slate-500">
                          {formation.priceFrom ? 'À partir de' : 'Prix'}
                        </p>
                        <p className="font-mono text-2xl font-bold text-formaroute-blue-600">
                          {formation.price === 0 ? 'Gratuit' : `${formation.price}€`}
                        </p>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all group-hover:bg-formaroute-blue-600 group-hover:text-white">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {codeInclus && (
                        <div className="inline-flex items-center gap-1.5 rounded-lg bg-yellow-50 px-3 py-2 text-sm text-yellow-700 ring-1 ring-yellow-200">
                          <Gift className="h-4 w-4" />
                          <span className="font-medium">Code offert</span>
                        </div>
                      )}
                      {formation.eligibleCPF && (
                        <div className="inline-flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700">
                          <span>✓</span>
                          <span>Éligible CPF</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/formations"
            className="inline-flex items-center gap-2 font-semibold text-formaroute-blue-600 transition-colors hover:text-formaroute-blue-700"
          >
            Voir toutes nos formations
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
