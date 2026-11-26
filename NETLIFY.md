# Netlify — Oilconnect (Next.js static export)

**Hébergement prévu : Netlify uniquement** (pas Vercel, pas l’aperçu Cursor).

L’app vit dans `petrolisation-oms/` et se publie depuis le dossier **`out/`** après `npm run build`.

## Réglages Netlify (obligatoires)

**Site settings → Build & deploy → Build settings**

| Champ | Valeur |
|--------|--------|
| **Base directory** | `petrolisation-oms` |
| **Build command** | `npm run build` |
| **Publish directory** | `out` |
| **Node** | `20` (voir `.nvmrc`) |

Branche à déployer : en général **`main`** après merge de la PR Oilconnect (`cursor/oilconnect-frontend-5da9` ou `main` à jour).

Après chaque changement important : **Deploys → Trigger deploy → Clear cache and deploy site**.

## URLs après déploiement

| Chemin | Page |
|--------|------|
| `/` | Accueil Oilconnect (board) |
| `/dashboard/` | Overview |
| `/trade/` | Buy & Sell |
| `/markets/` | Oil markets |
| `/portfolio/` | Portfolio |
| `/shipments/` | Shipments |
| `/inventory/` | Inventory |
| `/counterparties/` | Counterparties |

## Domaine personnalisé

1. **Domain management → Add domain**
2. Chez votre registrar : CNAME vers le sous-domaine Netlify (`xxx.netlify.app`) ou ALIAS / nameservers Netlify
3. HTTPS : certificat Let’s Encrypt automatique

Dans le code (optionnel mais recommandé), définir l’URL canonique dans `petrolisation-oms/src/app/layout.tsx` :

```ts
metadataBase: new URL("https://votre-domaine.com"),
```

## Erreurs fréquentes

| Problème | Cause | Solution |
|----------|--------|----------|
| **Page not found** partout | Publish = `.next` au lieu de `out` | Publish = `out` |
| Ancienne vitrine HTML | Base directory vide | Base = `petrolisation-oms` |
| Chemin doublé | `base` dans `netlify.toml` racine **et** Base directory Netlify | Garder **un seul** : UI `petrolisation-oms`, ou retirer `base` du toml racine |
| 404 sur une route | Ancien deploy sans rebuild | Clear cache and deploy |

## Fichiers de config

- Racine : `netlify.toml` (base `petrolisation-oms`)
- App : `petrolisation-oms/netlify.toml` (si site lié uniquement au sous-dossier)

## Test local (= rendu Netlify)

```bash
cd petrolisation-oms
npm run build
npx serve out -l 3000
```

Ouvrir http://localhost:3000/ puis naviguer vers `/dashboard/`.