import type { Metadata } from "next";
import { LandingPage } from "@/components/marketing/LandingPage";

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "PetrolMe — plateforme professionnelle pour le pétrole, les marchés de l'énergie et l'investissement.",
};

export default function HomePage() {
  return <LandingPage />;
}