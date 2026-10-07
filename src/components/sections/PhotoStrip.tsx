import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { photos } from '@/data/photos';

/** Aperçu des locaux sur la page d'accueil. */
export function PhotoStrip() {
  const items = [photos.facade, photos.salles[3], photos.salles[0]];
  return (
    <section className="section bg-slate-50">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-slate-900">
            Notre <span className="text-formaroute-blue-600">centre</span> à Domont
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Accueil, salle de code et de formation au 4 avenue Jean Jaurès.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {items.map((p) => (
            <div
              key={p.src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/a-propos/locaux"
            className="inline-flex items-center gap-2 font-semibold text-formaroute-blue-600 hover:text-formaroute-blue-700"
          >
            Voir nos locaux
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
