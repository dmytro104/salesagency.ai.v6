"use client";

import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ServicesSection from "@/components/services-section";
import CaseStudy from "@/components/case-study";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";
import Founder from "@/components/founder";

export default function Home() {

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Add padding for fixed navbar */}
      <div className="pt-20">
        {/* Hero Section */}
        <Hero />

      {/* Services Section */}
      <ServicesSection />

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
