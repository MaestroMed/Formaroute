import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { formations } from '@/data/formations';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { FormationIcon } from '@/components/icons/FormationIcon';

export const metadata: Metadata = {
  title: 'Nos Formations | Code, Permis B, AAC, Stage Points',
  description:
    "Découvrez toutes nos formations : forfait code, permis B (manuelle ou auto), conduite accompagnée, passerelle, annulation. Auto-école Formaroute à Domont.",
  openGraph: {
    title: 'Formations Auto-école Formaroute Domont',
    description: 'Code, Permis B, AAC, Stage Points - Toutes nos formations',
  },
};

export default function FormationsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-formaroute-blue-600 to-formaroute-blue-800 py-20 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold md:text-5xl lg:text-6xl">
              Nos Formations
            </h1>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              Du code de la route au permis B, en passant par la conduite accompagnée
              et les stages de points, trouvez la formation adaptée à vos besoins.
            </p>
          </div>
        </div>
      </section>

      {/* Formations Grid */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {formations.map((formation) => {
              const isPopular = formation.popular;
              const isNew = formation.new;
              const isComingSoon = formation.comingSoon;

              return (
                <div
                  key={formation.id}
                  className={cn(
                    'group relative overflow-hidden rounded-2xl border-2 bg-white transition-all duration-300',
                    isComingSoon
                      ? 'border-slate-200 opacity-80'
                      : 'border-slate-100 hover:-translate-y-2 hover:border-formaroute-blue-200 hover:shadow-xl',
                    isPopular && 'border-formaroute-blue-200 ring-2 ring-formaroute-blue-100'
                  )}
                >
                  {/* Badges */}
                  <div className="absolute right-4 top-4 flex gap-2">
                    {isPopular && (
                      <span className="badge-primary">Populaire</span>
                    )}
                    {isNew && (
                      <span className="badge-secondary">Nouveau</span>
                    )}
                    {isComingSoon && (
                      <span className="badge bg-slate-100 text-slate-600">
                        Bientôt
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    {/* Icon */}
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-formaroute-blue-100 text-formaroute-blue-600">
                      <FormationIcon slug={formation.slug} className="h-7 w-7" />
                    </div>

                    {/* Title & Description */}
                    <h2 className="mb-2 font-heading text-xl font-bold text-slate-900">
                      {formation.shortTitle}
                    </h2>
                    <p className="mb-4 text-slate-600">
                      {formation.shortDescription}
                    </p>

                    {/* Features */}
                    <ul className="mb-6 space-y-2">
                      {formation.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-formaroute-blue-600" />
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Price */}
                    <div className="mb-6 border-t border-slate-100 pt-4">
                      <p className="text-sm text-slate-500">
                        {formation.priceFrom ? 'À partir de' : 'Prix'}
                      </p>
                      <p className="font-mono text-3xl font-bold text-formaroute-blue-600">
                        {formation.price === 0 ? 'Gratuit' : `${formation.price}€`}
                      </p>
                      {formation.hours && (
                        <p className="text-sm text-slate-500">
                          {formation.hours} heures de conduite
                        </p>
                      )}
                    </div>

                    {/* CPF Badge */}
                    {formation.eligibleCPF && (
                      <div className="mb-4 rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700">
                        ✓ Éligible CPF
                      </div>
                    )}

                    {/* CTA */}
                    {isComingSoon ? (
                      <Button disabled className="w-full" variant="secondary">
                        Bientôt disponible
                      </Button>
                    ) : (
                      <Button asChild className="w-full">
                        <Link href={`/formations/${formation.slug}`}>
                          En savoir plus
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-formaroute-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Une question sur nos formations ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Notre équipe est à votre disposition pour vous conseiller
            et vous aider à choisir la formation adaptée à vos besoins.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-formaroute-blue-600 hover:bg-slate-50"
            >
              <Link href="/contact">Nous contacter</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <Link href="/reservation">Réserver une évaluation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
