
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Αρχική', path: '/' },
    { name: 'Υπηρεσίες', path: '/services' },
    { name: 'Εξοικονομώ', path: '/exoikonomo' },
    { name: 'Έργα', path: '/case-studies' },
    { name: 'Επικοινωνία', path: '/contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-black text-white sticky top-0 z-50 border-b-4 border-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold industrial-font">
                AL. <span className="text-yellow-500">ANASTASIOU</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
            <Link
                key={link.name}
                href={link.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 industrial-font ${
                  isActive(link.path) ? 'text-yellow-500' : 'hover:text-yellow-500'
                }`}
              >
                {link.name}
              </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-yellow-500 text-black px-6 py-2 text-sm font-bold industrial-font hover:bg-yellow-600 transition-colors"
            >
              ΖΗΤΗΣΤΕ ΠΡΟΣΦΟΡΑ
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-yellow-500 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-medium industrial-font ${
                  isActive(link.path) ? 'text-yellow-500' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-yellow-500 text-black text-center px-3 py-4 font-bold industrial-font"
            >
              ΖΗΤΗΣΤΕ ΠΡΟΣΦΟΡΑ
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
