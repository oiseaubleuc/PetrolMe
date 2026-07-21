import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Directional delta indicator. `goodWhenUp` inverts coloring for
 * metrics where a decrease is favorable (e.g. downtime, emissions).
 */
export function Trend({
  value,
  goodWhenUp = true,
  suffix = "%",
  className,
}: {
  value: number;
  goodWhenUp?: boolean;
  suffix?: string;
  className?: string;
}) {
  const up = value > 0;
  const flat = value === 0;
  const positive = goodWhenUp ? up : !up;
  const Icon = flat ? Minus : up ? ArrowUpRight : ArrowDownRight;
  const tone = flat
    ? "text-slate-500"
    : positive
      ? "text-status-ok"
      : "text-status-crit";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-0.5 text-xs font-semibold tabular-nums",
        tone,
        className
      )}
    >
      <Icon className="h-3.5 w-3.5" strokeWidth={2.4} />
      {Math.abs(value).toFixed(1)}
      {suffix}
    </span>
  );
}
