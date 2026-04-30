# 🖼️ Prompts GPT Image 2 — Formaroute

Catalogue de tous les placeholders d'images du site et prompts prêts à copier-coller dans GPT Image 2 (ChatGPT).

## Style global (à appliquer à tous les prompts)

> Style suggéré pour la cohérence visuelle :
>
> - Photographie professionnelle, lumière naturelle douce
> - Palette : bleu profond (#1E3A8A) et rouge (#DC2626) en accents discrets
> - Atmosphère moderne, chaleureuse, accessible — auto-école française
> - Banlieue française résidentielle (Domont, Val-d'Oise) en arrière-plan quand pertinent
> - Pas de logos de marques automobiles visibles, pas de plaques d'immatriculation lisibles
> - Cadrage horizontal/vertical adapté à l'usage (voir Format)

---

## 1. Branding — Logo & Favicons

### 1.1 Logo principal SVG (déjà en cours côté utilisateur)
- **Chemin** : `public/logo/logo.svg`
- **Format** : SVG vectoriel ou 1024×1024 PNG transparent
- **Usage** : Header, footer, partout sur le site

### 1.2 Image Open Graph (partage social)
- **Chemin** : `public/og-image.jpg`
- **Format** : 1200×630 px (JPG)
- **Référencé dans** : `src/app/layout.tsx`

> **Prompt** :
> Professional Open Graph banner image for "Formaroute", a French driving school in Domont. Horizontal 1200×630 composition. Left side: bold confident typography reading "Formaroute" with tagline "Auto-école — Domont 95". Right side: a young diverse student smiling, holding a fresh French driving licence card, sitting in the driver's seat of a clean modern compact car, with a friendly instructor's hand visible offering encouragement. Cinematic warm light, blue and red accent colors, clean modern minimal style, high contrast for legibility on social media feeds. No visible brand logos.

---

## 2. Page d'accueil (Hero)

### 2.1 Hero — fond optionnel
- **Chemin suggéré** : `public/images/hero/hero-bg.jpg`
- **Format** : 1920×1080 px (paysage) — utilisé en background si tu veux remplacer le gradient

> **Prompt** :
> Wide cinematic photograph of a young French driver, late teens / early twenties, behind the wheel of a modern compact car at golden hour, looking confidently forward through the windshield. Driving school scene in suburban France (Domont, Val-d'Oise vibe), tree-lined avenue. Soft warm sunlight from the left, lens flare, shallow depth of field. The instructor's silhouette is faintly visible in the passenger seat. Mood : confident, optimistic, beginning of a journey. 16:9 horizontal composition. No text, no logos, no readable license plates.

---

## 3. Page À Propos (`/a-propos`)

### 3.1 "Photo de l'auto-école" — bloc Histoire
- **Localisation** : `src/app/a-propos/page.tsx:113`
- **Chemin suggéré** : `public/images/misc/about-storefront.jpg`
- **Format** : 800×800 px (carré) ou 1200×900 px (4:3)

> **Prompt** :
> Warm photograph of the exterior of a modern French driving school storefront in a charming small French town (Domont, Val-d'Oise). Large clean glass façade with subtle blue and red branding visible inside. A small modern compact car with a roof-mounted "École de conduite" sign parked discreetly in front. Late afternoon sun, soft shadows, blue sky. Welcoming and professional atmosphere. Street level perspective. No readable brand logos or text on signage.

### 3.2 Avatars équipe (3 portraits)
- **Localisation** : `src/app/a-propos/page.tsx:178` (cercle 96×96 px)
- **Chemin suggéré** : `public/images/team/equipe-{1,2,3}.jpg`
- **Format** : 600×600 px (carré, recadré tête + épaules)

> **Prompt template** (à adapter par membre — varier sexe, âge, ethnie pour la diversité réelle de l'équipe) :
> Professional portrait headshot of a French driving instructor in their {30s | 40s | 50s}, friendly natural smile, looking warmly at camera. Wearing a clean smart-casual outfit (polo or shirt, not a uniform). Plain neutral background (light grey or warm cream), studio softbox lighting from the front. Square 1:1 framing, head and shoulders visible, eyes at the upper third of the frame. Approachable, trustworthy, professional. Photorealistic, natural skin texture, no retouching artifacts.

> **Variations à demander** :
> 1. Femme cheveux mi-longs châtains, 40-45 ans, sourire confiant — gérante / monitrice senior
> 2. Homme barbe courte, 35 ans, sourire chaleureux — moniteur expérimenté
> 3. Homme ou femme jeune (28-32 ans), look moderne — moniteur AAC

---

## 4. Page Véhicules (`/a-propos/vehicules`)

### 4.1 Véhicule boîte manuelle
- **Localisation** : `src/app/a-propos/vehicules/page.tsx` (bloc aspect-video)
- **Chemin suggéré** : `public/images/formations/vehicule-manuelle.jpg`
- **Format** : 1200×675 px (16:9)

> **Prompt** :
> Three-quarter front exterior photograph of a clean modern compact European hatchback (generic, no brand badges), white or pearl grey color, with a discreet roof-mounted "École de conduite" pyramid sign in red and white. Parked on a quiet French suburban street with neat hedges and pavement. Daylight, slightly overcast soft light, no harsh shadows. The car looks well-maintained, fresh, and professional. Photorealistic, magazine-quality detail. Dual-control pedals subtly visible through the open driver's door.

### 4.2 Véhicule boîte automatique
- **Chemin suggéré** : `public/images/formations/vehicule-auto.jpg`
- **Format** : 1200×675 px (16:9)

> **Prompt** :
> Same composition and style as the manual transmission shot — clean modern compact European hatchback, three-quarter front, "École de conduite" rooftop sign — but in a different body color (e.g. metallic blue) to differentiate. Interior glimpse through window shows automatic gearbox lever ("D" / "P" / "R" markings visible). Soft daylight, professional automotive editorial style. No visible brand logos or readable license plates.

---

## 5. Page Locaux (`/a-propos/locaux`)

### 5.1 Façade des locaux
- **Chemin suggéré** : `public/images/gallery/locaux-facade.jpg`
- **Format** : 1200×800 px

> **Prompt** :
> Eye-level architectural photograph of a small modern French driving school storefront on a calm street in Domont (95330), France. Large clean window front with subtle blue and red trim. Sign reads "AUTO-ÉCOLE" in confident sans-serif. Two pedestrians walking by casually. Late morning light, blue sky with light clouds. Wide horizontal framing showing the building and a slice of the street. Welcoming, professional, neighborhood-friendly atmosphere.

### 5.2 Salle de code (intérieur)
- **Chemin suggéré** : `public/images/gallery/salle-code.jpg`
- **Format** : 1200×800 px

> **Prompt** :
> Interior photograph of a modern bright driving school code-training room. Clean white walls with one accent wall in deep blue. Six to eight comfortable individual desks with tablets, facing a large screen displaying a French road-safety quiz interface (generic, no readable text). Soft daylight from a large window on the left. Three diverse young students focused on their tablets, one instructor standing near the screen. Plants and framed road-safety posters add warmth. Wide-angle, sharp focus, magazine editorial style.

### 5.3 Espace accueil
- **Chemin suggéré** : `public/images/gallery/accueil.jpg`
- **Format** : 1200×800 px

> **Prompt** :
> Warm interior photograph of a small modern French driving school reception area. Clean white reception counter with subtle blue and red brand accents, a comfortable sofa for waiting students, plants, and a wall display of educational materials. A friendly receptionist behind the counter smiling at a young student. Natural daylight from a large window, warm wood floor, professional but approachable atmosphere. Wide-angle, editorial style.

---

## 6. Page Résultats (`/resultats`)

### 6.1 Image cover (optionnel — pas de placeholder actuel mais peut enrichir)
- **Chemin suggéré** : `public/images/misc/results-cover.jpg`
- **Format** : 1600×900 px

> **Prompt** :
> Joyful candid photograph of a young French driver in their early 20s holding up a freshly issued French driving licence ("Permis de conduire") with both hands, big genuine smile, in front of a modern compact driving school car. Outdoor, daylight, urban-suburban French setting. Other students celebrating in the soft-focus background. Warm golden-hour light. Authentic, real-feel emotion. The licence card is held angled enough to show it's a permit but no readable personal data.

---

## 7. Pages Formations (`/formations/[slug]`)

### 7.1 Hero illustration par formation
- **Localisation** : `src/app/formations/[slug]/page.tsx:143` (`aspect-video bg-white/10`)
- **Chemin suggéré** : `public/images/formations/hero-{slug}.jpg`
- **Format** : 1200×675 px (16:9) — un par formation

> **Prompt par formation** :

#### `code-de-la-route` — Stage de Code Accéléré
> Modern flat-lay photograph from above of a French driving school code-training setup: an open Code de la Route textbook with diagrams of road signs, a tablet showing a multiple-choice quiz interface, a coffee cup, a notebook with handwritten notes, and a small wooden compact car model. Warm wooden desk surface, natural daylight from one side, soft shadows. Editorial magazine-quality, aspirational study atmosphere. 16:9 composition.

#### `permis-b` — Permis B Boîte Manuelle
> Cinematic interior shot of a young French learner driver, hands at 10-and-2 on a clean modern manual gearbox steering wheel. Focus on the gear shifter mid-shift. The instructor's reassuring hand visible nearby. Soft daylight through the windshield, slight bokeh from the road ahead. Sense of focus and learning. 16:9.

#### `permis-b-boite-auto` — Permis B Boîte Auto
> Close-up cinematic shot of a relaxed young driver's right hand on an automatic gearbox lever (P-R-N-D-S markings visible), in a modern clean compact car interior. Left hand on a steering wheel in soft focus background. Natural daylight, calm and accessible mood — emphasising how the automatic gearbox simplifies driving. 16:9.

#### `conduite-accompagnee` — Conduite Accompagnée (AAC)
> Heartwarming scene of a teenage French learner (16-17 years old) at the wheel of a family compact car, looking attentively at the road. Their parent in the passenger seat, smiling proudly, hands relaxed. Suburban French road, late afternoon golden light. Sense of trust, passing the torch. 16:9 widescreen.

#### `passerelle-boite-auto-manuelle` — Passerelle
> Split-style symbolic photograph: on the left half, a hand on an automatic gearbox lever in soft focus; on the right half, the same hand confidently shifting a manual gearbox. Clean composition, modern car interior, daylight. Symbolises the transition from automatic to manual licence. 16:9.

#### `forfait-annulation-permis` — Forfait Annulation
> Photograph of a determined adult driver (35-45) taking a fresh restart, hands gripping the steering wheel of a modern compact car, looking forward with renewed focus. Soft morning light through windshield, sense of new beginning, second chance, calm determination. 16:9.

#### `stage-recuperation-points` — Stage Récupération Points
> Photograph of a small group of attentive adult learners (4-5 people, diverse ages and backgrounds) in a bright modern training room, watching a presenter explain road safety. Whiteboard or screen visible in background. Focused, mature, responsible atmosphere. Natural daylight. 16:9.

#### `perfectionnement` — Perfectionnement
> Photograph of an experienced-looking driver in their 40s practicing precision driving — handbrake parking maneuver in an empty modern parking lot, instructor watching from a safe distance. Clean light, sense of mastery and skill refinement. 16:9.

#### `evaluation-initiale` — Évaluation de Départ
> Photograph of a friendly French driving instructor and a new student sitting in the front seats of a parked driving-school car, the instructor explaining something with a clipboard, the student listening attentively. Clean modern car interior, soft daylight. Welcoming and reassuring first-meeting atmosphere. 16:9.

---

## 8. Blog (`/blog`)

### 8.1 Images d'articles (6)
- **Localisation** : `src/app/blog/page.tsx` + `src/app/blog/[slug]/page.tsx`
- **Format** : 1200×675 px (16:9)

#### `/blog/ouverture.jpg` — Ouverture Domont
> Festive but classy photograph of a modern French driving school storefront on opening day. A red ribbon being cut by smiling staff in front of the glass façade. Small group of well-dressed people, balloons in subtle blue and red, light spring morning. Sense of new beginnings, professionalism. 16:9.

#### `/blog/code.jpg` — Réussir son Code
> Top-down photograph of a focused young person studying for the Code de la Route. Open Code book, tablet displaying a quiz, highlighters, coffee, organized notes. Warm light. 16:9 widescreen, editorial flat-lay style.

#### `/blog/aac.jpg` — Conduite Accompagnée
> Teenage French learner driver and their parent in a family car, the teen behind the wheel, parent smiling supportively from the passenger seat. Warm light, trust between them. 16:9.

#### `/blog/regles.jpg` — Règles de circulation
> Clean photograph of a French priority-road sign ("Cédez le passage") at a sunny urban intersection in suburban France, with a modern car approaching in soft focus. Sharp signage, blue sky. 16:9.

#### `/blog/points.jpg` — Récupération de Points
> Photograph of a French driving licence card on a wooden desk next to a "12 points" badge or counter. Warm but serious tone. Hands of an adult driver visible, holding the licence carefully. Editorial 16:9.

#### `/blog/eco.jpg` — Éco-conduite
> Photograph showing a hand on a steering wheel with a green leaf graphic subtly overlaid on the dashboard. Modern car interior, scenic green road through windshield in soft focus. Concept : eco-driving, fuel economy, environmental responsibility. 16:9.

---

## 9. Galerie (optionnel — pour enrichir le site plus tard)

Dossier `public/images/gallery/` actuellement vide. Quelques idées si tu veux développer :

- `eleve-examen.jpg` — élève sortant souriant de l'examen avec son moniteur
- `cours-code.jpg` — vue d'ensemble d'un cours de code en salle
- `simulateur.jpg` — simulateur de conduite (si applicable)
- `equipe-groupe.jpg` — photo de groupe de l'équipe Formaroute

---

## 10. Workflow recommandé

1. **Génère via GPT Image 2** chaque image en utilisant les prompts ci-dessus
2. **Compresse** avec [TinyPNG](https://tinypng.com/) ou [Squoosh](https://squoosh.app/) pour viser :
   - Hero / OG : < 200 Ko
   - Cards / blog : < 100 Ko
   - Avatars : < 50 Ko
3. **Renomme** selon les chemins suggérés et place dans `public/images/...`
4. **Quand les images sont en place**, je remplace les placeholders dans le code par des `<Image>` Next.js (avec optimisation automatique)

---

## Ordre de priorité suggéré

🔴 **Priorité haute** (visible immédiatement sur la home)
1. OG image (`/og-image.jpg`)
2. Hero background (optionnel mais fort impact)
3. 3 photos équipe

🟠 **Priorité moyenne** (pages secondaires populaires)
4. 2 photos véhicules (manuelle + auto)
5. Façade + salle de code (pour /a-propos/locaux)
6. Photo d'une auto-école (pour /a-propos)

🟡 **Priorité basse** (blog & SEO long-tail)
7. 6 images de blog
8. 8 images de hero formation
9. Galerie additionnelle
