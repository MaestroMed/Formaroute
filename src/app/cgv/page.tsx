import Link from 'next/link';
import { LegalPage, LegalSection } from '@/components/legal/LegalPage';
import { DocumentLinks } from '@/components/legal/DocumentLinks';
import { site } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Conditions générales de vente',
  description: "Conditions générales de vente de l'auto-école FORMAROUTE (SAS CONTRA) à Domont.",
  path: '/cgv',
});

export default function CGVPage() {
  const { legal } = site;

  return (
    <LegalPage
      title="Conditions générales de vente"
      intro="Ces conditions présentent le cadre général de nos prestations. Les conditions détaillées figurent dans le contrat de formation remis et signé lors de l'inscription : en cas de différence, le contrat signé prévaut."
    >
      <LegalSection title="Article 1 - Identification">
        <p>
          {legal.companyName}, enseigne {site.brand} — {legal.legalForm}, SIRET {legal.siret},{' '}
          {site.address.full}. Auto-école agréée sous le n° {legal.agrementEcole}. Déclaration
          d&apos;activité d&apos;organisme de formation n° {legal.nda}.
        </p>
      </LegalSection>

      <LegalSection title="Article 2 - Évaluation de départ et contrat">
        <p>
          Une évaluation de départ est réalisée avant l&apos;inscription. Elle permet de proposer un
          volume prévisionnel de formation, adapté ensuite à la progression de l&apos;élève.
        </p>
        <p>
          L&apos;inscription comprend la prise de contact, l&apos;évaluation, la constitution du
          dossier et la signature du contrat de formation. Aucune date d&apos;examen ni réussite
          n&apos;est garantie.
        </p>
      </LegalSection>

      <LegalSection title="Article 3 - Tarifs et paiement">
        <p>
          Les tarifs sont ceux affichés dans l&apos;établissement et sur la page{' '}
          <Link href="/tarifs" className="text-formaroute-blue-600 hover:underline">
            Tarifs
          </Link>{' '}
          au jour de la signature du contrat. Ils sont exprimés en euros TTC.
        </p>
        <p>
          Les prestations non comprises dans le forfait (heures complémentaires, accompagnement à
          l&apos;examen pratique) sont facturées au tarif en vigueur. Les frais de passage de
          l&apos;examen du code ({site.code.examFee} € par passage) sont réglés directement à
          l&apos;organisme d&apos;examen.
        </p>
        <p>
          Le paiement peut être effectué {site.paymentPlan}, selon les modalités prévues au contrat.
        </p>
      </LegalSection>

      <LegalSection title="Article 4 - Formation au code">
        <p>
          L&apos;accès aux ressources pédagogiques du code est valable {site.code.access}. Cette
          durée d&apos;accès est distincte de la validité de l&apos;examen du code.
        </p>
      </LegalSection>

      <LegalSection title="Article 5 - Droit de rétractation">
        <p>
          Lorsque le contrat est conclu à distance ou hors établissement, l&apos;élève dispose
          d&apos;un délai de 14 jours pour se rétracter, dans les conditions prévues par le Code de
          la consommation (articles L.221-18 et suivants). La rétractation s&apos;exerce par écrit
          auprès de l&apos;auto-école ({site.contact.email} ou {site.address.full}).
        </p>
      </LegalSection>

      <LegalSection title="Article 6 - Obligations de l'élève">
        <p>
          L&apos;élève respecte le{' '}
          <Link href="/reglement-interieur" className="text-formaroute-blue-600 hover:underline">
            règlement intérieur
          </Link>{' '}
          et les consignes de sécurité données par l&apos;enseignant.
        </p>
      </LegalSection>

      <LegalSection title="Article 7 - Réclamations et médiation">
        <p>
          Toute réclamation peut être adressée selon notre{' '}
          <Link href="/reclamations" className="text-formaroute-blue-600 hover:underline">
            procédure de réclamation
          </Link>
          {site.mediator.name ? (
            <>
              . À défaut de solution amiable, l&apos;élève peut saisir gratuitement le médiateur de
              la consommation : {site.mediator.name}
              {site.mediator.website && <> ({site.mediator.website})</>}.
            </>
          ) : (
            '.'
          )}
        </p>
      </LegalSection>

      <DocumentLinks
        title="Documents"
        docs={[site.documents.contrat, site.documents.tarifs, site.documents.reglementInterieur]}
      />
    </LegalPage>
  );
}
