import { Formation } from '@/types';

export const formations: Formation[] = [
  {
    id: 'code',
    slug: 'code-de-la-route',
    title: 'Stage de Code Accéléré',
    shortTitle: 'Stage de Code Accéléré',
    description:
      "Préparez votre examen du code de la route rapidement grâce à notre stage intensif. Accès illimité à notre plateforme en ligne et sessions en salle avec un moniteur diplômé.",
    shortDescription: 'Formation théorique accélérée avec accès en ligne illimité.',
    price: 350,
    priceFrom: true,
    duration: '4 à 6 semaines',
    icon: 'BookOpen',
    features: [
      'Accès illimité à la plateforme en ligne',
      'Sessions en salle avec moniteur',
      'Tests blancs illimités',
      'Suivi personnalisé de votre progression',
      'Accompagnement le jour de l\'examen',
    ],
    popular: true,
    eligibleCPF: false,
  },
  {
    id: 'permis-b',
    slug: 'permis-b',
    title: 'Permis B - Formation Complète',
    shortTitle: 'Permis B',
    description:
      "Formation complète au permis B avec nos moniteurs diplômés d'État. Véhicules récents à double commande et pédagogie adaptée à chaque élève.",
    shortDescription: 'Formation pratique complète avec véhicules récents.',
    price: 1090,
    priceFrom: true,
    hours: 20,
    icon: 'Car',
    features: [
      '20 heures de conduite minimum',
      'Véhicules récents et bien entretenus',
      'Moniteurs diplômés d\'État',
      'Flexibilité des horaires',
      'Accompagnement à l\'examen',
    ],
    popular: true,
    eligibleCPF: true,
  },
  {
    id: 'permis-b-accelere',
    slug: 'permis-b-accelere',
    title: 'Permis B Accéléré - Stage Intensif',
    shortTitle: 'Permis Accéléré',
    description:
      "Obtenez votre permis rapidement grâce à notre formation intensive. Idéal pour les personnes pressées ou en reconversion professionnelle.",
    shortDescription: 'Formation intensive pour obtenir le permis rapidement.',
    price: 1390,
    priceFrom: true,
    duration: '2 à 3 semaines',
    hours: 20,
    icon: 'Zap',
    features: [
      'Formation condensée sur 2-3 semaines',
      'Code et conduite en parallèle',
      'Passage rapide des examens',
      'Suivi personnalisé intensif',
      'Idéal pour les professionnels',
    ],
    eligibleCPF: true,
  },
  {
    id: 'conduite-accompagnee',
    slug: 'conduite-accompagnee',
    title: 'Conduite Accompagnée (AAC)',
    shortTitle: 'Conduite Accompagnée',
    description:
      "La conduite accompagnée dès 15 ans pour une formation progressive et sécurisée. Meilleur taux de réussite et réduction de la période probatoire.",
    shortDescription: 'Apprentissage anticipé dès 15 ans avec un accompagnateur.',
    price: 1350,
    priceFrom: true,
    duration: '1 à 3 ans',
    hours: 20,
    icon: 'Users',
    features: [
      'Début de formation dès 15 ans',
      '20 heures de conduite initiale',
      '3000 km minimum en accompagnement',
      'Rendez-vous pédagogiques inclus',
      'Permis à 17 ans',
    ],
    popular: true,
    eligibleCPF: false,
  },
  {
    id: 'stage-points',
    slug: 'stage-recuperation-points',
    title: 'Stage de Récupération de Points',
    shortTitle: 'Stage Points',
    description:
      "Récupérez jusqu'à 4 points sur votre permis en 2 jours. Stages agréés par la Préfecture, animés par des professionnels de la sécurité routière. Disponible à partir de mai 2026.",
    shortDescription: 'Récupérez 4 points en 2 jours de stage. Disponible à partir de mai 2026.',
    price: 250,
    duration: '2 jours',
    icon: 'RotateCcw',
    features: [
      'Récupération de 4 points',
      'Stage sur 2 jours consécutifs',
      'Agréé par la Préfecture',
      'Attestation immédiate',
      'Disponible à partir de mai 2026',
    ],
    popular: true,
    eligibleCPF: false,
  },
  {
    id: 'formation-moniteur',
    slug: 'formation-moniteur',
    title: 'Centre de Formation',
    shortTitle: 'Centre de Formation',
    description:
      "Notre centre de formation ouvrira dès la prochaine année scolaire. Formations professionnelles et qualifiantes dans le domaine de la conduite et de la sécurité routière.",
    shortDescription: 'Formations professionnelles — ouverture prochaine année scolaire.',
    price: 0,
    priceFrom: true,
    duration: 'Variable',
    icon: 'GraduationCap',
    features: [
      'Ouverture prochaine année scolaire',
      'Formations qualifiantes',
      'Accompagnement vers l\'emploi',
      'Partenariats institutionnels',
      'Éligible CPF',
    ],
    comingSoon: true,
    eligibleCPF: true,
  },
  {
    id: 'perfectionnement',
    slug: 'perfectionnement',
    title: 'Cours de Perfectionnement',
    shortTitle: 'Perfectionnement',
    description:
      "Améliorez votre conduite avec nos cours de perfectionnement. Éco-conduite, conduite sur autoroute, reprise de confiance après un long arrêt.",
    shortDescription: 'Améliorez votre conduite avec un moniteur.',
    price: 55,
    priceFrom: true,
    duration: '1 heure',
    icon: 'TrendingUp',
    features: [
      'Cours à l\'heure',
      'Éco-conduite',
      'Conduite autoroute',
      'Reprise de confiance',
      'Adaptation à un nouveau véhicule',
    ],
    eligibleCPF: false,
  },
  {
    id: 'evaluation',
    slug: 'evaluation-initiale',
    title: 'Évaluation Initiale',
    shortTitle: 'Évaluation',
    description:
      "Évaluation de départ pour estimer le nombre d'heures nécessaires à votre formation. Gratuite et sans engagement.",
    shortDescription: 'Évaluation gratuite pour estimer votre formation.',
    price: 0,
    duration: '1 heure',
    icon: 'ClipboardCheck',
    features: [
      'Évaluation gratuite',
      'Sans engagement',
      'Estimation des heures',
      'Conseils personnalisés',
      'Présentation des formules',
    ],
    eligibleCPF: false,
  },
];

export function getFormationBySlug(slug: string): Formation | undefined {
  return formations.find((f) => f.slug === slug);
}

export function getPopularFormations(): Formation[] {
  return formations.filter((f) => f.popular);
}

export function getFormationsEligibleCPF(): Formation[] {
  return formations.filter((f) => f.eligibleCPF);
}
