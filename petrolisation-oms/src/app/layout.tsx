import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://oilconnects.netlify.app"
  ),
  title: {
    default: "Oilconnect — Oil trading platform",
    template: "%s · Oilconnect",
  },
  description:
    "Oilconnect connects trading overview, oil markets, buy & sell, portfolio, shipments, inventory and counterparties on one professional desk.",
  applicationName: "Oilconnect",
  keywords: [
    "Oilconnect",
    "oil trading",
    "Brent",
    "WTI",
    "portfolio",
    "shipments",
    "counterparties",
  ],
  openGraph: {
    title: "Oilconnect — Pages de la plateforme",
    description: "Professional oil trading desk — overview, markets, portfolio and logistics.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0D1015",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`dark ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}