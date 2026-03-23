'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, CreditCard, Award } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Moniteurs diplômés',
    description:
      "Tous nos moniteurs sont titulaires du Titre Professionnel ECSR et bénéficient d'une expérience de plusieurs années.",
    color: 'from-formaroute-blue-500 to-formaroute-blue-600',
  },
  {
    icon: Shield,
    title: 'Véhicules récents',
    description:
      'Notre flotte de véhicules est régulièrement renouvelée pour vous offrir les meilleures conditions d\'apprentissage.',
    color: 'from-formaroute-red-500 to-formaroute-red-600',
  },
  {
    icon: Clock,
    title: 'Horaires flexibles',
    description:
      "Nos horaires s'adaptent à votre emploi du temps : du lundi au vendredi de 10h à 12h et de 15h à 20h, et le samedi de 10h à 13h.",
    color: 'from-green-500 to-green-600',
  },
  {
    icon: CreditCard,
    title: 'Facilités de paiement',
    description:
      'Paiement en plusieurs fois sans frais, CPF, aides Pôle Emploi... Nous trouvons la solution adaptée à votre budget.',
    color: 'from-purple-500 to-purple-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function WhyChooseUs() {
  return (
    <section className="section bg-slate-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="badge-primary mb-4">Pourquoi nous choisir</span>
          <h2 className="heading-lg text-slate-900">
            Une auto-école{' '}
            <span className="text-formaroute-blue-600">différente</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Chez Formaroute, nous mettons tout en œuvre pour votre réussite 
            avec une approche personnalisée et des outils modernes.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                />

                <div className="relative flex gap-6">
                  {/* Icon */}
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color}`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="mb-2 font-heading text-xl font-bold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-slate-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
