import Link from 'next/link';
import { LegalPage, LegalSection } from '@/components/legal/LegalPage';
import { site } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Règlement intérieur',
  description:
    "Règlement intérieur de l'auto-école Formaroute à Domont : règles d'hygiène et de sécurité, discipline, déroulement des cours et des leçons.",
  path: '/reglement-interieur',
});

export default function ReglementInterieurPage() {
  return (
    <LegalPage
      title="Règlement intérieur"
      intro={`Ce règlement s'applique à toute personne suivant une formation chez ${site.name}, dans nos locaux comme dans les véhicules école. Il est établi conformément aux articles L.6352-3 et suivants du Code du travail. Un exemplaire est remis à chaque élève lors de l'inscription.`}
    >
      <LegalSection title="Article 1 - Hygiène et sécurité">
        <ul className="list-inside list-disc space-y-1">
          <li>
            Chaque élève respecte les consignes de sécurité affichées dans les locaux et celles
            données par l&apos;enseignant.
          </li>
          <li>Il est interdit de fumer ou de vapoter dans les locaux et les véhicules.</li>
          <li>
            Il est interdit de se présenter sous l&apos;emprise de l&apos;alcool, de stupéfiants ou
            de médicaments incompatibles avec la conduite. L&apos;enseignant peut refuser
            d&apos;effectuer la leçon ; elle est alors due.
          </li>
          <li>
            En cas d&apos;accident ou d&apos;incident, l&apos;élève prévient immédiatement
            l&apos;enseignant ou l&apos;accueil.
          </li>
          <li>
            Les consignes d&apos;évacuation en cas d&apos;incendie sont affichées dans les locaux.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Article 2 - Leçons de conduite">
        <ul className="list-inside list-disc space-y-1">
          <li>
            L&apos;élève se présente à l&apos;heure avec son livret d&apos;apprentissage et une
            pièce d&apos;identité, avec une tenue et des chaussures adaptées à la conduite.
          </li>
          <li>Le téléphone est éteint ou en mode silencieux pendant la leçon.</li>
          <li>
            Toute leçon doit être annulée au moins 48 heures à l&apos;avance, sauf motif légitime
            justifié ; à défaut, elle est due.
          </li>
          <li>
            Au-delà de 15 minutes de retard de l&apos;élève, la leçon peut être annulée et rester
            due.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Article 3 - Cours de code et salle de formation">
        <ul className="list-inside list-disc space-y-1">
          <li>
            Les élèves respectent les horaires des cours et le silence pendant les séries de tests.
          </li>
          <li>
            Le matériel mis à disposition est utilisé conformément à son objet et laissé en bon
            état.
          </li>
          <li>Il est interdit de manger dans la salle de code.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Article 4 - Comportement">
        <p>
          Chacun adopte un comportement respectueux envers le personnel et les autres élèves. Tout
          propos ou comportement discriminatoire, violent ou harcelant est interdit.
        </p>
      </LegalSection>

      <LegalSection title="Article 5 - Sanctions et garanties">
        <p>
          Tout manquement au présent règlement peut faire l&apos;objet, selon sa gravité, d&apos;un
          avertissement, d&apos;une suspension temporaire de la formation ou d&apos;une exclusion
          définitive. Aucune sanction ne peut être prise sans que l&apos;élève ait été informé par
          écrit des griefs retenus et invité à présenter ses explications, éventuellement assisté de
          la personne de son choix. La sanction est motivée et notifiée par écrit.
        </p>
      </LegalSection>

      <LegalSection title="Article 6 - Représentation des stagiaires">
        <p>
          Pour les actions de formation d&apos;une durée totale supérieure à 500 heures, un délégué
          titulaire et un délégué suppléant sont élus dans les conditions prévues par le Code du
          travail. Les formations actuellement proposées ne sont pas concernées.
        </p>
      </LegalSection>

      <LegalSection title="Article 7 - Réclamations">
        <p>
          Toute réclamation peut être formulée selon la{' '}
          <Link href="/reclamations" className="text-formaroute-blue-600 hover:underline">
            procédure de réclamation
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
