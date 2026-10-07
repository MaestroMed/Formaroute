/**
 * Source unique de vérité pour toutes les informations de l'entreprise.
 *
 * Toute coordonnée, mention légale ou indicateur de résultat affiché sur le
 * site doit venir d'ici. Un champ laissé à `null` s'affiche « [À compléter] »
 * (voir `todo()`), ce qui rend visible ce qu'il reste à fournir.
 *
 * Les champs à remplir par le gérant sont listés dans AUDIT_QUALIOPI.md.
 */

export const TODO_LABEL = '[À compléter]';

/** Rend la valeur, ou « [À compléter] » si elle est absente. */
export function todo(value: string | number | null | undefined): string {
  if (value === null || value === undefined || value === '') return TODO_LABEL;
  return String(value);
}

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
}

export const site = {
  name: 'Formaroute',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://formaroute.fr',
  description:
    'Auto-école à Domont (95330) : code de la route, permis B en boîte manuelle ou automatique, conduite accompagnée, passerelle et perfectionnement.',
  openingDate: '2026-04-01',

  legal: {
    /** Raison sociale (si différente du nom commercial). */
    companyName: null as string | null,
    /** SARL, SAS, EI… */
    legalForm: null as string | null,
    shareCapital: null as string | null,
    siret: null as string | null,
    /** Ville du RCS ou RM (ex. « RCS Pontoise »). */
    registry: null as string | null,
    vatNumber: null as string | null,
    /** Agrément préfectoral d'exploitation de l'école de conduite (E XX 095 XXXX 0). */
    agrementEcole: null as string | null,
    /** Agrément préfectoral du centre de stages de récupération de points. */
    agrementStagePoints: null as string | null,
    /** Numéro de déclaration d'activité d'organisme de formation (DREETS). */
    nda: null as string | null,
    /** Directeur / directrice de la publication. */
    publicationDirector: null as string | null,
  },

  contact: {
    phoneDisplay: '01 34 19 83 26',
    phoneHref: 'tel:+33134198326',
    phoneE164: '+33134198326',
    email: 'contact.formaroute@gmail.com',
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
      { days: 'Lundi – Vendredi', hours: '10h – 12h / 15h – 20h' },
      { days: 'Samedi', hours: '10h – 13h' },
      { days: 'Dimanche', hours: 'Fermé' },
    ],
    short: 'Lun–Ven 10h–12h / 15h–20h · Sam 10h–13h',
    /** Format schema.org. */
    schema: [
      {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '12:00',
      },
      {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '15:00',
        closes: '20:00',
      },
      { dayOfWeek: ['Saturday'], opens: '10:00', closes: '13:00' },
    ],
  },

  social: {
    facebook: 'https://facebook.com/formaroute',
    instagram: 'https://instagram.com/formaroute',
    googleBusiness: 'https://g.page/r/CVku8ribbwIZEAE',
    googleReview: 'https://g.page/r/CVku8ribbwIZEAE/review',
  },

  /** Référent handicap (Qualiopi, indicateur 26). */
  handicapReferent: {
    name: null as string | null,
    email: 'contact.formaroute@gmail.com',
    phoneDisplay: '01 34 19 83 26',
  },

  /** Médiateur de la consommation (Code de la consommation, L.612-1). */
  mediator: {
    name: null as string | null,
    website: null as string | null,
    address: null as string | null,
  },

  quality: {
    /**
     * Passer à `true` uniquement quand le certificat Qualiopi est obtenu ET que
     * les formations sont référencées sur Mon Compte Formation (EDOF).
     * Pilote l'affichage de toutes les mentions « Éligible CPF ».
     */
    qualiopiCertified: false,
    /** Numéro / organisme certificateur, une fois obtenu. */
    qualiopiCertificate: null as string | null,
    /** Délai de réponse aux réclamations, en jours ouvrés. */
    complaintResponseDays: 10,
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
      { label: 'Code de la route (ETG)', rate: null, candidates: null, period: null, source: null },
      {
        label: 'Permis B — boîte manuelle',
        rate: null,
        candidates: null,
        period: null,
        source: null,
      },
      {
        label: 'Permis B — boîte automatique',
        rate: null,
        candidates: null,
        period: null,
        source: null,
      },
      {
        label: 'Conduite accompagnée (AAC)',
        rate: null,
        candidates: null,
        period: null,
        source: null,
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

  /** Modalités de paiement échelonné annoncées sur le site (à confirmer par le gérant). */
  paymentPlan: 'en 3, 4 ou 6 fois sans frais',

  lessonMinutes: 50,
  /** Date de dernière mise à jour des fiches formation et documents qualité. */
  contentUpdatedAt: '2026-10-07',
} as const;

export function hasResults(): boolean {
  return site.results.indicators.some((i) => i.rate !== null);
}

/** Durée formatée « 16 h 40 » pour un nombre de leçons. */
export function lessonsToHours(lessons: number): string {
  const total = lessons * site.lessonMinutes;
  const h = Math.floor(total / 60);
  const m = total % 60;
  return m === 0 ? `${h} h` : `${h} h ${String(m).padStart(2, '0')}`;
}

export function absoluteUrl(path = '/'): string {
  return `${site.url}${path.startsWith('/') ? path : `/${path}`}`;
}
