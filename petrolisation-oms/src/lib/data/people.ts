import type { Person } from "@/lib/types";

export const people: Person[] = [
  { id: "u-1", name: "Dr. Amina Khalil", role: "Chief Operations Officer", department: "Executive", site: "HQ — Dubai", status: "active", access: "Executive", initials: "AK" },
  { id: "u-2", name: "Omar Haddad", role: "Offshore Operations Manager", department: "Operations", site: "Al-Maha Complex", status: "field", access: "Manager", initials: "OH" },
  { id: "u-3", name: "Lena Fischer", role: "Process Safety Engineer", department: "HSE", site: "Nujaym Plant", status: "active", access: "Engineer", initials: "LF" },
  { id: "u-4", name: "Yusuf Rahman", role: "Reliability Engineer", department: "Maintenance", site: "Safiyah Platform", status: "field", access: "Engineer", initials: "YR" },
  { id: "u-5", name: "Sara Meyer", role: "Maintenance Supervisor", department: "Maintenance", site: "Halwan Refinery", status: "active", access: "Manager", initials: "SM" },
  { id: "u-6", name: "Khalid Nasser", role: "Field Technician Lead", department: "Maintenance", site: "Zubara Station", status: "field", access: "Operator", initials: "KN" },
  { id: "u-7", name: "Isabel Cruz", role: "HSE Coordinator", department: "HSE", site: "Marsa Terminal", status: "active", access: "Engineer", initials: "IC" },
  { id: "u-8", name: "Ahmed Farouk", role: "Production Operator", department: "Operations", site: "Ras Faris Field", status: "field", access: "Operator", initials: "AF" },
  { id: "u-9", name: "Robert Lindqvist", role: "Internal Auditor", department: "Compliance", site: "HQ — Dubai", status: "active", access: "Auditor", initials: "RL" },
  { id: "u-10", name: "Fatima Al-Sayed", role: "Supply Chain Manager", department: "Logistics", site: "Marsa Terminal", status: "on-leave", access: "Manager", initials: "FA" },
];

export const currentUser = people[0];

export const departments = [
  { name: "Operations", headcount: 642, sites: 6 },
  { name: "Maintenance", headcount: 388, sites: 8 },
  { name: "HSE", headcount: 124, sites: 8 },
  { name: "Logistics", headcount: 210, sites: 4 },
  { name: "Engineering", headcount: 176, sites: 3 },
  { name: "Compliance", headcount: 48, sites: 1 },
  { name: "Executive", headcount: 22, sites: 1 },
];

export const roles = [
  { name: "Executive", users: 22, permissions: "Full read · Approve · Configure" },
  { name: "Manager", users: 96, permissions: "Read · Write · Approve (scoped)" },
  { name: "Engineer", users: 342, permissions: "Read · Write (scoped)" },
  { name: "Operator", users: 918, permissions: "Read · Log entries" },
  { name: "Auditor", users: 34, permissions: "Read-only · Export" },
];

export const auditLog = [
  { id: "al-1", user: "Omar Haddad", action: "Approved work order WO-24817", ip: "10.2.14.88", time: "19:04", severity: "info" as const },
  { id: "al-2", user: "Robert Lindqvist", action: "Exported HSE compliance report Q2", ip: "10.0.4.21", time: "18:41", severity: "info" as const },
  { id: "al-3", user: "system", action: "Failed login attempt — locked account", ip: "203.0.113.44", time: "18:22", severity: "warn" as const },
  { id: "al-4", user: "Sara Meyer", action: "Modified PM schedule for TRB-HLW-071", ip: "10.3.9.12", time: "17:58", severity: "info" as const },
  { id: "al-5", user: "Fatima Al-Sayed", action: "Created purchase order PO-99208", ip: "10.1.7.55", time: "17:30", severity: "info" as const },
  { id: "al-6", user: "system", action: "Role permissions updated for 'Operator'", ip: "10.0.0.2", time: "16:12", severity: "warn" as const },
];
