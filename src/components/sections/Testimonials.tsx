import { Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { site } from '@/data/site';
import { getGoogleReviews } from '@/lib/googleReviews';

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${rating} sur 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={`h-4 w-4 ${i <= Math.round(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`}
        />
      ))}
    </span>
  );
}

/**
 * Avis Google authentiques (API Places). Sans configuration, affiche
 * uniquement les liens vers la fiche Google : aucun avis ni note inventés.
 */
export async function Testimonials() {
  const data = await getGoogleReviews();
  const ficheUrl = data?.mapsUrl ?? site.social.googleBusiness;

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-primary mb-4">Avis Google</span>
          <h2 className="heading-lg text-slate-900">
            Ce que nos <span className="text-formaroute-blue-600">élèves</span> en disent
          </h2>
          {data?.rating && data.count ? (
            <p className="mt-4 flex items-center justify-center gap-2 text-lg text-slate-700">
              <Stars rating={data.rating} />
              <strong>{data.rating.toLocaleString('fr-FR')}</strong> sur 5 · {data.count} avis
              Google
            </p>
          ) : (
            <p className="mt-4 text-lg text-slate-600">
              Retrouvez les avis de nos élèves sur notre fiche Google.
            </p>
          )}
        </div>

        {data && data.reviews.length > 0 && (
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.reviews.slice(0, 5).map((r) => (
              <li
                key={`${r.author}-${r.publishTime}`}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex items-center gap-3">
                  {r.authorPhoto && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={r.authorPhoto}
                      alt=""
                      width={40}
                      height={40}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="h-10 w-10 rounded-full"
                    />
                  )}
                  <div>
                    {r.authorUrl ? (
                      <a
                        href={r.authorUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-slate-900 hover:underline"
                      >
                        {r.author}
                      </a>
                    ) : (
                      <p className="font-semibold text-slate-900">{r.author}</p>
                    )}
                    <p className="text-sm text-slate-500">{r.relativeTime}</p>
                  </div>
                </div>
                <div className="mt-3">
                  <Stars rating={r.rating} />
                </div>
                <p className="mt-3 flex-1 whitespace-pre-line text-slate-700">{r.text}</p>
                {r.url && (
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-sm font-semibold text-formaroute-blue-600 hover:underline"
                  >
                    Voir sur Google
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}

        {data && data.reviews.length > 0 && (
          <p className="mt-4 text-center text-xs text-slate-500">
            Avis publiés sur Google, affichés sans modification. Source : Google.
          </p>
        )}

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg">
            <a href={ficheUrl} target="_blank" rel="noopener noreferrer">
              Voir tous les avis sur Google
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={site.social.googleReview} target="_blank" rel="noopener noreferrer">
              <Star className="h-5 w-5" />
              Laisser un avis
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
