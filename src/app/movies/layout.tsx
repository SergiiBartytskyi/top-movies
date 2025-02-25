'use client';
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { useRouter } from 'next/navigation';

interface LoyautProps {
  children: React.ReactNode;
}

const Loyaut = ({ children }: LoyautProps) => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    router.push(`?search=${value}`);
  };
  return (
    <div>
      <input type="text" value={query} onChange={handleChange} />
      {/* <SearchBar /> */}
      {children}
    </div>
  );
};

export default Loyaut;
