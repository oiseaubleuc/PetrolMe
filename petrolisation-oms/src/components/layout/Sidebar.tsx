"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronsLeft, ChevronsRight, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { navigation } from "@/lib/navigation";
import { useAppStore } from "@/lib/store";
import { cn } from "@/lib/utils";

function NavContent({ collapsed }: { collapsed: boolean }) {
  const pathname = usePathname();

  return (
    <nav className="flex-1 overflow-y-auto px-3 py-4 no-scrollbar">
      {navigation.map((group) => (
        <div key={group.title} className="mb-5">
          {!collapsed && (
            <div className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
              {group.title}
            </div>
          )}
          <ul className="space-y-0.5">
            {group.items.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => useAppStore.getState().setMobileOpen(false)}
                    className={cn(
                      "nav-item",
                      active && "nav-item-active",
                      collapsed && "justify-center px-0"
                    )}
                    title={collapsed ? item.label : undefined}
                  >
                    {active && (
                      <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-flare-500" />
                    )}
                    <Icon
                      className={cn(
                        "h-4 w-4 shrink-0",
                        active ? "text-flare-400" : "text-slate-500"
                      )}
                      strokeWidth={1.75}
                    />
                    {!collapsed && <span className="truncate">{item.label}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export function Sidebar() {
  const collapsed = useAppStore((s) => s.sidebarCollapsed);
  const mobileOpen = useAppStore((s) => s.mobileOpen);
  const toggleSidebar = useAppStore((s) => s.toggleSidebar);
  const setMobileOpen = useAppStore((s) => s.setMobileOpen);

  return (
    <>
      {/* Desktop */}
      <aside
        className={cn(
          "relative z-30 hidden h-screen shrink-0 flex-col border-r border-line bg-ink-900/80 backdrop-blur-xl transition-[width] duration-300 lg:flex",
          collapsed ? "w-[72px]" : "w-[260px]"
        )}
      >
        <div
          className={cn(
            "flex h-16 items-center border-b border-line px-4",
            collapsed && "justify-center px-2"
          )}
        >
          <Logo collapsed={collapsed} />
        </div>

        <NavContent collapsed={collapsed} />

        <div className="border-t border-line p-3">
          <button
            type="button"
            onClick={toggleSidebar}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-line bg-white/[0.02] px-3 py-2 text-xs text-slate-400 transition-colors hover:bg-white/[0.05] hover:text-white"
          >
            {collapsed ? (
              <ChevronsRight className="h-4 w-4" />
            ) : (
              <>
                <ChevronsLeft className="h-4 w-4" />
                <span>Collapse</span>
              </>
            )}
          </button>
          {!collapsed && (
            <p className="mt-3 px-1 text-center text-[10px] leading-relaxed text-slate-600">
              Petrolisation OMS
              <br />
              Developed by Hohosolutions
            </p>
          )}
        </div>
      </aside>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 left-0 z-50 flex w-[280px] flex-col border-r border-line bg-ink-900 lg:hidden"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 380, damping: 36 }}
            >
              <div className="flex h-16 items-center justify-between border-b border-line px-4">
                <Logo />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg p-2 text-slate-400 hover:bg-white/[0.05] hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <NavContent collapsed={false} />
              <div className="border-t border-line p-4 text-center text-[10px] text-slate-600">
                Petrolisation OMS · Hohosolutions
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
