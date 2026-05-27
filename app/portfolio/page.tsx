import type { Metadata } from "next";
import PortfolioPageClient from "./PortfolioPageClient";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse the complete makeup and hair styling portfolio — bridal, editorial, events, and more.",
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
