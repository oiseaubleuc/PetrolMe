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
        <footer className="border-t border-line px-6 py-3 text-center text-[10px] tracking-wide text-slate-600">
          Petrolisation OMS · Operations Management System · Developed by Hohosolutions · © 2026
          {" · "}
          <a
            href="https://petrolisation.netlify.app"
            className="text-slate-500 underline-offset-2 hover:text-slate-300 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Website
          </a>
        </footer>
      </div>
    </div>
  );
}
