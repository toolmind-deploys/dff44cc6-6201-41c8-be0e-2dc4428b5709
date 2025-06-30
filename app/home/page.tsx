import React from 'react';

// This page is a Next.js server component showing a poem.
// We add console logs for debugging.
export default function HomePage() {
  console.log('Rendering HomePage with a poem');

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <section className="bg-white shadow rounded p-6 max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-4">Reflective Poem</h1>
        <p className="mb-2">In the hush of dawn, a promise takes flight,</p>
        <p className="mb-2">Dreams unfurl gently, bathed in amber light,</p>
        <p className="mb-2">Carry hope forward, kindling each new day,</p>
        <p className="mb-2">Embrace life's canvas in your own bright way.</p>
      </section>
    </main>
  );
}
