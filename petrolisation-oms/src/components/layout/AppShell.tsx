"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />
        <main className="relative flex-1 px-4 py-6 md:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-[1600px] animate-fade-up">
            {children}
          </div>
        </main>
        <footer className="border-t border-line px-6 py-3 text-center text-[10px] tracking-wide text-desk-muted">
          Oilconnect · Global oil desk · Demo data · © {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}
