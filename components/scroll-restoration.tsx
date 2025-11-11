"use client";

import { useEffect } from "react";

/**
 * ScrollRestoration Component
 *
 * Handles scroll position preservation across page refreshes and navigation.
 * This is a client component to use browser APIs (sessionStorage, window.scrollTo).
 *
 * SEO Note: Extracted from page.tsx to keep the main page as a Server Component
 * for better SEO and faster initial page loads.
 */
export default function ScrollRestoration() {
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

  // This component doesn't render any visible content
  return null;
}
