# Afficher les avis Google sur formaroute.fr

Le site affiche les avis Google **authentiques** de la fiche FORMAROUTE grâce à l'API officielle **Google Places (New)**. Les avis sont affichés sans modification, avec l'auteur, la date et un lien vers Google, puis mis à jour automatiquement chaque jour.

Tant que la configuration n'est pas faite, le site affiche seulement un bouton « Voir tous les avis sur Google ». Rien n'est inventé.

> **Limite de Google** : l'API renvoie au maximum **5 avis**, choisis par Google (les plus pertinents), ainsi que la note moyenne et le nombre total d'avis.

---

## Ce qu'il faut

- Un compte Google : idéalement celui qui gère la fiche FORMAROUTE, mais n'importe quel compte convient.
- Une carte bancaire pour activer la facturation Google Cloud. C'est obligatoire même pour un usage gratuit. Au volume du site (une requête par jour, grâce au cache), l'usage reste dans le quota gratuit mensuel de Google. On peut fixer un plafond de dépenses par sécurité (étape 4).
- 15 minutes.

---

## Étape 1 — Créer un projet Google Cloud

1. Aller sur https://console.cloud.google.com et se connecter.
2. En haut, cliquer sur le sélecteur de projet, puis **Nouveau projet**.
3. Nom du projet : `formaroute-site`, puis **Créer**.

## Étape 2 — Activer l'API Places (New)

1. Menu ☰ → **API et services** → **Bibliothèque**.
2. Rechercher **« Places API (New) »**. ⚠ Il faut bien la version « (New) ».
3. Cliquer sur **Activer**.
4. Si Google le demande, **associer un compte de facturation** (carte bancaire).

## Étape 3 — Créer et restreindre la clé API

1. Menu ☰ → **API et services** → **Identifiants**.
2. **Créer des identifiants** → **Clé API**. Copier la clé (elle commence par `AIza…`).
3. Cliquer sur la clé pour la modifier :
   - **Restrictions relatives aux API** : cocher **Restreindre la clé**, puis sélectionner uniquement **Places API (New)**.
   - **Restrictions relatives aux applications** : laisser **Aucune**. La clé est utilisée côté serveur par Vercel, elle n'est jamais visible par les visiteurs.
4. **Enregistrer**.

## Étape 4 (conseillé) — Plafonner les dépenses

Menu ☰ → **Facturation** → **Budgets et alertes** → créer un budget de **5 €** avec alerte par email. Ainsi, aucune mauvaise surprise n'est possible.

## Étape 5 — Trouver l'identifiant de la fiche (Place ID)

1. Ouvrir https://developers.google.com/maps/documentation/places/web-service/place-id
2. Dans la carte « Place ID Finder », taper **FORMAROUTE Domont** (ou l'adresse : 4 avenue Jean Jaurès, 95330 Domont).
3. Cliquer sur la fiche FORMAROUTE et copier le **Place ID** (une chaîne du type `ChIJ…`).

⚠ Il faut bien choisir la fiche de l'établissement, et non l'adresse seule.

## Étape 6 — Ajouter les deux valeurs dans Vercel

1. https://vercel.com → projet **formaroute** → **Settings** → **Environment Variables**.
2. Ajouter :
   | Nom | Valeur | Environnements |
   |---|---|---|
   | `GOOGLE_PLACES_API_KEY` | la clé `AIza…` | Production (et Preview si souhaité) |
   | `GOOGLE_PLACE_ID` | l'identifiant `ChIJ…` | Production (et Preview si souhaité) |
3. **Save**.

## Étape 7 — Redéployer

**Deployments** → dernier déploiement de `main` → menu **⋯** → **Redeploy**.

Les avis apparaissent sur la page d'accueil, dans la section « Avis Google ».

---

## Vérifier

- La section affiche la note, le nombre d'avis et jusqu'à 5 avis, avec leurs auteurs.
- Chaque avis porte un lien « Voir sur Google ».
- Si rien n'apparaît : vérifier dans Vercel → **Logs** la présence d'une ligne `[google-reviews]`. Les causes habituelles sont une clé mal copiée, une API non activée ou une facturation non associée.

## Photos de la fiche Google

Les photos publiées par FORMAROUTE sur sa fiche Google peuvent aussi être récupérées par cette API. Il est toutefois **plus simple et plus rapide pour le site** que le gérant envoie directement les fichiers originaux (photos des locaux et des véhicules) : elles sont alors optimisées et hébergées avec le site. **Ne jamais utiliser de photos publiées par des clients sans leur autorisation.**
