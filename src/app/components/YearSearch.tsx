'use client';

import React, { useState } from 'react';
import Button from './ui/tooltip/button';
import { Search } from 'lucide-react';

interface YearSearchProps {
  onSearch: (year: string) => void;
}

const YearSearch = ({ onSearch }: YearSearchProps) => {
  const [year, setYear] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSearch(year);

    setYear('');
  };
  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        name="query"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="w-32 p-2 border rounded-lg focus:outline-blue-600 bg-inherit text-inherit h-[40px]"
      />
      <Search className="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-1/2" />
    </form>
  );
};

export default YearSearch;
