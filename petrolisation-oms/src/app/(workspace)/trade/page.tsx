import { ArrowDownRight, ArrowUpRight, ShoppingCart } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Panel, PanelHeader } from "@/components/ui/Panel";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { investmentProducts } from "@/lib/data/investment";
import { marketIndicators } from "@/lib/data/news";

export const metadata = { title: "Buy & Sell" };

export default function TradePage() {
  const brent = marketIndicators.find((m) => m.id === "brent");
  const wti = marketIndicators.find((m) => m.id === "wti");

  return (
    <div>
      <PageHeader
        title="Buy & Sell"
        description="Working orders, spot-style execution and quick access to listed instruments on the global oil desk."
        meta={
          <>
            <Badge tone="ok" dot pulse>
              Desk open
            </Badge>
            <Badge tone="neutral">Demo execution</Badge>
          </>
        }
        actions={
          <Button variant="primary" size="sm">
            <ShoppingCart className="h-3.5 w-3.5" />
            New order
          </Button>
        }
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Brent spot", m: brent },
          { label: "WTI spot", m: wti },
        ].map(
          ({ label, m }) =>
            m && (
              <div key={label} className="panel p-4">
                <div className="label-muted">{label}</div>
                <div className="mt-2 flex items-end justify-between">
                  <span className="stat-value text-2xl">${m.value.toFixed(2)}</span>
                  <span
                    className={`text-sm font-semibold ${m.change >= 0 ? "text-status-ok" : "text-status-crit"}`}
                  >
                    {m.change >= 0 ? "+" : ""}
                    {m.changePercent.toFixed(2)}%
                  </span>
                </div>
              </div>
            )
        )}
        <div className="panel p-4 sm:col-span-2">
          <div className="label-muted">Working orders</div>
          <WorkingOrders />
        </div>
      </div>

      <Panel className="mt-6">
        <PanelHeader title="Instruments" subtitle="Select a product to place a demo buy or sell" />
        <div className="grid gap-3 p-4 sm:grid-cols-2 xl:grid-cols-3">
          {investmentProducts.map((p) => {
            const up = p.change >= 0;
            const Icon = up ? ArrowUpRight : ArrowDownRight;
            return (
              <div
                key={p.id}
                className="rounded-xl border border-line bg-desk-inset/60 p-4 transition hover:border-connect-600/50"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <Badge tone="info">{p.type.toUpperCase()}</Badge>
                    <h3 className="mt-2 text-sm font-semibold text-desk-text">{p.name}</h3>
                    <p className="font-mono text-xs text-desk-muted">{p.ticker}</p>
                  </div>
                  <Icon className={`h-4 w-4 ${up ? "text-status-ok" : "text-status-crit"}`} />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="stat-value text-lg">${p.price.toLocaleString()}</span>
                  <SideChange up={up} />
                </div>
                <div className="mt-4 flex gap-2">
                  <Button variant="primary" size="sm" className="flex-1">
                    Buy
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Sell
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Panel>
    </div>
  );
}

function WorkingOrders() {
  const rows = [
    { side: "BUY", product: "Brent Jul", qty: "500", price: "84.10", status: "Working" },
    { side: "SELL", product: "WTI Aug", qty: "750", price: "79.55", status: "Partial" },
  ];
  return (
    <ul className="mt-2 divide-y divide-line/70">
      {rows.map((r) => (
        <li key={r.product} className="flex items-center justify-between gap-3 py-2.5 text-sm">
          <Badge tone={r.side === "BUY" ? "ok" : "crit"}>{r.side}</Badge>
          <span className="flex-1 text-desk-text">{r.product}</span>
          <span className="font-mono text-xs text-desk-muted">
            {r.qty} @ {r.price}
          </span>
          <span className="text-xs text-desk-muted">{r.status}</span>
        </li>
      ))}
    </ul>
  );
}

function SideChange({ up }: { up: boolean }) {
  return (
    <span className={`text-sm font-semibold ${up ? "text-status-ok" : "text-status-crit"}`}>
      {up ? "+" : ""}
      {up ? "1.2" : "-0.4"}%
    </span>
  );
}