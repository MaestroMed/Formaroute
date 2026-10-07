import fs from 'node:fs';
import path from 'node:path';
import type { SiteDocument } from '@/data/site';

/**
 * Indique si un document a bien été déposé dans public/.
 * Évalué au build (pages statiques) : un PDF ajouté apparaît au déploiement
 * suivant, et aucun lien mort n'est jamais affiché.
 */
export function isDocumentAvailable(doc: SiteDocument): boolean {
  return fs.existsSync(path.join(process.cwd(), 'public', doc.file));
}

export function availableDocuments(docs: SiteDocument[]): SiteDocument[] {
  return docs.filter(isDocumentAvailable);
}
