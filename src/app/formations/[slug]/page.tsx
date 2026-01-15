import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Euro, Users } from 'lucide-react';
import { formations, getFormationBySlug } from '@/data/formations';
import { Button } from '@/components/ui/button';

interface FormationPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return formations
    .filter((f) => !f.comingSoon)
    .map((formation) => ({
      slug: formation.slug,
    }));
}

export function generateMetadata({ params }: FormationPageProps): Metadata {
  const formation = getFormationBySlug(params.slug);
  
  if (!formation) {
    return {
      title: 'Formation non trouvée',
    };
  }

  return {
    title: `${formation.title} à Domont`,
    description: formation.description,
    openGraph: {
      title: `${formation.title} | Formaroute Domont`,
      description: formation.shortDescription,
    },
  };
}

export default function FormationPage({ params }: FormationPageProps) {
  const formation = getFormationBySlug(params.slug);

  if (!formation) {
    notFound();
  }

  return (
    <main className="pt-20">
      {/* Breadcrumb */}
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="container-custom py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-slate-500 hover:text-slate-700">
              Accueil
            </Link>
            <span className="text-slate-400">/</span>
            <Link href="/formations" className="text-slate-500 hover:text-slate-700">
              Formations
            </Link>
            <span className="text-slate-400">/</span>
            <span className="font-medium text-slate-900">{formation.shortTitle}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-formaroute-blue-600 to-formaroute-blue-800 py-16 text-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              {/* Badges */}
              <div className="mb-4 flex gap-2">
                {formation.popular && (
                  <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                    Populaire
                  </span>
                )}
                {formation.eligibleCPF && (
                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-medium text-green-100">
                    ✓ Éligible CPF
                  </span>
                )}
              </div>

              <h1 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl">
                {formation.title}
              </h1>
              <p className="mt-4 text-lg text-white/80">
                {formation.description}
              </p>

              {/* Quick Info */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-white/10 p-4">
                  <Euro className="mb-2 h-6 w-6 text-white/60" />
                  <p className="font-mono text-2xl font-bold">
                    {formation.price === 0 ? 'Gratuit' : `${formation.price}€`}
                  </p>
                  <p className="text-sm text-white/60">
                    {formation.priceFrom ? 'à partir de' : 'prix total'}
                  </p>
                </div>
                {formation.hours && (
                  <div className="rounded-xl bg-white/10 p-4">
                    <Clock className="mb-2 h-6 w-6 text-white/60" />
                    <p className="font-mono text-2xl font-bold">{formation.hours}h</p>
                    <p className="text-sm text-white/60">de conduite</p>
                  </div>
                )}
                {formation.duration && (
                  <div className="rounded-xl bg-white/10 p-4">
                    <Users className="mb-2 h-6 w-6 text-white/60" />
                    <p className="text-xl font-bold">{formation.duration}</p>
                    <p className="text-sm text-white/60">durée moyenne</p>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <Link href="/contact">Nous contacter</Link>
                </Button>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="hidden lg:block">
              <div className="aspect-video rounded-2xl bg-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-md text-center text-slate-900">
              Ce qui est inclus dans cette formation
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {formation.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-formaroute-blue-600" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-formaroute-blue-50">
        <div className="container-custom text-center">
          <h2 className="heading-md text-slate-900">
            Prêt à commencer votre formation ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Réservez votre évaluation gratuite et sans engagement.
            Nos moniteurs vous accueilleront pour faire le point sur vos besoins.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/reservation">
                Réserver une évaluation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/formations">
                <ArrowLeft className="h-5 w-5" />
                Voir toutes les formations
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
