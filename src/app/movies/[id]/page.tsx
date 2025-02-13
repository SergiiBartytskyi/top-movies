import React from 'react';

interface PageProps {
  params: { id: string };
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  return (
    <main>
      <h1>Movie {id}</h1>
    </main>
  );
};

export default Page;
