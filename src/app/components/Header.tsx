import React from 'react';
import Navigation from './Navigation';
import Logo from './ui/tooltip/Logo';

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <header className="fixed left-1/2 top-0 z-50 mt-7 flex w-11/12 max-w-7xl -translate-x-1/2 justify-between items-center rounded-full bg-background/20 p-3 backdrop-blur-lg md:rounded-full">
      <div className="flex w-full items-center justify-between ">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
