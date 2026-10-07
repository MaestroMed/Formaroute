import Link from 'next/link';
import { LegalPage, LegalSection } from '@/components/legal/LegalPage';
import { DocumentLinks } from '@/components/legal/DocumentLinks';
import { isDocumentAvailable } from '@/lib/documents';
import { site } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Règlement intérieur',
  description: "Règlement intérieur de l'auto-école FORMAROUTE à Domont.",
  path: '/reglement-interieur',
});

export default function ReglementInterieurPage() {
  const doc = site.documents.reglementInterieur;
  const available = isDocumentAvailable(doc);

  return (
    <LegalPage
      title="Règlement intérieur"
      intro={`Le règlement intérieur adopté par ${site.legal.companyName} (enseigne ${site.brand}) s'applique à toute personne suivant une formation, dans nos locaux comme dans les véhicules école. Il est remis à chaque élève lors de l'inscription.`}
    >
      {available ? (
        <DocumentLinks docs={[doc]} title="Télécharger le règlement intérieur" />
      ) : (
        <LegalSection title="Consulter le règlement intérieur">
          <p>
            Le règlement intérieur est consultable à l&apos;accueil de l&apos;auto-école,{' '}
            {site.address.full}, et peut vous être envoyé sur simple demande à{' '}
            <a
              href={`mailto:${site.contact.email}`}
              className="text-formaroute-blue-600 hover:underline"
            >
              {site.contact.email}
            </a>
            .
          </p>
        </LegalSection>
      )}

      <LegalSection title="Une question ou une réclamation ?">
        <p>
          Consultez notre{' '}
          <Link href="/reclamations" className="text-formaroute-blue-600 hover:underline">
            procédure de réclamation
          </Link>{' '}
          ou{' '}
          <Link href="/contact" className="text-formaroute-blue-600 hover:underline">
            contactez-nous
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
