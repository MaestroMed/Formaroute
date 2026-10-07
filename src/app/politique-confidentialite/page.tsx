import { LegalPage, LegalSection } from '@/components/legal/LegalPage';
import { site } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Politique de confidentialité',
  description:
    "Comment l'auto-école Formaroute collecte, utilise et protège vos données personnelles.",
  path: '/politique-confidentialite',
});

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      intro="Cette page explique quelles données personnelles nous collectons, pourquoi, combien de temps nous les conservons et comment exercer vos droits (RGPD)."
    >
      <LegalSection title="1. Responsable du traitement">
        <p>
          <strong>{site.legal.companyName}</strong> (enseigne {site.brand}) — SIRET{' '}
          {site.legal.siret}
          <br />
          {site.address.full}
          <br />
          Email : {site.contact.email} — Téléphone : {site.contact.phoneDisplay}
        </p>
      </LegalSection>

      <LegalSection title="2. Données collectées, finalités et bases légales">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th scope="col" className="py-2 pr-4 font-semibold text-slate-900">
                  Finalité
                </th>
                <th scope="col" className="py-2 pr-4 font-semibold text-slate-900">
                  Données
                </th>
                <th scope="col" className="py-2 pr-4 font-semibold text-slate-900">
                  Base légale
                </th>
                <th scope="col" className="py-2 font-semibold text-slate-900">
                  Conservation
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 align-top">
              <tr>
                <td className="py-2 pr-4">
                  Répondre aux demandes envoyées via le formulaire de contact
                </td>
                <td className="py-2 pr-4">Nom, prénom, email, téléphone, message</td>
                <td className="py-2 pr-4">Consentement / mesures précontractuelles</td>
                <td className="py-2">3 ans après le dernier contact</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">
                  Gestion de la formation (inscription, dossier ANTS, planning, livret)
                </td>
                <td className="py-2 pr-4">
                  Identité, coordonnées, pièces justificatives, progression
                </td>
                <td className="py-2 pr-4">Exécution du contrat et obligations légales</td>
                <td className="py-2">Durée de la formation, puis 5 ans</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Facturation et comptabilité</td>
                <td className="py-2 pr-4">Identité, prestations, paiements</td>
                <td className="py-2 pr-4">Obligation légale</td>
                <td className="py-2">10 ans</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">
                  Questionnaires de satisfaction et traitement des réclamations
                </td>
                <td className="py-2 pr-4">Réponses, échanges</td>
                <td className="py-2 pr-4">Intérêt légitime (amélioration de la qualité)</td>
                <td className="py-2">3 ans</td>
              </tr>
            </tbody>
          </table>
        </div>
      </LegalSection>

      <LegalSection title="3. Destinataires et sous-traitants">
        <p>
          Vos données sont destinées au personnel de l&apos;auto-école et, le cas échéant, aux
          administrations compétentes (ANTS, préfecture) et aux financeurs de votre formation. Elles
          ne sont jamais vendues.
        </p>
        <p>Nous faisons appel aux prestataires techniques suivants :</p>
        <ul className="list-inside list-disc space-y-1">
          <li>Vercel Inc. (États-Unis) : hébergement du site ;</li>
          <li>Resend (États-Unis) : acheminement des messages du formulaire de contact ;</li>
          <li>Google (Gmail) : messagerie de l&apos;auto-école ;</li>
          <li>Google Maps : uniquement si vous choisissez d&apos;afficher la carte.</li>
        </ul>
        <p>
          Ces transferts hors de l&apos;Union européenne sont encadrés par le cadre de protection
          des données UE–États-Unis (Data Privacy Framework) ou par les clauses contractuelles types
          de la Commission européenne.
        </p>
      </LegalSection>

      <LegalSection title="4. Cookies">
        <p>
          Ce site n&apos;utilise ni cookies publicitaires ni outil de mesure d&apos;audience. Seuls
          des éléments strictement nécessaires à son fonctionnement peuvent être utilisés. La carte
          Google Maps, susceptible de déposer des cookies, n&apos;est chargée que si vous cliquez
          sur « Afficher la carte ».
        </p>
      </LegalSection>

      <LegalSection title="5. Vos droits">
        <p>
          Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de
          limitation, de portabilité et d&apos;opposition, ainsi que du droit de retirer votre
          consentement à tout moment. Pour les exercer, écrivez-nous à {site.contact.email} ou à
          l&apos;adresse ci-dessus. Nous répondons dans un délai d&apos;un mois.
        </p>
        <p>
          Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation
          à la CNIL (www.cnil.fr).
        </p>
      </LegalSection>

      <LegalSection title="6. Sécurité">
        <p>
          Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
          protéger vos données contre tout accès non autorisé, perte ou altération.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
