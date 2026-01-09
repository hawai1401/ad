import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ad.hawai1401.fr"),
  title: {
    template: "AD | %s",
    default: "AD",
  },
  description:
    "Le Groupe AD a pour mission de rassembler un maximum de serveurs Discord. Rejoignez notre communauté grandissante et découvrez nos serveurs dédiés aux fondateurs, développeurs et bien plus encore !",
  openGraph: {
    title: "Groupe AD",
    description:
      "Le Groupe AD a pour mission de rassembler un maximum de serveurs Discord. Rejoignez notre communauté grandissante et découvrez nos serveurs dédiés aux fondateurs, développeurs et bien plus encore !",
    url: "https://ad.hawai1401.fr",
    siteName: "AD",
    images: [
      {
        url: "/logo.webp",
        // width: 1200,
        width: 630,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Groupe AD",
    description:
      "Le Groupe AD a pour mission de rassembler un maximum de serveurs Discord. Rejoignez notre communauté grandissante et découvrez nos serveurs dédiés aux fondateurs, développeurs et bien plus encore !",
    images: ["/logo.webp"],
  },
  robots: "index, follow",
  authors: [{ name: "AD Team" }],
  creator: "rezz_que",
  keywords: [
    "AD",
    "ADF",
    "ADD",
    "Groupe",
    "Discord",
    "Assemblée",
    "Fondateur",
    "Développeur",
    "Serveur",
  ],
  applicationName: "AD",
  category: "Social Media",
  classification: "Discord Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-theme="ad">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
        <Analytics />
        <Footer />
        <Toaster position="top-center" visibleToasts={3} />
        <SpeedInsights />
      </body>
    </html>
  );
}
