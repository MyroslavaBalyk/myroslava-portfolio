"use client";

import Button from "../ui/Button";

type ButtonVariant = "primary" | "secondary";

const actionButtons: Array<{
  href: string;
  variant: ButtonVariant;
  label: string;
}> = [
  { href: "/about", variant: "primary", label: "About Me" },
  { href: "/contact", variant: "secondary", label: "Contact Me" },
];

export default function IntroductionSection() {
  return (
    <section className="py-8 sm:py-10 bg-[var(--color-background)]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center gap-6 md:gap-8 md:justify-between">
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0 order-1 md:order-2">
          <div
            className="
              rounded-full border-[5px] border-white shadow-lg
              bg-[var(--color-primary-light)] text-[var(--color-primary-dark)]
              flex items-center justify-center text-center font-bold
              w-[10.8rem] h-[10.8rem] sm:w-[14rem] sm:h-[14rem] md:w-[17.3rem] md:h-[17.3rem]
              text-lg sm:text-xl md:text-2xl
              cursor-pointer transition-all duration-300 ease-in-out
              hover:scale-125 hover:shadow-xl hover:z-10
            "
          >
            Profile
            <br />
            Photo
          </div>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
          <h1 className="text-3xl font-bold mb-3.5 leading-tight sm:text-4xl md:text-[2.7rem]">
            Hi, I'm{" "}
            <span className="text-[var(--color-primary)]">Myroslava</span>
          </h1>

          <p className="text-base text-[var(--color-text-light)] mb-4 sm:text-lg">
            text
          </p>

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
