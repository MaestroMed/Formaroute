/**
 * Source unique de vérité pour toutes les informations de l'entreprise.
 *
 * Toute coordonnée, mention légale ou indicateur de résultat affiché sur le
 * site doit venir d'ici. Un champ laissé à `null` n'est pas affiché : les
 * informations encore manquantes sont listées dans DEMANDES_GERANT.md.
 */

export interface ResultIndicator {
  /** Libellé affiché (ex. « Permis B — 1re présentation »). */
  label: string;
  /** Taux en pourcentage (0-100). `null` tant que non publié. */
  rate: number | null;
  /** Nombre de candidats présentés sur la période. */
  candidates: number | null;
  /** Période couverte (ex. « avril 2026 – mars 2027 »). */
  period: string | null;
  /** Source du chiffre (ex. « Données ministère de l'Intérieur »). */
  source: string | null;
  /** Méthode de calcul (ex. « reçus / présentés, 1re présentation »). */
  method: string | null;
}

/** Document téléchargeable (PDF déposé dans public/documents/). */
export interface SiteDocument {
  label: string;
  /** Chemin public, ex. « /documents/programme-permis-b.pdf ». */
  file: string;
}

/** Date d'un stage de récupération de points. */
export interface StageDate {
  /** Dates affichées, ex. « 12 et 13 novembre 2026 ». */
  label: string;
  /** Places restantes (facultatif). */
  places?: number;
}

export const site = {
  name: 'Formaroute',
  /** Raison sociale et enseigne. */
  brand: 'FORMAROUTE',
  // Domaine canonique : formaroute.fr redirige (308) vers www.
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.formaroute.fr',
  description:
    'Auto-école à Domont (95330) : permis B manuel et automatique, conduite accompagnée et supervisée, forfait code, stages de récupération de points.',
  openingDate: '2026-04-01',

  legal: {
    /** Raison sociale (si différente du nom commercial). */
    companyName: 'SAS CONTRA' as string | null,
    /** SARL, SAS, EI… */
    legalForm: 'SAS' as string | null,
    shareCapital: null as string | null,
    siret: '99929100800012' as string | null,
    /** Ville du RCS ou RM (ex. « RCS Pontoise »). */
    registry: null as string | null,
    vatNumber: null as string | null,
    /** Agrément préfectoral d'exploitation de l'école de conduite. */
    agrementEcole: 'E2609500070' as string | null,
    /** Agrément préfectoral du centre de stages de récupération de points (CSSR). */
    agrementStagePoints: 'R2609500030' as string | null,
    /** Agrément du centre de formation des enseignants (ECSR). */
    agrementEcsr: 'F2609500010' as string | null,
    /** Numéro de déclaration d'activité d'organisme de formation (DREETS). */
    nda: '11951049995' as string | null,
    president: 'Cédric CONTESENNE',
    directeurGeneral: 'Brahim TRAHIM',
    /** Directeur / directrice de la publication. */
    publicationDirector: 'Cédric CONTESENNE, Président' as string | null,
  },

  contact: {
    phoneDisplay: '01 34 19 83 26',
    phoneHref: 'tel:+33134198326',
    phoneE164: '+33134198326',
    email: 'formaroute95@gmail.com',
  },

  address: {
    street: '4 avenue Jean Jaurès',
    postalCode: '95330',
    city: 'Domont',
    region: "Val-d'Oise",
    country: 'FR',
    full: '4 avenue Jean Jaurès, 95330 Domont',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=4+avenue+Jean+Jaur%C3%A8s+95330+Domont',
    mapsEmbedUrl:
      'https://www.google.com/maps?q=4+avenue+Jean+Jaur%C3%A8s,+95330+Domont&output=embed',
    // Coordonnées approximatives du centre-ville : à affiner avec l'adresse exacte.
    geo: { latitude: 49.0333, longitude: 2.3333 },
  },

  hours: {
    /** Affichage court, une ligne par plage. */
    display: [
      { days: 'Lundi – Vendredi', hours: '10h – 12h / 16h – 20h' },
      { days: 'Samedi', hours: '10h – 14h' },
      { days: 'Dimanche', hours: 'Fermé' },
    ],
    short: 'Lun–Ven 10h–12h / 16h–20h · Sam 10h–14h',
    /** Précision affichée sous les horaires d'accueil. */
    lessonsNote: 'Les leçons suivent le planning individuel.',
    /** Format schema.org. */
    schema: [
      {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '12:00',
      },
      {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '16:00',
        closes: '20:00',
      },
      { dayOfWeek: ['Saturday'], opens: '10:00', closes: '14:00' },
    ],
  },

  social: {
    /** Pages Facebook / Instagram : non confirmées, masquées tant que null. */
    facebook: null as string | null,
    instagram: null as string | null,
    googleBusiness: 'https://g.page/r/CVku8ribbwIZEAE',
    googleReview: 'https://g.page/r/CVku8ribbwIZEAE/review',
  },

  /** Référent handicap. */
  handicapReferent: {
    name: 'Brahim TRAHIM',
    email: 'formaroute95@gmail.com',
    phoneDisplay: '01 34 19 83 26',
  },

  /** Médiateur de la consommation (Code de la consommation, L.612-1). */
  mediator: {
    name: null as string | null,
    website: null as string | null,
    address: null as string | null,
  },

  /**
   * Indicateurs de résultats (Qualiopi, indicateur 2 ; obligation d'affichage
   * des taux de réussite des écoles de conduite).
   *
   * À remplir avec les chiffres officiels uniquement. Tant que `rate` est
   * `null`, le site affiche « premiers résultats en cours de constitution ».
   */
  results: {
    updatedAt: null as string | null,
    indicators: [
      {
        label: 'Code de la route (ETG)',
        rate: null,
        candidates: null,
        period: null,
        source: null,
        method: null,
      },
      {
        label: 'Permis B — boîte manuelle',
        rate: null,
        candidates: null,
        period: null,
        source: null,
        method: null,
      },
      {
        label: 'Permis B — boîte automatique',
        rate: null,
        candidates: null,
        period: null,
        source: null,
        method: null,
      },
      {
        label: 'Conduite accompagnée (AAC)',
        rate: null,
        candidates: null,
        period: null,
        source: null,
        method: null,
      },
    ] as ResultIndicator[],
    /** Taux de satisfaction des élèves (questionnaire de fin de formation). */
    satisfaction: {
      rate: null as number | null,
      respondents: null as number | null,
      period: null as string | null,
    },
    /** Taux d'abandon en cours de formation. */
    dropout: { rate: null as number | null, period: null as string | null },
    /** Nombre moyen d'heures de conduite avant réussite (donnée ministérielle). */
    averageHours: null as number | null,
    /** Lien vers la page officielle publiant les taux de réussite de l'école (à renseigner). */
    officialSource: null as string | null,
  },

  /**
   * Équipe pédagogique (Qualiopi, indicateur 21 : compétences des intervenants).
   * La section « Notre équipe » de la page À propos s'affiche dès qu'une
   * personne est renseignée.
   */
  team: [] as { name: string; role: string; bio: string; diplomas: string[] }[],

  /** Modalités de paiement échelonné. */
  paymentPlan: 'en 3 ou 4 fois sans frais',

  /** Formation au code : accès aux ressources et frais d'examen (hors forfait). */
  code: {
    access: '12 mois à compter de son activation',
    examFee: 30,
    examFeeNote: 'par passage, réglés directement à l’organisme d’examen',
  },

  /** Stages de récupération de points. */
  stagePoints: {
    price: 250,
    /** Prochaines dates. Liste vide : « contactez-nous pour les prochaines dates ». */
    dates: [] as StageDate[],
  },

  /** Formation de moniteurs (TP ECSR). */
  ecsr: {
    opening: 'janvier 2027',
  },

  /**
   * Documents téléchargeables. Déposer le PDF dans public/documents/ :
   * le lien apparaît automatiquement sur le site (voir getAvailableDocuments).
   */
  documents: {
    programmePermisB: {
      label: 'Programme et conditions du Permis B (PDF)',
      file: '/documents/programme-permis-b.pdf',
    },
    reglementInterieur: {
      label: 'Règlement intérieur (PDF)',
      file: '/documents/reglement-interieur.pdf',
    },
    contrat: {
      label: 'Contrat de formation type (PDF)',
      file: '/documents/contrat-formation.pdf',
    },
    tarifs: { label: 'Grille tarifaire (PDF)', file: '/documents/tarifs.pdf' },
  } satisfies Record<string, SiteDocument>,

  /** Durée d'une leçon de conduite, accueil et bilan compris. */
  lessonMinutes: 60,
  /** Date de dernière mise à jour des fiches formation et documents qualité. */
  contentUpdatedAt: '2026-10-07',
} as const;

export function hasResults(): boolean {
  return site.results.indicators.some((i) => i.rate !== null);
}

/** Durée formatée « 20 h » pour un nombre de leçons. */
export function lessonsToHours(lessons: number): string {
  const total = lessons * site.lessonMinutes;
  const h = Math.floor(total / 60);
  const m = total % 60;
  return m === 0 ? `${h} h` : `${h} h ${String(m).padStart(2, '0')}`;
}

export function absoluteUrl(path = '/'): string {
  return `${site.url}${path.startsWith('/') ? path : `/${path}`}`;
}
