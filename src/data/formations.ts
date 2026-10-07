import { Formation } from '@/types';

/**
 * Catalogue des formations.
 *
 * Chaque fiche porte les informations exigées par Qualiopi (indicateur 1) :
 * objectifs, prérequis, public, programme, méthodes, modalités d'évaluation,
 * durée, tarif. Les délais d'accès et l'accessibilité aux personnes en
 * situation de handicap sont communs à toutes les formations (voir plus bas).
 *
 * Les leçons de conduite durent 50 minutes (voir `site.lessonMinutes`).
 */

/** Délais d'accès communs (Qualiopi, indicateur 1). À ajuster par le gérant. */
export const DELAI_ACCES =
  "Inscription possible toute l'année (entrées et sorties permanentes). Après l'évaluation de départ et la signature du contrat, la formation théorique peut démarrer immédiatement ; les premières leçons de conduite sont planifiées selon les disponibilités, en général sous 2 à 3 semaines.";

/** Accessibilité aux personnes en situation de handicap (Qualiopi, indicateurs 1 et 26). */
export const ACCESSIBILITE =
  "Nos formations sont ouvertes aux personnes en situation de handicap. Contactez notre référent handicap avant l'inscription : nous étudions ensemble les adaptations possibles (rythme, supports, boîte automatique) et, si un véhicule aménagé est nécessaire, nous vous orientons vers une structure spécialisée.";

const METHODES_THEORIE = [
  'Cours de code thématiques en salle, animés par un enseignant diplômé',
  'Séries de tests sur supports officiels et entraînement en ligne',
  'Livre de code et outils pédagogiques fournis',
];

const METHODES_PRATIQUE = [
  "Leçons individuelles de 50 minutes avec un enseignant titulaire de l'autorisation d'enseigner",
  'Véhicule école à double commande, récent et entretenu',
  "Progression suivie dans le livret d'apprentissage selon le REMC (Référentiel pour l'éducation à une mobilité citoyenne)",
  'Circulation en ville, en agglomération, sur route et voie rapide',
];

const EVALUATION_THEORIE = [
  'Tests blancs réguliers pour mesurer la progression',
  'Examen théorique général (ETG) : 40 questions, au moins 35 bonnes réponses, passé dans un centre agréé',
];

const EVALUATION_PRATIQUE = [
  'Évaluation de départ obligatoire avant la signature du contrat',
  "Suivi des 4 compétences du REMC dans le livret d'apprentissage",
  'Bilan de compétences et examen blanc avant la présentation',
  "Épreuve pratique (ETM) d'environ 32 minutes, évaluée par un inspecteur du permis de conduire",
];

const PROGRAMME_REMC = [
  'Compétence 1 : maîtriser le maniement du véhicule dans un trafic faible ou nul',
  'Compétence 2 : appréhender la route et circuler dans des conditions normales',
  'Compétence 3 : circuler dans des conditions difficiles et partager la route avec les autres usagers',
  'Compétence 4 : pratiquer une conduite autonome, sûre et économique',
];

const CERTIF_PERMIS_B = {
  nom: "Permis de conduire de catégorie B, délivré par l'État (ministère de l'Intérieur)",
  equivalences: [
    'Conduite des véhicules de moins de 3,5 t et de 9 places maximum, conducteur compris',
    "Remorque jusqu'à 750 kg (au-delà, sous conditions : formation B96 ou permis BE)",
  ],
  passerelles: [
    'Permis B boîte automatique vers boîte manuelle : formation de 7 heures, sans nouvel examen',
    'Extension B96 ou BE pour tracter une remorque plus lourde',
  ],
  debouches: [
    'Autonomie dans les déplacements personnels et professionnels',
    "Accès aux emplois nécessitant le permis B et prérequis à d'autres catégories (C, D…)",
  ],
};

export const formations: Formation[] = [
  {
    id: 'code',
    slug: 'code-de-la-route',
    title: 'Stage de Code Accéléré',
    shortTitle: 'Stage de Code Accéléré',
    description:
      "Préparez l'examen théorique du code de la route avec notre forfait complet : cours de code en salle, entraînement en ligne, livre de code et tests blancs en illimité.",
    shortDescription: 'Forfait code complet : cours en salle, entraînement et matériel.',
    price: 195,
    duration: 'Accès 1 an',
    features: [
      'Frais administratifs',
      'Code valable 1 an + cours de code',
      'Outils pédagogiques et administratifs',
      'Livre et matériel de code',
      'Tests blancs en illimité',
    ],
    popular: true,
    eligibleCPF: false,
    objectifs: [
      'Connaître les règles de circulation et la signalisation',
      'Comprendre les risques routiers et adopter les bons comportements',
      "Réussir l'examen théorique général (ETG)",
    ],
    prerequis: [
      'Avoir au moins 15 ans',
      "Pièce d'identité, justificatif de domicile, photo d'identité numérique",
      "ASSR 2 ou ASR selon l'âge, et certificat de participation à la JDC pour les 17-25 ans",
    ],
    public:
      'Toute personne souhaitant préparer le code de la route, en vue du permis B ou de la conduite accompagnée.',
    programme: [
      'Dispositions légales en matière de circulation routière',
      'Le conducteur, la route, les autres usagers',
      'Réglementation générale et divers',
      'Premiers secours, précautions nécessaires à la descente du véhicule',
      'Mécanique et équipements, sécurité du passager et du véhicule',
      "Respect de l'environnement et éco-conduite",
    ],
    methodes: METHODES_THEORIE,
    evaluation: EVALUATION_THEORIE,
    dureeDetail:
      "Accès aux cours et à l'entraînement pendant 1 an. Rythme libre : la plupart des élèves sont prêts en 4 à 8 semaines avec un entraînement régulier.",
    certification: {
      nom: "Examen théorique général (ETG), valable 5 ans pour se présenter à l'épreuve pratique",
    },
  },
  {
    id: 'permis-b',
    slug: 'permis-b',
    title: 'Permis B - Boîte Manuelle',
    shortTitle: 'Permis B Manuelle',
    description:
      'Formation traditionnelle au permis B en boîte manuelle : 20 leçons de conduite de 50 minutes, formation au code et tout le matériel pédagogique inclus.',
    shortDescription: 'Forfait traditionnel boîte manuelle, 20 leçons de conduite.',
    price: 1195,
    lessons: 20,
    features: [
      'Frais administratifs',
      'Code valable 1 an + cours de code',
      'Outils pédagogiques et administratifs',
      "Livret d'apprentissage + livre et matériels de code",
      '20 leçons de conduite (50 min / leçon)',
    ],
    popular: true,
    eligibleCPF: true,
    objectifs: [
      'Acquérir les 4 compétences du REMC',
      'Conduire de façon autonome, sûre et respectueuse des autres usagers',
      "Réussir l'épreuve pratique du permis B",
    ],
    prerequis: [
      "Avoir au moins 15 ans pour commencer la formation, 17 ans pour l'examen pratique",
      'Évaluation de départ réalisée',
      "Pièce d'identité, justificatif de domicile, photo d'identité numérique, ASSR 2 / ASR et JDC selon l'âge",
    ],
    public: 'Toute personne souhaitant obtenir le permis B sur véhicule à boîte manuelle.',
    programme: PROGRAMME_REMC,
    methodes: [...METHODES_THEORIE, ...METHODES_PRATIQUE],
    evaluation: [...EVALUATION_THEORIE, ...EVALUATION_PRATIQUE],
    dureeDetail:
      "20 leçons de conduite de 50 minutes incluses. Le volume réel dépend de l'évaluation de départ ; des leçons complémentaires peuvent être nécessaires. Durée moyenne de formation : 3 à 6 mois.",
    certification: CERTIF_PERMIS_B,
  },
  {
    id: 'permis-b-auto',
    slug: 'permis-b-boite-auto',
    title: 'Permis B - Boîte Automatique',
    shortTitle: 'Permis B Auto',
    description:
      'Formation au permis B sur boîte automatique (BVA) : apprentissage plus rapide, concentré sur la circulation. Forfait 13 leçons à 995 € ou 20 leçons à 1 295 €.',
    shortDescription: 'Boîte automatique, 13 ou 20 leçons selon votre profil.',
    price: 995,
    priceFrom: true,
    lessons: 13,
    features: [
      'Frais administratifs',
      'Code valable 1 an + cours de code',
      'Outils pédagogiques et administratifs',
      "Livret d'apprentissage + livre et matériels de code",
      '13 leçons (995 €) ou 20 leçons (1 295 €), 50 min / leçon',
    ],
    eligibleCPF: true,
    objectifs: [
      'Acquérir les 4 compétences du REMC sur véhicule automatique',
      'Conduire de façon autonome et sûre',
      "Réussir l'épreuve pratique du permis B (mention boîte automatique)",
    ],
    prerequis: [
      "Avoir au moins 15 ans pour commencer la formation, 17 ans pour l'examen pratique",
      'Évaluation de départ réalisée',
      "Pièce d'identité, justificatif de domicile, photo d'identité numérique, ASSR 2 / ASR et JDC selon l'âge",
    ],
    public:
      "Toute personne souhaitant un apprentissage simplifié, notamment en cas de difficulté avec l'embrayage ou de besoin d'obtenir le permis rapidement.",
    programme: PROGRAMME_REMC,
    methodes: [...METHODES_THEORIE, ...METHODES_PRATIQUE],
    evaluation: [...EVALUATION_THEORIE, ...EVALUATION_PRATIQUE],
    dureeDetail:
      "13 ou 20 leçons de conduite de 50 minutes selon le forfait. Le volume réel dépend de l'évaluation de départ. Durée moyenne de formation : 2 à 4 mois.",
    certification: {
      ...CERTIF_PERMIS_B,
      nom: "Permis de conduire de catégorie B limité aux véhicules à boîte automatique, délivré par l'État",
    },
  },
  {
    id: 'conduite-accompagnee',
    slug: 'conduite-accompagnee',
    title: 'Conduite Accompagnée (AAC)',
    shortTitle: 'Conduite Accompagnée',
    description:
      "L'apprentissage anticipé de la conduite dès 15 ans pour une formation progressive : une période de conduite avec un accompagnateur, puis l'examen et une période probatoire réduite à 2 ans.",
    shortDescription: 'Apprentissage anticipé dès 15 ans avec un accompagnateur.',
    price: 1395,
    duration: '1 à 3 ans',
    lessons: 20,
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
    objectifs: [
      'Acquérir les compétences du REMC pendant la formation initiale',
      'Gagner en expérience grâce à au moins 3 000 km de conduite accompagnée',
      "Réussir l'épreuve pratique dès 17 ans et bénéficier d'une période probatoire réduite",
    ],
    prerequis: [
      'Avoir au moins 15 ans',
      "Accompagnateur titulaire du permis B depuis au moins 5 ans sans interruption, avec l'accord de son assureur",
      'Évaluation de départ réalisée',
    ],
    public: 'Jeunes à partir de 15 ans et leur(s) accompagnateur(s).',
    programme: [
      'Formation théorique et examen du code (ETG)',
      'Formation initiale : 20 leçons (13 en boîte automatique) selon le REMC',
      "Rendez-vous préalable avec l'accompagnateur et délivrance de l'attestation de fin de formation initiale",
      'Conduite accompagnée : au moins 3 000 km sur au moins 1 an',
      'Deux rendez-vous pédagogiques en cours de conduite accompagnée',
    ],
    methodes: [
      ...METHODES_THEORIE,
      ...METHODES_PRATIQUE,
      "Implication de l'accompagnateur lors des rendez-vous pédagogiques",
    ],
    evaluation: [...EVALUATION_THEORIE, ...EVALUATION_PRATIQUE],
    dureeDetail:
      "Formation initiale de 20 leçons de 50 minutes (13 en BVA), puis au moins 1 an de conduite accompagnée. L'examen pratique est possible dès 17 ans.",
    certification: {
      ...CERTIF_PERMIS_B,
      debouches: ['Période probatoire de 2 ans au lieu de 3', ...CERTIF_PERMIS_B.debouches],
    },
  },
  {
    id: 'passerelle',
    slug: 'passerelle-boite-auto-manuelle',
    title: 'Passerelle Boîte Auto vers Manuelle',
    shortTitle: 'Passerelle Auto → Manuelle',
    description:
      "Vous avez le permis B limité à la boîte automatique et souhaitez conduire en boîte manuelle ? La formation passerelle permet de lever la restriction, sans repasser d'examen.",
    shortDescription: 'Levée de la restriction boîte automatique, sans nouvel examen.',
    price: 495,
    lessons: 7,
    features: [
      'Frais administratifs',
      '7 leçons de conduite (50 min / leçon)',
      'Levée de la restriction "BVA" sur le permis',
    ],
    eligibleCPF: false,
    objectifs: [
      "Maîtriser le maniement d'un véhicule à boîte manuelle (embrayage, passage des rapports)",
      'Circuler en sécurité en boîte manuelle dans toutes les situations',
      "Obtenir l'attestation de suivi de formation pour lever la restriction",
    ],
    prerequis: ['Être titulaire du permis B limité à la boîte automatique depuis au moins 3 mois'],
    public: 'Titulaires du permis B boîte automatique.',
    programme: [
      'Séquence hors circulation : démarrage, passage des rapports, arrêt',
      'Séquence en circulation : agglomération, route, voie rapide',
      "Bilan et délivrance de l'attestation de suivi de formation",
    ],
    methodes: METHODES_PRATIQUE,
    evaluation: [
      "Évaluation continue par l'enseignant",
      "Attestation de suivi de formation à présenter à l'ANTS pour retirer la mention",
    ],
    dureeDetail: '7 leçons de conduite de 50 minutes.',
    certification: {
      nom: 'Levée de la restriction « boîte automatique » (code 78) du permis B',
    },
  },
  {
    id: 'annulation-permis',
    slug: 'forfait-annulation-permis',
    title: 'Forfait Annulation de Permis',
    shortTitle: 'Annulation de Permis',
    description:
      'Vous devez repasser votre permis suite à une annulation ou une invalidation ? Notre forfait dédié comprend code, leçons de conduite et accompagnement pratique pour repartir sur de bonnes bases.',
    shortDescription: 'Forfait dédié pour repasser le permis après annulation.',
    price: 595,
    lessons: 6,
    features: [
      'Frais administratifs',
      'Code valable 1 an + cours de code',
      'Outils pédagogiques et administratifs',
      "Livret d'apprentissage + livre et matériels de code",
      '6 leçons de conduite (50 min / leçon)',
      "Frais d'accompagnement pratique",
    ],
    eligibleCPF: false,
    objectifs: [
      'Remettre à jour ses connaissances du code de la route',
      'Corriger ses habitudes de conduite',
      'Réussir les épreuves nécessaires pour récupérer le permis',
    ],
    prerequis: [
      "Fin de la période d'interdiction de solliciter un nouveau permis",
      "Avis médical favorable et tests psychotechniques lorsqu'ils sont exigés",
    ],
    public: 'Conducteurs dont le permis a été annulé ou invalidé.',
    programme: [
      "Révision du code et préparation à l'ETG",
      'Leçons de remise à niveau selon les 4 compétences du REMC',
      "Accompagnement à l'examen pratique si celui-ci est requis",
    ],
    methodes: [...METHODES_THEORIE, ...METHODES_PRATIQUE],
    evaluation: [...EVALUATION_THEORIE, ...EVALUATION_PRATIQUE],
    dureeDetail:
      '6 leçons de conduite de 50 minutes incluses ; volume ajusté après évaluation de départ.',
    certification: CERTIF_PERMIS_B,
  },
  {
    id: 'stage-points',
    slug: 'stage-recuperation-points',
    title: 'Stage de Récupération de Points',
    shortTitle: 'Stage Points',
    description:
      "Récupérez jusqu'à 4 points sur votre permis en 2 jours. Stage de sensibilisation à la sécurité routière, animé par un psychologue et un formateur titulaire du BAFM. Ouverture prochaine : inscrivez-vous pour être prévenu.",
    shortDescription: "Récupérez jusqu'à 4 points en 2 jours. Ouverture prochaine.",
    price: 250,
    duration: '2 jours (14 heures)',
    features: [
      "Récupération jusqu'à 4 points",
      'Stage sur 2 jours consécutifs (14 heures)',
      'Centre agréé par la Préfecture',
      'Attestation de stage remise en fin de stage',
    ],
    comingSoon: true,
    eligibleCPF: false,
    objectifs: [
      'Analyser les facteurs de risque et ses propres comportements de conduite',
      "Récupérer jusqu'à 4 points dans la limite du plafond du permis",
    ],
    prerequis: [
      "Être titulaire d'un permis de conduire en cours de validité",
      "Ne pas avoir suivi de stage de récupération de points depuis moins d'un an",
    ],
    public:
      'Conducteurs souhaitant récupérer des points, volontairement ou sur obligation (période probatoire).',
    programme: [
      'Accidentologie et facteurs de risque',
      'Vitesse, alcool, stupéfiants, distracteurs',
      'Travail en groupe sur les situations de conduite',
    ],
    methodes: [
      'Stage collectif en salle, animé par un psychologue et un formateur titulaire du BAFM',
      'Échanges et travaux de groupe, sans examen',
    ],
    evaluation: [
      'Présence obligatoire aux 2 jours complets',
      'Attestation de stage transmise à la préfecture',
    ],
    dureeDetail: '2 jours consécutifs, 14 heures au total.',
  },
  {
    id: 'formation-moniteur',
    slug: 'formation-moniteur',
    title: 'Centre de Formation Professionnelle',
    shortTitle: 'Centre de Formation',
    description:
      'Notre centre de formation professionnelle ouvrira prochainement. Formations qualifiantes dans le domaine de la conduite et de la sécurité routière.',
    shortDescription: 'Formations professionnelles — ouverture prochaine.',
    price: 0,
    priceLabel: 'Sur devis',
    duration: 'Selon la formation',
    features: ['Ouverture prochaine', 'Formations qualifiantes', "Accompagnement vers l'emploi"],
    comingSoon: true,
    eligibleCPF: false,
    objectifs: ["Programme détaillé publié à l'ouverture du centre"],
    prerequis: ["Communiqués à l'ouverture"],
    public: 'Adultes en reconversion ou en évolution professionnelle.',
    programme: ["Communiqué à l'ouverture"],
    methodes: ["Communiquées à l'ouverture"],
    evaluation: ["Communiquées à l'ouverture"],
    dureeDetail: 'Selon la formation.',
  },
  {
    id: 'perfectionnement',
    slug: 'perfectionnement',
    title: 'Cours de Perfectionnement',
    shortTitle: 'Perfectionnement',
    description:
      "Améliorez votre conduite avec nos leçons à l'unité : éco-conduite, conduite sur autoroute, reprise de confiance après un long arrêt.",
    shortDescription: "Leçons à l'unité (50 min) — 56 € manuelle / 60 € BVA.",
    price: 56,
    priceFrom: true,
    duration: '50 min / leçon',
    features: [
      '1 leçon de 50 minutes (56 € manuelle, 60 € BVA)',
      'Éco-conduite',
      'Conduite autoroute',
      'Reprise de confiance',
      'Adaptation à un nouveau véhicule',
    ],
    eligibleCPF: false,
    objectifs: [
      'Reprendre confiance au volant',
      'Travailler une situation précise (autoroute, ville dense, stationnement…)',
      'Adopter une conduite plus économique et plus sûre',
    ],
    prerequis: ['Être titulaire du permis B'],
    public:
      'Conducteurs titulaires du permis souhaitant se perfectionner ou reprendre la conduite.',
    programme: [
      'Bilan de conduite en début de première leçon',
      'Exercices ciblés selon vos objectifs',
      'Conseils personnalisés en fin de séance',
    ],
    methodes: METHODES_PRATIQUE,
    evaluation: ['Bilan oral en fin de leçon et conseils de progression'],
    dureeDetail: 'Leçons de 50 minutes, nombre libre selon vos besoins.',
  },
  {
    id: 'evaluation',
    slug: 'evaluation-initiale',
    title: 'Évaluation de Départ',
    shortTitle: 'Évaluation',
    description:
      "Évaluation de départ obligatoire avant toute formation à la conduite. Réalisée en voiture avec un enseignant diplômé, elle permet d'estimer le volume d'heures nécessaire à votre formation.",
    shortDescription: 'Évaluation de départ — 56 € manuelle / 60 € BVA.',
    price: 56,
    priceFrom: true,
    duration: '50 minutes',
    features: [
      'Évaluation en voiture avec un enseignant diplômé',
      "Estimation écrite du nombre d'heures",
      'Conseils personnalisés',
      'Présentation des forfaits',
      '60 € en boîte automatique',
    ],
    eligibleCPF: false,
    objectifs: [
      'Évaluer vos compétences et vos connaissances de départ',
      'Estimer le volume de formation nécessaire avant de signer le contrat',
    ],
    prerequis: ['Aucun'],
    public:
      'Toute personne souhaitant débuter une formation au permis B ou en conduite accompagnée.',
    programme: [
      'Entretien sur votre expérience et vos motivations',
      'Mise en situation au volant',
      'Restitution et estimation du volume de formation',
    ],
    methodes: ['Mise en situation dans un véhicule école à double commande'],
    evaluation: [
      "Grille d'évaluation et estimation écrite du nombre d'heures, remise avant la signature du contrat",
    ],
    dureeDetail: '50 minutes.',
  },
];

export function getFormationBySlug(slug: string): Formation | undefined {
  return formations.find((f) => f.slug === slug);
}

/** Libellé de prix prêt à afficher (« 1 195 € », « Sur devis »…). */
export function formatFormationPrice(formation: Formation): string {
  if (formation.priceLabel) return formation.priceLabel;
  return `${formation.price.toLocaleString('fr-FR')}\u00a0€`;
}
