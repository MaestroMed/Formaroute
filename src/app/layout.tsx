import type { Metadata, Viewport } from 'next';
import { DM_Sans, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MotionProvider } from '@/components/layout/MotionProvider';
import { JsonLd } from '@/components/seo/JsonLd';
import { site } from '@/data/site';
import { villes } from '@/data/villes';

// Fonts
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

// Metadata
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Auto-école Domont | Permis B, Code, Conduite accompagnée | Formaroute',
    template: '%s | Formaroute',
  },
  description:
    'Auto-école à Domont (95330) : code de la route, permis B en boîte manuelle ou automatique, conduite accompagnée, passerelle. Évaluation de départ et tarifs TTC affichés.',
  keywords: [
    'auto école domont',
    'permis b domont',
    'code de la route domont',
    'conduite accompagnée 95',
    "permis boîte automatique val d'oise",
    'auto école 95330',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: '/' },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: site.url,
    siteName: site.name,
    title: 'Auto-école Domont | Permis B, Code, Conduite accompagnée | Formaroute',
    description:
      'Auto-école à Domont (95330) : code de la route, permis B manuelle ou automatique, conduite accompagnée. Tarifs TTC transparents.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auto-école Domont | Formaroute',
    description: 'Code, permis B manuelle ou automatique, conduite accompagnée à Domont (95)',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// JSON-LD : fiche établissement (Google, Bing, assistants)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DrivingSchool',
  '@id': `${site.url}/#organisation`,
  name: site.name,
  description: site.description,
  url: site.url,
  logo: `${site.url}/logo/logo-512.jpg`,
  image: `${site.url}/logo/logo-512.jpg`,
  telephone: site.contact.phoneE164,
  email: site.contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.postalCode,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: site.address.geo.latitude,
    longitude: site.address.geo.longitude,
  },
  openingHoursSpecification: site.hours.schema.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.dayOfWeek,
    opens: h.opens,
    closes: h.closes,
  })),
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  areaServed: villes.map((v) => ({ '@type': 'City', name: v.name })),
  legalName: site.legal.companyName,
  sameAs: [site.social.googleBusiness, site.social.facebook, site.social.instagram].filter(Boolean),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${dmSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-body antialiased">
        <JsonLd data={jsonLd} />
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-formaroute-blue-700 focus:shadow-lg"
        >
          Aller au contenu
        </a>
        <MotionProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main id="contenu" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </MotionProvider>
      </body>
    </html>
  );
}
