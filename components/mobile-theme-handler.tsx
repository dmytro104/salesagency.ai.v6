"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export function MobileThemeHandler() {
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    // Check if screen width is mobile (< 768px which is md breakpoint)
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    // If mobile and not already dark, set to dark
    if (isMobile && resolvedTheme !== "dark") {
      setTheme("dark");
    }
  }, [setTheme, resolvedTheme]);

  return null;
}
