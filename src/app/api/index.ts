const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (
  endpoint: string,
  queryParams: string = '',
) => {
  const url = `${BASE_URL}/${endpoint}?api_key=${API_KEY}&language=en-US&${queryParams}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  return data.results;
};
