import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Clock, Phone, CheckCircle2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formations } from '@/data/formations';

export const metadata: Metadata = {
  title: 'Auto-école Domont (95330) | Permis B, Code, AAC | Formaroute',
  description:
    "Auto-école à Domont (95330). Formation code de la route, permis B, conduite accompagnée, stage récupération de points. Taux de réussite 85%. Moniteurs diplômés. Réservez votre évaluation gratuite.",
  keywords: [
    'auto école domont',
    'auto ecole domont 95330',
    'permis b domont',
    'code de la route domont',
    'conduite accompagnée domont',
  ],
  openGraph: {
    title: 'Auto-école Domont | Formaroute',
    description: 'Formation permis B, code, conduite accompagnée à Domont (95)',
  },
  alternates: {
    canonical: 'https://formaroute.fr/auto-ecole-domont',
  },
};

const features = [
  'Moniteurs diplômés d\'État avec + de 10 ans d\'expérience',
  'Taux de réussite de 85% au permis B',
  'Véhicules récents à double commande',
  'Horaires flexibles : matin, midi, soir et samedi',
  'Formation au code en salle et en ligne',
  'Financement CPF et paiement en plusieurs fois',
];

const neighborhoods = [
  'Centre-ville de Domont',
  'Quartier de la Gare',
  'Les Music-Halls',
  'La Mare du Moulin',
  'Le Bois des Music-Halls',
];

export default function AutoEcoleDomontPage() {
  const mainFormations = formations.filter(
    (f) => ['code', 'permis-b', 'conduite-accompagnee', 'stage-points'].includes(f.id)
  );

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-formaroute-blue-600 via-formaroute-blue-700 to-formaroute-blue-800 py-20 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container-custom relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <MapPin className="h-4 w-4" />
              <span>95330 Domont, Val-d'Oise</span>
            </div>
            <h1 className="font-heading text-4xl font-bold md:text-5xl lg:text-6xl">
              Auto-école à Domont
            </h1>
            <p className="mt-6 text-lg text-white/80 md:text-xl">
              Votre auto-école de confiance au cœur de Domont. Formation au code de la route,
              permis B, conduite accompagnée et stage de récupération de points.
              Plus de 500 élèves formés avec un taux de réussite de 85%.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="xl"
                className="bg-white text-formaroute-blue-600 hover:bg-slate-50"
              >
                <Link href="/reservation">
                  Évaluation gratuite
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <a href="tel:+33XXXXXXXXX">
                  <Phone className="h-5 w-5" />
                  01 XX XX XX XX
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span>4.8/5 sur Google</span>
              </div>
              <div className="h-6 w-px bg-white/30" />
              <div>+500 élèves formés</div>
              <div className="h-6 w-px bg-white/30" />
              <div>85% de réussite</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="heading-lg text-slate-900">
                Votre auto-école de proximité à{' '}
                <span className="text-formaroute-blue-600">Domont</span>
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Située au cœur de Domont dans le Val-d'Oise (95), Formaroute vous accompagne
                dans l'obtention de votre permis de conduire. Notre équipe de moniteurs diplômés
                d'État met son expertise à votre service pour une formation de qualité.
              </p>
              <p className="mt-4 text-slate-600">
                Que vous soyez lycéen, étudiant, en reconversion professionnelle ou simplement
                à la recherche d'une auto-école de confiance, nous adaptons notre pédagogie
                à votre profil et à vos disponibilités.
              </p>

              <div className="mt-8 space-y-3">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-formaroute-blue-600" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Info Card */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  Informations pratiques
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-formaroute-blue-600" />
                    <div>
                      <p className="font-medium text-slate-900">Adresse</p>
                      <p className="text-slate-600">[Adresse à compléter], 95330 Domont</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 text-formaroute-blue-600" />
                    <div>
                      <p className="font-medium text-slate-900">Horaires</p>
                      <p className="text-slate-600">Lun - Ven : 9h - 19h</p>
                      <p className="text-slate-600">Samedi : 9h - 17h</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 text-formaroute-blue-600" />
                    <div>
                      <p className="font-medium text-slate-900">Téléphone</p>
                      <p className="text-slate-600">01 XX XX XX XX</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Neighborhoods */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  Zones de prise en charge à Domont
                </h3>
                <p className="mb-4 text-slate-600">
                  Nous récupérons nos élèves dans tous les quartiers de Domont :
                </p>
                <div className="flex flex-wrap gap-2">
                  {neighborhoods.map((neighborhood, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-formaroute-blue-100 px-3 py-1 text-sm text-formaroute-blue-700"
                    >
                      {neighborhood}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formations */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-lg text-slate-900">
              Nos formations à Domont
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Découvrez nos différentes formations disponibles dans notre auto-école de Domont.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {mainFormations.map((formation) => (
              <Link
                key={formation.id}
                href={`/formations/${formation.slug}`}
                className="group rounded-2xl border-2 border-slate-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-formaroute-blue-200 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-formaroute-blue-100 text-xl">
                  🚗
                </div>
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

          <div className="mt-8 text-center">
            <Link
              href="/formations"
              className="inline-flex items-center gap-2 font-semibold text-formaroute-blue-600 hover:text-formaroute-blue-700"
            >
              Voir toutes nos formations
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center text-slate-900">
            Également accessible depuis les villes voisines
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            Notre auto-école de Domont est facilement accessible depuis les communes environnantes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { name: 'Ezanville', slug: 'ezanville', distance: '2 km' },
              { name: 'Moisselles', slug: 'moisselles', distance: '3 km' },
              { name: 'Bouffémont', slug: 'bouffemont', distance: '3 km' },
              { name: 'Saint-Brice-sous-Forêt', slug: 'saint-brice-sous-foret', distance: '4 km' },
              { name: 'Montmorency', slug: 'montmorency', distance: '6 km' },
              { name: 'Eaubonne', slug: 'eaubonne', distance: '7 km' },
            ].map((city) => (
              <Link
                key={city.slug}
                href={`/auto-ecole-${city.slug}`}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm transition-all hover:border-formaroute-blue-300 hover:bg-formaroute-blue-50"
              >
                <MapPin className="h-4 w-4 text-formaroute-blue-600" />
                <span>{city.name}</span>
                <span className="text-slate-400">({city.distance})</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-formaroute-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Prêt à passer votre permis à Domont ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Réservez votre évaluation gratuite et sans engagement.
            Notre équipe vous accueillera dans nos locaux de Domont.
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
