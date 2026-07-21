import { PackagePlus, ShoppingCart } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Panel, PanelHeader } from "@/components/ui/Panel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { KpiCard } from "@/components/ui/KpiCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { DataTable, Td } from "@/components/ui/DataTable";
import { SimpleBarChart } from "@/components/charts/EnterpriseCharts";
import {
  inventory,
  inventoryKpis,
  purchaseOrders,
  stockByCategory,
} from "@/lib/data/inventory";
import { formatCurrency, formatNumber } from "@/lib/utils";

export const metadata = { title: "Inventory" };

export default function InventoryPage() {
  const lowStock = inventory.filter((i) => i.onHand < i.reorder);

  return (
    <div>
      <PageHeader
        title="Inventory & Materials"
        description="Warehouse stock, fuel, chemicals, spare parts, suppliers and purchase orders with low-stock alerting."
        meta={
          <>
            <Badge tone="crit" dot pulse>
              {inventoryKpis.criticalStock} critical SKUs
            </Badge>
            <Badge tone="warn">{inventoryKpis.lowStock} below reorder</Badge>
          </>
        }
        actions={
          <>
            <Button variant="outline" size="sm">
              <ShoppingCart className="h-3.5 w-3.5" />
              Purchase Orders
            </Button>
            <Button variant="primary" size="sm">
              <PackagePlus className="h-3.5 w-3.5" />
              Receive Stock
            </Button>
          </>
        }
      />

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="SKU Count" value={formatNumber(inventoryKpis.skuCount)} caption="Active materials master" />
        <KpiCard label="Stock Value" value={formatCurrency(inventoryKpis.stockValue, true)} caption="Inventory at cost" />
        <KpiCard label="Fill Rate" value={String(inventoryKpis.fillRate)} unit="%" delta={0.6} caption="Lines fulfilled first-pass" />
        <KpiCard label="Open POs" value={String(inventoryKpis.openPOs)} caption={`Turnover ${inventoryKpis.turnover}×`} />
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-[1fr_1.2fr]">
        <Panel>
          <PanelHeader title="Stock Value by Category" subtitle="USD millions" />
          <div className="p-4">
            <SimpleBarChart
              data={stockByCategory.map((s) => ({ name: s.category, value: s.value }))}
              dataKey="value"
              color="#f96412"
              height={240}
            />
          </div>
        </Panel>
        <Panel>
          <PanelHeader title="Purchase Orders" subtitle="Inbound supply pipeline" />
          <DataTable columns={["PO", "Supplier", "Items", "Value", "Status", "ETA"]}>
            {purchaseOrders.map((p) => (
              <tr key={p.id} className="hover:bg-white/[0.015]">
                <Td mono>{p.id}</Td>
                <Td className="font-medium text-slate-100">{p.supplier}</Td>
                <Td className="tabular-nums">{p.items}</Td>
                <Td className="tabular-nums">{formatCurrency(p.value)}</Td>
                <Td>
                  <StatusBadge status={p.status} />
                </Td>
                <Td className="text-xs tabular-nums">{p.eta}</Td>
              </tr>
            ))}
          </DataTable>
        </Panel>
      </div>

      <Panel className="mt-6">
        <PanelHeader
          title="Materials Register"
          subtitle={`${lowStock.length} items require replenishment action`}
        />
        <DataTable
          columns={[
            "SKU",
            "Material",
            "Category",
            "Warehouse",
            "On Hand",
            "Reorder",
            "Unit Cost",
            "Supplier",
            "Status",
          ]}
        >
          {inventory.map((i) => {
            const low = i.onHand < i.reorder;
            const critical = i.onHand < i.reorder * 0.4;
            return (
              <tr key={i.id} className="hover:bg-white/[0.015]">
                <Td mono>{i.sku}</Td>
                <Td className="font-medium text-slate-100">{i.name}</Td>
                <Td>
                  <Badge tone="neutral">{i.category}</Badge>
                </Td>
                <Td className="text-xs">{i.warehouse}</Td>
                <Td className="tabular-nums">
                  {formatNumber(i.onHand)} {i.unit}
                </Td>
                <Td className="tabular-nums text-slate-500">
                  {formatNumber(i.reorder)}
                </Td>
                <Td className="tabular-nums">{formatCurrency(i.unitCost)}</Td>
                <Td className="text-xs">{i.supplier}</Td>
                <Td>
                  {critical ? (
                    <Badge tone="crit" dot pulse>
                      Critical
                    </Badge>
                  ) : low ? (
                    <Badge tone="warn" dot>
                      Low stock
                    </Badge>
                  ) : (
                    <Badge tone="ok" dot>
                      Healthy
                    </Badge>
                  )}
                </Td>
              </tr>
            );
          })}
        </DataTable>
      </Panel>
    </div>
  );
}
