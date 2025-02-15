import Link from 'next/link';
import React from 'react';

interface NavigationProps {}

const Navigation = ({}: NavigationProps) => {
  return (
    <ul className="flex gap-2.5">
      <li>
        <Link href={`/`} className="py-2 px-4 hover:underline">
          Home
        </Link>
      </li>
      <li>
        <Link href={`/movies`} className="py-2 px-4 hover:underline">
          Movies
        </Link>
      </li>
      <li>
        <Link href={`/favourites`} className="py-2 px-4 hover:underline">
          Favourites
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
