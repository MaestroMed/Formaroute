import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Blog | Actualités et Conseils Permis de Conduire',
  description:
    "Retrouvez tous nos conseils pour réussir votre permis de conduire, les actualités de l'auto-école et les dernières réglementations du code de la route.",
  openGraph: {
    title: 'Blog Auto-école Formaroute',
    description: 'Conseils permis, actualités et réglementation',
  },
};

// Sample blog posts (would come from Sanity CMS in production)
const blogPosts = [
  {
    slug: 'comment-reussir-code-premier-coup',
    title: 'Comment réussir son code du premier coup ?',
    excerpt:
      "Découvrez nos 10 conseils pour maximiser vos chances de réussite à l'examen du code de la route dès la première tentative.",
    category: 'Conseils',
    date: '2025-11-10',
    readingTime: 5,
    image: '/blog/code.jpg',
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
  },
  {
    slug: 'formaroute-ouvre-domont-avril-2026',
    title: 'Formaroute ouvre ses portes à Domont le 1er avril 2026 !',
    excerpt:
      "Nous sommes ravis de vous annoncer l'ouverture officielle de l'auto-école Formaroute à Domont. Découvrez nos formations et profitez de l'offre de lancement.",
    category: 'Actualités',
    date: '2026-03-15',
    readingTime: 3,
    image: '/blog/ouverture.jpg',
  },
];

const categories = [
  { name: 'Tous', slug: 'tous', count: blogPosts.length },
  { name: 'Conseils', slug: 'conseils', count: blogPosts.filter((p) => p.category === 'Conseils').length },
  { name: 'Guides', slug: 'guides', count: blogPosts.filter((p) => p.category === 'Guides').length },
  { name: 'Réglementation', slug: 'reglementation', count: blogPosts.filter((p) => p.category === 'Réglementation').length },
  { name: 'Actualités', slug: 'actualites', count: blogPosts.filter((p) => p.category === 'Actualités').length },
];

export default function BlogPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-formaroute-blue-600 to-formaroute-blue-800 py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold md:text-5xl">
              Blog & Actualités
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Conseils pour réussir votre permis, actualités de l'auto-école
              et dernières réglementations du code de la route.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-slate-200 bg-white">
        <div className="container-custom">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.slug}
                className="flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:border-formaroute-blue-300 hover:bg-formaroute-blue-50"
              >
                {category.name}
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-formaroute-blue-100 to-slate-100">
                  <div className="flex h-full w-full items-center justify-center text-4xl">
                    📖
                  </div>
                </div>

                <div className="p-6">
                  {/* Meta */}
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-sm">
                    <span className="rounded-full bg-formaroute-blue-100 px-3 py-1 text-xs font-medium text-formaroute-blue-700">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-slate-500">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-500">
                      <Clock className="h-4 w-4" />
                      <span>{post.readingTime} min</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="mb-2 font-heading text-xl font-bold text-slate-900 transition-colors group-hover:text-formaroute-blue-600">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="mb-4 line-clamp-2 text-slate-600">{post.excerpt}</p>

                  {/* Read More */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-formaroute-blue-600 transition-colors hover:text-formaroute-blue-700"
                  >
                    Lire l'article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center gap-2">
              <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50">
                ←
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-formaroute-blue-600 font-medium text-white">
                1
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50">
                2
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50">
                3
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50">
                →
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section bg-formaroute-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold">
            Restez informé
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Inscrivez-vous à notre newsletter pour recevoir nos derniers conseils
            et actualités directement dans votre boîte mail.
          </p>
          <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 rounded-xl border-0 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <Button className="bg-white text-formaroute-blue-600 hover:bg-slate-50">
              S'inscrire
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
