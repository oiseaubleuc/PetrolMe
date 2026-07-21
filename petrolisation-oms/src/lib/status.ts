import type { Priority, Status } from "@/lib/types";

export type BadgeTone = "neutral" | "ok" | "warn" | "crit" | "info" | "flare";

export function statusTone(status: Status | string): BadgeTone {
  switch (status) {
    case "operational":
    case "active":
    case "completed":
    case "closed":
    case "delivered":
    case "ok":
      return "ok";
    case "degraded":
    case "warning":
    case "warn":
    case "on-hold":
    case "pending":
    case "pending-approval":
    case "suspended":
    case "investigating":
    case "action-pending":
      return "warn";
    case "critical":
    case "offline":
    case "overdue":
    case "crit":
      return "crit";
    case "maintenance":
    case "in-progress":
    case "en-route":
    case "loading":
    case "dispatched":
    case "in-transit":
    case "approved":
    case "scheduled":
    case "open":
      return "info";
    default:
      return "neutral";
  }
}

export function priorityTone(priority: Priority): BadgeTone {
  switch (priority) {
    case "critical":
      return "crit";
    case "high":
      return "warn";
    case "medium":
      return "info";
    default:
      return "neutral";
  }
}

export function statusLabel(status: string): string {
  return status
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function healthTone(health: number): BadgeTone {
  if (health >= 90) return "ok";
  if (health >= 75) return "info";
  if (health >= 60) return "warn";
  return "crit";
}

export function meterToneFromHealth(health: number): "ok" | "warn" | "crit" | "petro" {
  if (health >= 90) return "ok";
  if (health >= 75) return "petro";
  if (health >= 60) return "warn";
  return "crit";
}
