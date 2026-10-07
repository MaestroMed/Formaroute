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
        question: 'Combien de temps faut-il pour obtenir le permis ?',
        answer:
          "La durée dépend de plusieurs facteurs : votre disponibilité, votre capacité d'apprentissage et le type de formation choisie. En moyenne, comptez 3 à 6 mois pour une formation classique. L'évaluation de départ permet d'estimer précisément le volume d'heures dont vous aurez besoin.",
      },
      {
        question: "Quels documents sont nécessaires pour s'inscrire ?",
        answer:
          "Pour vous inscrire, vous aurez besoin de : une pièce d'identité en cours de validité, un justificatif de domicile de moins de 6 mois, une photo d'identité numérique aux normes (e-photo), l'ASSR 2 ou l'ASR selon votre âge, et le certificat de participation à la JDC pour les 17-25 ans.",
      },
      {
        question: 'Peut-on commencer la formation avant 18 ans ?',
        answer:
          "Oui ! Vous pouvez débuter la formation dès 15 ans, notamment en conduite accompagnée (AAC). L'examen pratique est possible dès 17 ans. Avec l'AAC, la période probatoire est réduite à 2 ans au lieu de 3.",
      },
      {
        question: 'Quel est votre taux de réussite ?',
        answer:
          'Formaroute a ouvert en avril 2026. Nos premiers taux de réussite seront publiés sur la page « Nos résultats » dès que les données officielles portant sur une période complète seront disponibles.',
      },
    ],
  },
  {
    id: 'code',
    name: 'Code de la route',
    questions: [
      {
        question: 'Comment se déroule la formation au code ?',
        answer:
          'La formation au code combine des cours thématiques en salle et un entraînement sur des séries de questions, en salle ou en ligne. Des tests blancs réguliers permettent de suivre votre progression.',
      },
      {
        question: 'Combien de temps pour avoir le code ?',
        answer:
          'Avec un entraînement régulier, comptez en général 4 à 8 semaines. Le rythme dépend de votre disponibilité et de vos résultats aux tests blancs.',
      },
      {
        question: "L'examen du code est-il difficile ?",
        answer:
          "L'examen comprend 40 questions : il faut au moins 35 bonnes réponses. Avec une bonne préparation et des tests blancs réguliers, la réussite est à portée de main.",
      },
    ],
  },
  {
    id: 'permis',
    name: 'Permis B',
    questions: [
      {
        question: "Combien d'heures de conduite minimum ?",
        answer:
          "Le minimum réglementaire est de 20 heures de conduite pour le permis B en boîte manuelle et de 13 heures en boîte automatique. Le volume réellement nécessaire dépend de chacun : il est estimé lors de l'évaluation de départ.",
      },
      {
        question: 'Puis-je choisir mes horaires de conduite ?',
        answer:
          'Oui, les leçons sont planifiées avec vous selon vos disponibilités et celles de nos enseignants, en semaine et le samedi.',
      },
      {
        question: 'Où se déroulent les leçons de conduite ?',
        answer:
          'Les leçons se déroulent à Domont et dans les communes environnantes, sur des parcours variés : ville, route, voie rapide. Le lieu de départ des leçons est convenu avec votre enseignant.',
      },
      {
        question: "Que se passe-t-il si j'échoue à l'examen ?",
        answer:
          "En cas d'échec, nous analysons ensemble les points à améliorer et planifions des leçons ciblées. Une nouvelle date d'examen est demandée dès que possible ; le délai dépend des places attribuées par la préfecture.",
      },
    ],
  },
  {
    id: 'aac',
    name: 'Conduite accompagnée',
    questions: [
      {
        question: 'Quelles sont les conditions pour la conduite accompagnée ?',
        answer:
          "L'élève doit avoir au moins 15 ans, réussir le code et suivre la formation initiale en auto-école. L'accompagnateur doit être titulaire du permis B depuis au moins 5 ans sans interruption et obtenir l'accord de son assureur.",
      },
      {
        question: 'Combien de kilomètres faut-il parcourir ?',
        answer:
          "En conduite accompagnée, il faut parcourir au moins 3 000 km sur une période d'au moins 1 an. En conduite supervisée (à partir de 18 ans), c'est au moins 1 000 km sur 3 mois minimum.",
      },
      {
        question: 'Quels sont les avantages de la conduite accompagnée ?',
        answer:
          "Plus d'expérience de conduite avant l'examen, une période probatoire réduite à 2 ans, un capital de points qui augmente plus vite (3 points par an) et, souvent, une assurance plus avantageuse.",
      },
    ],
  },
  {
    id: 'financement',
    name: 'Financement',
    questions: [
      {
        question: 'Peut-on payer en plusieurs fois ?',
        answer: `Oui, nous proposons le paiement ${site.paymentPlan}. Nous trouvons ensemble la solution la plus adaptée à votre budget.`,
      },
      {
        question: 'Le CPF est-il accepté ?',
        answer: site.quality.qualiopiCertified
          ? 'Oui, nos formations au permis B sont finançables par le CPF. Nous vous accompagnons dans les démarches sur moncompteformation.gouv.fr.'
          : "Pas encore : le financement CPF nécessite la certification Qualiopi, que Formaroute est en train de préparer. Nous l'annoncerons dès son obtention.",
      },
      {
        question: "Quelles aides pour les demandeurs d'emploi ?",
        answer:
          "France Travail (ex-Pôle emploi) peut aider à financer le permis lorsqu'il favorise le retour à l'emploi. Parlez-en à votre conseiller : nous vous fournissons le devis nécessaire.",
      },
      {
        question: 'Existe-t-il des aides pour les jeunes ?',
        answer:
          'Oui : la Mission Locale (16-25 ans), certaines aides locales et le prêt « permis à 1 € par jour » (15-25 ans) peuvent aider à financer votre permis. Renseignez-vous auprès de nous sur les conditions.',
      },
    ],
  },
  {
    id: 'stage-points',
    name: 'Stage de points',
    questions: [
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
