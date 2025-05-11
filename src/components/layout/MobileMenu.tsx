"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Navigation links
const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Education", path: "/education" },
  { name: "Contact", path: "/contact" },
];

// SVG icon components
const MenuIcon = () => (
  <svg
    className="w-6 h-6 text-gray-700 dark:text-gray-300"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    className="w-6 h-6 text-gray-700 dark:text-gray-300"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

/**
 * Mobile menu component with hamburger button and slide-out navigation
 */
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={toggleMenu}
        className="flex items-center p-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <MenuIcon />
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          className="
            fixed inset-0 z-50 
            bg-gray-900 bg-opacity-50 
            transition-opacity duration-300
          "
          onClick={toggleMenu}
          aria-hidden="true"
        >
          <div
            className="
              fixed right-0 top-0 h-full w-64 
              bg-white dark:bg-gray-900 
              shadow-lg p-5 
              transform transition-transform duration-300 ease-in-out
            "
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Close button */}
            <div className="flex justify-end">
              <button
                onClick={toggleMenu}
                className="p-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded"
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Mobile menu items */}
            <nav>
              <ul className="mt-8 space-y-4">
                {navigationLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={`
                        block text-lg font-semibold whitespace-nowrap
                        text-[var(--color-primary-dark)]
                        transition-colors duration-200 ease-in-out
                        py-2 px-3 rounded-md
                        focus:outline-none
                        font-[var(--font-vollkorn-sc)]
                        text-center
                        ${
                          pathname === link.path
                            ? "text-[var(--color-primary)] bg-gray-100 dark:bg-gray-800 dark:text-[var(--color-primary-light)]"
                            : "hover:text-[var(--color-primary)] hover:bg-gray-100 dark:hover:bg-gray-800"
                        }
                      `}
                      onClick={toggleMenu}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
