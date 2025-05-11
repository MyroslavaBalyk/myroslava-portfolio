"use client";

import Link from "next/link";
import { useEffect } from "react";

const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Education", path: "/education" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="w-full relative mt-20">
      <div className="absolute top-0 left-0 right-0 transform -translate-y-full overflow-hidden w-full">
        <div className="w-full h-16 bg-white dark:bg-gray-900 relative">
          <button
            onClick={scrollToTop}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-gray-100 dark:bg-gray-700 rounded-full -mb-7 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 z-10 cursor-pointer hover:scale-105"
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 py-8 px-6 md:px-10 lg:px-16 w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {new Date().getFullYear()} Myroslava Balyk
            </p>
          </div>

          <nav>
            <ul className="flex flex-wrap gap-6 justify-center">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-gray-500 dark:text-gray-400 text-sm transition-all duration-300 inline-block relative hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary-light)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
