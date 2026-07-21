import type { Incident } from "@/lib/types";

export const incidents: Incident[] = [
  { id: "INC-3312", title: "Minor hydrocarbon sheen observed at jetty 2", category: "Environmental", severity: "medium", facility: "Marsa Export Terminal", status: "investigating", reported: "2026-07-20", owner: "HSE — Isabel Cruz" },
  { id: "INC-3309", title: "High-pressure gas release, isolated at NJM inlet", category: "Process Safety", severity: "high", facility: "Nujaym Gas Processing Plant", status: "action-pending", reported: "2026-07-18", owner: "Ops — Lena Fischer" },
  { id: "INC-3305", title: "Slip and fall — no lost time", category: "Occupational", severity: "low", facility: "Halwan Refinery", status: "closed", reported: "2026-07-16", owner: "HSE — Sara Meyer" },
  { id: "INC-3301", title: "Unauthorized access attempt at gate 4", category: "Security", severity: "medium", facility: "Ras Faris Onshore Field", status: "closed", reported: "2026-07-14", owner: "Security — K. Nasser" },
  { id: "INC-3298", title: "Crane near miss during lift over deck", category: "Near Miss", severity: "high", facility: "Al-Maha Offshore Complex", status: "investigating", reported: "2026-07-13", owner: "Ops — Omar Haddad" },
  { id: "INC-3294", title: "Flare gas exceedance, 22 min above limit", category: "Environmental", severity: "medium", facility: "Safiyah Deepwater Platform", status: "action-pending", reported: "2026-07-11", owner: "HSE — Yusuf Rahman" },
];

export const hseKpis = {
  trir: 0.42,
  ltifr: 0.18,
  daysWithoutLTI: 214,
  openPermits: 38,
  nearMisses: 27,
  auditsCompleted: 92.6,
  complianceScore: 97.1,
  emergencyDrills: 12,
};

export const permitToWork = [
  { id: "PTW-8841", type: "Hot Work", facility: "Halwan Refinery", area: "Unit 200 — CDU", status: "active", holder: "M. Osei", expires: "17:30" },
  { id: "PTW-8839", type: "Confined Space", facility: "Marsa Export Terminal", area: "Tank 12 shell", status: "active", holder: "R. Petrov", expires: "16:00" },
  { id: "PTW-8834", type: "Working at Height", facility: "Al-Maha Offshore Complex", area: "Flare boom", status: "suspended", holder: "J. Alvarez", expires: "—" },
  { id: "PTW-8830", type: "Electrical Isolation", facility: "Halwan Refinery", area: "Substation Bay 6", status: "active", holder: "S. Meyer", expires: "19:15" },
  { id: "PTW-8827", type: "Excavation", facility: "Ras Faris Onshore Field", area: "Flowline FL-22", status: "pending", holder: "A. Farouk", expires: "—" },
];

export const safetyTrend = [
  { month: "Feb", recordable: 3, nearMiss: 18, unsafeActs: 44 },
  { month: "Mar", recordable: 2, nearMiss: 22, unsafeActs: 38 },
  { month: "Apr", recordable: 4, nearMiss: 19, unsafeActs: 41 },
  { month: "May", recordable: 1, nearMiss: 26, unsafeActs: 33 },
  { month: "Jun", recordable: 2, nearMiss: 24, unsafeActs: 29 },
  { month: "Jul", recordable: 1, nearMiss: 27, unsafeActs: 25 },
];

export const environmental = [
  { metric: "GHG Intensity", value: "17.4", unit: "kg CO₂e/boe", target: "18.0", status: "ok" as const },
  { metric: "Flaring Volume", value: "3.2", unit: "MMscf/d", target: "3.5", status: "ok" as const },
  { metric: "Water Recycled", value: "88.6", unit: "%", target: "85.0", status: "ok" as const },
  { metric: "Spill Volume (YTD)", value: "0.4", unit: "bbl", target: "0.0", status: "warn" as const },
  { metric: "NOx Emissions", value: "142", unit: "t/month", target: "150", status: "ok" as const },
];
