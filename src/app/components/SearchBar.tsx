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
    <form
      onSubmit={handleSubmit}
      // className="flex flex-col gap-2 justify-center items-center md:flex-row"
      className="relative"
    >
      <input
        type="text"
        name="query"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-56 p-2 border rounded-lg focus:outline-blue-600 bg-inherit text-inherit h-[40px]"
      />
      {/* <Button
        type="submit"
        className="w-32"
        variant={query.trim() ? 'primary' : 'ghost'}
        disabled={!query.trim()}
      >
        Search
      </Button> */}
      <Search className="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-1/2" />
    </form>
  );
};

export default SearchBar;
