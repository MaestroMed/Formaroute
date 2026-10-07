import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { JsonLd } from '@/components/seo/JsonLd';
import { site } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Questions fréquentes sur le permis et nos formations',
  description:
    "Les réponses à vos questions sur le code de la route, le permis B, la conduite accompagnée, le financement et l'auto-école Formaroute à Domont.",
  path: '/faq',
});

const faqCategories = [
  {
    id: 'general',
    name: 'Questions générales',
    questions: [
      {
        question: 'Comment se passe l’inscription ?',
        answer:
          'L’inscription comprend la prise de contact, l’évaluation de départ, la constitution du dossier et la signature du contrat. L’évaluation est habituellement proposée sous un jour après la demande, et la première leçon sous trois jours après l’évaluation et la finalisation de l’inscription, selon vos disponibilités et dans le respect des délais légaux applicables.',
      },
      {
        question: 'Combien de temps faut-il pour obtenir le permis ?',
        answer:
          'Cela dépend de votre progression et de vos disponibilités. Le volume prévisionnel de formation est proposé après l’évaluation de départ, puis adapté à votre progression. Aucune date d’examen ni réussite n’est garantie.',
      },
      {
        question: 'Quels documents faut-il pour s’inscrire ?',
        answer:
          'Une pièce d’identité en cours de validité, un justificatif de domicile et une photo d’identité. Les conditions détaillées d’accès et d’examen figurent dans le document Permis B, disponible à l’accueil et sur demande.',
      },
      {
        question: 'Quel est votre taux de réussite ?',
        answer:
          'Nos taux de réussite seront publiés sur la page « Nos résultats » uniquement lorsqu’ils seront réels, datés et accompagnés des effectifs et de la méthode de calcul.',
      },
    ],
  },
  {
    id: 'code',
    name: 'Code de la route',
    questions: [
      {
        question: 'Comment se déroule la préparation au code ?',
        answer:
          'Par des cours, des entraînements au code et la correction des erreurs, selon les prestations comprises dans le forfait.',
      },
      {
        question: 'Combien de temps ai-je accès aux ressources du code ?',
        answer: `L’accès aux ressources pédagogiques du code est valable ${site.code.access}. Cette durée ne correspond pas à la validité de l’examen.`,
      },
      {
        question: 'L’examen du code est-il compris dans le forfait ?',
        answer: `Non. Les frais de passage de l’examen du code, soit ${site.code.examFee} € par passage, sont réglés séparément, directement à l’organisme d’examen.`,
      },
    ],
  },
  {
    id: 'permis',
    name: 'Permis B',
    questions: [
      {
        question: 'Combien d’heures de conduite faut-il ?',
        answer:
          'Pour un premier permis B, hors cas particuliers, la formation pratique minimale est de 20 heures en manuelle ou 13 heures en automatique. Le volume prévisionnel est proposé après l’évaluation de départ et adapté à votre progression.',
      },
      {
        question: 'Combien de temps dure une leçon ?',
        answer:
          'Une leçon dure 60 minutes au total, comprenant accueil, objectifs, conduite et bilan.',
      },
      {
        question: 'Comment sont planifiées les leçons ?',
        answer: `Les leçons suivent votre planning individuel. L’accueil est ouvert ${site.hours.short}.`,
      },
      {
        question: 'Manuelle ou automatique : quelle différence ?',
        answer:
          'En boîte manuelle, vous apprenez l’embrayage et le changement de rapports. En boîte automatique, l’apprentissage se fait sur véhicule automatique et le permis est assorti de la restriction correspondante.',
      },
      {
        question: 'Les leçons se font-elles sur piste ?',
        answer:
          'Non. Les leçons sont individuelles, en présentiel, sur route, avec un enseignant autorisé et un véhicule à double commande. Aucune piste n’est utilisée.',
      },
    ],
  },
  {
    id: 'aac',
    name: 'Conduite accompagnée et supervisée',
    questions: [
      {
        question: 'Comment se déroule la conduite accompagnée (AAC) ?',
        answer:
          'Formation initiale, rendez-vous préalable avec l’accompagnateur, phase accompagnée d’au moins un an et 3 000 km, puis rendez-vous pédagogiques réglementaires.',
      },
      {
        question: 'Qu’est-ce que la conduite supervisée ?',
        answer:
          'Elle est accessible dès 18 ans sous conditions, après la formation initiale. Vous conduisez avec un accompagnateur, sans durée ni kilométrage minimaux réglementaires.',
      },
    ],
  },
  {
    id: 'financement',
    name: 'Paiement et financement',
    questions: [
      {
        question: 'Peut-on payer en plusieurs fois ?',
        answer: `Oui, le paiement est possible ${site.paymentPlan}.`,
      },
      {
        question: 'Quelles aides pour les demandeurs d’emploi ?',
        answer:
          'France Travail peut aider à financer le permis lorsqu’il favorise le retour à l’emploi. Parlez-en à votre conseiller : nous vous fournissons le devis nécessaire.',
      },
      {
        question: 'Existe-t-il des aides pour les jeunes ?',
        answer:
          'La Mission Locale (16-25 ans), certaines aides locales et le prêt « permis à 1 € par jour » (15-25 ans) peuvent aider à financer le permis. Renseignez-vous auprès de nous sur les conditions.',
      },
    ],
  },
  {
    id: 'stage-points',
    name: 'Stage de récupération de points',
    questions: [
      {
        question: 'Comment réserver un stage chez Formaroute ?',
        answer: `Le stage coûte ${site.stagePoints.price} € TTC. Contactez-nous au ${site.contact.phoneDisplay} ou via le formulaire de contact pour connaître les prochaines dates et réserver votre place. Notre centre est agréé sous le n° ${site.legal.agrementStagePoints}.`,
      },
      {
        question: 'Combien de points peut-on récupérer ?',
        answer:
          "Un stage de sensibilisation permet de récupérer jusqu'à 4 points, sans dépasser le plafond de votre permis (12 points, ou le capital maximal atteint en période probatoire).",
      },
      {
        question: 'Combien de temps dure le stage ?',
        answer:
          'Le stage dure 2 jours consécutifs (14 heures au total). Il est animé par un psychologue et un formateur titulaire du BAFM.',
      },
      {
        question: 'Quand peut-on faire un stage ?',
        answer:
          "Vous pouvez faire un stage dès que vous avez perdu des points, à condition qu'il vous en reste au moins un. Un seul stage peut être pris en compte par période d'un an.",
      },
    ],
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqCategories.flatMap((category) =>
    category.questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    }))
  ),
};

export default function FAQPage() {
  return (
    <div className="pt-20">
      <JsonLd data={faqJsonLd} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-formaroute-blue-600 to-formaroute-blue-800 py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold md:text-5xl">Questions Fréquentes</h1>
            <p className="mt-4 text-lg text-white/90">
              Retrouvez les réponses aux questions les plus fréquentes sur nos formations, le permis
              de conduire et notre auto-école.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            {faqCategories.map((category) => (
              <div key={category.id} className="mb-12">
                <h2 className="mb-6 font-heading text-2xl font-bold text-slate-900">
                  {category.name}
                </h2>
                <FAQAccordion questions={category.questions} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-slate-50">
        <div className="container-custom text-center">
          <h2 className="heading-md text-slate-900">Vous n'avez pas trouvé votre réponse ?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Notre équipe est à votre disposition pour répondre à toutes vos questions.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild>
              <Link href="/contact">
                Nous contacter
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <a href={site.contact.phoneHref}>Appeler : {site.contact.phoneDisplay}</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
