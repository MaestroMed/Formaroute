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
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { MapEmbed } from '@/components/sections/MapEmbed';
import { site } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Nos locaux à Domont',
  description:
    "Les locaux de l'auto-école Formaroute au 4 avenue Jean Jaurès à Domont (95330) : accueil, salle de code et bureau de rendez-vous.",
  path: '/a-propos/locaux',
});

const amenities = [
  {
    icon: Wifi,
    title: 'Wi-Fi gratuit',
    description: 'Connexion haut débit pour réviser le code en ligne directement sur place.',
  },
  {
    icon: Coffee,
    title: 'Espace détente',
    description: 'Coin café et eau à disposition pour patienter avant ou après votre cours.',
  },
  {
    icon: Accessibility,
    title: 'Accessibilité',
    description:
      "Vous avez des besoins spécifiques ? Contactez notre référent handicap avant votre venue : nous organisons l'accueil adapté.",
  },
  {
    icon: Clock,
    title: 'Horaires',
    description: `Accueil : ${site.hours.short}.`,
  },
];

export default function LocauxPage() {
  return (
    <div className="pt-20">
      <Breadcrumb
        items={[
          { name: 'À propos', path: '/a-propos' },
          { name: 'Nos locaux', path: '/a-propos/locaux' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-formaroute-blue-600 to-formaroute-blue-800 py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <MapPin className="h-4 w-4" />
              <span>{site.address.full}</span>
            </div>
            <h1 className="font-heading text-4xl font-bold md:text-5xl">Nos Locaux</h1>
            <p className="mt-4 text-lg text-white/90">
              Un espace moderne et accueillant au cœur de Domont, pensé pour votre confort tout au
              long de votre formation.
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
                  Notre auto-école est située {site.address.street}, à Domont, à proximité des
                  commerces et accessible en transport en commun (gare de Domont, ligne H) comme en
                  voiture.
                </p>
                <p>
                  L'agence se compose d'un espace d'accueil convivial, d'une salle dédiée à la
                  formation au code de la route et d'un bureau pour les rendez-vous individuels avec
                  votre moniteur.
                </p>
                <p>
                  Que vous veniez pour votre évaluation de départ, une session de code ou pour
                  planifier vos leçons de conduite, vous serez accueilli dans un cadre professionnel
                  et chaleureux.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild>
                  <a href={site.contact.phoneHref}>
                    <Phone className="h-4 w-4" />
                    {site.contact.phoneDisplay}
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer">
                    Itinéraire
                  </a>
                </Button>
              </div>
            </div>

            <MapEmbed className="h-80 overflow-hidden rounded-2xl border border-slate-200" />
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
              Tout est pensé pour que votre passage chez Formaroute soit agréable et productif.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {amenities.map((a, i) => {
              const Icon = a.icon;
              return (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-formaroute-blue-100">
                    <Icon className="h-7 w-7 text-formaroute-blue-600" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-bold text-slate-900">{a.title}</h3>
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
            <h2 className="heading-md text-center text-slate-900">Horaires d&apos;ouverture</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {site.hours.display.map((h) => (
                <div key={h.days} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Clock className="h-5 w-5 text-formaroute-blue-600" aria-hidden="true" />
                    <p className="font-semibold text-slate-900">{h.days}</p>
                  </div>
                  <p className="text-slate-600">{h.hours}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-formaroute-blue-50">
        <div className="container-custom text-center">
          <h2 className="heading-md text-slate-900">Venez nous rencontrer</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Le meilleur moyen de découvrir Formaroute, c'est de pousser la porte de notre agence à
            Domont.
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
    </div>
  );
}
