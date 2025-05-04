import Link from 'next/link';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-12 lg:px-24 bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
          Myroslava
        </Link>
        
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition">
              About Me
            </Link>
          </li>
          <li>
            <Link href="/experience" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition">
              Experience
            </Link>
          </li>
          <li>
            <Link href="/education" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition">
              Education
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition">
              Contact
            </Link>
          </li>
        </ul>
        
        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;