import type { InventoryItem } from "@/lib/types";

export const inventory: InventoryItem[] = [
  { id: "iv-1", sku: "SP-BRG-4420", name: "Compressor thrust bearing set", category: "Spare Part", warehouse: "Central WH-01", onHand: 6, reorder: 8, unit: "set", unitCost: 12400, supplier: "Siemens Energy" },
  { id: "iv-2", sku: "CH-CI-0912", name: "Corrosion inhibitor (drum)", category: "Chemical", warehouse: "Nujaym WH-03", onHand: 148, reorder: 60, unit: "drum", unitCost: 640, supplier: "Baker Hughes Chemicals" },
  { id: "iv-3", sku: "SP-SEAL-2201", name: "Mechanical seal cartridge HPX", category: "Spare Part", warehouse: "Ras Faris WH-02", onHand: 3, reorder: 10, unit: "ea", unitCost: 3850, supplier: "Flowserve" },
  { id: "iv-4", sku: "FU-DSL-0001", name: "Marine diesel (bulk)", category: "Fuel", warehouse: "Marsa Tank Farm", onHand: 214000, reorder: 80000, unit: "L", unitCost: 0.82, supplier: "Gulfstream Trading" },
  { id: "iv-5", sku: "CH-DEM-0455", name: "Demulsifier concentrate", category: "Chemical", warehouse: "Nujaym WH-03", onHand: 42, reorder: 50, unit: "IBC", unitCost: 1180, supplier: "SLB Chemistry" },
  { id: "iv-6", sku: "SE-SCBA-0077", name: "SCBA breathing apparatus", category: "Safety Equipment", warehouse: "Central WH-01", onHand: 96, reorder: 40, unit: "ea", unitCost: 2200, supplier: "MSA Safety" },
  { id: "iv-7", sku: "SP-VLV-3390", name: "Pressure relief valve 6in", category: "Spare Part", warehouse: "Halwan WH-04", onHand: 11, reorder: 6, unit: "ea", unitCost: 5600, supplier: "Emerson" },
  { id: "iv-8", sku: "CO-FLT-0210", name: "Coalescer filter element", category: "Consumable", warehouse: "Safiyah WH-05", onHand: 28, reorder: 40, unit: "ea", unitCost: 320, supplier: "Pall Corporation" },
  { id: "iv-9", sku: "SP-IMP-1180", name: "Pump impeller GSG-80", category: "Spare Part", warehouse: "Halwan WH-04", onHand: 2, reorder: 4, unit: "ea", unitCost: 7400, supplier: "Sulzer" },
  { id: "iv-10", sku: "CH-SCV-0733", name: "Scale inhibitor (drum)", category: "Chemical", warehouse: "Ras Faris WH-02", onHand: 220, reorder: 90, unit: "drum", unitCost: 520, supplier: "Halliburton" },
];

export const inventoryKpis = {
  skuCount: 12840,
  stockValue: 84600000,
  lowStock: 34,
  criticalStock: 7,
  openPOs: 62,
  turnover: 4.2,
  fillRate: 97.8,
};

export const purchaseOrders = [
  { id: "PO-99214", supplier: "Flowserve", items: 4, value: 62400, status: "in-transit", eta: "2026-07-24" },
  { id: "PO-99208", supplier: "Siemens Energy", items: 2, value: 148000, status: "approved", eta: "2026-08-01" },
  { id: "PO-99201", supplier: "SLB Chemistry", items: 9, value: 34200, status: "delivered", eta: "2026-07-18" },
  { id: "PO-99195", supplier: "MSA Safety", items: 12, value: 28800, status: "pending-approval", eta: "—" },
  { id: "PO-99188", supplier: "Emerson", items: 3, value: 21600, status: "in-transit", eta: "2026-07-23" },
];

export const stockByCategory = [
  { category: "Spare Parts", value: 38.2 },
  { category: "Chemicals", value: 21.4 },
  { category: "Fuel", value: 12.8 },
  { category: "Safety Equipment", value: 7.6 },
  { category: "Consumables", value: 4.6 },
];
