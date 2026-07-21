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
