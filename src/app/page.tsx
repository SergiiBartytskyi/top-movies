import MovieList from '@/components/MovieList';
import HeroSection from './components/HeroSection';

const API_KEY = process.env.TMDB_API_KEY;
// const API_KEY =
//   'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmI2Y2JjOWRlMDE3MjhjMTI1MGI0NjhlNWZmZGE5NSIsIm5iZiI6MTcyNDU0ODg5OS4wOTY3OCwic3ViIjoiNjYzOGJlZmVjOTA1NGYwMTJhOTE0ZTZiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.uRKGHt-G275vGj2yyXMxDTemRdDZQ8D8ZonoeaxsG6g';

const API_URL =
  'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
// 'https://api.themoviedb.org/3/trending/movie/day?language=pl-PL';

const Home = async () => {
  const data = await fetch(API_URL, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });
  if (!data.ok) throw new Error('Failed to fetch data');

  const movies = (await data.json()).results;

  const randomNumber = () => {
    return Math.floor(Math.random() * 20);
  };

  const { id, original_title, backdrop_path, vote_average, overview } =
    movies[randomNumber()];
  const posterUrl = `https://image.tmdb.org/t/p/original/${backdrop_path}`;
  console.log('randomMovie :>> ', movies[randomNumber()]);
  // console.log('posterUrl :>> ', posterUrl);
  return (
    <>
      <HeroSection
        id={id}
        original_title={original_title}
        posterUrl={posterUrl}
        overview={overview}
        vote_average={vote_average}
      />
      <h1 className="text-lg">Trending today</h1>
      <MovieList movies={movies} />
    </>
  );
};

export default Home;
