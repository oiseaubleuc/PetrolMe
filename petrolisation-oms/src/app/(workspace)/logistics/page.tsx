import { MapPinned, Navigation } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Panel, PanelHeader } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { KpiCard } from "@/components/ui/KpiCard";
import { Meter } from "@/components/ui/Meter";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { DataTable, Td } from "@/components/ui/DataTable";
import { deliverySchedule, fleet, logisticsKpis } from "@/lib/data/logistics";
import { formatCompact, formatNumber } from "@/lib/utils";

export const metadata = { title: "Logistics" };

export default function LogisticsPage() {
  return (
    <div>
      <PageHeader
        title="Logistics & Fleet"
        description="Vehicles, drivers, transport requests, fuel deliveries and shipment tracking with GPS situational overview."
        meta={
          <>
            <Badge tone="ok" dot pulse>
              {logisticsKpis.activeShipments} active shipments
            </Badge>
            <Badge tone="info">{logisticsKpis.onTimeDelivery}% on-time</Badge>
          </>
        }
        actions={
          <>
            <Button variant="outline" size="sm">
              <MapPinned className="h-3.5 w-3.5" />
              GPS Overview
            </Button>
            <Button variant="primary" size="sm">
              <Navigation className="h-3.5 w-3.5" />
              New Transport Request
            </Button>
          </>
        }
      />

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Fleet Size" value={String(logisticsKpis.fleetSize)} caption="Road + marine assets" />
        <KpiCard label="Utilization" value={String(logisticsKpis.utilization)} unit="%" delta={2.1} caption="Rolling 7-day" />
        <KpiCard label="Fuel Delivered Today" value={formatCompact(logisticsKpis.fuelDeliveredToday)} unit="L" caption="Bowser + bunker" />
        <KpiCard label="Distance Today" value={formatNumber(logisticsKpis.kmToday)} unit="km" caption="Combined fleet" />
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-[1.4fr_1fr]">
        <Panel>
          <PanelHeader title="Live Fleet" subtitle="En-route, loading and idle units" />
          <DataTable
            columns={[
              "Code",
              "Type",
              "Driver",
              "Status",
              "Route",
              "Cargo",
              "ETA",
              "Progress",
            ]}
          >
            {fleet.map((v) => (
              <tr key={v.id} className="hover:bg-white/[0.015]">
                <Td mono>{v.code}</Td>
                <Td className="text-xs">{v.type}</Td>
                <Td className="font-medium text-slate-100">{v.driver}</Td>
                <Td>
                  <StatusBadge status={v.status} pulse={v.status === "en-route"} />
                </Td>
                <Td className="text-xs">
                  {v.origin}
                  {v.destination !== "—" ? ` → ${v.destination}` : ""}
                </Td>
                <Td className="text-xs text-slate-400">{v.cargo}</Td>
                <Td className="font-mono text-xs text-flare-300">{v.eta}</Td>
                <Td>
                  <div className="w-24">
                    <Meter
                      value={v.progress}
                      showValue
                      tone={v.status === "maintenance" ? "warn" : "petro"}
                    />
                  </div>
                </Td>
              </tr>
            ))}
          </DataTable>
        </Panel>

        <Panel>
          <PanelHeader title="Today’s Delivery Schedule" subtitle="Transport windows" />
          <ul className="divide-y divide-line/70">
            {deliverySchedule.map((d) => (
              <li key={d.id} className="px-5 py-3.5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] text-slate-500">{d.id}</span>
                      <Badge tone="neutral">{d.type}</Badge>
                    </div>
                    <p className="mt-1 text-sm text-slate-200">{d.to}</p>
                    <p className="mt-1 text-[11px] text-slate-500">{d.window}</p>
                  </div>
                  <StatusBadge status={d.status} />
                </div>
              </li>
            ))}
          </ul>
          <div className="border-t border-line p-4">
            <div className="relative h-40 overflow-hidden rounded-xl border border-line bg-ink-850">
              <div className="absolute inset-0 grid-bg opacity-50" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 30% 40%, rgba(22,103,131,0.35), transparent 45%), radial-gradient(circle at 70% 60%, rgba(249,100,18,0.15), transparent 40%)",
                }}
              />
              {[
                { x: "28%", y: "38%", label: "TKR-118" },
                { x: "62%", y: "52%", label: "CHM-207" },
                { x: "48%", y: "28%", label: "PSV-311" },
                { x: "74%", y: "44%", label: "FLT-058" },
              ].map((p) => (
                <div
                  key={p.label}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                  style={{ left: p.x, top: p.y }}
                >
                  <span className="h-2.5 w-2.5 animate-pulse-soft rounded-full bg-flare-400 shadow-[0_0_12px_rgba(249,100,18,0.8)]" />
                  <span className="mt-1 rounded bg-ink-900/90 px-1.5 py-0.5 font-mono text-[9px] text-slate-300">
                    {p.label}
                  </span>
                </div>
              ))}
              <div className="absolute bottom-2 left-2 text-[10px] uppercase tracking-[0.14em] text-slate-500">
                GPS Overview · Live
              </div>
            </div>
          </div>
        </Panel>
      </div>
    </div>
  );
}
