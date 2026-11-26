import { Building2, Mail, Shield, Star } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Panel, PanelHeader } from "@/components/ui/Panel";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata = { title: "Counterparties" };

const counterparties = [
  {
    id: "cp1",
    name: "Meridian Energy Trading",
    region: "Rotterdam, NL",
    role: "Buyer",
    rating: "A",
    exposure: "$12.4M",
    status: "Active",
  },
  {
    id: "cp2",
    name: "Gulfstream Offtake Ltd",
    region: "Dubai, AE",
    role: "Seller",
    rating: "A-",
    exposure: "$8.1M",
    status: "Active",
  },
  {
    id: "cp3",
    name: "Nordic Refining Partners",
    region: "Oslo, NO",
    role: "Buyer",
    rating: "BBB+",
    exposure: "$3.2M",
    status: "Review",
  },
  {
    id: "cp4",
    name: "Atlas Commodities SA",
    region: "Geneva, CH",
    role: "Broker",
    rating: "A+",
    exposure: "$18.9M",
    status: "Active",
  },
];

export default function CounterpartiesPage() {
  return (
    <div>
      <PageHeader
        title="Counterparties"
        description="KYC status, credit exposure and relationship map for buyers, sellers and brokers on the desk."
        meta={
          <>
            <Badge tone="ok">{counterparties.length} active relationships</Badge>
            <Badge tone="info">Demo registry</Badge>
          </>
        }
        actions={
          <Button variant="primary" size="sm">
            Add counterparty
          </Button>
        }
      />

      <div className="grid gap-3 sm:grid-cols-3">
        {[
          { label: "Gross exposure", value: "$42.6M" },
          { label: "In credit review", value: "1" },
          { label: "Avg. rating", value: "A-" },
        ].map((k) => (
          <div key={k.label} className="panel p-4">
            <div className="label-muted">{k.label}</div>
            <div className="stat-value mt-2 text-2xl">{k.value}</div>
          </div>
        ))}
      </div>

      <Panel className="mt-6">
        <PanelHeader title="Registry" subtitle="Primary trading partners" />
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line text-left text-xs uppercase tracking-wide text-desk-muted">
                <th className="px-5 py-3">Counterparty</th>
                <th className="px-5 py-3">Region</th>
                <th className="px-5 py-3">Role</th>
                <th className="px-5 py-3">Rating</th>
                <th className="px-5 py-3">Exposure</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-line/70">
              {counterparties.map((c) => (
                <tr key={c.id} className="hover:bg-white/[0.02]">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-desk-inset text-connect-400">
                        <Building2 className="h-4 w-4" />
                      </span>
                      <span className="font-medium text-desk-text">{c.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-desk-muted">{c.region}</td>
                  <td className="px-5 py-4">
                    <Badge tone="neutral">{c.role}</Badge>
                  </td>
                  <td className="px-5 py-4 font-mono text-connect-400">{c.rating}</td>
                  <td className="px-5 py-4 font-mono">{c.exposure}</td>
                  <td className="px-5 py-4">
                    <Badge tone={c.status === "Active" ? "ok" : "warn"}>{c.status}</Badge>
                  </td>
                  <td className="px-5 py-4">
                    <Button variant="outline" size="sm">
                      Open
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Panel>
          <PanelHeader title="Compliance" subtitle="KYC & sanctions screening" icon={<Shield className="h-4 w-4" />} />
          <ul className="space-y-3 p-5 text-sm text-desk-muted">
            <li>PEP / sanctions checks refreshed every 30 days (demo)</li>
            <li>ISDA and credit annex on file for 3 counterparties</li>
            <li>1 relationship flagged for annual review</li>
          </ul>
        </Panel>
        <Panel>
          <PanelHeader title="Relationship desk" subtitle="Key contacts" icon={<Mail className="h-4 w-4" />} />
          <ul className="divide-y divide-line/70 p-2">
            {counterparties.slice(0, 3).map((c) => (
              <li key={c.id} className="flex items-center justify-between px-3 py-3">
                <span className="text-sm text-desk-text">{c.name}</span>
                <span className="flex items-center gap-1 text-xs text-desk-muted">
                  <Star className="h-3 w-3 text-connect-400" />
                  Primary
                </span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}