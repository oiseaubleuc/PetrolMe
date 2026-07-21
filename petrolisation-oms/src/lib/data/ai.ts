export interface AiMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  time: string;
}

export interface AiInsight {
  id: string;
  title: string;
  detail: string;
  module: string;
  confidence: number;
  impact: "high" | "medium" | "low";
}

export const aiInsights: AiInsight[] = [
  {
    id: "ins-1",
    title: "Safiyah production at risk (−4.8 Mbbl/d)",
    detail:
      "Vibration trajectory on CMP-SFY-088 correlates with a 72% probability of unplanned trip within 21 days. Early intervention preserves ~$390K/day margin.",
    module: "Predictive Maintenance",
    confidence: 92,
    impact: "high",
  },
  {
    id: "ins-2",
    title: "Water injection under-delivery at Ras Faris",
    detail:
      "Injection shortfall of 3.1% vs. voidage replacement target. Model projects 1.4% oil decline over 60 days if uncorrected.",
    module: "Production Forecasting",
    confidence: 86,
    impact: "medium",
  },
  {
    id: "ins-3",
    title: "Spare-part bottleneck: seal cartridges",
    detail:
      "Lead time for SP-SEAL-2201 (Flowserve) has extended to 18 days. Three critical pumps share this SKU — recommend expedited PO.",
    module: "Risk Analysis",
    confidence: 94,
    impact: "high",
  },
  {
    id: "ins-4",
    title: "Optimal flare reduction window — Halwan",
    detail:
      "Scheduled CDU rate cut on Jul 24 creates a low-risk window to complete flare tip inspection, avoiding a separate shutdown.",
    module: "Recommendations",
    confidence: 81,
    impact: "low",
  },
];

export const aiConversation: AiMessage[] = [
  {
    id: "m1",
    role: "user",
    content: "Which assets pose the highest production risk this week?",
    time: "18:42",
  },
  {
    id: "m2",
    role: "assistant",
    content:
      "Three assets dominate this week’s risk profile:\n\n1. **CMP-SFY-088** (Safiyah) — critical vibration trend, 92% confidence of trip within 18–26 days. Estimated exposure: 4.8 Mbbl/d.\n2. **SEP-NJM-205** (Nujaym) — level control hysteresis degrading separation efficiency by ~2.3%.\n3. **PMP-RFS-338** (Ras Faris) — emerging cavitation signature; seal life projected −30%.\n\nRecommended sequence: inspect SFY bearing package first, then schedule LV-205 overhaul during the next Nujaym turnaround window.",
    time: "18:42",
  },
  {
    id: "m3",
    role: "user",
    content: "Draft a work order for the Safiyah compressor.",
    time: "18:44",
  },
  {
    id: "m4",
    role: "assistant",
    content:
      "Draft ready for review:\n\n• **Type:** Predictive\n• **Asset:** CMP-SFY-088 — Booster Compressor B2\n• **Priority:** Critical\n• **Scope:** Bearing inspection, spectral analysis, surge control verification\n• **Assignee suggestion:** Yusuf Rahman\n• **Target window:** 2026-07-22 → 2026-07-23\n• **Estimated cost:** $33,400\n\nShall I create WO-24821 and notify the Safiyah maintenance lead?",
    time: "18:44",
  },
];

export const aiCapabilities = [
  { title: "Predictive Maintenance", detail: "Failure windows from vibration, temp and duty-cycle signals" },
  { title: "Production Forecasting", detail: "30–180 day outlook with confidence bands" },
  { title: "Failure Detection", detail: "Anomaly scoring across 1,284 monitored assets" },
  { title: "Risk Analysis", detail: "Cross-module exposure on production, HSE and cost" },
  { title: "Natural Language Search", detail: "Query assets, incidents and reports in plain English" },
  { title: "Recommendations", detail: "Prioritized actions ranked by margin and risk" },
];
