/**
 * Products Lian Labs builds and runs. Add one by appending an entry; it shows
 * up on both homepages, on /products, and gets its own /products/<slug> page.
 *
 * TODO(content): confirm each description, status and link before launch.
 */
export type Product = {
  slug: string;
  name: string;
  category: string;
  /** One line for cards. */
  tagline: string;
  /** A short paragraph for the product page. */
  description: string;
  /** <title> for the product page: the search phrase people actually type. */
  seoTitle: string;
  /** Meta description: 140-160 characters, written for the search result. */
  seoDescription: string;
  features: readonly string[];
  audience: string;
  status: "Live" | "Beta" | "In development";
  /** Public product site, if any. */
  url?: string;
};

export const PRODUCTS: readonly Product[] = [
  {
    slug: "lian-sms",
    name: "Lian SMS",
    seoTitle: "Lian SMS – School Management System in Ethiopia",
    seoDescription:
      "School management software for Ethiopian schools: admissions, attendance, grades, report cards and parent communication. Hosted and supported in Addis Ababa.",
    category: "School management",
    tagline:
      "One system for students, classes, attendance, grades and parents.",
    description:
      "Lian SMS is a school management system for primary and secondary schools. It brings admissions, timetables, attendance, assessment and report cards into one place, and keeps parents informed without paper notices. It is built on a proven open-source core and set up, hosted and supported by our team.",
    features: [
      "Student records, admissions and enrolment",
      "Timetables, attendance and class management",
      "Assessments, grade books and report cards",
      "Parent and staff communication",
      "Hosted, backed up and supported by Lian Labs",
    ],
    audience: "Schools and education networks",
    status: "Live",
  },
  {
    slug: "gojo",
    name: "Gojo",
    seoTitle: "Gojo – Habesha Dating App for Ethiopians & the Diaspora",
    seoDescription:
      "Gojo is a simple, safe dating app for Ethiopians and the Habesha diaspora, with matching, in-app chat and a multi-language interface.",
    category: "Consumer app",
    tagline: "A simple, safe dating app for the Habesha community.",
    description:
      "Gojo is a mobile dating app built for Ethiopians and the Habesha diaspora. It pairs a clean matching experience with multi-language support, so people can meet in the language they are most comfortable in.",
    features: [
      "Native mobile app built with Flutter",
      "Profiles, matching and in-app chat",
      "Multi-language interface",
      "Scalable Kotlin backend",
    ],
    audience: "Ethiopians at home and in the diaspora",
    status: "In development",
  },
  {
    slug: "lian-property",
    name: "Lian Property",
    seoTitle: "Lian Property – Property & Rental Management System in Ethiopia",
    seoDescription:
      "Property management software for Ethiopian landlords and real-estate companies: tenants, leases, rent collection via Telebirr and Chapa, SMS reminders and owner reports.",
    category: "Property management",
    tagline:
      "Rent, tenants, leases and maintenance for every unit, in one place.",
    description:
      "Lian Property is a property management system for landlords, real-estate companies and building managers. It tracks every unit, lease and payment, sends rent reminders by SMS, collects rent through Telebirr, Chapa and bank transfer, and gives owners a live view of occupancy, arrears and income across all their buildings.",
    features: [
      "Buildings, units and occupancy at a glance",
      "Tenant profiles, leases and renewal alerts",
      "Rent invoicing, receipts and arrears tracking",
      "Telebirr, Chapa and bank payments with SMS reminders",
      "Maintenance requests, from tenant to technician",
      "Owner reports for income, expenses and vacancies",
    ],
    audience: "Landlords, real-estate companies and building managers",
    status: "In development",
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
