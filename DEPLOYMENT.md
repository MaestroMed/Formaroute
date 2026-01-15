# 🚀 Guide de Déploiement - Formaroute

Ce guide détaille le processus complet de déploiement du site Formaroute sur Vercel avec un domaine hébergé sur Hostinger.

---

## 📋 Prérequis

### Comptes Nécessaires

- [ ] **GitHub** - Pour héberger le code source
- [ ] **Vercel** - Pour le déploiement (gratuit)
- [ ] **Hostinger** - Pour le domaine
- [ ] **Resend** - Pour les emails (gratuit jusqu'à 3000/mois)
- [ ] **Sanity** - Pour le CMS blog (gratuit tier)
- [ ] **Cal.com** - Pour les réservations (gratuit tier)
- [ ] **Google Cloud** - Pour Maps API (crédit gratuit)

### Informations à Préparer

- [ ] Nom de domaine choisi (ex: formaroute.fr)
- [ ] Accès au compte Hostinger
- [ ] Logo et images du site
- [ ] Contenu du QUESTIONNAIRE.md rempli

---

## 1️⃣ Configuration GitHub

### Créer le Repository

1. Aller sur [github.com](https://github.com)
2. Cliquer sur "New repository"
3. Nom: `formaroute`
4. Visibilité: Private (recommandé)
5. Créer le repository

### Pousser le Code

```bash
# Dans le dossier du projet
cd Formaroute

# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "feat: initial commit - Formaroute website"

# Lier au repository GitHub
git remote add origin https://github.com/[USERNAME]/formaroute.git

# Pousser le code
git branch -M main
git push -u origin main
```

---

## 2️⃣ Configuration Vercel

### Connecter le Projet

1. Aller sur [vercel.com](https://vercel.com)
2. Se connecter avec GitHub
3. Cliquer sur "Add New Project"
4. Sélectionner le repository `formaroute`
5. Configurer le projet:

| Paramètre | Valeur |
|-----------|--------|
| Framework Preset | Next.js |
| Root Directory | ./ |
| Build Command | `npm run build` |
| Output Directory | .next |
| Install Command | `npm install` |

### Variables d'Environnement

Dans Vercel > Project Settings > Environment Variables, ajouter:

```env
# Site
NEXT_PUBLIC_SITE_URL=https://formaroute.fr

# Email (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxxxx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=skxxxxxxxxxx

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaxxxxxxxxxx

# Cal.com
NEXT_PUBLIC_CAL_LINK=formaroute/evaluation

# Analytics (optionnel)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Premier Déploiement

1. Cliquer sur "Deploy"
2. Attendre la fin du build (2-5 minutes)
3. Le site est accessible sur `formaroute.vercel.app`

---

## 3️⃣ Configuration du Domaine (Hostinger)

### Acheter le Domaine

1. Aller sur [hostinger.fr](https://hostinger.fr)
2. Rechercher le domaine souhaité (ex: formaroute.fr)
3. L'ajouter au panier et finaliser l'achat
4. Vérifier l'email de confirmation

### Configurer les DNS

#### Option A: Utiliser les Nameservers Vercel (Recommandé)

1. Dans Hostinger > Domaines > [votre domaine] > DNS / Nameservers
2. Changer les nameservers vers:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```
3. Attendre la propagation (jusqu'à 48h)

#### Option B: Ajouter les Enregistrements DNS

Si vous préférez garder les nameservers Hostinger:

1. Dans Hostinger > DNS Zone Editor
2. Supprimer tous les enregistrements A existants
3. Ajouter:

| Type | Nom | Valeur | TTL |
|------|-----|--------|-----|
| A | @ | 76.76.21.21 | 3600 |
| CNAME | www | cname.vercel-dns.com | 3600 |

### Ajouter le Domaine dans Vercel

1. Dans Vercel > Project > Settings > Domains
2. Ajouter `formaroute.fr`
3. Ajouter `www.formaroute.fr`
4. Configurer la redirection www → domaine principal
5. Vérifier que le SSL est actif (automatique)

---

## 4️⃣ Configuration des Services Externes

### Resend (Emails)

1. Créer un compte sur [resend.com](https://resend.com)
2. Aller dans API Keys > Create API Key
3. Copier la clé dans les variables Vercel
4. Configurer le domaine d'envoi:
   - Domains > Add Domain > `formaroute.fr`
   - Ajouter les enregistrements DNS demandés dans Hostinger

```
Type: TXT
Name: resend._domainkey
Value: [valeur fournie par Resend]
```

### Sanity CMS

1. Créer un compte sur [sanity.io](https://sanity.io)
2. Créer un nouveau projet
3. Noter le Project ID
4. Créer un token API (Settings > API > Tokens)
5. Déployer le Sanity Studio:

```bash
cd sanity
npm run deploy
```

### Cal.com (Booking)

1. Créer un compte sur [cal.com](https://cal.com)
2. Créer un event type "Évaluation gratuite":
   - Durée: 30 minutes
   - Localisation: À l'auto-école
3. Copier le lien d'embed
4. Mettre à jour `NEXT_PUBLIC_CAL_LINK`

### Google Maps API

1. Aller sur [Google Cloud Console](https://console.cloud.google.com)
2. Créer un projet "Formaroute"
3. Activer l'API Maps JavaScript
4. Créer une clé API (APIs & Services > Credentials)
5. Restreindre la clé:
   - Restriction HTTP: `formaroute.fr/*`
   - API restriction: Maps JavaScript API

---

## 5️⃣ Configuration Analytics

### Vercel Analytics

1. Dans Vercel > Project > Analytics
2. Activer "Web Analytics"
3. Activer "Speed Insights" (optionnel)

### Google Analytics 4 (Optionnel)

1. Créer une propriété GA4 sur [analytics.google.com](https://analytics.google.com)
2. Copier l'ID de mesure (G-XXXXXXXXXX)
3. Ajouter aux variables d'environnement

### Google Search Console

1. Aller sur [search.google.com/search-console](https://search.google.com/search-console)
2. Ajouter la propriété `formaroute.fr`
3. Vérifier via DNS (ajouter l'enregistrement TXT dans Hostinger)
4. Soumettre le sitemap: `https://formaroute.fr/sitemap.xml`

---

## 6️⃣ Checklist Post-Déploiement

### Vérifications Techniques

- [ ] Site accessible sur le domaine principal
- [ ] Redirection www vers non-www fonctionne
- [ ] SSL actif (cadenas vert)
- [ ] Toutes les pages chargent sans erreur
- [ ] Formulaire de contact envoie les emails
- [ ] Booking Cal.com fonctionne
- [ ] Google Maps s'affiche
- [ ] Images chargent correctement

### SEO

- [ ] Sitemap accessible: `/sitemap.xml`
- [ ] Robots.txt accessible: `/robots.txt`
- [ ] Sitemap soumis à Google Search Console
- [ ] Propriété Google Business Profile mise à jour
- [ ] Métadonnées OpenGraph testées (Facebook Debugger)

### Performance

- [ ] Lighthouse score > 90 sur toutes les catégories
- [ ] Core Web Vitals en vert
- [ ] Images optimisées (WebP)
- [ ] Fonts preloaded

### Monitoring

- [ ] Vercel Analytics activé
- [ ] Alertes email configurées (Vercel > Settings > Notifications)

---

## 7️⃣ Déploiement Continu

### Workflow Automatique

Chaque push sur `main` déclenche automatiquement:

1. Build du projet
2. Tests (si configurés)
3. Déploiement en production

### Preview Deployments

Pour les branches de feature:

1. Créer une branche: `git checkout -b feature/nouvelle-page`
2. Push la branche: `git push origin feature/nouvelle-page`
3. Vercel crée automatiquement une preview URL
4. Tester sur l'URL de preview
5. Merger dans main pour déployer en production

---

## 8️⃣ Maintenance

### Mises à Jour

```bash
# Mettre à jour les dépendances
npm update

# Vérifier les vulnérabilités
npm audit

# Corriger les vulnérabilités
npm audit fix
```

### Backups

- **Code**: Géré par Git/GitHub
- **Contenu (Sanity)**: Backups automatiques sur Sanity
- **Médias**: Stockés sur Sanity CDN

### Monitoring

Vérifier régulièrement:
- Vercel Analytics (performances)
- Google Search Console (SEO, erreurs)
- Core Web Vitals (Page Speed Insights)

---

## 🆘 Dépannage

### Erreur de Build

```bash
# Tester le build localement
npm run build

# Vérifier les logs dans Vercel > Deployments > [deployment] > Logs
```

### DNS non propagé

- Vérifier avec [whatsmydns.net](https://whatsmydns.net)
- Attendre jusqu'à 48h pour la propagation complète

### SSL non actif

- Vérifier que les DNS pointent vers Vercel
- Dans Vercel > Domains, cliquer sur "Refresh"

### Emails non envoyés

1. Vérifier la clé API Resend
2. Vérifier le domaine dans Resend
3. Vérifier les logs dans Resend Dashboard

---

## 📞 Support

### Vercel
- Documentation: [vercel.com/docs](https://vercel.com/docs)
- Support: [vercel.com/support](https://vercel.com/support)

### Hostinger
- Support: [hostinger.fr/contact](https://hostinger.fr/contact)
- Chat en direct disponible

### Resend
- Documentation: [resend.com/docs](https://resend.com/docs)

---

## 📋 Résumé des URLs

| Service | URL |
|---------|-----|
| Site Production | https://formaroute.fr |
| Vercel Dashboard | https://vercel.com/[team]/formaroute |
| GitHub Repository | https://github.com/[user]/formaroute |
| Sanity Studio | https://formaroute.sanity.studio |
| Google Search Console | https://search.google.com/search-console?resource_id=https://formaroute.fr |
| Cal.com | https://cal.com/formaroute |
