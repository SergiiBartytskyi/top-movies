'use client';

import React, { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import MovieList from '@/components/MovieList';
import MovieSearchForm from '../components/MovieSearchForm';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmI2Y2JjOWRlMDE3MjhjMTI1MGI0NjhlNWZmZGE5NSIsIm5iZiI6MTcyNDU0ODg5OS4wOTY3OCwic3ViIjoiNjYzOGJlZmVjOTA1NGYwMTJhOTE0ZTZiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.uRKGHt-G275vGj2yyXMxDTemRdDZQ8D8ZonoeaxsG6g';

const API_URL = 'https://api.themoviedb.org/3';

interface PageProps {}

const Page = ({}: PageProps) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    fetch(
      `${API_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching movies:', err);
        setLoading(false);
      });
  }, [query]);

  return (
    <>
      <div className="section-container">
        <h1>Movies Page</h1>

        <div className="flex flex-col gap-4 md:flex-row justify-center items-center mb-4">
          <SearchBar onSearch={setQuery} />
          <MovieSearchForm onSearch={setMovies} />
        </div>
        <div className="w-full h-[4px] bg-blue-600 mb-10"></div>
        {loading && <p>Loading...</p>}
        <MovieList movies={movies} />
      </div>
    </>
  );
};

export default Page;
