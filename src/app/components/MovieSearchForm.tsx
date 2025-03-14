'use client';

import { Genre } from '@/type';
import { useState, useEffect } from 'react';
import Button from './ui/tooltip/button';
import { Search } from 'lucide-react';

interface MovieSearchFormProps {
  onSearch: (movies: []) => void;
}

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmI2Y2JjOWRlMDE3MjhjMTI1MGI0NjhlNWZmZGE5NSIsIm5iZiI6MTcyNDU0ODg5OS4wOTY3OCwic3ViIjoiNjYzOGJlZmVjOTA1NGYwMTJhOTE0ZTZiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.uRKGHt-G275vGj2yyXMxDTemRdDZQ8D8ZonoeaxsG6g';

const API_URL = 'https://api.themoviedb.org/3';

const MovieSearchForm = ({ onSearch }: MovieSearchFormProps) => {
  const [year, setYear] = useState('');
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(`${API_URL}/genre/movie/list`, {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!year && !selectedGenre) {
      alert('Введіть хоча б один фільтр.');
      return;
    }

    const queryParams = new URLSearchParams({
      ...(year && { primary_release_year: year }),
      ...(selectedGenre && { with_genres: selectedGenre }),
      include_adult: 'false',
      include_video: 'false',
      language: 'en-US',
      page: '1',
      sort_by: 'popularity.desc',
    });

    try {
      const response = await fetch(`${API_URL}/discover/movie?${queryParams}`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log('Movies found:', data);
      onSearch(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setSelectedGenre('');
      setYear('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 items-center flex-col md:flex-row"
    >
      <div className="flex gap-2">
        <input
          type="text"
          name="year"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-[120px] p-2 border rounded-lg focus:outline-blue-600 bg-inherit text-inherit h-[40px]"
        />

        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="w-40 p-2 border rounded-lg focus:outline-blue-600 bg-background text-foreground h-[40px]"
        >
          <option value="">Genre</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id.toString()}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>

      <Button type="submit">
        <Search />
      </Button>
    </form>
  );
};

export default MovieSearchForm;
