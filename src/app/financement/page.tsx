import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CreditCard, Building2, Users, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Financement | CPF, Pôle Emploi, Paiement en Plusieurs Fois',
  description:
    "Découvrez toutes les solutions pour financer votre permis : CPF, aides Pôle Emploi, Mission Locale, paiement en plusieurs fois. Auto-école Formaroute à Domont.",
  openGraph: {
    title: 'Financement Permis | Formaroute Domont',
    description: 'CPF, Pôle Emploi, Mission Locale, facilités de paiement',
  },
};

const financingOptions = [
  {
    icon: CreditCard,
    title: 'CPF - Compte Personnel de Formation',
    description:
      "Utilisez vos droits à la formation pour financer tout ou partie de votre permis B. Démarches simplifiées, nous vous accompagnons.",
    link: '/financement/cpf',
    features: [
      'Permis B éligible',
      'Financement jusqu\'à 100%',
      'Inscription sur moncompteformation.gouv.fr',
      'Accompagnement personnalisé',
    ],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Building2,
    title: 'Pôle Emploi / France Travail',
    description:
      "Demandeurs d'emploi, bénéficiez de l'AIF (Aide Individuelle à la Formation) pour financer votre permis et faciliter votre retour à l'emploi.",
    link: '/financement/pole-emploi',
    features: [
      'AIF (Aide Individuelle à la Formation)',
      'Prise en charge partielle ou totale',
      'Devis personnalisé',
      'Dossier accompagné',
    ],
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Users,
    title: 'Mission Locale (16-25 ans)',
    description:
      "Jeunes de 16 à 25 ans, des aides spécifiques existent pour vous aider à financer votre permis et favoriser votre insertion professionnelle.",
    link: '/financement/mission-locale',
    features: [
      'Aides pour les 16-25 ans',
      'Selon situation et projet',
      'Accompagnement social',
      'Démarches facilitées',
    ],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Wallet,
    title: 'Paiement en Plusieurs Fois',
    description:
      "Étalez le paiement de votre formation en 3, 4 ou 6 fois sans frais. Une solution souple pour s'adapter à votre budget.",
    link: null,
    features: [
      'Sans frais supplémentaires',
      'Jusqu\'à 6 mensualités',
      'Début de formation immédiat',
      'Selon profil',
    ],
    color: 'from-orange-500 to-orange-600',
  },
];

export default function FinancementPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-formaroute-blue-600 to-formaroute-blue-800 py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold md:text-5xl">
              Financez votre Permis
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Plusieurs solutions existent pour financer votre formation.
              CPF, aides Pôle Emploi, Mission Locale ou paiement échelonné :
              trouvez celle qui vous convient.
            </p>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2">
            {financingOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white p-8"
                >
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${option.color}`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <h2 className="mb-3 font-heading text-2xl font-bold text-slate-900">
                    {option.title}
                  </h2>
                  <p className="mb-6 text-slate-600">{option.description}</p>

                  <ul className="mb-6 space-y-2">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-xs text-green-600">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {option.link ? (
                    <Button asChild className="w-full">
                      <Link href={option.link}>
                        En savoir plus
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  ) : (
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Nous contacter</Link>
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center text-slate-900">
            Questions fréquentes sur le financement
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-4">
            {[
              {
                q: "Comment savoir si je suis éligible au CPF ?",
                a: "Tous les actifs (salariés, demandeurs d'emploi, indépendants) cumulent des droits CPF. Connectez-vous sur moncompteformation.gouv.fr pour consulter votre solde.",
              },
              {
                q: "Le CPF couvre-t-il la totalité du permis ?",
                a: "Cela dépend de votre solde CPF. Si celui-ci ne couvre pas la totalité, vous pouvez compléter le reste à charge de votre poche ou cumuler avec d'autres aides.",
              },
              {
                q: "Puis-je cumuler plusieurs aides ?",
                a: "Dans certains cas oui. Par exemple, le CPF peut être complété par un financement personnel. Nous étudions votre situation pour optimiser le financement.",
              },
              {
                q: "Quels sont les délais pour obtenir un financement Pôle Emploi ?",
                a: "Comptez environ 2 à 4 semaines pour la validation d'un dossier AIF. Nous vous aidons à constituer le dossier pour accélérer la procédure.",
              },
            ].map((faq, i) => (
              <div key={i} className="rounded-xl border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900">{faq.q}</h3>
                <p className="mt-2 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-formaroute-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold">
            Besoin d'aide pour votre financement ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Notre équipe vous accompagne dans vos démarches et vous aide
            à trouver la meilleure solution de financement.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-formaroute-blue-600 hover:bg-slate-50"
            >
              <Link href="/contact">
                Nous contacter
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <a href="tel:+33XXXXXXXXX">01 XX XX XX XX</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
