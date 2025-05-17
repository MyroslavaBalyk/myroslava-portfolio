"use client";

import Button from "../ui/Button";
import Image from "next/image";

// Constants
const IMAGE_SIZES = {
  sm: "172px",  // Mobile size
  md: "224px",  // Tablet size
  lg: "277px",  // Desktop size
};

// Types
interface ProfileImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

// Reusable profile image component
const ProfileImage = ({ src, alt, priority = false }: ProfileImageProps) => {
  return (
    <div className="relative group">
      {/* Outer container with gradient border effect */}
      <div
        className={`
          relative rounded-full overflow-hidden
          w-[11.3rem] h-[11.3rem] sm:w-[14.5rem] sm:h-[14.5rem] md:w-[17.8rem] md:h-[17.8rem]
          p-[5px] /* Padding creates space for the border */
          bg-gradient-to-br from-[var(--color-primary-light)] via-[var(--color-accent-2)] to-[var(--color-primary)]
          shadow-lg
          transition-all duration-300 ease-in-out
          group-hover:shadow-xl group-hover:scale-105 group-hover:z-10
        `}
      >
        {/* Inner container with the image */}
        <div className="
          relative w-full h-full rounded-full overflow-hidden
          bg-[var(--color-accent-1)] flex items-center justify-center
        ">
          <Image
            src={src}
            alt={alt}
            fill
            sizes={`(max-width: 640px) ${IMAGE_SIZES.sm}, (max-width: 768px) ${IMAGE_SIZES.md}, ${IMAGE_SIZES.lg}`}
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            priority={priority} // Use priority from props
            loading="eager" // Force eager loading
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjI4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjgwIiBoZWlnaHQ9IjI4MCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg=="
          />
        </div>
      </div>
      
      {/* Vibrant glow effect on hover */}
      <div className="
        absolute inset-0 rounded-full 
        bg-gradient-to-br from-[var(--color-primary-light)] via-[var(--color-accent-3)] to-[var(--color-primary)]
        opacity-0 blur-xl transition-opacity duration-500 ease-in-out
        group-hover:opacity-40 -z-10
      "></div>
    </div>
  );
};

// Navigation buttons data
const actionButtons = [
  { href: "/about", variant: "primary" as const, label: "About Me" },
  { href: "/contact", variant: "secondary" as const, label: "Contact Me" },
];

/**
 * IntroductionSection Component
 * 
 * The hero section of the homepage featuring a profile photo and introduction text.
 */
export default function IntroductionSection() {
  return (
    <section className="pt-16 sm:pt-20  bg-[var(--color-background-alt)]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 md:justify-between">
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
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center md:justify-start">
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
      
      {/* Simple decorative line */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 my-10">
        <div className="h-0.5 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-70"></div>
      </div>
    </section>
  );
}
