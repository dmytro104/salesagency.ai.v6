import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ServicesSection from "@/components/services-section";
import SolutionsSection from "@/components/solutions-section";
import CaseStudy from "@/components/case-study";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";
import Founder from "@/components/founder";
import ScrollRestoration from "@/components/scroll-restoration";

/**
 * Home Page - Server Component
 *
 * This is a Server Component (no "use client" directive) for optimal SEO:
 * - Search engines receive fully-rendered HTML
 * - Faster First Contentful Paint (FCP)
 * - Better Largest Contentful Paint (LCP)
 * - Improved Core Web Vitals scores
 *
 * Client-side interactivity is handled by child components where needed.
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Scroll restoration - client component for browser APIs */}
      <ScrollRestoration />

      {/* Navigation */}
      <Navbar />

      {/* Add padding for fixed navbar */}
      <div className="pt-20">
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <ServicesSection />

        {/* Solutions Section */}
        <SolutionsSection />

        {/* Case Study Section */}
        <CaseStudy />

        {/* Founder Section */}
        <Founder />

        {/* CTA Section */}
        <CtaSection />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
