import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { company } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  alternates: { canonical: "/" },
  title: "Fortivex CRM — Admissions & Student Lifecycle CRM",
  description:
    "Fortivex CRM unifies lead capture, counsellor follow-ups, applications, admissions, batches, fees and placements in one AI-assisted platform built for education institutes.",
  keywords: [
    "admissions CRM",
    "education CRM",
    "student lifecycle CRM",
    "coaching institute CRM",
    "lead management software",
    "Fortivex",
  ],
  openGraph: {
    title: "Fortivex CRM — Admissions & Student Lifecycle CRM",
    description:
      "Every enquiry, from first call to final placement. One AI-assisted platform for admissions teams.",
    type: "website",
    url: "/",
    siteName: "Fortivex.AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fortivex CRM — Admissions & Student Lifecycle CRM",
    description: "Every enquiry, from first call to final placement.",
  },
  icons: { icon: "/favicon.png" },
};

export const viewport: Viewport = {
  themeColor: "#070b16",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
