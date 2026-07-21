import { PageHeader } from "@/components/ui/PageHeader";
import { Panel, PanelHeader } from "@/components/ui/Panel";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FacilityMap } from "@/components/maps/FacilityMap";
import { facilities, totalProduction, totalWells } from "@/lib/data/facilities";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { formatCompact } from "@/lib/utils";
import { Layers, Satellite } from "lucide-react";

export const metadata = { title: "Facilities Map" };

export default function MapsPage() {
  return (
    <div>
      <PageHeader
        title="Facilities Map"
        description="Interactive schematic of oil fields, platforms, pipelines, storage and processing assets across the operating basin."
        meta={
          <>
            <Badge tone="info">{facilities.length} facilities</Badge>
            <Badge tone="ok">{formatCompact(totalWells)} wells</Badge>
            <Badge tone="flare">{formatCompact(totalProduction)} boe/d</Badge>
          </>
        }
        actions={
          <>
            <Button variant="outline" size="sm">
              <Layers className="h-3.5 w-3.5" />
              Layers
            </Button>
            <Button variant="secondary" size="sm">
              <Satellite className="h-3.5 w-3.5" />
              Satellite View
            </Button>
          </>
        }
      />

      <Panel>
        <PanelHeader
          title="Operating Basin Overview"
          subtitle="Schematic coordinates · pipeline corridors · facility status"
          action={<Badge tone="ok" dot pulse>Live</Badge>}
        />
        <div className="p-4">
          <FacilityMap />
        </div>
      </Panel>

      <Panel className="mt-6">
        <PanelHeader title="Facility Directory" subtitle="Linked to map selection" />
        <div className="grid gap-3 p-5 sm:grid-cols-2 xl:grid-cols-4">
          {facilities.map((f) => (
            <div
              key={f.id}
              className="rounded-xl border border-line bg-ink-850/50 p-4 transition-colors hover:border-line-strong"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="font-mono text-[11px] text-slate-500">{f.code}</div>
                  <div className="mt-1 text-sm font-semibold text-white">{f.name}</div>
                  <div className="mt-1 text-[11px] text-slate-500">
                    {f.type} · {f.region}
                  </div>
                </div>
                <StatusBadge status={f.status} />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <div className="text-slate-500">Production</div>
                  <div className="mt-0.5 font-medium tabular-nums text-slate-200">
                    {formatCompact(f.production)}
                  </div>
                </div>
                <div>
                  <div className="text-slate-500">Integrity</div>
                  <div className="mt-0.5 font-medium tabular-nums text-slate-200">
                    {f.integrity}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
