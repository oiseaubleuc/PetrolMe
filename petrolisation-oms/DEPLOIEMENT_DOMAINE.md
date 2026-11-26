# Déployer Oilconnect sur Netlify + domaine custom

## 1. Netlify (recommandé)

1. Connecter le repo GitHub sur [Netlify](https://app.netlify.com).
2. **Build settings** (voir aussi `/NETLIFY.md` à la racine du repo) :
   - **Base directory** : `petrolisation-oms`
   - **Build command** : `npm run build`
   - **Publish directory** : `out`
3. Lier votre **domaine** : Domain settings → Add custom domain.
4. **Clear cache and deploy** après chaque grosse mise à jour UI.

Aucune config Vercel n’est nécessaire pour ce projet.

## 2. Structure du site déployé

| URL | Module Oilconnect |
|-----|-------------------|
| `/` | Accueil / board |
| `/dashboard/` | Overview |
| `/trade/` | Buy & Sell |
| `/markets/` | Oil markets |
| `/portfolio/` | Portfolio |
| `/shipments/` | Shipments |
| `/inventory/` | Inventory |
| `/counterparties/` | Counterparties |

## 3. SEO & domaine

Dans `src/app/layout.tsx` :

```ts
export const metadata: Metadata = {
  metadataBase: new URL("https://votre-domaine.com"),
  // ...
};
```

Puis rebuild + redeploy sur Netlify.

## 4. Données

Les chiffres et contreparties restent **démo** tant que les API marché / trading ne sont pas branchées.