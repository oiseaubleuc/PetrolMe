import { seededRandom } from "@/lib/utils";

function series(seed: number, base: number, drift: number, n = 14): number[] {
  const rand = seededRandom(seed);
  const out: number[] = [];
  let v = base;
  for (let i = 0; i < n; i++) {
    v += (rand() - 0.5) * drift + base * 0.004;
    out.push(Math.round(v * 100) / 100);
  }
  return out;
}

export interface ExecKpi {
  id: string;
  label: string;
  value: string;
  unit?: string;
  delta: number;
  goodWhenUp: boolean;
  spark: number[];
  sparkColor: string;
  caption: string;
  icon: string; // lucide icon key resolved at render
}

export const execKpis: ExecKpi[] = [
  {
    id: "oil",
    label: "Daily Oil Production",
    value: "848.2",
    unit: "Mbbl/d",
    delta: 2.4,
    goodWhenUp: true,
    spark: series(1, 820, 14),
    sparkColor: "#f96412",
    caption: "vs. target 860 Mbbl/d",
    icon: "Droplets",
  },
  {
    id: "gas",
    label: "Gas Production",
    value: "612.5",
    unit: "MMscf/d",
    delta: 1.1,
    goodWhenUp: true,
    spark: series(2, 600, 10),
    sparkColor: "#4f9fb8",
    caption: "98.1% of nameplate",
    icon: "Flame",
  },
  {
    id: "water",
    label: "Water Injection",
    value: "274.0",
    unit: "Mbbl/d",
    delta: -0.6,
    goodWhenUp: true,
    spark: series(3, 270, 8),
    sparkColor: "#48a7d6",
    caption: "Pressure support nominal",
    icon: "Waves",
  },
  {
    id: "pipeline",
    label: "Pipeline Availability",
    value: "99.2",
    unit: "%",
    delta: 0.3,
    goodWhenUp: true,
    spark: series(4, 98.6, 0.6),
    sparkColor: "#2fbf83",
    caption: "6,240 km network",
    icon: "Waypoints",
  },
  {
    id: "health",
    label: "Equipment Health",
    value: "93.6",
    unit: "%",
    delta: 0.8,
    goodWhenUp: true,
    spark: series(5, 92, 0.9),
    sparkColor: "#2fbf83",
    caption: "1,284 monitored assets",
    icon: "HeartPulse",
  },
  {
    id: "efficiency",
    label: "Operational Efficiency",
    value: "91.4",
    unit: "%",
    delta: 1.6,
    goodWhenUp: true,
    spark: series(6, 89, 1.1),
    sparkColor: "#4f9fb8",
    caption: "OEE across all sites",
    icon: "Gauge",
  },
  {
    id: "revenue",
    label: "Revenue (MTD)",
    value: "$1.42B",
    delta: 4.2,
    goodWhenUp: true,
    spark: series(7, 1.28, 0.04),
    sparkColor: "#f5b13d",
    caption: "Realized $82.4 / boe",
    icon: "TrendingUp",
  },
  {
    id: "cost",
    label: "Operating Cost",
    value: "$11.8",
    unit: "/boe",
    delta: -1.9,
    goodWhenUp: false,
    spark: series(8, 12.4, 0.2),
    sparkColor: "#f96412",
    caption: "Lifting cost, below plan",
    icon: "Coins",
  },
  {
    id: "carbon",
    label: "Carbon Intensity",
    value: "17.4",
    unit: "kg/boe",
    delta: -3.1,
    goodWhenUp: false,
    spark: series(9, 18.6, 0.3),
    sparkColor: "#2fbf83",
    caption: "Scope 1 + 2 equivalent",
    icon: "Leaf",
  },
  {
    id: "energy",
    label: "Energy Consumption",
    value: "486",
    unit: "GWh",
    delta: -0.9,
    goodWhenUp: false,
    spark: series(10, 492, 6),
    sparkColor: "#48a7d6",
    caption: "12% renewable mix",
    icon: "Zap",
  },
  {
    id: "downtime",
    label: "Unplanned Downtime",
    value: "0.8",
    unit: "%",
    delta: -0.4,
    goodWhenUp: false,
    spark: series(11, 1.1, 0.15),
    sparkColor: "#ef4d5a",
    caption: "142 min this month",
    icon: "TimerReset",
  },
  {
    id: "incidents",
    label: "Open Incidents",
    value: "7",
    delta: -12.5,
    goodWhenUp: false,
    spark: series(12, 9, 1.2),
    sparkColor: "#f5b13d",
    caption: "2 high severity",
    icon: "ShieldAlert",
  },
];
