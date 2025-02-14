// import Image from 'next/image';
// import Link from 'next/link';
import React from 'react';
import MovieItem from './MovieItem';
import { Movie } from '@/type';

interface MovieListProps {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <ul>
      {movies.map(({ id, backdrop_path, title }) => {
        if (id === undefined || !backdrop_path) return null;
        return (
          <li key={id}>
            <MovieItem id={id} backdrop_path={backdrop_path} title={title} />
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
