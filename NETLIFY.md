# Déploiement Netlify — Petrolisation OMS

## Site unique (actuel) : petrolisation.netlify.app = OMS

Le fichier `netlify.toml` à la **racine** force Netlify à builder le dossier
`petrolisation-oms/` (Next.js), pas le HTML vitrine.

| Setting | Valeur |
|---------|--------|
| Base directory | `petrolisation-oms` |
| Build command | `npm run build` |
| Publish directory | `.next` |
| Node | `20` |

Après chaque push sur `main`, Netlify redéploie **l’OMS**.

## Vitrine

Le HTML (`nexoil-final-2.html`) reste dans le repo pour archive / dev local,
mais **n’est plus publié** sur Netlify.

Pour republier la vitrine plus tard : crée un 2ᵉ site Netlify sans base directory
(ou base = `.`).

## Vérifier dans le dashboard

Site **petrolisation** → Project configuration → Build & deploy → Build settings :

- Base directory = `petrolisation-oms`
- Build command = `npm run build`
- Publish directory = `.next`

Si les champs UI contredisent le `netlify.toml`, aligne-les puis **Clear cache and deploy site**.
