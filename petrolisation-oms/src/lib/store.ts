"use client";

import { create } from "zustand";
import { organizations } from "@/lib/data/facilities";

interface AppState {
  sidebarCollapsed: boolean;
  mobileOpen: boolean;
  orgId: string;
  language: "en" | "ar" | "fr";
  searchOpen: boolean;
  notificationsOpen: boolean;
  toggleSidebar: () => void;
  setSidebarCollapsed: (v: boolean) => void;
  setMobileOpen: (v: boolean) => void;
  setOrgId: (id: string) => void;
  setLanguage: (lang: "en" | "ar" | "fr") => void;
  setSearchOpen: (v: boolean) => void;
  setNotificationsOpen: (v: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  sidebarCollapsed: false,
  mobileOpen: false,
  orgId: organizations[0].id,
  language: "en",
  searchOpen: false,
  notificationsOpen: false,
  toggleSidebar: () => set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),
  setSidebarCollapsed: (v) => set({ sidebarCollapsed: v }),
  setMobileOpen: (v) => set({ mobileOpen: v }),
  setOrgId: (id) => set({ orgId: id }),
  setLanguage: (language) => set({ language }),
  setSearchOpen: (v) => set({ searchOpen: v }),
  setNotificationsOpen: (v) => set({ notificationsOpen: v }),
}));
