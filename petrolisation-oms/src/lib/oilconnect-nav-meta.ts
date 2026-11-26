export interface OilconnectNavMeta {
  id: string;
  href: string;
  label: string;
  index: string;
  description: string;
}

export const oilconnectNavMeta: OilconnectNavMeta[] = [
  {
    id: "overview",
    href: "/dashboard",
    label: "Overview",
    index: "01",
    description: "Trading overview and desk KPIs",
  },
  {
    id: "trade",
    href: "/trade",
    label: "Buy & Sell",
    index: "02",
    description: "Execute and monitor orders",
  },
  {
    id: "markets",
    href: "/markets",
    label: "Oil markets",
    index: "03",
    description: "Prices, news and market intelligence",
  },
  {
    id: "portfolio",
    href: "/portfolio",
    label: "Portfolio",
    index: "04",
    description: "Holdings and performance",
  },
  {
    id: "shipments",
    href: "/shipments",
    label: "Shipments",
    index: "05",
    description: "Logistics and deliveries",
  },
  {
    id: "inventory",
    href: "/inventory",
    label: "Inventory",
    index: "06",
    description: "Stock and warehouses",
  },
  {
    id: "counterparties",
    href: "/counterparties",
    label: "Counterparties",
    index: "07",
    description: "Partners and clients",
  },
];

export const breadcrumbs: Record<string, { label: string; parent?: string }> = {
  "/dashboard": { label: "Overview" },
  "/trade": { label: "Buy & Sell", parent: "/dashboard" },
  "/markets": { label: "Oil markets", parent: "/dashboard" },
  "/portfolio": { label: "Portfolio", parent: "/dashboard" },
  "/shipments": { label: "Shipments", parent: "/dashboard" },
  "/inventory": { label: "Inventory", parent: "/dashboard" },
  "/counterparties": { label: "Counterparties", parent: "/dashboard" },
  "/news": { label: "Oil markets", parent: "/dashboard" },
  "/investment": { label: "Portfolio", parent: "/dashboard" },
  "/logistics": { label: "Shipments", parent: "/dashboard" },
};