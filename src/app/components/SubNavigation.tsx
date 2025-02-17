import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface SubNavigationProps {}

const SubNavigation = ({}: SubNavigationProps) => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="m-4.5 flex flex-col gap-1">
        <li>
          <Link
            href="cast"
            className={`text-lg text-inherit transition-color duration-250 ease-linear hover:text-lime-600 focus:text-lime-600  ${pathname === 'cast' ? 'text-lime-600' : 'text-[var(--foreground)]'}`}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            href="reviews"
            className={`text-lg text-inherit transition-color duration-250 ease-linear hover:text-lime-600 focus:text-lime-600  ${pathname === 'reviews' ? 'text-lime-600' : 'text-[var(--foreground)]'}`}
          >
            Reviews
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SubNavigation;
