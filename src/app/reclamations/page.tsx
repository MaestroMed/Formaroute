import Link from 'next/link';
import { LegalPage, LegalSection, Field } from '@/components/legal/LegalPage';
import { site, todo } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Réclamations',
  description:
    "Comment adresser une réclamation à l'auto-école Formaroute, délais de réponse et recours à la médiation.",
  path: '/reclamations',
});

export default function ReclamationsPage() {
  return (
    <LegalPage
      title="Réclamations"
      intro="Votre avis nous aide à nous améliorer. Si quelque chose ne vous convient pas, voici comment nous le signaler et comment nous traitons votre demande."
    >
      <LegalSection title="1. Comment nous faire part d'une réclamation">
        <ul className="list-inside list-disc space-y-1">
          <li>
            Par le{' '}
            <Link href="/contact" className="text-formaroute-blue-600 hover:underline">
              formulaire de contact
            </Link>{' '}
            (sujet « Réclamation ») ;
          </li>
          <li>par email : {site.contact.email} ;</li>
          <li>par courrier : {site.address.full} ;</li>
          <li>à l&apos;accueil de l&apos;auto-école, aux heures d&apos;ouverture.</li>
        </ul>
        <p>
          Précisez vos nom, prénom, coordonnées, la formation concernée et l&apos;objet de votre
          réclamation.
        </p>
      </LegalSection>

      <LegalSection title="2. Traitement">
        <ul className="list-inside list-disc space-y-1">
          <li>Accusé de réception sous 48 heures ouvrées.</li>
          <li>
            Réponse écrite et motivée sous {site.quality.complaintResponseDays} jours ouvrés au plus
            tard, après analyse et, si besoin, échange avec vous.
          </li>
          <li>
            Chaque réclamation est enregistrée et analysée afin de mettre en place des actions
            d&apos;amélioration.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Médiation de la consommation">
        <p>
          Si la réponse apportée ne vous satisfait pas, vous pouvez recourir gratuitement au
          médiateur de la consommation, après avoir adressé une réclamation écrite à
          l&apos;auto-école :
        </p>
        <p>
          <Field value={todo(site.mediator.name)} />
          {site.mediator.address && (
            <>
              <br />
              {site.mediator.address}
            </>
          )}
          {site.mediator.website && (
            <>
              <br />
              {site.mediator.website}
            </>
          )}
        </p>
      </LegalSection>
    </LegalPage>
  );
}
