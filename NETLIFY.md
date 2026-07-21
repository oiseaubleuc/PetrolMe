# Déploiement Netlify — Petrolisation

Deux sites Netlify distincts (recommandé, gratuit) :

## 1. Vitrine (déjà en place)

- Site actuel : https://petrolisation.netlify.app
- Racine du repo (HTML statique)
- Ne rien changer ici

## 2. OMS (nouveau site à créer)

1. Netlify → **Add new project** → **Import an existing project**
2. Choisir le repo GitHub `oiseaubleuc/PetrolMe`
3. Réglages obligatoires :

| Setting | Valeur |
|---------|--------|
| **Base directory** | `petrolisation-oms` |
| **Build command** | `npm run build` |
| **Publish directory** | `.next` |
| **Node version** | `20` (déjà dans `netlify.toml`) |

4. Site name suggéré : `petrolisation-oms`  
   → URL : https://petrolisation-oms.netlify.app

5. **Deploy site**

Le fichier `petrolisation-oms/netlify.toml` configure le build automatiquement.

## Lier vitrine ↔ OMS

Sur la vitrine, le bouton **Access Platform** pointe vers l’OMS.
Si tu changes le nom du site Netlify, mets à jour l’URL dans `nexoil-final-2.html`
(chercher `petrolisation-oms.netlify.app`).

## Push GitHub avant le premier deploy

L’OMS doit être commitée et pushée sur `main`, sinon Netlify ne voit pas les fichiers.
