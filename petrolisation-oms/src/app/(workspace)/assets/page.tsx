import { Filter, Plus, Search } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Panel, PanelHeader } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { KpiCard } from "@/components/ui/KpiCard";
import { Meter } from "@/components/ui/Meter";
import { StatusBadge, PriorityBadge } from "@/components/ui/StatusBadge";
import { DataTable, Td } from "@/components/ui/DataTable";
import { SimpleBarChart } from "@/components/charts/EnterpriseCharts";
import { assets, assetHealthDistribution, assetsByCategory } from "@/lib/data/assets";
import { meterToneFromHealth } from "@/lib/status";
import { formatNumber } from "@/lib/utils";

export const metadata = { title: "Asset Management" };

export default function AssetsPage() {
  const avgHealth = Math.round(assets.reduce((s, a) => s + a.health, 0) / assets.length);
  const critical = assets.filter((a) => a.criticality === "critical").length;
  const degraded = assets.filter((a) => a.status !== "operational").length;

  return (
    <div>
      <PageHeader
        title="Asset Management"
        description="Enterprise registry for wells, pipelines, rotating equipment and electrical assets across the operating portfolio."
        meta={
          <>
            <Badge tone="info">1,284 monitored assets</Badge>
            <Badge tone="ok" dot>
              Lifecycle registry
            </Badge>
          </>
        }
        actions={
          <>
            <Button variant="outline" size="sm">
              <Filter className="h-3.5 w-3.5" />
              Filters
            </Button>
            <Button variant="primary" size="sm">
              <Plus className="h-3.5 w-3.5" />
              Register Asset
            </Button>
          </>
        }
      />

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Registry Size" value="1,284" caption="Tags under active monitoring" />
        <KpiCard label="Average Health" value={String(avgHealth)} unit="%" delta={0.8} caption="Portfolio integrity index" sparkColor="#2fbf83" />
        <KpiCard label="Critical Assets" value={String(critical)} caption="Highest criticality band" goodWhenUp={false} delta={0} />
        <KpiCard label="Non-operational" value={String(degraded)} caption="Warning / maintenance / degraded" goodWhenUp={false} delta={-12.5} />
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-[1fr_1.2fr]">
        <Panel>
          <PanelHeader title="Assets by Category" subtitle="Installed base distribution" />
          <div className="p-4">
            <SimpleBarChart
              data={assetsByCategory.map((c) => ({ name: c.category, count: c.count }))}
              dataKey="count"
              color="#4f9fb8"
              height={280}
            />
          </div>
        </Panel>
        <Panel>
          <PanelHeader title="Health Distribution" subtitle="Condition scoring bands" />
          <div className="space-y-4 p-5">
            {assetHealthDistribution.map((b) => (
              <div key={b.band}>
                <div className="mb-1.5 flex items-center justify-between text-xs">
                  <span className="text-slate-400">{b.band}</span>
                  <span className="font-medium tabular-nums text-slate-200">{formatNumber(b.count)}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/[0.05]">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(b.count / 1284) * 100}%`,
                      background: b.tone,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <Panel className="mt-6">
        <PanelHeader
          title="Critical Equipment Register"
          subtitle="High-visibility assets with lifecycle and maintenance windows"
          action={
            <div className="flex items-center gap-2">
              <div className="hidden items-center gap-2 rounded-lg border border-line bg-white/[0.02] px-3 py-1.5 text-xs text-slate-500 sm:flex">
                <Search className="h-3.5 w-3.5" />
                Search tags…
              </div>
            </div>
          }
        />
        <DataTable
          columns={[
            "Tag",
            "Asset",
            "Category",
            "Facility",
            "Health",
            "Status",
            "Criticality",
            "Next PM",
            "Serial",
          ]}
        >
          {assets.map((a) => (
            <tr key={a.id} className="transition-colors hover:bg-white/[0.015]">
              <Td mono>{a.tag}</Td>
              <Td>
                <div className="font-medium text-slate-100">{a.name}</div>
                <div className="mt-0.5 text-[11px] text-slate-500">
                  {a.manufacturer} · {a.model}
                </div>
              </Td>
              <Td>{a.category}</Td>
              <Td className="text-xs">{a.facility}</Td>
              <Td>
                <div className="w-28">
                  <Meter value={a.health} showValue tone={meterToneFromHealth(a.health)} />
                </div>
              </Td>
              <Td>
                <StatusBadge status={a.status} />
              </Td>
              <Td>
                <PriorityBadge priority={a.criticality} />
              </Td>
              <Td className="text-xs tabular-nums">{a.nextMaintenance}</Td>
              <Td mono>{a.serial}</Td>
            </tr>
          ))}
        </DataTable>
      </Panel>
    </div>
  );
}
