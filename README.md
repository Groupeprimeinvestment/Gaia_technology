# Site institutionnel — Gaia Technology LTD

Site vitrine one-page, moderne et responsive, pour **Gaia Technology LTD** (Île Maurice).
Aucune dépendance, aucun build : HTML / CSS / JavaScript natifs.

## 🗂 Structure

```
Gaia_technology/
├── index.html                 # Structure et contenu du site (FR)
├── styles.css                 # Design system (dark, aurora vert-teal-bleu)
├── script.js                  # Nav sticky, menu mobile, reveals, formulaire
├── assets/
│   ├── logo.svg               # Logo/wordmark provisoire
│   └── favicon.svg            # Favicon
├── gaia_technology_contenu_site.md   # Contenu éditorial source
└── README.md
```

## ▶️ Aperçu

Ouvrez simplement `index.html` dans un navigateur.
Pour un rendu identique à la production (chemins relatifs, fetch, etc.), lancez un petit serveur local :

```bash
# Python
python -m http.server 5173
# puis ouvrez http://localhost:5173
```

## 🎨 Design

- Esthétique 2026 : fond sombre, dégradés « aurora », glassmorphism, grille bento, reveals au scroll.
- Palette provisoire inspirée du secteur tech + clin d'œil « Gaia » (Terre) : **teal `#5EEAD4` → vert `#34D399` → bleu `#3B82F6`**.
- Typographies : **Space Grotesk** (titres) + **Inter** (texte), via Google Fonts.
- Accessibilité : lien d'évitement, focus visibles, `prefers-reduced-motion`, structure sémantique, contrastes élevés.

## ⚠️ À finaliser avant mise en ligne

La charte graphique officielle n'étant pas encore livrée, ce design est **provisoire** :

1. **Logo & couleurs** — remplacer `assets/logo.svg`, `assets/favicon.svg` et les variables CSS
   (`--teal`, `--green`, `--blue`, `--grad`) en haut de `styles.css` par la charte définitive.
2. **Coordonnées** — email, téléphone et adresse à Maurice (section Contact + footer) sont des
   placeholders marqués « à valider / à compléter ».
3. **Formulaire de contact** — actuellement en démo (aucun envoi réel). À brancher sur un service
   (Formspree, backend, API mail…). Voir la fin de `script.js`.
4. **Secteurs cibles** — à affiner selon les priorités réelles.
5. **Références / réalisations** — ajouter une section « projets » si des cas clients sont disponibles.

## 🚀 Déploiement

Le site étant 100 % statique, il se déploie tel quel sur : **Vercel**, Netlify, GitHub Pages,
Cloudflare Pages ou tout hébergement web classique (upload du dossier).
