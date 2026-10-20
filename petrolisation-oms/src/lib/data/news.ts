export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  category: "market" | "opec" | "regulation" | "technology" | "geopolitics" | "prices";
  source: string;
  timestamp: Date;
  impact: "high" | "medium" | "low";
  trending: boolean;
  imageUrl?: string;
}

export interface MarketIndicator {
  id: string;
  name: string;
  value: number;
  unit: string;
  change: number;
  changePercent: number;
  lastUpdated: Date;
}

export const marketIndicators: MarketIndicator[] = [
  {
    id: "brent",
    name: "Brent Crude",
    value: 84.32,
    unit: "USD/bbl",
    change: 1.28,
    changePercent: 1.54,
    lastUpdated: new Date(Date.now() - 15 * 60 * 1000),
  },
  {
    id: "wti",
    name: "WTI Crude",
    value: 79.86,
    unit: "USD/bbl",
    change: 0.94,
    changePercent: 1.19,
    lastUpdated: new Date(Date.now() - 15 * 60 * 1000),
  },
  {
    id: "natural-gas",
    name: "Natural Gas",
    value: 2.87,
    unit: "USD/MMBtu",
    change: -0.12,
    changePercent: -4.01,
    lastUpdated: new Date(Date.now() - 20 * 60 * 1000),
  },
  {
    id: "gasoline",
    name: "RBOB Gasoline",
    value: 2.42,
    unit: "USD/gal",
    change: 0.03,
    changePercent: 1.26,
    lastUpdated: new Date(Date.now() - 18 * 60 * 1000),
  },
  {
    id: "heating-oil",
    name: "Heating Oil",
    value: 2.68,
    unit: "USD/gal",
    change: 0.05,
    changePercent: 1.90,
    lastUpdated: new Date(Date.now() - 22 * 60 * 1000),
  },
  {
    id: "dubai",
    name: "Dubai Crude",
    value: 82.15,
    unit: "USD/bbl",
    change: 1.05,
    changePercent: 1.29,
    lastUpdated: new Date(Date.now() - 25 * 60 * 1000),
  },
];

export const newsArticles: NewsArticle[] = [
  {
    id: "n001",
    title: "OPEC+ Extends Production Cuts Through Q2 2027",
    summary: "OPEC+ alliance agrees to maintain current production levels of 2 million barrels per day cut, supporting market stability amid global economic uncertainties.",
    category: "opec",
    source: "Reuters Energy",
    timestamp: new Date(Date.now() - 45 * 60 * 1000),
    impact: "high",
    trending: true,
  },
  {
    id: "n002",
    title: "Brent Crude Surges to 10-Month High on Supply Concerns",
    summary: "Oil prices climb as geopolitical tensions in the Middle East raise concerns about supply disruptions. Analysts predict continued volatility.",
    category: "prices",
    source: "Bloomberg Markets",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    impact: "high",
    trending: true,
  },
  {
    id: "n003",
    title: "EU Strengthens Renewable Energy Mandates for 2030",
    summary: "European Commission announces stricter targets for renewable energy adoption, potentially impacting long-term fossil fuel demand projections.",
    category: "regulation",
    source: "Energy Intelligence",
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
    impact: "medium",
    trending: false,
  },
  {
    id: "n004",
    title: "Saudi Arabia Plans $500B Green Hydrogen Investment",
    summary: "Kingdom announces ambitious plan to become global leader in green hydrogen production, diversifying beyond traditional oil exports.",
    category: "technology",
    source: "Platts",
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
    impact: "medium",
    trending: true,
  },
  {
    id: "n005",
    title: "Natural Gas Prices Drop 4% on Mild Winter Forecast",
    summary: "Weather models predict warmer-than-expected temperatures across Europe and North America, reducing heating demand expectations.",
    category: "market",
    source: "Natural Gas Intelligence",
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
    impact: "medium",
    trending: false,
  },
  {
    id: "n006",
    title: "China's Oil Imports Rise 8.5% Year-over-Year",
    summary: "Chinese demand recovery continues as economic stimulus measures boost industrial activity and transportation fuel consumption.",
    category: "market",
    source: "S&P Global Commodity Insights",
    timestamp: new Date(Date.now() - 10 * 60 * 60 * 1000),
    impact: "high",
    trending: true,
  },
  {
    id: "n007",
    title: "U.S. Strategic Petroleum Reserve Refill Plans Detailed",
    summary: "Department of Energy outlines strategy to replenish reserves with 180 million barrel purchase over next 18 months.",
    category: "geopolitics",
    source: "Argus Media",
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
    impact: "high",
    trending: false,
  },
  {
    id: "n008",
    title: "Shell Reports Record Quarterly Profits of $9.6B",
    summary: "Major oil company posts exceptional Q3 results driven by strong refining margins and LNG trading performance.",
    category: "market",
    source: "Financial Times Energy",
    timestamp: new Date(Date.now() - 14 * 60 * 60 * 1000),
    impact: "medium",
    trending: false,
  },
  {
    id: "n009",
    title: "New Carbon Pricing Framework Announced by G7 Nations",
    summary: "Group of Seven countries agree on harmonized carbon pricing mechanism to accelerate energy transition and reduce emissions.",
    category: "regulation",
    source: "Reuters Sustainability",
    timestamp: new Date(Date.now() - 16 * 60 * 60 * 1000),
    impact: "high",
    trending: false,
  },
  {
    id: "n010",
    title: "Breakthrough in Carbon Capture Technology Demonstrated",
    summary: "Norwegian research consortium achieves 95% capture efficiency at commercial scale, potentially transforming fossil fuel viability.",
    category: "technology",
    source: "Oil & Gas Journal",
    timestamp: new Date(Date.now() - 20 * 60 * 60 * 1000),
    impact: "medium",
    trending: false,
  },
  {
    id: "n011",
    title: "IEA Revises 2027 Demand Forecast Upward by 1.2 mbpd",
    summary: "International Energy Agency increases oil demand projections citing stronger-than-expected economic growth in emerging markets.",
    category: "market",
    source: "IEA Monthly Report",
    timestamp: new Date(Date.now() - 22 * 60 * 60 * 1000),
    impact: "high",
    trending: true,
  },
  {
    id: "n012",
    title: "Mexico Discovers Major Offshore Oil Field in Gulf Waters",
    summary: "Pemex announces discovery of estimated 1.5 billion barrel field, marking largest find in two decades.",
    category: "geopolitics",
    source: "Latin America Energy",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    impact: "medium",
    trending: false,
  },
];

export const marketSentiment = {
  overall: "bullish" as const,
  score: 72,
  factors: [
    { factor: "Supply Constraints", impact: 8 },
    { factor: "Demand Recovery", impact: 7 },
    { factor: "Geopolitical Risk", impact: 6 },
    { factor: "Economic Growth", impact: 5 },
    { factor: "Dollar Weakness", impact: 4 },
  ],
};

export const tradingVolume = {
  brent: { volume: "428,500", unit: "contracts", change: 12.4 },
  wti: { volume: "387,200", unit: "contracts", change: 8.7 },
  natgas: { volume: "156,800", unit: "contracts", change: -5.2 },
};
