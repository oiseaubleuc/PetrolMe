import { cn } from "@/lib/utils";

type Tone = "petro" | "flare" | "ok" | "warn" | "crit";

const track: Record<Tone, string> = {
  petro: "bg-petro-400",
  flare: "bg-flare-500",
  ok: "bg-status-ok",
  warn: "bg-status-warn",
  crit: "bg-status-crit",
};

/** Horizontal progress meter with an optional label row. */
export function Meter({
  value,
  tone = "petro",
  label,
  showValue = false,
  className,
}: {
  value: number;
  tone?: Tone;
  label?: string;
  showValue?: boolean;
  className?: string;
}) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className={cn("w-full", className)}>
      {(label || showValue) && (
        <div className="mb-1.5 flex items-center justify-between text-xs">
          {label && <span className="text-slate-400">{label}</span>}
          {showValue && (
            <span className="font-medium tabular-nums text-slate-200">{pct.toFixed(0)}%</span>
          )}
        </div>
      )}
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.05]">
        <div
          className={cn("h-full rounded-full transition-all", track[tone])}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
