import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente',
  description: "Conditions générales de vente de l'auto-école Formaroute à Domont",
  robots: { index: true, follow: true },
};

export default function CGVPage() {
  return (
    <main className="pt-20">
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-heading text-4xl font-bold text-slate-900">
              Conditions Générales de Vente
            </h1>

            <div className="mt-8 space-y-8 text-slate-600">
              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  Article 1 - Objet
                </h2>
                <p>
                  Les présentes conditions générales de vente régissent les relations
                  contractuelles entre l'auto-école Formaroute et ses clients pour
                  l'ensemble des formations proposées.
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  Article 2 - Inscription
                </h2>
                <p>
                  L'inscription est effective après signature du contrat de formation,
                  remise des pièces justificatives demandées et versement des arrhes ou
                  du premier règlement selon le mode de paiement choisi.
                </p>
                <p className="mt-2">
                  Documents requis : pièce d'identité en cours de validité, justificatif
                  de domicile de moins de 6 mois, photo d'identité aux normes, ASSR 2 ou
                  ASR (pour les moins de 21 ans).
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  Article 3 - Tarifs et paiement
                </h2>
                <p>
                  Les tarifs sont ceux en vigueur au jour de l'inscription, affichés
                  dans l'établissement et sur le site internet. Ils sont exprimés en
                  euros TTC.
                </p>
                <p className="mt-2">
                  Modes de paiement acceptés : espèces, chèque, carte bancaire, virement,
                  CPF. Le paiement peut être échelonné selon les modalités convenues
                  lors de l'inscription.
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  Article 4 - Évaluation préalable
                </h2>
                <p>
                  Avant toute inscription, une évaluation préalable est obligatoire.
                  Elle permet d'estimer le volume d'heures de formation nécessaire.
                  Cette évaluation ne constitue pas un engagement ferme de résultat.
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  Article 5 - Déroulement de la formation
                </h2>
                <p>
                  La formation comprend une partie théorique (code de la route) et une
                  partie pratique (conduite). L'élève doit respecter le planning établi
                  et prévenir en cas d'absence.
                </p>
                <p className="mt-2">
                  Les leçons de conduite non annulées au moins 48 heures à l'avance
                  seront facturées.
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  Article 6 - Annulation et remboursement
                </h2>
                <p>
                  Conformément à l'article L221-18 du Code de la consommation, l'élève
                  dispose d'un délai de 14 jours pour exercer son droit de rétractation
                  à compter de la signature du contrat.
                </p>
                <p className="mt-2">
                  Passé ce délai, les sommes versées pour les prestations non encore
                  réalisées peuvent être remboursées sous déduction des frais de dossier,
                  sauf en cas de force majeure.
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  Article 7 - Obligations de l'élève
                </h2>
                <p>L'élève s'engage à :</p>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  <li>Respecter le règlement intérieur de l'établissement</li>
                  <li>Se présenter aux leçons en état de sobriété</li>
                  <li>Avoir ses documents en règle (identité, code de la route obtenu pour la conduite)</li>
                  <li>Respecter les consignes de sécurité</li>
                  <li>Adopter un comportement respectueux envers le personnel</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  Article 8 - Responsabilité
                </h2>
                <p>
                  L'auto-école ne peut être tenue responsable en cas d'échec aux examens.
                  Elle met tout en œuvre pour assurer une formation de qualité mais ne
                  garantit pas la réussite qui dépend de l'implication de l'élève.
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  Article 9 - Validité des forfaits
                </h2>
                <p>
                  Les forfaits de formation sont valables 1 an à compter de la date
                  d'inscription. Au-delà, les heures non effectuées sont perdues sauf
                  accord exceptionnel de la direction.
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  Article 10 - Litiges
                </h2>
                <p>
                  En cas de litige, une solution amiable sera recherchée. À défaut,
                  le client peut saisir le médiateur de la consommation ou les
                  tribunaux compétents.
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  Article 11 - Modification des CGV
                </h2>
                <p>
                  Formaroute se réserve le droit de modifier les présentes CGV à tout
                  moment. Les CGV applicables sont celles en vigueur au jour de
                  l'inscription.
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
