import { cn } from "@/lib/utils";

type Tone = "neutral" | "ok" | "warn" | "crit" | "info" | "flare";

const toneMap: Record<Tone, string> = {
  neutral: "border-line text-slate-300 bg-white/[0.02]",
  ok: "border-status-ok/30 text-status-ok bg-status-ok/10",
  warn: "border-status-warn/30 text-status-warn bg-status-warn/10",
  crit: "border-status-crit/30 text-status-crit bg-status-crit/10",
  info: "border-status-info/30 text-status-info bg-status-info/10",
  flare: "border-flare-500/30 text-flare-300 bg-flare-500/10",
};

const dotMap: Record<Tone, string> = {
  neutral: "bg-slate-400",
  ok: "bg-status-ok",
  warn: "bg-status-warn",
  crit: "bg-status-crit",
  info: "bg-status-info",
  flare: "bg-flare-400",
};

export function Badge({
  tone = "neutral",
  dot = false,
  pulse = false,
  className,
  children,
}: {
  tone?: Tone;
  dot?: boolean;
  pulse?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span className={cn("chip", toneMap[tone], className)}>
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          {pulse && (
            <span
              className={cn(
                "absolute inline-flex h-full w-full animate-ping rounded-full opacity-60",
                dotMap[tone]
              )}
            />
          )}
          <span className={cn("relative inline-flex h-1.5 w-1.5 rounded-full", dotMap[tone])} />
        </span>
      )}
      {children}
    </span>
  );
}
