# Netlify — Petrolisation OMS

## Site : https://petroloms.netlify.app

L’app est exportée en **statique** (`out/`).

### Réglages dashboard (obligatoires)

Site **petroloms** → Project configuration → Build settings :

| Champ | Valeur |
|--------|--------|
| **Base directory** | `petrolisation-oms` |
| **Build command** | `npm run build` |
| **Publish directory** | `out` |

⚠️ Si Base directory est déjà `petrolisation-oms` dans l’UI,  
le `base` du `netlify.toml` racine peut doubler le chemin.  
Dans ce cas : laisse **Base directory = `petrolisation-oms`** dans l’UI  
et mets le `netlify.toml` racine **sans** `base` (ou laisse l’UI primer).

Puis : **Deploys → Trigger deploy → Clear cache and deploy site**.

### Ne pas utiliser

- Publish = `.next` → cause souvent la page **Page not found** de Netlify
- Base directory vide → déploie la vitrine HTML

### Erreur « originalFactory.call » (Safari / `npm run dev`)

Cette erreur vient du **mode développement** (React Refresh), pas du build statique.

1. Arrêtez tous les serveurs `next dev` (un seul processus sur le port 3000).
2. Dans `petrolisation-oms` : `npm run dev:clean` (supprime `.next` puis relance).
3. Essayez **Chrome ou Firefox** si Safari affiche encore l’erreur.
4. Pour une prévisualisation fiable : `npm run build` puis `npx serve out -l 3000` (même rendu que Netlify).
