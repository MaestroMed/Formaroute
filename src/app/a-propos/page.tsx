import Link from 'next/link';
import { ArrowRight, Award, Users, Car, Heart, Building, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { site } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'À propos : notre auto-école et nos valeurs',
  description:
    'Formaroute, auto-école à taille humaine ouverte à Domont en avril 2026 : nos valeurs, notre pédagogie et nos enseignants diplômés.',
  path: '/a-propos',
});

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description:
      "Nous visons l'exigence dans chaque formation : évaluation de départ, progression suivie selon le référentiel officiel et examen blanc avant le permis.",
  },
  {
    icon: Users,
    title: 'Accompagnement',
    description:
      'Chaque élève est unique. Nous adaptons notre approche pour vous accompagner vers la réussite à votre rythme.',
  },
  {
    icon: Car,
    title: 'Modernité',
    description:
      'Véhicules récents, outils numériques et méthodes pédagogiques modernes pour une formation au top.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description:
      'Notre équipe est passionnée par la transmission du savoir-conduire et la sécurité routière.',
  },
];

export default function AProposPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-formaroute-blue-600 to-formaroute-blue-800 py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold md:text-5xl">À Propos de Formaroute</h1>
            <p className="mt-4 text-lg text-white/90">
              Une auto-école à taille humaine, ouverte à Domont en avril 2026 et engagée pour votre
              réussite.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="heading-md text-slate-900">
                Notre <span className="text-formaroute-blue-600">Histoire</span>
              </h2>
              <div className="mt-6 space-y-4 text-slate-600">
                <p>
                  Formaroute est née d'une conviction forte : chaque futur conducteur mérite un
                  accompagnement personnalisé et bienveillant pour acquérir les compétences
                  nécessaires à une conduite sûre et responsable.
                </p>
                <p>
                  Installée {site.address.street} à Domont depuis avril 2026, notre auto-école
                  accueille les futurs conducteurs comme ceux qui souhaitent reprendre confiance au
                  volant ou passer à la boîte manuelle.
                </p>
                <p>
                  Notre démarche : une évaluation de départ honnête, des tarifs affichés, une
                  progression suivie leçon après leçon et une préparation sérieuse à l&apos;examen.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-formaroute-blue-50 to-slate-100 p-12">
              <Image
                src="/logo/logo-512.jpg"
                alt="Logo Formaroute"
                width={320}
                height={320}
                className="h-auto w-full max-w-xs rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-md text-slate-900">
              Nos <span className="text-formaroute-blue-600">Valeurs</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Ces valeurs guident notre action au quotidien et notre engagement envers chaque élève.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-formaroute-blue-100">
                    <Icon className="h-7 w-7 text-formaroute-blue-600" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-bold text-slate-900">
                    {value.title}
                  </h3>
                  <p className="text-sm text-slate-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Équipe : affichée dès que l'équipe est renseignée dans src/data/site.ts */}
      {site.team.length > 0 && (
        <section className="section bg-white">
          <div className="container-custom">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="heading-md text-slate-900">
                Notre <span className="text-formaroute-blue-600">Équipe</span>
              </h2>
              <p className="mt-4 text-slate-600">
                Des enseignants diplômés, titulaires de l&apos;autorisation d&apos;enseigner.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {site.team.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl border border-slate-200 bg-white p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-formaroute-blue-100 text-3xl font-bold text-formaroute-blue-600">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-900">{member.name}</h3>
                  <p className="text-formaroute-blue-600">{member.role}</p>
                  <p className="mt-4 text-sm text-slate-600">{member.bio}</p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {member.diplomas.map((d) => (
                      <span
                        key={d}
                        className="rounded-full bg-formaroute-blue-100 px-3 py-1 text-xs text-formaroute-blue-700"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Links to Other Pages */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/a-propos/vehicules"
              className="group rounded-2xl border-2 border-slate-200 bg-white p-6 transition-all hover:border-formaroute-blue-300 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-formaroute-blue-100 text-formaroute-blue-600">
                <Car className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold text-slate-900 group-hover:text-formaroute-blue-600">
                Nos Véhicules
              </h3>
              <p className="mt-2 text-slate-600">
                Découvrez notre flotte de véhicules récents et bien équipés.
              </p>
            </Link>
            <Link
              href="/a-propos/locaux"
              className="group rounded-2xl border-2 border-slate-200 bg-white p-6 transition-all hover:border-formaroute-blue-300 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-formaroute-blue-100 text-formaroute-blue-600">
                <Building className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold text-slate-900 group-hover:text-formaroute-blue-600">
                Nos Locaux
              </h3>
              <p className="mt-2 text-slate-600">
                Notre agence au {site.address.street}, à Domont.
              </p>
            </Link>
            <Link
              href="/resultats"
              className="group rounded-2xl border-2 border-slate-200 bg-white p-6 transition-all hover:border-formaroute-blue-300 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-formaroute-blue-100 text-formaroute-blue-600">
                <TrendingUp className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold text-slate-900 group-hover:text-formaroute-blue-600">
                Nos Résultats
              </h3>
              <p className="mt-2 text-slate-600">
                Nos indicateurs de résultats et de satisfaction.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-formaroute-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold">Prêt à nous rejoindre ?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Venez nous rencontrer et découvrir notre auto-école lors de votre évaluation de départ.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="xl"
              className="bg-white text-formaroute-blue-600 hover:bg-slate-50"
            >
              <Link href="/reservation">
                Réserver une évaluation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
