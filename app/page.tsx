"use client";

import { useEffect } from "react";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ServicesSection from "@/components/services-section";
import CaseStudy from "@/components/case-study";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";
import Founder from "@/components/founder";

export default function Home() {
  useEffect(() => {
    // Disable automatic scroll restoration to prevent jumping on page refresh
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Restore scroll position after lazy components finish loading
    // Using a small delay to allow DOM to fully render
    const timer = setTimeout(() => {
      const savedScrollPos = sessionStorage.getItem("scrollPos");
      if (savedScrollPos) {
        window.scrollTo(0, parseInt(savedScrollPos, 10));
        sessionStorage.removeItem("scrollPos");
      }
    }, 150);

    // Save scroll position before page unload/navigation
    const handleBeforeUnload = () => {
      sessionStorage.setItem("scrollPos", window.scrollY.toString());
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

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
