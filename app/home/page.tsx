import React from 'react';

// This page is a Next.js server component.
// We display a short poem with minimal styling.
export default function HomePage() {
  console.log('Rendering HomePage with a poem');

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <section className="bg-white shadow rounded p-6 max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-4">Home Poem</h1>
        <p className="mb-2">In dawn's warm light,</p>
        <p className="mb-2">A gentle breeze takes flight,</p>
        <p className="mb-2">Whispers softly, far and near,</p>
        <p className="mb-2">Embrace each day without fear.</p>
      </section>
    </main>
  );
}
