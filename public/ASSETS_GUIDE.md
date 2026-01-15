# 📁 Guide des Assets - Formaroute

Ce dossier `public/` contient tous les fichiers statiques du site.
Tout fichier placé ici est accessible via l'URL racine du site.

---

## 🏗️ Structure des Dossiers

```
public/
├── images/
│   ├── hero/              # Images du Hero (bannière principale)
│   ├── formations/        # Photos des formations (voitures, salles, etc.)
│   ├── team/              # Photos de l'équipe (moniteurs, gérant)
│   ├── gallery/           # Galerie photos (locaux, véhicules, élèves)
│   ├── testimonials/      # Photos des élèves pour témoignages
│   └── misc/              # Autres images
├── logo/
│   ├── logo.svg           # Logo principal (vectoriel - RECOMMANDÉ)
│   ├── logo.png           # Logo PNG (fond transparent)
│   ├── logo-white.svg     # Logo blanc (pour fonds sombres)
│   └── logo-icon.svg      # Icône seule (sans texte)
├── favicon/
│   ├── favicon.ico        # Favicon classique (16x16, 32x32)
│   ├── favicon-16x16.png  # Favicon 16x16
│   ├── favicon-32x32.png  # Favicon 32x32
│   ├── apple-touch-icon.png  # Icône iOS (180x180)
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   └── site.webmanifest   # Manifest pour PWA
├── og/
│   └── og-image.jpg       # Image Open Graph (1200x630) pour partage social
└── documents/
    ├── tarifs.pdf         # Grille tarifaire PDF
    └── reglement.pdf      # Règlement intérieur PDF
```

---

## 🖼️ Spécifications des Images

### Logo Principal
- **Format**: SVG (vectoriel) ou PNG avec transparence
- **Dimensions recommandées**: 200px de large minimum
- **Couleurs**: Version couleur + version blanche

### Favicon
- Utilisez [RealFaviconGenerator](https://realfavicongenerator.net/) pour générer tous les formats
- Uploadez votre logo et téléchargez le pack complet

### Images Hero
- **Dimensions**: 1920x1080 minimum (Full HD)
- **Format**: WebP ou JPG optimisé
- **Poids**: < 200 Ko après compression

### Photos de l'équipe
- **Dimensions**: 400x400 (carré) ou 400x500 (portrait)
- **Format**: WebP ou JPG
- **Style**: Fond neutre, sourire, tenue professionnelle

### Images Open Graph (partage réseaux sociaux)
- **Dimensions**: 1200x630 pixels (obligatoire)
- **Format**: JPG
- **Contenu**: Logo + titre + visuel accrocheur

### Photos des véhicules/locaux
- **Dimensions**: 800x600 minimum
- **Format**: WebP ou JPG optimisé
- **Qualité**: Bonne luminosité, netteté

---

## 🎯 Liste des Assets à Fournir

### Obligatoires ✅
- [ ] Logo principal (SVG ou PNG haute résolution)
- [ ] Favicon (ou logo pour générer le favicon)
- [ ] Photo de la façade/locaux
- [ ] Photo(s) des véhicules de formation
- [ ] Photo du gérant/équipe

### Recommandés 💡
- [ ] Photos des moniteurs individuellement
- [ ] Photos de la salle de code
- [ ] Photos d'élèves avec leur permis (avec autorisation)
- [ ] Image Open Graph personnalisée

### Optionnels 🌟
- [ ] Vidéo de présentation
- [ ] Photos du simulateur de conduite
- [ ] Galerie photos variée

---

## 🔧 Comment Ajouter vos Images

1. **Glissez-déposez** vos fichiers dans le bon sous-dossier
2. **Nommez clairement** vos fichiers (ex: `moniteur-jean.jpg`, `clio-rouge.jpg`)
3. **Optimisez** vos images avant upload :
   - [Squoosh.app](https://squoosh.app/) - Compression en ligne
   - [TinyPNG](https://tinypng.com/) - Compression PNG/JPG

---

## 📝 Utilisation dans le Code

Une fois vos images ajoutées, elles sont accessibles ainsi :

```tsx
// Dans les composants React
import Image from 'next/image';

<Image 
  src="/logo/logo.svg" 
  alt="Formaroute" 
  width={200} 
  height={50} 
/>

<Image 
  src="/images/hero/auto-ecole.jpg" 
  alt="Auto-école Formaroute à Domont" 
  fill
  className="object-cover"
/>
```

---

## 🚀 Prêt à Démarrer ?

1. Créez les sous-dossiers (ou ils seront créés automatiquement)
2. Ajoutez votre logo dans `/logo/`
3. Générez les favicons avec votre logo
4. Ajoutez vos photos dans les dossiers appropriés
5. Prévenez-moi et je mettrai à jour le code pour utiliser vos images !

---

**Besoin d'aide pour optimiser vos images ? Demandez-moi !** 🎨
