import Link from 'next/link';
import { ArrowRight, Car, GraduationCap, ShieldCheck } from 'lucide-react';
import { site } from '@/data/site';

/** Les trois activités de l'établissement, en bulles cliquables. */
const activities = [
  {
    title: 'Auto-école',
    text: 'Permis B manuel et automatique, conduite accompagnée et supervisée à Domont.',
    href: '/auto-ecole-domont',
    cta: 'Découvrir l’auto-école',
    icon: Car,
    color: 'bg-formaroute-blue-600',
  },
  {
    title: 'Formation de moniteurs TP ECSR',
    text: `Ouverture prévue en ${site.ecsr.opening}. Contactez-nous pour être informé.`,
    href: '/formations/formation-moniteur',
    cta: 'En savoir plus',
    icon: GraduationCap,
    color: 'bg-slate-800',
  },
  {
    title: 'Stages de récupération de points',
    text: 'Découvrez les prochaines dates et réservez votre stage.',
    href: '/formations/stage-recuperation-points',
    cta: 'Voir les dates',
    icon: ShieldCheck,
    color: 'bg-formaroute-red-600',
  },
];

export function Activities() {
  return (
    <section className="bg-white py-16" aria-labelledby="activites-titre">
      <div className="container-custom">
        <h2 id="activites-titre" className="sr-only">
          Nos activités
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {activities.map((a) => {
            const Icon = a.icon;
            return (
              <Link
                key={a.href}
                href={a.href}
                className="group flex flex-col rounded-3xl border-2 border-slate-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-formaroute-blue-200 hover:shadow-xl focus-visible:border-formaroute-blue-400"
              >
                <span
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-white ${a.color}`}
                >
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-xl font-bold text-slate-900">{a.title}</h3>
                <p className="mt-2 flex-1 text-slate-600">{a.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-formaroute-blue-600">
                  {a.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
