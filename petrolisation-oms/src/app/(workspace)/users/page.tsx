import { UserPlus } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Panel, PanelHeader } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { KpiCard } from "@/components/ui/KpiCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { DataTable, Td } from "@/components/ui/DataTable";
import { organizations } from "@/lib/data/facilities";
import {
  auditLog,
  departments,
  people,
  roles,
} from "@/lib/data/people";

export const metadata = { title: "User Management" };

export default function UsersPage() {
  return (
    <div>
      <PageHeader
        title="User Management"
        description="Organizations, departments, sites, employees, roles, permissions and audit logging for enterprise access control."
        meta={
          <>
            <Badge tone="info">{organizations.length} organizations</Badge>
            <Badge tone="ok">{people.length} directory sample</Badge>
          </>
        }
        actions={
          <Button variant="primary" size="sm">
            <UserPlus className="h-3.5 w-3.5" />
            Invite User
          </Button>
        }
      />

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Organizations" value={String(organizations.length)} caption="Tenant structure" />
        <KpiCard
          label="Workforce"
          value={String(departments.reduce((s, d) => s + d.headcount, 0))}
          caption="Across all departments"
        />
        <KpiCard label="Roles" value={String(roles.length)} caption="Permission profiles" />
        <KpiCard label="Audit Events (today)" value="186" caption="Authentication & changes" />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Panel>
          <PanelHeader title="Organizations" subtitle="Tenant selector sources" />
          <ul className="divide-y divide-line/70">
            {organizations.map((o) => (
              <li key={o.id} className="px-5 py-3.5">
                <div className="text-sm font-medium text-white">{o.name}</div>
                <div className="mt-1 text-xs text-slate-500">
                  {o.short} · {o.region}
                </div>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel>
          <PanelHeader title="Departments" subtitle="Headcount by function" />
          <ul className="divide-y divide-line/70">
            {departments.map((d) => (
              <li key={d.name} className="flex items-center justify-between px-5 py-3">
                <div>
                  <div className="text-sm text-slate-200">{d.name}</div>
                  <div className="text-[11px] text-slate-500">{d.sites} sites</div>
                </div>
                <span className="stat-value text-base">{d.headcount}</span>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel>
          <PanelHeader title="Roles & Permissions" subtitle="Access profiles" />
          <ul className="divide-y divide-line/70">
            {roles.map((r) => (
              <li key={r.name} className="px-5 py-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white">{r.name}</span>
                  <Badge tone="neutral">{r.users}</Badge>
                </div>
                <p className="mt-1 text-[11px] text-slate-500">{r.permissions}</p>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <Panel className="mt-6">
        <PanelHeader title="Employee Directory" subtitle="Active workforce sample" />
        <DataTable
          columns={["User", "Role", "Department", "Site", "Access", "Status"]}
        >
          {people.map((p) => (
            <tr key={p.id} className="hover:bg-white/[0.015]">
              <Td>
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-petro-500 to-petro-700 text-[10px] font-bold text-white">
                    {p.initials}
                  </span>
                  <span className="font-medium text-slate-100">{p.name}</span>
                </div>
              </Td>
              <Td className="text-xs">{p.role}</Td>
              <Td className="text-xs">{p.department}</Td>
              <Td className="text-xs">{p.site}</Td>
              <Td>
                <Badge tone="info">{p.access}</Badge>
              </Td>
              <Td>
                <StatusBadge status={p.status === "on-leave" ? "on-hold" : p.status === "field" ? "in-progress" : "operational"} />
              </Td>
            </tr>
          ))}
        </DataTable>
      </Panel>

      <Panel className="mt-6">
        <PanelHeader title="Audit Log" subtitle="Authentication and privileged actions" />
        <DataTable columns={["Time", "User", "Action", "IP", "Severity"]}>
          {auditLog.map((a) => (
            <tr key={a.id} className="hover:bg-white/[0.015]">
              <Td mono>{a.time}</Td>
              <Td className="font-medium text-slate-100">{a.user}</Td>
              <Td className="text-xs">{a.action}</Td>
              <Td mono>{a.ip}</Td>
              <Td>
                <Badge tone={a.severity === "warn" ? "warn" : "info"}>{a.severity}</Badge>
              </Td>
            </tr>
          ))}
        </DataTable>
      </Panel>
    </div>
  );
}
