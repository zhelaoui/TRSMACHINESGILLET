# TRSMACHINESGILLET

Application web de calcul TRS simplifié pour la société Gillet.

## Objectif du projet

Ce projet repart de zéro sur une base propre pour construire un nouvel outil de suivi TRS.

La première version est volontairement simple pour favoriser l'adoption sur le terrain. Elle est basée sur **une seule machine** et sur un **calcul orienté temps**.

## Contexte métier

Le calcul ne repose pas, dans un premier temps, sur le nombre de pièces produites.

La V1 utilise principalement :
- le planning de la machine
- l'horaire d'ouverture de la machine
- l'état réel de la machine (`1 = marche`, `0 = arrêt`)
- les événements saisis par l'opérateur (maintenance, non-conformité)
- un temps d'usinage théorique par affaire

## Règles V1 retenues

Pour chaque affaire planifiée sur la machine :

- **Temps d'ouverture** : calculé selon l'horaire d'ouverture de la machine
- **Temps requis** : durée planifiée de l'affaire dans le planning
- **Temps de fonctionnement** : temps réel en marche pendant le créneau planifié
- **Temps net** : minimum entre le temps de fonctionnement réel et le temps d'usinage théorique de l'affaire
- **Temps utile** : temps net moins les pertes liées aux non-conformités

## Indicateurs V1

- **Disponibilité** = temps de fonctionnement / temps requis
- **Performance** = temps net / temps de fonctionnement
- **Qualité** = temps utile / temps net
- **TRS** = temps utile / temps requis

## Périmètre fonctionnel V1

La première version doit permettre :
- de créer et paramétrer une machine
- de définir les horaires d'ouverture de la machine
- de planifier les affaires dans un agenda de type calendrier
- d'enregistrer les états marche / arrêt de la machine
- de déclarer des maintenances
- de déclarer des non-conformités avec un nom et une durée perdue
- de calculer les temps et indicateurs TRS sur une seule machine
- d'afficher ces informations sur une interface web simple

## Contraintes techniques initiales

- environnement de test : **XAMPP en local**
- base de données : **MySQL / phpMyAdmin**
- interface : **application web simple, lisible et maintenable**
- architecture souhaitée : claire, modulaire, évolutive

## Principe d'avancement

Le projet doit avancer étape par étape.

Avant d'ajouter des fonctions multi-machines ou des calculs plus avancés, la priorité est de valider parfaitement :
1. le modèle de données
2. le planning d'une machine
3. le calcul des temps
4. le calcul TRS V1
5. l'affichage web

## Documentation interne

Le dépôt doit contenir une documentation claire pour guider Codex et éviter toute ambiguïté.

Les documents de référence sont placés dans `docs/`.
