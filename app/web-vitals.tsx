"use client";

import { useReportWebVitals } from "next/web-vitals";

/**
 * Web Vitals Reporter Component
 *
 * Monitors and reports Core Web Vitals metrics for performance optimization.
 *
 * Metrics tracked:
 * - LCP (Largest Contentful Paint): Loading performance
 * - FID (First Input Delay): Interactivity [deprecated, replaced by INP]
 * - INP (Interaction to Next Paint): Interactivity (new metric)
 * - CLS (Cumulative Layout Shift): Visual stability
 * - TTFB (Time to First Byte): Server response time
 * - FCP (First Contentful Paint): Initial render
 *
 * Target thresholds (for "Good" rating):
 * - LCP: < 2.5s
 * - INP: < 200ms
 * - CLS: < 0.1
 * - TTFB: < 800ms
 * - FCP: < 1.8s
 *
 * Usage:
 * Import this component in your root layout to enable monitoring.
 *
 * Integration options:
 * 1. Console logging (default, for development)
 * 2. Google Analytics 4
 * 3. Custom analytics endpoint
 * 4. Third-party services (Vercel Analytics, etc.)
 */

interface WebVitalsMetric {
  id: string;
  name: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  delta: number;
  navigationType: string;
}

export function WebVitals() {
  useReportWebVitals((metric: WebVitalsMetric) => {
    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.log("📊 Web Vitals:", {
        name: metric.name,
        value: Math.round(metric.value),
        rating: metric.rating,
        id: metric.id,
      });
    }

    // Option 1: Send to your analytics endpoint
    // Uncomment and replace with your endpoint
    /*
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        metric: metric.name,
        value: metric.value,
        rating: metric.rating,
        id: metric.id,
        page: window.location.pathname,
        timestamp: new Date().toISOString(),
      }),
    }).catch((error) => {
      console.error("Failed to send web vitals:", error);
    });
    */

    // Option 2: Send to Google Analytics 4
    // Make sure you have gtag loaded in your app
    /*
    if (window.gtag) {
      window.gtag("event", metric.name, {
        value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
        event_category: "Web Vitals",
        event_label: metric.id,
        non_interaction: true,
      });
    }
    */

    // Option 3: Send to Vercel Analytics
    // If using Vercel, this is automatically handled by @vercel/analytics
    // Just install: npm install @vercel/analytics
    // And import in layout: import { Analytics } from '@vercel/analytics/react';
  });

  // This component doesn't render anything visible
  return null;
}

/**
 * Helper function to get Web Vitals thresholds
 */
export function getWebVitalsThresholds() {
  return {
    LCP: { good: 2500, needsImprovement: 4000 },
    INP: { good: 200, needsImprovement: 500 },
    CLS: { good: 0.1, needsImprovement: 0.25 },
    TTFB: { good: 800, needsImprovement: 1800 },
    FCP: { good: 1800, needsImprovement: 3000 },
  };
}

/**
 * Helper function to classify metric rating
 */
export function classifyMetric(
  name: string,
  value: number
): "good" | "needs-improvement" | "poor" {
  const thresholds = getWebVitalsThresholds();
  const threshold = thresholds[name as keyof typeof thresholds];

  if (!threshold) return "good";

  if (value <= threshold.good) return "good";
  if (value <= threshold.needsImprovement) return "needs-improvement";
  return "poor";
}
