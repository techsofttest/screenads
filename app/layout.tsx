import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";


const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Screen Ads | Creative Advertising & Digital Growth",
  description:
    "Screen Ads is an advertising and digital marketing agency based in Muvattupuzha, Kerala.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable} `}>
        <CustomCursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
