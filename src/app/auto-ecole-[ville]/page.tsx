import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, MapPin, Phone, CheckCircle2, Car, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { villes, getVilleBySlug } from '@/data/villes';
import { formations } from '@/data/formations';
import { formatVilleName } from '@/lib/utils';

interface VillePageProps {
  params: { ville: string };
}

export function generateStaticParams() {
  return villes
    .filter((v) => v.slug !== 'domont') // Domont has its own page
    .map((ville) => ({
      ville: ville.slug,
    }));
}

export function generateMetadata({ params }: VillePageProps): Metadata {
  const ville = getVilleBySlug(params.ville);

  if (!ville) {
    return { title: 'Page non trouvée' };
  }

  const villeName = formatVilleName(ville.name);

  return {
    title: `Auto-école près de ${villeName} | Formaroute Domont`,
    description: `Auto-école Formaroute, à ${ville.distance} km de ${villeName}. Permis B, code de la route, conduite accompagnée. Prise en charge possible à ${villeName}. Taux de réussite 85%.`,
    keywords: [
      `auto école ${ville.name.toLowerCase()}`,
      `permis b ${ville.name.toLowerCase()}`,
      `auto ecole près de ${ville.name.toLowerCase()}`,
    ],
    openGraph: {
      title: `Auto-école ${villeName} | Formaroute`,
      description: `Formation permis B, code, AAC près de ${villeName}`,
    },
    alternates: {
      canonical: `https://formaroute.fr/auto-ecole-${ville.slug}`,
    },
  };
}

export default function VillePage({ params }: VillePageProps) {
  const ville = getVilleBySlug(params.ville);

  if (!ville || ville.slug === 'domont') {
    notFound();
  }

  const villeName = formatVilleName(ville.name);
  const mainFormations = formations.filter(
    (f) => ['code', 'permis-b', 'conduite-accompagnee', 'stage-points'].includes(f.id)
  );

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
            <span className="font-medium text-slate-900">Auto-école {villeName}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-formaroute-blue-600 to-formaroute-blue-800 py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <MapPin className="h-4 w-4" />
              <span>À {ville.distance} km de {villeName}</span>
            </div>
            <h1 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl">
              Auto-école près de {villeName}
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Vous habitez {villeName} et cherchez une auto-école de qualité ?
              Formaroute à Domont est à seulement {ville.distance} km de chez vous.
              Nos moniteurs diplômés vous accompagnent vers la réussite.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-white text-formaroute-blue-600 hover:bg-slate-50"
              >
                <Link href="/reservation">
                  Réserver une évaluation
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <a href="tel:+33XXXXXXXXX">
                  <Phone className="h-5 w-5" />
                  01 XX XX XX XX
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="heading-md text-slate-900">
                Pourquoi choisir Formaroute depuis{' '}
                <span className="text-formaroute-blue-600">{villeName}</span> ?
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Notre auto-école située à Domont est facilement accessible depuis {villeName}.
                En seulement quelques minutes, vous pouvez rejoindre nos locaux pour vos
                cours de code et prendre rendez-vous pour vos leçons de conduite.
              </p>
              <p className="mt-4 text-slate-600">
                De plus, nous proposons la prise en charge de nos élèves directement à
                {villeName} pour les leçons de conduite. Plus besoin de vous déplacer,
                votre moniteur vient vous chercher !
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-formaroute-blue-100">
                    <Car className="h-5 w-5 text-formaroute-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Prise en charge à {villeName}</h3>
                    <p className="text-slate-600">
                      Votre moniteur peut venir vous chercher directement à {villeName}
                      pour vos leçons de conduite.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">85% de taux de réussite</h3>
                    <p className="text-slate-600">
                      Un taux de réussite parmi les meilleurs du Val-d'Oise.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100">
                    <Clock className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Horaires flexibles</h3>
                    <p className="text-slate-600">
                      Créneaux disponibles en semaine, le soir et le samedi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Transport Info */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  Comment venir depuis {villeName} ?
                </h3>
                {ville.transportInfo && (
                  <div className="mb-4">
                    <p className="font-medium text-slate-900">Transports</p>
                    <p className="text-slate-600">{ville.transportInfo}</p>
                  </div>
                )}
                <div>
                  <p className="font-medium text-slate-900">En voiture</p>
                  <p className="text-slate-600">
                    Environ {Math.ceil(ville.distance * 2)} minutes depuis le centre de {villeName}.
                    Parking gratuit disponible.
                  </p>
                </div>
              </div>

              {/* Neighborhoods */}
              {ville.neighborhoods && ville.neighborhoods.length > 0 && (
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="mb-4 font-heading text-xl font-bold text-slate-900">
                    Quartiers desservis à {villeName}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {ville.neighborhoods.map((neighborhood, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-formaroute-blue-100 px-3 py-1 text-sm text-formaroute-blue-700"
                      >
                        {neighborhood}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-formaroute-blue-600 p-6 text-white">
                  <p className="font-mono text-3xl font-bold">85%</p>
                  <p className="text-sm text-white/80">Taux de réussite</p>
                </div>
                <div className="rounded-2xl bg-formaroute-red-600 p-6 text-white">
                  <p className="font-mono text-3xl font-bold">{ville.distance}km</p>
                  <p className="text-sm text-white/80">De {villeName}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formations */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <h2 className="heading-md text-center text-slate-900">
            Nos formations accessibles depuis {villeName}
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {mainFormations.map((formation) => (
              <Link
                key={formation.id}
                href={`/formations/${formation.slug}`}
                className="group rounded-2xl border-2 border-slate-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-formaroute-blue-200 hover:shadow-lg"
              >
                <h3 className="font-heading text-lg font-bold text-slate-900">
                  {formation.shortTitle}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {formation.shortDescription}
                </p>
                <p className="mt-4 font-mono text-xl font-bold text-formaroute-blue-600">
                  {formation.priceFrom ? 'dès ' : ''}{formation.price}€
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-formaroute-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold">
            Vous habitez {villeName} ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Réservez votre évaluation gratuite et commencez votre formation
            avec l'auto-école de référence du Val-d'Oise.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="xl"
              className="bg-white text-formaroute-blue-600 hover:bg-slate-50"
            >
              <Link href="/reservation">
                Réserver maintenant
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
