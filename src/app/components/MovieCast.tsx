import React from 'react';
import { fetchCast } from '../api/cast';
import Image from 'next/image';

interface MovieCastProps {
  id: string;
}

const MovieCast = async (id: MovieCastProps) => {
  const cast = await fetchCast(id);
  return (
    <div>
      {cast.length > 0 ? (
        <ul>
          {cast.map(({ character, name, profile_path, id, gender }: any) => (
            <li key={id}>
              <div>
                {profile_path ? (
                  <Image
                    src={`https://image.tmdb.org/t/p/w92/${profile_path}`}
                    alt={name}
                    width={200}
                    height={300}
                    style={{ height: 'auto' }}
                  />
                ) : (
                  <div>
                    {/* {gender === 1 ? (
                      <IoWomanSharp className={css.icon} />
                    ) : (
                      <IoManSharp className={css.icon} />
                    )} */}
                  </div>
                )}
                <div>
                  <p>
                    <strong>Actor:</strong> {name}
                  </p>
                  <p>
                    <strong>Character:</strong> {character}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have a cast list for this movie!</p>
      )}
    </div>
  );
};

export default MovieCast;
