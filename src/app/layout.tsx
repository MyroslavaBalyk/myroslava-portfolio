import type { Viewport } from "next";
import "./globals.css";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SplashScreen from "../components/layout/SplashScreen";
import { fontVariables } from "../styles/fonts";
import { siteMetadata } from "../config/metadata";

export const metadata = siteMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fontVariables} antialiased bg-[var(--color-background-alt)] min-h-screen flex flex-col`}
      >
        <SplashScreen duration={3000} />
        <Navbar />
        <main className="flex-grow relative">{children}</main>
        <div className="w-full h-0.5 bg-[var(--color-primary)]"></div>

        <Footer />
      </body>
    </html>

  );
}
