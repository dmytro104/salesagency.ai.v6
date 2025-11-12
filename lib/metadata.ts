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

// Get base URL for the application
export const getBaseUrl = (): string => {
  // Production domain
  if (process.env.NODE_ENV === "production") {
    return "https://www.salesagency.ai";
  }
  // Local development
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
 * - Core Value Proposition: AI SDR platform and cost savings
 * - General Sales Terms: Broad industry keywords
 * - Services: What we provide
 * - Methodology: Unique frameworks (RapidClose, DPL)
 * - Target Market: High-ticket service businesses
 * - Technology & Features: Multi-channel automation
 * - Outcomes: Results and benefits
 */
export const siteKeywords = [
  // Brand & Founder (Authority & Brand Recognition)
  "SalesAgency.ai",
  "Sales Agency AI",
  "Mitch Sapoff",
  "Mitch Sapoff sales expert",

  // Core Value Proposition (AI SDR Platform)
  "AI SDR",
  "AI sales development representative",
  "autonomous AI sales agents",
  "AI-powered SDR",
  "90% lower cost SDR",
  "cost-effective AI sales",
  "AI sales automation platform",

  // General Sales Terms (Broad Appeal)
  "sales automation",
  "sales software",
  "sales platform",
  "lead generation",
  "outbound sales",
  "sales development",
  "sales tools",
  "sales pipeline",
  "appointment setting",
  "cold outreach",
  "sales prospecting",
  "CRM integration",

  // Multi-Channel Automation (Key Technology)
  "multi-channel sales outreach",
  "LinkedIn automation",
  "email outreach automation",
  "automated sales calls",
  "AI voice calls",
  "outbound sales automation",

  // Services & Offerings (What We Provide)
  "fractional CRO services",
  "sales team buildout",
  "sales system overhaul",
  "AI SDR implementation",
  "sales coaching and training",
  "sales process optimization",
  "sales team scaling solutions",

  // Methodology & Framework (Unique Differentiators)
  "RapidClose method",
  "RapidClose sales framework",
  "pre-close commitment strategy",
  "dollar per lead optimization",
  "DPL optimization",
  "high-ticket closing methodology",

  // Target Market (Who We Serve)
  "high-ticket sales",
  "service-based business sales",
  "scale to 7 figures",
  "scale to 8 figures",
  "8-figure revenue scaling",
  "online sales teams",

  // Sales Roles & Functions
  "AI prospecting",
  "SDR automation",
  "sales setters",
  "sales closers",
  "remote sales team management",

  // Outcomes & Results (Benefits & ROI)
  "predictable revenue systems",
  "scalable sales systems",
  "sales efficiency optimization",
  "revenue growth acceleration",
  "cost-effective sales operations",
  "lead conversion optimization",
  "personalized AI outreach",

  // Industry & Positioning
  "AI sales enablement",
  "sales operations automation",
  "CRO consulting",
  "sales transformation",
  "AI-backed sales platform",
];

/**
 * Categorized keyword sets for targeted page optimization
 * Use these to combine with page-specific content
 */
export const keywordCategories = {
  brand: [
    "SalesAgency.ai",
    "Sales Agency AI",
    "Mitch Sapoff",
    "Mitch Sapoff sales expert",
  ],

  general: [
    "sales automation",
    "sales software",
    "sales platform",
    "lead generation",
    "outbound sales",
    "sales development",
    "sales tools",
    "sales pipeline",
  ],

  valueProposition: [
    "AI SDR platform",
    "autonomous AI sales agents",
    "90% lower cost SDR",
    "cost-effective AI sales",
    "AI sales automation platform",
  ],

  technology: [
    "multi-channel sales outreach",
    "LinkedIn automation",
    "email outreach automation",
    "automated sales calls",
    "AI voice calls",
  ],

  services: [
    "fractional CRO services",
    "sales team buildout",
    "sales system overhaul",
    "AI SDR implementation",
    "sales coaching and training",
  ],

  methodology: [
    "RapidClose method",
    "RapidClose sales framework",
    "pre-close commitment strategy",
    "dollar per lead optimization",
    "high-ticket closing methodology",
  ],

  targetMarket: [
    "high-ticket sales",
    "service-based business sales",
    "scale to 7 figures",
    "scale to 8 figures",
    "8-figure revenue scaling",
  ],

  outcomes: [
    "predictable revenue systems",
    "scalable sales systems",
    "sales efficiency optimization",
    "revenue growth acceleration",
    "cost-effective sales operations",
  ],
};

/**
 * Combine site keywords with page-specific keywords
 */
export function combineKeywords(...keywordArrays: string[][]): string[] {
  return Array.from(new Set(keywordArrays.flat()));
}
