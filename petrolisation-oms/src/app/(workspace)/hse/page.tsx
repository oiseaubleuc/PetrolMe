import { AlertTriangle, FileCheck2, Siren } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Panel, PanelHeader } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { KpiCard } from "@/components/ui/KpiCard";
import { StatusBadge, PriorityBadge } from "@/components/ui/StatusBadge";
import { DataTable, Td } from "@/components/ui/DataTable";
import { AreaSeriesChart } from "@/components/charts/EnterpriseCharts";
import {
  environmental,
  hseKpis,
  incidents,
  permitToWork,
  safetyTrend,
} from "@/lib/data/hse";

export const metadata = { title: "HSE" };

export default function HsePage() {
  return (
    <div>
      <PageHeader
        title="Health, Safety & Environment"
        description="Incidents, near misses, permit-to-work, risk assessments, audits and environmental monitoring in one compliance workspace."
        meta={
          <>
            <Badge tone="ok" dot>
              {hseKpis.daysWithoutLTI} days without LTI
            </Badge>
            <Badge tone="info">Compliance {hseKpis.complianceScore}%</Badge>
          </>
        }
        actions={
          <>
            <Button variant="outline" size="sm">
              <FileCheck2 className="h-3.5 w-3.5" />
              New Permit
            </Button>
            <Button variant="primary" size="sm">
              <AlertTriangle className="h-3.5 w-3.5" />
              Report Incident
            </Button>
          </>
        }
      />

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="TRIR" value={String(hseKpis.trir)} delta={-12.5} goodWhenUp={false} caption="Total recordable incident rate" />
        <KpiCard label="LTIFR" value={String(hseKpis.ltifr)} delta={-6.1} goodWhenUp={false} caption="Lost time injury frequency" />
        <KpiCard label="Open Permits" value={String(hseKpis.openPermits)} caption="Active PTW across sites" />
        <KpiCard label="Near Misses (MTD)" value={String(hseKpis.nearMisses)} delta={4.2} goodWhenUp caption="Reporting culture index" />
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-[1.3fr_1fr]">
        <Panel>
          <PanelHeader title="Safety Trend" subtitle="Recordables, near misses and unsafe acts" />
          <div className="px-2 pb-4 pt-2 sm:px-4">
            <AreaSeriesChart
              data={safetyTrend}
              xKey="month"
              series={[
                { key: "recordable", name: "Recordable", color: "#ef4d5a" },
                { key: "nearMiss", name: "Near Miss", color: "#f5b13d" },
                { key: "unsafeActs", name: "Unsafe Acts", color: "#4f9fb8" },
              ]}
            />
          </div>
        </Panel>
        <Panel>
          <PanelHeader
            title="Emergency Dashboard"
            subtitle="Current response readiness"
            icon={<Siren className="h-4 w-4" />}
          />
          <div className="grid grid-cols-2 gap-3 p-5">
            {[
              { label: "Muster Status", value: "Clear", tone: "ok" as const },
              { label: "Emergency Drills YTD", value: String(hseKpis.emergencyDrills), tone: "info" as const },
              { label: "Audit Completion", value: `${hseKpis.auditsCompleted}%`, tone: "ok" as const },
              { label: "PPE Compliance", value: "99.1%", tone: "ok" as const },
            ].map((c) => (
              <div key={c.label} className="rounded-xl border border-line bg-ink-850/50 p-4">
                <div className="label-muted">{c.label}</div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="stat-value text-xl">{c.value}</span>
                  <Badge tone={c.tone} dot>
                    OK
                  </Badge>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-line px-5 py-3 text-xs text-slate-500">
            No active emergency events. Next scheduled drill: Jul 28 — Al-Maha Complex.
          </div>
        </Panel>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Panel>
          <PanelHeader title="Incidents & Near Misses" subtitle="Open and recent cases" />
          <DataTable columns={["ID", "Title", "Category", "Severity", "Facility", "Status"]}>
            {incidents.map((i) => (
              <tr key={i.id} className="transition-colors hover:bg-white/[0.015]">
                <Td mono>{i.id}</Td>
                <Td>
                  <div className="max-w-[220px] font-medium text-slate-100">{i.title}</div>
                  <div className="mt-0.5 text-[11px] text-slate-500">
                    {i.owner} · {i.reported}
                  </div>
                </Td>
                <Td className="text-xs">{i.category}</Td>
                <Td>
                  <PriorityBadge priority={i.severity} />
                </Td>
                <Td className="text-xs">{i.facility}</Td>
                <Td>
                  <StatusBadge status={i.status} />
                </Td>
              </tr>
            ))}
          </DataTable>
        </Panel>

        <Panel>
          <PanelHeader title="Permit to Work" subtitle="Live PTW board" />
          <ul className="divide-y divide-line/70">
            {permitToWork.map((p) => (
              <li key={p.id} className="flex items-start justify-between gap-3 px-5 py-3.5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] text-slate-500">{p.id}</span>
                    <Badge tone="flare">{p.type}</Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-200">
                    {p.facility} — {p.area}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Holder {p.holder}
                    {p.expires !== "—" ? ` · Expires ${p.expires}` : ""}
                  </p>
                </div>
                <StatusBadge status={p.status} pulse={p.status === "active"} />
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <Panel className="mt-6">
        <PanelHeader title="Environmental Monitoring" subtitle="Scope 1/2 intensity and emissions KPIs" />
        <div className="grid gap-3 p-5 sm:grid-cols-2 lg:grid-cols-5">
          {environmental.map((e) => (
            <div key={e.metric} className="rounded-xl border border-line bg-ink-850/50 p-4">
              <div className="flex items-center justify-between">
                <div className="label-muted">{e.metric}</div>
                <Badge tone={e.status === "ok" ? "ok" : "warn"} dot>
                  {e.status === "ok" ? "On target" : "Watch"}
                </Badge>
              </div>
              <div className="mt-3 flex items-end gap-1.5">
                <span className="stat-value text-2xl">{e.value}</span>
                <span className="mb-0.5 text-[11px] text-slate-500">{e.unit}</span>
              </div>
              <div className="mt-2 text-[11px] text-slate-600">Target {e.target}</div>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
