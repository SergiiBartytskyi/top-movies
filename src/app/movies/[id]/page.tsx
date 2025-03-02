'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Movie } from '@/type';
import Loader from './loading';
import Image from 'next/image';
import SubNavigation from '@/app/components/SubNavigation';
import { BiSolidCameraMovie } from 'react-icons/bi';
interface PageProps {
  params: Promise<{ id: string }>;
}

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmI2Y2JjOWRlMDE3MjhjMTI1MGI0NjhlNWZmZGE5NSIsIm5iZiI6MTcyNDU0ODg5OS4wOTY3OCwic3ViIjoiNjYzOGJlZmVjOTA1NGYwMTJhOTE0ZTZiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.uRKGHt-G275vGj2yyXMxDTemRdDZQ8D8ZonoeaxsG6g';

const API_URL = 'https://api.themoviedb.org/3';

const Page = ({ params }: PageProps) => {
  const router = useRouter();
  const { id } = React.use(params);
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`${API_URL}/movie/${id}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMovie(data || []);
      })
      .catch((err) => {
        console.error('Error fetching movie:', err);
      });
  }, [id]);

  if (!movie) {
    return <Loader />;
  }

  const { title, release_date, poster_path, vote_average, overview, genres } =
    movie;
  const releaseYear = new Date(release_date).getFullYear() || '-';
  const titleWithYear = `${title} (${releaseYear})`;
  return (
    <>
      <button
        onClick={() => router.back()}
        className="mt-4 px-1 py-1 bg-lime-500 text-[var(--foreground)] rounded"
      >
        Go Back
      </button>

      <div>
        {movie.poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={movie.title}
            width={300}
            height={100}
          />
        ) : (
          <div>{<BiSolidCameraMovie />}</div>
        )}

        <div>
          <h1>{titleWithYear}</h1>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          {genres.length > 0 ? (
            <p>{genres.map((genre) => genre.name).join(' ')}</p>
          ) : (
            <p>We don\'t have a genre list for this movie!</p>
          )}
        </div>

        <hr />
        <SubNavigation />

        <hr />
        {/* <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense> */}
      </div>
    </>
  );
};

export default Page;
