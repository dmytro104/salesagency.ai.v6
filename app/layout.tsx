import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import StructuredData from "@/components/structured-data";
import { WebVitals } from "./web-vitals";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Production URL for OG images and canonical URLs
// IMPORTANT: Social crawlers (iOS, WhatsApp, Facebook) require absolute production URLs.
// Using environment variables can result in localhost URLs being baked into static builds.
const PRODUCTION_URL = 'https://www.salesagency.ai';

// Use production URL for metadata (OG images, canonical URLs)
// This ensures social sharing always works regardless of build environment
const baseUrl = PRODUCTION_URL;

export const metadata: Metadata = {
  title: "SalesAgency.ai - Scalable Sales Systems",
  description: "Scale your outbound sales with autonomous AI SDRs. Personalized outreach across email, LinkedIn, and phone at 90% lower cost than human SDRs.",
  metadataBase: new URL(baseUrl),

  // Keywords for SEO (organized by strategic importance)
  keywords: [
    // Brand & Authority
    "SalesAgency.ai",
    "Sales Agency",
    "Mitch Sapoff",
    "Mitch Sapoff sales expert",

    // Primary Value Props (AI + Automation)
    "AI SDR",
    "AI sales development",
    "autonomous sales agents",
    "AI-powered sales",
    "AI sales automation",
    "outbound sales automation",
    "sales automation platform",

    // Multi-channel Outreach
    "LinkedIn automation",
    "email outreach automation",
    "automated sales calls",
    "multi-channel outreach",
    "personalized outreach",

    // Services & Methodology
    "fractional CRO",
    "RapidClose method",
    "sales system overhaul",
    "sales team buildout",
    "sales coaching",
    "pre-close commitment",

    // Target Market
    "B2B lead generation",
    "high-ticket sales",
    "service-based sales",
    "8-figure scaling",
    "revenue scaling",

    // Roles & Functions
    "sales development representative",
    "AI prospecting",
    "sales closers",
    "sales setters",

    // Outcomes & Results
    "predictable sales",
    "scalable sales systems",
    "sales efficiency",
    "90% lower cost SDR",
    "cost-effective sales",
    "sales transformation",
  ],

  // Authors and creator information
  authors: [{ name: "SalesAgency.ai Team" }],
  creator: "SalesAgency.ai",
  publisher: "SalesAgency.ai",

  // Robots directives
  robots: {
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

  // Alternate URLs for different languages (add more as needed)
  alternates: {
    canonical: baseUrl,
    // languages: {
    //   'en-US': `${baseUrl}/en-US`,
    //   'es-ES': `${baseUrl}/es-ES`,
    // },
  },

  // Verification tags for search engines (replace with your actual codes)
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
    // other: {
    //   'msvalidate.01': 'your-bing-verification-code',
    // },
  },

  // Category for App Store / Play Store
  category: "technology",

  // Favicon and Icons Configuration
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/icon.svg",
      },
    ],
  },

  // PWA Manifest
  manifest: "/site.webmanifest",

  // Apple Web App Configuration
  appleWebApp: {
    capable: true,
    title: "SalesAgency.ai",
    statusBarStyle: "default",
  },

  // Additional PWA Meta Tags
  applicationName: "SalesAgency.ai",

  // Open Graph - Using absolute URLs for maximum crawler compatibility
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "SalesAgency.ai",
    title: "SalesAgency.ai - Scalable Sales Systems",
    description:
      "Scale your outbound sales with autonomous AI SDRs. Personalized outreach across email, LinkedIn, and phone at 90% lower cost than human SDRs.",
    images: [
      {
        url: `${baseUrl}/og_image.jpg`,
        secureUrl: `${baseUrl}/og_image.jpg`,
        width: 1200,
        height: 630,
        alt: "SalesAgency.ai - Scalable Sales Systems Platform",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter Card - Using absolute URLs for maximum crawler compatibility
  twitter: {
    card: "summary_large_image",
    title: "SalesAgency.ai - Scalable Sales Systems",
    description:
      "Scale your outbound sales with autonomous AI SDRs. Personalized outreach across email, LinkedIn, and phone at 90% lower cost than human SDRs.",
    images: [`${baseUrl}/og_image.jpg`],
    creator: "@salesagencyceo",
    site: "@salesagencyceo",
  },
};

// Viewport Configuration (separate export required in Next.js 16)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data (JSON-LD) for SEO */}
        <StructuredData baseUrl={baseUrl} />

        {/* DNS prefetch for external image domains */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://api.dicebear.com" />
        <link rel="dns-prefetch" href="https://shadcnblocks.com" />

        {/* Preconnect to CDNs for faster asset loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        {/* Performance optimization: enable compression and caching hints */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        {/* Web Vitals monitoring for performance tracking */}
        <WebVitals />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
