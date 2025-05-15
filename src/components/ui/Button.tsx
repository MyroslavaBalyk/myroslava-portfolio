import Link from "next/link";
import { ReactNode, MouseEvent } from "react";

// Button variants
export type ButtonVariant = "primary" | "secondary";

// Props interface
export interface ButtonProps {
  href?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
  disabled?: boolean;
}

/**
 * Button component that renders as a button, internal link, or external link
 */
export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  external = false,
  ariaLabel,
  disabled = false,
}: ButtonProps) {
  // Variant styles using CSS variables for consistency
  const variantStyles = {
    primary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] focus:ring-[var(--color-primary)] dark:bg-[var(--color-primary)] dark:text-white",
    secondary: "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 focus:ring-gray-400 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700",
  };

  // Common button classes combined with variant-specific styles
  const buttonClasses = `px-6 py-3 rounded-md transition duration-300 shadow-md font-medium inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-opacity-50 ${variantStyles[variant]} ${disabled ? "opacity-60 cursor-not-allowed" : ""} ${className}`;

  // Common props for all button types
  const commonProps = {
    className: buttonClasses,
    onClick: disabled ? undefined : onClick,
    "aria-label": ariaLabel,
    "aria-disabled": disabled,
  };

  // External link
  if (href && external && !disabled) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...commonProps}
      >
        {children}
      </a>
    );
  }

  // Internal link (Next.js Link)
  if (href && !disabled) {
    return (
      <Link href={href} {...commonProps}>
        {children}
      </Link>
    );
  }

  // Default button
  return (
    <button 
      type="button" 
      disabled={disabled} 
      {...commonProps}
    >
      {children}
    </button>
  );
}
