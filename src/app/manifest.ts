import type { MetadataRoute } from 'next'

/**
 * Manifeste d'application.
 *
 * Complète le jeu d'icônes : `icon.svg`, `favicon.ico` et `apple-icon.png`
 * couvrent l'onglet et l'écran d'accueil iOS ; les deux PNG déclarés ici
 * couvrent Android et l'installation en application.
 *
 * `purpose: 'maskable'` sur le 512 : Android recadre l'icône selon la forme
 * imposée par le lanceur. Sans cette déclaration, le monogramme est rogné sur
 * les appareils qui utilisent un masque circulaire.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Formaroute — Auto-école à Domont',
    short_name: 'Formaroute',
    description:
      'Auto-école à Domont (95330) : code de la route, permis B manuelle ou automatique, conduite accompagnée et passerelle.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    lang: 'fr',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
