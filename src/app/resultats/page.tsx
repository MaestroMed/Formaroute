import Link from 'next/link';
import { ArrowRight, Target, Users, TrendingUp, ClipboardCheck, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { site, hasResults } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Nos résultats et indicateurs',
  description:
    "Indicateurs de résultats de l'auto-école Formaroute à Domont : taux de réussite au code et au permis, satisfaction et abandons, avec période et nombre de candidats.",
  path: '/resultats',
});

const method = [
  {
    icon: Target,
    title: 'Pédagogie adaptée',
    description:
      "Une progression construite à partir de l'évaluation de départ et ajustée au rythme de chaque élève.",
  },
  {
    icon: Users,
    title: 'Enseignants autorisés',
    description: "Des enseignants titulaires de l'autorisation d'enseigner la conduite.",
  },
  {
    icon: TrendingUp,
    title: 'Suivi de progression',
    description: "Le livret d'apprentissage et des bilans réguliers pour savoir où vous en êtes.",
  },
  {
    icon: ClipboardCheck,
    title: 'Bilans pédagogiques',
    description: 'Une progression évaluée lors des leçons et des bilans pédagogiques.',
  },
];

function formatRate(rate: number | null) {
  return rate === null ? '—' : `${rate} %`;
}

export default function ResultatsPage() {
  const { results } = site;
  const updatedAt = results.updatedAt
    ? new Date(results.updatedAt).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-formaroute-blue-600 to-formaroute-blue-800 py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold md:text-5xl">Nos résultats</h1>
            <p className="mt-4 text-lg text-white/90">
              Nous publions nos indicateurs avec leur période, le nombre de candidats et la méthode
              de calcul concernés, pour une information claire et vérifiable.
            </p>
          </div>
        </div>
      </section>

      {/* Indicateurs */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            {!hasResults() && (
              <div className="mb-8 rounded-2xl border border-formaroute-blue-200 bg-formaroute-blue-50 p-6 text-slate-700">
                <p className="font-semibold text-slate-900">
                  Premiers résultats en cours de constitution
                </p>
                <p className="mt-2">
                  Formaroute a ouvert ses portes en avril 2026. Nos taux de réussite seront publiés
                  ici dès que les données officielles portant sur une période significative seront
                  disponibles. Nous préférons ne publier que des chiffres réels.
                </p>
              </div>
            )}

            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Taux de réussite par examen</caption>
                <thead className="bg-slate-50">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold text-slate-700">
                      Examen
                    </th>
                    <th scope="col" className="px-4 py-3 text-right font-semibold text-slate-700">
                      Taux de réussite
                    </th>
                    <th scope="col" className="px-4 py-3 text-right font-semibold text-slate-700">
                      Candidats
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold text-slate-700">
                      Période et méthode
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {results.indicators.map((indicator) => (
                    <tr key={indicator.label}>
                      <th scope="row" className="px-4 py-3 font-medium text-slate-900">
                        {indicator.label}
                      </th>
                      <td className="px-4 py-3 text-right font-mono font-semibold text-formaroute-blue-600">
                        {formatRate(indicator.rate)}
                      </td>
                      <td className="px-4 py-3 text-right text-slate-600">
                        {indicator.candidates ?? '—'}
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {indicator.period ?? 'En cours'}
                        {indicator.method && (
                          <span className="block text-xs text-slate-500">{indicator.method}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-6">
                <p className="text-sm text-slate-500">Satisfaction des élèves</p>
                <p className="mt-1 font-mono text-3xl font-bold text-formaroute-blue-600">
                  {formatRate(results.satisfaction.rate)}
                </p>
                <p className="text-sm text-slate-600">
                  {results.satisfaction.rate === null
                    ? 'Questionnaire de fin de formation en cours de collecte'
                    : `${results.satisfaction.respondents} répondants · ${results.satisfaction.period}`}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <p className="text-sm text-slate-500">Taux d&apos;abandon en cours de formation</p>
                <p className="mt-1 font-mono text-3xl font-bold text-formaroute-blue-600">
                  {formatRate(results.dropout.rate)}
                </p>
                <p className="text-sm text-slate-600">
                  {results.dropout.rate === null
                    ? 'Données en cours de constitution'
                    : results.dropout.period}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-2 text-sm text-slate-500">
              {updatedAt && <p>Indicateurs mis à jour le {updatedAt}.</p>}
              {results.indicators.some((i) => i.source) && (
                <p>
                  Sources :{' '}
                  {Array.from(
                    new Set(results.indicators.map((i) => i.source).filter(Boolean))
                  ).join(', ')}
                  .
                </p>
              )}
              {results.officialSource && (
                <a
                  href={results.officialSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-formaroute-blue-600 hover:underline"
                >
                  Consulter les données officielles
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Méthode */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-md text-slate-900">
              Notre <span className="text-formaroute-blue-600">méthode</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {method.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-formaroute-blue-100">
                    <Icon className="h-7 w-7 text-formaroute-blue-600" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-bold text-slate-900">{f.title}</h3>
                  <p className="text-sm text-slate-600">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-formaroute-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold">Prêt à vous lancer ?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Réservez votre évaluation de départ pour connaître le volume de formation adapté à votre
            profil.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-formaroute-blue-600 hover:bg-slate-50"
            >
              <Link href="/reservation">
                Réserver maintenant
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline-light">
              <Link href="/qualite">Notre démarche qualité</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
