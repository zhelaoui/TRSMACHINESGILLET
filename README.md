# TRSMACHINESGILLET

Maquette front-end V1 de l'application de suivi TRS simplifié (basé sur le temps) pour la société Gillet.

## Objectif de cette étape

Cette version est **strictement front-end statique** pour visualiser :
- les pages principales,
- la navigation,
- une première structure projet maintenable,
- des données métier mockées pour une seule machine.

Aucun backend, aucun PHP et aucune base MySQL ne sont implémentés dans cette étape.

## Stack technique

- Vite + React + JavaScript
- React Router
- CSS simple (architecture modulaire par fichier)

## Démarrage local

```bash
npm install
npm run dev
```

Puis ouvrir l'URL locale affichée par Vite (par défaut http://localhost:5173).

## Build de production

```bash
npm run build
npm run preview
```

Le build est généré dans `dist/`.

## Publication GitHub Pages

Le dépôt est configuré pour GitHub Pages avec :
- `base: '/TRSMACHINESGILLET/'` dans `vite.config.js`
- un workflow GitHub Actions `.github/workflows/deploy-pages.yml`

### Étapes

1. Pousser la branche principale sur GitHub.
2. Dans **Settings > Pages**, choisir **GitHub Actions** comme source.
3. Le workflow publie automatiquement le contenu buildé.

URL attendue :
`https://<votre-compte>.github.io/TRSMACHINESGILLET/`
