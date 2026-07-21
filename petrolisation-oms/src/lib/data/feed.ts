import type { ActivityEntry, AlertEntry, NotificationEntry } from "@/lib/types";

export const activities: ActivityEntry[] = [
  { id: "a1", actor: "Omar Haddad", action: "acknowledged critical alert on", target: "CMP-AMH-114", module: "Assets", minutesAgo: 4 },
  { id: "a2", actor: "AI Assistant", action: "generated predictive recommendation for", target: "CMP-SFY-088", module: "Maintenance", minutesAgo: 11 },
  { id: "a3", actor: "Sara Meyer", action: "closed work order", target: "WO-24796", module: "Maintenance", minutesAgo: 26 },
  { id: "a4", actor: "Isabel Cruz", action: "logged environmental incident", target: "INC-3312", module: "HSE", minutesAgo: 48 },
  { id: "a5", actor: "Fatima Al-Sayed", action: "approved purchase order", target: "PO-99208", module: "Inventory", minutesAgo: 72 },
  { id: "a6", actor: "Ahmed Farouk", action: "submitted shift report for", target: "Ras Faris — Night", module: "Operations", minutesAgo: 95 },
  { id: "a7", actor: "System", action: "completed nightly data sync across", target: "8 facilities", module: "System", minutesAgo: 140 },
];

export const alerts: AlertEntry[] = [
  { id: "al-c1", title: "High vibration — Booster Compressor B2", detail: "Overall velocity 8.4 mm/s exceeds alarm threshold (7.1 mm/s).", severity: "critical", facility: "Safiyah Deepwater Platform", minutesAgo: 7, acknowledged: false },
  { id: "al-c2", title: "Separator level deviation", detail: "V-205 interface level 12% above setpoint for 18 min.", severity: "high", facility: "Nujaym Gas Processing Plant", minutesAgo: 23, acknowledged: false },
  { id: "al-c3", title: "Flare gas exceedance cleared", detail: "SFY flare returned within permitted limit.", severity: "medium", facility: "Safiyah Deepwater Platform", minutesAgo: 41, acknowledged: true },
  { id: "al-c4", title: "Low stock — mechanical seal cartridge", detail: "SP-SEAL-2201 at 3 units, below reorder point of 10.", severity: "medium", facility: "Ras Faris WH-02", minutesAgo: 66, acknowledged: false },
  { id: "al-c5", title: "Generator D4 offline for overhaul", detail: "Planned outage in progress — WO-24788.", severity: "low", facility: "Zubara Compression Station", minutesAgo: 120, acknowledged: true },
];

export const notifications: NotificationEntry[] = [
  { id: "n1", title: "Critical equipment alert", body: "Booster Compressor B2 vibration exceeds alarm limit at Safiyah.", kind: "critical", minutesAgo: 7, read: false },
  { id: "n2", title: "Predictive maintenance", body: "AI predicts bearing failure on CMP-SFY-088 within 18–26 days.", kind: "maintenance", minutesAgo: 11, read: false },
  { id: "n3", title: "Low inventory", body: "Mechanical seal cartridge (SP-SEAL-2201) below reorder point.", kind: "inventory", minutesAgo: 66, read: false },
  { id: "n4", title: "Safety notice", body: "Hot work permit PTW-8841 approved for Halwan Unit 200.", kind: "safety", minutesAgo: 88, read: true },
  { id: "n5", title: "Report ready", body: "Executive production report for July MTD is available.", kind: "system", minutesAgo: 130, read: true },
];

export const weather = {
  location: "Arabian Gulf · Al-Maha",
  condition: "Clear",
  temp: 38,
  feels: 42,
  wind: 14,
  windDir: "NW",
  humidity: 61,
  waveHeight: 1.2,
  visibility: 12,
  advisory: "Sea state slight — normal operations",
};

export const shiftBoard = {
  shift: "Day Shift · A Crew",
  supervisor: "Omar Haddad",
  onDuty: 486,
  offshore: 318,
  onshore: 168,
  handover: "18:00",
};
