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
  DUREES_ACCES,
  ACCESSIBILITE,
} from '@/data/formations';
import { site, hasResults } from '@/data/site';
import { DocumentLinks } from '@/components/legal/DocumentLinks';
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
    // La passerelle n'est pas encore proposée : page non indexée.
    ...(formation.id === 'passerelle' ? { robots: { index: false, follow: true } } : {}),
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
  // Bouton principal adapté à chaque activité.
  const cta =
    formation.id === 'stage-points'
      ? { href: '/contact?sujet=stage', label: 'Réserver un stage' }
      : formation.id === 'formation-moniteur'
        ? { href: '/contact?sujet=ecsr', label: 'Être informé de l’ouverture' }
        : formation.comingSoon
          ? { href: '/contact?sujet=info', label: 'Être informé' }
          : { href: '/reservation', label: 'Réserver une évaluation' };
  const isPermisB = Boolean(formation.certification);
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
                    Prochainement
                  </span>
                )}
                {formation.popular && (
                  <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                    Populaire
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
                    <dt className="text-sm text-white/80">Conduite</dt>
                    <dd className="text-xl font-bold">
                      {formation.lessons} heures
                      <span className="block text-sm font-normal text-white/80">
                        leçons de 60 min
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
                  <Link href={cta.href}>
                    {cta.label}
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

      {formation.id === 'stage-points' && (
        <section className="section bg-white pb-0">
          <div className="container-custom">
            <div className="mx-auto max-w-3xl rounded-2xl border border-formaroute-blue-200 bg-formaroute-blue-50 p-6">
              <h2 className="font-heading text-2xl font-bold text-slate-900">Prochaines dates</h2>
              {site.stagePoints.dates.length > 0 ? (
                <ul className="mt-4 space-y-2">
                  {site.stagePoints.dates.map((d) => (
                    <li
                      key={d.label}
                      className="flex items-center justify-between rounded-xl bg-white p-4"
                    >
                      <span className="font-medium text-slate-900">{d.label}</span>
                      {d.places !== undefined && (
                        <span className="text-sm text-slate-600">{d.places} places</span>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-slate-700">
                  Contactez-nous pour connaître les prochaines dates et réserver votre place :{' '}
                  <a
                    href={site.contact.phoneHref}
                    className="font-semibold text-formaroute-blue-600 hover:underline"
                  >
                    {site.contact.phoneDisplay}
                  </a>
                  .
                </p>
              )}
            </div>
          </div>
        </section>
      )}

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

      {/* Fiche formation */}
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
                {isPermisB &&
                  DUREES_ACCES.map((p) => (
                    <p key={p} className="mt-3 text-slate-700">
                      {p}
                    </p>
                  ))}
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
                  Paiement possible {site.paymentPlan}.{' '}
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

            {isPermisB && (
              <div className="mt-6">
                <DocumentLinks
                  title="Documents à télécharger"
                  docs={[site.documents.programmePermisB, site.documents.tarifs]}
                />
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
          <h2 className="heading-md text-slate-900">Une question sur cette formation ?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Appelez-nous au {site.contact.phoneDisplay} ou écrivez-nous : nous vous répondons aux
            horaires d&apos;accueil.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href={cta.href}>
                {cta.label}
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
