'use client';

import React, { useEffect, useState } from 'react';

interface Genre {
  id: number;
  name: string;
}

interface GenresSearchProps {
  handleGenreSearch: (genreId: number) => void;
}

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmI2Y2JjOWRlMDE3MjhjMTI1MGI0NjhlNWZmZGE5NSIsIm5iZiI6MTcyNDU0ODg5OS4wOTY3OCwic3ViIjoiNjYzOGJlZmVjOTA1NGYwMTJhOTE0ZTZiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.uRKGHt-G275vGj2yyXMxDTemRdDZQ8D8ZonoeaxsG6g';

const API_URL = `https://api.themoviedb.org/3/genre/movie/list?language=en-US`;

const GenresSearch = ({ handleGenreSearch }: GenresSearchProps) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(`${API_URL}`, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        if (data && data.genres) {
          setGenres(data.genres);
        } else {
          console.error('No genres found in response:', data);
        }
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres();
  }, []);

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const genreId = e.target.value;
    setSelectedGenre(genreId);

    if (genreId) {
      handleGenreSearch(Number(genreId));
    }
  };

  return (
    <form className="h-[40px]">
      <select
        value={selectedGenre}
        onChange={handleGenreChange}
        className="p-2 border rounded-lg focus:outline-blue-600 bg-background text-foreground "
      >
        <option value="">Genre</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id.toString()}>
            {genre.name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default GenresSearch;
