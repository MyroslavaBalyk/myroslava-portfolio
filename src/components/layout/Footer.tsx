"use client";

import Link from "next/link";
import { navigationLinks } from "../../data/navigation";

export default function Footer() {
  return (
    <footer className="w-full relative">

      <div className="bg-[#D4E0EC] py-8 px-6 md:px-10 lg:px-16 w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-[var(--color-text-light)]">
              © {new Date().getFullYear()} Myroslava Balyk
            </p>
          </div>

          <nav>
            <ul className="flex flex-wrap gap-6 justify-center">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-[var(--color-text-light)] text-sm transition-all duration-300 inline-block relative hover:text-[var(--color-primary)]"
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
