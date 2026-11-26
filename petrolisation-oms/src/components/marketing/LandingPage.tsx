import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  LineChart,
  Newspaper,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { LogoMark } from "@/components/brand/Logo";
import { marketIndicators } from "@/lib/data/news";

const modules = [
  {
    href: "/dashboard",
    title: "Pilotage opérationnel",
    description:
      "Tableau de bord exécutif, production, maintenance, HSE, cartographie des sites et intelligence opérationnelle.",
    icon: Building2,
    cta: "Ouvrir le tableau de bord",
  },
  {
    href: "/news",
    title: "Intelligence marché",
    description:
      "Prix des commodités, sentiment de marché, volumes et fil d'actualité pétrolier et énergétique.",
    icon: Newspaper,
    cta: "Voir les actualités",
  },
  {
    href: "/investment",
    title: "Investissement pétrolier",
    description:
      "Portefeuille, allocation, produits (ETF, actions, futures), analyses et ressources pédagogiques.",
    icon: TrendingUp,
    cta: "Explorer l'investissement",
  },
];

const trustPoints = [
  { label: "Modules intégrés", value: "15+", detail: "De l'opération au trading" },
  { label: "Couverture marché", value: "6", detail: "Indicateurs commodities" },
  { label: "Expérience", value: "360°", detail: "Ops, news & investissement" },
  { label: "Déploiement", value: "Custom", detail: "Prêt pour votre domaine" },
];

export function LandingPage() {
  const featured = marketIndicators.slice(0, 4);

  return (
    <div className="relative min-h-screen overflow-hidden bg-ink-950 text-slate-200">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[520px] w-[520px] rounded-full bg-petro-500/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-[480px] w-[480px] rounded-full bg-flare-500/10 blur-3xl"
        aria-hidden
      />

      <header className="relative z-20 border-b border-line/80 bg-ink-950/75 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-4 px-5 md:px-8">
          <Link href="/" className="flex items-center gap-2.5 focus-ring rounded-lg">
            <LogoMark className="h-9 w-9" />
            <div className="leading-none">
              <div className="text-lg font-semibold tracking-tight text-white">
                Petrol<span className="text-gradient-flare">Me</span>
              </div>
              <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-slate-500">
                Oil · Markets · Invest
              </div>
            </div>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-400 md:flex">
            <a href="#solutions" className="transition-colors hover:text-white">
              Solutions
            </a>
            <a href="#marches" className="transition-colors hover:text-white">
              Marchés
            </a>
            <a href="#investir" className="transition-colors hover:text-white">
              Investir
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href="/news"
              className="hidden rounded-lg border border-line px-3.5 py-2 text-xs font-semibold text-slate-300 transition-colors hover:bg-white/[0.04] sm:inline-flex"
            >
              Actualités
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-lg bg-flare-500 px-4 py-2 text-xs font-semibold text-white shadow-glow transition hover:bg-flare-400"
            >
              Plateforme
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto max-w-[1200px] px-5 pb-16 pt-16 md:px-8 md:pb-20 md:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-flare-300">
                <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-status-ok" />
                Plateforme professionnelle pétrole & énergie
              </p>
              <h1 className="font-display text-[clamp(2.2rem,4vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-white">
                Pilotez l&apos;énergie.
                <br />
                <span className="italic text-gradient-flare">Anticipez les marchés.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 md:text-[1.05rem]">
                PetrolMe regroupe opérations, actualités des marchés et investissement dans une
                interface sobre et exigeante — prête pour votre nom de domaine et vos clients.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/dashboard"
                  className="inline-flex h-11 items-center gap-2 rounded-xl bg-flare-500 px-5 text-sm font-semibold text-white transition hover:bg-flare-400"
                >
                  Accéder à la plateforme
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/investment"
                  className="inline-flex h-11 items-center gap-2 rounded-xl border border-line bg-white/[0.03] px-5 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.06]"
                >
                  Découvrir l&apos;investissement
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap gap-2">
                {["Opérations", "Marchés", "Portefeuille", "Analytique", "Sécurité"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line bg-ink-900/60 px-3 py-1 text-[11px] font-medium text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 rounded-[1.35rem] bg-gradient-to-br from-petro-500/25 via-transparent to-flare-500/25 blur-sm" />
              <div className="relative overflow-hidden rounded-[1.25rem] border border-line bg-ink-900/90 shadow-panel backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-line px-5 py-4">
                  <BrandTitle />
                  <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-status-ok">
                    <span className="h-1.5 w-1.5 rounded-full bg-status-ok" />
                    Live demo
                  </span>
                </div>
                <div className="grid gap-px bg-line sm:grid-cols-2">
                  {featured.map((m) => (
                    <div key={m.id} className="bg-ink-900/80 px-5 py-4">
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                        {m.name}
                      </div>
                      <div className="mt-1 flex items-end gap-2">
                        <span className="stat-value text-2xl">${m.value.toFixed(2)}</span>
                        <span
                          className={`mb-0.5 text-xs font-semibold ${
                            m.change >= 0 ? "text-status-ok" : "text-status-crit"
                          }`}
                        >
                          {m.change >= 0 ? "+" : ""}
                          {m.changePercent.toFixed(2)}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-line px-5 py-4 text-xs text-slate-500">
                  Indicateurs de démonstration · non-contractuels
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="marches"
          className="border-y border-line/80 bg-ink-900/40 py-3 backdrop-blur-sm"
        >
          <div className="flex animate-none overflow-x-auto">
            <div className="flex min-w-max items-center gap-10 px-5 text-xs md:px-8">
              {marketIndicators.map((m) => (
                <div key={m.id} className="flex items-center gap-3 whitespace-nowrap">
                  <span className="font-medium text-slate-300">{m.name}</span>
                  <span className="stat-value text-sm">${m.value.toFixed(2)}</span>
                  <span
                    className={`font-semibold ${m.change >= 0 ? "text-status-ok" : "text-status-crit"}`}
                  >
                    {m.change >= 0 ? "+" : ""}
                    {m.changePercent.toFixed(2)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="solutions" className="mx-auto max-w-[1200px] px-5 py-20 md:px-8">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Une seule expérience, trois piliers
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
            De la salle de contrôle au portefeuille investisseur — navigation cohérente, identité
            visuelle unifiée et modules prêts pour un déploiement sur domaine personnalisé.
          </p>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {modules.map((mod) => {
              const Icon = mod.icon;
              return (
                <Link
                  key={mod.href}
                  href={mod.href}
                  className="group panel flex h-full flex-col p-6 transition hover:border-line-strong hover:bg-ink-900/90"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-flare-400">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white">{mod.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                    {mod.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-flare-300 transition group-hover:gap-2.5">
                    {mod.cta}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <section id="investir" className="border-t border-line/80 bg-ink-900/35 py-20">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-white">
                Prêt pour votre domaine
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400">
                Déployez sur Netlify, Vercel ou votre hébergeur avec une vitrine publique
                professionnelle et une application connectée. Les chiffres affichés restent des
                données de démonstration jusqu&apos;à branchement de vos API marché.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-petro-300" />
                  Identité visuelle unifiée (sombre premium, typographie éditoriale)
                </li>
                <li className="flex items-start gap-2">
                  <BarChart3 className="mt-0.5 h-4 w-4 shrink-0 text-petro-300" />
                  Modules opérationnels et analytiques prêts à présenter
                </li>
                <li className="flex items-start gap-2">
                  <LineChart className="mt-0.5 h-4 w-4 shrink-0 text-petro-300" />
                  Parcours investisseur et actualités marchés intégrés
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {trustPoints.map((t) => (
                <div
                  key={t.label}
                  className="rounded-2xl border border-line bg-ink-950/70 p-5 backdrop-blur-sm"
                >
                  <div className="label-muted">{t.label}</div>
                  <div className="stat-value mt-2 text-3xl">{t.value}</div>
                  <div className="mt-1 text-xs text-slate-500">{t.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-16 md:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-petro-700/30 via-ink-900 to-flare-600/20 px-8 py-12 text-center md:px-12">
            <h2 className="font-display text-3xl font-bold text-white">
              Lancez votre démonstration professionnelle
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
              Entrez sur la plateforme, explorez les marchés et présentez un parcours investisseur
              crédible à vos partenaires — avant de connecter votre nom de domaine.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/dashboard"
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-ink-950 transition hover:bg-slate-100"
              >
                Ouvrir la plateforme
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/news"
                className="inline-flex h-11 items-center rounded-xl border border-white/20 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Voir les marchés
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line/80 bg-ink-950/90 py-10">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-5 text-center text-xs text-slate-500 md:flex-row md:px-8 md:text-left">
          <BrandTitle small />
          <p>
            Données de démonstration — non contractuelles. © {new Date().getFullYear()} PetrolMe. Tous
            droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}

function BrandTitle({ small = false }: { small?: boolean }) {
  return (
    <span className="font-semibold text-white text-sm">
      Petrol<span className="text-gradient-flare">Me</span>
      {!small && (
        <span className="ml-2 text-[10px] font-medium uppercase tracking-wider text-slate-500">
          Executive preview
        </span>
      )}
    </span>
  );
}