import { cn } from "@/lib/utils";

/**
 * Petrolisation OMS mark — an original abstract "drop + flow" glyph
 * rendered in petroleum blue with an orange flare core.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-8 w-8", className)}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pl-ring" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0%" stopColor="#4f9fb8" />
          <stop offset="100%" stopColor="#0c3e50" />
        </linearGradient>
        <linearGradient id="pl-core" x1="0" y1="0" x2="0" y2="40">
          <stop offset="0%" stopColor="#ff934d" />
          <stop offset="100%" stopColor="#e04e00" />
        </linearGradient>
      </defs>
      <rect
        x="1.25"
        y="1.25"
        width="37.5"
        height="37.5"
        rx="11"
        stroke="url(#pl-ring)"
        strokeWidth="1.5"
        className="opacity-70"
      />
      <path
        d="M20 8c4.2 5 7 8.6 7 12.4A7 7 0 0 1 13 20.4C13 16.6 15.8 13 20 8Z"
        fill="url(#pl-core)"
      />
      <path
        d="M20 8c4.2 5 7 8.6 7 12.4A7 7 0 0 1 13 20.4"
        stroke="#ffd0ad"
        strokeWidth="0.75"
        className="opacity-50"
      />
      <circle cx="20" cy="30.5" r="1.6" fill="#4f9fb8" />
      <path d="M20 24.5v4.4" stroke="#4f9fb8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({
  collapsed = false,
  className,
}: {
  collapsed?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <LogoMark />
      {!collapsed && (
        <div className="leading-none">
          <div className="flex items-baseline gap-1">
            <span className="text-[15px] font-semibold tracking-tight text-white">
              Petrolisation
            </span>
            <span className="rounded-[5px] bg-flare-500/15 px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-flare-300">
              OMS
            </span>
          </div>
          <div className="mt-1 text-[9.5px] font-medium uppercase tracking-[0.2em] text-slate-500">
            by Hohosolutions
          </div>
        </div>
      )}
    </div>
  );
}
