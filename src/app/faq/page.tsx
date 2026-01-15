import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FAQAccordion } from '@/components/sections/FAQAccordion';

export const metadata: Metadata = {
  title: 'FAQ | Questions Fréquentes',
  description:
    "Retrouvez les réponses à toutes vos questions sur le permis de conduire, le code de la route, les tarifs et les formations proposées par l'auto-école Formaroute à Domont.",
  openGraph: {
    title: 'FAQ | Auto-école Formaroute Domont',
    description: 'Réponses à vos questions sur le permis et nos formations',
  },
};

const faqCategories = [
  {
    id: 'general',
    name: 'Questions générales',
    questions: [
      {
        question: "Combien de temps faut-il pour obtenir le permis ?",
        answer: "La durée dépend de plusieurs facteurs : votre disponibilité, votre capacité d'apprentissage et le type de formation choisie. En moyenne, comptez 3 à 6 mois pour une formation classique. Avec notre formule accélérée, c'est possible en 2 à 3 semaines.",
      },
      {
        question: "Quels documents sont nécessaires pour s'inscrire ?",
        answer: "Pour vous inscrire, vous aurez besoin de : une pièce d'identité en cours de validité, un justificatif de domicile de moins de 6 mois, une photo d'identité aux normes, et l'ASSR 2 ou l'ASR pour les moins de 21 ans.",
      },
      {
        question: "Peut-on commencer la formation avant 18 ans ?",
        answer: "Oui ! Avec la conduite accompagnée (AAC), vous pouvez débuter dès 15 ans. C'est même recommandé car le taux de réussite est plus élevé et la période probatoire est réduite à 2 ans au lieu de 3.",
      },
      {
        question: "Quel est votre taux de réussite ?",
        answer: "Notre taux de réussite au permis B est de 85% au premier passage, bien au-dessus de la moyenne nationale (environ 58%). Ce résultat est le fruit de notre pédagogie adaptée et de nos moniteurs expérimentés.",
      },
    ],
  },
  {
    id: 'code',
    name: 'Code de la route',
    questions: [
      {
        question: "Comment se déroule la formation au code ?",
        answer: "La formation au code combine des sessions en salle avec un moniteur et un accès illimité à notre plateforme en ligne. Vous pouvez vous entraîner où et quand vous voulez, et suivre votre progression en temps réel.",
      },
      {
        question: "Combien de temps pour avoir le code ?",
        answer: "En moyenne, nos élèves obtiennent leur code en 4 à 6 semaines avec un entraînement régulier. Certains y arrivent en 2-3 semaines avec une préparation intensive.",
      },
      {
        question: "L'examen du code est-il difficile ?",
        answer: "L'examen comprend 40 questions avec un maximum de 5 erreurs autorisées. Avec une bonne préparation et nos tests blancs, la réussite est à portée de main. 70% de nos élèves réussissent du premier coup.",
      },
    ],
  },
  {
    id: 'permis',
    name: 'Permis B',
    questions: [
      {
        question: "Combien d'heures de conduite minimum ?",
        answer: "Le minimum légal est de 20 heures pour le permis B classique et 13 heures pour le permis boîte automatique. En pratique, la plupart des élèves ont besoin de 25 à 35 heures selon leur progression.",
      },
      {
        question: "Puis-je choisir mes horaires de conduite ?",
        answer: "Oui, nous proposons une grande flexibilité horaire : matin, midi, après-midi, soir et même le samedi. Nous nous adaptons au maximum à votre emploi du temps.",
      },
      {
        question: "Où se déroulent les leçons de conduite ?",
        answer: "Les leçons se déroulent dans Domont et les communes environnantes, sur des parcours variés : ville, campagne, voie rapide. Nous pouvons également vous récupérer à votre domicile ou lieu de travail.",
      },
      {
        question: "Que se passe-t-il si j'échoue à l'examen ?",
        answer: "En cas d'échec, nous analysons ensemble les points à améliorer et planifions des heures supplémentaires ciblées. Le délai de représentation est généralement de 2 semaines.",
      },
    ],
  },
  {
    id: 'aac',
    name: 'Conduite accompagnée',
    questions: [
      {
        question: "Quelles sont les conditions pour la conduite accompagnée ?",
        answer: "L'élève doit avoir au moins 15 ans et avoir obtenu le code. L'accompagnateur doit avoir le permis B depuis au moins 5 ans sans annulation ni suspension dans les 5 dernières années.",
      },
      {
        question: "Combien de kilomètres faut-il parcourir ?",
        answer: "Il faut parcourir au minimum 3000 km sur une période d'au moins 1 an (ou 1000 km sur 3 mois minimum pour la conduite supervisée).",
      },
      {
        question: "Quels sont les avantages de la conduite accompagnée ?",
        answer: "Les avantages sont nombreux : meilleur taux de réussite (74% contre 58%), période probatoire réduite à 2 ans, économies sur l'assurance auto, et possibilité de passer le permis dès 17 ans.",
      },
    ],
  },
  {
    id: 'financement',
    name: 'Financement',
    questions: [
      {
        question: "Peut-on payer en plusieurs fois ?",
        answer: "Oui, nous proposons le paiement en 3, 4 ou 6 fois sans frais. Nous trouvons ensemble la solution la plus adaptée à votre budget.",
      },
      {
        question: "Le CPF est-il accepté ?",
        answer: "Oui, nos formations au permis B sont éligibles au CPF (Compte Personnel de Formation). Nous vous accompagnons dans les démarches sur moncompteformation.gouv.fr.",
      },
      {
        question: "Quelles aides pour les demandeurs d'emploi ?",
        answer: "Pôle Emploi peut financer tout ou partie de votre permis via l'AIF (Aide Individuelle à la Formation). Nous vous aidons à constituer votre dossier.",
      },
      {
        question: "Existe-t-il des aides pour les jeunes ?",
        answer: "Oui ! Le permis à 1€ par jour pour les 15-25 ans, les aides de la Mission Locale, et certaines aides régionales peuvent vous aider à financer votre permis.",
      },
    ],
  },
  {
    id: 'stage-points',
    name: 'Stage de points',
    questions: [
      {
        question: "Combien de points peut-on récupérer ?",
        answer: "Un stage de sensibilisation permet de récupérer 4 points sur votre permis, dans la limite du plafond de 12 points (ou 6 points en période probatoire).",
      },
      {
        question: "Combien de temps dure le stage ?",
        answer: "Le stage dure 2 jours consécutifs (14 heures au total). Il est animé par un psychologue et un formateur en sécurité routière.",
      },
      {
        question: "Quand peut-on faire un stage ?",
        answer: "Vous pouvez faire un stage dès que vous avez perdu des points, mais attention : un délai d'un an minimum doit s'écouler entre deux stages pour récupérer des points.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-formaroute-blue-600 to-formaroute-blue-800 py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold md:text-5xl">
              Questions Fréquentes
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Retrouvez les réponses aux questions les plus fréquentes sur nos formations,
              le permis de conduire et notre auto-école.
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
          <h2 className="heading-md text-slate-900">
            Vous n'avez pas trouvé votre réponse ?
          </h2>
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
              <a href="tel:+33XXXXXXXXX">Appeler : 01 XX XX XX XX</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
