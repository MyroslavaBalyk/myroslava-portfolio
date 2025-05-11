"use client";

import Button from "../ui/Button";
import Image from "next/image";

// Types
type ButtonVariant = "primary" | "secondary";

interface ActionButton {
  href: string;
  variant: ButtonVariant;
  label: string;
}

interface ProfileImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

// Reusable profile image component
const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt, priority = false }) => (
  <div
    className={`
      relative rounded-full border-[5px] border-white shadow-lg
      overflow-hidden
      w-[10.8rem] h-[10.8rem] sm:w-[14rem] sm:h-[14rem] md:w-[17.3rem] md:h-[17.3rem]
      cursor-pointer transition-all duration-300 ease-in-out
      hover:scale-125 hover:shadow-xl hover:z-10
    `}
  >
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      priority={priority}
    />
  </div>
);

// Navigation buttons data
const actionButtons: Array<ActionButton> = [
  { href: "/about", variant: "primary", label: "About Me" },
  { href: "/contact", variant: "secondary", label: "Contact Me" },
];

/**
 * IntroductionSection Component
 * 
 * The hero section of the homepage featuring a profile photo and introduction text.
 */
export default function IntroductionSection() {
  return (
    <section className="py-8 sm:py-10 bg-[var(--color-background)]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center gap-6 md:gap-8 md:justify-between">
        {/* Profile Photo - Right side on desktop, top on mobile */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0 order-1 md:order-2">
          <ProfileImage 
            src="/profile-photo/profile-photo.jpg"
            alt="Myroslava Balyk"
            priority
          />
        </div>

        {/* Content - Left side on desktop, bottom on mobile */}
        <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
          <h1 className="text-3xl font-bold mb-3.5 leading-tight sm:text-4xl md:text-[2.7rem]">
            Hi, I'm{" "}
            <span className="text-[var(--color-primary)]">Myroslava</span>
          </h1>

          <p className="text-base text-[var(--color-text-light)] mb-4 sm:text-lg">
            Front-End Developer with a focus on building practical, user-centered solutions. Creating responsive interfaces that enhance user experience and application performance.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            {actionButtons.map((button) => (
              <Button
                key={button.href}
                href={button.href}
                variant={button.variant}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
