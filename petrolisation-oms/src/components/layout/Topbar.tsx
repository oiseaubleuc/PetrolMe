"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bell,
  CheckCircle2,
  Globe,
  Menu,
  Package,
  Search,
  ShieldAlert,
  Sparkles,
  Wrench,
} from "lucide-react";
import { IconButton } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { organizations } from "@/lib/data/facilities";
import { notifications } from "@/lib/data/feed";
import { currentUser } from "@/lib/data/people";
import { useAppStore } from "@/lib/store";
import { cn, timeAgo } from "@/lib/utils";

const kindIcon = {
  critical: ShieldAlert,
  maintenance: Wrench,
  inventory: Package,
  safety: ShieldAlert,
  system: CheckCircle2,
};

export function Topbar() {
  const setMobileOpen = useAppStore((s) => s.setMobileOpen);
  const orgId = useAppStore((s) => s.orgId);
  const setOrgId = useAppStore((s) => s.setOrgId);
  const language = useAppStore((s) => s.language);
  const setLanguage = useAppStore((s) => s.setLanguage);
  const searchOpen = useAppStore((s) => s.searchOpen);
  const setSearchOpen = useAppStore((s) => s.setSearchOpen);
  const notificationsOpen = useAppStore((s) => s.notificationsOpen);
  const setNotificationsOpen = useAppStore((s) => s.setNotificationsOpen);

  const unread = notifications.filter((n) => !n.read).length;
  const org = organizations.find((o) => o.id === orgId) ?? organizations[0];
  const searchRef = useRef<HTMLInputElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
        setNotificationsOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setSearchOpen, setNotificationsOpen]);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setNotificationsOpen(false);
      }
    };
    if (notificationsOpen) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [notificationsOpen, setNotificationsOpen]);

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-ink-950/80 backdrop-blur-xl">
      <div className="flex h-16 items-center gap-3 px-4 md:px-6">
        <IconButton
          className="lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation"
        >
          <Menu className="h-4 w-4" />
        </IconButton>

        <div className="hidden min-w-0 flex-1 md:block">
          <Breadcrumb />
        </div>

        <button
          type="button"
          onClick={() => setSearchOpen(true)}
          className="group flex h-9 w-full max-w-md items-center gap-2 rounded-lg border border-line bg-white/[0.02] px-3 text-left text-sm text-slate-500 transition-colors hover:border-line-strong hover:bg-white/[0.04] md:w-72 lg:w-96"
        >
          <Search className="h-3.5 w-3.5 shrink-0" />
          <span className="flex-1 truncate">Search assets, work orders, sites…</span>
          <kbd className="hidden rounded border border-line bg-ink-800 px-1.5 py-0.5 text-[10px] font-medium text-slate-500 sm:inline">
            ⌘K
          </kbd>
        </button>

        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          <select
            value={orgId}
            onChange={(e) => setOrgId(e.target.value)}
            className="hidden h-9 max-w-[180px] truncate rounded-lg border border-line bg-ink-850 px-2.5 text-xs text-slate-200 outline-none focus:ring-2 focus:ring-petro-400/40 xl:block"
            aria-label="Organization"
          >
            {organizations.map((o) => (
              <option key={o.id} value={o.id}>
                {o.short}
              </option>
            ))}
          </select>

          <div className="relative hidden sm:block">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as "en" | "ar" | "fr")}
              className="h-9 appearance-none rounded-lg border border-line bg-ink-850 py-0 pl-8 pr-3 text-xs text-slate-200 outline-none focus:ring-2 focus:ring-petro-400/40"
              aria-label="Language"
            >
              <option value="en">EN</option>
              <option value="ar">AR</option>
              <option value="fr">FR</option>
            </select>
            <Globe className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-500" />
          </div>

          <div className="relative" ref={notifRef}>
            <IconButton
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              aria-label="Notifications"
              className="relative"
            >
              <Bell className="h-4 w-4" />
              {unread > 0 && (
                <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-flare-500 px-1 text-[9px] font-bold text-white">
                  {unread}
                </span>
              )}
            </IconButton>

            <AnimatePresence>
              {notificationsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-[360px] overflow-hidden rounded-2xl border border-line bg-ink-900 shadow-panel"
                >
                  <div className="flex items-center justify-between border-b border-line px-4 py-3">
                    <div>
                      <div className="text-sm font-semibold text-white">Notifications</div>
                      <div className="text-[11px] text-slate-500">{unread} unread</div>
                    </div>
                    <Badge tone="flare" dot>
                      Live
                    </Badge>
                  </div>
                  <ul className="max-h-80 overflow-y-auto">
                    {notifications.map((n) => {
                      const Icon = kindIcon[n.kind];
                      return (
                        <li
                          key={n.id}
                          className={cn(
                            "flex gap-3 border-b border-line/60 px-4 py-3 transition-colors hover:bg-white/[0.02]",
                            !n.read && "bg-white/[0.015]"
                          )}
                        >
                          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line bg-white/[0.02] text-petro-300">
                            <Icon className="h-3.5 w-3.5" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-2">
                              <p className="text-sm font-medium text-slate-100">{n.title}</p>
                              {!n.read && (
                                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-flare-400" />
                              )}
                            </div>
                            <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                              {n.body}
                            </p>
                            <p className="mt-1.5 text-[10px] text-slate-600">
                              {timeAgo(n.minutesAgo)}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="border-t border-line px-4 py-2.5 text-center text-xs text-slate-500">
                    Notification Center · Petrolisation OMS
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            type="button"
            className="flex items-center gap-2.5 rounded-lg border border-line bg-white/[0.02] py-1 pl-1 pr-2.5 transition-colors hover:bg-white/[0.05]"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-petro-500 to-petro-700 text-[10px] font-bold text-white">
              {currentUser.initials}
            </span>
            <span className="hidden text-left leading-tight lg:block">
              <span className="block text-xs font-medium text-white">{currentUser.name}</span>
              <span className="block text-[10px] text-slate-500">{currentUser.role}</span>
            </span>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-line/60 px-4 py-1.5 md:hidden">
        <Breadcrumb />
        <span className="text-[10px] text-slate-600">{org.short}</span>
      </div>

      {/* Command search modal */}
      <AnimatePresence>
        {searchOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSearchOpen(false)}
            />
            <motion.div
              role="dialog"
              aria-label="Global search"
              className="fixed left-1/2 top-[18%] z-50 w-[min(640px,92vw)] -translate-x-1/2 overflow-hidden rounded-2xl border border-line bg-ink-900 shadow-panel"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
            >
              <div className="flex items-center gap-3 border-b border-line px-4 py-3">
                <Search className="h-4 w-4 text-slate-500" />
                <input
                  ref={searchRef}
                  placeholder="Search facilities, assets, work orders, incidents…"
                  className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
                />
                <kbd className="rounded border border-line px-1.5 py-0.5 text-[10px] text-slate-500">
                  ESC
                </kbd>
              </div>
              <div className="p-3">
                <div className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                  Quick actions
                </div>
                <ul className="space-y-0.5">
                  {[
                    { label: "Open Executive Dashboard", href: "/" },
                    { label: "View critical work orders", href: "/maintenance" },
                    { label: "Ask AI Operations Assistant", href: "/ai" },
                    { label: "Facilities map", href: "/maps" },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setSearchOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-300 transition-colors hover:bg-white/[0.04] hover:text-white"
                      >
                        <Sparkles className="h-3.5 w-3.5 text-flare-400" />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-line px-4 py-2 text-[10px] text-slate-600">
                Natural language search powered by Petrolisation AI · Hohosolutions
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
