export const SITE_NAME = "Lian Labs";
export const SITE_SHORT_NAME = "Lian";
/**
 * The public origin used for canonical URLs, the sitemap and structured data.
 * Set NEXT_PUBLIC_SITE_URL to the production domain. On Vercel it falls back
 * to the project's production domain; locally, to the dev server.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");
export const SITE_DESCRIPTION =
  "Lian Labs is a software company in Addis Ababa. We build business software, websites, mobile apps and payment integrations for Ethiopian companies, schools and organisations.";

export const CONTACT_EMAIL = "contact@lian-labs.com";
export const BOOK_CALL_URL = "https://cal.com/lian-labs/discovery-call";
export const BOOK_CTA_LABEL = "Start a project";
export const OFFICE = {
  building: "Rayuma Building, 9th floor",
  city: "Addis Ababa",
  country: "Ethiopia",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Rayuma+Building+Addis+Ababa",
} as const;
export const OFFICE_ADDRESS = `${OFFICE.building}, ${OFFICE.city}, ${OFFICE.country}`;

export const COMPANY_LINKEDIN = "https://www.linkedin.com/company/lian-tech";
export const COMPANY_GITHUB = "https://github.com/lian-labs";

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}
