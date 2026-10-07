# Audit du site et préparation Qualiopi — Formaroute

_Audit réalisé le 7 octobre 2026. Ce document liste ce qui a été corrigé sur le site, ce qu'il reste à fournir par le gérant et ce que Qualiopi demande en dehors du site._

> **Mise à jour du 7 octobre 2026 (retours de la direction intégrés).** L'identité SAS CONTRA, le SIRET, le NDA, les agréments, les dirigeants, le référent handicap, les horaires, les textes pédagogiques, les durées (leçons de 60 min), les tarifs et les règles du code sont maintenant en ligne.
>
> Toutes les mentions CPF et Qualiopi ont été retirées du site : **le site ne se présente pas comme « conforme Qualiopi »**. Il contribue à l'information du public, mais ne remplace pas les preuves de fonctionnement de l'organisme.
>
> La liste à jour des éléments manquants et le message pour le gérant se trouvent dans **[DEMANDES_GERANT.md](./DEMANDES_GERANT.md)**. Les sections 3 et 4 ci-dessous datent de l'audit initial : les points 3.1 et 3.2 (durée des leçons) sont résolus, la leçon durant désormais 60 minutes.

---

## 1. Résumé

Le site était fonctionnel en apparence, mais il **n'aurait pas passé un audit Qualiopi** et présentait plusieurs **risques juridiques** :

- **Des chiffres non sourcés** (85 % de réussite, 92 % au code, « 500+ » ou « 1 500+ » élèves, 4,8/5 sur Google, 10 ou 15 ans d'expérience) pour une école ouverte en avril 2026. C'est un risque de **pratique commerciale trompeuse** et une non-conformité Qualiopi (indicateur 2).
- **« Éligible CPF » affiché** alors que le CPF exige justement la certification Qualiopi.
- **Aucune fiche formation complète** : objectifs, prérequis, méthodes, évaluation, délais d'accès et handicap manquaient (indicateur 1).
- **Pas de référent handicap, pas de procédure de réclamation, pas de règlement intérieur** (le lien du pied de page menait à une 404).
- **Des pages cassées** : 15 pages villes en 404, une dizaine de liens morts, un faux numéro « 01 XX XX XX XX » sur 7 pages, trois adresses email et deux grilles d'horaires différentes.
- **Un formulaire de contact qui affichait « envoyé » même en cas d'échec**.

Tout cela est corrigé. Il reste surtout **des informations que seul le gérant peut fournir** (section 4). Elles apparaissent en surligné « [À compléter] » sur le site tant qu'elles ne sont pas renseignées.

---

## 2. Ce qui a été corrigé

### Une seule source de vérité
Toutes les infos de l'entreprise sont maintenant dans **`src/data/site.ts`** : coordonnées, horaires, SIRET, agréments, NDA, référent handicap, médiateur, résultats, statut Qualiopi. **Pour mettre à jour le site, on modifie ce fichier et rien d'autre.**

### Conformité Qualiopi
- **Fiches formation** (`/formations/...`) : objectifs, public et prérequis, programme (compétences du référentiel REMC), méthodes et moyens, modalités d'évaluation, durée et délais d'accès, accessibilité, tarif et financement, certification visée (équivalences, passerelles, débouchés), résultats, date de mise à jour.
- **Page `/resultats`** : tableau par examen (taux, nombre de candidats, période, source), satisfaction, taux d'abandon. Elle affiche « en cours de constitution » tant que les chiffres réels ne sont pas saisis.
- **Nouvelles pages** :
  - `/qualite` : démarche qualité ;
  - `/accessibilite-handicap` : référent handicap, procédure, adaptations, partenaires ;
  - `/reclamations` : canaux, délais, médiateur ;
  - `/reglement-interieur` : règlement conforme à l'art. L.6352-3 du Code du travail.
- **CPF** : toutes les mentions « Éligible CPF » s'activent automatiquement en passant `qualiopiCertified: true` dans `site.ts`. En attendant, le site indique « certification Qualiopi en cours ».

### Légal
- **Mentions légales** complètes au sens de la loi LCEN : forme juridique, SIRET, RCS, TVA, agrément, NDA, directeur de publication, hébergeur, médiateur.
- **CGV réécrites** :
  - identification du vendeur ;
  - évaluation de départ et contrat écrit ;
  - rétractation de 14 jours, avec prorata si la formation démarre avant la fin du délai ;
  - résiliation avec remboursement des prestations non consommées (l'ancienne clause « heures perdues » était probablement abusive) ;
  - aucun frais de présentation au code ni de restitution du dossier ;
  - médiateur.
- **Politique de confidentialité réécrite** :
  - tableau finalités / bases légales / durées de conservation ;
  - sous-traitants (Vercel, Resend, Gmail, Google Maps) et transferts hors UE ;
  - retrait de la mention de Google Analytics, qui n'était pas installé.
- **Google Maps chargé seulement au clic**, ce qui évite les cookies déposés sans consentement. Pas besoin de bandeau cookies.
- **Pôle Emploi → France Travail** partout.

### Contenu corrigé (erreurs factuelles)
- **Durées affichées honnêtement** : « 20 leçons de 50 min (soit 16 h 40) » au lieu de « 20 h ».
- **Évaluation de départ** : 50 min partout (on trouvait « environ 1 heure » à un endroit).
- **Stage de récupération de points** : la mention « dès mai 2026 », périmée, est retirée. Le stage est affiché « ouverture prochaine ».
- **Centre de formation** : il n'est plus affiché « Gratuit », et la mention CPF est retirée.
- **FAQ et blog** :
  - conditions de l'accompagnateur en AAC corrigées ;
  - capital de points du permis probatoire corrigé ;
  - le prix du stage n'est pas « fixé par l'agrément », contrairement à ce qui était écrit ;
  - formule « permis en 2 à 3 semaines » retirée (elle n'existe pas) ;
  - dates d'articles antérieures à l'ouverture corrigées.
- **Badge « Code offert »** retiré du forfait code lui-même. Il reste sur les forfaits permis.
- **Hero** : « Permis B dès 995 € » précise maintenant « boîte automatique · 1 195 € en manuelle ».

### Technique, référencement, accessibilité
- **Liens morts supprimés** ; le site compte désormais **0 lien cassé** (36 pages vérifiées automatiquement).
- **Les 15 pages « auto-école + ville » générées en série sont abandonnées.** Elles étaient en 404, et ce type de pages à contenu dupliqué est pénalisé par Google. La page Domont liste à la place les communes desservies.
- **Sitemap** : il ne liste plus que les vraies pages, plus le blog.
- **robots.txt** : il ne bloque plus `/_next/`, dont Google a besoin pour afficher les pages.
- **Titres, descriptions et URL canoniques** propres sur chaque page, plus une image de partage générée automatiquement.
- **Données structurées** : établissement, formations (Course), FAQ, articles, fil d'Ariane.
- **Boutons** : les boutons « contour » blanc sur fond blanc, invisibles, sont corrigés, ainsi que la hauteur des grands boutons, qui n'existait pas.
- **Accessibilité** :
  - un seul `<main>` par page ;
  - lien « Aller au contenu » ;
  - menus utilisables au clavier (touche Échap comprise) ;
  - contrastes renforcés ;
  - erreurs du formulaire annoncées aux lecteurs d'écran ;
  - respect du réglage « réduire les animations ».
- **Logo** : pictogramme détouré et allégé (48 Ko au lieu de 836 Ko).
- **Formulaire de contact** :
  - erreurs d'envoi détectées et affichées ;
  - protection contre l'injection HTML ;
  - anti-spam (champ piège et limite de débit).
- **Dépendances inutilisées retirées** (Sanity, Embla, plusieurs paquets Radix), ainsi que le code mort.

---

## 3. Points de vigilance (à trancher par le gérant)

1. **⚠ Durée des forfaits par rapport au minimum réglementaire.** Le minimum est de 20 h de conduite pour le permis B manuel, 13 h en boîte automatique, et 20 h (13 h en BVA) pour la formation initiale de l'AAC. Or 20 leçons de 50 min font **16 h 40**, et 13 leçons font **10 h 50**. Il faut vérifier soit que les leçons durent bien 60 min, soit que le forfait est complété. Si les leçons durent 60 min, il suffit de changer `lessonMinutes` dans `site.ts`.
2. **⚠ Passerelle BVA → manuelle** : la formation réglementaire est de **7 heures**, alors que 7 leçons de 50 min font 5 h 50. Même vérification à faire.
3. **CPF** : ne rien promettre avant l'obtention de Qualiopi **et** le référencement de l'offre sur Mon Compte Formation (EDOF). Ensuite, passer `qualiopiCertified: true` dans `site.ts`.
4. **Taux de réussite** : publier uniquement les chiffres officiels, avec la période et le nombre de candidats. L'affichage des taux de réussite est une obligation propre aux écoles de conduite. Renseigner aussi `results.officialSource` avec le lien officiel.
5. **Contrat écrit** : il doit reprendre l'évaluation de départ, le volume de formation et le prix de chaque prestation. Le faire relire si besoin.
6. **Agrément affiché** : le numéro d'agrément préfectoral doit aussi être affiché dans les locaux.
7. **Domaine d'envoi des emails** : vérifier un domaine dans Resend (par exemple `contact@formaroute.fr`) et renseigner `CONTACT_FROM` sur Vercel. **Sans ça, le formulaire risque de ne délivrer aucun message.** Voir `.env.example`.
8. **Avantages annoncés à confirmer** :
   - paiement « en 3, 4 ou 6 fois sans frais » (`paymentPlan` dans `site.ts`) ;
   - Wi-Fi et espace café dans les locaux ;
   - comptes Facebook et Instagram `formaroute`.

---

## 4. Infos à fournir par le gérant

Tout se remplit dans **`src/data/site.ts`**.

| Information | Champ dans `site.ts` | Obligatoire pour |
|---|---|---|
| Raison sociale, forme juridique, capital | `legal.companyName`, `legal.legalForm`, `legal.shareCapital` | Mentions légales (LCEN) |
| SIRET, RCS (ville), n° TVA | `legal.siret`, `legal.registry`, `legal.vatNumber` | Mentions légales, CGV |
| N° d'agrément de l'école de conduite | `legal.agrementEcole` | Code de la route, mentions légales |
| N° d'agrément du centre de stages de points | `legal.agrementStagePoints` | Avant l'ouverture des stages |
| N° de déclaration d'activité (NDA, DREETS) | `legal.nda` | Qualiopi, CPF |
| Directeur de la publication | `legal.publicationDirector` | LCEN |
| Nom du référent handicap | `handicapReferent.name` | Qualiopi, indicateur 26 |
| Médiateur de la consommation (nom, site, adresse) | `mediator.*` | Code de la consommation L.612-1 |
| Taux de réussite officiels (période, candidats, source) | `results.indicators` | Qualiopi, indicateur 2, et obligation d'affichage |
| Satisfaction et taux d'abandon | `results.satisfaction`, `results.dropout` | Qualiopi, indicateurs 2 et 30 |
| Équipe : noms, rôles, diplômes | `team` | Qualiopi, indicateur 21. La section s'affiche dès qu'elle est remplie |
| Durée réelle d'une leçon | `lessonMinutes` | Voir point 3.1 |
| Délais d'accès réels | `DELAI_ACCES` dans `src/data/formations.ts` | Qualiopi, indicateur 1 |
| Coordonnées GPS exactes | `address.geo` | Fiche Google / données structurées |

Une fois `site.ts` modifié, le déploiement sur `main` met tout le site à jour.

---

## 5. Les 32 indicateurs Qualiopi

La version 9 du Référentiel national qualité compte 32 indicateurs. Certains ne concernent que les CFA ou les formations certifiantes.

**Légende :**
- ✅ couvert par le site ;
- 🟡 site prêt, il manque des données du gérant ;
- 📁 se prouve par des documents internes ;
- ➖ non applicable.

| # | Indicateur | Statut | Ce que l'auditeur demandera |
|---|---|---|---|
| 1 | Information publique sur les prestations (prérequis, objectifs, durée, délais d'accès, tarifs, contacts, méthodes, évaluation, accessibilité) | ✅ | Fiches formation, `/tarifs`, `/accessibilite-handicap` |
| 2 | Indicateurs de résultats | 🟡 | `/resultats` rempli avec des chiffres datés |
| 3 | Taux d'obtention des certifications, équivalences, passerelles, débouchés | 🟡 | Bloc « Certification visée » sur chaque fiche + taux réels |
| 4 | Analyse du besoin du bénéficiaire | 📁 | Fiche d'évaluation de départ et entretien |
| 5 | Objectifs opérationnels et évaluables | ✅ 📁 | Fiches formation + contrat |
| 6 | Contenus et modalités adaptés | 📁 | Programme REMC, livret d'apprentissage, planning |
| 7 | Adéquation des contenus aux exigences de la certification | 📁 | Correspondance programme ↔ épreuves ETG / ETM |
| 8 | Positionnement à l'entrée | ✅ 📁 | Évaluation de départ obligatoire et estimation écrite |
| 9 | Information sur les conditions de déroulement | ✅ 📁 | Règlement intérieur, CGV, livret d'accueil à remettre |
| 10 | Adaptation, accompagnement et suivi | 📁 | Livret d'apprentissage, bilans, examen blanc |
| 11 | Évaluation de l'atteinte des objectifs | 📁 | Grilles de bilan, résultats des examens |
| 12 | Engagement des bénéficiaires et prévention des abandons | 📁 | Suivi des absences, relances, taux d'abandon |
| 13-15 | Alternance, citoyenneté, droits de l'apprenti | ➖ | CFA uniquement |
| 16 | Conditions de présentation à la certification | 📁 | Procédure d'inscription aux examens, examen blanc |
| 17 | Moyens humains et techniques | ✅ 📁 | Locaux, véhicules (cartes grises, contrôles techniques), salle de code |
| 18 | Coordination des acteurs | 📁 | Planning, réunions d'équipe |
| 19 | Ressources pédagogiques | 📁 | Supports de code, livret, plateforme en ligne |
| 20 | Personnel dédié (handicap, mobilité…) | ➖ | CFA uniquement |
| 21 | Compétences des intervenants | 🟡 📁 | Autorisations d'enseigner, titres ECSR / BEPECASER, CV |
| 22 | Développement des compétences des salariés | 📁 | Plan de formation, attestations de formation continue |
| 23 | Veille légale et réglementaire | 📁 | Abonnements, notes de veille datées (Code de la route, CPF, Qualiopi) |
| 24 | Veille emplois et métiers | 📁 | Notes de veille (souvent allégé pour une école de conduite) |
| 25 | Veille innovations pédagogiques et technologiques | 📁 | Veille simulateurs, outils en ligne, éco-conduite |
| 26 | Réseau handicap mobilisé | 🟡 📁 | Référent nommé, contacts MDPH / Agefiph / Cap emploi, registre des demandes |
| 27 | Sous-traitance | ➖ 📁 | Seulement si un formateur indépendant intervient : contrat et contrôle de sa qualité |
| 28 | Formations en situation de travail | ➖ | |
| 29 | Insertion professionnelle | ➖ | CFA uniquement |
| 30 | Recueil des appréciations | 📁 | Questionnaire de satisfaction de fin de formation, avis Google |
| 31 | Traitement des réclamations | ✅ 📁 | `/reclamations` + registre des réclamations et des réponses |
| 32 | Mesures d'amélioration | 📁 | Plan d'actions issu des réclamations, de la satisfaction et des abandons |

---

## 6. À mettre en place hors du site (avant l'audit)

1. **Livret d'accueil de l'élève** : présentation, règlement intérieur, CGV, référent handicap, réclamations, planning type.
2. **Fiche d'évaluation de départ** standardisée, avec l'estimation écrite d'heures, signée.
3. **Questionnaire de satisfaction** de fin de formation (papier ou formulaire en ligne) et un tableau de suivi. Ce tableau alimente `results.satisfaction`.
4. **Registre des réclamations**, avec la date, l'objet, la réponse et l'action d'amélioration.
5. **Suivi des abandons** et des relances, qui alimente `results.dropout`.
6. **Dossier « compétences »** : autorisations d'enseigner, diplômes, attestations de formation continue.
7. **Classeur de veille** : réglementaire, pédagogique et métiers. Une note datée par trimestre suffit.
8. **Plan d'amélioration continue**, revu tous les 6 mois.
9. **Déclaration d'activité** auprès de la DREETS pour obtenir le NDA, si ce n'est pas déjà fait. C'est un prérequis à Qualiopi.

---

## 7. Comment mettre le site à jour

- Infos de l'entreprise, résultats et équipe : `src/data/site.ts`.
- Formations (contenu, prix, durées) : `src/data/formations.ts`. Ne pas oublier `contentUpdatedAt` dans `site.ts`, qui sert de date de « mise à jour » affichée.
- Articles du blog : `src/data/blog.ts`.
- Variables Vercel : voir `.env.example`.
