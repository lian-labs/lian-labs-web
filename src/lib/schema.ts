import {
  absoluteUrl,
  COMPANY_LINKEDIN,
  CONTACT_EMAIL,
  OFFICE,
  OFFICE_ADDRESS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "./site";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function organizationSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    alternateName: "Lian",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/icon.svg"),
      width: 100,
      height: 100,
    },
    image: absoluteUrl("/opengraph-image"),
    email: CONTACT_EMAIL,
    description: SITE_DESCRIPTION,
    sameAs: [COMPANY_LINKEDIN],
    address: {
      "@type": "PostalAddress",
      streetAddress: OFFICE.building,
      addressLocality: OFFICE.city,
      addressCountry: "ET",
    },
    location: OFFICE_ADDRESS,
    areaServed: "ET",
    knowsLanguage: ["English", "Amharic"],
    knowsAbout: [
      "Custom software development",
      "Mobile app development",
      "AI integration",
      "Product design",
      "School management software",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: CONTACT_EMAIL,
      url: absoluteUrl("/contact"),
      contactType: "sales",
      availableLanguage: ["English", "Amharic"],
    },
  };
}

export function websiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en",
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function contactPageSchema(): Record<string, unknown> {
  const url = absoluteUrl("/contact");

  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${url}#contact`,
    name: `Contact ${SITE_NAME}`,
    description: "Contact Lian Labs about building software.",
    url,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    inLanguage: "en",
  };
}

export function faqSchema(
  items: readonly { question: string; answer: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
