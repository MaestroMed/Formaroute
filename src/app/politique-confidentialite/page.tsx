import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: "Politique de confidentialité et gestion des données personnelles - Formaroute",
  robots: { index: true, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="pt-20">
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-heading text-4xl font-bold text-slate-900">
              Politique de Confidentialité
            </h1>

            <div className="mt-8 space-y-8 text-slate-600">
              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  1. Introduction
                </h2>
                <p>
                  Formaroute s'engage à protéger la vie privée des utilisateurs de son site
                  web. Cette politique de confidentialité explique comment nous collectons,
                  utilisons et protégeons vos données personnelles conformément au Règlement
                  Général sur la Protection des Données (RGPD).
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  2. Responsable du traitement
                </h2>
                <p>
                  Le responsable du traitement des données est :<br />
                  <strong>Formaroute</strong><br />
                  [Adresse à compléter], 95330 Domont<br />
                  Email : contact@formaroute.fr<br />
                  Téléphone : 01 XX XX XX XX
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  3. Données collectées
                </h2>
                <p>Nous collectons les données suivantes :</p>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Données de navigation (cookies)</li>
                  <li>Informations fournies via les formulaires</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  4. Finalités du traitement
                </h2>
                <p>Vos données sont utilisées pour :</p>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  <li>Répondre à vos demandes de contact</li>
                  <li>Gérer les inscriptions et réservations</li>
                  <li>Vous envoyer des informations sur nos services (avec votre accord)</li>
                  <li>Améliorer notre site et nos services</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  5. Base légale
                </h2>
                <p>Le traitement de vos données repose sur :</p>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  <li>Votre consentement</li>
                  <li>L'exécution d'un contrat</li>
                  <li>Le respect d'obligations légales</li>
                  <li>Notre intérêt légitime</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  6. Durée de conservation
                </h2>
                <p>
                  Vos données sont conservées pendant la durée nécessaire aux finalités
                  pour lesquelles elles ont été collectées, et au maximum pendant 3 ans
                  après votre dernier contact avec nous.
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  7. Vos droits
                </h2>
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                  <li><strong>Droit de rectification :</strong> corriger vos données</li>
                  <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                  <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                  <li><strong>Droit d'opposition :</strong> vous opposer au traitement</li>
                </ul>
                <p className="mt-4">
                  Pour exercer ces droits, contactez-nous à : contact@formaroute.fr
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  8. Cookies
                </h2>
                <p>
                  Notre site utilise des cookies pour améliorer votre expérience de navigation.
                  Vous pouvez configurer votre navigateur pour refuser les cookies.
                </p>
                <p className="mt-2">Types de cookies utilisés :</p>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
                  <li><strong>Cookies analytiques :</strong> mesure d'audience (Google Analytics)</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  9. Sécurité
                </h2>
                <p>
                  Nous mettons en œuvre des mesures techniques et organisationnelles
                  appropriées pour protéger vos données contre tout accès non autorisé,
                  perte ou altération.
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  10. Réclamation
                </h2>
                <p>
                  Si vous estimez que vos droits ne sont pas respectés, vous pouvez
                  introduire une réclamation auprès de la CNIL (Commission Nationale
                  de l'Informatique et des Libertés) : www.cnil.fr
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  11. Modifications
                </h2>
                <p>
                  Cette politique de confidentialité peut être modifiée à tout moment.
                  Les modifications entrent en vigueur dès leur publication sur le site.
                </p>
              </div>
            </div>

            <p className="mt-12 text-sm text-slate-500">
              Dernière mise à jour : Janvier 2024
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
