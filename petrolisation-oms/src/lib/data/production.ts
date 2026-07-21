import { seededRandom } from "@/lib/utils";

export interface ProductionPoint {
  t: string;
  oil: number;
  gas: number;
  water: number;
  target: number;
}

export interface ForecastPoint {
  t: string;
  actual: number | null;
  forecast: number;
  upper: number;
  lower: number;
}

const HOURS = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, "0")}:00`);
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** 24-hour intraday production curve (thousand boe/d granularity). */
export function buildIntraday(): ProductionPoint[] {
  const rand = seededRandom(42);
  return HOURS.map((t, i) => {
    const wave = Math.sin((i / 24) * Math.PI * 2 - 1.2) * 0.06 + 1;
    const noise = (rand() - 0.5) * 0.04;
    const oil = 848 * (wave + noise);
    const gas = 612 * (wave + noise * 0.7) * 0.98;
    const water = 274 * (2 - wave) * 0.5;
    return {
      t,
      oil: Math.round(oil * 10) / 10,
      gas: Math.round(gas * 10) / 10,
      water: Math.round(water * 10) / 10,
      target: 860,
    };
  });
}

/** Trailing 12-month production history plus 6-month forecast band. */
export function buildForecast(): ForecastPoint[] {
  const rand = seededRandom(7);
  const now = new Date();
  const points: ForecastPoint[] = [];
  let base = 792;
  for (let i = -11; i <= 6; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
    const label = `${MONTHS[d.getMonth()]} ${String(d.getFullYear()).slice(2)}`;
    const growth = 1 + (i + 11) * 0.006;
    const seasonal = Math.sin(((d.getMonth()) / 12) * Math.PI * 2) * 22;
    const value = base * growth + seasonal;
    if (i <= 0) {
      const actual = Math.round(value + (rand() - 0.5) * 26);
      points.push({ t: label, actual, forecast: actual, upper: actual, lower: actual });
    } else {
      const forecast = Math.round(value + i * 3);
      const spread = 14 + i * 6;
      points.push({
        t: label,
        actual: null,
        forecast,
        upper: forecast + spread,
        lower: forecast - spread,
      });
    }
  }
  return points;
}

/** Per-facility production split for stacked/breakdown charts. */
export const productionMix = [
  { name: "Crude Oil", value: 848, color: "#f96412" },
  { name: "Natural Gas", value: 612, color: "#4f9fb8" },
  { name: "Condensate", value: 176, color: "#f5b13d" },
  { name: "NGL", value: 98, color: "#2fbf83" },
];

export const energySources = [
  { name: "Grid Import", value: 42 },
  { name: "Gas Turbine", value: 38 },
  { name: "Solar Array", value: 12 },
  { name: "Waste-Heat Recovery", value: 8 },
];

export const efficiencyByFacility = [
  { facility: "Al-Maha", uptime: 98.4, efficiency: 94.1 },
  { facility: "Ras Faris", uptime: 96.7, efficiency: 91.8 },
  { facility: "Nujaym", uptime: 88.2, efficiency: 82.4 },
  { facility: "Safiyah", uptime: 92.6, efficiency: 87.9 },
  { facility: "Halwan", uptime: 97.1, efficiency: 95.2 },
  { facility: "Tayba", uptime: 95.3, efficiency: 90.6 },
];
