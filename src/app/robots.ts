import { MetadataRoute } from 'next';
import { site } from '@/data/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Ne pas bloquer /_next/ : Google en a besoin pour afficher les pages.
        disallow: ['/api/'],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
