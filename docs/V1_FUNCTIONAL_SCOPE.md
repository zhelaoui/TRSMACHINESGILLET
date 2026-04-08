# V1 Functional Scope

## Règle principale

La V1 est basée sur **une seule machine**.

## Fonctions attendues

### 1. Paramétrage machine
- créer une machine
- renseigner son nom
- renseigner son groupe
- définir ses horaires d'ouverture

### 2. Planning machine
- afficher un planning de type agenda
- planifier des affaires sur des créneaux horaires
- associer à chaque affaire un temps d'usinage théorique
- empêcher les chevauchements d'affaires sur la même machine

### 3. Historique d'état machine
- enregistrer les changements d'état `marche / arrêt`
- historiser les événements avec date et heure
- exploiter cet historique pour calculer le temps de fonctionnement

### 4. Maintenance
- permettre à l'opérateur de déclarer une maintenance
- associer cette maintenance à un créneau et à une affaire si nécessaire
- prévoir un type de maintenance (planifiée ou non planifiée)

### 5. Non-conformité
- permettre à l'opérateur de déclarer une non-conformité
- saisir un nom de non-conformité
- saisir une durée perdue
- rattacher la non-conformité à une affaire

### 6. Calculs
- calcul du temps d'ouverture
- calcul du temps requis
- calcul du temps de fonctionnement
- calcul du temps net
- calcul du temps utile
- calcul des indicateurs TRS V1

### 7. Interface web
- page d'accueil / tableau de bord simple
- page planning machine
- page paramétrage machine
- page historique / événements
- affichage des indicateurs TRS

## Hors périmètre V1
- multi-machines
- multi-ateliers
- calcul à la pièce
- rebuts en quantité
- ordonnancement avancé
- authentification complexe
