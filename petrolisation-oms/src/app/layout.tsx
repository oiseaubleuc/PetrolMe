import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PetrolMe — Pétrole, marchés & investissement",
    template: "%s · PetrolMe",
  },
  description:
    "Plateforme professionnelle pour suivre le pétrole et le gaz : opérations, actualités des marchés et outils d'investissement. Pensée pour les décideurs, investisseurs et équipes opérationnelles.",
  applicationName: "PetrolMe",
  authors: [{ name: "PetrolMe" }],
  keywords: [
    "pétrole",
    "investissement pétrolier",
    "Oil & Gas",
    "Brent",
    "WTI",
    "Operations Management",
    "actualités énergie",
  ],
  openGraph: {
    title: "PetrolMe — Pétrole, marchés & investissement",
    description:
      "Opérations, intelligence marché et plateforme d'investissement pétrolier dans une expérience unifiée.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#070A0F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`dark ${sans.variable} ${mono.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
