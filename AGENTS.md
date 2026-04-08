# AGENTS.md

## Rôle de Codex sur ce dépôt

Ce dépôt sert à construire une application web de suivi TRS simplifié pour la société Gillet.

Codex doit travailler de manière disciplinée, incrémentale et lisible.

## Objectif produit

La V1 concerne **une seule machine**.

Le but n'est pas de produire immédiatement un TRS académique complet par quantité de pièces.
Le but est de construire un **TRS V1 basé sur le temps**, simple à utiliser dans l'atelier.

## Règles métier à respecter

Pour chaque affaire planifiée :
- Temps d'ouverture : calculé à partir des horaires d'ouverture de la machine
- Temps requis : durée du créneau planifié
- Temps de fonctionnement : temps réel en marche dans le créneau
- Temps net : `min(temps_de_fonctionnement, temps_usinage_theorique_affaire)`
- Temps utile : `temps_net - pertes_non_qualite`

Indicateurs :
- Disponibilité = temps_de_fonctionnement / temps_requis
- Performance = temps_net / temps_de_fonctionnement
- Qualité = temps_utile / temps_net
- TRS = temps_utile / temps_requis

## Limites fonctionnelles de la V1

Ne pas introduire dans la V1 :
- calcul par nombre de pièces produites
- calcul par nombre de pièces bonnes ou rebuts
- logique multi-machines
- sur-ingénierie inutile
- framework lourd si une solution PHP simple suffit

## Stack cible au démarrage

Compatibilité attendue :
- XAMPP local
- PHP
- MySQL
- HTML / CSS / JavaScript simples

Privilégier une architecture claire et maintenable avant d'ajouter de la complexité.

## Organisation attendue du dépôt

Le dépôt doit rester structuré, avec des dossiers séparés pour :
- documentation
- configuration
- code applicatif
- vues / pages web
- ressources statiques
- scripts SQL
- tests

## Style de développement

- Utiliser des noms explicites
- Ajouter des commentaires utiles, sans bruit
- Éviter les dépendances inutiles
- Favoriser des fonctions petites et lisibles
- Centraliser les règles métier de calcul TRS
- Stocker tous les temps en secondes dans la base et dans la logique métier
- Convertir en heures/minutes uniquement pour l'affichage

## Façon de travailler

Toujours avancer par étapes.

Avant toute grosse implémentation, vérifier que :
1. le besoin métier est clair
2. le périmètre V1 est respecté
3. la structure des fichiers reste simple
4. les calculs sont traçables et testables

## Priorités actuelles

1. créer une base de projet propre
2. créer l'arborescence initiale
3. documenter la V1
4. préparer la future interface web
5. ensuite seulement implémenter les premières pages et le modèle de données
