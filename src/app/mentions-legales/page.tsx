import Link from 'next/link';
import { LegalPage, LegalSection } from '@/components/legal/LegalPage';
import { site } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Mentions légales',
  description:
    'Mentions légales du site formaroute.fr, édité par SAS CONTRA (enseigne FORMAROUTE) à Domont.',
  path: '/mentions-legales',
});

export default function MentionsLegalesPage() {
  const { legal } = site;

  return (
    <LegalPage title="Mentions légales">
      <LegalSection title="1. Éditeur du site">
        <p>
          Le site formaroute.fr est édité par <strong>{legal.companyName}</strong>, enseigne{' '}
          {site.brand}.
          <br />
          Forme juridique : {legal.legalForm}
          {legal.shareCapital && <>, au capital de {legal.shareCapital}</>}
          <br />
          SIRET : {legal.siret}
          {legal.registry && (
            <>
              <br />
              Immatriculation : {legal.registry}
            </>
          )}
          {legal.vatNumber && (
            <>
              <br />
              N° de TVA intracommunautaire : {legal.vatNumber}
            </>
          )}
          <br />
          Siège : {site.address.full}
          <br />
          Téléphone : {site.contact.phoneDisplay}
          <br />
          Email : {site.contact.email}
        </p>
        <p>
          Président : {legal.president}
          <br />
          Directeur général : {legal.directeurGeneral}
        </p>
      </LegalSection>

      <LegalSection title="2. Agréments et déclaration d'activité">
        <ul className="list-inside list-disc space-y-1">
          <li>Auto-école : agrément n° {legal.agrementEcole}</li>
          <li>
            Centre de sensibilisation à la sécurité routière (stages de points) : agrément n°{' '}
            {legal.agrementStagePoints}
          </li>
          <li>Centre de formation ECSR : agrément n° {legal.agrementEcsr}</li>
          <li>
            Déclaration d&apos;activité d&apos;organisme de formation n° {legal.nda} (cet
            enregistrement ne vaut pas agrément de l&apos;État)
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Directeur de la publication">
        <p>{legal.publicationDirector}</p>
      </LegalSection>

      <LegalSection title="4. Hébergement">
        <p>
          Vercel Inc.
          <br />
          440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
          <br />
          Site web : vercel.com
        </p>
      </LegalSection>

      <LegalSection title="5. Propriété intellectuelle">
        <p>
          L&apos;ensemble du contenu de ce site (textes, photographies, logos) est la propriété de{' '}
          {legal.companyName} ou de ses partenaires. Toute reproduction, même partielle, est
          interdite sans autorisation préalable. Les avis Google affichés restent la propriété de
          leurs auteurs.
        </p>
      </LegalSection>

      <LegalSection title="6. Données personnelles et cookies">
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

      <LegalSection title="7. Réclamations et médiation">
        <p>
          Voir notre{' '}
          <Link href="/reclamations" className="text-formaroute-blue-600 hover:underline">
            procédure de réclamation
          </Link>
          {site.mediator.name && (
            <>
              . Médiateur de la consommation : {site.mediator.name}
              {site.mediator.website && <> — {site.mediator.website}</>}
            </>
          )}
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
