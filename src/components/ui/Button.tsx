import Link from "next/link";
import { ReactNode, MouseEvent } from "react";

export type ButtonVariant = "primary" | "secondary";

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
  const variantStyles = {
    primary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] focus:ring-[var(--color-primary)]",
    secondary: "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 focus:ring-gray-400",
  };

  const buttonClasses = `px-6 py-3 rounded-md transition duration-300 shadow-md font-medium inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-opacity-50 ${variantStyles[variant]} ${disabled ? "opacity-60 cursor-not-allowed" : ""} ${className}`;

  const commonProps = {
    className: buttonClasses,
    onClick: disabled ? undefined : onClick,
    "aria-label": ariaLabel,
    "aria-disabled": disabled,
  };

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

  if (href && !disabled) {
    return (
      <Link href={href} {...commonProps}>
        {children}
      </Link>
    );
  }

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
