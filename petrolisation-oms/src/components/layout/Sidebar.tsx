"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Sparkles, X } from "lucide-react";
import { LogoMark } from "@/components/brand/Logo";
import { oilconnectNav } from "@/lib/navigation";
import { useAppStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { marketIndicators } from "@/lib/data/news";

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const normalized = pathname.replace(/\/$/, "") || "/";

  const isActive = (href: string) => {
    const h = href.replace(/\/$/, "") || "/";
    if (h === "/markets" && normalized === "/news") return true;
    if (h === "/portfolio" && normalized === "/investment") return true;
    if (h === "/shipments" && normalized === "/logistics") return true;
    return normalized === h;
  };

  return (
    <div className="flex flex-col gap-0.5">
      {oilconnectNav.map((item) => {
        const active = isActive(item.href);
        const Icon = item.icon;
        return (
          <Link
            key={item.id}
            href={item.href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={cn(
              "relative flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[13px] font-medium transition-all",
              active
                ? "border border-connect-600/80 bg-connect-900/40 text-desk-text shadow-glow-connect"
                : "border border-transparent text-desk-muted hover:bg-white/[0.03] hover:text-desk-text"
            )}
          >
            <Icon
              className={cn("h-4 w-4 shrink-0", active ? "text-connect-400" : "text-desk-muted")}
              strokeWidth={1.75}
            />
            <span className="flex-1 truncate">{item.label}</span>
            <span
              className={cn(
                "font-mono text-[10px]",
                active ? "text-connect-400" : "text-desk-faint"
              )}
            >
              {item.index}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

function MarketPulse() {
  const brent = marketIndicators.find((m) => m.id === "brent");
  const wti = marketIndicators.find((m) => m.id === "wti");

  return (
    <div className="rounded-xl border border-desk-border bg-desk-inset p-3">
      <div className="font-mono text-[10px] font-medium uppercase tracking-widest text-desk-muted">
        Market pulse
      </div>
      <div className="mt-2.5 space-y-2 text-xs">
        {[
          { label: "BRENT", m: brent },
          { label: "WTI", m: wti },
        ].map(({ label, m }) =>
          m ? (
            <div key={label} className="flex items-center justify-between">
              <span className="text-desk-muted">{label}</span>
              <span className="font-mono text-desk-text">
                {m.value.toFixed(2)}{" "}
                <span className={m.change >= 0 ? "text-connect-400" : "text-status-crit"}>
                  {m.change >= 0 ? "▲" : "▼"}
                  {Math.abs(m.changePercent).toFixed(1)}%
                </span>
              </span>
            </div>
          ) : null
        )}
      </div>
      <svg viewBox="0 0 160 30" className="mt-2 h-7 w-full" aria-hidden>
        <polyline
          points="0,24 14,22 28,25 42,18 56,20 70,14 84,16 98,10 112,12 126,7 140,9 160,4"
          fill="none"
          stroke="#3DDC97"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

function AiDeskCard() {
  return (
    <div className="rounded-xl border border-desk-info/40 bg-desk-info-bg p-3">
      <div className="flex items-center gap-1.5 font-mono text-[10px] font-medium uppercase tracking-widest text-desk-info">
        <Sparkles className="h-3 w-3" />
        AI desk
      </div>
      <p className="mt-2 text-xs leading-relaxed text-desk-text/90">
        3 new signals · Brent–WTI arb open to Rotterdam
      </p>
      <Link href="/markets" className="mt-2 inline-block text-xs font-medium text-desk-info hover:underline">
        Review signals →
      </Link>
    </div>
  );
}

function Rail({ onNavigate }: { onNavigate?: () => void }) {
  const setSearchOpen = useAppStore((s) => s.setSearchOpen);

  return (
    <div className="flex h-full flex-col gap-3.5 p-3">
      <div className="flex items-center gap-2.5 px-1">
        <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-connect-600/80 bg-connect-900/50 shadow-glow-connect">
          <LogoMark className="h-[18px] w-[18px]" />
        </div>
        <div>
          <div className="text-[17px] font-bold tracking-tight text-desk-text">Oilconnect</div>
          <div className="mt-0.5 flex items-center gap-1.5 font-mono text-[10px] text-connect-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-connect-400 opacity-40" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-connect-400 shadow-glow-connect" />
            </span>
            LIVE · DESK 01
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setSearchOpen(true)}
        className="flex w-full items-center gap-2 rounded-xl border border-desk-border bg-desk-inset px-3 py-2.5 text-left text-xs text-desk-muted transition hover:border-desk-border-strong hover:text-desk-text"
      >
        <Search className="h-3.5 w-3.5 shrink-0" />
        <span className="flex-1 truncate">Ask or search…</span>
        <kbd className="rounded border border-desk-border-strong px-1.5 py-0.5 font-mono text-[10px] text-desk-faint">
          ⌘K
        </kbd>
      </button>

      <nav className="flex-1 overflow-y-auto no-scrollbar" aria-label="Main">
        <NavLinks onNavigate={onNavigate} />
      </nav>

      <MarketPulse />
      <AiDeskCard />

      <div className="mt-auto flex items-center gap-2.5 border-t border-desk-border pt-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-connect-600/60 bg-desk-inset text-xs font-semibold text-connect-400">
          OC
        </div>
        <div>
          <div className="text-xs font-medium text-desk-text">Global oil desk</div>
          <div className="font-mono text-[10px] text-desk-muted">USD · DEMO</div>
        </div>
      </div>
    </div>
  );
}

export function Sidebar() {
  const mobileOpen = useAppStore((s) => s.mobileOpen);
  const setMobileOpen = useAppStore((s) => s.setMobileOpen);

  return (
    <>
      <aside className="relative z-30 hidden h-screen w-[272px] shrink-0 bg-desk-void p-3.5 lg:flex">
        <motion.div
          initial={false}
          className="flex flex-1 flex-col overflow-hidden rounded-[20px] border border-desk-border bg-desk-panel shadow-rail"
        >
          <Rail />
        </motion.div>
      </aside>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 left-0 z-50 w-[292px] bg-desk-void p-3 lg:hidden"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", stiffness: 380, damping: 36 }}
            >
              <div className="mb-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg p-2 text-desk-muted hover:bg-white/[0.05] hover:text-desk-text"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <motion.div className="flex h-[calc(100%-2.5rem)] flex-col overflow-hidden rounded-[20px] border border-desk-border bg-desk-panel shadow-rail">
                <Rail onNavigate={() => setMobileOpen(false)} />
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}