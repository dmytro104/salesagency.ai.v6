import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Dynamic base URL - works for production, Vercel previews, and local dev
const getBaseUrl = () => {
  // 1. Use explicit NEXT_PUBLIC_SITE_URL if set (for production override)
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  // 2. Use VERCEL_URL for Vercel deployments (auto-set by Vercel)
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // 3. Fallback to localhost for local development
  return 'http://localhost:3000';
};

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  title: "SalesAgency.ai - AI-Powered Sales Development",
  description: "Scale your outbound sales with autonomous AI SDRs. Personalized outreach across email, LinkedIn, and phone at 90% lower cost than human SDRs.",
  metadataBase: new URL(baseUrl),

  // Favicon and Icons Configuration
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/icon.svg',
      }
    ]
  },

  // PWA Manifest
  manifest: '/site.webmanifest',

  // Apple Web App Configuration
  appleWebApp: {
    capable: true,
    title: 'SalesAgency.ai',
    statusBarStyle: 'default',
  },

  // Additional PWA Meta Tags
  applicationName: 'SalesAgency.ai',

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'SalesAgency.ai',
    title: 'SalesAgency.ai - AI-Powered Sales Development',
    description: 'Scale your outbound sales with autonomous AI SDRs. Personalized outreach across email, LinkedIn, and phone at 90% lower cost than human SDRs.',
    images: [
      {
        url: '/og_image.jpg', // Relative URL - automatically uses metadataBase
        width: 1200,
        height: 630,
        alt: 'SalesAgency.ai - AI-Powered Sales Development Platform',
      }
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'SalesAgency.ai - AI-Powered Sales Development',
    description: 'Scale your outbound sales with autonomous AI SDRs. Personalized outreach across email, LinkedIn, and phone at 90% lower cost than human SDRs.',
    images: ['/og_image.jpg'], // Relative URL - automatically uses metadataBase
    creator: '@salesagencyceo',
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
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
