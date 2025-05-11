"use client";

import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";

// Navigation links
const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Education", path: "/education" },
  { name: "Contact", path: "/contact" },
];

/**
 * Main navigation component
 */
export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav
      className="
        w-full bg-white dark:bg-gray-900 shadow-sm
        sticky top-0 z-40
      "
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="flex justify-between h-[4.6rem]">
          {" "}
          <div className="flex items-center pb-[10px]">
            {" "}
            <Link
              href="/"
              className="
                flex-shrink-0 flex items-center
                focus:outline-none
              "
              aria-label="Myroslava - Home"
            >
              <Image
                src="/logo/logo-main.svg"
                alt="Myroslava Logo"
                width={140} 
                height={140}
                className="h-9 w-auto"
                priority
              />
            </Link>
          </div>
          <div className="flex items-center">
            {" "}
            {/* Navigation container */}
            <nav className="hidden md:block md:ml-6">
              <ul className="flex space-x-4 md:space-x-6 lg:space-x-8">
                {navigationLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={`
                        inline-flex items-center justify-center px-2 md:px-3 py-2 rounded-md
                        text-[0.92rem] font-semibold whitespace-nowrap
                        text-[var(--color-primary-dark)]
                        transition-colors duration-200 ease-in-out
                        focus:outline-none
                        font-[var(--font-vollkorn-sc)]
                        min-w-[80px] text-center
                        ${pathname === link.path 
                          ? 'text-[var(--color-primary)] bg-gray-100 dark:bg-gray-800 dark:text-[var(--color-primary-light)]' 
                          : 'hover:text-[var(--color-primary)] hover:bg-gray-100 dark:hover:bg-gray-800'}
                      `}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
