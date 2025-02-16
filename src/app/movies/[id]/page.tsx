'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
interface PageProps {
  params: Promise<{ id: string }>;
}

const Page = ({ params }: PageProps) => {
  const router = useRouter();
  const { id } = React.use(params);

  return (
    <>
      <button
        onClick={() => router.back()}
        className="mt-4 px-1 py-1 bg-lime-500 text-[var(--foreground)] rounded"
      >
        Go Back
      </button>
      <h1>Movie {id}</h1>
    </>
  );
};

export default Page;
