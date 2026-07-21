"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { statusLabel, statusTone, type BadgeTone } from "@/lib/status";

export function StatusBadge({
  status,
  pulse = false,
  className,
}: {
  status: string;
  pulse?: boolean;
  className?: string;
}) {
  const tone = statusTone(status) as BadgeTone;
  return (
    <Badge tone={tone} dot pulse={pulse && (tone === "crit" || tone === "warn")} className={className}>
      {statusLabel(status)}
    </Badge>
  );
}

export function PriorityBadge({ priority }: { priority: string }) {
  const map: Record<string, BadgeTone> = {
    critical: "crit",
    high: "warn",
    medium: "info",
    low: "neutral",
  };
  return (
    <Badge tone={map[priority] ?? "neutral"} className="capitalize">
      {priority}
    </Badge>
  );
}

export function EmptyHint({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("px-5 py-10 text-center text-sm text-slate-500", className)}>
      {children}
    </div>
  );
}
