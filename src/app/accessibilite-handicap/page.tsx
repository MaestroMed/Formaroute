import Link from 'next/link';
import { LegalPage, LegalSection, Field } from '@/components/legal/LegalPage';
import { site, todo } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Accessibilité et handicap',
  description:
    "Formations accessibles aux personnes en situation de handicap : référent handicap, adaptations possibles et orientation à l'auto-école Formaroute de Domont.",
  path: '/accessibilite-handicap',
});

export default function AccessibiliteHandicapPage() {
  const ref = site.handicapReferent;

  return (
    <LegalPage
      title="Accessibilité et handicap"
      intro="Vous êtes en situation de handicap, temporaire ou durable, ou vous avez des difficultés d'apprentissage ? Parlez-en avec nous avant votre inscription : nous cherchons ensemble la solution la plus adaptée."
    >
      <LegalSection title="Votre référent handicap">
        <p>
          <strong>
            <Field value={todo(ref.name)} />
          </strong>
          <br />
          Email : {ref.email}
          <br />
          Téléphone : {ref.phoneDisplay}
        </p>
        <p>
          Le référent vous reçoit en toute confidentialité, étudie vos besoins et vous accompagne
          tout au long de la formation.
        </p>
      </LegalSection>

      <LegalSection title="Comment ça se passe">
        <ol className="list-inside list-decimal space-y-1">
          <li>Un entretien avec le référent pour comprendre votre situation et vos besoins.</li>
          <li>
            Selon le cas, un avis médical peut être nécessaire : certains handicaps demandent un
            examen par un médecin agréé par la préfecture avant de passer le permis.
          </li>
          <li>Une proposition d&apos;adaptations, intégrée à votre contrat et à votre planning.</li>
          <li>Un point régulier pendant la formation pour ajuster si besoin.</li>
        </ol>
      </LegalSection>

      <LegalSection title="Adaptations possibles">
        <ul className="list-inside list-disc space-y-1">
          <li>Rythme et durée des séances adaptés, pauses supplémentaires ;</li>
          <li>
            Supports pédagogiques adaptés (lecture des questions, temps supplémentaire selon les
            règles de l&apos;examen) ;
          </li>
          <li>Formation sur boîte automatique ;</li>
          <li>
            Si un véhicule aménagé est nécessaire, orientation vers une école de conduite équipée et
            vers les organismes compétents.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Partenaires et ressources">
        <ul className="list-inside list-disc space-y-1">
          <li>
            MDPH du Val-d&apos;Oise : reconnaissance du handicap et aides (prestation de
            compensation) ;
          </li>
          <li>
            Agefiph : aides au financement du permis pour les personnes en emploi ou en recherche
            d&apos;emploi ;
          </li>
          <li>
            Cap emploi : accompagnement vers l&apos;emploi des personnes en situation de handicap.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Accès aux locaux">
        <p>
          Nos locaux se situent {site.address.full}. Contactez-nous avant votre venue pour que nous
          organisions l&apos;accueil dans les meilleures conditions.{' '}
          <Link href="/contact" className="text-formaroute-blue-600 hover:underline">
            Nous contacter
          </Link>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
