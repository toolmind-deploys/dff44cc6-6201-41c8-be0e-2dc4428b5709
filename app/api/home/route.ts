import { NextResponse } from 'next/server';

// This route returns a simple JSON response with dummy poem data
export async function GET() {
  const poemData = {
    title: 'Reflective Poem',
    lines: [
      "In the hush of dawn, a promise takes flight,",
      "Dreams unfurl gently, bathed in amber light,",
      "Carry hope forward, kindling each new day,",
      "Embrace life's canvas in your own bright way."
    ]
  };

  return NextResponse.json(poemData, { status: 200 });
}
