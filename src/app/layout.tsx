import type { Metadata, Viewport } from 'next';
import { DM_Sans, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://formaroute.fr'),
  title: {
    default: 'Auto-école Domont | Permis B, Code, AAC | Formaroute',
    template: '%s | Formaroute',
  },
  description:
    "Auto-école à Domont (95330). Formation code de la route, permis B, conduite accompagnée, stage de récupération de points. Taux de réussite élevé. Réservez votre évaluation gratuite.",
  keywords: [
    'auto école domont',
    'permis b domont',
    'code de la route domont',
    'conduite accompagnée 95',
    'stage récupération points val d\'oise',
    'auto école 95330',
  ],
  authors: [{ name: 'Formaroute' }],
  creator: 'Formaroute',
  publisher: 'Formaroute',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://formaroute.fr',
    siteName: 'Formaroute',
    title: 'Auto-école Domont | Permis B, Code, AAC | Formaroute',
    description:
      "Auto-école à Domont (95330). Formation code de la route, permis B, conduite accompagnée. Réservez votre évaluation gratuite.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Formaroute - Auto-école à Domont',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auto-école Domont | Formaroute',
    description: 'Formation permis B, code, conduite accompagnée à Domont (95)',
    images: ['/twitter-image.jpg'],
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
  verification: {
    google: 'verification_token',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// JSON-LD Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DrivingSchool',
  name: 'Formaroute',
  description:
    "Auto-école à Domont (95330). Formation code de la route, permis B, conduite accompagnée, stage de récupération de points.",
  url: 'https://formaroute.fr',
  telephone: '+33134198326',
  email: 'contact.formaroute@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4 avenue Jean Jaurès',
    addressLocality: 'Domont',
    postalCode: '95330',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '49.0333',
    longitude: '2.3333',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '12:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '15:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '13:00',
    },
  ],
  priceRange: '$$',
  areaServed: [
    { '@type': 'City', name: 'Domont' },
    { '@type': 'City', name: 'Montmorency' },
    { '@type': 'City', name: 'Eaubonne' },
    { '@type': 'City', name: 'Taverny' },
    { '@type': 'City', name: 'Ezanville' },
    { '@type': 'City', name: 'Bouffémont' },
  ],
  sameAs: [
    'https://facebook.com/formaroute',
    'https://instagram.com/formaroute',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${dmSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background font-body antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
