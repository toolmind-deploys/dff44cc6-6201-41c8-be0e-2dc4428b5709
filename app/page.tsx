import React from 'react';

// Next.js page at the root route
// This is a server component by default
export default function HomePage() {
  console.log('Rendering HomePage');

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <section className="max-w-xl w-full text-center bg-white rounded shadow p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Cool Home Page</h1>
        <p className="text-lg text-gray-700 mb-6">
          This page is built with Next.js 14 and Tailwind CSS.
        </p>
        <p className="text-gray-600">
          Explore our website to see awesome features and more!
        </p>
      </section>
    </main>
  );
}
