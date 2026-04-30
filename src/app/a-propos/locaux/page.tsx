import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Clock,
  Wifi,
  Coffee,
  Accessibility,
  Phone,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Nos Locaux | Formaroute Domont',
  description:
    "Visitez les locaux de l'auto-école Formaroute au 4 avenue Jean Jaurès à Domont (95330). Salle de code, accueil, espaces modernes et accessibles.",
  openGraph: {
    title: 'Nos Locaux | Formaroute Domont',
    description: 'Auto-école au 4 avenue Jean Jaurès à Domont (95330).',
  },
  alternates: {
    canonical: 'https://formaroute.fr/a-propos/locaux',
  },
};

const amenities = [
  {
    icon: Wifi,
    title: 'Wi-Fi gratuit',
    description:
      "Connexion haut débit pour réviser le code en ligne directement sur place.",
  },
  {
    icon: Coffee,
    title: 'Espace détente',
    description:
      "Coin café et eau à disposition pour patienter avant ou après votre cours.",
  },
  {
    icon: Accessibility,
    title: 'Accessibilité',
    description:
      "Locaux pensés pour être accessibles. N'hésitez pas à nous contacter pour vos besoins spécifiques.",
  },
  {
    icon: Clock,
    title: 'Horaires étendus',
    description:
      "Ouverts du lundi au vendredi 10h-12h / 15h-20h, samedi 10h-13h. Pour s'adapter à votre emploi du temps.",
  },
];

export default function LocauxPage() {
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
            <span className="font-medium text-slate-900">Nos Locaux</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-formaroute-blue-600 to-formaroute-blue-800 py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <MapPin className="h-4 w-4" />
              <span>4 avenue Jean Jaurès, 95330 Domont</span>
            </div>
            <h1 className="font-heading text-4xl font-bold md:text-5xl">
              Nos Locaux
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Un espace moderne et accueillant au cœur de Domont, pensé pour
              votre confort tout au long de votre formation.
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <h2 className="heading-md text-slate-900">
                Au cœur de <span className="text-formaroute-blue-600">Domont</span>
              </h2>
              <div className="mt-6 space-y-4 text-slate-600">
                <p>
                  Notre auto-école est idéalement située au 4 avenue Jean Jaurès,
                  une artère centrale de Domont, à proximité de tous les commerces
                  et facilement accessible en transport en commun comme en voiture.
                </p>
                <p>
                  L'agence se compose d'un espace d'accueil convivial, d'une salle
                  dédiée à la formation au code de la route et d'un bureau pour
                  les rendez-vous individuels avec votre moniteur.
                </p>
                <p>
                  Que vous veniez pour votre évaluation de départ, une session
                  de code ou pour planifier vos leçons de conduite, vous serez
                  accueilli dans un cadre professionnel et chaleureux.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild>
                  <a href="tel:+33134198326">
                    <Phone className="h-4 w-4" />
                    01 34 19 83 26
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Itinéraire</Link>
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <iframe
                src="https://maps.google.com/maps?q=4+avenue+Jean+Jaur%C3%A8s+Domont+95330&output=embed&hl=fr"
                className="h-80 w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Formaroute - 4 avenue Jean Jaurès, Domont"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-md text-slate-900">
              Confort et <span className="text-formaroute-blue-600">commodités</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Tout est pensé pour que votre passage chez Formaroute soit
              agréable et productif.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {amenities.map((a, i) => {
              const Icon = a.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-formaroute-blue-100">
                    <Icon className="h-7 w-7 text-formaroute-blue-600" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-bold text-slate-900">
                    {a.title}
                  </h3>
                  <p className="text-sm text-slate-600">{a.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-md text-center text-slate-900">
              Horaires d'ouverture
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="mb-3 flex items-center gap-3">
                  <Clock className="h-5 w-5 text-formaroute-blue-600" />
                  <p className="font-semibold text-slate-900">Lundi au Vendredi</p>
                </div>
                <p className="text-slate-600">10h00 – 12h00</p>
                <p className="text-slate-600">15h00 – 20h00</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="mb-3 flex items-center gap-3">
                  <Clock className="h-5 w-5 text-formaroute-blue-600" />
                  <p className="font-semibold text-slate-900">Samedi</p>
                </div>
                <p className="text-slate-600">10h00 – 13h00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-formaroute-blue-50">
        <div className="container-custom text-center">
          <h2 className="heading-md text-slate-900">Venez nous rencontrer</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Le meilleur moyen de découvrir Formaroute, c'est de pousser la porte
            de notre agence à Domont.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/reservation">
                Prendre rendez-vous
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
