import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "[NUME RESTAURANT] - Restaurant Premium în București | Fine Dining Experience",
  description: "Experiențe culinare rafinate în inima Bucureștiului. Chef cu experiență internațională, ingrediente premium și atmosferă elegantă. Rezervă acum masa ta.",
  keywords: "restaurant bucuresti, fine dining bucuresti, restaurant premium, experienta culinara, chef international, meniu sezonier",
  authors: [{ name: "Roxana Lăudatu", url: "https://calendly.com/laudatu-roxana/30min" }],
  openGraph: {
    title: "[NUME RESTAURANT] - Restaurant Premium în București",
    description: "Experiențe culinare rafinate în inima Bucureștiului",
    type: "website",
    locale: "ro_RO",
    siteName: "[NUME RESTAURANT]",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body>{children}</body>
    </html>
  );
}
