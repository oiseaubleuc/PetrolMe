import { PageHeader } from "@/components/ui/PageHeader";
import { Panel, PanelHeader } from "@/components/ui/Panel";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { KpiCard } from "@/components/ui/KpiCard";
import {
  DonutChart,
  ForecastChart,
  MaintenanceMixChart,
  ProductionTrendChart,
  SimpleBarChart,
} from "@/components/charts/EnterpriseCharts";
import { buildForecast, buildIntraday, efficiencyByFacility, productionMix } from "@/lib/data/production";
import { maintenanceTrend } from "@/lib/data/maintenance";
import { environmental } from "@/lib/data/hse";
import { Download } from "lucide-react";

export const metadata = { title: "Analytics" };

export default function AnalyticsPage() {
  const intraday = buildIntraday();
  const forecast = buildForecast();

  return (
    <div>
      <PageHeader
        title="Analytics"
        description="Interactive executive, production, maintenance, financial and environmental intelligence with forecast bands."
        meta={
          <>
            <Badge tone="flare">Interactive dashboards</Badge>
            <Badge tone="info">Forecast horizon 180d</Badge>
          </>
        }
        actions={
          <Button variant="outline" size="sm">
            <Download className="h-3.5 w-3.5" />
            Export Pack
          </Button>
        }
      />

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Realized Price" value="$82.4" unit="/boe" delta={1.8} caption="MTD average" />
        <KpiCard label="Lifting Cost" value="$11.8" unit="/boe" delta={-1.9} goodWhenUp={false} caption="Below plan" />
        <KpiCard label="OEE Portfolio" value="91.4" unit="%" delta={1.6} caption="Operations excellence" />
        <KpiCard label="Carbon Intensity" value="17.4" unit="kg/boe" delta={-3.1} goodWhenUp={false} caption="Scope 1+2" />
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-2">
        <Panel>
          <PanelHeader title="Production Analytics" subtitle="Intraday operational curve" />
          <div className="px-2 pb-4 pt-2 sm:px-4">
            <ProductionTrendChart data={intraday} />
          </div>
        </Panel>
        <Panel>
          <PanelHeader title="Executive Forecast" subtitle="Actuals with confidence band" />
          <div className="px-2 pb-4 pt-2 sm:px-4">
            <ForecastChart data={forecast} />
          </div>
        </Panel>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Panel>
          <PanelHeader title="Product Slate" subtitle="Current mix" />
          <div className="p-2">
            <DonutChart data={productionMix} height={240} />
          </div>
        </Panel>
        <Panel>
          <PanelHeader title="Maintenance Analytics" subtitle="Work mix evolution" />
          <div className="px-1 pb-3 pt-1">
            <MaintenanceMixChart data={maintenanceTrend} />
          </div>
        </Panel>
        <Panel>
          <PanelHeader title="Facility OEE" subtitle="Efficiency ranking" />
          <div className="p-3">
            <SimpleBarChart
              data={efficiencyByFacility.map((f) => ({
                name: f.facility,
                efficiency: f.efficiency,
              }))}
              dataKey="efficiency"
              color="#4f9fb8"
              height={240}
            />
          </div>
        </Panel>
      </div>

      <Panel className="mt-6">
        <PanelHeader title="Environmental Analytics" subtitle="Emissions and circularity KPIs" />
        <div className="grid gap-3 p-5 sm:grid-cols-2 lg:grid-cols-5">
          {environmental.map((e) => (
            <div key={e.metric} className="rounded-xl border border-line bg-ink-850/50 p-4">
              <div className="label-muted">{e.metric}</div>
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
