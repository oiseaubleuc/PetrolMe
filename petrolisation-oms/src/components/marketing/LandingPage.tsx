import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LogoMark } from "@/components/brand/Logo";
import { oilconnectNavMeta } from "@/lib/oilconnect-nav-meta";

const boardBg = "#f5f4ef";

export function LandingPage() {
  return (
    <div style={{ background: boardBg }} className="min-h-screen text-[#1f1e1d]">
      <header className="border-b border-black/5 bg-[#faf9f5]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <LogoMark className="h-8 w-8" />
            <span className="text-lg font-bold tracking-tight">Oilconnect</span>
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-lg bg-[#0F151B] px-4 py-2 text-xs font-semibold text-[#E6EAF0]"
          >
            Ouvrir le desk
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6b6a68]">
          Oilconnect — pages de la plateforme
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Un desk pétrolier professionnel,{" "}
          <span className="text-[#2C6B50]">prêt pour votre domaine</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#6b6a68]">
          Overview, Buy &amp; Sell, Oil markets, Portfolio, Shipments, Inventory et Counterparties —
          repensés selon votre maquette Oilconnect avec navigation « command rail », vert desk et
          typographie Space Grotesk.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/dashboard"
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#10261D] px-5 text-sm font-semibold text-[#3DDC97] shadow-md"
          >
            Trading overview
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/trade"
            className="inline-flex h-11 items-center rounded-lg border border-black/10 bg-white px-5 text-sm font-semibold"
          >
            Buy &amp; Sell
          </Link>
        </div>

        <div className="mt-16 grid gap-12">
          {oilconnectNavMeta.map((item) => (
            <section key={item.id} className="scroll-mt-8">
              <h2 className="mb-3 text-sm font-medium text-[#6b6a68]">{item.label}</h2>
              <div className="overflow-hidden rounded-xl border border-black/5 bg-[#0D1015] shadow-[0_1px_3px_rgba(0,0,0,.12)]">
                <div className="flex items-center justify-between border-b border-[#1F2A33] px-5 py-3">
                  <span className="text-sm font-semibold text-[#E6EAF0]">{item.label}</span>
                  <span className="font-mono text-[10px] text-[#3DDC97]">{item.index}</span>
                </div>
                <div className="grid gap-px bg-[#1F2A33] sm:grid-cols-3">
                  <PreviewCell title="Module" value={item.description} />
                  <PreviewCell title="Route" value={item.href} mono />
                  <PreviewCell
                    title="Accès"
                    value={
                      <Link href={item.href} className="text-[#7AB8FF] hover:underline">
                        Open →
                      </Link>
                    }
                  />
                </div>
                <div className="px-5 py-8 text-center text-xs text-[#8B95A5]">
                  Aperçu statique — contenu interactif dans l&apos;application
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

function PreviewCell({
  title,
  value,
  mono,
}: {
  title: string;
  value: React.ReactNode;
  mono?: boolean;
}) {
  return (
    <div className="bg-[#0F151B] p-4">
      <div className="text-[10px] uppercase tracking-wider text-[#8B95A5]">{title}</div>
      <div
        className={`mt-2 text-sm text-[#E6EAF0] ${mono ? "font-mono text-xs" : "leading-relaxed"}`}
      >
        {value}
      </div>
    </div>
  );
}