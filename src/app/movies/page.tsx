'use client';

import React, { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import MovieList from '@/components/MovieList';
import GenresSearch from '../components/GenresSearch';
import YearSearch from '../components/YearSearch';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmI2Y2JjOWRlMDE3MjhjMTI1MGI0NjhlNWZmZGE5NSIsIm5iZiI6MTcyNDU0ODg5OS4wOTY3OCwic3ViIjoiNjYzOGJlZmVjOTA1NGYwMTJhOTE0ZTZiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.uRKGHt-G275vGj2yyXMxDTemRdDZQ8D8ZonoeaxsG6g';

const API_URL = 'https://api.themoviedb.org/3';
// const API_URL =
//   'https://api.themoviedb.org/3/search/movie?query=&include_adult=false&language=en-US&page=1';

interface PageProps {}

const Page = ({}: PageProps) => {
  const [query, setQuery] = useState('');
  const [year, setYear] = useState('');
  const [genreId, setGenreId] = useState<number | null>(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!year) return;

    setLoading(true);
    setGenreId(null);
    fetch(
      `${API_URL}/discover/movie?primary_release_year=${year}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
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
  }, [year]);

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

    fetch(`${API_URL}/discover/movie?with_genres=${genreId}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
    })
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
      <div className="section-container">
        <h1>Movies Page</h1>

        <div className="flex flex-col gap-3 md:flex-row justify-center items-center mb-4">
          <div className="flex gap-2">
            <GenresSearch handleGenreSearch={setGenreId} />
            <YearSearch onSearch={setYear} />
          </div>
          <SearchBar onSearch={setQuery} />
        </div>
        <div className="w-full h-[4px] bg-blue-600 mb-10"></div>
        {loading && <p>Loading...</p>}
        <MovieList movies={movies} />
      </div>
    </>
  );
};

export default Page;
