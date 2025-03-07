import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
type HeroSectionProps = {
  id: string;
  original_title: string;
  posterUrl: string;
  overview: string;
  vote_average: number;
};

const HeroSection = ({
  id,
  original_title,
  posterUrl,
  overview,
  vote_average,
}: HeroSectionProps) => {
  const hero_overview = `${overview.slice(0, 100)}...`;
  const hero_vote = vote_average.toFixed(1);
  return (
    <section className="hero">
      <div className="section-container relative w-full h-full overflow-hidden flex justify-start items-end rounded-3xl">
        <Image
          src={`https://image.tmdb.org/t/p/original${posterUrl}`}
          alt={original_title}
          width={1440}
          height={720}
          className="absolute inset-0 w-full h-full object-cover object-center "
        />

        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(90deg,rgba(17,17,17,0.7)_25%,rgba(17,17,17,0)_100%)]"></div>
        <div className="absolute flex flex-col justify-center items-start gap-2 z-10 text-[#ffffff]">
          <h1 className="text-base md:text-2xl font-bold mb-1 md:mb-2">
            {original_title}
          </h1>
          <p className="text-base">{hero_vote}/10</p>

          <p className="w-full h-auto text-base text-left mb-1 md:hidden">
            {hero_overview}
          </p>

          <p className="w-full h-auto text-base text-left mb-2 hidden md:block">
            {overview}
          </p>

          <div>
            <Link
              href={`/movies/${id}`}
              className="inline-flex justify-center items-center bg-blue-500 px-3 lg:px-4 py-1 md:py-2 lg:py-3 text-base md:text-lg lg:text-xl rounded-3xl w-24 md:w-28 lg:w-36 max-w-52"
            >
              See more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
