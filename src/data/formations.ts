import { Formation } from '@/types';

export const formations: Formation[] = [
  {
    id: 'code',
    slug: 'code-de-la-route',
    title: 'Stage de Code Accéléré',
    shortTitle: 'Stage de Code Accéléré',
    description:
      "Préparez votre examen du code de la route avec notre forfait code complet. Cours de code en salle, accès en ligne, livret d'apprentissage et matériel pédagogique inclus.",
    shortDescription: 'Forfait code complet : cours en salle, en ligne et matériel.',
    price: 195,
    duration: 'Code valable 1 an',
    features: [
      'Frais administratifs',
      'Code valable 1 an + cours de code',
      'Outils pédagogiques et administratifs',
      'Livre et matériel de code',
      'Tests blancs en illimité',
    ],
    popular: true,
    eligibleCPF: false,
  },
  {
    id: 'permis-b',
    slug: 'permis-b',
    title: 'Permis B - Boîte Manuelle',
    shortTitle: 'Permis B Manuelle',
    description:
      "Formation traditionnelle au permis B avec boîte manuelle. 20 leçons de conduite de 50 minutes, code de la route et tout le matériel pédagogique inclus.",
    shortDescription: 'Forfait traditionnel boîte manuelle, 20 leçons de conduite.',
    price: 1195,
    hours: 20,
    features: [
      'Frais administratifs',
      'Code valable 1 an + cours de code',
      'Outils pédagogiques et administratifs',
      "Livret d'apprentissage + livre et matériels de code",
      '20 leçons de conduite (50 min / leçon)',
    ],
    popular: true,
    eligibleCPF: true,
  },
  {
    id: 'permis-b-auto',
    slug: 'permis-b-boite-auto',
    title: 'Permis B - Boîte Automatique',
    shortTitle: 'Permis B Auto',
    description:
      "Formation au permis B sur boîte automatique (BVA). Apprentissage plus rapide et plus accessible. Forfait 13 leçons à 995€ ou 20 leçons à 1295€.",
    shortDescription: 'Boîte automatique, 13 ou 20 leçons selon votre profil.',
    price: 995,
    priceFrom: true,
    hours: 13,
    features: [
      'Frais administratifs',
      'Code valable 1 an + cours de code',
      'Outils pédagogiques et administratifs',
      "Livret d'apprentissage + livre et matériels de code",
      '13 leçons (995€) ou 20 leçons (1 295€)',
    ],
    eligibleCPF: true,
  },
  {
    id: 'conduite-accompagnee',
    slug: 'conduite-accompagnee',
    title: 'Conduite Accompagnée (AAC)',
    shortTitle: 'Conduite Accompagnée',
    description:
      "L'apprentissage anticipé de la conduite dès 15 ans pour une formation progressive et sécurisée. Meilleur taux de réussite et réduction de la période probatoire.",
    shortDescription: 'Apprentissage anticipé dès 15 ans avec un accompagnateur.',
    price: 1395,
    duration: '1 à 3 ans',
    hours: 20,
    features: [
      'Frais administratifs',
      'Code valable 1 an + cours de code',
      'Outils pédagogiques et administratifs',
      "Livret d'apprentissage + livre et matériels de code",
      '20 leçons de conduite (13 pour BVA, 50 min / leçon)',
      "Frais d'accompagnement pratique (AAC)",
      '2 RDV pédagogiques (AAC uniquement)',
    ],
    popular: true,
    eligibleCPF: false,
  },
  {
    id: 'passerelle',
    slug: 'passerelle-boite-auto-manuelle',
    title: 'Passerelle Boîte Auto vers Manuelle',
    shortTitle: 'Passerelle Auto → Manuelle',
    description:
      "Vous avez le permis B sur boîte automatique et souhaitez conduire en boîte manuelle ? Le forfait passerelle vous permet de lever la restriction en 7 leçons.",
    shortDescription: 'Levée de la restriction BVA en 7 leçons.',
    price: 495,
    hours: 7,
    features: [
      'Frais administratifs',
      '7 leçons de conduite (50 min / leçon)',
      'Levée de la restriction "BVA" sur le permis',
    ],
    eligibleCPF: false,
  },
  {
    id: 'annulation-permis',
    slug: 'forfait-annulation-permis',
    title: 'Forfait Annulation de Permis',
    shortTitle: 'Annulation de Permis',
    description:
      "Vous devez repasser votre permis suite à une annulation ? Notre forfait dédié comprend code, leçons de conduite et accompagnement pratique pour repartir sur de bonnes bases.",
    shortDescription: 'Forfait dédié pour repasser le permis après annulation.',
    price: 595,
    hours: 6,
    features: [
      'Frais administratifs',
      'Code valable 1 an + cours de code',
      'Outils pédagogiques et administratifs',
      "Livret d'apprentissage + livre et matériels de code",
      '6 leçons de conduite (50 min / leçon)',
      "Frais d'accompagnement pratique",
    ],
    eligibleCPF: false,
  },
  {
    id: 'stage-points',
    slug: 'stage-recuperation-points',
    title: 'Stage de Récupération de Points',
    shortTitle: 'Stage Points',
    description:
      "Récupérez jusqu'à 4 points sur votre permis en 2 jours. Stages agréés par la Préfecture, animés par des professionnels de la sécurité routière. Disponible à partir de mai 2026.",
    shortDescription: 'Récupérez 4 points en 2 jours. Disponible dès mai 2026.',
    price: 250,
    duration: '2 jours',
    features: [
      'Récupération de 4 points',
      'Stage sur 2 jours consécutifs',
      'Agréé par la Préfecture',
      'Attestation immédiate',
      'Disponible à partir de mai 2026',
    ],
    comingSoon: true,
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
    features: [
      'Ouverture prochaine année scolaire',
      'Formations qualifiantes',
      "Accompagnement vers l'emploi",
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
      "Améliorez votre conduite avec nos leçons à l'heure : éco-conduite, conduite sur autoroute, reprise de confiance après un long arrêt.",
    shortDescription: 'Leçons à l\'unité (50 min) — 56€ manuelle / 60€ BVA.',
    price: 56,
    priceFrom: true,
    duration: '50 min / leçon',
    features: [
      '1 leçon de 50 minutes (56€ manuelle, 60€ BVA)',
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
    title: 'Évaluation de Départ',
    shortTitle: 'Évaluation',
    description:
      "Évaluation de départ obligatoire pour estimer le volume d'heures nécessaire à votre formation. Réalisée avec un moniteur diplômé.",
    shortDescription: 'Évaluation de départ — 56€ manuelle / 60€ BVA.',
    price: 56,
    priceFrom: true,
    duration: '50 minutes',
    features: [
      'Évaluation avec un moniteur diplômé',
      'Estimation du nombre d\'heures',
      'Conseils personnalisés',
      'Présentation des forfaits',
      '60€ en boîte automatique',
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
