export type Status = "operational" | "degraded" | "warning" | "critical" | "offline" | "maintenance";

export type Priority = "low" | "medium" | "high" | "critical";

export interface Organization {
  id: string;
  name: string;
  short: string;
  region: string;
}

export interface Facility {
  id: string;
  name: string;
  code: string;
  type: "Offshore Platform" | "Onshore Field" | "Refinery" | "Terminal" | "Compression Station" | "Processing Plant";
  region: string;
  country: string;
  // Normalized map coordinates in 0..100 space over a stylized Gulf basin.
  x: number;
  y: number;
  status: Status;
  production: number; // boe/d
  capacity: number;
  wells: number;
  personnel: number;
  integrity: number; // %
}

export interface Asset {
  id: string;
  tag: string;
  name: string;
  category: "Well" | "Pipeline" | "Storage Tank" | "Compressor" | "Pump" | "Generator" | "Substation" | "Separator" | "Turbine";
  facility: string;
  manufacturer: string;
  model: string;
  serial: string;
  installed: string;
  status: Status;
  health: number; // %
  criticality: Priority;
  lastMaintenance: string;
  nextMaintenance: string;
  runtimeHours: number;
}

export interface WorkOrder {
  id: string;
  title: string;
  type: "Preventive" | "Corrective" | "Predictive" | "Inspection";
  asset: string;
  facility: string;
  priority: Priority;
  status: "open" | "in-progress" | "on-hold" | "completed" | "overdue";
  assignee: string;
  due: string;
  progress: number;
  cost: number;
}

export interface Incident {
  id: string;
  title: string;
  category: "Process Safety" | "Occupational" | "Environmental" | "Near Miss" | "Security";
  severity: Priority;
  facility: string;
  status: "open" | "investigating" | "action-pending" | "closed";
  reported: string;
  owner: string;
}

export interface InventoryItem {
  id: string;
  sku: string;
  name: string;
  category: "Spare Part" | "Chemical" | "Fuel" | "Consumable" | "Safety Equipment";
  warehouse: string;
  onHand: number;
  reorder: number;
  unit: string;
  unitCost: number;
  supplier: string;
}

export interface Vehicle {
  id: string;
  code: string;
  type: string;
  driver: string;
  status: "en-route" | "idle" | "loading" | "maintenance";
  origin: string;
  destination: string;
  cargo: string;
  eta: string;
  progress: number;
}

export interface Person {
  id: string;
  name: string;
  role: string;
  department: string;
  site: string;
  status: "active" | "on-leave" | "field";
  access: "Executive" | "Manager" | "Engineer" | "Operator" | "Auditor";
  initials: string;
}

export interface ActivityEntry {
  id: string;
  actor: string;
  action: string;
  target: string;
  module: string;
  minutesAgo: number;
}

export interface AlertEntry {
  id: string;
  title: string;
  detail: string;
  severity: Priority;
  facility: string;
  minutesAgo: number;
  acknowledged: boolean;
}

export interface NotificationEntry {
  id: string;
  title: string;
  body: string;
  kind: "critical" | "maintenance" | "inventory" | "safety" | "system";
  minutesAgo: number;
  read: boolean;
}
