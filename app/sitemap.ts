import type { MetadataRoute } from "next";

/**
 * Sitemap Generator for SalesAgency.ai
 *
 * Automatically generates sitemap.xml for search engines.
 * This file is automatically picked up by Next.js and served at /sitemap.xml
 *
 * SEO Best Practices:
 * - priority: 0.0-1.0 (1.0 = highest importance)
 * - changeFrequency: always, hourly, daily, weekly, monthly, yearly, never
 * - lastModified: helps search engines know when to recrawl
 */

// Dynamic base URL - matches layout.tsx logic
const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
};

const baseUrl = getBaseUrl();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Add more pages here as your site grows:
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: `${baseUrl}/blog`,
    //   lastModified: new Date(),
    //   changeFrequency: 'daily',
    //   priority: 0.7,
    // },
  ];
}
