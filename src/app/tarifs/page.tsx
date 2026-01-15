import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Tarifs | Prix des Formations Auto-école',
  description:
    "Découvrez nos tarifs transparents : code de la route, permis B, conduite accompagnée, stage points. Financement CPF et paiement en plusieurs fois disponibles.",
  openGraph: {
    title: 'Tarifs Auto-école Formaroute Domont',
    description: 'Prix transparents - Code, Permis B, AAC, Stage Points',
  },
};

interface PricingItem {
  name: string;
  price: number;
  includes?: string[];
  duration?: string;
  note?: string;
  popular?: boolean;
}

interface PricingCategory {
  name: string;
  items: PricingItem[];
}

const pricingCategories: PricingCategory[] = [
  {
    name: 'Code de la Route',
    items: [
      { name: 'Forfait code seul', price: 350, includes: ['Accès plateforme illimité', 'Sessions en salle', 'Tests blancs'] },
      { name: 'Accès code en ligne', price: 50, duration: '3 mois' },
    ],
  },
  {
    name: 'Permis B',
    items: [
      { name: 'Forfait 20h (minimum légal)', price: 1290, includes: ['Code inclus', '20h de conduite', 'Accompagnement examen'] },
      { name: 'Forfait 25h', price: 1490, includes: ['Code inclus', '25h de conduite', 'Accompagnement examen'], popular: true },
      { name: 'Forfait 30h', price: 1690, includes: ['Code inclus', '30h de conduite', 'Accompagnement examen'] },
      { name: 'Heure supplémentaire', price: 55 },
    ],
  },
  {
    name: 'Conduite Accompagnée',
    items: [
      { name: 'Forfait AAC complet', price: 1190, includes: ['Code inclus', '20h de conduite', '2 RDV pédagogiques'] },
      { name: 'RDV pédagogique', price: 90, duration: 'à l\'unité' },
    ],
  },
  {
    name: 'Autres Formations',
    items: [
      { name: 'Permis boîte automatique (13h)', price: 990 },
      { name: 'Stage récupération points', price: 250, duration: '2 jours' },
      { name: 'Heure perfectionnement', price: 55 },
      { name: 'Évaluation initiale', price: 0, note: 'Gratuite' },
    ],
  },
];

export default function TarifsPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-formaroute-blue-600 to-formaroute-blue-800 py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold md:text-5xl">
              Nos Tarifs
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Des tarifs transparents et compétitifs. Plusieurs options de financement
              disponibles pour s'adapter à votre budget.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="space-y-12">
            {pricingCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h2 className="mb-6 font-heading text-2xl font-bold text-slate-900">
                  {category.name}
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={`relative rounded-2xl border-2 bg-white p-6 ${
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
                      <h3 className="font-heading text-lg font-semibold text-slate-900">
                        {item.name}
                      </h3>
                      <div className="mt-4">
                        <span className="font-mono text-4xl font-bold text-formaroute-blue-600">
                          {item.price === 0 ? 'Gratuit' : `${item.price}€`}
                        </span>
                        {item.duration && (
                          <span className="ml-2 text-slate-500">{item.duration}</span>
                        )}
                        {item.note && (
                          <span className="ml-2 text-green-600">{item.note}</span>
                        )}
                      </div>
                      {item.includes && (
                        <ul className="mt-4 space-y-2">
                          {item.includes.map((inc, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                              <CheckCircle2 className="h-4 w-4 text-formaroute-blue-600" />
                              {inc}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-md text-slate-900">Options de financement</h2>
            <p className="mt-4 text-slate-600">
              Plusieurs solutions pour financer votre permis de conduire.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link href="/financement/cpf" className="group rounded-2xl border-2 border-slate-200 bg-white p-6 transition-all hover:border-formaroute-blue-300 hover:shadow-lg">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-formaroute-blue-100 text-2xl">
                💳
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900">CPF</h3>
              <p className="mt-2 text-slate-600">
                Utilisez votre Compte Personnel de Formation pour financer votre permis.
              </p>
            </Link>
            <Link href="/financement/pole-emploi" className="group rounded-2xl border-2 border-slate-200 bg-white p-6 transition-all hover:border-formaroute-blue-300 hover:shadow-lg">
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
              <h3 className="font-heading text-xl font-bold text-slate-900">Paiement en plusieurs fois</h3>
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
            Contactez-nous pour obtenir un devis adapté à votre situation
            et découvrir les aides auxquelles vous avez droit.
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
