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
        description: 'Récupérez 4 points — dès mai 2026',
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
        href: '/financement/cpf',
        description: 'Utilisez votre CPF',
        icon: 'Wallet',
      },
      {
        label: 'Pôle Emploi',
        href: '/financement/pole-emploi',
        description: 'Aides pour demandeurs d\'emploi',
        icon: 'Briefcase',
      },
      {
        label: 'Mission Locale',
        href: '/financement/mission-locale',
        description: 'Aides pour les 16-25 ans',
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
        description: 'Taux de réussite',
        icon: 'TrendingUp',
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
    { label: 'Témoignages', href: '/temoignages' },
    { label: 'Nos résultats', href: '/resultats' },
  ],
  legal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'CGV', href: '/cgv' },
    { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
    { label: 'Règlement intérieur', href: '/reglement-interieur' },
  ],
  villes: [
    { label: 'Domont', href: '/auto-ecole-domont' },
    { label: 'Montmorency', href: '/auto-ecole-montmorency' },
    { label: 'Eaubonne', href: '/auto-ecole-eaubonne' },
    { label: 'Taverny', href: '/auto-ecole-taverny' },
    { label: 'Toutes les villes', href: '/zones-desservies' },
  ],
};

export const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/formaroute',
    icon: 'Facebook',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/formaroute',
    icon: 'Instagram',
  },
  {
    name: 'Google',
    href: 'https://g.page/formaroute',
    icon: 'MapPin',
  },
];
