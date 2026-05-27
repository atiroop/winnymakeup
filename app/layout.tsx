import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Winny Makeup Artist | Bridal & Event Makeup in Bangkok",
    template: "%s | Winny Makeup Artist",
  },
  description:
    "Luxury makeup artist for bridal, editorial, event, and special occasion makeup in Bangkok, Thailand.",
  keywords: [
    "Winny Makeup Artist",
    "Makeup Artist Bangkok",
    "Bridal Makeup Bangkok",
    "แต่งหน้าเจ้าสาว",
    "ช่างแต่งหน้ากรุงเทพ",
    "รับแต่งหน้าเจ้าสาว",
    "แต่งหน้าออกงาน",
  ],
  openGraph: {
    title: "Winny Makeup Artist | Bridal & Event Makeup in Bangkok",
    description:
      "Luxury makeup artist portfolio for bridal, editorial, event, and special occasion makeup in Bangkok, Thailand.",
    url: "https://winnymakeup.net",
    siteName: "Winny Makeup Artist",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Winny Makeup Artist",
    description: "Luxury bridal & event makeup artist in Bangkok, Thailand.",
  },
  metadataBase: new URL("https://winnymakeup.net"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-ivory">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
