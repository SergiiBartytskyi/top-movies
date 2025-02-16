'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavigationProps {}

const Navigation = ({}: NavigationProps) => {
  const pathname = usePathname();
  return (
    <nav aria-label="Main Navigation" className="flex justify-center gap-2.5 ">
      <ul className="flex gap-2.5">
        <li className="hover:underline">
          <Link
            href={`/`}
            className={`py-2 px-4 ${pathname === '/' ? 'text-lime-600' : 'text-[var(--foreground)]'}`}
          >
            Home
          </Link>
        </li>
        <li className="hover:underline">
          <Link
            href={`/movies`}
            className={`py-2 px-4 ${pathname === '/movies' ? 'text-lime-600' : 'text-[var(--foreground)]'}`}
          >
            Movies
          </Link>
        </li>
        <li className="hover:underline">
          <Link
            href={`/favourites`}
            className={`py-2 px-4 ${pathname === '/favourites' ? 'text-lime-600' : 'text-[var(--foreground)]'}`}
          >
            Favourites
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
