import Link from 'next/link';
import { LegalPage, LegalSection, Field } from '@/components/legal/LegalPage';
import { site, todo } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Conditions générales de vente',
  description: "Conditions générales de vente de l'auto-école Formaroute à Domont.",
  path: '/cgv',
});

export default function CGVPage() {
  const { legal } = site;

  return (
    <LegalPage title="Conditions générales de vente">
      <LegalSection title="Article 1 - Objet et identification">
        <p>
          Les présentes conditions générales de vente régissent les relations entre
          l&apos;auto-école {site.name} et ses élèves pour l&apos;ensemble des formations proposées.{' '}
          {site.name} — <Field value={todo(legal.legalForm)} />, SIRET{' '}
          <Field value={todo(legal.siret)} />, {site.address.full}, agrément préfectoral n°{' '}
          <Field value={todo(legal.agrementEcole)} />.
        </p>
      </LegalSection>

      <LegalSection title="Article 2 - Évaluation de départ et contrat">
        <p>
          Avant toute formation à la conduite, une évaluation de départ est obligatoire. Elle donne
          lieu à une estimation écrite du volume d&apos;heures de formation, qui ne constitue pas un
          engagement de résultat.
        </p>
        <p>
          La formation fait ensuite l&apos;objet d&apos;un contrat écrit, signé par l&apos;élève (ou
          son représentant légal) et l&apos;auto-école, qui précise le programme, le volume de
          formation, le prix de chaque prestation et les modalités de paiement.
        </p>
      </LegalSection>

      <LegalSection title="Article 3 - Inscription">
        <p>
          L&apos;inscription est effective après signature du contrat, remise des pièces
          justificatives et versement du premier règlement selon le mode de paiement choisi.
        </p>
        <p>
          Pièces demandées : pièce d&apos;identité en cours de validité, justificatif de domicile de
          moins de 6 mois, photo d&apos;identité numérique, ASSR 2 ou ASR selon l&apos;âge,
          certificat de participation à la JDC pour les 17-25 ans.
        </p>
      </LegalSection>

      <LegalSection title="Article 4 - Tarifs et paiement">
        <p>
          Les tarifs sont ceux en vigueur au jour de la signature du contrat, affichés dans
          l&apos;établissement et sur la page{' '}
          <Link href="/tarifs" className="text-formaroute-blue-600 hover:underline">
            Tarifs
          </Link>
          . Ils sont exprimés en euros TTC.
        </p>
        <p>
          Modes de paiement acceptés : espèces (dans la limite légale), chèque, carte bancaire,
          virement
          {site.quality.qualiopiCertified ? ', CPF' : ''}. Le paiement peut être échelonné selon les
          modalités prévues au contrat.
        </p>
        <p>
          Les leçons supplémentaires au-delà du forfait et l&apos;accompagnement à chaque
          présentation à l&apos;examen pratique sont facturés au tarif unitaire en vigueur. Aucun
          frais n&apos;est facturé pour la présentation à l&apos;épreuve théorique (code) ni pour la
          restitution du dossier en cas de changement d&apos;école.
        </p>
      </LegalSection>

      <LegalSection title="Article 5 - Déroulement de la formation">
        <p>
          La formation comprend une partie théorique (code de la route) et une partie pratique
          (conduite), suivie dans le livret d&apos;apprentissage. L&apos;élève respecte le planning
          convenu et prévient en cas d&apos;absence.
        </p>
        <p>
          Toute leçon de conduite non annulée au moins 48 heures à l&apos;avance est due, sauf motif
          légitime justifié (maladie, cas de force majeure).
        </p>
      </LegalSection>

      <LegalSection title="Article 6 - Droit de rétractation">
        <p>
          L&apos;élève dispose d&apos;un délai de 14 jours à compter de la signature du contrat pour
          se rétracter, sans avoir à se justifier (article L.221-18 du Code de la consommation), en
          adressant une déclaration écrite dénuée d&apos;ambiguïté à l&apos;auto-école (
          {site.contact.email} ou {site.address.full}). Les sommes versées sont remboursées dans les
          14 jours.
        </p>
        <p>
          Si l&apos;élève demande expressément que la formation commence avant la fin de ce délai,
          il reste redevable, en cas de rétractation, du montant correspondant aux prestations déjà
          fournies.
        </p>
      </LegalSection>

      <LegalSection title="Article 7 - Résiliation et remboursement">
        <p>
          Après le délai de rétractation, l&apos;élève peut résilier le contrat à tout moment. Les
          sommes versées au titre des prestations non réalisées lui sont remboursées, déduction
          faite des frais administratifs et des prestations déjà consommées (leçons, fournitures
          remises).
        </p>
        <p>
          L&apos;auto-école peut résilier le contrat en cas de manquement grave de l&apos;élève au
          règlement intérieur, après l&apos;avoir invité à présenter ses observations.
        </p>
      </LegalSection>

      <LegalSection title="Article 8 - Durée de validité">
        <p>
          L&apos;accès à la formation au code est valable 1 an. Les leçons de conduite d&apos;un
          forfait sont à effectuer dans un délai d&apos;1 an à compter de la signature du contrat ;
          ce délai peut être prolongé sur demande. À défaut, les leçons non effectuées sont
          remboursées selon l&apos;article 7.
        </p>
      </LegalSection>

      <LegalSection title="Article 9 - Obligations de l'élève">
        <p>L&apos;élève s&apos;engage à :</p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            respecter le{' '}
            <Link href="/reglement-interieur" className="text-formaroute-blue-600 hover:underline">
              règlement intérieur
            </Link>{' '}
            ;
          </li>
          <li>se présenter aux leçons sans avoir consommé d&apos;alcool ni de stupéfiants ;</li>
          <li>avoir ses documents en règle ;</li>
          <li>respecter les consignes de sécurité et le personnel.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Article 10 - Responsabilité">
        <p>
          L&apos;auto-école met tout en œuvre pour assurer une formation de qualité. La réussite aux
          examens dépend notamment de l&apos;implication de l&apos;élève et ne peut être garantie.
        </p>
      </LegalSection>

      {site.quality.qualiopiCertified && (
        <LegalSection title="Article 11 - Financement CPF">
          <p>
            Les formations financées par le CPF sont soumises en complément aux conditions générales
            d&apos;utilisation de la plateforme Mon Compte Formation.
          </p>
        </LegalSection>
      )}

      <LegalSection title="Article 12 - Réclamations et médiation">
        <p>
          Toute réclamation peut être adressée selon notre{' '}
          <Link href="/reclamations" className="text-formaroute-blue-600 hover:underline">
            procédure de réclamation
          </Link>
          . À défaut de solution amiable, l&apos;élève peut saisir gratuitement le médiateur de la
          consommation : <Field value={todo(site.mediator.name)} />
          {site.mediator.website && <> ({site.mediator.website})</>}. Les tribunaux français sont
          compétents.
        </p>
      </LegalSection>

      <LegalSection title="Article 13 - Modification des CGV">
        <p>Les CGV applicables sont celles en vigueur au jour de la signature du contrat.</p>
      </LegalSection>
    </LegalPage>
  );
}
