import React from 'react';

// interface PageProps {}

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmI2Y2JjOWRlMDE3MjhjMTI1MGI0NjhlNWZmZGE5NSIsIm5iZiI6MTcyNDU0ODg5OS4wOTY3OCwic3ViIjoiNjYzOGJlZmVjOTA1NGYwMTJhOTE0ZTZiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.uRKGHt-G275vGj2yyXMxDTemRdDZQ8D8ZonoeaxsG6g';

const MoviesPage = async ({ searchParams }) => {
  const query = searchParams.search || '';
  const movies = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
    },
  );
  const res = await movies.json();
  console.log('res :>> ', res);
  // .then((res) => res.json())
  // .then((data) => {
  //   // setMovies(data.results || []);
  //   // setLoading(false);
  // })
  // .catch((err) => {
  //   console.error('Error fetching movies:', err);
  //   // setLoading(false);
  // });
  return <div></div>;
};

export default MoviesPage;
