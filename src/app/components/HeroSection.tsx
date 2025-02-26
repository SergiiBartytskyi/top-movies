import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
type HeroSectionProps = {
  id: string;
  original_title: string;
  description: string;
  posterUrl: string;
};

const HeroSection = ({
  id,
  original_title,
  description,
  posterUrl,
}: HeroSectionProps) => {
  const heroStyles = {
    background: `linear-gradient(86deg, #111111 33%, rgba(17, 17, 17, 0) 66%), url(${posterUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section className="hero ">
      <div
        className="section-container items-start justify-end"
        style={heroStyles}
      >
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            {original_title}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-8">{description}</p>
          <Link
            href={`/movies/${id}`}
            className="inline-flex justify-center items-center bg-blue-500 px-3 lg:px-4 py-1 md:py-2 lg:py-3 text-base md:text-xl lg:text-3xl rounded-xl w-32 md:w-36 lg:w-48 max-w-52"
          >
            See more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
