import type { Metadata } from 'next';
import { site, absoluteUrl } from '@/data/site';

interface BuildMetadataInput {
  /** Titre de la page, sans « | Formaroute » (ajouté par le gabarit racine). */
  title: string;
  description: string;
  /** Chemin canonique, ex. « /tarifs ». */
  path: string;
  /** Pages à ne pas indexer. */
  noIndex?: boolean;
  type?: 'website' | 'article';
}

/**
 * Métadonnées d'une page.
 *
 * Next remplace l'objet `openGraph` du layout dès qu'une page en déclare un :
 * on reconstruit donc ici l'objet complet (url, siteName, locale) pour que
 * chaque page garde un partage social correct et une URL canonique.
 * L'image de partage est fournie par `app/opengraph-image.tsx`.
 */
export function buildMetadata({
  title,
  description,
  path,
  noIndex,
  type = 'website',
}: BuildMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: 'fr_FR',
      siteName: site.name,
      url: absoluteUrl(path),
      title: `${title} | ${site.name}`,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${site.name}`,
      description,
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
