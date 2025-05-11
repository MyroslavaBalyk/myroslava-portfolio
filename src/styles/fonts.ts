import { Geist, Geist_Mono, Vollkorn_SC } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const vollkornSC = Vollkorn_SC({
  variable: "--font-vollkorn-sc",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const fontVariables = `${geistSans.variable} ${geistMono.variable} ${vollkornSC.variable}`;
