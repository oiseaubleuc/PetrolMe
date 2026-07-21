import { cn } from "@/lib/utils";
import { Sparkline } from "@/components/charts/Sparkline";
import { Trend } from "./Trend";

export interface KpiCardProps {
  label: string;
  value: string;
  unit?: string;
  delta?: number;
  goodWhenUp?: boolean;
  spark?: number[];
  sparkColor?: string;
  icon?: React.ReactNode;
  caption?: string;
  className?: string;
}

export function KpiCard({
  label,
  value,
  unit,
  delta,
  goodWhenUp = true,
  spark,
  sparkColor = "#4f9fb8",
  icon,
  caption,
  className,
}: KpiCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-line bg-ink-900/60 p-4 transition-colors hover:border-line-strong",
        className
      )}
    >
      <div className="pointer-events-none absolute -right-6 -top-10 h-24 w-24 rounded-full bg-petro-500/5 blur-2xl transition-opacity group-hover:bg-flare-500/10" />
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          {icon && (
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-line bg-white/[0.02] text-petro-300">
              {icon}
            </span>
          )}
          <span className="label-muted">{label}</span>
        </div>
        {typeof delta === "number" && (
          <Trend value={delta} goodWhenUp={goodWhenUp} />
        )}
      </div>

      <div className="mt-3 flex items-end gap-1.5">
        <span className="stat-value text-2xl leading-none">{value}</span>
        {unit && <span className="mb-0.5 text-xs font-medium text-slate-500">{unit}</span>}
      </div>

      <div className="mt-3 flex items-end justify-between gap-3">
        {caption ? (
          <span className="text-[11px] text-slate-500">{caption}</span>
        ) : (
          <span />
        )}
        {spark && spark.length > 1 && (
          <Sparkline data={spark} stroke={sparkColor} width={92} height={30} />
        )}
      </div>
    </div>
  );
}
