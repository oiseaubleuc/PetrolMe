import type { Asset } from "@/lib/types";

export const assets: Asset[] = [
  {
    id: "as-1", tag: "CMP-AMH-114", name: "Gas Export Compressor A", category: "Compressor",
    facility: "Al-Maha Offshore Complex", manufacturer: "Siemens Energy", model: "STC-SV 08-4",
    serial: "SE-8842193", installed: "2019-03-12", status: "operational", health: 96,
    criticality: "critical", lastMaintenance: "2026-05-28", nextMaintenance: "2026-08-30", runtimeHours: 58240,
  },
  {
    id: "as-2", tag: "TRB-HLW-071", name: "Steam Turbine G2", category: "Turbine",
    facility: "Halwan Refinery", manufacturer: "GE Vernova", model: "9HA.02",
    serial: "GE-7714902", installed: "2020-11-04", status: "operational", health: 94,
    criticality: "critical", lastMaintenance: "2026-06-15", nextMaintenance: "2026-09-15", runtimeHours: 41220,
  },
  {
    id: "as-3", tag: "PMP-RFS-338", name: "Crude Transfer Pump 3", category: "Pump",
    facility: "Ras Faris Onshore Field", manufacturer: "Flowserve", model: "HPX-6000",
    serial: "FS-2290187", installed: "2018-07-22", status: "degraded", health: 78,
    criticality: "high", lastMaintenance: "2026-04-02", nextMaintenance: "2026-07-25", runtimeHours: 67890,
  },
  {
    id: "as-4", tag: "SEP-NJM-205", name: "3-Phase Separator V-205", category: "Separator",
    facility: "Nujaym Gas Processing Plant", manufacturer: "Schlumberger", model: "CYNARA-2400",
    serial: "SLB-5541028", installed: "2017-09-18", status: "warning", health: 71,
    criticality: "high", lastMaintenance: "2026-03-19", nextMaintenance: "2026-07-22", runtimeHours: 74510,
  },
  {
    id: "as-5", tag: "WEL-RFS-A17", name: "Producer Well A-17", category: "Well",
    facility: "Ras Faris Onshore Field", manufacturer: "Baker Hughes", model: "ESP FLEXPump6",
    serial: "BH-3320981", installed: "2021-01-30", status: "operational", health: 91,
    criticality: "medium", lastMaintenance: "2026-06-01", nextMaintenance: "2026-10-01", runtimeHours: 32100,
  },
  {
    id: "as-6", tag: "TNK-MRS-012", name: "Crude Storage Tank 12", category: "Storage Tank",
    facility: "Marsa Export Terminal", manufacturer: "McDermott", model: "API-650 FR",
    serial: "MC-1180440", installed: "2016-05-11", status: "operational", health: 88,
    criticality: "medium", lastMaintenance: "2026-02-14", nextMaintenance: "2026-08-14", runtimeHours: 0,
  },
  {
    id: "as-7", tag: "GEN-ZBR-044", name: "Emergency Generator D4", category: "Generator",
    facility: "Zubara Compression Station", manufacturer: "Caterpillar", model: "3516E",
    serial: "CAT-9902117", installed: "2019-12-08", status: "maintenance", health: 64,
    criticality: "high", lastMaintenance: "2026-07-18", nextMaintenance: "2026-07-21", runtimeHours: 21980,
  },
  {
    id: "as-8", tag: "PIP-TRK-MRS", name: "Marsa Export Trunkline", category: "Pipeline",
    facility: "Marsa Export Terminal", manufacturer: "Tenaris", model: "42in X70",
    serial: "TN-6650223", installed: "2015-08-27", status: "operational", health: 97,
    criticality: "critical", lastMaintenance: "2026-05-05", nextMaintenance: "2026-11-05", runtimeHours: 0,
  },
  {
    id: "as-9", tag: "SUB-HLW-006", name: "132kV Substation Bay 6", category: "Substation",
    facility: "Halwan Refinery", manufacturer: "ABB", model: "UniGear ZS1",
    serial: "ABB-4471905", installed: "2018-02-19", status: "operational", health: 93,
    criticality: "high", lastMaintenance: "2026-04-28", nextMaintenance: "2026-10-28", runtimeHours: 0,
  },
  {
    id: "as-10", tag: "CMP-SFY-088", name: "Booster Compressor B2", category: "Compressor",
    facility: "Safiyah Deepwater Platform", manufacturer: "Baker Hughes", model: "PGT25+G4",
    serial: "BH-7781340", installed: "2020-06-14", status: "warning", health: 74,
    criticality: "critical", lastMaintenance: "2026-05-20", nextMaintenance: "2026-07-23", runtimeHours: 44870,
  },
  {
    id: "as-11", tag: "WEL-AMH-C09", name: "Subsea Producer C-09", category: "Well",
    facility: "Al-Maha Offshore Complex", manufacturer: "TechnipFMC", model: "Subsea XT",
    serial: "TF-2245119", installed: "2022-03-05", status: "operational", health: 95,
    criticality: "high", lastMaintenance: "2026-06-22", nextMaintenance: "2026-12-22", runtimeHours: 18640,
  },
  {
    id: "as-12", tag: "PMP-HLW-419", name: "Feed Charge Pump 9", category: "Pump",
    facility: "Halwan Refinery", manufacturer: "Sulzer", model: "GSG-80",
    serial: "SZ-3390871", installed: "2019-10-01", status: "operational", health: 89,
    criticality: "medium", lastMaintenance: "2026-05-30", nextMaintenance: "2026-09-30", runtimeHours: 39220,
  },
];

export const assetHealthDistribution = [
  { band: "Excellent (90-100%)", count: 742, tone: "#2fbf83" },
  { band: "Good (75-89%)", count: 386, tone: "#48a7d6" },
  { band: "Fair (60-74%)", count: 118, tone: "#f5b13d" },
  { band: "Poor (< 60%)", count: 38, tone: "#ef4d5a" },
];

export const assetsByCategory = [
  { category: "Wells", count: 464 },
  { category: "Pumps", count: 218 },
  { category: "Compressors", count: 96 },
  { category: "Storage Tanks", count: 74 },
  { category: "Separators", count: 88 },
  { category: "Turbines", count: 42 },
  { category: "Generators", count: 58 },
  { category: "Substations", count: 34 },
  { category: "Pipelines", count: 210 },
];
