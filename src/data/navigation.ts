import { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  {
    label: 'Formations',
    href: '/formations',
    children: [
      {
        label: 'Stage de Code Accéléré',
        href: '/formations/code-de-la-route',
        description: 'Forfait code — 195 €',
        icon: 'BookOpen',
      },
      {
        label: 'Permis B Boîte Manuelle',
        href: '/formations/permis-b',
        description: 'Manuelle — 1 195 € (20 h)',
        icon: 'Car',
      },
      {
        label: 'Permis B Boîte Auto',
        href: '/formations/permis-b-boite-auto',
        description: 'Automatique — dès 995 € (13 h)',
        icon: 'Zap',
      },
      {
        label: 'Conduite Accompagnée',
        href: '/formations/conduite-accompagnee',
        description: 'AAC — 1 395 €',
        icon: 'Users',
      },
      {
        label: 'Passerelle Auto → Manuelle',
        href: '/formations/passerelle-boite-auto-manuelle',
        description: 'Prochainement',
        icon: 'Settings',
      },
      {
        label: 'Forfait Annulation de Permis',
        href: '/formations/forfait-annulation-permis',
        description: 'Repasser après annulation — 595 €',
        icon: 'RotateCcw',
      },
      {
        label: 'Stages de récupération de points',
        href: '/formations/stage-recuperation-points',
        description: 'Prochaines dates et réservation',
        icon: 'RotateCcw',
      },
      {
        label: 'Formation moniteur TP ECSR',
        href: '/formations/formation-moniteur',
        description: 'Ouverture prévue en janvier 2027',
        icon: 'GraduationCap',
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
        label: 'Paiement en 3 ou 4 fois',
        href: '/financement#paiement',
        description: 'Sans frais',
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
        label: 'Nos engagements',
        href: '/qualite',
        description: 'Informations et documents',
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
    { label: 'Stages de récupération de points', href: '/formations/stage-recuperation-points' },
    { label: 'Formation moniteur TP ECSR', href: '/formations/formation-moniteur' },
  ],
  informations: [
    { label: 'Tarifs', href: '/tarifs' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Blog', href: '/blog' },
    { label: 'Financement', href: '/financement' },
    { label: 'Nos résultats', href: '/resultats' },
    { label: 'Nos engagements', href: '/qualite' },
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
