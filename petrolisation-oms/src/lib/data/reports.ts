export interface ReportRecord {
  id: string;
  name: string;
  category: "Executive" | "Operational" | "Maintenance" | "HSE" | "Financial" | "Environmental";
  format: "PDF" | "Excel" | "Both";
  schedule: "Daily" | "Weekly" | "Monthly" | "On-demand";
  lastRun: string;
  owner: string;
  status: "ready" | "generating" | "failed";
}

export const reports: ReportRecord[] = [
  {
    id: "RPT-1001",
    name: "Executive Production Summary — MTD",
    category: "Executive",
    format: "PDF",
    schedule: "Daily",
    lastRun: "2026-07-21 06:00",
    owner: "Dr. Amina Khalil",
    status: "ready",
  },
  {
    id: "RPT-1008",
    name: "Facility Efficiency & Downtime Ledger",
    category: "Operational",
    format: "Both",
    schedule: "Daily",
    lastRun: "2026-07-21 06:15",
    owner: "Omar Haddad",
    status: "ready",
  },
  {
    id: "RPT-1024",
    name: "Maintenance Cost & Compliance Pack",
    category: "Maintenance",
    format: "Excel",
    schedule: "Weekly",
    lastRun: "2026-07-20 07:00",
    owner: "Sara Meyer",
    status: "ready",
  },
  {
    id: "RPT-1031",
    name: "HSE Incident & Permit Digest",
    category: "HSE",
    format: "PDF",
    schedule: "Weekly",
    lastRun: "2026-07-20 07:30",
    owner: "Isabel Cruz",
    status: "ready",
  },
  {
    id: "RPT-1042",
    name: "Lifting Cost & Realized Price Analysis",
    category: "Financial",
    format: "Both",
    schedule: "Monthly",
    lastRun: "2026-07-01 08:00",
    owner: "Finance Ops",
    status: "ready",
  },
  {
    id: "RPT-1055",
    name: "Carbon Intensity & Flaring Report",
    category: "Environmental",
    format: "PDF",
    schedule: "Monthly",
    lastRun: "2026-07-01 08:30",
    owner: "Lena Fischer",
    status: "generating",
  },
  {
    id: "RPT-1060",
    name: "Predictive Maintenance Exception List",
    category: "Maintenance",
    format: "Excel",
    schedule: "Daily",
    lastRun: "2026-07-21 05:45",
    owner: "Yusuf Rahman",
    status: "ready",
  },
  {
    id: "RPT-1072",
    name: "Board Pack — Operations Snapshot",
    category: "Executive",
    format: "PDF",
    schedule: "On-demand",
    lastRun: "2026-07-18 14:20",
    owner: "Dr. Amina Khalil",
    status: "ready",
  },
];

export const reportKpis = {
  scheduled: 48,
  generatedToday: 16,
  subscribers: 214,
  avgRenderSec: 4.2,
};
