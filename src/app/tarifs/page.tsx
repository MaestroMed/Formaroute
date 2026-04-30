import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Tarifs | Prix des Formations Auto-école',
  description:
    "Découvrez nos tarifs transparents : permis B (boîte manuelle ou auto), conduite accompagnée, passerelle, forfait code, annulation. Tarifs TTC, financement CPF disponible.",
  openGraph: {
    title: 'Tarifs Auto-école Formaroute Domont',
    description: 'Prix transparents TTC - Permis B, AAC, Passerelle, Code, Annulation',
  },
};

interface ForfaitItem {
  name: string;
  subtitle?: string;
  price: number;
  includes: string[];
  popular?: boolean;
}

interface PrestationItem {
  name: string;
  price: number;
  bvaPrice?: number;
  note?: string;
}

const forfaits: ForfaitItem[] = [
  {
    name: 'Permis B Traditionnel',
    subtitle: 'Boîte manuelle',
    price: 1195,
    popular: true,
    includes: [
      'Frais administratifs',
      'Code valable 1 an + cours de code',
      'Outils pédagogiques et administratifs',
      "Livret d'apprentissage + livre et matériels de code",
      '20 leçons de conduite (50 min / leçon)',
    ],
  },
  {
    name: 'Permis B Automatique',
    subtitle: '13 leçons',
    price: 995,
    includes: [
      'Frais administratifs',
      'Code valable 1 an + cours de code',
      'Outils pédagogiques et administratifs',
      "Livret d'apprentissage + livre et matériels de code",
      '13 leçons de conduite (50 min / leçon)',
    ],
  },
  {
    name: 'Permis B Automatique',
    subtitle: '20 leçons',
    price: 1295,
    includes: [
      'Frais administratifs',
      'Code valable 1 an + cours de code',
      'Outils pédagogiques et administratifs',
      "Livret d'apprentissage + livre et matériels de code",
      '20 leçons de conduite (50 min / leçon)',
    ],
  },
  {
    name: 'Conduite Accompagnée (AAC)',
    price: 1395,
    popular: true,
    includes: [
      'Frais administratifs',
      'Code valable 1 an + cours de code',
      'Outils pédagogiques et administratifs',
      "Livret d'apprentissage + livre et matériels de code",
      '20 leçons de conduite (13 pour BVA, 50 min / leçon)',
      "Frais d'accompagnement pratique (AAC)",
      '2 RDV pédagogiques (AAC uniquement)',
    ],
  },
  {
    name: 'Passerelle',
    subtitle: 'Boîte auto vers boîte manuelle',
    price: 495,
    includes: [
      'Frais administratifs',
      '7 leçons de conduite (50 min / leçon)',
    ],
  },
  {
    name: 'Forfait Code',
    price: 195,
    includes: [
      'Frais administratifs',
      'Code valable 1 an + cours de code',
      'Outils pédagogiques et administratifs',
      'Livre et matériel de code',
    ],
  },
  {
    name: 'Forfait Annulation de Permis',
    price: 595,
    includes: [
      'Frais administratifs',
      'Code valable 1 an + cours de code',
      'Outils pédagogiques et administratifs',
      "Livret d'apprentissage + livre et matériels de code",
      '6 leçons de conduite (50 min / leçon)',
      "Frais d'accompagnement pratique",
    ],
  },
];

const prestations: PrestationItem[] = [
  { name: 'Frais administratifs', price: 130 },
  { name: 'Code valable 1 an + cours de code', price: 90 },
  {
    name: 'Kit pédagogique et administratif',
    price: 50,
    note: "Livret d'apprentissage + livre et matériels de code",
  },
  { name: 'Évaluation de départ', price: 56, bvaPrice: 60 },
  { name: '1 leçon de conduite B (50 min)', price: 56, bvaPrice: 60 },
  { name: 'Pack-Web (code en ligne)', price: 30 },
  { name: 'RDV préalable AAC', price: 112, bvaPrice: 120 },
  { name: 'RDV pédagogique AAC', price: 112, bvaPrice: 120 },
  { name: 'Attestation de suivi de formation', price: 30 },
  { name: 'Démarche ANTS', price: 30 },
  { name: "Frais d'accompagnement pratique", price: 56, bvaPrice: 60 },
];

export default function TarifsPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-formaroute-blue-600 to-formaroute-blue-800 py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold md:text-5xl">Nos Tarifs</h1>
            <p className="mt-4 text-lg text-white/80">
              Tarifs transparents et exprimés toutes taxes comprises (TTC).
              Plusieurs solutions de financement pour s'adapter à votre budget.
            </p>
          </div>
        </div>
      </section>

      {/* Forfaits */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <h2 className="mb-8 font-heading text-3xl font-bold text-slate-900">
            Forfaits Permis B
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {forfaits.map((item, idx) => (
              <div
                key={idx}
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
                <div>
                  <h3 className="font-heading text-lg font-semibold text-slate-900">
                    {item.name}
                  </h3>
                  {item.subtitle && (
                    <p className="text-sm text-slate-500">{item.subtitle}</p>
                  )}
                </div>
                <div className="mt-4">
                  <span className="font-mono text-4xl font-bold text-formaroute-blue-600">
                    {item.price} €
                  </span>
                  <span className="ml-2 text-sm text-slate-500">TTC</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {item.includes.map((inc, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-formaroute-blue-600" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prestations unitaires */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-2 font-heading text-3xl font-bold text-slate-900">
              Prestations unitaires
            </h2>
            <p className="mb-8 text-slate-600">
              À l'unité, hors forfait. <span className="font-medium">BVA</span> = boîte de
              vitesse automatique.
            </p>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <table className="w-full">
                <thead className="bg-slate-50 text-left text-sm">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-slate-700">Prestation</th>
                    <th className="px-4 py-3 text-right font-semibold text-slate-700">
                      Boîte manuelle
                    </th>
                    <th className="px-4 py-3 text-right font-semibold text-slate-700">
                      BVA
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {prestations.map((p, i) => (
                    <tr key={i} className="text-sm">
                      <td className="px-4 py-3">
                        <div className="font-medium text-slate-900">{p.name}</div>
                        {p.note && (
                          <div className="text-xs text-slate-500">{p.note}</div>
                        )}
                      </td>
                      <td className="px-4 py-3 text-right font-mono font-semibold text-slate-900">
                        {p.price} €
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-slate-600">
                        {p.bvaPrice ? `${p.bvaPrice} €` : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-center text-sm text-slate-500">
              Une documentation détaillée est disponible dans l'établissement sur simple demande.
              Tarifs exprimés toutes taxes comprises (TTC).
            </p>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-md text-slate-900">Options de financement</h2>
            <p className="mt-4 text-slate-600">
              Plusieurs solutions pour financer votre permis de conduire.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/financement/cpf"
              className="group rounded-2xl border-2 border-slate-200 bg-white p-6 transition-all hover:border-formaroute-blue-300 hover:shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-formaroute-blue-100 text-2xl">
                💳
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900">CPF</h3>
              <p className="mt-2 text-slate-600">
                Utilisez votre Compte Personnel de Formation pour financer votre permis.
              </p>
            </Link>
            <Link
              href="/financement/pole-emploi"
              className="group rounded-2xl border-2 border-slate-200 bg-white p-6 transition-all hover:border-formaroute-blue-300 hover:shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl">
                🏢
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900">Pôle Emploi</h3>
              <p className="mt-2 text-slate-600">
                Aides pour les demandeurs d'emploi souhaitant passer leur permis.
              </p>
            </Link>
            <div className="rounded-2xl border-2 border-slate-200 bg-white p-6">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
                📅
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900">
                Paiement en plusieurs fois
              </h3>
              <p className="mt-2 text-slate-600">
                Étalez le paiement de votre formation en 3, 4 ou 6 fois sans frais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-formaroute-blue-600 text-white">
        <div className="container-custom text-center">
          <Calculator className="mx-auto mb-4 h-12 w-12 text-white/80" />
          <h2 className="font-heading text-3xl font-bold">
            Besoin d'un devis personnalisé ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Contactez-nous pour obtenir un devis adapté à votre situation et découvrir
            les aides auxquelles vous avez droit.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-formaroute-blue-600 hover:bg-slate-50"
            >
              <Link href="/contact">
                Demander un devis
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
