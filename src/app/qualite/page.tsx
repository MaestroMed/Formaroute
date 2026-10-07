import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { LegalPage, LegalSection } from '@/components/legal/LegalPage';
import { DocumentLinks } from '@/components/legal/DocumentLinks';
import { site } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Nos engagements',
  description:
    "Les engagements de l'auto-école FORMAROUTE à Domont : information claire, évaluation de départ, suivi de progression, réclamations et accessibilité.",
  path: '/qualite',
});

const links = [
  { label: 'Nos formations : objectifs, programme, méthodes, durées', href: '/formations' },
  { label: 'Tarifs TTC', href: '/tarifs' },
  { label: 'Indicateurs de résultats', href: '/resultats' },
  { label: 'Conditions générales de vente', href: '/cgv' },
  { label: 'Règlement intérieur', href: '/reglement-interieur' },
  { label: 'Accessibilité et référent handicap', href: '/accessibilite-handicap' },
  { label: 'Procédure de réclamation', href: '/reclamations' },
];

export default function QualitePage() {
  return (
    <LegalPage
      title="Nos engagements"
      intro="Ce site contribue à l'information du public sur nos formations. Voici nos engagements et l'ensemble des informations utiles avant votre inscription."
    >
      <LegalSection title="Nos engagements">
        <ul className="list-inside list-disc space-y-1">
          <li>
            Une information claire sur chaque formation : objectifs, programme, méthodes, durées,
            tarifs.
          </li>
          <li>
            Une évaluation de départ avant l&apos;inscription, pour proposer un volume prévisionnel
            de formation.
          </li>
          <li>
            Une progression suivie dans le livret d&apos;apprentissage et lors des bilans
            pédagogiques.
          </li>
          <li>
            Des leçons individuelles avec un enseignant autorisé, sur véhicule à double commande.
          </li>
          <li>Un recueil de l&apos;avis des élèves et un traitement suivi des réclamations.</li>
          <li>L&apos;étude de toute demande d&apos;adaptation avec notre référent handicap.</li>
          <li>
            Des résultats publiés uniquement lorsqu&apos;ils sont réels, datés et accompagnés de
            leurs effectifs.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Informations et documents">
        <ul className="space-y-2">
          {links.map((doc) => (
            <li key={doc.href}>
              <Link
                href={doc.href}
                className="inline-flex items-center gap-1 font-medium text-formaroute-blue-600 hover:underline"
              >
                {doc.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>
      </LegalSection>

      <DocumentLinks title="Téléchargements" docs={Object.values(site.documents)} />

      <LegalSection title="Votre avis compte">
        <p>
          Vous pouvez nous laisser un avis sur{' '}
          <a
            href={site.social.googleReview}
            target="_blank"
            rel="noopener noreferrer"
            className="text-formaroute-blue-600 hover:underline"
          >
            Google
          </a>{' '}
          ou nous écrire à tout moment à {site.contact.email}.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
