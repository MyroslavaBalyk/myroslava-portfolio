import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "/icons/github.svg",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "/icons/linkedin.svg",
  },
];

const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Education", path: "/education" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 bg-[var(--color-background)] w-full border-t border-[var(--color-accent)] dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3
              className="
              text-lg font-semibold text-gray-800 dark:text-white 
              relative inline-block mb-5 
              after:content-[''] after:absolute after:bottom-[-8px] after:left-0 
              after:w-10 after:h-[3px] after:bg-[var(--color-primary)] 
              dark:after:bg-[var(--color-primary-light)]
            "
            >
              Myroslava
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">text</p>
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="
                    flex items-center justify-start w-8 h-8 rounded-full 
                    bg-[var(--color-background)] dark:bg-gray-700 
                    transition-all duration-300 hover:-translate-y-0.5 
                    hover:bg-[var(--color-accent)] dark:hover:bg-[var(--color-primary-dark)]
                  "
                >
                  <Image
                    src={link.icon}
                    alt={link.name}
                    width={18}
                    height={18}
                    className="
                      transition-all duration-300 filter 
                      hover:brightness-110 dark:brightness-150 dark:hover:brightness-200
                    "
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3
              className="
              text-lg font-semibold text-gray-800 dark:text-white 
              relative inline-block mb-5 
              after:content-[''] after:absolute after:bottom-[-8px] after:left-0 
              after:w-10 after:h-[3px] after:bg-[var(--color-primary)] 
              dark:after:bg-[var(--color-primary-light)]
            "
            >
              Navigation
            </h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="
                      text-gray-600 dark:text-gray-300 
                      transition-all duration-300 inline-block relative 
                      hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary-light)] 
                      hover:-translate-y-0.5 
                      after:content-[''] after:absolute after:w-0 after:h-0.5 
                      after:bottom-[-2px] after:left-0 
                      after:bg-[var(--color-primary)] dark:after:bg-[var(--color-primary-light)] 
                      after:transition-all after:duration-300 hover:after:w-full
                    "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="
              text-lg font-semibold text-gray-800 dark:text-white 
              relative inline-block mb-5 
              after:content-[''] after:absolute after:bottom-[-8px] after:left-0 
              after:w-10 after:h-[3px] after:bg-[var(--color-primary)] 
              dark:after:bg-[var(--color-primary-light)]
            "
            >
              Contact
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Email: your.email@example.com
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Location: Your Location
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-500 dark:text-gray-400">
          <p className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-300">
            © {new Date().getFullYear()} Myroslava. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
