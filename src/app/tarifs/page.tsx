import Link from 'next/link';
import { ArrowRight, CheckCircle2, Calculator, BookOpen, Laptop, Receipt } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DocumentLinks } from '@/components/legal/DocumentLinks';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/data/site';

export const metadata = buildMetadata({
  title: 'Tarifs permis B, code et conduite accompagnée à Domont',
  description:
    'Tarifs TTC de l’auto-école FORMAROUTE à Domont : permis B manuel 20 h, automatique 13 h ou 20 h, conduite accompagnée, forfait code, annulation de permis, suppléments.',
  path: '/tarifs',
});

interface ForfaitItem {
  name: string;
  subtitle?: string;
  price: number | null;
  priceLabel?: string;
  includes: string[];
  popular?: boolean;
  href: string;
}

const CODE_INCLUS = 'Formation au code et accès aux ressources (12 mois)';

const forfaits: ForfaitItem[] = [
  {
    name: 'Permis B — boîte manuelle',
    subtitle: '20 heures de conduite',
    price: 1195,
    popular: true,
    href: '/formations/permis-b',
    includes: [
      'Frais administratifs',
      CODE_INCLUS,
      'Outils pédagogiques et administratifs',
      'Livret d’apprentissage + livre et matériels de code',
      '20 heures de conduite (leçons de 60 min)',
    ],
  },
  {
    name: 'Permis B — boîte automatique',
    subtitle: '13 heures de conduite',
    price: 995,
    href: '/formations/permis-b-boite-auto',
    includes: [
      'Frais administratifs',
      CODE_INCLUS,
      'Outils pédagogiques et administratifs',
      'Livret d’apprentissage + livre et matériels de code',
      '13 heures de conduite (leçons de 60 min)',
    ],
  },
  {
    name: 'Permis B — boîte automatique',
    subtitle: '20 heures de conduite',
    price: 1295,
    href: '/formations/permis-b-boite-auto',
    includes: [
      'Frais administratifs',
      CODE_INCLUS,
      'Outils pédagogiques et administratifs',
      'Livret d’apprentissage + livre et matériels de code',
      '20 heures de conduite (leçons de 60 min)',
    ],
  },
  {
    name: 'Conduite accompagnée (AAC)',
    price: 1395,
    popular: true,
    href: '/formations/conduite-accompagnee',
    includes: [
      'Frais administratifs',
      CODE_INCLUS,
      'Outils pédagogiques et administratifs',
      'Livret d’apprentissage + livre et matériels de code',
      '20 heures de conduite (13 heures en automatique)',
      'Rendez-vous préalable avec l’accompagnateur',
      'Rendez-vous pédagogiques réglementaires',
    ],
  },
  {
    name: 'Forfait code',
    price: 195,
    href: '/formations/code-de-la-route',
    includes: [
      'Frais administratifs',
      'Cours de code et entraînements',
      'Accès aux ressources pédagogiques : 12 mois à compter de l’activation',
      'Livre et matériel de code',
      'Examen du code non inclus (30 € par passage, réglés à l’organisme d’examen)',
    ],
  },
  {
    name: 'Forfait annulation de permis',
    price: 595,
    href: '/formations/forfait-annulation-permis',
    includes: [
      'Frais administratifs',
      CODE_INCLUS,
      'Outils pédagogiques et administratifs',
      'Livret d’apprentissage + livre et matériels de code',
      '6 heures de conduite (leçons de 60 min)',
      'Accompagnement à l’examen pratique',
    ],
  },
  {
    name: 'Passerelle automatique → manuelle',
    price: null,
    priceLabel: 'Prochainement',
    href: '/formations/passerelle-boite-auto-manuelle',
    includes: ['Formation de levée de la restriction boîte automatique'],
  },
];

const supplements = [
  { name: 'Évaluation de départ', manual: '56 €', auto: '60 €' },
  { name: 'Heure de conduite complémentaire (60 min)', manual: '56 €', auto: '60 €' },
  { name: 'Accompagnement à l’examen pratique', manual: '56 €', auto: '60 €' },
];

export default function TarifsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-formaroute-blue-600 to-formaroute-blue-800 py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold md:text-5xl">Nos tarifs</h1>
            <p className="mt-4 text-lg text-white/90">
              Tarifs toutes taxes comprises (TTC). Paiement possible {site.paymentPlan}.
            </p>
          </div>
        </div>
      </section>

      {/* Forfaits */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <h2 className="mb-8 font-heading text-3xl font-bold text-slate-900">Forfaits</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {forfaits.map((item) => (
              <div
                key={`${item.name}-${item.subtitle ?? ''}`}
                className={`relative flex flex-col rounded-2xl border-2 bg-white p-6 ${
                  item.popular
                    ? 'border-formaroute-blue-500 ring-2 ring-formaroute-blue-100'
                    : 'border-slate-200'
                }`}
              >
                {item.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-formaroute-blue-600 px-4 py-1 text-sm font-medium text-white">
                    Populaire
                  </span>
                )}
                <h3 className="font-heading text-lg font-semibold text-slate-900">{item.name}</h3>
                {item.subtitle && <p className="text-sm text-slate-500">{item.subtitle}</p>}
                <div className="mt-4">
                  {item.price !== null ? (
                    <>
                      <span className="font-mono text-4xl font-bold text-formaroute-blue-600">
                        {item.price.toLocaleString('fr-FR')}&nbsp;€
                      </span>
                      <span className="ml-2 text-sm text-slate-500">TTC</span>
                    </>
                  ) : (
                    <span className="font-heading text-2xl font-bold text-slate-500">
                      {item.priceLabel}
                    </span>
                  )}
                </div>
                <ul className="mt-4 flex-1 space-y-2">
                  {item.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-formaroute-blue-600" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-formaroute-blue-600 hover:underline"
                >
                  Détail de la formation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suppléments */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-2 font-heading text-3xl font-bold text-slate-900">En supplément</h2>
            <p className="mb-8 text-slate-600">Prestations hors forfait, tarifs TTC.</p>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full">
                <caption className="sr-only">Tarifs des prestations en supplément</caption>
                <thead className="bg-slate-50 text-left text-sm">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold text-slate-700">
                      Prestation
                    </th>
                    <th scope="col" className="px-4 py-3 text-right font-semibold text-slate-700">
                      Manuelle
                    </th>
                    <th scope="col" className="px-4 py-3 text-right font-semibold text-slate-700">
                      Automatique
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {supplements.map((p) => (
                    <tr key={p.name}>
                      <td className="px-4 py-3 font-medium text-slate-900">{p.name}</td>
                      <td className="px-4 py-3 text-right font-mono font-semibold text-slate-900">
                        {p.manual}
                      </td>
                      <td className="px-4 py-3 text-right font-mono font-semibold text-slate-900">
                        {p.auto}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-900">
                      Examen du code
                      <div className="text-xs font-normal text-slate-500">
                        {site.code.examFeeNote}
                      </div>
                    </td>
                    <td
                      colSpan={2}
                      className="px-4 py-3 text-right font-mono font-semibold text-slate-900"
                    >
                      {site.code.examFee} € par passage
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Code : préparation, ressources, examen */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 font-heading text-3xl font-bold text-slate-900">
              Le code : ce qui est compris, ce qui ne l&apos;est pas
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <BookOpen className="mb-3 h-7 w-7 text-formaroute-blue-600" aria-hidden="true" />
                <h3 className="font-heading text-lg font-bold text-slate-900">
                  Préparation au code
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Cours, entraînements et correction des erreurs, selon les prestations comprises
                  dans le forfait.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <Laptop className="mb-3 h-7 w-7 text-formaroute-blue-600" aria-hidden="true" />
                <h3 className="font-heading text-lg font-bold text-slate-900">
                  Accès aux ressources
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Valable {site.code.access}. Cette durée d&apos;accès ne correspond pas à la
                  validité de l&apos;examen.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <Receipt className="mb-3 h-7 w-7 text-formaroute-blue-600" aria-hidden="true" />
                <h3 className="font-heading text-lg font-bold text-slate-900">
                  Frais d&apos;examen
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {site.code.examFee} € {site.code.examFeeNote}. Non inclus dans les forfaits.
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm text-slate-600">
              Le volume prévisionnel de formation est proposé après l&apos;évaluation de départ et
              adapté à la progression : des heures complémentaires peuvent être nécessaires. Une
              documentation détaillée est disponible dans l&apos;établissement sur simple demande.
            </p>
            <div className="mt-6">
              <DocumentLinks docs={[site.documents.tarifs, site.documents.programmePermisB]} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-formaroute-blue-600 text-white">
        <div className="container-custom text-center">
          <Calculator className="mx-auto mb-4 h-12 w-12 text-white/80" aria-hidden="true" />
          <h2 className="font-heading text-3xl font-bold">Une question sur nos tarifs ?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Paiement possible {site.paymentPlan}. Consultez aussi les{' '}
            <Link href="/financement" className="underline">
              aides au financement
            </Link>
            .
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-formaroute-blue-600 hover:bg-slate-50"
            >
              <Link href="/contact?sujet=devis">
                Demander un devis
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
