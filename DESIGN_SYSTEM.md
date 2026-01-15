# 🎨 Design System - Formaroute

Ce document définit le système de design complet pour le site Formaroute.

---

## 🎯 Philosophie du Design

### Vision

Créer une identité visuelle **premium**, **moderne** et **énergique** qui inspire confiance et reflète le dynamisme de l'auto-école.

### Principes

1. **Clarté** - Information accessible en un coup d'œil
2. **Confiance** - Design professionnel et rassurant
3. **Énergie** - Touches de couleur vives et animations dynamiques
4. **Accessibilité** - Utilisable par tous, sur tous les appareils

---

## 🎨 Palette de Couleurs

### Couleurs Principales

#### Bleu Formaroute (Primaire)
Symbolise la confiance, le professionnalisme et la sérénité.

| Shade | Hex | RGB | Usage |
|-------|-----|-----|-------|
| 50 | `#eff6ff` | 239, 246, 255 | Backgrounds très légers |
| 100 | `#dbeafe` | 219, 234, 254 | Backgrounds légers |
| 200 | `#bfdbfe` | 191, 219, 254 | Backgrounds, bordures |
| 300 | `#93c5fd` | 147, 197, 253 | Icônes inactives |
| 400 | `#60a5fa` | 96, 165, 250 | Hover states |
| 500 | `#3b82f6` | 59, 130, 246 | Liens, icônes actives |
| **600** | **`#2563eb`** | 37, 99, 235 | **Couleur principale, CTA** |
| 700 | `#1d4ed8` | 29, 78, 216 | Hover sur CTA |
| 800 | `#1e40af` | 30, 64, 175 | Texte sur fond clair |
| 900 | `#1e3a8a` | 30, 58, 138 | Headings, accents forts |
| 950 | `#172554` | 23, 37, 84 | Texte très foncé |

#### Rouge Formaroute (Secondaire)
Symbolise l'énergie, la passion et l'action.

| Shade | Hex | RGB | Usage |
|-------|-----|-----|-----|
| 50 | `#fef2f2` | 254, 242, 242 | Backgrounds alertes légères |
| 100 | `#fee2e2` | 254, 226, 226 | Notifications |
| 200 | `#fecaca` | 254, 202, 202 | Bordures alertes |
| 300 | `#fca5a5` | 252, 165, 165 | Icônes warning |
| 400 | `#f87171` | 248, 113, 113 | Éléments secondaires |
| 500 | `#ef4444` | 239, 68, 68 | Accents, badges |
| **600** | **`#dc2626`** | 220, 38, 38 | **CTA secondaire, urgence** |
| 700 | `#b91c1c` | 185, 28, 28 | Hover sur rouge |
| 800 | `#991b1b` | 153, 27, 27 | Texte urgent |
| 900 | `#7f1d1d` | 127, 29, 29 | Accents très forts |

### Couleurs Neutres

| Shade | Hex | Usage |
|-------|-----|-------|
| White | `#ffffff` | Backgrounds principaux |
| Slate 50 | `#f8fafc` | Backgrounds sections alternées |
| Slate 100 | `#f1f5f9` | Backgrounds cards |
| Slate 200 | `#e2e8f0` | Bordures, séparateurs |
| Slate 300 | `#cbd5e1` | Inputs désactivés |
| Slate 400 | `#94a3b8` | Texte placeholder |
| Slate 500 | `#64748b` | Texte secondaire |
| Slate 600 | `#475569` | Texte body |
| Slate 700 | `#334155` | Texte emphasis |
| Slate 800 | `#1e293b` | Headings |
| Slate 900 | `#0f172a` | Texte principal |
| Slate 950 | `#020617` | Noir profond |

### Couleurs Sémantiques

| Type | Couleur | Hex | Usage |
|------|---------|-----|-------|
| Success | Green 600 | `#16a34a` | Confirmations, validations |
| Warning | Amber 500 | `#f59e0b` | Alertes, attention |
| Error | Red 600 | `#dc2626` | Erreurs, formulaires |
| Info | Blue 500 | `#3b82f6` | Informations |

---

## 🔤 Typographie

### Familles de Polices

#### Option A (Recommandée) - Moderne et Distinctive

```css
--font-heading: 'Clash Display', 'Satoshi', sans-serif;
--font-body: 'DM Sans', 'Inter', sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

#### Option B - Alternative Élégante

```css
--font-heading: 'Outfit', 'Plus Jakarta Sans', sans-serif;
--font-body: 'Inter', 'Source Sans 3', sans-serif;
--font-mono: 'Fira Code', monospace;
```

### Échelle Typographique

| Nom | Taille Mobile | Taille Desktop | Line Height | Usage |
|-----|---------------|----------------|-------------|-------|
| `text-xs` | 12px | 12px | 1.5 | Labels, captions |
| `text-sm` | 14px | 14px | 1.5 | Small text, meta |
| `text-base` | 16px | 16px | 1.6 | Body text |
| `text-lg` | 18px | 18px | 1.6 | Lead paragraphs |
| `text-xl` | 20px | 20px | 1.5 | Subtitles |
| `text-2xl` | 24px | 24px | 1.4 | H4 |
| `text-3xl` | 30px | 30px | 1.3 | H3 |
| `text-4xl` | 36px | 36px | 1.2 | H2 |
| `text-5xl` | 36px | 48px | 1.1 | H1 sections |
| `text-6xl` | 48px | 60px | 1.1 | Hero headings |
| `text-7xl` | 60px | 72px | 1.0 | Display |

### Poids de Police

| Nom | Valeur | Usage |
|-----|--------|-------|
| Regular | 400 | Body text |
| Medium | 500 | Emphasis légère |
| Semibold | 600 | Boutons, labels |
| Bold | 700 | Headings |
| Extrabold | 800 | Display, hero |

### Exemples d'Application

```jsx
// Hero Heading
<h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
  Votre permis commence ici
</h1>

// Section Title
<h2 className="font-heading text-3xl md:text-4xl font-bold">
  Nos formations
</h2>

// Body Text
<p className="font-body text-base md:text-lg text-slate-600 leading-relaxed">
  Formaroute vous accompagne...
</p>

// Price Display
<span className="font-mono text-4xl font-bold text-blue-600">
  1 290€
</span>
```

---

## 📐 Espacements

### Échelle d'Espacement

Basée sur un système de 4px (0.25rem).

| Token | Valeur | Pixels | Usage |
|-------|--------|--------|-------|
| `0` | 0 | 0px | Reset |
| `1` | 0.25rem | 4px | Micro |
| `2` | 0.5rem | 8px | Petit |
| `3` | 0.75rem | 12px | |
| `4` | 1rem | 16px | Standard |
| `5` | 1.25rem | 20px | |
| `6` | 1.5rem | 24px | Medium |
| `8` | 2rem | 32px | Large |
| `10` | 2.5rem | 40px | |
| `12` | 3rem | 48px | XL |
| `16` | 4rem | 64px | XXL |
| `20` | 5rem | 80px | Section |
| `24` | 6rem | 96px | Section large |
| `32` | 8rem | 128px | Hero |

### Espacements de Section

```css
/* Section padding standard */
.section {
  padding-top: 5rem;    /* py-20 */
  padding-bottom: 5rem;
}

/* Section padding large (hero) */
.section-hero {
  padding-top: 8rem;    /* py-32 */
  padding-bottom: 8rem;
}

/* Container max-width */
.container {
  max-width: 1280px;    /* max-w-7xl */
  padding-left: 1rem;   /* px-4 */
  padding-right: 1rem;
}

@media (min-width: 768px) {
  .container {
    padding-left: 2rem; /* md:px-8 */
    padding-right: 2rem;
  }
}
```

---

## 🔲 Composants UI

### Boutons

#### Bouton Primaire (CTA Principal)

```jsx
<button className="
  inline-flex items-center justify-center
  px-6 py-3
  bg-blue-600 hover:bg-blue-700
  text-white font-semibold
  rounded-xl
  shadow-lg shadow-blue-600/25
  transition-all duration-200
  hover:shadow-xl hover:shadow-blue-600/30
  hover:-translate-y-0.5
  focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
">
  Réserver une évaluation
</button>
```

#### Bouton Secondaire

```jsx
<button className="
  inline-flex items-center justify-center
  px-6 py-3
  bg-white hover:bg-slate-50
  text-blue-600 font-semibold
  border-2 border-blue-600
  rounded-xl
  transition-all duration-200
  hover:-translate-y-0.5
  focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
">
  En savoir plus
</button>
```

#### Bouton Accent (Urgence)

```jsx
<button className="
  inline-flex items-center justify-center
  px-6 py-3
  bg-red-600 hover:bg-red-700
  text-white font-semibold
  rounded-xl
  shadow-lg shadow-red-600/25
  transition-all duration-200
">
  Dernières places !
</button>
```

### Cards

#### Card Standard

```jsx
<div className="
  bg-white
  rounded-2xl
  border border-slate-200
  p-6
  shadow-sm
  hover:shadow-lg
  hover:border-blue-200
  transition-all duration-300
">
  {/* Content */}
</div>
```

#### Card Formation (avec hover effect)

```jsx
<motion.div
  whileHover={{ y: -8, scale: 1.02 }}
  className="
    bg-white
    rounded-2xl
    overflow-hidden
    shadow-lg
    border border-slate-100
    group
  "
>
  <div className="relative h-48 overflow-hidden">
    <Image
      src="/formation.jpg"
      alt="Formation"
      fill
      className="object-cover group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold mb-2">Permis B</h3>
    <p className="text-slate-600">Description...</p>
    <p className="text-2xl font-mono font-bold text-blue-600 mt-4">
      1 290€
    </p>
  </div>
</motion.div>
```

### Inputs

#### Input Standard

```jsx
<div className="space-y-2">
  <label className="text-sm font-medium text-slate-700">
    Votre email
  </label>
  <input
    type="email"
    className="
      w-full
      px-4 py-3
      bg-white
      border border-slate-300
      rounded-xl
      text-slate-900
      placeholder:text-slate-400
      focus:border-blue-500
      focus:ring-4 focus:ring-blue-500/10
      transition-all duration-200
    "
    placeholder="exemple@email.com"
  />
</div>
```

### Badges

```jsx
// Badge standard
<span className="
  inline-flex items-center
  px-3 py-1
  bg-blue-100 text-blue-700
  text-sm font-medium
  rounded-full
">
  Populaire
</span>

// Badge urgent
<span className="
  inline-flex items-center
  px-3 py-1
  bg-red-100 text-red-700
  text-sm font-medium
  rounded-full
  animate-pulse
">
  Dernières places
</span>

// Badge nouveau
<span className="
  inline-flex items-center
  px-3 py-1
  bg-green-100 text-green-700
  text-sm font-medium
  rounded-full
">
  Nouveau
</span>
```

---

## 🎬 Animations

### Principes d'Animation

1. **Subtilité** - Animations perceptibles mais non distrayantes
2. **Fluidité** - 60fps minimum, utiliser `transform` et `opacity`
3. **Intention** - Chaque animation a un but (feedback, attention, transition)
4. **Performance** - GPU-accelerated, respect des Core Web Vitals

### Durées Standards

| Type | Durée | Easing | Usage |
|------|-------|--------|-------|
| Micro | 150ms | ease-out | Hovers, focus |
| Standard | 300ms | ease-out | Transitions, reveals |
| Medium | 500ms | ease-in-out | Modals, drawers |
| Slow | 800ms | ease-in-out | Page transitions |

### Easing Curves

```js
// Custom easing pour Framer Motion
const easing = {
  smooth: [0.25, 0.1, 0.25, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
  spring: { type: "spring", stiffness: 300, damping: 30 }
};
```

### Animations Prédéfinies

#### Fade In Up

```jsx
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
};

<motion.div {...fadeInUp}>
  Content
</motion.div>
```

#### Stagger Container

```jsx
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

<motion.div variants={staggerContainer} initial="initial" animate="animate">
  {items.map((item, i) => (
    <motion.div key={i} variants={staggerItem}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

#### Scale on Hover

```jsx
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400 }}
>
  Hoverable content
</motion.div>
```

#### Counter Animation

```jsx
import { useInView, animate } from "framer-motion";

function Counter({ target }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      animate(0, target, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (v) => setCount(Math.round(v))
      });
    }
  }, [isInView, target]);

  return <span ref={ref}>{count}</span>;
}
```

#### Parallax Effect

```jsx
function ParallaxSection({ children }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
}
```

---

## 📱 Responsive Design

### Breakpoints

| Name | Min Width | Target Devices |
|------|-----------|----------------|
| `sm` | 640px | Mobile large, phablets |
| `md` | 768px | Tablettes portrait |
| `lg` | 1024px | Tablettes paysage, petits laptops |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Grands écrans |

### Approche Mobile-First

```jsx
// Exemple de composant responsive
<div className="
  grid 
  grid-cols-1 
  sm:grid-cols-2 
  lg:grid-cols-3 
  xl:grid-cols-4 
  gap-4 
  md:gap-6 
  lg:gap-8
">
  {/* Cards */}
</div>
```

### Typographie Responsive

```jsx
<h1 className="
  text-3xl 
  sm:text-4xl 
  md:text-5xl 
  lg:text-6xl 
  xl:text-7xl
">
  Titre Hero
</h1>
```

---

## 🌑 Dark Mode (Optionnel)

Si implémenté, utiliser ces variantes :

| Light Mode | Dark Mode |
|------------|-----------|
| `bg-white` | `dark:bg-slate-900` |
| `bg-slate-50` | `dark:bg-slate-800` |
| `text-slate-900` | `dark:text-slate-100` |
| `text-slate-600` | `dark:text-slate-400` |
| `border-slate-200` | `dark:border-slate-700` |
| `bg-blue-600` | `dark:bg-blue-500` |

---

## 🖼️ Iconographie

### Librairie

Utiliser **Lucide React** pour tous les icônes.

```bash
npm install lucide-react
```

### Tailles Standards

| Taille | Pixels | Usage |
|--------|--------|-------|
| `xs` | 16px | Inline avec texte |
| `sm` | 20px | Boutons, inputs |
| `md` | 24px | Navigation |
| `lg` | 32px | Features |
| `xl` | 48px | Hero sections |

### Exemples

```jsx
import { Car, Phone, MapPin, Clock, Star } from 'lucide-react';

<Car className="w-6 h-6 text-blue-600" />
<Phone className="w-5 h-5 text-slate-500" />
<MapPin className="w-8 h-8 text-red-600" />
```

---

## 📊 Composants Spéciaux

### Price Tag

```jsx
<div className="relative inline-block">
  <span className="text-sm text-slate-500 line-through mr-2">
    1 490€
  </span>
  <span className="text-3xl font-mono font-bold text-blue-600">
    1 290€
  </span>
  <span className="absolute -top-2 -right-8 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
    -13%
  </span>
</div>
```

### Stats Counter

```jsx
<div className="text-center">
  <motion.span 
    className="text-5xl font-mono font-bold text-blue-600 block"
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
  >
    85%
  </motion.span>
  <span className="text-slate-600">Taux de réussite</span>
</div>
```

### Testimonial Card

```jsx
<div className="bg-white rounded-2xl p-6 shadow-lg">
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
    ))}
  </div>
  <p className="text-slate-600 italic mb-4">
    "Excellente auto-école, moniteurs patients et pédagogues..."
  </p>
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
      <span className="font-bold text-blue-600">M</span>
    </div>
    <div>
      <p className="font-semibold">Marie L.</p>
      <p className="text-sm text-slate-500">Permis B - 2024</p>
    </div>
  </div>
</div>
```

---

## ✅ Checklist Design

Avant de valider un composant :

- [ ] Couleurs conformes à la palette
- [ ] Typographie conforme à l'échelle
- [ ] Espacements cohérents (multiples de 4px)
- [ ] Responsive sur tous les breakpoints
- [ ] États hover/focus définis
- [ ] Animations fluides (60fps)
- [ ] Contraste accessible (AA minimum)
- [ ] Focus visible pour l'accessibilité
