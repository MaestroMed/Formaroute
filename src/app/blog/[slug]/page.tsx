import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: number;
  image: string;
  content?: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'formaroute-ouvre-domont-avril-2026',
    title: 'Formaroute ouvre ses portes à Domont le 1er avril 2026 !',
    excerpt:
      "Nous sommes ravis de vous annoncer l'ouverture officielle de l'auto-école Formaroute à Domont. Découvrez nos formations et profitez de l'offre de lancement.",
    category: 'Actualités',
    date: '2026-03-15',
    readingTime: 3,
    image: '/blog/ouverture.jpg',
    content: `L'auto-école Formaroute ouvre officiellement ses portes le 1er avril 2026 au 4 avenue Jean Jaurès à Domont (95330).

**Une offre de lancement exceptionnelle**

Pour célébrer notre ouverture, nous proposons le forfait Permis B à seulement 990€ (au lieu de 1 090€) pour les 20 premiers inscrits. Ne tardez pas à nous appeler au 01 34 19 83 26 pour réserver votre place !

**Nos formations disponibles dès l'ouverture**

- Stage de code accéléré à 350€
- Permis B complet à partir de 1 090€
- Permis accéléré à partir de 1 390€
- Conduite accompagnée (AAC) à partir de 1 350€
- Stage de récupération de points (à partir de mai 2026)

**Nos horaires**

Lundi au vendredi : 10h – 12h et 15h – 20h
Samedi : 10h – 13h

Venez nous rendre visite ou appelez-nous pour toute information !`,
  },
  {
    slug: 'comment-reussir-code-premier-coup',
    title: 'Comment réussir son code du premier coup ?',
    excerpt:
      "Découvrez nos 10 conseils pour maximiser vos chances de réussite à l'examen du code de la route dès la première tentative.",
    category: 'Conseils',
    date: '2025-11-10',
    readingTime: 5,
    image: '/blog/code.jpg',
    content: `Réussir son code de la route du premier coup est tout à fait atteignable avec la bonne préparation. Voici nos 10 conseils pour maximiser vos chances.

**1. Commencez tôt votre préparation**

Ne laissez pas traîner. Plus vous commencez tôt, plus vous aurez le temps d'assimiler les règles.

**2. Utilisez une plateforme en ligne sérieuse**

Notre plateforme vous donne accès à des milliers de questions officielles et à des statistiques de progression détaillées.

**3. Faites des tests blancs régulièrement**

Simulez les conditions de l'examen : 40 questions en 30 minutes, pas le droit à l'erreur sur plus de 5.

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
      "Tout ce que les parents doivent savoir sur la conduite accompagnée : conditions, démarches, assurance et conseils pratiques.",
    category: 'Guides',
    date: '2025-10-20',
    readingTime: 8,
    image: '/blog/aac.jpg',
    content: `La conduite accompagnée (AAC) permet à votre enfant de commencer à conduire dès 15 ans. Voici tout ce que vous devez savoir.

**Les conditions pour démarrer**

- Avoir 15 ans révolus
- Obtenir le code de la route
- Effectuer une formation initiale de 20 heures minimum en auto-école
- Signer une convention avec l'auto-école

**Le rôle de l'accompagnateur**

L'accompagnateur (parent ou autre adulte désigné) doit avoir son permis depuis au moins 5 ans et ne pas avoir été condamné à une perte de points lors des 5 dernières années.

**Les avantages**

- Meilleur taux de réussite à l'examen
- Réduction de la période probatoire
- Permis possible dès 17 ans
- Tarif souvent plus avantageux

**L'assurance**

Le véhicule utilisé pour les trajets accompagnés doit être assuré. Prévenez votre assureur : dans la plupart des cas, aucune surprime n'est appliquée.

**Les démarches administratives**

Après la formation initiale, vous recevrez une attestation de conduite accompagnée. Elle devra être conservée jusqu'à l'examen du permis.

Pour en savoir plus sur notre formation AAC à Domont, contactez-nous au 01 34 19 83 26.`,
  },
  {
    slug: 'nouvelles-regles-permis-2025',
    title: 'Nouvelles règles du permis de conduire en 2025',
    excerpt:
      "Les principales évolutions réglementaires du permis de conduire cette année : ce qui change pour les candidats.",
    category: 'Réglementation',
    date: '2025-09-05',
    readingTime: 4,
    image: '/blog/regles.jpg',
    content: `Le permis de conduire évolue régulièrement. Voici les principaux changements à connaître pour 2025.

**Examen pratique**

Les critères d'évaluation de l'examen pratique ont été actualisés pour mieux refléter les comportements attendus en conditions réelles de circulation.

**Permis probatoire**

La période probatoire reste fixée à 3 ans (2 ans pour les conducteurs ayant fait la conduite accompagnée). Le capital de 6 points est progressivement reconstitué à raison de 3 points par an sans infraction.

**Code de la route numérique**

L'examen théorique peut désormais se passer dans certains centres de manière dématérialisée. Renseignez-vous auprès de votre auto-école.

**Dispositions pour les jeunes conducteurs**

Le taux d'alcoolémie toléré reste à 0,2 g/l pour les permis probatoires. La vitesse maximale autorisée sur autoroute reste à 110 km/h.

Pour toute question sur ces évolutions réglementaires, n'hésitez pas à nous contacter.`,
  },
  {
    slug: 'stage-recuperation-points-tout-savoir',
    title: 'Stage de récupération de points : tout savoir',
    excerpt:
      "Comment fonctionne le stage de récupération de points ? Conditions, déroulement, prix... On vous explique tout.",
    category: 'Guides',
    date: '2025-08-15',
    readingTime: 6,
    image: '/blog/points.jpg',
    content: `Vous avez perdu des points sur votre permis de conduire ? Le stage de récupération de points est la solution. Voici tout ce que vous devez savoir.

**Qui peut faire un stage ?**

Tout conducteur titulaire d'un permis de conduire peut effectuer un stage, à condition d'avoir au moins un point sur son permis et de ne pas être en cours de procédure de retrait de permis.

**Combien de points peut-on récupérer ?**

Un stage vous permet de récupérer jusqu'à 4 points sur votre permis. Attention : vous ne pouvez pas dépasser le capital maximum de 12 points.

**Comment se déroule le stage ?**

Le stage se déroule sur 2 jours consécutifs, en groupe de maximum 20 personnes. Il alterne des séquences théoriques et pratiques animées par des professionnels agréés.

**À quel prix ?**

Chez Formaroute, le stage est proposé à 250€. Ce tarif est fixé par l'agrément préfectoral.

**Quand sera disponible le stage chez Formaroute ?**

Nos stages de récupération de points seront disponibles à partir de mai 2026. Contactez-nous pour vous inscrire en priorité.

**Attestation**

À l'issue du stage, vous recevez une attestation. Les points sont crédités dans un délai de 3 à 4 semaines par la préfecture.`,
  },
  {
    slug: 'eco-conduite-economiser-carburant',
    title: 'Éco-conduite : comment économiser du carburant ?',
    excerpt:
      "Apprenez les techniques d'éco-conduite pour réduire votre consommation de carburant et votre impact environnemental.",
    category: 'Conseils',
    date: '2025-07-22',
    readingTime: 5,
    image: '/blog/eco.jpg',
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

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Article non trouvé' };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Formaroute`,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const paragraphs = post.content
    ? post.content.split('\n\n').filter(Boolean)
    : [post.excerpt];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-formaroute-blue-600 to-formaroute-blue-800 py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour au blog
            </Link>
            <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-white/70">
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">
                {post.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime} min de lecture</span>
              </div>
            </div>
            <h1 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-white/80">{post.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <article className="prose prose-lg prose-slate max-w-none">
              {paragraphs.map((paragraph, i) => {
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <h2 key={i} className="mt-8 font-heading text-2xl font-bold text-slate-900">
                      {paragraph.replace(/\*\*/g, '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('-')) {
                  const items = paragraph.split('\n').filter((l) => l.startsWith('-'));
                  return (
                    <ul key={i} className="mt-4 space-y-2">
                      {items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-slate-700">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-formaroute-blue-600" />
                          {item.replace(/^- /, '')}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="mt-4 text-slate-700 [&>strong]:font-bold [&>strong]:text-slate-900"
                    dangerouslySetInnerHTML={{
                      __html: paragraph
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\n/g, '<br />'),
                    }}
                  />
                );
              })}
            </article>

            {/* Back to blog */}
            <div className="mt-12 border-t border-slate-200 pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-semibold text-formaroute-blue-600 hover:text-formaroute-blue-700"
              >
                <ArrowLeft className="h-4 w-4" />
                Retour à tous les articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-formaroute-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold">
            Prêt à commencer votre formation ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Contactez l'auto-école Formaroute à Domont pour votre évaluation gratuite.
          </p>
          <div className="mt-8">
            <a
              href="tel:+33134198326"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-formaroute-blue-600 transition-all hover:bg-slate-50 hover:shadow-lg"
            >
              Appeler le 01 34 19 83 26
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
