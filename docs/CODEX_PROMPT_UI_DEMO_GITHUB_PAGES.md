# Prompt Codex — Démo UI statique via GitHub Pages

Lis d'abord obligatoirement les fichiers suivants :
- `README.md`
- `AGENTS.md`
- `docs/PROJECT_BRIEF.md`
- `docs/V1_FUNCTIONAL_SCOPE.md`
- `docs/TECHNICAL_ARCHITECTURE.md`

## Contexte

Le projet `TRSMACHINESGILLET` doit d'abord avancer par la partie visible de l'application.

Avant de développer la vraie logique PHP/MySQL, on veut créer une **démo statique d'interface web** pour valider l'affichage, la navigation, l'ergonomie et la structure fonctionnelle.

Cette démo doit être **hébergeable via GitHub Pages**.

## Objectif de cette tâche

Créer une **version front statique** du projet, distincte de la future application PHP, afin de pouvoir visualiser directement l'interface dans le navigateur sans passer par XAMPP.

## Contraintes importantes

- Ne pas utiliser PHP dans cette démo statique
- Ne pas utiliser MySQL
- Utiliser uniquement : HTML, CSS, JavaScript
- Prévoir des **données fictives** réalistes pour simuler le comportement de la future application
- Garder un design sobre, industriel, professionnel et lisible
- Prévoir une structure simple, maintenable et facile à faire évoluer

## Ce que la démo doit montrer

### 1. Un tableau de bord
Avec par exemple :
- le nom de la machine
- le groupe
- l'état actuel de la machine
- le temps d'ouverture du jour
- le temps requis du jour
- le temps de fonctionnement du jour
- le temps net
- le temps utile
- disponibilité
- performance
- qualité
- TRS

### 2. Une page planning machine
Sous forme visuelle proche d'un agenda simple.

Le planning doit afficher plusieurs affaires sur la journée, par exemple :
- numéro d'affaire
- heure de début
- heure de fin
- temps d'usinage théorique
- état de l'affaire

### 3. Une page événements
Afficher une liste chronologique d'événements simulés :
- marche
- arrêt
- maintenance
- non-conformité

### 4. Une page non-conformités / maintenance
Permettre au moins une visualisation simple des déclarations simulées.

### 5. Une navigation claire
Prévoir une navigation simple entre les écrans :
- tableau de bord
- machine
- planning
- événements

## Architecture attendue pour cette démo

Créer un dossier dédié, par exemple :
- `demo-ui/`

Avec une structure du type :
- `demo-ui/index.html`
- `demo-ui/planning.html`
- `demo-ui/events.html`
- `demo-ui/assets/css/`
- `demo-ui/assets/js/`
- `demo-ui/assets/data/`

## Comportement attendu

- Les pages doivent être liées entre elles
- Les données doivent être chargées depuis des fichiers JSON statiques si cela simplifie l'organisation
- Les cartes et tableaux doivent être propres visuellement
- Le planning doit être compréhensible au premier coup d'œil
- Le design doit être responsive au minimum pour ordinateur portable

## Style visuel souhaité

- sobre
- professionnel
- industriel
- moderne sans excès
- lisible rapidement en atelier ou au bureau

## Important

La démo UI ne doit pas mélanger la future logique PHP avec ce prototype statique.

Le but est de :
1. visualiser facilement le projet
2. valider l'ergonomie
3. préparer la future intégration métier

## Livrables attendus

Dans ce commit, créer :
- le dossier de démo statique
- plusieurs pages HTML reliées entre elles
- un style CSS propre
- des données fictives réalistes
- un JavaScript léger si nécessaire pour injecter les données
- un `demo-ui/README.md` expliquant comment publier la démo avec GitHub Pages

## Bonus utile

Si possible, ajouter un petit encart dans le README de la démo indiquant :
- que cette démo est purement statique
- qu'elle sert uniquement à valider l'interface avant intégration PHP/MySQL

## Résultat attendu de Codex

À la fin, faire un résumé clair :
- fichiers créés
- structure choisie
- comment ouvrir localement la démo
- comment l'utiliser avec GitHub Pages
