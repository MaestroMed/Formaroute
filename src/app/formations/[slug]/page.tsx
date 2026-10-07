import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Euro,
  CalendarClock,
  Target,
  ListChecks,
  Users,
  BookOpen,
  ClipboardCheck,
  Accessibility,
  Award,
  LineChart,
  Phone,
} from 'lucide-react';
import {
  formations,
  getFormationBySlug,
  formatFormationPrice,
  DELAI_ACCES,
  ACCESSIBILITE,
} from '@/data/formations';
import { site, hasResults, lessonsToHours } from '@/data/site';
import { Button } from '@/components/ui/button';
import { FormationIcon } from '@/components/icons/FormationIcon';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildMetadata } from '@/lib/seo';

interface FormationPageProps {
  params: { slug: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return formations.map((formation) => ({ slug: formation.slug }));
}

export function generateMetadata({ params }: FormationPageProps): Metadata {
  const formation = getFormationBySlug(params.slug);
  if (!formation) return { title: 'Formation non trouvée' };

  return {
    ...buildMetadata({
      title: `${formation.title} à Domont`,
      description: formation.description,
      path: `/formations/${formation.slug}`,
    }),
    // Les formations pas encore ouvertes ne sont pas indexées.
    ...(formation.comingSoon ? { robots: { index: false, follow: true } } : {}),
  };
}

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h2 className="mb-4 flex items-center gap-3 font-heading text-xl font-bold text-slate-900">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-formaroute-blue-100 text-formaroute-blue-600">
          <Icon className="h-5 w-5" />
        </span>
        {title}
      </h2>
      {children}
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-slate-700">
          <CheckCircle2
            className="mt-0.5 h-5 w-5 shrink-0 text-formaroute-blue-600"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function FormationPage({ params }: FormationPageProps) {
  const formation = getFormationBySlug(params.slug);
  if (!formation) notFound();

  const updatedAt = new Date(site.contentUpdatedAt).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const showCPF = formation.eligibleCPF && site.quality.qualiopiCertified;
  const results = site.results.indicators.filter((i) => i.rate !== null);

  const courseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: formation.title,
    description: formation.description,
    provider: { '@type': 'Organization', name: site.name, url: site.url },
    ...(formation.priceLabel
      ? {}
      : {
          offers: {
            '@type': 'Offer',
            price: formation.price,
            priceCurrency: 'EUR',
            category: 'Paid',
          },
        }),
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'onsite',
      location: { '@type': 'Place', name: site.name, address: site.address.full },
    },
  };

  return (
    <div className="pt-20">
      {!formation.comingSoon && <JsonLd data={courseJsonLd} />}
      <Breadcrumb
        items={[
          { name: 'Formations', path: '/formations' },
          { name: formation.shortTitle, path: `/formations/${formation.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-formaroute-blue-600 to-formaroute-blue-800 py-16 text-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                {formation.comingSoon && (
                  <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                    Ouverture prochaine
                  </span>
                )}
                {formation.popular && (
                  <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                    Populaire
                  </span>
                )}
                {showCPF && (
                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-medium text-green-100">
                    Éligible CPF
                  </span>
                )}
              </div>

              <h1 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl">
                {formation.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-white/90">{formation.description}</p>

              <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-white/10 p-4">
                  <Euro className="mb-2 h-6 w-6 text-white/80" aria-hidden="true" />
                  <dt className="text-sm text-white/80">
                    {formation.priceFrom ? 'À partir de' : 'Tarif TTC'}
                  </dt>
                  <dd className="font-mono text-2xl font-bold">
                    {formatFormationPrice(formation)}
                  </dd>
                </div>
                {formation.lessons && (
                  <div className="rounded-xl bg-white/10 p-4">
                    <Clock className="mb-2 h-6 w-6 text-white/80" aria-hidden="true" />
                    <dt className="text-sm text-white/80">Leçons de conduite</dt>
                    <dd className="text-xl font-bold">
                      {formation.lessons} × 50 min
                      <span className="block text-sm font-normal text-white/80">
                        soit {lessonsToHours(formation.lessons)}
                      </span>
                    </dd>
                  </div>
                )}
                {formation.duration && (
                  <div className="rounded-xl bg-white/10 p-4">
                    <CalendarClock className="mb-2 h-6 w-6 text-white/80" aria-hidden="true" />
                    <dt className="text-sm text-white/80">Durée</dt>
                    <dd className="text-xl font-bold">{formation.duration}</dd>
                  </div>
                )}
              </dl>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-formaroute-blue-600 hover:bg-slate-50"
                >
                  <Link href={formation.comingSoon ? '/contact' : '/reservation'}>
                    {formation.comingSoon
                      ? 'Être prévenu de l’ouverture'
                      : 'Réserver une évaluation'}
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

            <div className="hidden lg:flex lg:items-center">
              <div className="flex h-48 w-48 items-center justify-center rounded-3xl bg-white/10">
                <FormationIcon slug={formation.slug} className="h-24 w-24 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu du forfait */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="heading-md text-center text-slate-900">Ce qui est inclus</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {formation.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-formaroute-blue-600"
                    aria-hidden="true"
                  />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fiche formation (Qualiopi, indicateur 1) */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl">
            <h2 className="heading-md text-center text-slate-900">Fiche de la formation</h2>
            <p className="mt-2 text-center text-sm text-slate-500">Mise à jour le {updatedAt}</p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <Section icon={Target} title="Objectifs">
                <List items={formation.objectifs} />
              </Section>
              <Section icon={Users} title="Public et prérequis">
                <p className="mb-4 text-slate-700">{formation.public}</p>
                <List items={formation.prerequis} />
              </Section>
              <Section icon={ListChecks} title="Programme">
                <List items={formation.programme} />
              </Section>
              <Section icon={BookOpen} title="Méthodes et moyens pédagogiques">
                <List items={formation.methodes} />
              </Section>
              <Section icon={ClipboardCheck} title="Modalités d'évaluation">
                <List items={formation.evaluation} />
              </Section>
              <Section icon={Clock} title="Durée et délais d'accès">
                <p className="text-slate-700">{formation.dureeDetail}</p>
                <p className="mt-3 text-slate-700">{DELAI_ACCES}</p>
              </Section>
              <Section icon={Accessibility} title="Accessibilité">
                <p className="text-slate-700">{ACCESSIBILITE}</p>
                <Link
                  href="/accessibilite-handicap"
                  className="mt-3 inline-flex items-center gap-1 font-semibold text-formaroute-blue-600 hover:underline"
                >
                  Contacter notre référent handicap
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Section>
              <Section icon={Euro} title="Tarif et financement">
                <p className="text-slate-700">
                  {formation.priceFrom ? 'À partir de ' : ''}
                  <strong>{formatFormationPrice(formation)}</strong>
                  {formation.priceLabel ? '' : ' TTC'}. Détail des prestations sur la page{' '}
                  <Link
                    href="/tarifs"
                    className="font-semibold text-formaroute-blue-600 hover:underline"
                  >
                    Tarifs
                  </Link>
                  .
                </p>
                <p className="mt-3 text-slate-700">
                  {showCPF
                    ? 'Formation finançable par le CPF sur moncompteformation.gouv.fr.'
                    : formation.eligibleCPF
                      ? 'Financement CPF : en cours de certification Qualiopi, non disponible pour le moment.'
                      : 'Paiement en plusieurs fois possible, aides selon votre situation.'}{' '}
                  <Link
                    href="/financement"
                    className="font-semibold text-formaroute-blue-600 hover:underline"
                  >
                    Voir les financements
                  </Link>
                </p>
              </Section>
            </div>

            {formation.certification && (
              <div className="mt-6">
                <Section icon={Award} title="Certification visée">
                  <p className="font-medium text-slate-900">{formation.certification.nom}</p>
                  <div className="mt-4 grid gap-6 md:grid-cols-3">
                    {formation.certification.equivalences && (
                      <div>
                        <h3 className="mb-2 font-semibold text-slate-900">
                          Ce que permet le permis
                        </h3>
                        <List items={formation.certification.equivalences} />
                      </div>
                    )}
                    {formation.certification.passerelles && (
                      <div>
                        <h3 className="mb-2 font-semibold text-slate-900">Passerelles</h3>
                        <List items={formation.certification.passerelles} />
                      </div>
                    )}
                    {formation.certification.debouches && (
                      <div>
                        <h3 className="mb-2 font-semibold text-slate-900">Débouchés</h3>
                        <List items={formation.certification.debouches} />
                      </div>
                    )}
                  </div>
                </Section>
              </div>
            )}

            {formation.certification && (
              <div className="mt-6">
                <Section icon={LineChart} title="Résultats">
                  {hasResults() ? (
                    <ul className="space-y-1 text-slate-700">
                      {results.map((r) => (
                        <li key={r.label}>
                          {r.label} : <strong>{r.rate} %</strong> ({r.candidates} candidats,{' '}
                          {r.period})
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-slate-700">
                      Auto-école ouverte en avril 2026 : nos premiers taux de réussite seront
                      publiés dès que les données officielles portant sur une période complète
                      seront disponibles.
                    </p>
                  )}
                  <Link
                    href="/resultats"
                    className="mt-3 inline-flex items-center gap-1 font-semibold text-formaroute-blue-600 hover:underline"
                  >
                    Tous nos indicateurs
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Section>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-formaroute-blue-50">
        <div className="container-custom text-center">
          <h2 className="heading-md text-slate-900">Prêt à commencer votre formation ?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Réservez votre évaluation de départ : nos enseignants font le point sur vos besoins et
            estiment par écrit le volume d&apos;heures nécessaire.
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
                Toutes les formations
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
