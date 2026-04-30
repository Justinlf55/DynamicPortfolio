import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Justin Fernandez — Frontend Engineer",
  description:
    "Frontend engineer specializing in React and React Native. Building polished, performant interfaces at scale.",
  metadataBase: new URL("https://justinfernandez.dev"),
  openGraph: {
    title: "Justin Fernandez — Frontend Engineer",
    description:
      "Frontend engineer specializing in React and React Native. Building polished, performant interfaces at scale.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="bg-ink-900 text-chalk-100 antialiased selection:bg-accent/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
