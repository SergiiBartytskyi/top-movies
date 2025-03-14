'use client';

import React, { useState } from 'react';

interface YearSearchProps {
  onSearch: (year: string) => void;
}

const YearSearch = ({ onSearch }: YearSearchProps) => {
  const [year, setYear] = useState('');

  onSearch(year);
  return (
    <input
      type="text"
      name="year"
      placeholder="Year"
      value={year}
      onChange={(e) => setYear(e.target.value)}
      className="w-32 p-2 border rounded-lg focus:outline-blue-600 bg-inherit text-inherit h-[40px]"
    />
  );
};

export default YearSearch;
