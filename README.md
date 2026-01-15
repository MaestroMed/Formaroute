# 🚗 Formaroute - Auto-École Domont

Site vitrine world-class pour l'auto-école Formaroute à Domont (95330, Val-d'Oise).

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4+-38B2AC?style=flat-square&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=flat-square&logo=vercel)

---

## 🎯 Aperçu du Projet

### Vision

Créer un site vitrine **state-of-the-art** qui positionne Formaroute comme l'auto-école de référence à Domont et dans les 15 villes environnantes.

### Caractéristiques

- ✨ **Design Premium** - Animations fluides, UI/UX cutting-edge
- 🎨 **Palette Bleu/Rouge** - Identité visuelle forte et mémorable
- 📱 **Ultra Responsive** - Expérience parfaite sur tous les appareils
- 🔍 **SEO Local Agressif** - 60+ pages optimisées pour le référencement
- 🚀 **Performance A+** - Core Web Vitals optimisés
- ♿ **Accessible** - Conformité WCAG AA

---

## 🛠️ Stack Technologique

| Catégorie | Technologie | Version |
|-----------|-------------|---------|
| Framework | Next.js (App Router) | 14.2+ |
| Language | TypeScript | 5+ |
| Styling | Tailwind CSS | 3.4+ |
| UI Components | shadcn/ui | Latest |
| Animations | Framer Motion | 11+ |
| Forms | React Hook Form + Zod | 7.51+ |
| Icons | Lucide React | 0.378+ |
| CMS | Sanity | v3 |
| Email | Resend | 3.2+ |
| Booking | Cal.com | Embed |
| Maps | Google Maps API | Latest |
| Analytics | Vercel Analytics | Latest |

---

## 📁 Structure du Projet

```
Formaroute/
├── 📄 .cursorrules           # Règles et conventions Cursor
├── 📄 README.md              # Ce fichier
├── 📄 QUESTIONNAIRE.md       # Questions pour le propriétaire
├── 📄 DESIGN_SYSTEM.md       # Système de design
├── 📄 CONTENT_CHECKLIST.md   # Contenu à fournir
├── 📄 FEATURES.md            # Spécifications fonctionnelles
├── 📄 ARCHITECTURE.md        # Architecture technique
├── 📄 SEO_STRATEGY.md        # Stratégie SEO
├── 📄 DEPLOYMENT.md          # Guide de déploiement
│
├── 📁 public/                # Assets statiques
│   ├── favicon.ico
│   ├── og-image.jpg
│   └── ...
│
├── 📁 src/
│   ├── 📁 app/               # Pages Next.js (App Router)
│   │   ├── layout.tsx        # Layout racine
│   │   ├── page.tsx          # Homepage
│   │   ├── globals.css       # Styles globaux
│   │   ├── sitemap.ts        # Sitemap dynamique
│   │   ├── robots.ts         # Robots.txt
│   │   │
│   │   ├── 📁 formations/    # Pages formations
│   │   ├── 📁 tarifs/        # Tarification
│   │   ├── 📁 financement/   # Options financement
│   │   ├── 📁 a-propos/      # À propos
│   │   ├── 📁 blog/          # Articles
│   │   ├── 📁 contact/       # Contact
│   │   ├── 📁 reservation/   # Booking
│   │   ├── 📁 faq/           # FAQ
│   │   │
│   │   ├── 📁 auto-ecole-domont/      # SEO local
│   │   ├── 📁 auto-ecole-[ville]/     # Template villes
│   │   │
│   │   └── 📁 api/           # API Routes
│   │
│   ├── 📁 components/
│   │   ├── 📁 ui/            # shadcn/ui
│   │   ├── 📁 layout/        # Header, Footer, Nav
│   │   ├── 📁 sections/      # Hero, Services, etc.
│   │   └── 📁 common/        # Composants réutilisables
│   │
│   ├── 📁 lib/               # Utilitaires
│   ├── 📁 hooks/             # Custom hooks
│   ├── 📁 types/             # Types TypeScript
│   └── 📁 data/              # Données statiques
│
├── 📁 sanity/                # Sanity Studio (CMS)
│
├── 📄 package.json
├── 📄 tailwind.config.ts
├── 📄 next.config.js
└── 📄 tsconfig.json
```

---

## 🚀 Démarrage Rapide

### Prérequis

- Node.js 18+
- npm ou pnpm
- Compte Vercel
- Compte Sanity (optionnel, pour le blog)

### Installation

```bash
# Cloner le repository
git clone https://github.com/[username]/formaroute.git
cd formaroute

# Installer les dépendances
npm install

# Copier les variables d'environnement
cp .env.example .env.local

# Lancer en développement
npm run dev
```

### Variables d'Environnement

Créer un fichier `.env.local` :

```env
# Site
NEXT_PUBLIC_SITE_URL=https://formaroute.fr

# Resend (emails)
RESEND_API_KEY=re_xxxxx

# Sanity (CMS)
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxx
NEXT_PUBLIC_SANITY_DATASET=production

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=xxxxx

# Cal.com (booking)
NEXT_PUBLIC_CAL_LINK=formaroute/evaluation

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXX
```

---

## 📜 Scripts Disponibles

```bash
# Développement
npm run dev           # Lancer le serveur de dev (http://localhost:3000)

# Build
npm run build         # Build de production
npm run start         # Lancer le build

# Qualité
npm run lint          # ESLint
npm run type-check    # Vérification TypeScript

# Sanity
npm run sanity:dev    # Lancer Sanity Studio
npm run sanity:deploy # Déployer Sanity Studio
```

---

## 📊 Pages du Site (60+)

### Pages Principales
- `/` - Homepage
- `/formations` - Liste des formations
- `/tarifs` - Grille tarifaire + Simulateur
- `/contact` - Formulaire de contact
- `/reservation` - Prise de RDV (Cal.com)
- `/faq` - Questions fréquentes

### Pages Formations (10)
- `/formations/code-de-la-route`
- `/formations/permis-b`
- `/formations/permis-b-accelere`
- `/formations/conduite-accompagnee`
- `/formations/conduite-supervisee`
- `/formations/permis-boite-auto`
- `/formations/stage-recuperation-points`
- `/formations/formation-moniteur`
- `/formations/perfectionnement`
- `/formations/evaluation-initiale`

### Pages SEO Locales (20+)
- `/auto-ecole-domont` (page pilier)
- `/auto-ecole-montmorency`
- `/auto-ecole-eaubonne`
- `/auto-ecole-taverny`
- `/permis-b-domont`
- `/code-de-la-route-domont`
- ... et 15+ autres villes

### Pages Annexes
- `/financement/cpf`
- `/financement/pole-emploi`
- `/a-propos/equipe`
- `/a-propos/vehicules`
- `/mentions-legales`
- `/cgv`
- `/politique-confidentialite`

---

## 🎨 Design System

### Couleurs

| Nom | Hex | Usage |
|-----|-----|-------|
| Blue 600 | `#2563eb` | Couleur principale, CTA |
| Blue 900 | `#1e3a8a` | Texte foncé, accents |
| Red 600 | `#dc2626` | Accents, urgence |
| Slate 50 | `#f8fafc` | Backgrounds clairs |
| Slate 900 | `#0f172a` | Texte principal |

### Typographie

- **Headings**: Clash Display / Satoshi
- **Body**: Inter / DM Sans
- **Mono**: JetBrains Mono (prix, stats)

---

## 🔍 SEO

### Objectifs

- **Position 1-3** sur "auto école domont"
- **Top 5** sur 15 villes environnantes
- **Lighthouse SEO**: 100/100
- **Core Web Vitals**: Tous en vert

### Implémentations

- Schema.org (DrivingSchool, LocalBusiness, FAQ)
- Sitemap XML dynamique
- OpenGraph + Twitter Cards
- Canonical URLs
- Contenu unique par page locale

---

## 📈 Performance

### Objectifs Core Web Vitals

| Metric | Cible | 
|--------|-------|
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |

### Optimisations

- Images WebP/AVIF via `next/image`
- Fonts preloaded
- Code splitting automatique
- ISR pour les pages dynamiques

---

## 🚢 Déploiement

### Vercel (Recommandé)

1. Connecter le repository GitHub à Vercel
2. Configurer les variables d'environnement
3. Déployer automatiquement à chaque push

### Domaine (Hostinger)

1. Acheter le domaine sur Hostinger
2. Configurer les DNS vers Vercel
3. Activer SSL automatique

Voir [DEPLOYMENT.md](./DEPLOYMENT.md) pour le guide complet.

---

## 📞 Contact & Support

**Auto-École Formaroute**
- 📍 Adresse: [À compléter], 95330 Domont
- 📞 Téléphone: [À compléter]
- 📧 Email: [À compléter]
- 🌐 Site: https://formaroute.fr

---

## 📄 Licence

Ce projet est propriétaire. © 2026 Formaroute. Tous droits réservés.
