'use client';

import React, { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import MovieList from '@/components/MovieList';
import GenresSearch from '../components/GenresSearch';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmI2Y2JjOWRlMDE3MjhjMTI1MGI0NjhlNWZmZGE5NSIsIm5iZiI6MTcyNDU0ODg5OS4wOTY3OCwic3ViIjoiNjYzOGJlZmVjOTA1NGYwMTJhOTE0ZTZiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.uRKGHt-G275vGj2yyXMxDTemRdDZQ8D8ZonoeaxsG6g';

const API_URL = 'https://api.themoviedb.org/3';
// const API_URL =
//   'https://api.themoviedb.org/3/search/movie?query=&include_adult=false&language=en-US&page=1';

interface PageProps {}

const Page = ({}: PageProps) => {
  const [query, setQuery] = useState('');
  const [genreId, setGenreId] = useState<number | null>(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    setGenreId(null);
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

  useEffect(() => {
    if (genreId === null) return;

    setLoading(true);

    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`,
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
  }, [genreId]);

  return (
    <>
      <h1>Movies Page</h1>

      <div className="flex flex-col gap-3 md:flex-row justify-center items-center mb-4">
        <GenresSearch handleGenreSearch={setGenreId} />
        <SearchBar onSearch={setQuery} />
      </div>
      {loading && <p>Loading...</p>}
      <MovieList movies={movies} />
    </>
  );
};

export default Page;
