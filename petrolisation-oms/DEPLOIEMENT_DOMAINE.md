# Déployer PetrolMe sur votre nom de domaine

## Structure du site

| URL | Contenu |
|-----|---------|
| `/` | Vitrine professionnelle (accueil public) |
| `/dashboard/` | Tableau de bord exécutif |
| `/news/` | Actualités marché |
| `/investment/` | Plateforme d'investissement |

## Netlify (recommandé)

1. Repo GitHub connecté à Netlify.
2. **Build settings**
   - Base directory : `petrolisation-oms`
   - Build command : `npm run build`
   - Publish directory : `out`
   - Node : `20`
3. **Domaine personnalisé** : Netlify → Domain settings → Add custom domain → suivre les DNS (CNAME ou ALIAS).
4. Deploy : **Clear cache and deploy site**.

## Après le lancement

- Remplacez les données de démo par des API (prix marché, news, courtier).
- Mettez à jour `metadata` dans `src/app/layout.tsx` avec l’URL canonique de votre domaine (`metadataBase`).

```ts
export const metadata: Metadata = {
  metadataBase: new URL("https://votredomaine.com"),
  // ...
};
```

## Build local

```bash
cd petrolisation-oms
npm run build
npx serve out -l 3000
```