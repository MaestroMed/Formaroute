import Link from 'next/link';
import { LegalPage, LegalSection, Field } from '@/components/legal/LegalPage';
import { site, todo } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Mentions légales',
  description: 'Mentions légales du site de l’auto-école Formaroute à Domont (95330).',
  path: '/mentions-legales',
});

export default function MentionsLegalesPage() {
  const { legal } = site;

  return (
    <LegalPage title="Mentions légales">
      <LegalSection title="1. Éditeur du site">
        <p>
          Le site formaroute.fr est édité par :<br />
          <strong>{legal.companyName ?? site.name}</strong> (nom commercial : {site.name})<br />
          Forme juridique : <Field value={todo(legal.legalForm)} />
          {legal.shareCapital && <>, au capital de {legal.shareCapital}</>}
          <br />
          SIRET : <Field value={todo(legal.siret)} />
          <br />
          Immatriculation : <Field value={todo(legal.registry)} />
          <br />
          N° de TVA intracommunautaire : <Field value={todo(legal.vatNumber)} />
          <br />
          Siège : {site.address.full}
          <br />
          Téléphone : {site.contact.phoneDisplay}
          <br />
          Email : {site.contact.email}
        </p>
        <p>
          Établissement d&apos;enseignement de la conduite agréé par la préfecture du
          Val-d&apos;Oise, agrément n° <Field value={todo(legal.agrementEcole)} />.
          <br />
          Organisme de formation : déclaration d&apos;activité n° <Field
            value={todo(legal.nda)}
          />{' '}
          (cet enregistrement ne vaut pas agrément de l&apos;État).
        </p>
      </LegalSection>

      <LegalSection title="2. Directeur de la publication">
        <p>
          <Field value={todo(legal.publicationDirector)} />
        </p>
      </LegalSection>

      <LegalSection title="3. Hébergement">
        <p>
          Vercel Inc.
          <br />
          440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
          <br />
          Site web : vercel.com
        </p>
      </LegalSection>

      <LegalSection title="4. Propriété intellectuelle">
        <p>
          L&apos;ensemble du contenu de ce site (textes, images, logos) est protégé par le droit
          d&apos;auteur et le droit des marques. Toute reproduction, même partielle, est interdite
          sans autorisation préalable.
        </p>
      </LegalSection>

      <LegalSection title="5. Données personnelles et cookies">
        <p>
          Le traitement de vos données personnelles est décrit dans notre{' '}
          <Link
            href="/politique-confidentialite"
            className="text-formaroute-blue-600 hover:underline"
          >
            politique de confidentialité
          </Link>
          .
        </p>
        <p>
          Ce site n&apos;utilise pas de cookies publicitaires ni de mesure d&apos;audience. La carte
          Google Maps n&apos;est chargée que si vous cliquez sur « Afficher la carte » ; Google peut
          alors déposer ses propres cookies.
        </p>
      </LegalSection>

      <LegalSection title="6. Médiation de la consommation">
        <p>
          En cas de litige, vous pouvez recourir gratuitement au médiateur de la consommation :{' '}
          <Field value={todo(site.mediator.name)} />
          {site.mediator.website && <> — {site.mediator.website}</>}. Voir aussi notre{' '}
          <Link href="/reclamations" className="text-formaroute-blue-600 hover:underline">
            procédure de réclamation
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="7. Litiges">
        <p>
          Le présent site est soumis au droit français. En cas de litige, une solution amiable sera
          recherchée avant toute action judiciaire.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
