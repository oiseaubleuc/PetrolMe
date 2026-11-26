import {
  TrendingUp,
  TrendingDown,
  Wallet,
  PieChart,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  ShoppingCart,
  BookOpen,
  Target,
  Shield,
  Sparkles,
  Download,
  RefreshCw,
  Search,
  Filter,
  AlertCircle,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Panel, PanelHeader } from "@/components/ui/Panel";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { KpiCard } from "@/components/ui/KpiCard";
import {
  investmentProducts,
  portfolioHoldings,
  recentTransactions,
  marketAnalyses,
  portfolioStats,
  educationalResources,
  type InvestmentProduct,
  type PortfolioHolding,
  type Transaction,
  type MarketAnalysis,
} from "@/lib/data/investment";
import { formatCompact } from "@/lib/utils";

export const metadata = {
  title: "Investment Platform",
};

const riskColors: Record<string, string> = {
  low: "text-green-400",
  medium: "text-yellow-400",
  high: "text-red-400",
};

const riskBgColors: Record<string, string> = {
  low: "bg-green-400/10 border-green-400/20",
  medium: "bg-yellow-400/10 border-yellow-400/20",
  high: "bg-red-400/10 border-red-400/20",
};

export default function InvestmentPage() {
  const topPerformers = investmentProducts
    .filter((p) => p.changePercent > 0)
    .sort((a, b) => b.changePercent - a.changePercent)
    .slice(0, 6);

  const bullishAnalyses = marketAnalyses.filter((a) => a.outlook === "bullish");

  return (
    <div>
      <PageHeader
        title="Oil & Gas Investment Platform"
        description="Comprehensive investment tools for crude oil, natural gas, energy stocks, ETFs and futures — portfolio management, real-time pricing and market intelligence"
        meta={
          <>
            <Badge tone="ok" dot pulse>
              Markets Open
            </Badge>
            <Badge tone="info">
              Portfolio: ${formatCompact(portfolioStats.totalValue)}
            </Badge>
            <Badge
              tone={
                portfolioStats.totalProfitLossPercent > 0 ? "ok" : "crit"
              }
            >
              {portfolioStats.totalProfitLossPercent > 0 ? "+" : ""}
              {portfolioStats.totalProfitLossPercent.toFixed(2)}% All-time
            </Badge>
          </>
        }
        actions={
          <>
            <Button variant="outline" size="sm">
              <Download className="h-3.5 w-3.5" />
              Reports
            </Button>
            <Button variant="secondary" size="sm">
              <RefreshCw className="h-3.5 w-3.5" />
              Refresh
            </Button>
            <Button variant="primary" size="sm">
              <ShoppingCart className="h-3.5 w-3.5" />
              Trade
            </Button>
          </>
        }
      />

      {/* Portfolio Overview KPIs */}
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard
          label="Total Portfolio Value"
          value={portfolioStats.totalValue.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
          unit="USD"
          delta={portfolioStats.dayChangePercent}
          caption={`$${portfolioStats.dayChange.toFixed(2)} today`}
          icon={<Wallet className="h-4 w-4" />}
        />
        <KpiCard
          label="Total Profit/Loss"
          value={portfolioStats.totalProfitLoss.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
          unit="USD"
          delta={portfolioStats.totalProfitLossPercent}
          caption="All-time returns"
          icon={<TrendingUp className="h-4 w-4" />}
        />
        <KpiCard
          label="Total Invested"
          value={portfolioStats.totalInvested.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
          unit="USD"
          caption={`${portfolioHoldings.length} holdings`}
          icon={<DollarSign className="h-4 w-4" />}
        />
        <KpiCard
          label="Portfolio Return"
          value={portfolioStats.totalProfitLossPercent.toFixed(2)}
          unit="%"
          delta={portfolioStats.dayChangePercent}
          caption="Annualized performance"
          icon={<Activity className="h-4 w-4" />}
        />
      </div>

      {/* Asset Allocation & Risk */}
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Panel>
          <PanelHeader
            title="Asset Allocation"
            subtitle="Portfolio composition by type"
            action={<Badge tone="info">5 holdings</Badge>}
          />
          <div className="p-5">
            <div className="mb-5 space-y-3">
              {portfolioStats.assetAllocation.map((asset) => (
                <div key={asset.category}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-300">
                      {asset.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">
                        ${asset.value.toLocaleString()}
                      </span>
                      <span className="font-semibold text-petro-400">
                        {asset.percent.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-ink-800">
                    <div
                      className="h-full bg-gradient-to-r from-petro-500 to-petro-400"
                      style={{ width: `${asset.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-line bg-ink-850/50 p-4">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <PieChart className="h-4 w-4" />
                <span>
                  Recommended allocation: 60% ETFs, 40% Stocks for balanced
                  risk
                </span>
              </div>
            </div>
          </div>
        </Panel>

        <Panel>
          <PanelHeader
            title="Risk Distribution"
            subtitle="Portfolio risk profile analysis"
            action={
              <Badge tone="neutral">
                <Shield className="mr-1 h-3 w-3" />
                Medium Risk
              </Badge>
            }
          />
          <div className="p-5">
            <div className="mb-5 space-y-3">
              {portfolioStats.riskDistribution.map((risk) => (
                <div key={risk.risk}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-slate-300">
                        {risk.risk} Risk
                      </span>
                      <Badge
                        tone={
                          risk.risk === "High"
                            ? "crit"
                            : risk.risk === "Medium"
                            ? "neutral"
                            : "ok"
                        }
                      >
                        {risk.risk}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">
                        ${risk.value.toLocaleString()}
                      </span>
                      <span className="font-semibold text-slate-200">
                        {risk.percent.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-ink-800">
                    <div
                      className={`h-full ${
                        risk.risk === "High"
                          ? "bg-red-500"
                          : "bg-yellow-500"
                      }`}
                      style={{ width: `${risk.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-amber-400/20 bg-amber-400/10 p-4">
              <div className="flex items-start gap-2 text-sm text-amber-200">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Consider reducing high-risk exposure to below 25% for better
                  portfolio stability
                </span>
              </div>
            </div>
          </div>
        </Panel>
      </div>

      {/* Holdings */}
      <Panel className="mt-6">
        <PanelHeader
          title="Your Holdings"
          subtitle={`${portfolioHoldings.length} active positions`}
          action={
            <Button variant="ghost" size="sm">
              <Filter className="h-3.5 w-3.5" />
              Filter
            </Button>
          }
        />
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-line text-left">
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Product
                </th>
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Type
                </th>
                <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Quantity
                </th>
                <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Avg. Buy
                </th>
                <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Current
                </th>
                <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Total Value
                </th>
                <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                  P/L
                </th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/70">
              {portfolioHoldings.map((holding) => (
                <HoldingRow key={holding.id} holding={holding} />
              ))}
            </tbody>
          </table>
        </div>
      </Panel>

      {/* Top Performers & Market Analysis */}
      <div className="mt-6 grid gap-4 xl:grid-cols-2">
        <Panel>
          <PanelHeader
            title="Top Performers (24h)"
            subtitle="Best performing products today"
            action={<Badge tone="ok">+1.5% avg</Badge>}
          />
          <div className="grid gap-px bg-line sm:grid-cols-2">
            {topPerformers.map((product) => (
              <ProductCard key={product.id} product={product} compact />
            ))}
          </div>
        </Panel>

        <Panel>
          <PanelHeader
            title="Market Analysis & Outlook"
            subtitle="Expert forecasts and target prices"
            action={
              <Badge tone="ok">
                <Sparkles className="mr-1 h-3 w-3" />
                AI-powered
              </Badge>
            }
          />
          <div className="divide-y divide-line/70">
            {bullishAnalyses.map((analysis) => (
              <AnalysisCard key={analysis.commodity} analysis={analysis} />
            ))}
          </div>
        </Panel>
      </div>

      {/* Available Products */}
      <Panel className="mt-6">
        <PanelHeader
          title="Available Investment Products"
          subtitle={`${investmentProducts.length} products across ETFs, stocks, futures and funds`}
          action={
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Search className="h-3.5 w-3.5" />
                Search
              </Button>
              <Button variant="ghost" size="sm">
                <Filter className="h-3.5 w-3.5" />
                Filter
              </Button>
            </div>
          }
        />
        <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {investmentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Panel>

      {/* Recent Transactions & Educational Resources */}
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Panel>
          <PanelHeader
            title="Recent Transactions"
            subtitle="Your trading history"
            action={
              <Button variant="ghost" size="sm">
                View all
                <ArrowUpRight className="ml-1 h-3 w-3" />
              </Button>
            }
          />
          <ul className="divide-y divide-line/70">
            {recentTransactions.map((tx) => (
              <TransactionItem key={tx.id} transaction={tx} />
            ))}
          </ul>
        </Panel>

        <Panel>
          <PanelHeader
            title="Educational Resources"
            subtitle="Learn about oil & gas investing"
            icon={<BookOpen className="h-4 w-4" />}
          />
          <ul className="divide-y divide-line/70">
            {educationalResources.map((resource) => (
              <li
                key={resource.id}
                className="flex items-center justify-between px-5 py-3.5 transition-colors hover:bg-ink-900/40"
              >
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <Badge tone="info">{resource.category}</Badge>
                    <Badge tone="neutral">{resource.level}</Badge>
                  </div>
                  <h4 className="text-sm font-medium text-slate-200">
                    {resource.title}
                  </h4>
                  <p className="mt-1 text-xs text-slate-500">
                    {resource.duration}
                  </p>
                </div>
                <Button variant="outline" size="sm" className="shrink-0">
                  Read
                </Button>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}

function HoldingRow({ holding }: { holding: PortfolioHolding }) {
  const isProfit = holding.profitLoss > 0;

  return (
    <tr className="transition-colors hover:bg-ink-900/40">
      <td className="px-5 py-4">
        <div>
          <div className="font-medium text-slate-200">
            {holding.productName}
          </div>
          <div className="mt-0.5 font-mono text-xs text-slate-500">
            {holding.ticker}
          </div>
        </div>
      </td>
      <td className="px-5 py-4">
        <Badge tone="neutral">{holding.type}</Badge>
      </td>
      <td className="px-5 py-4 text-right font-mono text-sm text-slate-300">
        {holding.quantity}
      </td>
      <td className="px-5 py-4 text-right font-mono text-sm text-slate-400">
        ${holding.avgBuyPrice.toFixed(2)}
      </td>
      <td className="px-5 py-4 text-right font-mono text-sm text-slate-200">
        ${holding.currentPrice.toFixed(2)}
      </td>
      <td className="px-5 py-4 text-right font-mono text-sm font-medium text-slate-100">
        ${holding.totalValue.toLocaleString()}
      </td>
      <td className="px-5 py-4 text-right">
        <div
          className={`font-semibold ${isProfit ? "text-green-400" : "text-red-400"}`}
        >
          {isProfit ? "+" : ""}${holding.profitLoss.toFixed(2)}
        </div>
        <div
          className={`mt-0.5 text-xs ${isProfit ? "text-green-400/70" : "text-red-400/70"}`}
        >
          {isProfit ? "+" : ""}
          {holding.profitLossPercent.toFixed(2)}%
        </div>
      </td>
      <td className="px-5 py-4">
        <Button variant="outline" size="sm">
          Trade
        </Button>
      </td>
    </tr>
  );
}

function ProductCard({
  product,
  compact,
}: {
  product: InvestmentProduct;
  compact?: boolean;
}) {
  const isPositive = product.change > 0;
  const Icon = isPositive ? ArrowUpRight : ArrowDownRight;

  return (
    <div
      className={`flex flex-col gap-3 ${compact ? "bg-ink-900/40 p-4" : "rounded-xl border border-line bg-ink-900/60 p-4 transition-all hover:border-line/80 hover:bg-ink-900/80"}`}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="mb-1 flex items-center gap-2">
            <Badge tone="info" className="text-[10px]">
              {product.type.toUpperCase()}
            </Badge>
            <Badge
              tone={
                product.risk === "high"
                  ? "crit"
                  : product.risk === "medium"
                  ? "neutral"
                  : "ok"
              }
              className="text-[10px]"
            >
              {product.risk}
            </Badge>
          </div>
          <h4 className="text-sm font-semibold text-slate-200">
            {compact ? product.ticker : product.name}
          </h4>
          <p className="mt-0.5 font-mono text-xs text-slate-500">
            {product.ticker}
          </p>
        </div>
        <Icon
          className={`h-4 w-4 ${isPositive ? "text-green-400" : "text-red-400"}`}
        />
      </div>

      <div className="flex items-end gap-2">
        <span className="stat-value text-xl">
          ${product.price.toLocaleString()}
        </span>
        <span
          className={`mb-0.5 text-sm font-semibold ${isPositive ? "text-green-400" : "text-red-400"}`}
        >
          {isPositive ? "+" : ""}
          {product.changePercent.toFixed(2)}%
        </span>
      </div>

      {!compact && (
        <>
          <p className="line-clamp-2 text-xs leading-relaxed text-slate-400">
            {product.description}
          </p>
          <div className="flex items-center justify-between border-t border-line pt-3 text-xs">
            <span className="text-slate-500">Vol: {product.volume}</span>
            <Button variant="primary" size="sm">
              <ShoppingCart className="mr-1 h-3 w-3" />
              Trade
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

function AnalysisCard({ analysis }: { analysis: MarketAnalysis }) {
  const outlookColor =
    analysis.outlook === "bullish"
      ? "text-green-400"
      : analysis.outlook === "bearish"
      ? "text-red-400"
      : "text-slate-400";

  return (
    <div className="p-5">
      <div className="mb-3 flex items-start justify-between">
        <div>
          <h4 className="text-sm font-semibold text-slate-200">
            {analysis.commodity}
          </h4>
          <div className="mt-1 flex items-center gap-2">
            <Badge
              tone={
                analysis.outlook === "bullish"
                  ? "ok"
                  : analysis.outlook === "bearish"
                  ? "crit"
                  : "neutral"
              }
            >
              {analysis.outlook.toUpperCase()}
            </Badge>
            <span className="text-xs text-slate-500">
              {analysis.timeframe}
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-slate-500">Target</div>
          <div className={`mt-0.5 text-lg font-semibold ${outlookColor}`}>
            ${analysis.targetPrice.toFixed(2)}
          </div>
        </div>
      </div>

      <div className="mb-3">
        <div className="mb-1.5 flex items-center justify-between text-xs">
          <span className="text-slate-500">Confidence</span>
          <span className="font-medium text-slate-300">
            {analysis.confidence}%
          </span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-ink-800">
          <div
            className="h-full bg-gradient-to-r from-petro-500 to-petro-400"
            style={{ width: `${analysis.confidence}%` }}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {analysis.keyFactors.map((factor) => (
          <span
            key={factor}
            className="rounded-md bg-ink-800 px-2 py-1 text-[10px] text-slate-400"
          >
            {factor}
          </span>
        ))}
      </div>
    </div>
  );
}

function TransactionItem({ transaction }: { transaction: Transaction }) {
  const isBuy = transaction.type === "buy";
  const Icon = isBuy ? TrendingUp : TrendingDown;

  return (
    <li className="px-5 py-3.5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-start gap-3">
          <div
            className={`mt-1 rounded-lg ${isBuy ? "bg-green-400/10 text-green-400" : "bg-red-400/10 text-red-400"} p-2`}
          >
            <Icon className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <div className="mb-1 flex items-center gap-2">
              <Badge tone={isBuy ? "ok" : "neutral"}>
                {transaction.type.toUpperCase()}
              </Badge>
              <Badge tone="info">
                {transaction.status === "completed" ? "Completed" : "Pending"}
              </Badge>
            </div>
            <h4 className="text-sm font-medium text-slate-200">
              {transaction.productName}
            </h4>
            <p className="mt-1 text-xs text-slate-500">
              {transaction.quantity} × ${transaction.price.toFixed(2)} •{" "}
              {transaction.date.toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="font-mono text-sm font-semibold text-slate-100">
            ${transaction.total.toLocaleString()}
          </div>
          <div className="mt-0.5 font-mono text-xs text-slate-500">
            {transaction.ticker}
          </div>
        </div>
      </div>
    </li>
  );
}
