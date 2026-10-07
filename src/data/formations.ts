import { Formation } from '@/types';

/**
 * Catalogue des formations.
 *
 * Les textes « enjeux », « programme », « méthodes » et « durées et accès »
 * sont ceux transmis par la direction (SAS CONTRA) : ne pas les reformuler
 * sans son accord. Une leçon dure 60 minutes (accueil, objectifs, conduite,
 * bilan).
 */

/** Enjeux du permis B (texte de la direction). */
export const ENJEUX_PERMIS_B =
  'La formation vise à développer une conduite sûre, autonome et responsable, favorisant la mobilité personnelle et professionnelle et le respect des autres usagers.';

/** Objectifs du permis B (texte de la direction). */
export const OBJECTIFS_PERMIS_B = [
  'utiliser les commandes et effectuer les vérifications de sécurité ;',
  'appliquer le Code de la route et observer son environnement ;',
  'adapter son allure, son placement et les distances de sécurité ;',
  'réaliser les manœuvres en sécurité ;',
  'anticiper les risques et partager la route ;',
  'circuler dans des situations variées avec autonomie ;',
  'adopter une conduite respectueuse de l’environnement et connaître les comportements à tenir en cas d’accident.',
];

/** Formation théorique (texte de la direction). */
export const FORMATION_THEORIQUE =
  'Formation théorique : règles de circulation, signalisation, priorités, vitesse, comportement du conducteur, autres usagers, risques, premiers secours, sécurité du véhicule et environnement. Préparation par cours, entraînements au code et correction des erreurs, selon les prestations comprises dans le forfait.';

/** Formation pratique : les 4 étapes (texte de la direction). */
export const FORMATION_PRATIQUE = [
  'Maîtriser le véhicule dans une circulation faible ou nulle.',
  'Appréhender la route et circuler dans des conditions normales.',
  'Circuler dans des conditions difficiles et partager la route.',
  'Pratiquer une conduite autonome, sûre et économique.',
];

/** Méthodes pédagogiques (texte de la direction). */
export const METHODES_PRATIQUE =
  'Les leçons sont individuelles, en présentiel, sur route, avec un enseignant autorisé et un véhicule à double commande. Aucune piste n’est utilisée. Chaque séance comporte des objectifs, des exercices et un bilan. La progression est suivie dans le livret d’apprentissage et évaluée lors des leçons et bilans pédagogiques.';

/** Durées et accès (texte de la direction). */
export const DUREES_ACCES = [
  'Le volume prévisionnel est proposé après une évaluation de départ et adapté à la progression. Pour un premier permis B, hors cas particuliers, la formation pratique minimale est de 20 heures en manuelle ou 13 heures en automatique.',
  'Une leçon dure 60 minutes au total, comprenant accueil, objectifs, conduite et bilan.',
  'L’évaluation est habituellement proposée sous un jour après la demande. La première leçon est habituellement proposée sous trois jours après l’évaluation et la finalisation de l’inscription, selon les disponibilités de l’élève et dans le respect des délais légaux applicables.',
  'L’inscription comprend la prise de contact, l’évaluation, la constitution du dossier et la signature du contrat. Aucune date d’examen ni réussite n’est garantie.',
];

/** Accessibilité aux personnes en situation de handicap (texte de la direction). */
export const ACCESSIBILITE =
  'Pour toute demande d’adaptation, contactez Brahim TRAHIM, référent handicap, au 01 34 19 83 26 ou à formaroute95@gmail.com. Nous étudions vos besoins et les adaptations possibles ; une orientation peut être proposée si nécessaire.';

/** Les différentes filières du permis B, présentées séparément. */
export const FILIERES_PERMIS_B = [
  {
    id: 'manuel',
    title: 'Boîte manuelle',
    text: 'Apprentissage de l’embrayage et du changement de rapports.',
  },
  {
    id: 'automatique',
    title: 'Boîte automatique',
    text: 'Apprentissage sur véhicule automatique ; permis assorti de la restriction correspondante.',
  },
  {
    id: 'aac',
    title: 'Conduite accompagnée (AAC)',
    text: 'Formation initiale, rendez-vous préalable avec accompagnateur, phase accompagnée d’au moins un an et 3 000 km, puis rendez-vous pédagogiques réglementaires.',
  },
  {
    id: 'supervisee',
    title: 'Conduite supervisée',
    text: 'Accessible dès 18 ans sous conditions, après formation initiale ; conduite avec accompagnateur, sans durée ni kilométrage minimaux réglementaires.',
  },
];

const PROGRAMME_PERMIS_B = [
  FORMATION_THEORIQUE,
  ...FORMATION_PRATIQUE.map((s, i) => `${i + 1}. ${s}`),
];

const EVALUATION_PERMIS_B = [
  'Évaluation de départ avant l’inscription : elle fixe le volume prévisionnel de formation.',
  'Progression suivie dans le livret d’apprentissage, évaluée lors des leçons et des bilans pédagogiques.',
  'Examen théorique du code puis épreuve pratique du permis de conduire, organisés par les autorités compétentes.',
];

const CERTIF_PERMIS_B = {
  nom: 'Permis de conduire de catégorie B, délivré par l’État',
};

export const formations: Formation[] = [
  {
    id: 'code',
    slug: 'code-de-la-route',
    title: 'Stage de Code Accéléré',
    shortTitle: 'Stage de Code Accéléré',
    description:
      'Préparation à l’examen du code de la route : cours, entraînements et correction des erreurs. Accès aux ressources pédagogiques pendant 12 mois à compter de son activation. Examen du code non inclus (30 € par passage, réglés à l’organisme d’examen).',
    shortDescription: 'Cours, entraînements et accès aux ressources pendant 12 mois.',
    price: 195,
    duration: 'Ressources : 12 mois',
    features: [
      'Frais administratifs',
      'Cours de code et entraînements',
      'Accès aux ressources pédagogiques : 12 mois à compter de l’activation',
      'Outils pédagogiques et administratifs',
      'Livre et matériel de code',
      'Examen du code non inclus : 30 € par passage, réglés à l’organisme d’examen',
    ],
    popular: true,
    objectifs: [
      'Connaître les règles de circulation, la signalisation et les priorités',
      'Comprendre les risques et le comportement du conducteur',
      'Se préparer à l’examen théorique du code de la route',
    ],
    prerequis: [
      'Pièce d’identité, justificatif de domicile et photo d’identité',
      'Conditions détaillées d’accès et d’examen : voir le document Permis B',
    ],
    public: 'Toute personne qui prépare le code de la route en vue du permis B.',
    programme: [FORMATION_THEORIQUE],
    methodes: [
      'Cours, entraînements au code et correction des erreurs, en salle et sur les ressources pédagogiques',
    ],
    evaluation: [
      'Entraînements réguliers pour mesurer la progression',
      'Examen théorique du code, passé auprès d’un organisme d’examen agréé (30 € par passage, hors forfait)',
    ],
    dureeDetail:
      'Accès aux ressources pédagogiques du code pendant 12 mois à compter de son activation. Les frais de passage de l’examen du code (30 € par passage) sont réglés séparément à l’organisme d’examen.',
  },
  {
    id: 'permis-b',
    slug: 'permis-b',
    title: 'Permis B - Boîte Manuelle',
    shortTitle: 'Permis B Manuelle',
    description:
      'Formation au permis B en boîte manuelle : forfait de 20 heures de conduite (leçons de 60 minutes), formation au code et matériel pédagogique inclus.',
    shortDescription: 'Forfait boîte manuelle, 20 heures de conduite.',
    price: 1195,
    lessons: 20,
    features: [
      'Frais administratifs',
      'Formation au code et accès aux ressources (12 mois)',
      'Outils pédagogiques et administratifs',
      'Livret d’apprentissage + livre et matériels de code',
      '20 heures de conduite (leçons de 60 min)',
    ],
    popular: true,
    objectifs: OBJECTIFS_PERMIS_B,
    prerequis: [
      'Évaluation de départ réalisée',
      'Conditions détaillées d’accès et d’examen : voir le document Permis B',
    ],
    public: 'Toute personne souhaitant obtenir le permis B sur véhicule à boîte manuelle.',
    programme: PROGRAMME_PERMIS_B,
    methodes: [METHODES_PRATIQUE, FILIERES_PERMIS_B[0].text],
    evaluation: EVALUATION_PERMIS_B,
    dureeDetail:
      '20 heures de conduite incluses (leçons de 60 minutes). Le volume prévisionnel est fixé après l’évaluation de départ ; des heures complémentaires peuvent être nécessaires.',
    certification: CERTIF_PERMIS_B,
  },
  {
    id: 'permis-b-auto',
    slug: 'permis-b-boite-auto',
    title: 'Permis B - Boîte Automatique',
    shortTitle: 'Permis B Auto',
    description:
      'Formation au permis B sur véhicule automatique : forfait 13 heures à 995 € ou 20 heures à 1 295 € (leçons de 60 minutes). Le permis obtenu est assorti de la restriction boîte automatique.',
    shortDescription: 'Boîte automatique, forfait 13 h ou 20 h.',
    price: 995,
    priceFrom: true,
    lessons: 13,
    features: [
      'Frais administratifs',
      'Formation au code et accès aux ressources (12 mois)',
      'Outils pédagogiques et administratifs',
      'Livret d’apprentissage + livre et matériels de code',
      '13 heures (995 €) ou 20 heures (1 295 €) de conduite',
    ],
    objectifs: OBJECTIFS_PERMIS_B,
    prerequis: [
      'Évaluation de départ réalisée',
      'Conditions détaillées d’accès et d’examen : voir le document Permis B',
    ],
    public: 'Toute personne souhaitant apprendre à conduire sur véhicule automatique.',
    programme: PROGRAMME_PERMIS_B,
    methodes: [METHODES_PRATIQUE, FILIERES_PERMIS_B[1].text],
    evaluation: EVALUATION_PERMIS_B,
    dureeDetail:
      '13 ou 20 heures de conduite selon le forfait (leçons de 60 minutes). Le volume prévisionnel est fixé après l’évaluation de départ.',
    certification: {
      nom: 'Permis de conduire de catégorie B, assorti de la restriction boîte automatique, délivré par l’État',
    },
  },
  {
    id: 'conduite-accompagnee',
    slug: 'conduite-accompagnee',
    title: 'Conduite Accompagnée (AAC)',
    shortTitle: 'Conduite Accompagnée',
    description:
      'Apprentissage anticipé de la conduite : formation initiale, rendez-vous préalable avec l’accompagnateur, phase accompagnée d’au moins un an et 3 000 km, puis rendez-vous pédagogiques réglementaires.',
    shortDescription: 'Formation initiale puis conduite avec un accompagnateur.',
    price: 1395,
    lessons: 20,
    features: [
      'Frais administratifs',
      'Formation au code et accès aux ressources (12 mois)',
      'Outils pédagogiques et administratifs',
      'Livret d’apprentissage + livre et matériels de code',
      '20 heures de conduite (13 heures en automatique)',
      'Rendez-vous préalable avec l’accompagnateur',
      'Rendez-vous pédagogiques réglementaires',
    ],
    popular: true,
    objectifs: OBJECTIFS_PERMIS_B,
    prerequis: [
      'Évaluation de départ réalisée',
      'Un ou plusieurs accompagnateurs remplissant les conditions réglementaires',
      'Conditions détaillées d’accès et d’examen : voir le document Permis B',
    ],
    public: 'Jeunes conducteurs et leur(s) accompagnateur(s).',
    programme: [...PROGRAMME_PERMIS_B, FILIERES_PERMIS_B[2].text],
    methodes: [
      METHODES_PRATIQUE,
      'Implication de l’accompagnateur lors du rendez-vous préalable et des rendez-vous pédagogiques.',
    ],
    evaluation: EVALUATION_PERMIS_B,
    dureeDetail:
      'Formation initiale de 20 heures de conduite (13 heures en automatique), puis phase accompagnée d’au moins un an et 3 000 km.',
    certification: CERTIF_PERMIS_B,
  },
  {
    id: 'passerelle',
    slug: 'passerelle-boite-auto-manuelle',
    title: 'Passerelle Boîte Auto vers Manuelle',
    shortTitle: 'Passerelle Auto → Manuelle',
    description:
      'Formation permettant aux titulaires du permis B limité à la boîte automatique de conduire en boîte manuelle. Prochainement disponible chez Formaroute.',
    shortDescription: 'Prochainement.',
    price: 0,
    priceLabel: 'Prochainement',
    features: [
      'Formation de levée de la restriction boîte automatique',
      'Prochainement disponible',
    ],
    comingSoon: true,
    objectifs: ['Apprendre à utiliser l’embrayage et le changement de rapports en sécurité'],
    prerequis: ['Être titulaire du permis B limité à la boîte automatique'],
    public: 'Titulaires du permis B boîte automatique.',
    programme: ['Programme communiqué à l’ouverture'],
    methodes: [METHODES_PRATIQUE],
    evaluation: ['Communiquées à l’ouverture'],
    dureeDetail: 'Communiquée à l’ouverture.',
  },
  {
    id: 'annulation-permis',
    slug: 'forfait-annulation-permis',
    title: 'Forfait Annulation de Permis',
    shortTitle: 'Annulation de Permis',
    description:
      'Forfait pour repasser le permis après une annulation ou une invalidation : formation au code, 6 heures de conduite et accompagnement à l’examen pratique.',
    shortDescription: 'Forfait pour repasser le permis après annulation.',
    price: 595,
    lessons: 6,
    features: [
      'Frais administratifs',
      'Formation au code et accès aux ressources (12 mois)',
      'Outils pédagogiques et administratifs',
      'Livret d’apprentissage + livre et matériels de code',
      '6 heures de conduite (leçons de 60 min)',
      'Accompagnement à l’examen pratique',
    ],
    objectifs: OBJECTIFS_PERMIS_B,
    prerequis: [
      'Avoir le droit de solliciter un nouveau permis (fin de la période d’interdiction, avis médical et tests le cas échéant)',
      'Évaluation de départ réalisée',
    ],
    public: 'Conducteurs dont le permis a été annulé ou invalidé.',
    programme: PROGRAMME_PERMIS_B,
    methodes: [METHODES_PRATIQUE],
    evaluation: EVALUATION_PERMIS_B,
    dureeDetail: '6 heures de conduite incluses ; volume ajusté après l’évaluation de départ.',
    certification: CERTIF_PERMIS_B,
  },
  {
    id: 'stage-points',
    slug: 'stage-recuperation-points',
    title: 'Stage de Récupération de Points',
    shortTitle: 'Stage Points',
    description:
      'Stages de sensibilisation à la sécurité routière dans notre centre agréé de Domont (agrément R2609500030). Découvrez les prochaines dates et réservez votre stage.',
    shortDescription: 'Découvrez les prochaines dates et réservez votre stage.',
    price: 250,
    duration: '2 jours consécutifs',
    features: [
      'Stage sur 2 jours consécutifs',
      'Centre agréé par la préfecture (agrément R2609500030)',
      'Attestation de stage remise en fin de stage',
    ],
    objectifs: [
      'Analyser les situations à risque et ses propres comportements de conduite',
      'Récupérer des points dans les conditions prévues par la réglementation',
    ],
    prerequis: ['Être titulaire d’un permis de conduire valide'],
    public: 'Conducteurs souhaitant récupérer des points, volontairement ou sur obligation.',
    programme: ['Stage collectif de sensibilisation à la sécurité routière'],
    methodes: ['Stage collectif en salle, en présentiel'],
    evaluation: ['Présence obligatoire sur les 2 jours complets', 'Attestation de stage'],
    dureeDetail: '2 jours consécutifs.',
  },
  {
    id: 'formation-moniteur',
    slug: 'formation-moniteur',
    title: 'Formation de moniteurs TP ECSR',
    shortTitle: 'Formation moniteur ECSR',
    description:
      'Formation au titre professionnel d’Enseignant de la conduite et de la sécurité routière (TP ECSR). Ouverture prévue en janvier 2027. Contactez-nous pour être informé.',
    shortDescription: 'Ouverture prévue en janvier 2027. Contactez-nous pour être informé.',
    price: 0,
    priceLabel: 'Ouverture janvier 2027',
    features: [
      'Titre professionnel ECSR',
      'Centre agréé (agrément F2609500010)',
      'Ouverture prévue en janvier 2027',
    ],
    comingSoon: true,
    objectifs: ['Programme détaillé communiqué avant l’ouverture'],
    prerequis: ['Communiqués avant l’ouverture'],
    public: 'Adultes souhaitant devenir enseignant de la conduite.',
    programme: ['Communiqué avant l’ouverture'],
    methodes: ['Communiquées avant l’ouverture'],
    evaluation: ['Communiquées avant l’ouverture'],
    dureeDetail: 'Communiquée avant l’ouverture.',
  },
  {
    id: 'perfectionnement',
    slug: 'perfectionnement',
    title: 'Heure de conduite complémentaire',
    shortTitle: 'Heure complémentaire',
    description:
      'Heures de conduite à l’unité, en complément d’un forfait ou pour reprendre confiance : 56 € en boîte manuelle, 60 € en boîte automatique.',
    shortDescription: 'Leçon de 60 min — 56 € manuelle / 60 € automatique.',
    price: 56,
    priceFrom: true,
    duration: '60 min / leçon',
    features: ['1 leçon de 60 minutes', '56 € en boîte manuelle', '60 € en boîte automatique'],
    objectifs: ['Travailler les points définis avec votre enseignant'],
    prerequis: ['Être inscrit en formation ou titulaire du permis B'],
    public: 'Élèves en formation et conducteurs souhaitant reprendre la conduite.',
    programme: FORMATION_PRATIQUE,
    methodes: [METHODES_PRATIQUE],
    evaluation: ['Bilan en fin de leçon'],
    dureeDetail: 'Leçons de 60 minutes (accueil, objectifs, conduite, bilan).',
  },
  {
    id: 'evaluation',
    slug: 'evaluation-initiale',
    title: 'Évaluation de Départ',
    shortTitle: 'Évaluation',
    description:
      'Évaluation de départ avant l’inscription : elle permet de proposer un volume prévisionnel de formation. 56 € en boîte manuelle, 60 € en boîte automatique.',
    shortDescription: 'Évaluation de départ — 56 € manuelle / 60 € automatique.',
    price: 56,
    priceFrom: true,
    features: [
      'Évaluation avec un enseignant autorisé',
      'Proposition d’un volume prévisionnel de formation',
      '56 € en boîte manuelle, 60 € en boîte automatique',
    ],
    objectifs: ['Évaluer vos acquis de départ', 'Proposer un volume prévisionnel de formation'],
    prerequis: ['Aucun'],
    public: 'Toute personne souhaitant débuter une formation au permis B.',
    programme: [
      'Entretien et mise en situation',
      'Proposition du volume prévisionnel de formation',
    ],
    methodes: ['Mise en situation avec un enseignant autorisé'],
    evaluation: ['Volume prévisionnel de formation proposé à l’issue de l’évaluation'],
    dureeDetail: 'Habituellement proposée sous un jour après la demande.',
  },
];

export function getFormationBySlug(slug: string): Formation | undefined {
  return formations.find((f) => f.slug === slug);
}

/** Libellé de prix prêt à afficher (« 1 195 € », « Prochainement »…). */
export function formatFormationPrice(formation: Formation): string {
  if (formation.priceLabel) return formation.priceLabel;
  return `${formation.price.toLocaleString('fr-FR')} €`;
}
