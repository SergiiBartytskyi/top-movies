import { Movie } from '@/type';
import MovieList from './components/MovieList';

const fetchTrendingMovies = async (): Promise<Movie[]> => {
  const response = await fetch(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=YOUR_API_KEY',
  );
  const data = await response.json();
  return data.results;
};

export const getServerSideProps = async () => {
  const movies = await fetchTrendingMovies();
  return {
    props: {
      movies,
    },
  };
};

interface HomeProps {
  movies: Movie[];
}

export default function Home({ movies }: HomeProps) {
  return (
    // <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

    // </main>
    // <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

    // </footer>
    <main>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </main>
  );
}
