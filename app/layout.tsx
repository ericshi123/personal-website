import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ["latin"] });

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
    <html lang="en" className={`${geist.className} scroll-smooth`}>
      <body className="bg-slate-950 text-slate-200 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
