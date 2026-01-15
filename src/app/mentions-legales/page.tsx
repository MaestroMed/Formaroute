import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: "Mentions légales du site Formaroute - Auto-école à Domont (95330)",
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <main className="pt-20">
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-heading text-4xl font-bold text-slate-900">
              Mentions Légales
            </h1>

            <div className="mt-8 space-y-8 text-slate-600">
              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  1. Éditeur du site
                </h2>
                <p>
                  Le site formaroute.fr est édité par :<br />
                  <strong>Formaroute</strong><br />
                  [Forme juridique à compléter]<br />
                  SIRET : [À compléter]<br />
                  Numéro d'agrément préfectoral : [À compléter]<br />
                  Adresse : [À compléter], 95330 Domont<br />
                  Téléphone : 01 XX XX XX XX<br />
                  Email : contact@formaroute.fr
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  2. Directeur de la publication
                </h2>
                <p>
                  Le directeur de la publication est [Nom du responsable à compléter],
                  en qualité de [Fonction à compléter].
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  3. Hébergement
                </h2>
                <p>
                  Le site est hébergé par :<br />
                  <strong>Vercel Inc.</strong><br />
                  440 N Barranca Ave #4133<br />
                  Covina, CA 91723<br />
                  États-Unis<br />
                  Site web : vercel.com
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  4. Propriété intellectuelle
                </h2>
                <p>
                  L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.)
                  est protégé par le droit d'auteur et le droit des marques. Toute
                  reproduction, même partielle, est interdite sans autorisation préalable.
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  5. Données personnelles
                </h2>
                <p>
                  Les informations recueillies sur ce site font l'objet d'un traitement
                  informatique destiné à la gestion des demandes de contact et des
                  inscriptions. Conformément au RGPD, vous disposez d'un droit d'accès,
                  de rectification et de suppression de vos données.
                </p>
                <p className="mt-2">
                  Pour exercer ces droits, contactez-nous à : contact@formaroute.fr
                </p>
                <p className="mt-2">
                  Pour plus d'informations, consultez notre{' '}
                  <a
                    href="/politique-confidentialite"
                    className="text-formaroute-blue-600 hover:underline"
                  >
                    politique de confidentialité
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  6. Cookies
                </h2>
                <p>
                  Ce site utilise des cookies pour améliorer l'expérience utilisateur
                  et mesurer l'audience. En poursuivant votre navigation, vous acceptez
                  l'utilisation de ces cookies.
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  7. Crédits
                </h2>
                <p>
                  Conception et développement : [À compléter]<br />
                  Photographies : [À compléter]
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-slate-900">
                  8. Litiges
                </h2>
                <p>
                  En cas de litige, une solution amiable sera recherchée avant toute
                  action judiciaire. À défaut, les tribunaux français seront seuls
                  compétents.
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
