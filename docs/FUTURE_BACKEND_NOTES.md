# FUTURE_BACKEND_NOTES

Cette note prépare la suite, sans implémentation immédiate.

## Backend futur (pistes)

- Exposer des API pour : machines, plannings, événements, indicateurs TRS.
- Centraliser les règles métier de calcul TRS basé sur le temps.
- Gérer la traçabilité des changements et des arrêts machine.

## Base MySQL future

- Tables envisagées : `machines`, `machine_groups`, `schedules`, `planned_jobs`, `events`, `maintenance`, `non_conformities`, `kpis`.
- Historisation temporelle pour analyses journalières/hebdomadaires.

## Calculs TRS futurs

- Calcul automatisé des temps requis/fonctionnement/théorique/utile.
- Agrégation par jour, équipe, machine, groupe.
- Ajout progressif de règles métier validées avec les équipes atelier.

## Extension multi-machines

- Passer de 1 machine à N machines avec filtres par groupe.
- Dashboard consolidé et vues comparatives.
- Paramétrage individualisé des horaires et capacités par machine.
