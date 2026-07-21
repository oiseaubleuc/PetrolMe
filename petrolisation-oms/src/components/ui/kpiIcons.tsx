import {
  Coins,
  Droplets,
  Flame,
  Gauge,
  HeartPulse,
  Leaf,
  ShieldAlert,
  TimerReset,
  TrendingUp,
  Waves,
  Waypoints,
  Zap,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Droplets,
  Flame,
  Waves,
  Waypoints,
  HeartPulse,
  Gauge,
  TrendingUp,
  Coins,
  Leaf,
  Zap,
  TimerReset,
  ShieldAlert,
};

export function kpiIcon(name: string, className = "h-3.5 w-3.5") {
  const Icon = map[name] ?? Gauge;
  return <Icon className={className} strokeWidth={1.75} />;
}
