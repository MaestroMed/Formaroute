# Informations et documents encore attendus — FORMAROUTE

_Mise à jour : 7 octobre 2026, après intégration des retours de la direction (SAS CONTRA)._

## Ce qui a été intégré
Les éléments suivants sont en ligne une fois la mise à jour publiée :
- l'identité SAS CONTRA / FORMAROUTE, le SIRET, le NDA et les trois agréments ;
- le Président, le Directeur général et le référent handicap ;
- le nouvel email et les horaires d'accueil ;
- les textes « enjeux et objectifs », « programme et méthodes » et « durées et accès » ;
- la grille tarifaire et le paiement en 3 ou 4 fois ;
- les règles du code : 12 mois d'accès aux ressources, examen à 30 € ;
- les trois bulles de l'accueil ;
- la passerelle affichée « Prochainement » ;
- la formation TP ECSR (ouverture prévue en janvier 2027) ;
- les stages de points à 250 € ;
- les photos des locaux.

Les mentions CPF et Qualiopi ainsi que les statistiques non justifiées ont été retirées.

## Encore à fournir

| # | Élément | Utilisation sur le site | Où le déposer / le renseigner |
|---|---|---|---|
| 1 | **Document « Permis B »** (conditions d'accès et d'examen), en PDF | Lien de téléchargement sur les fiches Permis B, la page auto-école et les tarifs | `public/documents/programme-permis-b.pdf` |
| 2 | **Contrat(s) de formation type**, en PDF | Téléchargement, et alignement final des CGV sur le contrat | `public/documents/contrat-formation.pdf` |
| 3 | **Règlement intérieur adopté**, en PDF | Page « Règlement intérieur » (pour l'instant : consultable à l'accueil ou sur demande) | `public/documents/reglement-interieur.pdf` |
| 4 | **Grille tarifaire officielle**, en PDF (facultatif) | Téléchargement sur la page tarifs | `public/documents/tarifs.pdf` |
| 5 | **Médiateur de la consommation** : nom, adresse, site | Obligation légale (CGV, mentions légales, réclamations) | `site.mediator` dans `src/data/site.ts` |
| 6 | **Photos des véhicules** (originaux, sans personne reconnaissable) | Page « Nos véhicules » | à envoyer |
| 7 | **Prochaines dates de stages de points** (et places) | Page stages | `site.stagePoints.dates` |
| 8 | **Résultats réels** : taux, nombre de candidats, période, méthode de calcul, source | Page « Nos résultats » | `site.results` |
| 9 | **TP ECSR** : durée, programme, prérequis, tarif, dates (à l'approche de janvier 2027) | Page formation moniteur | `src/data/formations.ts` |
| 10 | **Passerelle** : tarif et durée, au moment de l'ouverture | Page passerelle | `src/data/formations.ts` |
| 11 | **Pages Facebook / Instagram officielles** (si elles existent) | Pied de page | `site.social` |
| 12 | **Clé Google Places + Place ID** | Avis Google authentiques sur l'accueil | Vercel (voir `docs/GOOGLE_PLACES.md`) |
| 13 | **Domaine d'envoi email** (Resend) | Fiabilité du formulaire de contact | Vercel : `CONTACT_FROM` |
| 14 | Capital social, RCS, n° de TVA (facultatif mais recommandé) | Mentions légales | `site.legal` |

Les PDF déposés dans `public/documents/` apparaissent automatiquement sur le site au déploiement suivant. Aucun lien mort n'est jamais affiché.

---

## Message à envoyer au gérant

> Bonjour,
>
> Merci pour vos retours, ils sont intégrés au site : identité SAS CONTRA, agréments, horaires, textes sur le permis B, tarifs, trois activités sur la page d'accueil, photos des locaux. Les mentions CPF/Qualiopi et les chiffres non justifiés ont été retirés.
>
> Pour finaliser, pourriez-vous m'envoyer :
>
> **Documents (en PDF)**
> 1. Le document « Permis B » (conditions d'accès et d'examen), à mettre en téléchargement.
> 2. Le ou les contrats de formation types, pour aligner les CGV et les mettre en téléchargement.
> 3. Le règlement intérieur dans sa version adoptée.
> 4. Si vous le souhaitez, la grille tarifaire officielle.
>
> **Informations**
>
> 5. Le nom et les coordonnées de votre médiateur de la consommation. C'est une mention obligatoire.
> 6. Les prochaines dates de stages de récupération de points (et le nombre de places si vous voulez l'afficher).
> 7. Dès que vous en disposez : vos taux de réussite réels, avec la période, le nombre de candidats et la méthode de calcul.
> 8. Les liens de vos pages Facebook et Instagram officielles, si elles existent.
> 9. Le capital social, la ville du RCS et le n° de TVA, pour compléter les mentions légales.
>
> **Photos**
>
> 10. Les photos de vos véhicules école, en fichiers originaux, sans élève ni personne reconnaissable.
>
> **Avis Google**
>
> 11. Pour afficher automatiquement vos avis Google authentiques sur le site, il faut une clé de l'API Google Places. La procédure prend environ 15 minutes ; je peux vous l'envoyer, ou la faire avec vous si vous me donnez accès au compte Google qui gère la fiche FORMAROUTE. Il faudra renseigner une carte bancaire chez Google, mais l'usage du site reste dans le quota gratuit, et on peut plafonner les dépenses à 5 €.
>
> Merci d'avance,

---

## Rappel

Le site contribue à l'information du public (formations, tarifs, conditions, accessibilité, réclamations). Il **ne remplace pas** les preuves de fonctionnement demandées lors d'un audit Qualiopi : questionnaires de satisfaction, registre des réclamations, suivi pédagogique, veille, compétences des intervenants, etc. Voir `AUDIT_QUALIOPI.md`.
