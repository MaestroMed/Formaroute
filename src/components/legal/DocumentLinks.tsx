import { FileDown } from 'lucide-react';
import type { SiteDocument } from '@/data/site';
import { availableDocuments } from '@/lib/documents';

/**
 * Liens de téléchargement. Seuls les PDF réellement déposés dans
 * public/documents/ sont affichés : rien ne s'affiche tant qu'aucun n'existe.
 */
export function DocumentLinks({ docs, title }: { docs: SiteDocument[]; title?: string }) {
  const available = availableDocuments(docs);
  if (available.length === 0) return null;

  return (
    <section>
      {title && <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">{title}</h2>}
      <ul className="space-y-2">
        {available.map((doc) => (
          <li key={doc.file}>
            <a
              href={doc.file}
              download
              className="inline-flex items-center gap-2 font-semibold text-formaroute-blue-600 hover:underline"
            >
              <FileDown className="h-5 w-5" aria-hidden="true" />
              {doc.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
