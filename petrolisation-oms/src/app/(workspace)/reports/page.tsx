import { CalendarClock, FileDown, FileSpreadsheet } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Panel, PanelHeader } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { KpiCard } from "@/components/ui/KpiCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { DataTable, Td } from "@/components/ui/DataTable";
import { reportKpis, reports } from "@/lib/data/reports";

export const metadata = { title: "Reports" };

export default function ReportsPage() {
  return (
    <div>
      <PageHeader
        title="Reports"
        description="Professional PDF and Excel outputs — scheduled executive, operational, maintenance and environmental packs."
        meta={
          <>
            <Badge tone="ok">{reportKpis.scheduled} scheduled</Badge>
            <Badge tone="info">{reportKpis.generatedToday} generated today</Badge>
          </>
        }
        actions={
          <>
            <Button variant="outline" size="sm">
              <CalendarClock className="h-3.5 w-3.5" />
              Schedule
            </Button>
            <Button variant="primary" size="sm">
              <FileDown className="h-3.5 w-3.5" />
              Generate Report
            </Button>
          </>
        }
      />

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Scheduled Reports" value={String(reportKpis.scheduled)} caption="Active schedules" />
        <KpiCard label="Generated Today" value={String(reportKpis.generatedToday)} caption="Completed renders" />
        <KpiCard label="Subscribers" value={String(reportKpis.subscribers)} caption="Distribution list" />
        <KpiCard label="Avg Render" value={String(reportKpis.avgRenderSec)} unit="s" caption="Enterprise PDF engine" />
      </div>

      <Panel className="mt-6">
        <PanelHeader
          title="Report Catalog"
          subtitle="Export-ready packs for leadership and operations"
          action={
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <FileDown className="h-3.5 w-3.5" />
                PDF
              </Button>
              <Button size="sm" variant="outline">
                <FileSpreadsheet className="h-3.5 w-3.5" />
                Excel
              </Button>
            </div>
          }
        />
        <DataTable
          columns={[
            "ID",
            "Report",
            "Category",
            "Format",
            "Schedule",
            "Last Run",
            "Owner",
            "Status",
            "Actions",
          ]}
        >
          {reports.map((r) => (
            <tr key={r.id} className="hover:bg-white/[0.015]">
              <Td mono>{r.id}</Td>
              <Td className="font-medium text-slate-100">{r.name}</Td>
              <Td>
                <Badge
                  tone={
                    r.category === "Executive"
                      ? "flare"
                      : r.category === "HSE"
                        ? "warn"
                        : "info"
                  }
                >
                  {r.category}
                </Badge>
              </Td>
              <Td className="text-xs">{r.format}</Td>
              <Td className="text-xs">{r.schedule}</Td>
              <Td className="text-xs tabular-nums">{r.lastRun}</Td>
              <Td className="text-xs">{r.owner}</Td>
              <Td>
                <StatusBadge
                  status={r.status === "ready" ? "completed" : r.status === "generating" ? "in-progress" : "overdue"}
                />
              </Td>
              <Td>
                <Button size="sm" variant="ghost">
                  Run
                </Button>
              </Td>
            </tr>
          ))}
        </DataTable>
      </Panel>
    </div>
  );
}
