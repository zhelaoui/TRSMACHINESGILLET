# AGENTS.md - Guide de contribution TRSMACHINESGILLET

## Règles de périmètre

- Respecter strictement le périmètre demandé par l'utilisateur.
- Ne pas introduire de backend, PHP, API serveur, ni connexion base de données sans consigne explicite.
- Maintenir la V1 en **front-only avec données mockées**.

## Architecture et qualité

- Conserver une structure claire (pages, composants, data, styles, utils, docs).
- Favoriser des composants réutilisables et des noms explicites.
- Éviter la sur-ingénierie : code simple, lisible, maintenable.
- Ajouter des commentaires uniquement si cela clarifie une intention non évidente.

## Évolutivité

- Préparer les fichiers pour l'évolution future (backend, calculs TRS avancés, multi-machines) sans implémenter ces couches.
- Documenter clairement ce qui est mocké et ce qui sera implémenté plus tard.
