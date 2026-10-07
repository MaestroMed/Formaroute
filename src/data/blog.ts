/**
 * Articles du blog. Source unique utilisée par la liste, les pages article
 * et le sitemap.
 */
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  /** Date de publication (AAAA-MM-JJ). */
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'formaroute-ouvre-domont-avril-2026',
    title: 'Formaroute ouvre ses portes à Domont le 1er avril 2026 !',
    excerpt:
      "L'auto-école Formaroute ouvre officiellement ses portes à Domont. Découvrez nos formations, nos tarifs et nos horaires.",
    category: 'Actualités',
    publishedAt: '2026-03-15',
    updatedAt: '2026-10-07',
    readingTime: 3,
    content: `L'auto-école Formaroute ouvre officiellement ses portes le 1er avril 2026 au 4 avenue Jean Jaurès à Domont (95330).

**Nos formations (tarifs TTC, mis à jour en octobre 2026)**

- Forfait code — 195 € (examen du code : 30 € par passage, réglés à l'organisme d'examen)
- Permis B boîte manuelle, 20 heures — 1 195 €
- Permis B boîte automatique — 995 € (13 heures) ou 1 295 € (20 heures)
- Conduite accompagnée (AAC) — 1 395 €
- Forfait annulation de permis — 595 €
- Stages de récupération de points — 250 €, dates sur demande
- Passerelle boîte automatique vers manuelle — prochainement

**Horaires d'accueil**

Lundi au vendredi : 10h – 12h et 16h – 20h
Samedi : 10h – 14h
Les leçons suivent le planning individuel.

Venez nous rendre visite ou appelez-nous pour toute information !`,
  },
  {
    slug: 'comment-reussir-code-premier-coup',
    title: 'Comment réussir son code du premier coup ?',
    excerpt:
      "Découvrez nos 10 conseils pour maximiser vos chances de réussite à l'examen du code de la route dès la première tentative.",
    category: 'Conseils',
    publishedAt: '2026-04-01',
    readingTime: 5,
    content: `Réussir son code de la route du premier coup est tout à fait atteignable avec la bonne préparation. Voici nos 10 conseils pour maximiser vos chances.

**1. Commencez tôt votre préparation**

Ne laissez pas traîner. Plus vous commencez tôt, plus vous aurez le temps d'assimiler les règles.

**2. Utilisez une plateforme en ligne sérieuse**

Entraînez-vous sur des séries de questions conformes à l'examen et suivez votre progression : c'est le meilleur moyen de repérer vos points faibles.

**3. Faites des tests blancs régulièrement**

Simulez les conditions de l'examen : 40 questions, au moins 35 bonnes réponses pour être reçu.

**4. Révisez vos erreurs**

Chaque question ratée est une leçon. Comprenez pourquoi vous avez tort avant de passer à la suite.

**5. Maîtrisez les priorités**

La gestion des priorités est l'une des causes principales d'échec. Révisez-la en priorité.

**6. Apprenez les panneaux par catégorie**

Danger (triangles), interdiction (cercles rouges), obligation (cercles bleus)... Classez-les pour mieux les retenir.

**7. Dormez bien la nuit avant l'examen**

La fatigue est votre ennemie. Une bonne nuit de sommeil vaut mieux qu'une révision de dernière minute.

**8. Arrivez en avance le jour J**

Prenez vos repères, soufflez, et abordez l'examen sereinement.

**9. Lisez chaque question attentivement**

Les pièges se nichent souvent dans les détails. Prenez votre temps.

**10. Faites confiance à votre préparation**

Si vous avez suivi ces conseils, vous êtes prêt. La confiance en soi fait aussi partie de la réussite !`,
  },
  {
    slug: 'conduite-accompagnee-guide-parents',
    title: 'Conduite accompagnée : le guide complet pour les parents',
    excerpt:
      'Tout ce que les parents doivent savoir sur la conduite accompagnée : conditions, démarches, assurance et conseils pratiques.',
    category: 'Guides',
    publishedAt: '2026-04-01',
    readingTime: 8,
    content: `La conduite accompagnée (AAC) permet à votre enfant de commencer à conduire dès 15 ans. Voici tout ce que vous devez savoir.

**Les conditions pour démarrer**

- Avoir 15 ans révolus
- Obtenir le code de la route
- Suivre une formation initiale en auto-école : 20 heures minimum (13 heures en boîte automatique)
- Obtenir l'attestation de fin de formation initiale, délivrée après le rendez-vous préalable avec l'accompagnateur

**Le rôle de l'accompagnateur**

L'accompagnateur (parent ou autre adulte désigné) doit être titulaire du permis B depuis au moins 5 ans sans interruption et obtenir l'accord de son assureur. Plusieurs accompagnateurs peuvent être désignés.

**Les avantages**

- Au moins 3 000 km d'expérience avant l'examen
- Période probatoire réduite à 2 ans au lieu de 3
- Examen pratique possible dès 17 ans
- Assurance souvent plus avantageuse pour le jeune conducteur

**L'assurance**

Le véhicule utilisé pour la conduite accompagnée doit être assuré et l'assureur doit avoir donné son accord écrit. Renseignez-vous auprès de lui sur les éventuelles conditions.

**Les démarches administratives**

Après la formation initiale, l'auto-école délivre l'attestation de fin de formation initiale. Elle doit être conservée dans le véhicule pendant toute la conduite accompagnée, avec le livret d'apprentissage.

Pour en savoir plus sur notre formation AAC à Domont, contactez-nous.`,
  },
  {
    slug: 'nouvelles-regles-permis-2025',
    title: 'Permis probatoire : les règles à connaître',
    excerpt:
      "Capital de points, période probatoire, alcool, vitesses : les règles qui s'appliquent aux jeunes conducteurs.",
    category: 'Réglementation',
    publishedAt: '2026-04-01',
    readingTime: 4,
    content: `Après l'obtention du permis, tout nouveau conducteur entre en période probatoire. Voici les règles essentielles.

**La période probatoire**

Elle dure 3 ans, ou 2 ans pour les conducteurs issus de la conduite accompagnée.

**Le capital de points**

Le permis probatoire démarre avec 6 points. Sans infraction, il augmente chaque année (de 2 points par an, ou de 3 points par an après une conduite accompagnée) jusqu'à atteindre 12 points.

**L'examen du code**

L'examen théorique général se passe sur tablette dans un centre agréé : 40 questions, au moins 35 bonnes réponses.

**Alcool et vitesse**

Le taux d'alcool autorisé est limité à 0,2 g/l de sang, ce qui équivaut en pratique à ne pas boire du tout. Les vitesses maximales sont abaissées : 110 km/h sur autoroute, 100 km/h sur les routes à 110 km/h et 80 km/h sur les routes à 90 km/h.

Pour toute question sur ces évolutions réglementaires, n'hésitez pas à nous contacter.`,
  },
  {
    slug: 'stage-recuperation-points-tout-savoir',
    title: 'Stage de récupération de points : tout savoir',
    excerpt:
      'Comment fonctionne le stage de récupération de points ? Conditions, déroulement, prix... On vous explique tout.',
    category: 'Guides',
    publishedAt: '2026-04-01',
    updatedAt: '2026-10-07',
    readingTime: 6,
    content: `Vous avez perdu des points sur votre permis de conduire ? Le stage de récupération de points est la solution. Voici tout ce que vous devez savoir.

**Qui peut faire un stage ?**

Tout conducteur titulaire d'un permis de conduire peut effectuer un stage, à condition d'avoir au moins un point sur son permis et de ne pas être en cours de procédure de retrait de permis.

**Combien de points peut-on récupérer ?**

Un stage vous permet de récupérer jusqu'à 4 points sur votre permis. Attention : vous ne pouvez pas dépasser le capital maximum de 12 points.

**Comment se déroule le stage ?**

Le stage se déroule sur 2 jours consécutifs (14 heures), en groupe de 6 à 20 personnes. Un seul stage peut être pris en compte par an. Il alterne des séquences théoriques et pratiques animées par des professionnels agréés.

**À quel prix ?**

Chez Formaroute, le stage est proposé à 250 € TTC. Chaque centre agréé fixe librement son tarif.

**Comment réserver chez Formaroute ?**

Notre centre est agréé par la préfecture (agrément R2609500030). Contactez-nous au 01 34 19 83 26 pour connaître les prochaines dates et réserver votre place.

**Attestation**

À l'issue du stage, vous recevez une attestation. Les points sont réattribués à compter du lendemain du dernier jour de stage ; l'enregistrement peut prendre quelques semaines.`,
  },
  {
    slug: 'eco-conduite-economiser-carburant',
    title: 'Éco-conduite : comment économiser du carburant ?',
    excerpt:
      "Apprenez les techniques d'éco-conduite pour réduire votre consommation de carburant et votre impact environnemental.",
    category: 'Conseils',
    publishedAt: '2026-04-01',
    readingTime: 5,
    content: `L'éco-conduite permet de réduire significativement votre consommation de carburant et votre impact sur l'environnement. Voici les principes essentiels.

**Anticipez la conduite**

Regardez loin devant vous et anticipez les ralentissements pour lever le pied tôt plutôt que de freiner brusquement. Cela préserve votre carburant et vos freins.

**Passez les vitesses rapidement**

En boîte manuelle, montez les rapports tôt. Sur route, passez en 5ème dès 70 km/h. Le régime moteur idéal se situe entre 1500 et 2500 tr/min.

**Maintenez une vitesse constante**

Évitez les accélérations et décélérations répétées. Sur autoroute, le régulateur de vitesse est votre allié.

**Vérifiez la pression des pneus**

Des pneus sous-gonflés augmentent la résistance au roulement et donc la consommation. Vérifiez la pression au moins une fois par mois.

**Coupez le moteur à l'arrêt**

Au-delà de 30 secondes d'arrêt, il est plus économique de couper le moteur que de le laisser tourner au ralenti.

**Planifiez vos trajets**

Évitez les heures de pointe, combinez plusieurs déplacements, et préférez le covoiturage quand c'est possible.

Ces gestes simples peuvent réduire votre consommation de 10 à 20%. Formaroute intègre ces principes dans sa formation au perfectionnement.`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
