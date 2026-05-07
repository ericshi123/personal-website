import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Xintong Shi — Data Scientist & ML Engineer",
  description:
    "Portfolio of Xintong Shi, a Data Scientist and ML Engineer specializing in large-scale ML systems, fraud detection, and real-time prediction.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.className} ${playfair.variable} scroll-smooth`}>
      <body className="bg-[#FAF8F5] text-[#1C1917] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
