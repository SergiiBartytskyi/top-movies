import React from 'react';
import Navigation from './Navigation';

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <header className="flex justify-center items-center p-4">
      <Navigation />
    </header>
  );
};

export default Header;
