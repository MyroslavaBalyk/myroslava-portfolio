/**
 * Centralized metadata configuration for the portfolio website
 * Used by Next.js for SEO optimization and browser tab information
 */
import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "Myroslava | Portfolio",
  description: "Personal portfolio showcasing skills, experience, and projects",
  keywords: [
    "portfolio",
    "web developer",
    "frontend",
    "react",
    "next.js",
    "typescript",
  ],
  icons: {
    icon: { url: "/logo/logo-tab.svg" },
  },
};
