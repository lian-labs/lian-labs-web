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
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
