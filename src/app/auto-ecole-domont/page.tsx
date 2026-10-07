import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Clock, Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formations, formatFormationPrice } from '@/data/formations';
import { site } from '@/data/site';
import { villes } from '@/data/villes';
import { buildMetadata } from '@/lib/seo';
import { FormationIcon } from '@/components/icons/FormationIcon';

export const metadata: Metadata = buildMetadata({
  title: 'Auto-école à Domont (95330)',
  description:
    'Formaroute, auto-école au 4 avenue Jean Jaurès à Domont (95330) : code de la route, permis B manuelle ou automatique, conduite accompagnée, passerelle. Tarifs TTC affichés.',
  path: '/auto-ecole-domont',
});

const features = [
  "Enseignants diplômés, titulaires de l'autorisation d'enseigner",
  "Évaluation de départ et estimation écrite du nombre d'heures",
  'Véhicules récents à double commande, boîte manuelle ou automatique',
  'Formation au code en salle et entraînement en ligne',
  'Tarifs TTC affichés, paiement en plusieurs fois',
];

export default function AutoEcoleDomontPage() {
  const mainFormations = formations.filter((f) =>
    ['code', 'permis-b', 'permis-b-auto', 'conduite-accompagnee'].includes(f.id)
  );

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-formaroute-blue-600 via-formaroute-blue-700 to-formaroute-blue-800 py-20 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" aria-hidden="true" />
        <div className="container-custom relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <MapPin className="h-4 w-4" />
              <span>95330 Domont, Val-d'Oise</span>
            </div>
            <h1 className="font-heading text-4xl font-bold md:text-5xl lg:text-6xl">
              Auto-école à Domont
            </h1>
            <p className="mt-6 text-lg text-white/90 md:text-xl">
              Votre auto-école de proximité à Domont. Formation au code de la route, permis B en
              boîte manuelle ou automatique, conduite accompagnée et perfectionnement.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
              <Button asChild size="xl" variant="outline-light">
                <a href={site.contact.phoneHref}>
                  <Phone className="h-5 w-5" />
                  {site.contact.phoneDisplay}
                </a>
              </Button>
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
                Située {site.address.street} à Domont, dans le Val-d&apos;Oise, Formaroute vous
                accompagne dans l&apos;obtention de votre permis de conduire, de l&apos;évaluation
                de départ jusqu&apos;à l&apos;examen.
              </p>
              <p className="mt-4 text-slate-600">
                Que vous soyez lycéen, étudiant, en reconversion professionnelle ou simplement à la
                recherche d'une auto-école de confiance, nous adaptons notre pédagogie à votre
                profil et à vos disponibilités.
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
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  Informations pratiques
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-formaroute-blue-600" />
                    <div>
                      <p className="font-medium text-slate-900">Adresse</p>
                      <p className="text-slate-600">{site.address.full}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 text-formaroute-blue-600" />
                    <div>
                      <p className="font-medium text-slate-900">Horaires</p>
                      {site.hours.display.map((h) => (
                        <p key={h.days} className="text-slate-600">
                          {h.days} : {h.hours}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 text-formaroute-blue-600" />
                    <div>
                      <p className="font-medium text-slate-900">Téléphone</p>
                      <a
                        href={site.contact.phoneHref}
                        className="text-slate-600 hover:text-formaroute-blue-600"
                      >
                        {site.contact.phoneDisplay}
                      </a>
                    </div>
                  </div>
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
            <h2 className="heading-lg text-slate-900">Nos formations à Domont</h2>
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
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-formaroute-blue-100 text-formaroute-blue-600">
                  <FormationIcon slug={formation.slug} className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900">
                  {formation.shortTitle}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{formation.shortDescription}</p>
                <p className="mt-4 font-mono text-xl font-bold text-formaroute-blue-600">
                  {formation.priceFrom ? 'dès ' : ''}
                  {formatFormationPrice(formation)}
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

      {/* Zones desservies */}
      <section id="zones-desservies" className="section scroll-mt-24 bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center text-slate-900">Zones desservies</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            Nos élèves viennent de Domont et des communes voisines :
          </p>
          <ul className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
            {villes.map((ville) => (
              <li
                key={ville.slug}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm"
              >
                <MapPin className="h-4 w-4 text-formaroute-blue-600" aria-hidden="true" />
                <span>{ville.name}</span>
                {ville.distance > 0 && (
                  <span className="text-slate-500">({ville.distance} km)</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-formaroute-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Prêt à passer votre permis à Domont ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Réservez votre évaluation de départ pour démarrer votre formation. Notre équipe vous
            accueillera dans nos locaux de Domont.
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
    </div>
  );
}
