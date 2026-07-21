import type { Vehicle } from "@/lib/types";

export const fleet: Vehicle[] = [
  { id: "vh-1", code: "TKR-118", type: "Crude Tanker Truck", driver: "Mahmoud Saleh", status: "en-route", origin: "Ras Faris Field", destination: "Marsa Terminal", cargo: "Crude · 34,000 L", eta: "01:20", progress: 68 },
  { id: "vh-2", code: "FLT-042", type: "Flatbed (Heavy)", driver: "Pieter De Vries", status: "loading", origin: "Central WH-01", destination: "Zubara Station", cargo: "Generator D4 parts", eta: "04:10", progress: 12 },
  { id: "vh-3", code: "CHM-207", type: "Chemical Tanker", driver: "Nadia Bakr", status: "en-route", origin: "Nujaym Plant", destination: "Ras Faris Field", cargo: "Demulsifier · 6 IBC", eta: "00:45", progress: 82 },
  { id: "vh-4", code: "PSV-311", type: "Platform Supply Vessel", driver: "Capt. R. Olsen", status: "en-route", origin: "Marsa Terminal", destination: "Al-Maha Complex", cargo: "Deck cargo · 42 t", eta: "06:30", progress: 40 },
  { id: "vh-5", code: "BUS-076", type: "Personnel Carrier", driver: "Hassan Idris", status: "idle", origin: "Halwan Camp", destination: "Halwan Refinery", cargo: "Crew change · 24 pax", eta: "—", progress: 0 },
  { id: "vh-6", code: "TKR-125", type: "Fuel Bowser", driver: "Grace Mensah", status: "maintenance", origin: "Marsa Terminal", destination: "—", cargo: "Out of service", eta: "—", progress: 0 },
  { id: "vh-7", code: "FLT-058", type: "Lowboy Trailer", driver: "Tom Becker", status: "en-route", origin: "Halwan WH-04", destination: "Safiyah Quay", cargo: "Impeller + seals", eta: "02:05", progress: 55 },
];

export const logisticsKpis = {
  activeShipments: 42,
  fleetSize: 168,
  utilization: 84.6,
  onTimeDelivery: 96.1,
  fuelDeliveredToday: 486000,
  kmToday: 12480,
};

export const deliverySchedule = [
  { id: "TR-5521", type: "Fuel Delivery", to: "Zubara Station", window: "06:00 – 08:00", status: "scheduled" },
  { id: "TR-5518", type: "Spare Parts", to: "Safiyah Platform", window: "08:30 – 10:00", status: "dispatched" },
  { id: "TR-5514", type: "Crew Change", to: "Al-Maha Complex", window: "10:00 – 11:00", status: "scheduled" },
  { id: "TR-5509", type: "Chemical Resupply", to: "Ras Faris Field", window: "12:00 – 13:30", status: "loading" },
  { id: "TR-5502", type: "Waste Removal", to: "Halwan Refinery", window: "14:00 – 15:00", status: "scheduled" },
];
