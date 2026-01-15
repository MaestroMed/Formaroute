# 🏗️ Architecture Technique - Formaroute

Ce document détaille l'architecture technique du site Formaroute.

---

## 📐 Vue d'Ensemble

```
┌─────────────────────────────────────────────────────────────────┐
│                         UTILISATEUR                              │
│                    (Browser / Mobile)                            │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                          VERCEL                                  │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │   Edge Network  │  │    Serverless   │  │    Analytics    │  │
│  │      (CDN)      │  │    Functions    │  │                 │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                       NEXT.JS 14+                                │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                     APP ROUTER                            │   │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐      │   │
│  │  │  Pages  │  │ Layouts │  │  API    │  │ Server  │      │   │
│  │  │  (SSG)  │  │         │  │ Routes  │  │ Actions │      │   │
│  │  └─────────┘  └─────────┘  └─────────┘  └─────────┘      │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
        ┌──────────┐   ┌──────────┐   ┌──────────┐
        │  SANITY  │   │  RESEND  │   │  CAL.COM │
        │   CMS    │   │  Email   │   │  Booking │
        └──────────┘   └──────────┘   └──────────┘
```

---

## 🗂️ Structure des Fichiers

```
Formaroute/
├── 📁 public/                    # Assets statiques
│   ├── favicon.ico
│   ├── og-image.jpg
│   ├── robots.txt
│   └── 📁 images/
│
├── 📁 src/
│   ├── 📁 app/                   # App Router (Pages)
│   │   ├── layout.tsx            # Layout racine
│   │   ├── page.tsx              # Homepage
│   │   ├── globals.css           # Styles globaux
│   │   ├── sitemap.ts            # Sitemap dynamique
│   │   ├── robots.ts             # Robots.txt
│   │   │
│   │   ├── 📁 formations/        # Pages formations
│   │   ├── 📁 tarifs/
│   │   ├── 📁 financement/
│   │   ├── 📁 a-propos/
│   │   ├── 📁 blog/
│   │   ├── 📁 contact/
│   │   ├── 📁 reservation/
│   │   ├── 📁 faq/
│   │   ├── 📁 auto-ecole-domont/
│   │   ├── 📁 auto-ecole-[ville]/
│   │   │
│   │   └── 📁 api/               # API Routes
│   │       ├── contact/route.ts
│   │       ├── newsletter/route.ts
│   │       └── revalidate/route.ts
│   │
│   ├── 📁 components/
│   │   ├── 📁 ui/                # shadcn/ui
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── accordion.tsx
│   │   │   └── ...
│   │   │
│   │   ├── 📁 layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── Breadcrumb.tsx
│   │   │
│   │   ├── 📁 sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── CoverageMap.tsx
│   │   │   ├── BlogPreview.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── PricingTable.tsx
│   │   │   ├── CostSimulator.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   └── MapEmbed.tsx
│   │   │
│   │   └── 📁 common/
│   │       ├── AnimatedCounter.tsx
│   │       ├── AnimatedCard.tsx
│   │       ├── TestimonialCard.tsx
│   │       ├── FormationCard.tsx
│   │       ├── PriceTag.tsx
│   │       └── Badge.tsx
│   │
│   ├── 📁 lib/
│   │   ├── utils.ts              # Helpers (cn, etc.)
│   │   ├── sanity.ts             # Client Sanity
│   │   ├── resend.ts             # Config email
│   │   └── schemas.ts            # Zod schemas
│   │
│   ├── 📁 hooks/
│   │   ├── useScrollAnimation.ts
│   │   ├── useInView.ts
│   │   └── useMediaQuery.ts
│   │
│   ├── 📁 types/
│   │   ├── index.ts
│   │   ├── formation.ts
│   │   └── blog.ts
│   │
│   └── 📁 data/
│       ├── formations.ts
│       ├── villes.ts
│       ├── faq.ts
│       └── navigation.ts
│
├── 📁 sanity/                    # Sanity Studio
│   ├── schemas/
│   ├── lib/
│   └── sanity.config.ts
│
├── package.json
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── .env.local
```

---

## 🔄 Flux de Données

### Rendu des Pages (SSG/ISR)

```
Build Time                          Runtime
    │                                   │
    ▼                                   ▼
┌─────────┐                       ┌─────────┐
│ Sanity  │───────────────────────│  Cache  │
│   CMS   │                       │ (Edge)  │
└─────────┘                       └─────────┘
    │                                   │
    ▼                                   ▼
┌─────────┐      Revalidate       ┌─────────┐
│  Next   │◄──────────────────────│ Webhook │
│  Build  │                       │ Sanity  │
└─────────┘                       └─────────┘
    │
    ▼
┌─────────┐
│  HTML   │
│ Statique│
└─────────┘
```

### Formulaire de Contact

```
┌──────────┐    POST     ┌──────────┐    API     ┌──────────┐
│  Client  │────────────▶│   API    │───────────▶│  Resend  │
│   Form   │             │  Route   │            │          │
└──────────┘             └──────────┘            └──────────┘
     │                        │                       │
     │    Validation          │    Send Email         │
     │    (Zod)               │                       │
     ▼                        ▼                       ▼
┌──────────┐             ┌──────────┐            ┌──────────┐
│ Success  │             │   Log    │            │  Inbox   │
│ Message  │             │ (Vercel) │            │ Proprio  │
└──────────┘             └──────────┘            └──────────┘
```

---

## 📦 Dépendances

### Production

```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "framer-motion": "^11.0.0",
    "@radix-ui/react-accordion": "^1.2.0",
    "@radix-ui/react-dialog": "^1.1.0",
    "@radix-ui/react-navigation-menu": "^1.2.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "react-hook-form": "^7.51.0",
    "zod": "^3.23.0",
    "@hookform/resolvers": "^3.3.0",
    "resend": "^3.2.0",
    "@sanity/client": "^6.15.0",
    "@sanity/image-url": "^1.0.0",
    "lucide-react": "^0.378.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.3.0",
    "class-variance-authority": "^0.7.0"
  }
}
```

### Développement

```json
{
  "devDependencies": {
    "typescript": "^5.4.0",
    "@types/node": "^20.0.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.57.0",
    "eslint-config-next": "^14.2.0",
    "prettier": "^3.2.0",
    "prettier-plugin-tailwindcss": "^0.5.0"
  }
}
```

---

## ⚙️ Configuration

### next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/accueil',
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
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

### tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        formaroute: {
          blue: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
            950: '#172554',
          },
          red: {
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#fecaca',
            300: '#fca5a5',
            400: '#f87171',
            500: '#ef4444',
            600: '#dc2626',
            700: '#b91c1c',
            800: '#991b1b',
            900: '#7f1d1d',
          },
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'counter': 'counter 2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
```

---

## 🔐 Variables d'Environnement

```env
# Site
NEXT_PUBLIC_SITE_URL=https://formaroute.fr
NEXT_PUBLIC_SITE_NAME=Formaroute

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxxxx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=skxxxxxxxxxxxxxxxx
SANITY_WEBHOOK_SECRET=xxxxxxxxxxxxxxxx

# Resend Email
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=contact@formaroute.fr

# Google
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaxxxxxxxxxx
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Cal.com
NEXT_PUBLIC_CAL_LINK=formaroute/evaluation
```

---

## 🚀 Déploiement

### Pipeline CI/CD (Vercel)

```
┌─────────────────────────────────────────────────────────────┐
│                        GitHub                                │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐                  │
│  │  Push   │───▶│   PR    │───▶│  Merge  │                  │
│  │ branch  │    │ Preview │    │  main   │                  │
│  └─────────┘    └─────────┘    └─────────┘                  │
└─────────────────────────────────────────────────────────────┘
       │               │               │
       ▼               ▼               ▼
┌─────────────────────────────────────────────────────────────┐
│                        Vercel                                │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐                  │
│  │  Build  │    │ Preview │    │  Prod   │                  │
│  │  Test   │    │  Deploy │    │ Deploy  │                  │
│  └─────────┘    └─────────┘    └─────────┘                  │
└─────────────────────────────────────────────────────────────┘
```

### Commandes

```bash
# Développement
npm run dev

# Build production
npm run build

# Lancer production
npm start

# Lint
npm run lint

# Type check
npm run type-check
```

---

## 📊 Performance

### Objectifs Core Web Vitals

| Métrique | Cible | Mesure |
|----------|-------|--------|
| LCP | < 2.5s | next/image, preload |
| FID | < 100ms | Code splitting |
| CLS | < 0.1 | Dimensions fixes |
| TTFB | < 600ms | Edge caching |

### Optimisations

1. **Images**: next/image avec WebP/AVIF
2. **Fonts**: Font display swap, preload
3. **JS**: Code splitting automatique
4. **CSS**: Tailwind purge, Critical CSS
5. **Cache**: ISR, Edge caching

---

## 🔒 Sécurité

### Headers HTTP

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: origin-when-cross-origin
Content-Security-Policy: default-src 'self'
Strict-Transport-Security: max-age=31536000
```

### Validation

- Zod pour validation des données
- Sanitization des inputs
- CSRF protection
- Rate limiting sur API routes
