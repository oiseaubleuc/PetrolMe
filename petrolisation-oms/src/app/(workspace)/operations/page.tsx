import { ClipboardList, Radio } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Panel, PanelHeader } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { KpiCard } from "@/components/ui/KpiCard";
import { Meter } from "@/components/ui/Meter";
import {
  DonutChart,
  ProductionTrendChart,
  SimpleBarChart,
} from "@/components/charts/EnterpriseCharts";
import {
  buildIntraday,
  efficiencyByFacility,
  energySources,
  productionMix,
} from "@/lib/data/production";
import { shiftBoard } from "@/lib/data/feed";
import { facilities } from "@/lib/data/facilities";

export const metadata = { title: "Operations" };

const liveParams = [
  { label: "Export Pressure", value: "68.4", unit: "bar", tone: 82 },
  { label: "Wellhead Temp Avg", value: "74.2", unit: "°C", tone: 70 },
  { label: "Flow Rate — Oil", value: "848.2", unit: "Mbbl/d", tone: 91 },
  { label: "Flow Rate — Gas", value: "612.5", unit: "MMscf/d", tone: 88 },
  { label: "Water Cut", value: "18.6", unit: "%", tone: 55 },
  { label: "Flare Rate", value: "3.2", unit: "MMscf/d", tone: 40 },
];

const shiftLogs = [
  { time: "06:12", site: "Al-Maha", entry: "Dayshift handover complete. All trains online. Export line pressure stable." },
  { time: "08:40", site: "Nujaym", entry: "Separator V-205 interface elevated — ops reduced inlet 4%. Maintenance notified." },
  { time: "11:05", site: "Safiyah", entry: "Booster B2 vibration alarm acknowledged. Load shifted to B1 pending inspection." },
  { time: "13:22", site: "Ras Faris", entry: "Producer A-17 ESP current draw within band after choke adjustment." },
  { time: "15:48", site: "Halwan", entry: "CDU charge rate held at 96% nameplate. Planned rate cut confirmed for Jul 24." },
];

export default function OperationsPage() {
  const intraday = buildIntraday();

  return (
    <div>
      <PageHeader
        title="Live Operations"
        description="Production control workspace — flow rates, pressures, temperatures, downtime and shift reporting across all facilities."
        meta={
          <>
            <Badge tone="ok" dot pulse>
              SCADA linked
            </Badge>
            <Badge tone="neutral">{shiftBoard.shift}</Badge>
            <Badge tone="info">Supervisor · {shiftBoard.supervisor}</Badge>
          </>
        }
        actions={
          <>
            <Button variant="outline" size="sm">
              <ClipboardList className="h-3.5 w-3.5" />
              Shift Report
            </Button>
            <Button variant="primary" size="sm">
              <Radio className="h-3.5 w-3.5" />
              Production Plan
            </Button>
          </>
        }
      />

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="On Duty" value={String(shiftBoard.onDuty)} caption={`${shiftBoard.offshore} offshore · ${shiftBoard.onshore} onshore`} />
        <KpiCard label="Portfolio Uptime" value="96.8" unit="%" delta={0.4} caption="Rolling 30-day" />
        <KpiCard label="vs. Daily Target" value="98.6" unit="%" delta={1.1} caption="860 Mbbl/d oil target" />
        <KpiCard label="Handover" value={shiftBoard.handover} caption="Next crew change" />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {liveParams.map((p) => (
          <div key={p.label} className="rounded-2xl border border-line bg-ink-900/60 p-4">
            <div className="label-muted">{p.label}</div>
            <div className="mt-2 flex items-end gap-1.5">
              <span className="stat-value text-xl">{p.value}</span>
              <span className="mb-0.5 text-[11px] text-slate-500">{p.unit}</span>
            </div>
            <Meter value={p.tone} className="mt-3" tone="petro" />
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-[1.4fr_1fr]">
        <Panel>
          <PanelHeader title="Live Production Curve" subtitle="Last 24 hours · portfolio" />
          <div className="px-2 pb-4 pt-2 sm:px-4">
            <ProductionTrendChart data={intraday} />
          </div>
        </Panel>
        <Panel>
          <PanelHeader title="Production Mix" subtitle="Current product slate" />
          <div className="p-2">
            <DonutChart
              data={productionMix.map((p) => ({
                name: p.name,
                value: p.value,
                color: p.color,
              }))}
            />
          </div>
        </Panel>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Panel>
          <PanelHeader title="Facility Efficiency" subtitle="Uptime vs. OEE" />
          <div className="p-4">
            <SimpleBarChart
              data={efficiencyByFacility.map((f) => ({
                name: f.facility,
                efficiency: f.efficiency,
              }))}
              dataKey="efficiency"
              color="#f96412"
              height={240}
            />
          </div>
        </Panel>
        <Panel>
          <PanelHeader title="Energy Sources" subtitle="Site power mix (portfolio)" />
          <div className="space-y-4 p-5">
            {energySources.map((e) => (
              <div key={e.name}>
                <div className="mb-1.5 flex justify-between text-xs">
                  <span className="text-slate-400">{e.name}</span>
                  <span className="tabular-nums text-slate-200">{e.value}%</span>
                </div>
                <Meter value={e.value} tone={e.name.includes("Solar") || e.name.includes("Waste") ? "ok" : "petro"} />
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
        <Panel>
          <PanelHeader title="Operational Logs" subtitle="Shift narrative — today" />
          <ul className="divide-y divide-line/70">
            {shiftLogs.map((l) => (
              <li key={l.time + l.site} className="flex gap-4 px-5 py-3.5">
                <div className="w-12 shrink-0 font-mono text-xs text-flare-300">{l.time}</div>
                <div>
                  <div className="text-[11px] font-medium text-petro-300">{l.site}</div>
                  <p className="mt-0.5 text-sm text-slate-300">{l.entry}</p>
                </div>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel>
          <PanelHeader title="Facility Status Board" subtitle="Realtime operating state" />
          <ul className="divide-y divide-line/70">
            {facilities.map((f) => (
              <li key={f.id} className="flex items-center justify-between gap-3 px-5 py-3">
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium text-slate-100">{f.name}</div>
                  <div className="mt-0.5 text-[11px] text-slate-500">
                    {f.code} · {(f.production / 1000).toFixed(1)}k boe/d
                  </div>
                </div>
                <Badge
                  tone={
                    f.status === "operational"
                      ? "ok"
                      : f.status === "maintenance"
                        ? "info"
                        : f.status === "warning" || f.status === "degraded"
                          ? "warn"
                          : "crit"
                  }
                  dot
                >
                  {f.status}
                </Badge>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}
