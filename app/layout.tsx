import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

// Closest free face to Alliance No.1 (the palantir.com typeface)
const display = Schibsted_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SARVESH SINGH · AI SYSTEMS",
  description:
    "One month of output: eleven AI systems. Local coding agents, audit copilots, a wearable holographic HUD, an always on voice assistant. Local models, sovereign data.",
  openGraph: {
    title: "SARVESH SINGH · AI SYSTEMS",
    description:
      "Eleven AI systems shipped in thirty days. Scroll to take the processor apart.",
    type: "website",
    siteName: "SARVESH SINGH",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f2ed",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <div aria-hidden className="grain pointer-events-none fixed inset-0 z-[70]" />
      </body>
    </html>
  );
}
