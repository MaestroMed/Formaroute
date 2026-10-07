/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Cache des images optimisées : 31 jours.
    //
    // Sans cette valeur, Next retombe sur son défaut (court) et Vercel
    // RETRANSFORME l'image à chaque expiration au lieu de la resservir.
    // Facture d'août 2026 : 366 557 transformations pour 4,86 M de lectures
    // sur le parc, soit $29,15 — une retransformation toutes les 13 lectures.
    //
    // ⚠ Les noms de fichiers ne sont pas hashés : un visuel modifié doit être
    // RENOMMÉ, sinon l'ancienne version reste servie jusqu'à 31 jours.
    minimumCacheTTL: 2678400, // 31 jours
    // Aucune image distante : seules les images de /public sont optimisées.
    // (Autoriser un domaine externe permettrait à n'importe qui de faire
    // transformer — et facturer — ses propres images via /_next/image.)
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/accueil',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
