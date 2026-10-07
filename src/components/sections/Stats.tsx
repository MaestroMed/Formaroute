import Link from 'next/link';
import { ClipboardCheck, Receipt, LineChart, Star, ExternalLink, ArrowRight } from 'lucide-react';
import { site, hasResults } from '@/data/site';

/**
 * Bloc « résultats & engagements » de la page d'accueil.
 *
 * Aucun chiffre n'est affiché tant que les indicateurs officiels ne sont pas
 * renseignés dans `src/data/site.ts` (chiffres réels, datés, avec effectifs).
 */
const engagements = [
  {
    icon: ClipboardCheck,
    title: 'Évaluation de départ',
    description: "Avant l'inscription, pour proposer un volume prévisionnel de formation adapté.",
  },
  {
    icon: Receipt,
    title: 'Tarifs transparents',
    description: 'Tous nos prix sont affichés TTC, forfaits et prestations à l’unité.',
  },
  {
    icon: LineChart,
    title: 'Suivi de progression',
    description:
      "Progression suivie dans le livret d'apprentissage et évaluée lors des bilans pédagogiques.",
  },
];

export function Stats() {
  const published = site.results.indicators.filter((i) => i.rate !== null);

  return (
    <section className="section relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-formaroute-blue-500 via-transparent to-transparent" />
      </div>

      <div className="container-custom relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-white">
            Nos <span className="text-formaroute-blue-400">engagements</span>
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Une formation sérieuse, suivie et transparente, de l&apos;évaluation de départ
            jusqu&apos;à l&apos;examen.
          </p>
        </div>

        {hasResults() ? (
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {published.map((indicator) => (
              <div
                key={indicator.label}
                className="rounded-2xl border border-slate-800 bg-slate-800/50 p-6 text-center"
              >
                <p className="font-mono text-4xl font-bold text-white md:text-5xl">
                  {indicator.rate}%
                </p>
                <p className="mt-2 font-semibold text-white">{indicator.label}</p>
                <p className="text-sm text-slate-300">
                  {indicator.candidates} candidats · {indicator.period}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {engagements.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-800/50 p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-formaroute-blue-100">
                    <Icon className="h-7 w-7 text-formaroute-blue-600" />
                  </div>
                  <p className="font-heading text-xl font-bold text-white">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/resultats"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Nos indicateurs de résultats
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={site.social.googleReview}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            Laissez-nous un avis sur Google
            <ExternalLink className="h-4 w-4 text-slate-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
