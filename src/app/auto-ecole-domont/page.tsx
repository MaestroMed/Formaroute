import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Clock, Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { DocumentLinks } from '@/components/legal/DocumentLinks';
import { FormationIcon } from '@/components/icons/FormationIcon';
import {
  formations,
  formatFormationPrice,
  ENJEUX_PERMIS_B,
  OBJECTIFS_PERMIS_B,
  FORMATION_THEORIQUE,
  FORMATION_PRATIQUE,
  METHODES_PRATIQUE,
  FILIERES_PERMIS_B,
  DUREES_ACCES,
  ACCESSIBILITE,
} from '@/data/formations';
import { photos } from '@/data/photos';
import { site } from '@/data/site';
import { villes } from '@/data/villes';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Auto-école à Domont : permis B manuel, automatique, conduite accompagnée',
  description:
    'Auto-école FORMAROUTE, 4 avenue Jean Jaurès à Domont : permis B manuel et automatique, conduite accompagnée et supervisée. Programme, durées, tarifs TTC et évaluation de départ.',
  path: '/auto-ecole-domont',
});

export default function AutoEcoleDomontPage() {
  const mainFormations = formations.filter((f) =>
    ['permis-b', 'permis-b-auto', 'conduite-accompagnee', 'code'].includes(f.id)
  );

  return (
    <div className="pt-20">
      <Breadcrumb items={[{ name: 'Auto-école à Domont', path: '/auto-ecole-domont' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-formaroute-blue-600 via-formaroute-blue-700 to-formaroute-blue-800 py-16 text-white">
        <div className="container-custom">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                <MapPin className="h-4 w-4" />
                <span>{site.address.full}</span>
              </div>
              <h1 className="font-heading text-4xl font-bold md:text-5xl">Auto-école à Domont</h1>
              <p className="mt-6 text-lg text-white/90">
                Permis B manuel et automatique, conduite accompagnée et supervisée à Domont.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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
                <Button asChild size="lg" variant="outline-light">
                  <a href={site.contact.phoneHref}>
                    <Phone className="h-5 w-5" />
                    {site.contact.phoneDisplay}
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={photos.facade.src}
                alt={photos.facade.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enjeux et objectifs */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-md text-slate-900">Enjeux et objectifs du permis B</h2>
            <p className="mt-4 text-lg text-slate-700">{ENJEUX_PERMIS_B}</p>
            <p className="mt-6 font-semibold text-slate-900">
              À l&apos;issue du parcours, l&apos;élève doit être capable de :
            </p>
            <ul className="mt-3 space-y-2">
              {OBJECTIFS_PERMIS_B.map((o) => (
                <li key={o} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-formaroute-blue-600"
                    aria-hidden="true"
                  />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Programme et méthodes */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-md text-slate-900">Programme et méthodes</h2>
            <p className="mt-4 text-slate-700">{FORMATION_THEORIQUE}</p>
            <p className="mt-6 font-semibold text-slate-900">Formation pratique :</p>
            <ol className="mt-3 space-y-2">
              {FORMATION_PRATIQUE.map((step, i) => (
                <li key={step} className="flex items-start gap-3 text-slate-700">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-formaroute-blue-600 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-slate-700">{METHODES_PRATIQUE}</p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
            {FILIERES_PERMIS_B.map((f) => (
              <div
                key={f.id}
                id={f.id}
                className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="font-heading text-lg font-bold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-slate-700">{f.text}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-3xl text-slate-600">
            <p>
              Les conditions détaillées d&apos;accès et d&apos;examen figurent dans le document
              Permis B, disponible à l&apos;accueil et sur demande.
            </p>
            <div className="mt-4">
              <DocumentLinks docs={[site.documents.programmePermisB]} />
            </div>
          </div>
        </div>
      </section>

      {/* Durées et accès */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-md text-slate-900">Durées et accès</h2>
            {DUREES_ACCES.map((p) => (
              <p key={p} className="mt-4 text-slate-700">
                {p}
              </p>
            ))}
            <h3 className="mt-8 font-heading text-lg font-bold text-slate-900">Accessibilité</h3>
            <p className="mt-2 text-slate-700">{ACCESSIBILITE}</p>
          </div>
        </div>
      </section>

      {/* Formations et tarifs */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-md text-slate-900">Formations et tarifs</h2>
            <p className="mt-4 text-slate-600">
              Tarifs TTC. Paiement possible {site.paymentPlan}.{' '}
              <Link
                href="/tarifs"
                className="font-semibold text-formaroute-blue-600 hover:underline"
              >
                Voir tous les tarifs
              </Link>
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
        </div>
      </section>

      {/* Infos pratiques + zones */}
      <section id="zones-desservies" className="section scroll-mt-24 bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                Informations pratiques
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-formaroute-blue-600" />
                  <p className="text-slate-700">{site.address.full}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 text-formaroute-blue-600" />
                  <div>
                    <p className="font-medium text-slate-900">Accueil</p>
                    {site.hours.display.map((h) => (
                      <p key={h.days} className="text-slate-700">
                        {h.days} : {h.hours}
                      </p>
                    ))}
                    <p className="mt-1 text-sm text-slate-500">{site.hours.lessonsNote}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-formaroute-blue-600" />
                  <a
                    href={site.contact.phoneHref}
                    className="text-slate-700 hover:text-formaroute-blue-600"
                  >
                    {site.contact.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold text-slate-900">Zones desservies</h2>
              <p className="mt-2 text-slate-600">
                Nos élèves viennent de Domont et des communes voisines :
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {villes.map((ville) => (
                  <li
                    key={ville.slug}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700"
                  >
                    {ville.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-formaroute-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">Prêt à commencer ?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            L&apos;évaluation de départ est habituellement proposée sous un jour après la demande.
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
