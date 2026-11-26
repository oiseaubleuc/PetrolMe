import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-8 w-8", className)}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2.5C8 8 6 11.2 6 14a6 6 0 0 0 12 0c0-2.8-2-6-6-11.5z"
        fill="#3DDC97"
        fillOpacity="0.25"
        stroke="#3DDC97"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 15a2.5 2.5 0 0 0 2.5 2.5"
        stroke="#3DDC97"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
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
          <div className="text-[17px] font-bold tracking-tight text-desk-text">Oilconnect</div>
          <div className="mt-1 font-mono text-[10px] text-connect-400">LIVE · DESK 01</div>
        </div>
      )}
    </div>
  );
}