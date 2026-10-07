'use client';

import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { site } from '@/data/site';

/**
 * Carte Google Maps chargée uniquement au clic.
 *
 * L'iframe Google dépose des cookies : la charger d'office imposerait un
 * bandeau de consentement (recommandations CNIL). Au clic, c'est l'utilisateur
 * qui la demande.
 */
export function MapEmbed({ className }: { className?: string }) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div className={className}>
        <iframe
          src={site.address.mapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Plan d'accès : ${site.address.full}`}
        />
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-slate-100 p-6 text-center">
        <MapPin className="h-8 w-8 text-formaroute-blue-600" aria-hidden="true" />
        <p className="font-medium text-slate-900">{site.address.full}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="rounded-lg bg-formaroute-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-formaroute-blue-700"
          >
            Afficher la carte
          </button>
          <a
            href={site.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Ouvrir dans Google Maps
          </a>
        </div>
        <p className="text-xs text-slate-500">
          L&apos;affichage de la carte charge un service Google susceptible de déposer des cookies.
        </p>
      </div>
    </div>
  );
}
