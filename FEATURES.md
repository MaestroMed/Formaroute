# ⚙️ Spécifications Fonctionnelles - Formaroute

Ce document détaille toutes les fonctionnalités du site Formaroute.

---

## 🎯 Vue d'Ensemble

### Objectifs du Site

1. **Acquisition de prospects** - Convertir les visiteurs en contacts qualifiés
2. **Information** - Présenter clairement les formations et tarifs
3. **Réservation** - Permettre la prise de RDV en ligne
4. **SEO Local** - Dominer les recherches dans le Val-d'Oise
5. **Crédibilité** - Inspirer confiance avec témoignages et résultats

### Personas Cibles

| Persona | Description | Besoins Principaux |
|---------|-------------|-------------------|
| Jeune (16-18 ans) | Lycéen, premier permis | AAC, prix, parents |
| Jeune adulte (18-25 ans) | Étudiant/premier emploi | Permis B, CPF, flexibilité |
| Adulte (25-45 ans) | Reconversion, besoin pro | CPF, accéléré, horaires |
| Senior (45+) | Remise à niveau | Perfectionnement, patience |
| Conducteur sanctionné | Récup points | Stage points, disponibilité |

---

## 📄 Pages et Fonctionnalités

### 1. Homepage

#### Hero Section
- **Headline dynamique** avec animation de texte
- **Sous-titre** avec proposition de valeur
- **CTA principal**: "Réserver une évaluation gratuite" → Page réservation
- **CTA secondaire**: "Découvrir nos formations" → Section formations
- **Image/Vidéo** de fond avec overlay
- **Éléments de confiance**: Taux de réussite, avis Google

#### Section Services
- **6 cards formations** avec:
  - Icône animée
  - Titre formation
  - Description courte (50 mots)
  - Prix "à partir de"
  - Lien vers page détaillée
- **Animation**: Stagger reveal au scroll

#### Section Statistiques
- **4 compteurs animés**:
  - Taux de réussite (%)
  - Années d'expérience
  - Élèves formés
  - Note Google
- **Animation**: Counter up au scroll (in-view)

#### Section Pourquoi Nous
- **4 arguments différenciants** avec:
  - Icône
  - Titre
  - Description
- Exemples: Moniteurs certifiés, Véhicules récents, Flexibilité, Taux de réussite

#### Section Témoignages
- **Carousel** de témoignages (5+)
- Chaque témoignage:
  - Photo/Avatar
  - Prénom et initial
  - Formation suivie
  - Texte (50-100 mots)
  - Note étoiles
- **Autoplay** avec pause au hover
- **Navigation**: Flèches + dots

#### Section Zone de Couverture
- **Carte interactive** (Google Maps)
- **Liste des villes** desservies (cliquables → pages SEO)
- **Rayon d'action** visuel

#### Section Blog Preview
- **3 derniers articles** du blog
- Titre, extrait, date, image
- Lien "Voir tous les articles"

#### Section CTA Final
- **Headline d'urgence**: "Prêt à prendre la route ?"
- **CTA**: Réservation
- **Téléphone cliquable** (click-to-call)

#### Footer
- **Logo**
- **Navigation** rapide
- **Coordonnées** (NAP cohérent)
- **Réseaux sociaux**
- **Newsletter** signup
- **Liens légaux**
- **Copyright**

---

### 2. Pages Formations

#### Template Commun

Chaque page formation contient:

1. **Hero Formation**
   - Titre H1 optimisé SEO
   - Breadcrumb
   - Image/illustration
   - Badge (Populaire, Nouveau, etc.)
   - Prix "à partir de"
   - CTA Réservation

2. **Introduction**
   - Texte de présentation (150-200 mots)
   - Points clés en liste

3. **Programme Détaillé**
   - Accordion ou tabs
   - Modules/étapes de formation
   - Durées estimées

4. **Déroulement**
   - Timeline visuelle
   - Étapes: Inscription → Formation → Examen

5. **Section Tarifs**
   - Tableau des formules
   - Ce qui est inclus
   - Options supplémentaires
   - CTA Simulateur

6. **FAQ Spécifique**
   - 5-10 questions liées à la formation
   - Schema.org FAQ

7. **Témoignages Filtrés**
   - Témoignages de cette formation spécifique

8. **CTA Final**
   - Réservation évaluation

#### Formations Spécifiques

| Formation | URL | Spécificités |
|-----------|-----|--------------|
| Code de la Route | `/formations/code-de-la-route` | Lien vers Prépacode, sessions |
| Permis B | `/formations/permis-b` | Formules 20h/25h/30h |
| Permis B Accéléré | `/formations/permis-b-accelere` | Calendrier stages |
| AAC | `/formations/conduite-accompagnee` | Guide parents, conditions |
| Conduite Supervisée | `/formations/conduite-supervisee` | Différences avec AAC |
| Permis BEA | `/formations/permis-boite-auto` | Passerelle manuelle |
| Stage Points | `/formations/stage-recuperation-points` | Dates, inscription rapide |
| Formation Moniteur | `/formations/formation-moniteur` | Coming soon, waitlist |
| Perfectionnement | `/formations/perfectionnement` | Types disponibles |
| Évaluation | `/formations/evaluation-initiale` | Gratuit/Payant, RDV |

---

### 3. Page Tarifs

#### Grille Tarifaire
- **Tableau comparatif** des formules
- **Filtres** par type de formation
- **Détail** de ce qui est inclus
- **Prix** clairement affichés

#### Simulateur de Coût
- **Formulaire interactif**:
  1. Type de formation (select)
  2. Nombre d'heures estimées (slider)
  3. Options (code en ligne, etc.)
  4. Mode de financement (CPF, perso)
- **Calcul en temps réel**
- **Résultat**:
  - Prix total
  - Décomposition
  - Reste à charge (si CPF)
  - CTA Réservation

#### Options de Paiement
- Paiement en plusieurs fois
- CPF
- Aides disponibles
- Liens vers pages financement

---

### 4. Pages Financement

#### CPF
- Explication du dispositif
- Formations éligibles
- Montant disponible (lien vers moncompteformation.gouv.fr)
- Étapes pour utiliser le CPF
- FAQ CPF

#### Pôle Emploi
- Aides disponibles (AIF, etc.)
- Conditions d'éligibilité
- Démarches
- Contact conseiller

#### Mission Locale
- Public concerné (16-25 ans)
- Types d'aides
- Démarches

#### Paiement Facilité
- Échelonnement possible
- Conditions
- Exemple de mensualités

---

### 5. Pages À Propos

#### Présentation
- Histoire de l'auto-école
- Mission et vision
- Chiffres clés

#### Équipe
- **Profils individuels**:
  - Photo
  - Nom et fonction
  - Bio
  - Certifications
  - Années d'expérience
- Effet hover avec infos supplémentaires

#### Véhicules
- **Galerie** de véhicules
- Fiche par véhicule:
  - Photo
  - Marque/Modèle
  - Type (manuel/auto)
  - Équipements

#### Locaux
- **Galerie photos**
- Description des espaces
- Équipements (salle code, simulateur, etc.)

#### Valeurs
- 4-5 valeurs avec descriptions
- Engagements qualité

---

### 6. Page Contact

#### Formulaire de Contact
- **Champs**:
  - Nom* (text)
  - Prénom* (text)
  - Email* (email)
  - Téléphone* (tel)
  - Sujet (select): Renseignements, Inscription, Réclamation, Autre
  - Formation intéressée (select)
  - Message* (textarea)
  - RGPD checkbox*
- **Validation** côté client (Zod)
- **Envoi** via API route → Resend
- **Confirmation** avec message de succès
- **Email** envoyé au propriétaire

#### Informations de Contact
- Adresse avec lien Maps
- Téléphone (click-to-call)
- Email (mailto)
- Horaires d'ouverture
- Réseaux sociaux

#### Carte Google Maps
- Embed Google Maps
- Marqueur personnalisé
- Itinéraire depuis position

---

### 7. Page Réservation

#### Embed Cal.com
- Widget de réservation intégré
- Types de RDV:
  - Évaluation gratuite (30 min)
  - RDV inscription
  - RDV code
- Sélection créneau
- Formulaire de confirmation
- Rappel par email/SMS

---

### 8. Page FAQ

#### Structure
- **Catégories** (tabs ou sections):
  - Général
  - Code de la route
  - Permis B
  - Conduite accompagnée
  - Financement
  - Pratique
- **Accordion** pour chaque question
- **Recherche** dans les FAQ
- **Schema.org FAQPage** pour SEO

#### Questions Type
- Combien de temps pour avoir le permis ?
- Quel est le taux de réussite ?
- Peut-on payer en plusieurs fois ?
- Quels documents pour l'inscription ?
- Comment utiliser mon CPF ?
- etc. (40-50 questions)

---

### 9. Page Témoignages

#### Liste Complète
- Tous les témoignages (10-30)
- **Filtres**:
  - Par formation
  - Par note
- **Tri**: Plus récents, meilleure note
- **Pagination** ou infinite scroll

#### Chaque Témoignage
- Photo/Avatar
- Prénom, âge (optionnel)
- Formation
- Date
- Note étoiles
- Texte complet
- Vérifié badge

#### Lien Avis Externes
- Bouton vers Google Reviews
- Note moyenne Google affichée

---

### 10. Page Résultats

#### Statistiques
- **Taux de réussite par examen**:
  - Code
  - Permis B (1ère présentation)
  - Permis B (global)
  - AAC
- **Comparaison** avec moyenne nationale
- **Graphiques** visuels (barres, donuts)

#### Historique
- Évolution sur les dernières années (graphique ligne)

#### Méthodologie
- Explication des chiffres
- Source (Ministère de l'Intérieur)

---

### 11. Pages SEO Locales

#### Template Ville
Chaque page `/auto-ecole-[ville]` contient:

1. **Hero localisé**
   - H1: "Auto-école près de [Ville]"
   - Sous-titre mentionnant la proximité

2. **Introduction locale**
   - Texte unique (200+ mots)
   - Mentions de la ville
   - Distance et temps de trajet

3. **Comment venir**
   - Transports en commun
   - En voiture
   - Carte avec trajet

4. **Zones de prise en charge**
   - Quartiers de la ville desservis
   - Points de RDV possibles

5. **Formations disponibles**
   - Mêmes formations, contextualisées

6. **Témoignages locaux**
   - Filtrer par ville si possible

7. **FAQ locale**
   - Questions spécifiques à la ville

8. **CTA**
   - Réservation

#### Pages Service + Ville
- `/permis-b-domont`
- `/code-de-la-route-domont`
- etc.

Contenu similaire mais focalisé sur le service spécifique.

---

### 12. Blog

#### Liste Articles
- **Grille** ou liste d'articles
- Chaque carte:
  - Image featured
  - Catégorie (badge)
  - Titre
  - Extrait (150 caractères)
  - Date
  - Temps de lecture
- **Filtres** par catégorie
- **Pagination**

#### Article Détail
- **Header**:
  - Breadcrumb
  - Catégorie
  - Titre H1
  - Meta (date, auteur, temps lecture)
  - Image featured
- **Contenu** riche (MDX):
  - Headings structurés
  - Images
  - Listes
  - Callouts
  - Code si besoin
- **Table des matières** (sticky sidebar)
- **Partage** social
- **Articles liés**
- **CTA** inscription newsletter

#### Catégories
- Conseils
- Actualités
- Réglementation
- Témoignages

---

### 13. Pages Légales

#### Mentions Légales
- Éditeur du site
- Directeur de publication
- Hébergeur
- Crédits

#### CGV
- Conditions générales auto-école
- Inscriptions
- Annulations
- Responsabilités

#### Politique de Confidentialité
- Collecte de données
- Utilisation
- Cookies
- Droits RGPD
- Contact DPO

#### Règlement Intérieur
- Règles de l'établissement
- Obligations élèves
- Sanctions

---

### 14. Pages Utilitaires

#### Horaires
- Tableau détaillé
- Horaires spéciaux

#### Accès
- Plan détaillé
- Parking
- Transports
- Accessibilité PMR

#### Espace Élève
- Redirection vers plateforme existante
- OU login si développé

#### Inscription
- Formulaire d'inscription complet
- Documents requis
- Paiement en ligne (optionnel)

---

## 🔧 Fonctionnalités Techniques

### Navigation

#### Header
- Logo (lien accueil)
- **Menu principal**:
  - Formations (mega-menu)
  - Tarifs
  - À propos (dropdown)
  - Blog
  - Contact
- **CTA**: Réservation
- **Téléphone** click-to-call
- Sticky on scroll
- Mobile: Hamburger → Drawer

#### Mega-Menu Formations
- Grid de formations
- Descriptions courtes
- Liens rapides
- Image de fond

#### Mobile Menu
- Drawer animé
- Accordions pour sous-menus
- CTA visible

### Footer
- 4 colonnes sur desktop
- Logo et description
- Navigation
- Contact
- Newsletter
- Réseaux sociaux
- Liens légaux
- Copyright

---

### Formulaires

#### Validation
- Zod schemas
- Messages d'erreur en français
- Validation temps réel

#### Soumission
- Loading state
- Success message
- Error handling
- Retry logic

#### Anti-spam
- Honeypot field
- Rate limiting
- reCAPTCHA (optionnel)

---

### SEO Technique

#### Metadata
- Titre unique par page (50-60 car.)
- Description unique (150-160 car.)
- OpenGraph complet
- Twitter Cards

#### Schema.org
- DrivingSchool (global)
- LocalBusiness (pages locales)
- FAQPage (page FAQ)
- Review/AggregateRating
- BreadcrumbList

#### Sitemap
- Généré dynamiquement
- Inclut toutes les pages
- Soumis à Google

#### Performance
- Images optimisées (WebP)
- Lazy loading
- Code splitting
- Preload fonts

---

### Analytics

#### Événements Trackés
- Page views
- CTA clicks
- Form submissions
- Scroll depth
- Time on page
- Outbound links

#### Conversions
- Soumission formulaire contact
- Réservation Cal.com
- Click téléphone
- Click email

---

## 📱 Responsive

### Breakpoints

| Device | Width | Spécificités |
|--------|-------|--------------|
| Mobile | < 640px | Navigation hamburger, stacked layouts |
| Tablet | 640-1024px | 2 colonnes, touch-friendly |
| Desktop | > 1024px | Layout complet, hover effects |

### Mobile-First
- Design mobile prioritaire
- Progressive enhancement

---

## ♿ Accessibilité

### Conformité WCAG 2.1 AA

- Contraste suffisant (4.5:1)
- Focus visible
- Navigation clavier
- ARIA labels
- Alt texts
- Skip links
- Headings hiérarchiques

---

## 🔒 Sécurité

### Mesures
- HTTPS forcé
- Headers de sécurité (CSP, HSTS)
- Sanitization des inputs
- Rate limiting API
- Validation côté serveur

---

## 📊 Métriques de Succès

### KPIs

| Métrique | Objectif |
|----------|----------|
| Taux de conversion (contact) | > 3% |
| Taux de conversion (réservation) | > 1.5% |
| Bounce rate | < 40% |
| Temps moyen sur site | > 2 min |
| Pages/session | > 3 |
| Position "auto école domont" | Top 3 |
| Core Web Vitals | Tous verts |
| Lighthouse Score | > 90 |
