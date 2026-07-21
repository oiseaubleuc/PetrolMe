import type { WorkOrder } from "@/lib/types";

export const workOrders: WorkOrder[] = [
  { id: "WO-24817", title: "Compressor A — vibration analysis & bearing swap", type: "Predictive", asset: "CMP-AMH-114", facility: "Al-Maha Offshore Complex", priority: "critical", status: "in-progress", assignee: "Omar Haddad", due: "2026-07-22", progress: 62, cost: 48200 },
  { id: "WO-24809", title: "Separator V-205 relief valve recertification", type: "Inspection", asset: "SEP-NJM-205", facility: "Nujaym Gas Processing Plant", priority: "high", status: "overdue", assignee: "Lena Fischer", due: "2026-07-19", progress: 30, cost: 12600 },
  { id: "WO-24802", title: "Booster Compressor B2 — surge control tuning", type: "Corrective", asset: "CMP-SFY-088", facility: "Safiyah Deepwater Platform", priority: "critical", status: "open", assignee: "Yusuf Rahman", due: "2026-07-23", progress: 0, cost: 33400 },
  { id: "WO-24796", title: "Quarterly PM — Steam Turbine G2", type: "Preventive", asset: "TRB-HLW-071", facility: "Halwan Refinery", priority: "medium", status: "completed", assignee: "Sara Meyer", due: "2026-07-15", progress: 100, cost: 21800 },
  { id: "WO-24788", title: "Generator D4 — top overhaul", type: "Corrective", asset: "GEN-ZBR-044", facility: "Zubara Compression Station", priority: "high", status: "in-progress", assignee: "Khalid Nasser", due: "2026-07-21", progress: 48, cost: 57600 },
  { id: "WO-24775", title: "Crude Transfer Pump 3 — seal replacement", type: "Corrective", asset: "PMP-RFS-338", facility: "Ras Faris Onshore Field", priority: "high", status: "on-hold", assignee: "Ahmed Farouk", due: "2026-07-25", progress: 20, cost: 9800 },
  { id: "WO-24761", title: "Trunkline cathodic protection survey", type: "Inspection", asset: "PIP-TRK-MRS", facility: "Marsa Export Terminal", priority: "medium", status: "open", assignee: "Isabel Cruz", due: "2026-07-28", progress: 0, cost: 15200 },
  { id: "WO-24744", title: "Subsea tree C-09 — annual intervention", type: "Preventive", asset: "WEL-AMH-C09", facility: "Al-Maha Offshore Complex", priority: "medium", status: "open", assignee: "Omar Haddad", due: "2026-08-02", progress: 0, cost: 88400 },
  { id: "WO-24738", title: "Substation Bay 6 — thermographic scan", type: "Predictive", asset: "SUB-HLW-006", facility: "Halwan Refinery", priority: "low", status: "completed", assignee: "Sara Meyer", due: "2026-07-12", progress: 100, cost: 4200 },
  { id: "WO-24722", title: "Tank 12 — internal inspection (API-653)", type: "Inspection", asset: "TNK-MRS-012", facility: "Marsa Export Terminal", priority: "medium", status: "in-progress", assignee: "Isabel Cruz", due: "2026-07-26", progress: 55, cost: 27300 },
];

export const maintenanceKpis = {
  openOrders: 128,
  overdue: 6,
  completedThisMonth: 342,
  mttrHours: 4.6,
  mtbfDays: 214,
  scheduleCompliance: 96.2,
  wrenchTime: 71.4,
  monthCost: 1284000,
};

export const maintenanceTrend = [
  { month: "Feb", preventive: 210, corrective: 88, predictive: 42 },
  { month: "Mar", preventive: 224, corrective: 76, predictive: 51 },
  { month: "Apr", preventive: 238, corrective: 71, predictive: 58 },
  { month: "May", preventive: 246, corrective: 64, predictive: 66 },
  { month: "Jun", preventive: 258, corrective: 59, predictive: 74 },
  { month: "Jul", preventive: 231, corrective: 52, predictive: 81 },
];

export const aiRecommendations = [
  { id: "ai-1", asset: "CMP-SFY-088", title: "Bearing degradation trend detected", detail: "Spectral energy at 1.7× running speed rising 14% week-over-week. Predicted failure window 18–26 days.", confidence: 92, action: "Schedule bearing inspection", severity: "high" as const },
  { id: "ai-2", asset: "SEP-NJM-205", title: "Level control valve hysteresis", detail: "Increasing dead-band in LV-205 suggests actuator wear. Efficiency loss estimated at 2.3%.", confidence: 84, action: "Plan valve overhaul", severity: "medium" as const },
  { id: "ai-3", asset: "PMP-RFS-338", title: "Cavitation signature emerging", detail: "NPSH margin narrowing during peak throughput. Seal life projected to drop 30%.", confidence: 88, action: "Reduce duty / inspect suction", severity: "high" as const },
  { id: "ai-4", asset: "TRB-HLW-071", title: "Optimal PM window shift", detail: "Model recommends deferring next PM by 9 days based on actual duty cycle — saving $6.1K.", confidence: 79, action: "Reschedule WO-24796 series", severity: "low" as const },
];
