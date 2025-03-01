import React from 'react';
import MovieItem from './MovieItem';
import { Movie } from '@/type';

interface MovieListProps {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5">
      {movies.map(({ id, poster_path, title, release_date }) => {
        if (id === undefined || !poster_path) return null;
        return (
          <li key={id}>
            <MovieItem
              id={id}
              poster_path={poster_path}
              title={title}
              release_date={release_date}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
