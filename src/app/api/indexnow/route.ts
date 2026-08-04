import { NextResponse } from "next/server";
import sitemap from "@/app/sitemap";
import { INDEXNOW_ENDPOINT, INDEXNOW_KEY } from "@/lib/indexnow";


// Soumet toutes les URLs du sitemap a IndexNow (Bing/Copilot notamment).
// A appeler apres un deploiement significatif : `POST /api/indexnow`.
// Sans effet tant que public/<cle>.txt n'est pas servi en prod — le moteur
// verifie la cle avant de crawler. Inoffensif donc en local et en preprod.
// INDEXNOW_SUBMIT_SECRET (optionnel) verrouille l'endpoint par Bearer.
export async function POST(request: Request) {
  const secret = process.env.INDEXNOW_SUBMIT_SECRET;
  if (secret && request.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  // Le sitemap est deja la liste canonique des URLs indexables : on la
  // reutilise telle quelle, aucune seconde source de verite a maintenir.
  const entries = sitemap();
  // Array.from et non le spread : la cible TypeScript de ce projet est
  // anterieure a ES2015, elle n'itere pas un Set au spread.
  const urlList = Array.from(new Set(entries.map((entry) => entry.url)));
  const origin = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.formaroute.fr';

  try {
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: new URL(origin).host,
        key: INDEXNOW_KEY,
        keyLocation: `${origin}/${INDEXNOW_KEY}.txt`,
        urlList,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    // 200 = recu, 202 = recu mais cle pas encore validee — les deux sont OK.
    if (!res.ok && res.status !== 202) {
      return NextResponse.json(
        { error: "indexnow_error", status: res.status },
        { status: 502 },
      );
    }
    return NextResponse.json({ submitted: urlList.length, status: res.status });
  } catch (error) {
    console.error("[indexnow] soumission echouee :", error);
    return NextResponse.json({ error: "indexnow_unreachable" }, { status: 502 });
  }
}
