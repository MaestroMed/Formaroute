import { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  {
    label: 'Formations',
    href: '/formations',
    children: [
      {
        label: 'Stage de Code Accéléré',
        href: '/formations/code-de-la-route',
        description: 'Formation théorique accélérée',
        icon: 'BookOpen',
      },
      {
        label: 'Permis B Boîte Manuelle',
        href: '/formations/permis-b',
        description: 'Forfait traditionnel — 1 195€',
        icon: 'Car',
      },
      {
        label: 'Permis B Boîte Auto',
        href: '/formations/permis-b-boite-auto',
        description: 'BVA — à partir de 995€',
        icon: 'Zap',
      },
      {
        label: 'Conduite Accompagnée',
        href: '/formations/conduite-accompagnee',
        description: 'AAC dès 15 ans — 1 395€',
        icon: 'Users',
      },
      {
        label: 'Passerelle Auto → Manuelle',
        href: '/formations/passerelle-boite-auto-manuelle',
        description: 'Levée de la restriction BVA — 495€',
        icon: 'Settings',
      },
      {
        label: 'Forfait Annulation de Permis',
        href: '/formations/forfait-annulation-permis',
        description: 'Repasser après annulation — 595€',
        icon: 'RotateCcw',
      },
      {
        label: 'Stage Points',
        href: '/formations/stage-recuperation-points',
        description: "Récupérez jusqu'à 4 points — bientôt",
        icon: 'RotateCcw',
      },
    ],
  },
  {
    label: 'Tarifs',
    href: '/tarifs',
  },
  {
    label: 'Financement',
    href: '/financement',
    children: [
      {
        label: 'CPF',
        href: '/financement#cpf',
        description: 'Compte Personnel de Formation',
        icon: 'Wallet',
      },
      {
        label: 'France Travail',
        href: '/financement#france-travail',
        description: "Aides pour demandeurs d'emploi",
        icon: 'Briefcase',
      },
      {
        label: 'Aides jeunes',
        href: '/financement#jeunes',
        description: 'Mission Locale, permis à 1 € par jour',
        icon: 'Users',
      },
    ],
  },
  {
    label: 'À Propos',
    href: '/a-propos',
    children: [
      {
        label: 'Nos véhicules',
        href: '/a-propos/vehicules',
        description: 'Notre flotte moderne',
        icon: 'Car',
      },
      {
        label: 'Nos locaux',
        href: '/a-propos/locaux',
        description: 'Visitez nos espaces',
        icon: 'Building',
      },
      {
        label: 'Nos résultats',
        href: '/resultats',
        description: 'Indicateurs de résultats',
        icon: 'TrendingUp',
      },
      {
        label: 'Démarche qualité',
        href: '/qualite',
        description: 'Nos engagements Qualiopi',
        icon: 'ShieldCheck',
      },
    ],
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const footerNavigation = {
  formations: [
    { label: 'Stage de Code Accéléré', href: '/formations/code-de-la-route' },
    { label: 'Permis B Boîte Manuelle', href: '/formations/permis-b' },
    { label: 'Permis B Boîte Auto', href: '/formations/permis-b-boite-auto' },
    { label: 'Conduite Accompagnée', href: '/formations/conduite-accompagnee' },
    { label: 'Passerelle Auto → Manuelle', href: '/formations/passerelle-boite-auto-manuelle' },
    { label: 'Forfait Annulation de Permis', href: '/formations/forfait-annulation-permis' },
    { label: 'Stage Points', href: '/formations/stage-recuperation-points' },
  ],
  informations: [
    { label: 'Tarifs', href: '/tarifs' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Blog', href: '/blog' },
    { label: 'Financement', href: '/financement' },
    { label: 'Nos résultats', href: '/resultats' },
    { label: 'Démarche qualité', href: '/qualite' },
    { label: 'Accessibilité handicap', href: '/accessibilite-handicap' },
    { label: 'Réclamations', href: '/reclamations' },
  ],
  legal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'CGV', href: '/cgv' },
    { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
    { label: 'Règlement intérieur', href: '/reglement-interieur' },
  ],
  villes: [
    { label: 'Auto-école à Domont', href: '/auto-ecole-domont' },
    { label: 'Zones desservies', href: '/auto-ecole-domont#zones-desservies' },
  ],
};
