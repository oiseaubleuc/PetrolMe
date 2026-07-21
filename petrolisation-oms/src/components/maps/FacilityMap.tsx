"use client";

import { useState } from "react";
import { facilities } from "@/lib/data/facilities";
import { formatCompact } from "@/lib/utils";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { cn } from "@/lib/utils";
import type { Facility } from "@/lib/types";

const statusFill: Record<string, string> = {
  operational: "#2fbf83",
  degraded: "#f5b13d",
  warning: "#f96412",
  critical: "#ef4d5a",
  offline: "#64748b",
  maintenance: "#48a7d6",
};

export function FacilityMap({
  className,
  onSelect,
}: {
  className?: string;
  onSelect?: (f: Facility) => void;
}) {
  const [active, setActive] = useState<string | null>(facilities[0]?.id ?? null);
  const selected = facilities.find((f) => f.id === active) ?? facilities[0];

  return (
    <div className={cn("grid gap-4 lg:grid-cols-[1.4fr_1fr]", className)}>
      <div className="relative overflow-hidden rounded-xl border border-line bg-ink-850/80">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 55% 48%, rgba(22,103,131,0.28), transparent 70%), radial-gradient(ellipse 40% 30% at 30% 60%, rgba(249,100,18,0.08), transparent 60%)",
          }}
        />
        {/* Stylized basin silhouette */}
        <svg viewBox="0 0 100 100" className="relative h-[320px] w-full md:h-[360px]" preserveAspectRatio="xMidYMid meet">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="0.6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M18 28 C28 18, 48 14, 62 20 C78 28, 88 42, 86 58 C84 74, 68 86, 48 88 C30 90, 14 78, 12 58 C10 42, 12 34, 18 28 Z"
            fill="rgba(22,103,131,0.12)"
            stroke="rgba(79,159,184,0.28)"
            strokeWidth="0.4"
          />
          <path
            d="M22 40 C34 32, 52 30, 64 36 C74 42, 78 52, 74 62 C68 74, 48 78, 34 72 C22 66, 16 52, 22 40 Z"
            fill="rgba(11,15,23,0.35)"
            stroke="rgba(148,169,201,0.12)"
            strokeWidth="0.3"
            strokeDasharray="1 1"
          />
          {/* Pipeline corridors */}
          <path
            d="M33 41 L44 52 L50 63 L57 74"
            fill="none"
            stroke="rgba(249,100,18,0.35)"
            strokeWidth="0.45"
            strokeDasharray="1.2 0.8"
          />
          <path
            d="M44 52 L63 34 L72 46"
            fill="none"
            stroke="rgba(79,159,184,0.4)"
            strokeWidth="0.45"
            strokeDasharray="1.2 0.8"
          />
          <path
            d="M26 58 L33 41 L40 22"
            fill="none"
            stroke="rgba(79,159,184,0.28)"
            strokeWidth="0.4"
            strokeDasharray="1 1"
          />

          {facilities.map((f) => {
            const isActive = f.id === active;
            return (
              <g
                key={f.id}
                className="cursor-pointer"
                onClick={() => {
                  setActive(f.id);
                  onSelect?.(f);
                }}
                onMouseEnter={() => setActive(f.id)}
              >
                {isActive && (
                  <circle
                    cx={f.x}
                    cy={f.y}
                    r="4.5"
                    fill="none"
                    stroke={statusFill[f.status]}
                    strokeWidth="0.35"
                    opacity="0.5"
                    className="animate-pulse-soft"
                  />
                )}
                <circle
                  cx={f.x}
                  cy={f.y}
                  r={isActive ? 2.4 : 1.8}
                  fill={statusFill[f.status]}
                  filter="url(#glow)"
                  stroke="rgba(7,10,15,0.8)"
                  strokeWidth="0.35"
                />
                <text
                  x={f.x}
                  y={f.y - 3.2}
                  textAnchor="middle"
                  fill={isActive ? "#f8fafc" : "rgba(148,169,201,0.7)"}
                  fontSize="2.4"
                  fontWeight="600"
                  className="pointer-events-none select-none"
                >
                  {f.code}
                </text>
              </g>
            );
          })}
        </svg>
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          {[
            ["Operational", "#2fbf83"],
            ["Warning", "#f96412"],
            ["Maintenance", "#48a7d6"],
            ["Degraded", "#f5b13d"],
          ].map(([label, color]) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-ink-900/80 px-2 py-1 text-[10px] text-slate-400 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />
              {label}
            </span>
          ))}
        </div>
        <div className="absolute right-3 top-3 rounded-lg border border-line bg-ink-900/80 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.14em] text-slate-500 backdrop-blur">
          Arabian Gulf Basin · Schematic
        </div>
      </div>

      {selected && (
        <div className="flex flex-col justify-between rounded-xl border border-line bg-ink-850/60 p-4">
          <div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="label-muted">{selected.code}</div>
                <h4 className="mt-1 text-base font-semibold text-white">{selected.name}</h4>
                <p className="mt-1 text-xs text-slate-500">
                  {selected.type} · {selected.region}
                </p>
              </div>
              <StatusBadge status={selected.status} pulse={selected.status === "warning"} />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <Stat label="Production" value={`${formatCompact(selected.production)} boe/d`} />
              <Stat label="Capacity" value={`${formatCompact(selected.capacity)} boe/d`} />
              <Stat label="Wells" value={String(selected.wells)} />
              <Stat label="Personnel" value={String(selected.personnel)} />
              <Stat label="Integrity" value={`${selected.integrity}%`} />
              <Stat
                label="Utilization"
                value={`${Math.round((selected.production / Math.max(selected.capacity, 1)) * 100)}%`}
              />
            </div>
          </div>
          <p className="mt-4 text-[11px] leading-relaxed text-slate-600">
            Schematic overview for situational awareness. Coordinates are normalized for the
            Petrolisation OMS demo basin — not geodetic.
          </p>
        </div>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-line bg-ink-900/50 px-3 py-2.5">
      <div className="text-[10px] uppercase tracking-[0.12em] text-slate-500">{label}</div>
      <div className="mt-1 text-sm font-semibold tabular-nums text-white">{value}</div>
    </div>
  );
}
