# Technical Architecture

## Orientation technique

Le projet doit démarrer avec une architecture simple, compatible XAMPP.

Approche recommandée pour la V1 :
- PHP côté serveur
- MySQL pour le stockage
- HTML / CSS / JavaScript côté interface
- aucune dépendance lourde tant qu'elle n'est pas nécessaire

## Structure recommandée

- `public/` : point d'entrée web
- `app/Controllers/` : contrôleurs HTTP
- `app/Services/` : logique métier
- `app/Repositories/` : accès aux données
- `app/Models/` : structures métier simples
- `app/Views/` : templates / vues PHP
- `config/` : configuration application et base de données
- `sql/` : scripts SQL et migrations initiales
- `docs/` : cadrage fonctionnel et technique
- `tests/` : tests unitaires / fonctionnels à venir

## Principes

### 1. Séparer la logique métier du rendu HTML
La logique de calcul TRS ne doit pas être codée directement dans les pages.

### 2. Centraliser les calculs
Les formules de temps et de TRS doivent être centralisées dans des services dédiés.

### 3. Garder la base extensible
Même si la V1 concerne une seule machine, le schéma ne doit pas empêcher l'évolution future vers plusieurs machines.

### 4. Stocker les temps en secondes
Toutes les durées doivent être stockées en secondes.

## Écrans à préparer

- tableau de bord
- fiche machine
- planning machine
- historique des états
- maintenance
- non-conformités

## Base de données

La base MySQL devra être pensée pour séparer :
- le paramétrage machine
- les créneaux planifiés
- les états machine réels
- les événements maintenance
- les événements non-conformité
- les agrégats calculés si nécessaire plus tard
