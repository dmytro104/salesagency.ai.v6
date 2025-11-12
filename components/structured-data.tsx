/**
 * Structured Data Component
 *
 * Implements JSON-LD (JavaScript Object Notation for Linked Data) schema markup
 * for better search engine understanding and rich snippet support.
 *
 * Benefits:
 * - Enhanced search results with rich snippets
 * - Better understanding by search engines
 * - Knowledge Graph eligibility
 * - Voice search optimization
 *
 * Schemas implemented:
 * - Organization: Company information, logo, social profiles
 * - WebSite: Site-wide search functionality
 */

interface StructuredDataProps {
  baseUrl: string;
}

export default function StructuredData({ baseUrl }: StructuredDataProps) {
  // Organization Schema - Describes your company
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SalesAgency.ai",
    alternateName: "Sales Agency",
    url: baseUrl,
    logo: `${baseUrl}/icon.svg`,
    description:
      "Scalable Sales Systems platform that scales outbound sales with autonomous AI SDRs. Founded by Mitch Sapoff, we provide fractional CRO services, sales system overhaul, and the RapidClose™ Method for high-ticket sales teams.",
    foundingDate: "2021",
    founder: {
      "@type": "Person",
      name: "Mitch Sapoff",
      jobTitle: "Founder & CEO",
      description:
        "Sales expert with $10M+ in personal sales, trained 300+ reps generating $100M+ in combined sales. Creator of the RapidClose™ Method.",
      url: `${baseUrl}`,
      sameAs: [
        "https://www.facebook.com/mitch.sapoff.3/",
        "https://twitter.com/salesagencyceo",
      ],
    },
    sameAs: [
      "https://twitter.com/salesagencyceo",
      "https://www.facebook.com/mitch.sapoff.3/",
      "https://www.salesagency.ai/",
      // Add more as available:
      // "https://www.linkedin.com/company/salesagencyai",
      // "https://www.instagram.com/salesagencyai",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      telephone: "+1-347-404-2926",
      email: "mitch@salesagency.ai",
      availableLanguage: ["English"],
      areaServed: "US",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    slogan:
      "Scale your outbound sales with autonomous AI SDRs at 90% lower cost",
  };

  // WebSite Schema - Enables sitelinks search box in Google
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SalesAgency.ai",
    url: baseUrl,
    description:
      "Scale your outbound sales with autonomous AI SDRs. Personalized outreach across email, LinkedIn, and phone at 90% lower cost than human SDRs.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
