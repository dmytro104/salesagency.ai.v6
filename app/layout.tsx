import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MobileThemeHandler } from "@/components/mobile-theme-handler";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SalesAgency.ai - AI-Powered Sales Development Representatives",
  description: "Scale your outbound sales with autonomous AI SDRs. Personalized outreach across email, LinkedIn, and phone at 90% lower cost than human SDRs.",
  metadataBase: new URL('https://salesagency.ai'),

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
    url: 'https://salesagency.ai',
    siteName: 'SalesAgency.ai',
    title: 'SalesAgency.ai - AI-Powered Sales Development',
    description: 'Scale your outbound sales with autonomous AI SDRs. Personalized outreach across email, LinkedIn, and phone at 90% lower cost than human SDRs.',
    images: [
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'SalesAgency.ai Logo',
      }
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'SalesAgency.ai - AI-Powered Sales Development',
    description: 'Scale your outbound sales with autonomous AI SDRs. Personalized outreach across email, LinkedIn, and phone at 90% lower cost than human SDRs.',
    images: ['/android-chrome-512x512.png'],
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
          <MobileThemeHandler />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
