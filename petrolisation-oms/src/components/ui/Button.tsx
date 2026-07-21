import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md";

const variants: Record<Variant, string> = {
  primary:
    "bg-flare-500 text-white hover:bg-flare-400 shadow-[0_8px_24px_-12px_rgba(249,100,18,0.7)] border border-flare-400/40",
  secondary:
    "bg-white/[0.04] text-slate-100 hover:bg-white/[0.08] border border-line",
  outline:
    "bg-transparent text-slate-200 hover:bg-white/[0.04] border border-line",
  ghost: "bg-transparent text-slate-400 hover:text-white hover:bg-white/[0.04]",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-xs gap-1.5 rounded-lg",
  md: "h-9 px-4 text-sm gap-2 rounded-lg",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export function Button({
  variant = "secondary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium tracking-tight transition-all duration-150 focus-ring disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function IconButton({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-white/[0.02] text-slate-400 transition-colors hover:text-white hover:bg-white/[0.05] focus-ring",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
