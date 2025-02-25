import { fetchMovies } from '@/app/api/index';

type FetchCastProps = {
  id: string;
};
export const fetchCast = async (id: FetchCastProps) => {
  return await fetchMovies(`/movie/${id}/credits`);
};
