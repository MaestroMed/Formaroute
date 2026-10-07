import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { blogPosts, getPostBySlug } from '@/data/blog';
import { site, absoluteUrl } from '@/data/site';
import { buildMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: 'Article non trouvé' };
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: 'article',
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    author: { '@type': 'Organization', name: site.name, url: site.url },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      logo: { '@type': 'ImageObject', url: absoluteUrl('/logo/logo-512.jpg') },
    },
  };

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const paragraphs = post.content.split('\n\n').filter(Boolean);

  return (
    <div className="pt-20">
      <JsonLd data={articleJsonLd} />
      <Breadcrumb
        items={[
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-formaroute-blue-600 to-formaroute-blue-800 py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-2 text-white/90 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour au blog
            </Link>
            <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-white/90">
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">
                {post.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <time dateTime={post.publishedAt}>{formattedDate}</time>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime} min de lecture</span>
              </div>
            </div>
            <h1 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-white/90">{post.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <article>
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
                  <p
                    key={i}
                    className="mt-4 text-slate-700 [&>strong]:font-bold [&>strong]:text-slate-900"
                    dangerouslySetInnerHTML={{
                      // Contenu rédigé dans src/data/blog.ts (pas de saisie utilisateur).
                      __html: paragraph
                        .replace(/&/g, '&amp;')
                        .replace(/</g, '&lt;')
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
          <h2 className="font-heading text-3xl font-bold">Prêt à commencer votre formation ?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Contactez l&apos;auto-école Formaroute à Domont pour votre évaluation de départ.
          </p>
          <div className="mt-8">
            <a
              href={site.contact.phoneHref}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-formaroute-blue-600 transition-all hover:bg-slate-50 hover:shadow-lg"
            >
              Appeler le {site.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
