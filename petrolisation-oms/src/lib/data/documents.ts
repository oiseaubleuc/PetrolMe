export interface DocumentRecord {
  id: string;
  title: string;
  type: "Manual" | "Certificate" | "Inspection" | "Drawing" | "Procedure" | "Report";
  asset?: string;
  facility: string;
  version: string;
  revised: string;
  size: string;
  owner: string;
  status: "current" | "under-review" | "archived";
}

export const documents: DocumentRecord[] = [
  {
    id: "DOC-44102",
    title: "Gas Export Compressor A — Operation & Maintenance Manual",
    type: "Manual",
    asset: "CMP-AMH-114",
    facility: "Al-Maha Offshore Complex",
    version: "v4.2",
    revised: "2026-03-12",
    size: "18.4 MB",
    owner: "Engineering",
    status: "current",
  },
  {
    id: "DOC-44088",
    title: "API-653 Internal Inspection — Crude Storage Tank 12",
    type: "Inspection",
    asset: "TNK-MRS-012",
    facility: "Marsa Export Terminal",
    version: "v1.0",
    revised: "2026-07-08",
    size: "6.1 MB",
    owner: "Integrity",
    status: "under-review",
  },
  {
    id: "DOC-44071",
    title: "Pressure Relief Valve Certification — SEP-NJM-205",
    type: "Certificate",
    asset: "SEP-NJM-205",
    facility: "Nujaym Gas Processing Plant",
    version: "v2.1",
    revised: "2026-05-19",
    size: "1.2 MB",
    owner: "HSE",
    status: "current",
  },
  {
    id: "DOC-44055",
    title: "Halwan Refinery — P&ID Unit 200 CDU",
    type: "Drawing",
    facility: "Halwan Refinery",
    version: "Rev H",
    revised: "2025-11-30",
    size: "42.8 MB",
    owner: "Engineering",
    status: "current",
  },
  {
    id: "DOC-44042",
    title: "Safiyah Deepwater — Emergency Response Procedure",
    type: "Procedure",
    facility: "Safiyah Deepwater Platform",
    version: "v6.0",
    revised: "2026-01-15",
    size: "3.7 MB",
    owner: "HSE",
    status: "current",
  },
  {
    id: "DOC-44028",
    title: "Steam Turbine G2 — Warranty & Service Agreement",
    type: "Certificate",
    asset: "TRB-HLW-071",
    facility: "Halwan Refinery",
    version: "v1.3",
    revised: "2024-11-04",
    size: "2.4 MB",
    owner: "Procurement",
    status: "current",
  },
  {
    id: "DOC-44011",
    title: "Marsa Export Trunkline — Integrity Management Report Q2",
    type: "Report",
    asset: "PIP-TRK-MRS",
    facility: "Marsa Export Terminal",
    version: "v1.0",
    revised: "2026-07-02",
    size: "11.9 MB",
    owner: "Integrity",
    status: "current",
  },
  {
    id: "DOC-43990",
    title: "Subsea Tree C-09 — Installation As-Built Drawings",
    type: "Drawing",
    asset: "WEL-AMH-C09",
    facility: "Al-Maha Offshore Complex",
    version: "Rev C",
    revised: "2022-06-18",
    size: "28.2 MB",
    owner: "Engineering",
    status: "archived",
  },
];

export const documentKpis = {
  total: 18420,
  revisedThisMonth: 146,
  underReview: 38,
  certificatesExpiring: 12,
};
