import React from "react";

export default async function FeedsPage() {
    // Using no-store caching to ensure fresh content.
    const res = await fetch('http://localhost:3000/api/feeds', { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch feeds');
    }

    const feeds = await res.json();

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Feeds</h1>
            {feeds && feeds.length > 0 ? (
                <ul className="space-y-4">
                    {feeds.map((feed: any) => (
                        <li key={feed.id} className="border p-3 rounded-lg">
                            <h2 className="font-semibold">{feed.title}</h2>
                            <p className="text-sm text-gray-600">Company: {feed.company}</p>
                            <p className="text-sm">Status: {feed.status}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No feeds found.</p>
            )}
        </div>
    );
}
