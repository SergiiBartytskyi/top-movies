'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import Button from './ui/tooltip/button';
import ThemeSwitcher from './ThemeSwitcher';

interface NavigationProps {}

export const navigationItems = [
  {
    title: 'Home',
    href: '/',
    items: [],
  },
  {
    title: 'Movies',
    href: '/movies',
    items: [],
  },
  {
    title: 'Favourites',
    href: '/favourites',
    items: [],
  },
];

const Navigation = ({}: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav aria-label="Main Navigation" className="flex items-center gap-2">
      <ul className="hidden gap-4 md:flex">
        {navigationItems.map((item) => (
          <li key={item.href} className="hover:underline">
            <Link
              href={item.href}
              className={`py-2 px-4 ${pathname === item.href ? 'text-lime-600' : 'text-[var(--foreground)]'}`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <ThemeSwitcher />

      <div className="md:hidden">
        <Button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </Button>
      </div>

      {isOpen && (
        <ul
          className={`absolute top-full right-0 w-48 flex flex-col gap-5 items-center py-4 bg-[var(--background)] shadow-md rounded-md transition-transform duration-300 ease-in-out ${
            isOpen
              ? 'translate-y-0 opacity-100'
              : '-translate-y-5 opacity-0 pointer-events-none'
          } `}
        >
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(!isOpen)}
                className={`py-2 px-4 ${pathname === item.href ? 'text-lime-600' : 'text-[var(--foreground)]'}`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
