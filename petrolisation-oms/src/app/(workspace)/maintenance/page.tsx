import { CalendarDays, Plus, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Panel, PanelHeader } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { KpiCard } from "@/components/ui/KpiCard";
import { Meter } from "@/components/ui/Meter";
import { StatusBadge, PriorityBadge } from "@/components/ui/StatusBadge";
import { DataTable, Td } from "@/components/ui/DataTable";
import { MaintenanceMixChart } from "@/components/charts/EnterpriseCharts";
import {
  aiRecommendations,
  maintenanceKpis,
  maintenanceTrend,
  workOrders,
} from "@/lib/data/maintenance";
import { formatCurrency, formatNumber } from "@/lib/utils";

export const metadata = { title: "Maintenance" };

export default function MaintenancePage() {
  return (
    <div>
      <PageHeader
        title="Maintenance Management"
        description="Preventive, corrective and predictive work execution — technicians, spare parts linkage and AI-assisted prioritization."
        meta={
          <>
            <Badge tone="warn">{maintenanceKpis.overdue} overdue</Badge>
            <Badge tone="ok">{maintenanceKpis.scheduleCompliance}% schedule compliance</Badge>
          </>
        }
        actions={
          <>
            <Button variant="outline" size="sm">
              <CalendarDays className="h-3.5 w-3.5" />
              Calendar
            </Button>
            <Button variant="primary" size="sm">
              <Plus className="h-3.5 w-3.5" />
              New Work Order
            </Button>
          </>
        }
      />

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Open Orders" value={String(maintenanceKpis.openOrders)} caption="Across all sites" />
        <KpiCard label="MTTR" value={String(maintenanceKpis.mttrHours)} unit="h" delta={-8.2} goodWhenUp={false} caption="Mean time to repair" />
        <KpiCard label="MTBF" value={String(maintenanceKpis.mtbfDays)} unit="d" delta={3.4} caption="Mean time between failures" />
        <KpiCard label="Month Cost" value={formatCurrency(maintenanceKpis.monthCost, true)} delta={-1.9} goodWhenUp={false} caption="Wrench time 71.4%" />
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-[1.3fr_1fr]">
        <Panel>
          <PanelHeader title="Work Mix Trend" subtitle="Preventive · Corrective · Predictive" />
          <div className="px-2 pb-4 pt-2 sm:px-4">
            <MaintenanceMixChart data={maintenanceTrend} />
          </div>
        </Panel>
        <Panel>
          <PanelHeader
            title="AI Recommendations"
            subtitle="Predictive insights ranked by confidence"
            icon={<Sparkles className="h-4 w-4" />}
            action={<Badge tone="flare">AI</Badge>}
          />
          <ul className="divide-y divide-line/70">
            {aiRecommendations.map((r) => (
              <li key={r.id} className="px-5 py-3.5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] text-slate-500">{r.asset}</span>
                      <PriorityBadge priority={r.severity} />
                    </div>
                    <p className="mt-1 text-sm font-medium text-slate-100">{r.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">{r.detail}</p>
                    <p className="mt-2 text-[11px] text-petro-300">{r.action}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="text-sm font-semibold tabular-nums text-white">{r.confidence}%</div>
                    <div className="text-[10px] text-slate-600">confidence</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <Panel className="mt-6">
        <PanelHeader
          title="Work Orders"
          subtitle={`${formatNumber(workOrders.length)} visible · ${maintenanceKpis.completedThisMonth} completed this month`}
        />
        <DataTable
          columns={[
            "WO",
            "Title",
            "Type",
            "Asset",
            "Facility",
            "Priority",
            "Status",
            "Assignee",
            "Progress",
            "Cost",
          ]}
        >
          {workOrders.map((w) => (
            <tr key={w.id} className="transition-colors hover:bg-white/[0.015]">
              <Td mono>{w.id}</Td>
              <Td className="max-w-[240px]">
                <div className="truncate font-medium text-slate-100">{w.title}</div>
                <div className="mt-0.5 text-[11px] text-slate-500">Due {w.due}</div>
              </Td>
              <Td>
                <Badge tone={w.type === "Predictive" ? "flare" : w.type === "Corrective" ? "warn" : "info"}>
                  {w.type}
                </Badge>
              </Td>
              <Td mono>{w.asset}</Td>
              <Td className="text-xs">{w.facility}</Td>
              <Td>
                <PriorityBadge priority={w.priority} />
              </Td>
              <Td>
                <StatusBadge status={w.status} pulse={w.status === "overdue"} />
              </Td>
              <Td className="text-xs">{w.assignee}</Td>
              <Td>
                <div className="w-24">
                  <Meter value={w.progress} showValue />
                </div>
              </Td>
              <Td className="tabular-nums">{formatCurrency(w.cost)}</Td>
            </tr>
          ))}
        </DataTable>
      </Panel>
    </div>
  );
}
