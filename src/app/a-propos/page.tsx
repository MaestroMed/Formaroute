import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Award, Users, Car, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'À Propos | Notre Histoire et Notre Équipe',
  description:
    "Découvrez l'histoire de Formaroute, notre équipe de moniteurs diplômés et nos valeurs. Auto-école de confiance à Domont depuis [année].",
  openGraph: {
    title: 'À Propos | Formaroute Domont',
    description: 'Notre histoire, notre équipe, nos valeurs',
  },
};

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description:
      "Nous visons l'excellence dans chaque formation avec un taux de réussite de 85% et une pédagogie adaptée à chacun.",
  },
  {
    icon: Users,
    title: 'Accompagnement',
    description:
      "Chaque élève est unique. Nous adaptons notre approche pour vous accompagner vers la réussite à votre rythme.",
  },
  {
    icon: Car,
    title: 'Modernité',
    description:
      "Véhicules récents, outils numériques et méthodes pédagogiques modernes pour une formation au top.",
  },
  {
    icon: Heart,
    title: 'Passion',
    description:
      "Notre équipe est passionnée par la transmission du savoir-conduire et la sécurité routière.",
  },
];

const team = [
  {
    name: '[Nom du Gérant]',
    role: 'Gérant & Moniteur',
    bio: "Passionné par l'enseignement de la conduite depuis plus de 15 ans, [Prénom] a fondé Formaroute avec la vision de créer une auto-école centrée sur l'élève.",
    experience: '15+ ans',
    certifications: ['Titre Pro ECSR', 'Formation continue'],
  },
  {
    name: '[Moniteur 1]',
    role: 'Moniteur Diplômé',
    bio: "Spécialisé dans l'accompagnement des conducteurs anxieux, [Prénom] sait mettre en confiance et faire progresser chaque élève.",
    experience: '8 ans',
    certifications: ['Titre Pro ECSR'],
  },
  {
    name: '[Moniteur 2]',
    role: 'Moniteur Diplômé',
    bio: "Expert de la conduite accompagnée, [Prénom] accompagne les jeunes conducteurs et leurs familles avec pédagogie et bienveillance.",
    experience: '5 ans',
    certifications: ['Titre Pro ECSR'],
  },
];

export default function AProposPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-formaroute-blue-600 to-formaroute-blue-800 py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold md:text-5xl">
              À Propos de Formaroute
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Une auto-école à taille humaine, engagée pour votre réussite
              depuis notre implantation à Domont.
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
                  Formaroute est née d'une conviction forte : chaque futur conducteur
                  mérite un accompagnement personnalisé et bienveillant pour acquérir
                  les compétences nécessaires à une conduite sûre et responsable.
                </p>
                <p>
                  Implantée au cœur de Domont, notre auto-école s'est rapidement imposée
                  comme une référence dans le Val-d'Oise grâce à notre approche centrée
                  sur l'élève et nos excellents résultats aux examens.
                </p>
                <p>
                  Aujourd'hui, nous formons chaque année des dizaines de conducteurs,
                  des plus jeunes aux plus expérimentés, avec toujours la même passion
                  et le même engagement pour leur réussite.
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-formaroute-blue-100 to-slate-100 p-12">
              <div className="text-center">
                <span className="text-6xl">🚗</span>
                <p className="mt-4 text-slate-500">Photo de l'auto-école</p>
              </div>
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
              Ces valeurs guident notre action au quotidien et notre engagement
              envers chaque élève.
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

      {/* Team Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-md text-slate-900">
              Notre <span className="text-formaroute-blue-600">Équipe</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Des moniteurs diplômés et passionnés, à votre service pour vous
              accompagner vers la réussite.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                {/* Avatar Placeholder */}
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-formaroute-blue-100 text-3xl font-bold text-formaroute-blue-600">
                  {member.name.charAt(1)}
                </div>
                <div className="text-center">
                  <h3 className="font-heading text-xl font-bold text-slate-900">
                    {member.name}
                  </h3>
                  <p className="text-formaroute-blue-600">{member.role}</p>
                  <p className="mt-4 text-sm text-slate-600">{member.bio}</p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                      {member.experience}
                    </span>
                    {member.certifications.map((cert, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-formaroute-blue-100 px-3 py-1 text-xs text-formaroute-blue-700"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/a-propos/equipe"
              className="inline-flex items-center gap-2 font-semibold text-formaroute-blue-600 hover:text-formaroute-blue-700"
            >
              Découvrir toute l'équipe
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Links to Other Pages */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/a-propos/vehicules"
              className="group rounded-2xl border-2 border-slate-200 bg-white p-6 transition-all hover:border-formaroute-blue-300 hover:shadow-lg"
            >
              <span className="text-4xl">🚗</span>
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
              <span className="text-4xl">🏢</span>
              <h3 className="mt-4 font-heading text-xl font-bold text-slate-900 group-hover:text-formaroute-blue-600">
                Nos Locaux
              </h3>
              <p className="mt-2 text-slate-600">
                Visitez nos espaces modernes et accueillants à Domont.
              </p>
            </Link>
            <Link
              href="/resultats"
              className="group rounded-2xl border-2 border-slate-200 bg-white p-6 transition-all hover:border-formaroute-blue-300 hover:shadow-lg"
            >
              <span className="text-4xl">📊</span>
              <h3 className="mt-4 font-heading text-xl font-bold text-slate-900 group-hover:text-formaroute-blue-600">
                Nos Résultats
              </h3>
              <p className="mt-2 text-slate-600">
                Consultez nos taux de réussite et statistiques.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-formaroute-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold">
            Prêt à nous rejoindre ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Venez nous rencontrer et découvrir notre auto-école lors de votre
            évaluation de départ.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="xl"
              className="bg-white text-formaroute-blue-600 hover:bg-slate-50"
            >
              <Link href="/reservation">
                Réserver une visite
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
