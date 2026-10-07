import Link from 'next/link';
import { ArrowRight, CreditCard, Building2, Users, Wallet, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { site } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Financer son permis : CPF, France Travail, aides jeunes',
  description:
    'Les solutions pour financer votre permis à Domont : paiement en plusieurs fois, aides France Travail, Mission Locale, permis à 1 € par jour et CPF.',
  path: '/financement',
});

const cpfAvailable = site.quality.qualiopiCertified;

const financingOptions = [
  {
    id: 'cpf',
    icon: CreditCard,
    title: 'CPF — Compte Personnel de Formation',
    description: cpfAvailable
      ? 'Utilisez vos droits à la formation pour financer tout ou partie de votre permis B, directement sur moncompteformation.gouv.fr.'
      : "Formaroute prépare sa certification Qualiopi, indispensable pour proposer le financement CPF. Ce mode de financement n'est pas encore disponible chez nous : nous l'annoncerons ici dès l'obtention de la certification.",
    features: cpfAvailable
      ? [
          'Permis B (boîte manuelle ou automatique)',
          'Inscription sur moncompteformation.gouv.fr',
          "Participation forfaitaire obligatoire de l'État (sauf exonérations)",
          'Complément possible par paiement personnel',
        ]
      : [
          'Certification Qualiopi en cours',
          'Consultez dès maintenant vos droits sur moncompteformation.gouv.fr',
        ],
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'france-travail',
    icon: Building2,
    title: 'France Travail (ex-Pôle emploi)',
    description:
      "Demandeurs d'emploi : une aide au financement du permis peut être accordée lorsqu'il facilite votre retour à l'emploi. Parlez-en à votre conseiller France Travail.",
    features: [
      'Aide individuelle selon votre situation',
      'Devis fourni par nos soins',
      'Décision prise par votre conseiller',
    ],
    color: 'from-green-500 to-green-600',
  },
  {
    id: 'jeunes',
    icon: Users,
    title: 'Aides pour les jeunes',
    description:
      "Mission Locale (16-25 ans), aides de certaines collectivités et prêt « permis à 1 € par jour » (15-25 ans, auprès des banques partenaires de l'État, réservé aux écoles de conduite partenaires du dispositif).",
    features: [
      'Mission Locale : selon situation et projet',
      'Permis à 1 € par jour : renseignez-vous auprès de nous',
      'Aides locales : selon votre commune ou département',
    ],
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 'paiement',
    icon: Wallet,
    title: 'Paiement en plusieurs fois',
    description: `Étalez le paiement de votre formation ${site.paymentPlan}. L'échéancier est précisé dans votre contrat.`,
    features: ['Échéancier défini à l’inscription', 'Selon le forfait choisi'],
    color: 'from-orange-500 to-orange-600',
  },
];

const faqs = [
  {
    q: 'Comment connaître mes droits CPF ?',
    a: 'Les actifs (salariés, demandeurs d’emploi, indépendants) cumulent des droits CPF. Connectez-vous sur moncompteformation.gouv.fr avec FranceConnect pour consulter votre solde.',
  },
  {
    q: 'Puis-je cumuler plusieurs aides ?',
    a: 'Dans certains cas oui, par exemple une aide France Travail complétée par un paiement personnel. Nous étudions votre situation avec vous.',
  },
  {
    q: 'Combien de temps pour obtenir une aide France Travail ?',
    a: 'Le délai dépend de votre agence et de votre dossier. Demandez-nous un devis rapidement pour le transmettre à votre conseiller.',
  },
];

export default function FinancementPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-formaroute-blue-600 to-formaroute-blue-800 py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold md:text-5xl">Financez votre permis</h1>
            <p className="mt-4 text-lg text-white/90">
              Paiement échelonné, aides France Travail, aides pour les jeunes : plusieurs solutions
              existent. Nous vous aidons à trouver la vôtre.
            </p>
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2">
            {financingOptions.map((option) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.id}
                  id={option.id}
                  className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-8"
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
                  <ul className="space-y-2">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <span
                          aria-hidden="true"
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs text-green-600"
                        >
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center text-slate-900">
            Questions fréquentes sur le financement
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-slate-200 p-6">
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
            Besoin d&apos;aide pour votre financement ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Notre équipe vous accompagne dans vos démarches et vous fournit les devis nécessaires.
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
            <Button asChild size="lg" variant="outline-light">
              <a href={site.contact.phoneHref}>
                <Phone className="h-5 w-5" />
                {site.contact.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
