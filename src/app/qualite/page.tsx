import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { LegalPage, LegalSection } from '@/components/legal/LegalPage';
import { site } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Notre démarche qualité',
  description:
    "Les engagements qualité de l'auto-école Formaroute : information transparente, évaluation de départ, suivi de progression, satisfaction des élèves et démarche Qualiopi.",
  path: '/qualite',
});

const documents = [
  { label: 'Nos formations (objectifs, prérequis, programme, évaluation)', href: '/formations' },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'Indicateurs de résultats', href: '/resultats' },
  { label: 'Conditions générales de vente', href: '/cgv' },
  { label: 'Règlement intérieur', href: '/reglement-interieur' },
  { label: 'Accessibilité et référent handicap', href: '/accessibilite-handicap' },
  { label: 'Procédure de réclamation', href: '/reclamations' },
];

export default function QualitePage() {
  const certified = site.quality.qualiopiCertified;

  return (
    <LegalPage
      title="Notre démarche qualité"
      intro={
        certified
          ? `${site.name} est certifié Qualiopi au titre des actions de formation.`
          : `${site.name} prépare sa certification Qualiopi, le référentiel national qualité des organismes de formation. Voici nos engagements.`
      }
    >
      {certified && site.quality.qualiopiCertificate && (
        <LegalSection title="Certification">
          <p>{site.quality.qualiopiCertificate}</p>
        </LegalSection>
      )}

      <LegalSection title="Nos engagements">
        <ul className="list-inside list-disc space-y-1">
          <li>
            Une information complète et à jour sur chaque formation : objectifs, prérequis, durée,
            tarifs, méthodes et modalités d&apos;évaluation.
          </li>
          <li>
            Une évaluation de départ systématique et une estimation écrite du volume de formation
            avant tout contrat.
          </li>
          <li>
            Une progression suivie dans le livret d&apos;apprentissage, avec des bilans réguliers et
            un examen blanc avant l&apos;examen.
          </li>
          <li>
            Des enseignants titulaires de l&apos;autorisation d&apos;enseigner, qui actualisent
            leurs compétences.
          </li>
          <li>Des véhicules entretenus et équipés de doubles commandes.</li>
          <li>
            Un recueil de la satisfaction des élèves en fin de formation et un traitement suivi des
            réclamations.
          </li>
          <li>
            Des formations ouvertes aux personnes en situation de handicap, avec un référent dédié.
          </li>
          <li>Des résultats publiés avec leur période et le nombre de candidats.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Documents et informations">
        <ul className="space-y-2">
          {documents.map((doc) => (
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

      <LegalSection title="Votre avis compte">
        <p>
          À la fin de votre formation, nous vous remettons un questionnaire de satisfaction. Vous
          pouvez aussi nous laisser un avis sur{' '}
          <a
            href={site.social.googleReview}
            target="_blank"
            rel="noopener noreferrer"
            className="text-formaroute-blue-600 hover:underline"
          >
            Google
          </a>{' '}
          ou nous écrire à tout moment.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
