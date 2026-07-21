import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: "Petrolisation OMS — Operations Management System",
    template: "%s · Petrolisation OMS",
  },
  description:
    "Petrolisation OMS is the unified operations management platform for the Oil & Gas industry — production, assets, maintenance, HSE, logistics and business intelligence. Developed by Hohosolutions.",
  applicationName: "Petrolisation OMS",
  authors: [{ name: "Hohosolutions" }],
  keywords: [
    "Oil & Gas",
    "Operations Management",
    "SCADA",
    "Asset Management",
    "Predictive Maintenance",
    "HSE",
    "Enterprise SaaS",
  ],
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
    <html lang="en" className={`dark ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
