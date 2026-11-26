export interface InvestmentProduct {
  id: string;
  name: string;
  type: "etf" | "futures" | "stocks" | "fund" | "commodity";
  ticker: string;
  price: number;
  change: number;
  changePercent: number;
  volume: string;
  description: string;
  minInvestment: number;
  risk: "low" | "medium" | "high";
}

export interface PortfolioHolding {
  id: string;
  productId: string;
  productName: string;
  ticker: string;
  type: string;
  quantity: number;
  avgBuyPrice: number;
  currentPrice: number;
  totalValue: number;
  profitLoss: number;
  profitLossPercent: number;
}

export interface Transaction {
  id: string;
  date: Date;
  type: "buy" | "sell";
  productName: string;
  ticker: string;
  quantity: number;
  price: number;
  total: number;
  status: "completed" | "pending" | "cancelled";
}

export interface MarketAnalysis {
  commodity: string;
  outlook: "bullish" | "bearish" | "neutral";
  targetPrice: number;
  timeframe: string;
  confidence: number;
  keyFactors: string[];
}

export const investmentProducts: InvestmentProduct[] = [
  {
    id: "p001",
    name: "United States Oil Fund",
    type: "etf",
    ticker: "USO",
    price: 78.45,
    change: 1.23,
    changePercent: 1.59,
    volume: "8.2M",
    description: "Tracks the price of West Texas Intermediate light, sweet crude oil",
    minInvestment: 100,
    risk: "high",
  },
  {
    id: "p002",
    name: "Invesco DB Oil Fund",
    type: "etf",
    ticker: "DBO",
    price: 15.87,
    change: 0.28,
    changePercent: 1.79,
    volume: "425K",
    description: "Rules-based fund tracking oil futures",
    minInvestment: 100,
    risk: "high",
  },
  {
    id: "p003",
    name: "iShares Global Energy ETF",
    type: "etf",
    ticker: "IXC",
    price: 42.36,
    change: 0.64,
    changePercent: 1.53,
    volume: "1.1M",
    description: "Global energy sector equities across 50+ companies",
    minInvestment: 100,
    risk: "medium",
  },
  {
    id: "p004",
    name: "ExxonMobil Corporation",
    type: "stocks",
    ticker: "XOM",
    price: 118.52,
    change: 2.14,
    changePercent: 1.84,
    volume: "15.3M",
    description: "Integrated oil & gas supermajor",
    minInvestment: 118.52,
    risk: "medium",
  },
  {
    id: "p005",
    name: "Chevron Corporation",
    type: "stocks",
    ticker: "CVX",
    price: 165.78,
    change: 1.87,
    changePercent: 1.14,
    volume: "7.8M",
    description: "Global energy company with upstream and downstream operations",
    minInvestment: 165.78,
    risk: "medium",
  },
  {
    id: "p006",
    name: "ConocoPhillips",
    type: "stocks",
    ticker: "COP",
    price: 124.93,
    change: 1.45,
    changePercent: 1.17,
    volume: "6.2M",
    description: "Leading exploration and production company",
    minInvestment: 124.93,
    risk: "medium",
  },
  {
    id: "p007",
    name: "WTI Crude Oil Futures",
    type: "futures",
    ticker: "CL",
    price: 79860,
    change: 940,
    changePercent: 1.19,
    volume: "387K",
    description: "NYMEX crude oil futures contract (per 1000 barrels)",
    minInvestment: 5000,
    risk: "high",
  },
  {
    id: "p008",
    name: "Brent Crude Oil Futures",
    type: "futures",
    ticker: "BZ",
    price: 84320,
    change: 1280,
    changePercent: 1.54,
    volume: "428K",
    description: "ICE Brent crude futures contract (per 1000 barrels)",
    minInvestment: 5000,
    risk: "high",
  },
  {
    id: "p009",
    name: "Vanguard Energy Fund",
    type: "fund",
    ticker: "VGENX",
    price: 134.28,
    change: 1.92,
    changePercent: 1.45,
    volume: "285K",
    description: "Diversified energy sector mutual fund",
    minInvestment: 1000,
    risk: "medium",
  },
  {
    id: "p010",
    name: "Natural Gas Futures",
    type: "futures",
    ticker: "NG",
    price: 2870,
    change: -120,
    changePercent: -4.01,
    volume: "156K",
    description: "NYMEX natural gas futures (per 10,000 MMBtu)",
    minInvestment: 3000,
    risk: "high",
  },
  {
    id: "p011",
    name: "Energy Select Sector SPDR",
    type: "etf",
    ticker: "XLE",
    price: 88.94,
    change: 1.36,
    changePercent: 1.55,
    volume: "18.7M",
    description: "S&P 500 energy sector tracking fund",
    minInvestment: 100,
    risk: "medium",
  },
  {
    id: "p012",
    name: "Saudi Aramco",
    type: "stocks",
    ticker: "2222.SR",
    price: 32.85,
    change: 0.45,
    changePercent: 1.39,
    volume: "42.1M",
    description: "World's largest integrated oil and gas company",
    minInvestment: 32.85,
    risk: "medium",
  },
];

export const portfolioHoldings: PortfolioHolding[] = [
  {
    id: "h001",
    productId: "p001",
    productName: "United States Oil Fund",
    ticker: "USO",
    type: "ETF",
    quantity: 150,
    avgBuyPrice: 72.30,
    currentPrice: 78.45,
    totalValue: 11767.50,
    profitLoss: 922.50,
    profitLossPercent: 8.51,
  },
  {
    id: "h002",
    productId: "p004",
    productName: "ExxonMobil Corporation",
    ticker: "XOM",
    type: "Stock",
    quantity: 50,
    avgBuyPrice: 112.40,
    currentPrice: 118.52,
    totalValue: 5926.00,
    profitLoss: 306.00,
    profitLossPercent: 5.44,
  },
  {
    id: "h003",
    productId: "p003",
    productName: "iShares Global Energy ETF",
    ticker: "IXC",
    type: "ETF",
    quantity: 200,
    avgBuyPrice: 39.80,
    currentPrice: 42.36,
    totalValue: 8472.00,
    profitLoss: 512.00,
    profitLossPercent: 6.43,
  },
  {
    id: "h004",
    productId: "p005",
    productName: "Chevron Corporation",
    ticker: "CVX",
    type: "Stock",
    quantity: 30,
    avgBuyPrice: 158.20,
    currentPrice: 165.78,
    totalValue: 4973.40,
    profitLoss: 227.40,
    profitLossPercent: 4.79,
  },
  {
    id: "h005",
    productId: "p011",
    productName: "Energy Select Sector SPDR",
    ticker: "XLE",
    type: "ETF",
    quantity: 100,
    avgBuyPrice: 84.15,
    currentPrice: 88.94,
    totalValue: 8894.00,
    profitLoss: 479.00,
    profitLossPercent: 5.69,
  },
];

export const recentTransactions: Transaction[] = [
  {
    id: "t001",
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    type: "buy",
    productName: "Energy Select Sector SPDR",
    ticker: "XLE",
    quantity: 50,
    price: 87.25,
    total: 4362.50,
    status: "completed",
  },
  {
    id: "t002",
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    type: "sell",
    productName: "ConocoPhillips",
    ticker: "COP",
    quantity: 25,
    price: 123.80,
    total: 3095.00,
    status: "completed",
  },
  {
    id: "t003",
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    type: "buy",
    productName: "United States Oil Fund",
    ticker: "USO",
    quantity: 75,
    price: 76.90,
    total: 5767.50,
    status: "completed",
  },
  {
    id: "t004",
    date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
    type: "buy",
    productName: "Chevron Corporation",
    ticker: "CVX",
    quantity: 15,
    price: 162.40,
    total: 2436.00,
    status: "completed",
  },
  {
    id: "t005",
    date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
    type: "buy",
    productName: "iShares Global Energy ETF",
    ticker: "IXC",
    quantity: 100,
    price: 41.20,
    total: 4120.00,
    status: "completed",
  },
];

export const marketAnalyses: MarketAnalysis[] = [
  {
    commodity: "Brent Crude",
    outlook: "bullish",
    targetPrice: 92.00,
    timeframe: "Q2 2027",
    confidence: 75,
    keyFactors: [
      "OPEC+ production discipline",
      "China demand recovery",
      "Limited spare capacity",
      "Geopolitical premium",
    ],
  },
  {
    commodity: "WTI Crude",
    outlook: "bullish",
    targetPrice: 87.00,
    timeframe: "Q2 2027",
    confidence: 72,
    keyFactors: [
      "SPR refill buying",
      "Inventory drawdowns",
      "Export growth",
      "Refining margins",
    ],
  },
  {
    commodity: "Natural Gas",
    outlook: "neutral",
    targetPrice: 3.10,
    timeframe: "Q1 2027",
    confidence: 58,
    keyFactors: [
      "Weather uncertainty",
      "LNG export capacity",
      "Storage levels above average",
      "Production flexibility",
    ],
  },
  {
    commodity: "Energy Equities",
    outlook: "bullish",
    targetPrice: 95.00,
    timeframe: "6 months",
    confidence: 68,
    keyFactors: [
      "Strong cash flows",
      "Shareholder returns",
      "Commodity price support",
      "Disciplined capex",
    ],
  },
];

export const portfolioStats = {
  totalValue: 40032.90,
  totalInvested: 37456.00,
  totalProfitLoss: 2576.90,
  totalProfitLossPercent: 6.88,
  dayChange: 612.45,
  dayChangePercent: 1.56,
  assetAllocation: [
    { category: "ETFs", value: 29133.50, percent: 72.8 },
    { category: "Stocks", value: 10899.40, percent: 27.2 },
  ],
  riskDistribution: [
    { risk: "High", value: 11767.50, percent: 29.4 },
    { risk: "Medium", value: 28265.40, percent: 70.6 },
  ],
};

export const educationalResources = [
  {
    id: "edu001",
    title: "Understanding Oil Futures Trading",
    category: "Futures",
    duration: "12 min read",
    level: "Intermediate",
  },
  {
    id: "edu002",
    title: "Energy ETFs: A Beginner's Guide",
    category: "ETFs",
    duration: "8 min read",
    level: "Beginner",
  },
  {
    id: "edu003",
    title: "Diversification in Oil & Gas Investments",
    category: "Strategy",
    duration: "15 min read",
    level: "Intermediate",
  },
  {
    id: "edu004",
    title: "Risk Management for Commodity Trading",
    category: "Risk",
    duration: "20 min read",
    level: "Advanced",
  },
  {
    id: "edu005",
    title: "OPEC Impact on Oil Markets",
    category: "Market Analysis",
    duration: "10 min read",
    level: "Beginner",
  },
  {
    id: "edu006",
    title: "Tax Implications of Energy Investments",
    category: "Tax & Legal",
    duration: "18 min read",
    level: "Advanced",
  },
];
