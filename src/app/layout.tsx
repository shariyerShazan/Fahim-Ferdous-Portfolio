import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "../styles/globals.css";
import FrameBorder from "@/components/FrameBorder";
import Navbar from "@/components/Navbar";
import { AOSInit } from "@/components/AOSInit";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Md. Fahim Ferdous | Firmware & Embedded Systems Developer",
  description: "Portfolio of Md. Fahim Ferdous - Specialist in STM32, ESP32, IoT system architectures, and IEEE Leader.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased text-slate-200 bg-[#0a0f1d]`}>
        <AOSInit />
        <CustomCursor />
        <Navbar />
        <FrameBorder />
        {/* Main content wrapper with padding for the railway border */}
        <main className="relative z-10 pt-20 pb-20 px-8 md:px-12">
          {children}
        </main>
      </body>
    </html>
  );
}
