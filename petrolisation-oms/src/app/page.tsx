import type { Metadata } from "next";
import { LandingPage } from "@/components/marketing/LandingPage";

export const metadata: Metadata = {
  title: "Pages de la plateforme",
  description: "Oilconnect — overview, marchés, trading, portefeuille et logistique.",
};

export default function HomePage() {
  return <LandingPage />;
}