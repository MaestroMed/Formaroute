import { Ville } from '@/types';

export const villes: Ville[] = [
  {
    slug: 'domont',
    name: 'Domont',
    distance: 0,
    population: 15500,
    priority: 'haute',
    transportInfo: 'Siège de Formaroute - Gare de Domont (Ligne H)',
    neighborhoods: ['Centre-ville', 'Les Music-Halls', 'Les Music-Halls', 'La Mare du Moulin'],
  },
  {
    slug: 'ezanville',
    name: 'Ezanville',
    distance: 2,
    population: 9800,
    priority: 'haute',
    transportInfo: 'Bus 95.01 - 5 min en voiture',
    neighborhoods: ['Centre', 'Les Myosotis', 'Le Mesnil'],
  },
  {
    slug: 'moisselles',
    name: 'Moisselles',
    distance: 3,
    population: 1600,
    priority: 'haute',
    transportInfo: 'Bus - 5 min en voiture',
    neighborhoods: ['Centre-bourg'],
  },
  {
    slug: 'bouffemont',
    name: 'Bouffémont',
    distance: 3,
    population: 6200,
    priority: 'haute',
    transportInfo: 'Gare de Bouffémont-Moisselles (Ligne H) - 5 min',
    neighborhoods: ['Centre', 'Les Fontenelles', 'La Fontaine du Moulin'],
  },
  {
    slug: 'saint-brice-sous-foret',
    name: 'Saint-Brice-sous-Forêt',
    distance: 4,
    population: 15200,
    priority: 'haute',
    transportInfo: 'Bus 95.07 - 8 min en voiture',
    neighborhoods: ['Centre', 'Les Champeaux', 'Le Parc de la Fontaine'],
  },
  {
    slug: 'attainville',
    name: 'Attainville',
    distance: 4,
    population: 2100,
    priority: 'moyenne',
    transportInfo: '10 min en voiture',
    neighborhoods: ['Village'],
  },
  {
    slug: 'piscop',
    name: 'Piscop',
    distance: 5,
    population: 1100,
    priority: 'moyenne',
    transportInfo: '10 min en voiture',
    neighborhoods: ['Village'],
  },
  {
    slug: 'montmorency',
    name: 'Montmorency',
    distance: 6,
    population: 21000,
    priority: 'haute',
    transportInfo: 'Gare de Montmorency (Ligne H) - Tramway T5',
    neighborhoods: ['Centre-ville', 'Champlâtreux', 'Les Champeaux', 'La Châtaigneraie'],
  },
  {
    slug: 'eaubonne',
    name: 'Eaubonne',
    distance: 7,
    population: 25000,
    priority: 'haute',
    transportInfo: 'Gare d\'Eaubonne (Ligne H) - 12 min en voiture',
    neighborhoods: ['Centre', 'Les Bocages', 'Les Géleries', 'Cernay'],
  },
  {
    slug: 'taverny',
    name: 'Taverny',
    distance: 7,
    population: 26500,
    priority: 'haute',
    transportInfo: 'Gare de Taverny (Ligne H) - 15 min en voiture',
    neighborhoods: ['Centre', 'Vaucelles', 'Les Tréforêts', 'Le Bouquet'],
  },
  {
    slug: 'saint-leu-la-foret',
    name: 'Saint-Leu-la-Forêt',
    distance: 8,
    population: 15600,
    priority: 'moyenne',
    transportInfo: 'Gare de Saint-Leu-la-Forêt (Ligne H)',
    neighborhoods: ['Centre', 'La Plaine', 'Les Diablots'],
  },
  {
    slug: 'villiers-le-bel',
    name: 'Villiers-le-Bel',
    distance: 8,
    population: 28000,
    priority: 'moyenne',
    transportInfo: 'Gare de Villiers-le-Bel (RER D)',
    neighborhoods: ['Centre', 'Les Carreaux', 'Village'],
  },
  {
    slug: 'franconville',
    name: 'Franconville',
    distance: 9,
    population: 35000,
    priority: 'moyenne',
    transportInfo: 'Gares de Franconville (Ligne J/H) - 18 min',
    neighborhoods: ['Centre', 'Plessis-Bouchard', 'La Mare aux Saules'],
  },
  {
    slug: 'sarcelles',
    name: 'Sarcelles',
    distance: 10,
    population: 58000,
    priority: 'moyenne',
    transportInfo: 'Gare de Sarcelles-Saint-Brice (RER D)',
    neighborhoods: ['Centre', 'Lochères', 'Les Chardonnerettes', 'Chantepie'],
  },
  {
    slug: 'enghien-les-bains',
    name: 'Enghien-les-Bains',
    distance: 10,
    population: 11600,
    priority: 'moyenne',
    transportInfo: 'Gare d\'Enghien-les-Bains (Ligne H)',
    neighborhoods: ['Centre-ville', 'Ormesson', 'Cygne d\'Enghien'],
  },
  {
    slug: 'goussainville',
    name: 'Goussainville',
    distance: 12,
    population: 31000,
    priority: 'basse',
    transportInfo: 'Gare de Goussainville (RER D) - 20 min',
    neighborhoods: ['Centre', 'Les Grandes Bornes', 'Le Village'],
  },
];

export function getVilleBySlug(slug: string): Ville | undefined {
  return villes.find((v) => v.slug === slug);
}

export function getVillesByPriority(priority: 'haute' | 'moyenne' | 'basse'): Ville[] {
  return villes.filter((v) => v.priority === priority);
}

export function getAllVillesSlugs(): string[] {
  return villes.map((v) => v.slug);
}

export function getVillesForSitemap(): { slug: string; priority: number }[] {
  return villes.map((v) => ({
    slug: v.slug,
    priority: v.priority === 'haute' ? 0.9 : v.priority === 'moyenne' ? 0.7 : 0.5,
  }));
}
