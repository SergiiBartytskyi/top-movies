import { Movie } from '@/type';
import React from 'react';
import MovieList from './MovieList';

interface TrendingSectionProps {
  movies: Movie[];
}

const TrendingSection = ({ movies }: TrendingSectionProps) => {
  return (
    <section className="section">
      <div className="section-container">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-3">
          Trending today
        </h1>

        <MovieList movies={movies} />
      </div>
    </section>
  );
};

export default TrendingSection;
