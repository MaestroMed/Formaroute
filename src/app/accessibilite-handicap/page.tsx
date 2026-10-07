import Link from 'next/link';
import { LegalPage, LegalSection } from '@/components/legal/LegalPage';
import { ACCESSIBILITE } from '@/data/formations';
import { site } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Accessibilité et référent handicap',
  description:
    'Demande d’adaptation de formation à l’auto-école FORMAROUTE de Domont : contactez notre référent handicap.',
  path: '/accessibilite-handicap',
});

export default function AccessibiliteHandicapPage() {
  const ref = site.handicapReferent;

  return (
    <LegalPage title="Accessibilité et handicap" intro={ACCESSIBILITE}>
      <LegalSection title="Votre référent handicap">
        <p>
          <strong>{ref.name}</strong>
          <br />
          Téléphone :{' '}
          <a href={site.contact.phoneHref} className="text-formaroute-blue-600 hover:underline">
            {ref.phoneDisplay}
          </a>
          <br />
          Email :{' '}
          <a href={`mailto:${ref.email}`} className="text-formaroute-blue-600 hover:underline">
            {ref.email}
          </a>
        </p>
      </LegalSection>

      <LegalSection title="Comment ça se passe">
        <ol className="list-inside list-decimal space-y-1">
          <li>Vous nous contactez avant l&apos;inscription pour présenter votre demande.</li>
          <li>Nous étudions vos besoins et les adaptations possibles.</li>
          <li>Si nécessaire, nous vous proposons une orientation vers une structure adaptée.</li>
        </ol>
        <p>
          Certaines situations nécessitent un avis médical avant le passage du permis de conduire :
          nous vous indiquons les démarches.
        </p>
      </LegalSection>

      <LegalSection title="Ressources utiles">
        <ul className="list-inside list-disc space-y-1">
          <li>MDPH du Val-d&apos;Oise : reconnaissance du handicap et aides ;</li>
          <li>Agefiph : aides pour les personnes en emploi ou en recherche d&apos;emploi ;</li>
          <li>Cap emploi : accompagnement vers l&apos;emploi.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Accès à nos locaux">
        <p>
          Nos locaux se situent {site.address.full}. Contactez-nous avant votre venue pour que nous
          organisions votre accueil.{' '}
          <Link href="/contact" className="text-formaroute-blue-600 hover:underline">
            Nous contacter
          </Link>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
