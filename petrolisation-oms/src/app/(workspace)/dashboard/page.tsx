import {
  CloudSun,
  Download,
  MoreHorizontal,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { KpiCard } from "@/components/ui/KpiCard";
import { Panel, PanelHeader } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { StatusBadge, PriorityBadge } from "@/components/ui/StatusBadge";
import { Meter } from "@/components/ui/Meter";
import { FacilityMap } from "@/components/maps/FacilityMap";
import {
  ForecastChart,
  ProductionTrendChart,
} from "@/components/charts/EnterpriseCharts";
import { kpiIcon } from "@/components/ui/kpiIcons";
import { execKpis } from "@/lib/data/kpis";
import { buildForecast, buildIntraday } from "@/lib/data/production";
import { activities, alerts, shiftBoard, weather } from "@/lib/data/feed";
import { workOrders } from "@/lib/data/maintenance";
import { facilities, totalPersonnel, totalProduction, totalWells } from "@/lib/data/facilities";
import { formatCompact, timeAgo } from "@/lib/utils";

export const metadata = {
  title: "Executive Dashboard",
};

export default function DashboardPage() {
  const intraday = buildIntraday();
  const forecast = buildForecast();
  const openMaint = workOrders.filter((w) => w.status !== "completed").length;
  const critAlerts = alerts.filter((a) => !a.acknowledged && (a.severity === "critical" || a.severity === "high"));

  return (
    <div>
      <PageHeader
        title="Executive Dashboard"
        description="Real-time operational command view across Gulfstream Energy Holdings — production, integrity, HSE and commercial performance."
        meta={
          <>
            <Badge tone="ok" dot pulse>
              Live telemetry
            </Badge>
            <Badge tone="neutral">{shiftBoard.shift}</Badge>
            <Badge tone="info">{formatCompact(totalProduction)} boe/d portfolio</Badge>
          </>
        }
        actions={
          <>
            <Button variant="outline" size="sm">
              <RefreshCw className="h-3.5 w-3.5" />
              Refresh
            </Button>
            <Button variant="secondary" size="sm">
              <Download className="h-3.5 w-3.5" />
              Export
            </Button>
            <Button variant="primary" size="sm">
              <Sparkles className="h-3.5 w-3.5" />
              Ask AI
            </Button>
          </>
        }
      />

      {/* KPI grid */}
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {execKpis.map((kpi, i) => (
          <div key={kpi.id} style={{ animationDelay: `${i * 30}ms` }} className="animate-fade-up">
            <KpiCard
              label={kpi.label}
              value={kpi.value}
              unit={kpi.unit}
              delta={kpi.delta}
              goodWhenUp={kpi.goodWhenUp}
              spark={kpi.spark}
              sparkColor={kpi.sparkColor}
              caption={kpi.caption}
              icon={kpiIcon(kpi.icon)}
            />
          </div>
        ))}
      </div>

      {/* Portfolio strip */}
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Active Facilities", value: String(facilities.length) },
          { label: "Producing Wells", value: formatCompact(totalWells) },
          { label: "On-duty Personnel", value: formatCompact(totalPersonnel) },
          { label: "Open Maintenance", value: String(openMaint) },
        ].map((s) => (
          <div
            key={s.label}
            className="flex items-center justify-between rounded-xl border border-line bg-ink-900/40 px-4 py-3"
          >
            <span className="text-xs text-slate-500">{s.label}</span>
            <span className="stat-value text-lg">{s.value}</span>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="mt-6 grid gap-4 xl:grid-cols-2">
        <Panel>
          <PanelHeader
            title="Production Trends — Last 24 Hours"
            subtitle="Oil, gas and target across the portfolio"
            action={<Badge tone="flare">Intraday</Badge>}
          />
          <div className="px-2 pb-4 pt-2 sm:px-4">
            <ProductionTrendChart data={intraday} />
          </div>
        </Panel>
        <Panel>
          <PanelHeader
            title="Production Forecast"
            subtitle="12-month history with 6-month outlook band"
            action={<Badge tone="info">AI model v3.2</Badge>}
          />
          <div className="px-2 pb-4 pt-2 sm:px-4">
            <ForecastChart data={forecast} />
          </div>
        </Panel>
      </div>

      {/* Map + alerts */}
      <div className="mt-6 grid gap-4 xl:grid-cols-[1.55fr_1fr]">
        <Panel>
          <PanelHeader
            title="Facilities Map"
            subtitle="Schematic overview of the operating basin"
            action={
              <Button variant="ghost" size="sm">
                Open full map
              </Button>
            }
          />
          <div className="p-4 pt-3">
            <FacilityMap />
          </div>
        </Panel>

        <div className="flex flex-col gap-4">
          <Panel className="flex-1">
            <PanelHeader
              title="Critical Alerts"
              subtitle={`${critAlerts.length} requiring attention`}
              action={<Badge tone="crit" dot pulse>Live</Badge>}
            />
            <ul className="divide-y divide-line/70">
              {alerts.slice(0, 5).map((a) => (
                <li key={a.id} className="px-5 py-3.5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <PriorityBadge priority={a.severity} />
                        <span className="truncate text-sm font-medium text-slate-100">
                          {a.title}
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-slate-500">{a.detail}</p>
                      <p className="mt-1.5 text-[10px] text-slate-600">
                        {a.facility} · {timeAgo(a.minutesAgo)}
                      </p>
                    </div>
                    {!a.acknowledged && (
                      <Button variant="outline" size="sm" className="shrink-0">
                        Ack
                      </Button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel>
            <PanelHeader
              title="Weather & Marine"
              subtitle={weather.location}
              icon={<CloudSun className="h-4 w-4" />}
            />
            <div className="grid grid-cols-3 gap-3 p-5">
              <div>
                <div className="stat-value text-3xl">{weather.temp}°</div>
                <div className="mt-1 text-xs text-slate-500">{weather.condition}</div>
              </div>
              <div className="col-span-2 grid grid-cols-2 gap-2 text-xs">
                <Wx label="Feels" value={`${weather.feels}°C`} />
                <Wx label="Wind" value={`${weather.wind} kt ${weather.windDir}`} />
                <Wx label="Waves" value={`${weather.waveHeight} m`} />
                <Wx label="Visibility" value={`${weather.visibility} km`} />
              </div>
            </div>
            <div className="border-t border-line px-5 py-3 text-xs text-slate-500">
              {weather.advisory}
            </div>
          </Panel>
        </div>
      </div>

      {/* Activity + maintenance */}
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Panel>
          <PanelHeader title="Recent Activities" subtitle="Cross-module audit trail" />
          <ul className="divide-y divide-line/70">
            {activities.map((a) => (
              <li key={a.id} className="flex items-start gap-3 px-5 py-3.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-petro-400" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-slate-300">
                    <span className="font-medium text-white">{a.actor}</span>{" "}
                    {a.action}{" "}
                    <span className="font-medium text-petro-200">{a.target}</span>
                  </p>
                  <p className="mt-1 text-[10px] text-slate-600">
                    {a.module} · {timeAgo(a.minutesAgo)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel>
          <PanelHeader
            title="Active Maintenance"
            subtitle="Priority work orders in flight"
            action={
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            }
          />
          <ul className="divide-y divide-line/70">
            {workOrders
              .filter((w) => w.status !== "completed")
              .slice(0, 5)
              .map((w) => (
                <li key={w.id} className="px-5 py-3.5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] text-slate-500">{w.id}</span>
                        <StatusBadge status={w.status} />
                        <PriorityBadge priority={w.priority} />
                      </div>
                      <p className="mt-1 truncate text-sm text-slate-200">{w.title}</p>
                      <p className="mt-1 text-[10px] text-slate-600">
                        {w.assignee} · Due {w.due}
                      </p>
                    </div>
                    <div className="w-24 shrink-0">
                      <Meter value={w.progress} showValue tone={w.priority === "critical" ? "flare" : "petro"} />
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}

function Wx({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-line bg-ink-900/40 px-2.5 py-2">
      <div className="text-[10px] text-slate-500">{label}</div>
      <div className="mt-0.5 font-medium tabular-nums text-slate-200">{value}</div>
    </div>
  );
}
