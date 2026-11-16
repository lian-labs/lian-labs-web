export const SITE_NAME = "Lian Labs";
export const SITE_SHORT_NAME = "Lian";
/** Set NEXT_PUBLIC_SITE_URL per deployment; the fallback is the main domain. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://lian-labs.com";
export const SITE_DESCRIPTION =
  "Lian Labs is a software company from Addis Ababa. We design and build web platforms, mobile apps and AI-powered products for businesses in Ethiopia and clients around the world.";

export const CONTACT_EMAIL = "contact@lian-labs.com";
export const BOOK_CALL_URL = "https://cal.com/lian-labs/discovery-call";
export const BOOK_CTA_LABEL = "Start a project";
export const HQ_LOCATION = "Addis Ababa, Ethiopia";

export const COMPANY_LINKEDIN = "https://www.linkedin.com/company/lian-tech";
export const COMPANY_GITHUB = "https://github.com/lian-labs";

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}
