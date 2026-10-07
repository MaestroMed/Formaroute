import Link from 'next/link';
import { ArrowRight, Calendar, Clock, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blog';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Blog : conseils et actualités du permis de conduire',
  description:
    "Conseils pour réussir le code et le permis, règles du permis probatoire, conduite accompagnée et actualités de l'auto-école Formaroute à Domont.",
  path: '/blog',
});

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-formaroute-blue-600 to-formaroute-blue-800 py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold md:text-5xl">Blog & Actualités</h1>
            <p className="mt-4 text-lg text-white/90">
              Conseils pour réussir votre permis, actualités de l&apos;auto-école et règles du code
              de la route.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-formaroute-blue-100 text-formaroute-blue-600">
                  <BookOpen className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="mb-3 flex flex-wrap items-center gap-3 text-sm">
                  <span className="rounded-full bg-formaroute-blue-100 px-3 py-1 text-xs font-medium text-formaroute-blue-700">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                  </span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    {post.readingTime} min
                  </span>
                </div>

                <h2 className="mb-2 font-heading text-xl font-bold text-slate-900 transition-colors group-hover:text-formaroute-blue-600">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mb-4 line-clamp-3 flex-1 text-slate-600">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 font-semibold text-formaroute-blue-600 transition-colors hover:text-formaroute-blue-700"
                  aria-label={`Lire l'article : ${post.title}`}
                >
                  Lire l&apos;article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-formaroute-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold">Une question sur votre formation ?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Notre équipe vous répond par téléphone ou via le formulaire de contact.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-white text-formaroute-blue-600 hover:bg-slate-50"
            >
              <Link href="/contact">
                Nous contacter
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
