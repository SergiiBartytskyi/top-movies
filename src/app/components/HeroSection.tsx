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
  return (
    <section
      className="hero bg-cover bg-center h-[60vh] md:h-[70vh] lg:h-[80vh] relative"
      style={{ backgroundImage: `url(${posterUrl})` }}
    >
      <div className="bg-black bg-opacity-50 h-full w-full flex items-center justify-center">
        <div className="container flex justify-center items-center flex-col mx-auto px-4 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            {original_title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">{description}</p>
          <Link
            href={`/movies/${id}`}
            className="flex justify-center items-center bg-blue-500 px-3 lg:px-4 py-1 md:py-2  lg:py-3 text-base md:text-xl lg:text-3xl rounded-xl"
          >
            See more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
