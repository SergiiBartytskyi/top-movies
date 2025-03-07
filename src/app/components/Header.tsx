import React from 'react';
import Navigation from './Navigation';
import ThemeSwitcher from './ThemeSwitcher';

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <header className="flex justify-center items-center p-4">
      <Navigation />
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
