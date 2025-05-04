"use client";

import { useState } from 'react';
import Link from 'next/link';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button 
        onClick={toggleMenu} 
        className="flex items-center"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50" onClick={toggleMenu}>
          <div 
            className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg p-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <div className="flex justify-end">
              <button onClick={toggleMenu} className="p-2" aria-label="Close menu">
                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Mobile menu items */}
            <ul className="mt-8 space-y-4">
              <li>
                <Link 
                  href="/" 
                  className="block text-lg text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="block text-lg text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={toggleMenu}
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link 
                  href="/experience" 
                  className="block text-lg text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={toggleMenu}
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link 
                  href="/education" 
                  className="block text-lg text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={toggleMenu}
                >
                  Education
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="block text-lg text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;