import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bot,
  Boxes,
  FileStack,
  FileText,
  Gauge,
  LayoutDashboard,
  Map,
  Package,
  ShieldAlert,
  Truck,
  Users,
  Wrench,
} from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  description: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const navigation: NavGroup[] = [
  {
    title: "Command",
    items: [
      {
        href: "/",
        label: "Executive Dashboard",
        icon: LayoutDashboard,
        description: "Enterprise KPIs and situational awareness",
      },
      {
        href: "/operations",
        label: "Operations",
        icon: Gauge,
        description: "Live production and shift control",
      },
      {
        href: "/maps",
        label: "Facilities Map",
        icon: Map,
        description: "Interactive field and asset geography",
      },
    ],
  },
  {
    title: "Assets & Reliability",
    items: [
      {
        href: "/assets",
        label: "Asset Management",
        icon: Boxes,
        description: "Wells, pipelines, equipment lifecycle",
      },
      {
        href: "/maintenance",
        label: "Maintenance",
        icon: Wrench,
        description: "Work orders and predictive insights",
      },
    ],
  },
  {
    title: "Safety & Supply",
    items: [
      {
        href: "/hse",
        label: "HSE",
        icon: ShieldAlert,
        description: "Incidents, permits and compliance",
      },
      {
        href: "/inventory",
        label: "Inventory",
        icon: Package,
        description: "Warehouses, chemicals and spare parts",
      },
      {
        href: "/logistics",
        label: "Logistics",
        icon: Truck,
        description: "Fleet, deliveries and GPS tracking",
      },
    ],
  },
  {
    title: "Intelligence",
    items: [
      {
        href: "/analytics",
        label: "Analytics",
        icon: BarChart3,
        description: "Interactive operational intelligence",
      },
      {
        href: "/ai",
        label: "AI Assistant",
        icon: Bot,
        description: "Forecasting and natural-language ops",
      },
      {
        href: "/reports",
        label: "Reports",
        icon: FileText,
        description: "Scheduled executive and ops reports",
      },
      {
        href: "/documents",
        label: "Document Center",
        icon: FileStack,
        description: "Manuals, certificates and drawings",
      },
    ],
  },
  {
    title: "Administration",
    items: [
      {
        href: "/users",
        label: "User Management",
        icon: Users,
        description: "Organizations, roles and audit",
      },
    ],
  },
];

export const breadcrumbs: Record<string, { label: string; parent?: string }> = {
  "/": { label: "Executive Dashboard" },
  "/operations": { label: "Operations", parent: "/" },
  "/maps": { label: "Facilities Map", parent: "/" },
  "/assets": { label: "Asset Management", parent: "/" },
  "/maintenance": { label: "Maintenance", parent: "/" },
  "/hse": { label: "HSE", parent: "/" },
  "/inventory": { label: "Inventory", parent: "/" },
  "/logistics": { label: "Logistics", parent: "/" },
  "/analytics": { label: "Analytics", parent: "/" },
  "/ai": { label: "AI Assistant", parent: "/" },
  "/reports": { label: "Reports", parent: "/" },
  "/documents": { label: "Document Center", parent: "/" },
  "/users": { label: "User Management", parent: "/" },
};
