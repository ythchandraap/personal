import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chandra | Fullstack Developer",
  description: "Premium portfolio of Chandra, a Fullstack Developer specializing in Go, Node.js, and React.",
  keywords: ["Fullstack Developer", "Go", "Next.js", "TypeScript", "Indonesia"],
  authors: [{ name: "Chandra" }],
  openGraph: {
    title: "Chandra | Fullstack Developer",
    description: "I build systems that scale and interfaces that matter.",
    url: "https://chandra.dev", // Placeholder
    siteName: "Chandra Portfolio",
    locale: "en_US",
    type: "website",
  },
};

import CustomCursor from "@/components/ui/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} font-sans bg-background text-foreground selection:bg-accent/30 selection:text-white antialiased`}
      >
        <CustomCursor />
        {/* Noise Texture Overlay */}
        <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] noise-bg" />
        
        {/* Animated Background Mesh */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent-secondary/10 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
