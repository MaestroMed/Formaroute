import { MetadataRoute } from 'next';
import { formations } from '@/data/formations';
import { blogPosts } from '@/data/blog';
import { site } from '@/data/site';

/** Date de dernière modification du contenu (à mettre à jour lors d'une refonte de page). */
const LAST_CONTENT_UPDATE = site.contentUpdatedAt;

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
};

const pages: Entry[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/formations', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/tarifs', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/reservation', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/auto-ecole-domont', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/financement', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/faq', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/resultats', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/a-propos', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/a-propos/vehicules', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/a-propos/locaux', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/qualite', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/accessibilite-handicap', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/reclamations', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/blog', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/mentions-legales', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/cgv', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/reglement-interieur', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/politique-confidentialite', priority: 0.2, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const formationPages: Entry[] = formations
    .filter((f) => !f.comingSoon)
    .map((f) => ({ path: `/formations/${f.slug}`, priority: 0.8, changeFrequency: 'monthly' }));

  const staticEntries = [...pages, ...formationPages].map((p) => ({
    url: `${site.url}${p.path === '/' ? '' : p.path}`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: post.updatedAt ?? post.publishedAt,
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }));

  return [...staticEntries, ...blogEntries];
}
