import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiSolidCameraMovie } from 'react-icons/bi';

interface MovieItemProps {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
}

const MovieItem = ({
  id,
  poster_path,
  title,
  release_date,
}: MovieItemProps) => {
  const release = new Date(release_date).getFullYear();
  return (
    <Link href={`/movies/${id}`}>
      {poster_path ? (
        <Image
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
          width={300}
          height={450}
          style={{ height: 'auto' }}
          className="rounded-2xl "
        />
      ) : (
        <div>{<BiSolidCameraMovie />}</div>
      )}
      <div className="p-3">
        <h3 className="font-bold">{title}</h3>
        <p>{release}</p>
      </div>
    </Link>
  );
};

export default MovieItem;
