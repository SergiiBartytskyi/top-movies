'use client';

import React, { useState } from 'react';
import Button from './ui/tooltip/button';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) return;

    onSearch(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        name="query"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-56 p-2 outline-0 border rounded-lg border-solid transition-colors easy-in-out duration-300 focus:border-blue-600"
      />

      <Button className="flex justify-center items-center">
        <Search />
      </Button>
    </form>
  );
};

export default SearchBar;
