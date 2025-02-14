import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface MovieItemProps {
  id: number;
  backdrop_path: string;
  title: string;
}

const MovieItem = ({ id, backdrop_path, title }: MovieItemProps) => {
  return (
    <Link href={`/movies/${id}`}>
      {backdrop_path ? (
        <Image
          src={`https://image.tmdb.org/t/p/w300${backdrop_path}`}
          alt={title}
          height={300}
        />
      ) : (
        <div>{/* <BiSolidCameraMovie className={css.icon} /> */}</div>
      )}
      <h3>{title}</h3>
    </Link>
  );
};

export default MovieItem;
