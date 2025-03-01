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
  const heroStyles = {
    backgroundImage: `linear-gradient(86deg, #111111 20%, rgba(17, 17, 17, 0) 80%), url(${posterUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  const hero_overview = `${overview.slice(0, 100)}...`;
  const hero_vote = vote_average.toFixed(1);
  return (
    <section className="hero">
      <div
        className="section-container items-start justify-end"
        style={heroStyles}
      >
        <div className="flex flex-col justify-center gap-2 items-start">
          <h1 className="text-xl md:text-3xl font-bold mb-4">
            {original_title}
          </h1>
          <div className="">{hero_vote}/10</div>
          <p className="w-full md:w-80 h-auto text-base md:text-base lg:text-xl text-left">
            {hero_overview}
          </p>
          <Link
            href={`/movies/${id}`}
            className="inline-flex justify-center items-center bg-blue-500 px-3 lg:px-4 py-1 md:py-2 lg:py-3 text-base md:text-lg lg:text-xl rounded-xl w-24 md:w-28 lg:w-36 max-w-52"
          >
            See more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
