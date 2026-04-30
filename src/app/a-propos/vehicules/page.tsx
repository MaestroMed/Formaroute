import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Wrench,
  Sparkles,
  Settings,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Nos Véhicules | Formaroute Domont',
  description:
    "Découvrez la flotte de l'auto-école Formaroute à Domont : véhicules récents à double commande, boîte manuelle et automatique, entretenus régulièrement.",
  openGraph: {
    title: 'Nos Véhicules | Formaroute Domont',
    description: 'Flotte récente, double commande, boîte manuelle et automatique.',
  },
  alternates: {
    canonical: 'https://formaroute.fr/a-propos/vehicules',
  },
};

const vehicles = [
  {
    name: 'Citadine boîte manuelle',
    type: 'Boîte manuelle',
    description:
      "Véhicule de référence pour la formation au permis B traditionnel. Compact, agile et facile à prendre en main, idéal pour apprendre la conduite urbaine.",
    features: [
      'Double commande pédagogique',
      'Direction assistée',
      'Climatisation',
      'Aide au stationnement',
    ],
  },
  {
    name: 'Citadine boîte automatique',
    type: 'Boîte automatique (BVA)',
    description:
      "Pour la formation au permis B sur boîte automatique. Apprentissage simplifié, idéal pour se concentrer pleinement sur la route et la sécurité.",
    features: [
      'Double commande pédagogique',
      'Boîte de vitesse automatique',
      'Climatisation',
      'Caméra de recul',
    ],
  },
];

const standards = [
  {
    icon: ShieldCheck,
    title: 'Double commande',
    description:
      'Tous nos véhicules sont équipés du système de double commande, permettant à votre moniteur d\'intervenir en sécurité à tout moment.',
  },
  {
    icon: Wrench,
    title: 'Entretien rigoureux',
    description:
      "Révisions et entretiens réalisés selon le carnet constructeur. Contrôle technique à jour et vérifications hebdomadaires de sécurité.",
  },
  {
    icon: Sparkles,
    title: 'Toujours propres',
    description:
      "Habitacles nettoyés régulièrement pour vous accueillir dans les meilleures conditions. Pour votre confort et votre concentration.",
  },
  {
    icon: Settings,
    title: 'Équipements modernes',
    description:
      "Direction assistée, climatisation, aides à la conduite : nos véhicules récents vous permettent de vous former dans des conditions optimales.",
  },
];

export default function VehiculesPage() {
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
            <Link href="/a-propos" className="text-slate-500 hover:text-slate-700">
              À Propos
            </Link>
            <span className="text-slate-400">/</span>
            <span className="font-medium text-slate-900">Nos Véhicules</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-formaroute-blue-600 to-formaroute-blue-800 py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold md:text-5xl">
              Nos Véhicules
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Une flotte récente, entretenue et adaptée à votre formation.
              Boîte manuelle et automatique, double commande systématique.
            </p>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-md text-slate-900">
              Nos <span className="text-formaroute-blue-600">standards</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Sécurité, fiabilité et confort. Voilà ce que vous trouverez à bord
              de chacun de nos véhicules.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {standards.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-formaroute-blue-100">
                    <Icon className="h-7 w-7 text-formaroute-blue-600" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-bold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-600">{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vehicles list */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-md text-slate-900">
              Notre <span className="text-formaroute-blue-600">flotte</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Choisissez le véhicule adapté à votre formation. Boîte manuelle pour
              le permis traditionnel, automatique pour une approche plus accessible.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {vehicles.map((v, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <div className="aspect-video bg-gradient-to-br from-formaroute-blue-100 to-slate-100" />
                <div className="p-6">
                  <span className="badge-primary mb-3">{v.type}</span>
                  <h3 className="font-heading text-xl font-bold text-slate-900">
                    {v.name}
                  </h3>
                  <p className="mt-3 text-slate-600">{v.description}</p>
                  <ul className="mt-4 space-y-2">
                    {v.features.map((f, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-formaroute-blue-600" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-formaroute-blue-50">
        <div className="container-custom text-center">
          <h2 className="heading-md text-slate-900">
            Envie de prendre le volant ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Réservez votre évaluation de départ et démarrez votre formation
            au volant de nos véhicules.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/reservation">
                Réserver maintenant
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/a-propos">
                <ArrowLeft className="h-5 w-5" />
                Retour À Propos
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
