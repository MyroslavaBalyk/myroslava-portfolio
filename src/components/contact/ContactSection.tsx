"use client";

import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";

const ContactIcon = ({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <div className={`w-6 h-6 relative ${className}`}>
    <Image
      src={src}
      alt={alt}
      width={24}
      height={24}
      className="text-[var(--color-primary)]"
    />
  </div>
);

const EmailIcon = ({ className = "" }) => (
  <svg
    className={`w-6 h-6 text-[var(--color-primary)] ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const ContactItem = ({
  icon,
  text,
  href,
  target,
  onClick,
  className = "",
}: {
  icon: React.ReactNode;
  text: string;
  href: string;
  target?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}) => (
  <a
    href={href}
    onClick={onClick}
    target={target || "_self"}
    rel={target === "_blank" ? "noopener noreferrer" : ""}
    className={`flex items-center p-4 bg-[var(--color-accent-1)] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer ${className}`}
    title={onClick ? "Click to copy email" : ""}
  >
    <div className="text-2xl mr-4">{icon}</div>
    <span className="text-[var(--color-text-main)]">{text}</span>
  </a>
);

// Contact data
const CONTACT_ITEMS = [
  {
    icon: <EmailIcon />,
    text: "myroslava.balyk@gmail.com",
    href: "#",
    onClick: (e: React.MouseEvent) => {
      e.preventDefault();
      navigator.clipboard.writeText("myroslava.balyk@gmail.com");
    },
  },
  {
    icon: <ContactIcon src="/icons/linkedin.svg" alt="LinkedIn" />,
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/myroslava-balyk",
    target: "_blank",
  },
  {
    icon: <ContactIcon src="/icons/github.svg" alt="GitHub" />,
    text: "GitHub",
    href: "https://github.com/MyroslavaBalyk",
    target: "_blank",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading withAccent align="center">
          Get In Touch
        </SectionHeading>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONTACT_ITEMS.map((item, index) => (
            <ContactItem key={`${item.text}-${index}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
