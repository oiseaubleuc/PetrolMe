import {
  TrendingUp,
  TrendingDown,
  Flame,
  Globe,
  FileText,
  Cpu,
  Scale,
  DollarSign,
  RefreshCw,
  Bell,
  Filter,
  ArrowUpRight,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Panel, PanelHeader } from "@/components/ui/Panel";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { KpiCard } from "@/components/ui/KpiCard";
import {
  newsArticles,
  marketIndicators,
  marketSentiment,
  tradingVolume,
  type NewsArticle,
  type MarketIndicator,
} from "@/lib/data/news";
import { formatCompact, timeAgo } from "@/lib/utils";

export const metadata = {
  title: "Market News",
};

const categoryIcons: Record<NewsArticle["category"], any> = {
  market: DollarSign,
  opec: Flame,
  regulation: Scale,
  technology: Cpu,
  geopolitics: Globe,
  prices: TrendingUp,
};

const categoryColors: Record<NewsArticle["category"], string> = {
  market: "text-blue-400",
  opec: "text-orange-400",
  regulation: "text-purple-400",
  technology: "text-cyan-400",
  geopolitics: "text-red-400",
  prices: "text-green-400",
};

export default function NewsPage() {
  const trendingNews = newsArticles.filter((n) => n.trending);
  const latestNews = newsArticles.slice(0, 8);

  return (
    <div>
      <PageHeader
        title="Market News & Intelligence"
        description="Real-time oil & gas market updates, commodity prices, geopolitical developments and industry intelligence"
        meta={
          <>
            <Badge tone="ok" dot pulse>
              Live updates
            </Badge>
            <Badge tone="info">{newsArticles.length} articles today</Badge>
            <Badge tone="flare">
              Market Sentiment: {marketSentiment.overall.toUpperCase()}
            </Badge>
          </>
        }
        actions={
          <>
            <Button variant="outline" size="sm">
              <Filter className="h-3.5 w-3.5" />
              Filters
            </Button>
            <Button variant="outline" size="sm">
              <Bell className="h-3.5 w-3.5" />
              Alerts
            </Button>
            <Button variant="secondary" size="sm">
              <RefreshCw className="h-3.5 w-3.5" />
              Refresh
            </Button>
          </>
        }
      />

      {/* Market Indicators */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {marketIndicators.map((indicator, i) => (
          <div
            key={indicator.id}
            style={{ animationDelay: `${i * 30}ms` }}
            className="animate-fade-up"
          >
            <IndicatorCard indicator={indicator} />
          </div>
        ))}
      </div>

      {/* Market Sentiment & Volume */}
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Panel>
          <PanelHeader
            title="Market Sentiment Analysis"
            subtitle="AI-powered sentiment scoring"
            action={
              <Badge
                tone={
                  marketSentiment.overall === "bullish"
                    ? "ok"
                    : marketSentiment.overall === "bearish"
                    ? "crit"
                    : "neutral"
                }
              >
                {marketSentiment.score}/100
              </Badge>
            }
          />
          <div className="p-5">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-lg font-semibold text-slate-200">
                Overall: {marketSentiment.overall.charAt(0).toUpperCase() + marketSentiment.overall.slice(1)}
              </span>
              <div className="flex items-center gap-2">
                {marketSentiment.overall === "bullish" ? (
                  <TrendingUp className="h-5 w-5 text-green-400" />
                ) : (
                  <TrendingDown className="h-5 w-5 text-red-400" />
                )}
              </div>
            </div>
            <div className="space-y-3">
              {marketSentiment.factors.map((f) => (
                <div key={f.factor} className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">{f.factor}</span>
                    <span className="font-medium text-slate-200">
                      {f.impact}/10
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-ink-800">
                    <div
                      className="h-full bg-gradient-to-r from-petro-500 to-petro-400 transition-all"
                      style={{ width: `${f.impact * 10}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Panel>

        <Panel>
          <PanelHeader
            title="Trading Volume (24h)"
            subtitle="Futures contract activity"
          />
          <div className="grid grid-cols-3 gap-4 p-5">
            <VolumeCard
              label="Brent Crude"
              volume={tradingVolume.brent.volume}
              unit={tradingVolume.brent.unit}
              change={tradingVolume.brent.change}
            />
            <VolumeCard
              label="WTI Crude"
              volume={tradingVolume.wti.volume}
              unit={tradingVolume.wti.unit}
              change={tradingVolume.wti.change}
            />
            <VolumeCard
              label="Natural Gas"
              volume={tradingVolume.natgas.volume}
              unit={tradingVolume.natgas.unit}
              change={tradingVolume.natgas.change}
            />
          </div>
          <div className="border-t border-line px-5 py-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500">
                Updated {timeAgo(marketIndicators[0].lastUpdated)}
              </span>
              <Button variant="ghost" size="sm">
                View detailed volume
                <ArrowUpRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </div>
        </Panel>
      </div>

      {/* Trending News */}
      <Panel className="mt-6">
        <PanelHeader
          title="Trending Headlines"
          subtitle={`${trendingNews.length} high-impact stories`}
          action={
            <Badge tone="flare" dot pulse>
              Trending
            </Badge>
          }
        />
        <div className="grid gap-px bg-line lg:grid-cols-2">
          {trendingNews.map((article) => (
            <TrendingNewsCard key={article.id} article={article} />
          ))}
        </div>
      </Panel>

      {/* Latest News Feed */}
      <Panel className="mt-6">
        <PanelHeader
          title="Latest News Feed"
          subtitle="Real-time market updates and analysis"
          action={
            <Button variant="ghost" size="sm">
              View all articles
              <ArrowUpRight className="ml-1 h-3 w-3" />
            </Button>
          }
        />
        <ul className="divide-y divide-line/70">
          {latestNews.map((article) => (
            <NewsListItem key={article.id} article={article} />
          ))}
        </ul>
      </Panel>
    </div>
  );
}

function IndicatorCard({ indicator }: { indicator: MarketIndicator }) {
  const isPositive = indicator.change > 0;

  return (
    <div className="flex flex-col gap-2 rounded-xl border border-line bg-ink-900/60 p-4 backdrop-blur-sm transition-all hover:border-line/80 hover:bg-ink-900/80">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-slate-500">
          {indicator.name}
        </span>
        {isPositive ? (
          <TrendingUp className="h-3.5 w-3.5 text-green-400" />
        ) : (
          <TrendingDown className="h-3.5 w-3.5 text-red-400" />
        )}
      </div>
      <div className="flex items-end gap-1.5">
        <span className="stat-value text-2xl">{indicator.value.toFixed(2)}</span>
        <span className="mb-0.5 text-[10px] text-slate-500">
          {indicator.unit}
        </span>
      </div>
      <div className="flex items-center gap-2 text-xs">
        <span
          className={`font-semibold ${
            isPositive ? "text-green-400" : "text-red-400"
          }`}
        >
          {isPositive ? "+" : ""}
          {indicator.changePercent.toFixed(2)}%
        </span>
        <span className="text-slate-600">
          {isPositive ? "+" : ""}
          {indicator.change.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

function VolumeCard({
  label,
  volume,
  unit,
  change,
}: {
  label: string;
  volume: string;
  unit: string;
  change: number;
}) {
  const isPositive = change > 0;

  return (
    <div className="rounded-xl border border-line bg-ink-850/50 p-4">
      <div className="text-[10px] font-medium uppercase tracking-wide text-slate-500">
        {label}
      </div>
      <div className="mt-2 stat-value text-xl">{volume}</div>
      <div className="mt-1 text-[10px] text-slate-600">{unit}</div>
      <div
        className={`mt-2 text-xs font-semibold ${
          isPositive ? "text-green-400" : "text-red-400"
        }`}
      >
        {isPositive ? "+" : ""}
        {change.toFixed(1)}%
      </div>
    </div>
  );
}

function TrendingNewsCard({ article }: { article: NewsArticle }) {
  const Icon = categoryIcons[article.category];
  const colorClass = categoryColors[article.category];

  return (
    <div className="flex flex-col gap-3 bg-ink-900/40 p-5 transition-colors hover:bg-ink-900/60">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <Icon className={`h-4 w-4 ${colorClass}`} />
          <Badge tone={article.impact === "high" ? "flare" : "neutral"}>
            {article.category}
          </Badge>
        </div>
        <Badge tone="info" className="text-[10px]">
          {timeAgo(article.timestamp)}
        </Badge>
      </div>
      <h3 className="text-base font-semibold leading-snug text-slate-100 hover:text-white">
        {article.title}
      </h3>
      <p className="line-clamp-2 text-sm leading-relaxed text-slate-400">
        {article.summary}
      </p>
      <div className="flex items-center justify-between border-t border-line/50 pt-3 text-xs">
        <span className="text-slate-500">{article.source}</span>
        <Button variant="ghost" size="sm">
          Read more
          <ArrowUpRight className="ml-1 h-3 w-3" />
        </Button>
      </div>
    </div>
  );
}

function NewsListItem({ article }: { article: NewsArticle }) {
  const Icon = categoryIcons[article.category];
  const colorClass = categoryColors[article.category];

  return (
    <li className="px-5 py-4 transition-colors hover:bg-ink-900/40">
      <div className="flex items-start gap-4">
        <div
          className={`mt-1 rounded-lg border border-line bg-ink-850 p-2 ${colorClass}`}
        >
          <Icon className="h-4 w-4" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="mb-1.5 flex items-center gap-2">
                <Badge tone={article.impact === "high" ? "flare" : "neutral"}>
                  {article.category}
                </Badge>
                {article.trending && (
                  <Badge tone="ok">
                    <Flame className="mr-1 h-3 w-3" />
                    Trending
                  </Badge>
                )}
              </div>
              <h4 className="mb-1.5 text-sm font-semibold text-slate-100 hover:text-white">
                {article.title}
              </h4>
              <p className="mb-2 text-sm leading-relaxed text-slate-400">
                {article.summary}
              </p>
              <div className="flex items-center gap-3 text-[10px] text-slate-600">
                <span>{article.source}</span>
                <span>•</span>
                <span>{timeAgo(article.timestamp)}</span>
              </div>
            </div>
            <Button variant="outline" size="sm" className="shrink-0">
              Read
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
}
