"use client";

import type { LucideIcon } from "lucide-react";
import {
  ArrowLeftRight,
  Briefcase,
  LayoutDashboard,
  Package,
  TrendingUp,
  Truck,
  Users,
} from "lucide-react";
import { oilconnectNavMeta, type OilconnectNavMeta } from "@/lib/oilconnect-nav-meta";

export interface NavItem extends OilconnectNavMeta {
  icon: LucideIcon;
}

const iconById: Record<string, LucideIcon> = {
  overview: LayoutDashboard,
  trade: ArrowLeftRight,
  markets: TrendingUp,
  portfolio: Briefcase,
  shipments: Truck,
  inventory: Package,
  counterparties: Users,
};

export const oilconnectNav: NavItem[] = oilconnectNavMeta.map((item) => ({
  ...item,
  icon: iconById[item.id],
}));

export const navigation = [{ title: "Desk", items: oilconnectNav }];

export { breadcrumbs } from "@/lib/oilconnect-nav-meta";