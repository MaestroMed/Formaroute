// Formation types
export interface Formation {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  shortDescription: string;
  price: number;
  priceFrom?: boolean;
  duration?: string;
  features: string[];
  popular?: boolean;
  new?: boolean;
  comingSoon?: boolean;
  /** Libellé de prix remplaçant le montant (ex. « Sur devis »). */
  priceLabel?: string;
  /** Nombre d'heures de conduite incluses (leçons de 60 min). */
  lessons?: number;

  // Informations sur la prestation (objectifs, prérequis, programme…) et certification
  objectifs: string[];
  prerequis: string[];
  public: string;
  programme: string[];
  methodes: string[];
  evaluation: string[];
  /** Durée détaillée et rythme. */
  dureeDetail: string;
  certification?: {
    nom: string;
    equivalences?: string[];
    passerelles?: string[];
    debouches?: string[];
  };
}

// Ville types for SEO pages
export interface Ville {
  slug: string;
  name: string;
  distance: number;
  population: number;
  priority: 'haute' | 'moyenne' | 'basse';
  transportInfo?: string;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  description?: string;
  icon?: string;
}
