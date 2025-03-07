'use client';

import React, { useEffect, useState } from 'react';
import { MdLightMode } from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-[#0a0a0a] dark:bg-[#ededed] text-[#ededed] dark:text-[#0a0a0a] rounded-2xl transition-colors duration-300"
    >
      {isDark ? <MdOutlineLightMode /> : <MdLightMode />}
    </button>
  );
};

export default ThemeSwitcher;
