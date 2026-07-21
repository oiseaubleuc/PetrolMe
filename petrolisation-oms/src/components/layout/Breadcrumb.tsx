"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { ChevronRight } from "lucide-react";
import { breadcrumbs } from "@/lib/navigation";

export function Breadcrumb() {
  const pathname = usePathname();
  const current = breadcrumbs[pathname] ?? { label: "Workspace" };
  const trail: { href: string; label: string }[] = [];

  if (current.parent) {
    trail.push({ href: "/", label: "Home" });
  }
  trail.push({ href: pathname, label: current.label });

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs">
      {trail.map((item, i) => {
        const last = i === trail.length - 1;
        return (
          <Fragment key={item.href + item.label}>
            {i > 0 && <ChevronRight className="h-3 w-3 text-slate-600" />}
            {last ? (
              <span className="font-medium text-slate-300">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="text-slate-500 transition-colors hover:text-slate-300"
              >
                {item.label}
              </Link>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
}
