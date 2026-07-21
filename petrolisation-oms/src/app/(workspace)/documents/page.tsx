import { FileStack, Upload } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Panel, PanelHeader } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { KpiCard } from "@/components/ui/KpiCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { DataTable, Td } from "@/components/ui/DataTable";
import { documentKpis, documents } from "@/lib/data/documents";
import { formatNumber } from "@/lib/utils";

export const metadata = { title: "Document Center" };

export default function DocumentsPage() {
  const preview = documents[0];

  return (
    <div>
      <PageHeader
        title="Document Center"
        description="Equipment manuals, certificates, inspection reports and engineering drawings with version control."
        meta={
          <>
            <Badge tone="info">{formatNumber(documentKpis.total)} documents</Badge>
            <Badge tone="warn">{documentKpis.certificatesExpiring} certificates expiring</Badge>
          </>
        }
        actions={
          <>
            <Button variant="outline" size="sm">
              <FileStack className="h-3.5 w-3.5" />
              Browse Library
            </Button>
            <Button variant="primary" size="sm">
              <Upload className="h-3.5 w-3.5" />
              Upload
            </Button>
          </>
        }
      />

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Library Size" value={formatNumber(documentKpis.total)} caption="Controlled documents" />
        <KpiCard label="Revised MTD" value={String(documentKpis.revisedThisMonth)} caption="New revisions this month" />
        <KpiCard label="Under Review" value={String(documentKpis.underReview)} caption="Pending approval" />
        <KpiCard label="Expiring Certificates" value={String(documentKpis.certificatesExpiring)} goodWhenUp={false} delta={-8} caption="Next 90 days" />
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-[1.35fr_1fr]">
        <Panel>
          <PanelHeader title="Controlled Documents" subtitle="Latest revisions across the portfolio" />
          <DataTable
            columns={[
              "ID",
              "Title",
              "Type",
              "Facility",
              "Version",
              "Revised",
              "Owner",
              "Status",
            ]}
          >
            {documents.map((d) => (
              <tr key={d.id} className="hover:bg-white/[0.015]">
                <Td mono>{d.id}</Td>
                <Td>
                  <div className="max-w-[260px] font-medium text-slate-100">{d.title}</div>
                  {d.asset && (
                    <div className="mt-0.5 font-mono text-[11px] text-slate-500">{d.asset}</div>
                  )}
                </Td>
                <Td>
                  <Badge tone="neutral">{d.type}</Badge>
                </Td>
                <Td className="text-xs">{d.facility}</Td>
                <Td mono>{d.version}</Td>
                <Td className="text-xs tabular-nums">{d.revised}</Td>
                <Td className="text-xs">{d.owner}</Td>
                <Td>
                  <StatusBadge status={d.status} />
                </Td>
              </tr>
            ))}
          </DataTable>
        </Panel>

        <Panel>
          <PanelHeader title="Document Viewer" subtitle={`${preview.id} · ${preview.version}`} />
          <div className="p-5">
            <div className="relative overflow-hidden rounded-xl border border-line bg-ink-850">
              <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
                <span className="truncate text-xs text-slate-400">{preview.title}</span>
                <Badge tone="ok">PDF</Badge>
              </div>
              <div className="relative flex h-[380px] flex-col items-center justify-center gap-3 p-8 text-center">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div
                  className="absolute inset-6 rounded-lg border border-dashed border-line/80"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(19,26,40,0.5), rgba(11,15,23,0.8))",
                  }}
                />
                <div className="relative z-10 space-y-3">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-ink-900 text-petro-300">
                    <FileStack className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">PDF Viewer</p>
                    <p className="mt-1 max-w-xs text-xs leading-relaxed text-slate-500">
                      {preview.size} · Last revised {preview.revised} · Owned by {preview.owner}
                    </p>
                  </div>
                  <div className="flex justify-center gap-2 pt-2">
                    <Button size="sm" variant="secondary">
                      Open
                    </Button>
                    <Button size="sm" variant="outline">
                      Download
                    </Button>
                  </div>
                </div>
              </div>
              <div className="border-t border-line px-4 py-2 text-[10px] text-slate-600">
                Version history available · Document Control · Petrolisation OMS
              </div>
            </div>
          </div>
        </Panel>
      </div>
    </div>
  );
}
