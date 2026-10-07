/**
 * Avis Google via l'API officielle Places (New).
 *
 * - Les avis sont affichés tels que publiés (texte d'origine, auteur, date) :
 *   ne jamais les modifier ni les sélectionner à la main.
 * - Données mises en cache 24 h (revalidate) : les avis se mettent à jour seuls.
 * - Sans GOOGLE_PLACES_API_KEY / GOOGLE_PLACE_ID, renvoie null et le site
 *   affiche simplement un lien vers la fiche Google.
 *
 * Procédure de configuration : docs/GOOGLE_PLACES.md
 */

export interface GoogleReview {
  author: string;
  authorUrl?: string;
  authorPhoto?: string;
  rating: number;
  text: string;
  relativeTime: string;
  publishTime?: string;
  url?: string;
}

export interface GoogleReviewsData {
  rating?: number;
  count?: number;
  mapsUrl?: string;
  reviews: GoogleReview[];
}

interface PlacesReview {
  rating?: number;
  relativePublishTimeDescription?: string;
  publishTime?: string;
  googleMapsUri?: string;
  text?: { text?: string };
  originalText?: { text?: string };
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
}

interface PlacesResponse {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlacesReview[];
}

export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) return null;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=fr`,
      {
        headers: {
          'X-Goog-Api-Key': key,
          'X-Goog-FieldMask': 'rating,userRatingCount,googleMapsUri,reviews',
        },
        next: { revalidate: 86400 },
      }
    );
    if (!res.ok) {
      console.error('[google-reviews] HTTP', res.status);
      return null;
    }
    const data = (await res.json()) as PlacesResponse;
    return {
      rating: data.rating,
      count: data.userRatingCount,
      mapsUrl: data.googleMapsUri,
      reviews: (data.reviews ?? [])
        .map((r) => ({
          author: r.authorAttribution?.displayName ?? 'Utilisateur Google',
          authorUrl: r.authorAttribution?.uri,
          authorPhoto: r.authorAttribution?.photoUri,
          rating: r.rating ?? 0,
          // Texte d'origine, sans traduction ni modification.
          text: r.originalText?.text ?? r.text?.text ?? '',
          relativeTime: r.relativePublishTimeDescription ?? '',
          publishTime: r.publishTime,
          url: r.googleMapsUri,
        }))
        .filter((r) => r.text.length > 0),
    };
  } catch (error) {
    console.error('[google-reviews] échec', error);
    return null;
  }
}
