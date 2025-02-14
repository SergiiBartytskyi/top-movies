export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  id?: number;
  poster_path: string;
  backdrop_path?: string | null;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  genres: Genre[];
}
