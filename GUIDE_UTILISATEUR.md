# Guide d'Utilisation - Plateforme d'Actualités et d'Investissement Pétrolier

## 🚀 Accès Rapide

### Démarrage du Serveur de Développement
```bash
cd petrolisation-oms
npm install
npm run dev
```

L'application sera accessible sur : **http://localhost:3000**

### Accès aux Nouvelles Pages
- **Actualités Pétrolières** : http://localhost:3000/news
- **Plateforme d'Investissement** : http://localhost:3000/investment

---

## 📰 Guide de la Page Actualités (`/news`)

### Navigation
1. Cliquez sur **"Market News"** dans le menu de gauche sous la section "Market & Investment"
2. Ou accédez directement via l'URL `/news`

### Fonctionnalités Principales

#### 1. Indicateurs de Marché (En-tête)
**6 cartes affichant les prix en temps réel :**
- Brent Crude (référence européenne)
- WTI Crude (référence américaine)
- Natural Gas
- RBOB Gasoline
- Heating Oil
- Dubai Crude

**Information affichée :**
- Prix actuel avec unité
- Variation en $ et en %
- Flèche verte (hausse) ou rouge (baisse)
- Dernière mise à jour

**Utilisation :**
- Survolez les cartes pour voir l'effet de zoom
- Consultez rapidement l'état du marché en un coup d'œil
- Les couleurs indiquent instantanément la tendance

#### 2. Analyse du Sentiment du Marché
**Panneau gauche avec score 0-100 :**
- Score global avec badge (bullish/bearish/neutral)
- 5 facteurs d'impact notés sur 10
- Barres de progression visuelles

**Comment interpréter :**
- Score > 70 : Marché très optimiste (bullish)
- Score 40-70 : Marché neutre
- Score < 40 : Marché pessimiste (bearish)

**Facteurs analysés :**
1. Supply Constraints (Contraintes d'approvisionnement)
2. Demand Recovery (Reprise de la demande)
3. Geopolitical Risk (Risque géopolitique)
4. Economic Growth (Croissance économique)
5. Dollar Weakness (Faiblesse du dollar)

#### 3. Volume de Trading (24h)
**Panneau droit montrant :**
- Volume de contrats pour Brent, WTI, Natural Gas
- Variation en pourcentage par rapport à la veille

**Interprétation :**
- Volume élevé + prix en hausse = Forte conviction haussière
- Volume élevé + prix en baisse = Forte pression vendeuse
- Volume faible = Attente/incertitude du marché

#### 4. Articles Tendance
**Section avec 4-6 articles à fort impact :**
- Titre accrocheur
- Résumé en 2-3 lignes
- Catégorie (OPEC, Prix, Réglementation, etc.)
- Source (Reuters, Bloomberg, Platts...)
- Horodatage relatif ("45m ago")
- Badge d'impact (High/Medium/Low)

**Actions disponibles :**
- Bouton "Read more" pour lire l'article complet
- Badge rouge clignotant "Trending" pour les plus populaires

#### 5. Fil d'Actualités Complet
**Liste détaillée de tous les articles :**
- Icône de catégorie colorée
- Badges de catégorie et de trending
- Titre et résumé développé
- Source et timestamp
- Bouton "Read" pour accès rapide

**Catégories disponibles :**
- 💰 Market (Marché) - Bleu
- 🔥 OPEC - Orange
- ⚖️ Regulation - Violet
- 💻 Technology - Cyan
- 🌍 Geopolitics - Rouge
- 📈 Prices - Vert

#### 6. Filtres et Actions
**En haut à droite :**
- **Filters** : Filtrer par catégorie, source, ou date
- **Alerts** : Configurer des alertes de prix ou d'événements
- **Refresh** : Actualiser les données manuellement

---

## 💰 Guide de la Plateforme d'Investissement (`/investment`)

### Navigation
1. Cliquez sur **"Investment Platform"** dans le menu sous "Market & Investment"
2. Ou accédez directement via l'URL `/investment`

### Fonctionnalités Principales

#### 1. Vue d'Ensemble du Portefeuille (KPIs)
**4 indicateurs clés en haut :**

**Total Portfolio Value**
- Valeur actuelle de tous vos investissements
- Variation du jour en $ et %
- Caption : Gain/perte de la journée

**Total Profit/Loss**
- P/L cumulé depuis l'achat
- Pourcentage de rendement
- Caption : "All-time returns"

**Total Invested**
- Montant total investi
- Nombre de positions actives
- Caption : "X holdings"

**Portfolio Return**
- Rendement annualisé en %
- Variation du jour
- Caption : "Annualized performance"

**Couleurs :**
- Vert = Gain/Positif
- Rouge = Perte/Négatif

#### 2. Allocation d'Actifs
**Panneau gauche montrant la répartition :**
- Pourcentage par type (ETFs, Stocks, Futures, Funds)
- Valeur en dollars pour chaque catégorie
- Barre de progression visuelle

**Recommandations :**
- Encadré bleu avec suggestion d'allocation optimale
- Exemple : "60% ETFs, 40% Stocks for balanced risk"

**Comment utiliser :**
- Vérifiez si votre allocation est équilibrée
- Suivez les recommandations pour optimiser
- Rééquilibrez si une catégorie dépasse 80%

#### 3. Distribution des Risques
**Panneau droit analysant le risque :**
- High Risk (Rouge) : Produits volatils, potentiel élevé
- Medium Risk (Jaune) : Équilibre risque/rendement
- Low Risk (Vert) : Sécurité, rendement stable

**Alerte intelligente :**
- Encadré orange si risque élevé > 25%
- Suggestion de réduction pour stabilité
- Badge global de profil de risque

#### 4. Vos Positions (Tableau Détaillé)
**Colonnes du tableau :**
1. **Product** : Nom et ticker du produit
2. **Type** : ETF/Stock/Futures/Fund
3. **Quantity** : Nombre d'unités
4. **Avg. Buy** : Prix moyen d'achat
5. **Current** : Prix actuel du marché
6. **Total Value** : Valeur totale (quantité × prix actuel)
7. **P/L** : Profit/Loss en $ et %
8. **Actions** : Bouton "Trade"

**Interprétation des couleurs P/L :**
- Vert foncé = Bon profit (> +5%)
- Vert clair = Petit profit (0-5%)
- Rouge clair = Petite perte (0 à -5%)
- Rouge foncé = Grosse perte (< -5%)

**Actions disponibles :**
- Cliquez sur "Trade" pour acheter/vendre
- Survolez les lignes pour mettre en évidence

#### 5. Produits d'Investissement Disponibles
**12 produits organisés par type :**

**ETFs (Exchange-Traded Funds)**
- USO : Suit le WTI crude oil
- DBO : Futures pétroliers
- IXC : Actions énergétiques mondiales
- XLE : Secteur énergétique S&P 500

**Stocks (Actions de Compagnies)**
- XOM : ExxonMobil
- CVX : Chevron
- COP : ConocoPhillips
- 2222.SR : Saudi Aramco

**Futures (Contrats à Terme)**
- CL : WTI Crude Oil
- BZ : Brent Crude Oil
- NG : Natural Gas

**Funds (Fonds Mutuels)**
- VGENX : Vanguard Energy Fund

**Informations sur chaque carte :**
- Type et niveau de risque (badges)
- Prix actuel
- Variation du jour (+ % en vert/rouge)
- Description courte
- Volume de trading
- Bouton "Trade" pour investir

**Filtrage et Recherche :**
- Bouton "Search" : Rechercher par nom/ticker
- Bouton "Filter" : Filtrer par type, risque, ou performance

#### 6. Top Performers (Meilleurs Produits 24h)
**Panneau affichant les 6 meilleurs gains :**
- Cartes compactes avec indicateurs visuels
- Pourcentage de hausse mis en évidence
- Badge vert "OK" pour signaler la performance
- Accès rapide pour trader

**Comment utiliser :**
- Identifiez rapidement les opportunités
- Comparez les performances entre produits
- Suivez les tendances du marché

#### 7. Analyses de Marché & Prévisions
**4 analyses d'experts disponibles :**

**Pour chaque commodité :**
- **Outlook** : Bullish (haussier) / Bearish (baissier) / Neutral
- **Target Price** : Prix cible prévu
- **Timeframe** : Échéance de la prévision (Q1 2027, 6 mois, etc.)
- **Confidence** : Niveau de confiance (0-100%)
- **Key Factors** : 4 facteurs clés qui influencent la prévision

**Interprétation :**

**Bullish (Badge vert)**
- Achat recommandé
- Prix devrait monter
- Exemple : Brent Crude → $92 target

**Bearish (Badge rouge)**
- Vente/attente recommandée
- Prix devrait baisser
- Risque de correction

**Neutral (Badge gris)**
- Attendre plus de clarté
- Marché indécis
- Exemple : Natural Gas

**Barre de confiance :**
- > 70% : Forte conviction, agir en conséquence
- 50-70% : Conviction moyenne, surveiller
- < 50% : Incertitude élevée, prudence

#### 8. Historique des Transactions
**Liste des 5 dernières transactions :**
- Icône verte (achat) ou rouge (vente)
- Badge du type de transaction
- Nom du produit et ticker
- Quantité × prix unitaire
- Montant total
- Date de transaction
- Statut (Completed/Pending)

**Utilisation :**
- Suivez vos transactions récentes
- Vérifiez les prix d'exécution
- Analysez votre historique d'achat/vente

#### 9. Ressources Éducatives
**6 articles de formation :**
- Titre descriptif
- Catégorie (Futures, ETFs, Strategy, Risk, etc.)
- Niveau de difficulté (Beginner/Intermediate/Advanced)
- Durée de lecture estimée
- Bouton "Read" pour accéder

**Parcours d'apprentissage suggéré :**

**Niveau Débutant :**
1. Energy ETFs: A Beginner's Guide (8 min)
2. OPEC Impact on Oil Markets (10 min)

**Niveau Intermédiaire :**
3. Understanding Oil Futures Trading (12 min)
4. Diversification in Oil & Gas Investments (15 min)

**Niveau Avancé :**
5. Risk Management for Commodity Trading (20 min)
6. Tax Implications of Energy Investments (18 min)

#### 10. Actions Rapides (Boutons en Haut)
**Reports** : Télécharger un rapport PDF de votre portefeuille
**Refresh** : Actualiser les prix et données
**Trade** : Ouvrir le formulaire de trading rapide

---

## 🎯 Cas d'Usage Pratiques

### Scénario 1 : Vérifier l'État du Marché Quotidien
1. Ouvrez `/news`
2. Consultez les 6 indicateurs en haut
3. Vérifiez le sentiment du marché (score)
4. Lisez les 2-3 articles trending
5. **Temps estimé** : 3-5 minutes

### Scénario 2 : Analyser Votre Portefeuille
1. Ouvrez `/investment`
2. Vérifiez les 4 KPIs principaux
3. Examinez l'allocation d'actifs
4. Regardez la distribution des risques
5. Identifiez les positions en perte/gain
6. **Temps estimé** : 2-3 minutes

### Scénario 3 : Prendre une Décision d'Investissement
1. Allez sur `/news` pour comprendre le contexte
2. Vérifiez les analyses de marché sur `/investment`
3. Consultez les prévisions d'experts
4. Comparez les produits disponibles
5. Vérifiez le niveau de confiance des prévisions
6. Lisez les ressources éducatives si nécessaire
7. Cliquez sur "Trade" pour le produit choisi
8. **Temps estimé** : 15-20 minutes

### Scénario 4 : Rééquilibrer Votre Portefeuille
1. Consultez la distribution des risques
2. Vérifiez l'alerte si risque élevé > 25%
3. Identifiez les positions surévaluées
4. Trouvez des produits à risque moyen dans "Available Products"
5. Utilisez "Trade" pour rééquilibrer
6. **Temps estimé** : 10-15 minutes

### Scénario 5 : Se Former sur les Investissements
1. Allez dans "Educational Resources"
2. Commencez par un article "Beginner"
3. Progressez vers "Intermediate"
4. Appliquez les concepts appris sur votre portefeuille
5. **Temps estimé** : 30-60 minutes par article

---

## 💡 Astuces & Bonnes Pratiques

### Gestion du Portefeuille
✅ **Diversifiez** : Ne mettez pas plus de 30% dans un seul produit
✅ **Équilibrez les risques** : 70% risque moyen, 30% risque élevé max
✅ **Suivez les tendances** : Consultez les actualités quotidiennement
✅ **Utilisez les prévisions** : Confiance > 70% = signal fort
✅ **Rééquilibrez régulièrement** : Une fois par trimestre minimum

### Analyse du Marché
✅ **Sentiment + Prix** : Combinez sentiment du marché et prix réels
✅ **Volume + Variation** : Volume élevé + hausse = tendance forte
✅ **Facteurs géopolitiques** : Suivez les articles "Geopolitics"
✅ **Décisions OPEC** : Impact majeur sur les prix (articles "OPEC")
✅ **Corrélation** : Brent et WTI bougent souvent ensemble

### Trading Intelligent
✅ **Prix moyens** : Achetez par tranches pour moyenner le prix
✅ **Stop-loss mental** : Définissez un seuil de perte acceptable
✅ **Objectifs de profit** : Prenez des bénéfices à +10-15%
✅ **Évitez l'émotionnel** : Ne tradez pas sur coup de tête
✅ **Éducation continue** : Lisez au moins 1 ressource par mois

### Sécurité & Prudence
⚠️ **Risques des futures** : Investissement minimum élevé, volatilité extrême
⚠️ **ETFs vs Stocks** : ETFs = moins risqués mais moins de potentiel
⚠️ **Frais de transaction** : Considérez les coûts de trading
⚠️ **Fiscalité** : Consultez "Tax Implications" avant de vendre
⚠️ **Jamais tout perdre** : Ne risquez que l'argent que vous pouvez perdre

---

## 🔍 Interprétation des Badges et Couleurs

### Badges de Couleur
| Badge | Signification | Utilisation |
|-------|--------------|-------------|
| 🟢 OK | Positif/Validé | Gains, performances, tendances haussières |
| 🔴 CRIT | Critique/Alerte | Pertes, risques élevés, alertes importantes |
| 🟠 FLARE | Attention/Trending | Articles importants, events majeurs |
| 🔵 INFO | Information | Détails, contexte, données neutres |
| ⚪ NEUTRAL | Neutre | Risque moyen, sentiment neutre |

### Icônes de Catégorie
| Icône | Catégorie | Couleur |
|-------|-----------|---------|
| 💰 | Market (Marché) | Bleu |
| 🔥 | OPEC | Orange |
| ⚖️ | Regulation | Violet |
| 💻 | Technology | Cyan |
| 🌍 | Geopolitics | Rouge |
| 📈 | Prices | Vert |

### Flèches et Indicateurs
- ↗️ **TrendingUp** : Hausse, gain, performance positive
- ↘️ **TrendingDown** : Baisse, perte, performance négative
- 🔄 **Refresh** : Mise à jour, actualisation
- 🔔 **Bell** : Alertes, notifications
- 🛒 **ShoppingCart** : Trading, achat/vente
- 📊 **PieChart** : Allocation, répartition
- 🎯 **Target** : Objectif, prévision

---

## 📱 Compatibilité

### Navigateurs Supportés
✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+
✅ Opera 76+

### Appareils
✅ Desktop (1920×1080 et plus)
✅ Laptop (1366×768 et plus)
✅ Tablet (768×1024)
✅ Mobile (375×667 et plus)

### Résolutions Testées
- **Desktop** : 1920×1080, 2560×1440, 3840×2160
- **Laptop** : 1366×768, 1440×900, 1920×1080
- **Tablet** : 768×1024, 1024×768
- **Mobile** : 375×667, 414×896, 390×844

---

## 🆘 Support & Aide

### Problèmes Courants

**Q : Les prix ne s'actualisent pas**
R : Cliquez sur le bouton "Refresh" en haut à droite

**Q : Je ne vois pas mes positions**
R : Les positions affichées sont des exemples de démonstration

**Q : Comment trader réellement ?**
R : Il s'agit d'une plateforme de démonstration. Pour trader en réel, intégrez une API de broker.

**Q : Les actualités sont-elles réelles ?**
R : Ce sont des exemples réalistes pour démonstration. Intégrez une API de news pour des articles réels.

**Q : Puis-je personnaliser les KPIs ?**
R : Les KPIs sont configurables dans `src/lib/data/investment.ts`

**Q : Comment ajouter de nouveaux produits ?**
R : Éditez le fichier `src/lib/data/investment.ts` et ajoutez des entrées dans `investmentProducts`

### Ressources Supplémentaires
- **Documentation technique** : Voir README.md
- **Détails des features** : Voir FEATURES_ADDED.md
- **Pull Request** : https://github.com/oiseaubleuc/PetrolMe/pull/1

---

**Version** : 1.0.0  
**Dernière mise à jour** : Octobre 2026  
**Développé par** : Hohosolutions pour Petrolisation OMS
