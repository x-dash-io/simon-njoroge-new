"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BiHomeAlt, BiUser, BiBriefcaseAlt2, BiWrench, BiFileBlank, BiEnvelope
} from 'react-icons/bi';

const navLinks = [
  { href: '/', label: 'Home', icon: BiHomeAlt },
  { href: '/about', label: 'About', icon: BiUser },
  { href: '/projects', label: 'Projects', icon: BiBriefcaseAlt2 },
  { href: '/what-i-do', label: 'What I Do', icon: BiWrench },
  { href: '/resume', label: 'Resume', icon: BiFileBlank },
  { href: '/contact', label: 'Contact', icon: BiEnvelope },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-xs sm:max-w-lg md:max-w-xl">
      <ul className="flex justify-center items-center space-x-1 sm:space-x-2 bg-white/70 dark:bg-neutral-800/70 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 rounded-full shadow-lg px-2 sm:px-3 py-1.5">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          const IconComponent = link.icon;

          return (
            <li key={link.href} className="flex-shrink-0">
              <Link
                href={link.href}
                title={link.label}
                className={`flex justify-center items-center h-10 w-10 md:h-auto md:w-auto md:px-4 md:py-2 rounded-full text-sm transition-colors duration-200 ${
                  isActive
                    ? 'bg-cyan-600 dark:bg-cyan-500 text-white scale-110'
                    : 'text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200/60 dark:hover:bg-neutral-700/60'
                }`}
              >
                <IconComponent className="md:hidden h-5 w-5" />
                <span className="hidden md:inline">{link.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
