"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigationLinks } from "../../data/navigation";

const ICON_PROPS = {
  className: "w-6 h-6 text-[var(--color-primary-dark)]",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",  
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
} as const;

const MenuIcon = () => (
  <svg {...ICON_PROPS}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg {...ICON_PROPS}>
    <path d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const MenuButton = ({ 
  onClick, 
  isOpen,
  className = "",
  children,
  ...props 
}: {
  onClick: () => void;
  isOpen?: boolean;
  className?: string;
  children: React.ReactNode;
  [key: string]: unknown;
}) => (
  <button
    onClick={onClick}
    className={`p-2 rounded-full hover:bg-white/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${className}`}
    aria-label={isOpen ? "Close menu" : "Open menu"}
    aria-expanded={isOpen}
    {...props}
  >
    {children}
  </button>
);

const MenuLink = ({ 
  href, 
  onClick, 
  isActive, 
  children 
}: { 
  href: string; 
  onClick: () => void; 
  isActive: boolean; 
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className={`
      inline-flex items-center justify-center px-2 py-2 rounded-md
      text-[0.95rem] font-semibold whitespace-nowrap
      transition-colors duration-200 ease-in-out
      focus:outline-none font-[var(--font-vollkorn-sc)]
      relative after:absolute after:bottom-0 after:left-0 after:h-0.5 
      after:bg-[var(--color-primary)] after:transition-all after:duration-300 after:ease-in-out
      ${isActive 
        ? 'text-[var(--color-primary)] after:w-full' 
        : 'text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] after:w-0 hover:after:w-full'}
    `}
  >
    {children}
  </Link>
);

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <MenuButton onClick={toggleMenu} isOpen={isOpen}>
        <MenuIcon />
      </MenuButton>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-[1px] transition-all duration-300 ease-in-out opacity-100"
          onClick={toggleMenu}
          aria-hidden="true"
        >
          <div
            className="fixed right-0 top-0 h-screen w-72 bg-[#C7D6E5] shadow-2xl p-6 overflow-y-auto transform transition-transform duration-300 ease-in-out border-l-2 border-[var(--color-primary)] bg-opacity-95 translate-x-0"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex justify-between items-center mb-8">
              <Link 
                href="/" 
                onClick={toggleMenu}
                className="focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded-full p-1"
              >
                <Image
                  src="/logo/logo-animated.svg"
                  alt="Myroslava Logo"
                  width={40}
                  height={40}
                  className="h-8 w-auto"
                  priority
                />
              </Link>
              <MenuButton onClick={toggleMenu}>
                <CloseIcon />
              </MenuButton>
            </div>

            <nav>
              <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent my-6" />
              <ul className="space-y-3">
                {navigationLinks.map(({ path, name }) => (
                  <li key={path}>
                    <MenuLink 
                      href={path} 
                      onClick={toggleMenu}
                      isActive={pathname === path}
                    >
                      {name}
                    </MenuLink>
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
