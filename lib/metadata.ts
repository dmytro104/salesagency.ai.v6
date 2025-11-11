import type { Metadata } from "next";

/**
 * Metadata Utilities for SEO
 *
 * Reusable functions to generate consistent, SEO-optimized metadata
 * across all pages in the application.
 *
 * Usage:
 * ```tsx
 * import { generatePageMetadata } from "@/lib/metadata";
 *
 * export const metadata = generatePageMetadata({
 *   title: "About Us",
 *   description: "Learn about our mission...",
 *   path: "/about",
 * });
 * ```
 */

// Get dynamic base URL (same logic as layout.tsx)
export const getBaseUrl = (): string => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
};

export interface PageMetadataOptions {
  /** Page title (will be suffixed with site name) */
  title: string;
  /** Page description (150-160 characters recommended) */
  description: string;
  /** Page path (e.g., "/about", "/blog/post-slug") */
  path?: string;
  /** Keywords specific to this page */
  keywords?: string[];
  /** Open Graph image (defaults to /og_image.jpg) */
  ogImage?: string;
  /** Open Graph image width (defaults to 1200) */
  ogImageWidth?: number;
  /** Open Graph image height (defaults to 630) */
  ogImageHeight?: number;
  /** Open Graph type (defaults to "website") */
  ogType?: "website" | "article" | "profile";
  /** Article published time (ISO 8601 format) */
  publishedTime?: string;
  /** Article modified time (ISO 8601 format) */
  modifiedTime?: string;
  /** Article author(s) */
  authors?: string[];
  /** Article tags */
  tags?: string[];
  /** Disable indexing for this page */
  noIndex?: boolean;
}

/**
 * Generate comprehensive metadata for a page
 */
export function generatePageMetadata(
  options: PageMetadataOptions
): Metadata {
  const baseUrl = getBaseUrl();
  const {
    title,
    description,
    path = "",
    keywords = [],
    ogImage = "/og_image.jpg",
    ogImageWidth = 1200,
    ogImageHeight = 630,
    ogType = "website",
    publishedTime,
    modifiedTime,
    authors,
    tags,
    noIndex = false,
  } = options;

  const fullTitle = `${title} | SalesAgency.ai`;
  const canonicalUrl = `${baseUrl}${path}`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    metadataBase: new URL(baseUrl),

    // Keywords
    keywords: keywords.length > 0 ? keywords : undefined,

    // Robots
    robots: noIndex
      ? {
          index: false,
          follow: true,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },

    // Canonical URL
    alternates: {
      canonical: canonicalUrl,
    },

    // Authors
    authors: authors
      ? authors.map((name) => ({ name }))
      : [{ name: "SalesAgency.ai Team" }],

    // Open Graph
    openGraph: {
      type: ogType,
      locale: "en_US",
      url: canonicalUrl,
      siteName: "SalesAgency.ai",
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: ogImageWidth,
          height: ogImageHeight,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(tags && { tags }),
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: "@salesagencyceo",
    },
  };

  return metadata;
}

/**
 * Generate metadata for blog posts/articles
 */
export function generateArticleMetadata(
  options: PageMetadataOptions & {
    publishedTime: string;
    modifiedTime?: string;
    authors: string[];
    tags?: string[];
  }
): Metadata {
  return generatePageMetadata({
    ...options,
    ogType: "article",
  });
}

/**
 * Default site keywords (can be combined with page-specific keywords)
 *
 * Organized by category for better SEO targeting:
 * - Brand & Founder: Direct brand recognition and authority
 * - Core Technology: AI and automation features
 * - Services: What we provide
 * - Methodology: Unique frameworks and approaches
 * - Target Market: Who we serve
 * - Sales Roles: Specific positions and functions
 * - Outcomes: Results and benefits
 * - Industry Terms: Competitive and related concepts
 */
export const siteKeywords = [
  // Brand & Founder (Authority & Brand Recognition)
  "SalesAgency.ai",
  "Sales Agency",
  "Mitch Sapoff",
  "Mitch Sapoff sales",
  "Mitch Sapoff founder",

  // Core AI Technology (Primary Value Proposition)
  "AI SDR",
  "AI sales development",
  "autonomous sales agents",
  "AI sales outreach",
  "sales AI platform",
  "AI-powered sales",
  "AI sales automation",
  "AI sales analytics",
  "AI sales optimization",

  // Automation & Outreach (Key Features)
  "outbound sales automation",
  "LinkedIn automation",
  "email outreach automation",
  "automated sales calls",
  "sales automation platform",
  "multi-channel outreach",
  "automated prospecting",

  // Services & Offerings (What We Do)
  "fractional CRO",
  "sales system overhaul",
  "sales team buildout",
  "sales coaching",
  "sales training",
  "sales process optimization",
  "sales team scaling",
  "sales consulting",
  "sales playbooks",
  "sales scripts",

  // Methodology & Framework (Unique Differentiators)
  "RapidClose method",
  "RapidClose",
  "pre-close commitment",
  "dollar per lead",
  "DPL optimization",
  "high-converting sales frameworks",

  // Target Market & Use Cases (Who We Serve)
  "B2B lead generation",
  "high-ticket sales",
  "high-ticket closing",
  "service-based sales",
  "online sales teams",
  "8-figure scaling",
  "revenue scaling",
  "startup sales",
  "scale to 7 figures",
  "scale to 8 figures",

  // Sales Roles & Positions (Specific Functions)
  "sales development representative",
  "AI prospecting",
  "sales closers",
  "sales setters",
  "SDR automation",
  "remote sales team",

  // Outcomes & Results (Benefits & ROI)
  "personalized outreach",
  "sales efficiency",
  "predictable sales",
  "scalable sales systems",
  "sales performance",
  "lead conversion",
  "revenue growth",
  "cost-effective sales",
  "90% lower cost SDR",

  // Industry & Competitive Terms (Market Positioning)
  "sales technology",
  "salestech platform",
  "sales enablement",
  "sales operations",
  "CRO services",
  "sales transformation",
  "AI-backed sales",
];

/**
 * Categorized keyword sets for targeted page optimization
 * Use these to combine with page-specific content
 */
export const keywordCategories = {
  brand: [
    "SalesAgency.ai",
    "Sales Agency",
    "Mitch Sapoff",
    "Mitch Sapoff sales expert",
  ],

  technology: [
    "AI SDR",
    "AI sales automation",
    "autonomous sales agents",
    "AI-powered sales platform",
    "sales AI technology",
  ],

  services: [
    "fractional CRO",
    "sales system overhaul",
    "sales team training",
    "sales coaching services",
    "sales consulting",
  ],

  methodology: [
    "RapidClose method",
    "pre-close commitment",
    "dollar per lead optimization",
    "high-converting sales process",
  ],

  targetMarket: [
    "high-ticket sales automation",
    "B2B sales platform",
    "service-based business sales",
    "8-figure scaling",
  ],

  outcomes: [
    "predictable revenue",
    "scalable sales",
    "90% cost reduction",
    "10x sales efficiency",
  ],
};

/**
 * Combine site keywords with page-specific keywords
 */
export function combineKeywords(...keywordArrays: string[][]): string[] {
  return Array.from(new Set(keywordArrays.flat()));
}
