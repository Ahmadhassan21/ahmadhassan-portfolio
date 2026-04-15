import type { MetadataRoute } from 'next';

/** Production domain: set NEXT_PUBLIC_SITE_URL in Vercel (e.g. https://yourdomain.com). */
function getSiteUrl(): string {
    const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
    if (fromEnv) return fromEnv;
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return 'http://localhost:3000';
}

export default function sitemap(): MetadataRoute.Sitemap {
    const base = getSiteUrl();
    return [
        {
            url: base,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];
}
