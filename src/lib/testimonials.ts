/**
 * Client reviews shown in the Testimonials band.
 *
 * Copy each review as closely as the card allows. Do not put the client's
 * name or company on the card. `role` is a short label for the engagement.
 * `country` is an ISO 3166 code in lower case and picks the rectangular flag
 * from public/flags/rect/<code>.svg (FlagCDN, public domain).
 *
 * `sample` entries exist only to preview the layout. They render in
 * development and are dropped from production builds.
 */

export type Testimonial = {
  quote: string;
  /** Rating, 1 to 5 stars. */
  rating: 1 | 2 | 3 | 4 | 5;
  /** Short label for the engagement, shown on the card. */
  role: string;
  /** ISO 3166-1 alpha-2, lower case, e.g. "gb". */
  country: string;
  sample?: true;
};

const ENTRIES: Testimonial[] = [
  {
    rating: 5,
    role: "SaaS project",
    country: "it",
    quote:
      "Their team displayed exceptional technical expertise, delivered high-quality results on time and maintained excellent communication throughout the process. The final product exceeded our expectations in performance, user experience and design.",
  },
  {
    rating: 5,
    role: "Flutter developer",
    country: "us",
    quote: "Excellent app developer.",
  },
  {
    rating: 5,
    role: "Backend developer",
    country: "us",
    quote:
      "Successfully completed every task on our project. Their technical expertise, commitment and problem-solving skills made a significant impact on the team.",
  },
  {
    rating: 5,
    role: "Full stack developer",
    country: "us",
    quote:
      "Work was completed on time and diligently. Communication was excellent. One of the best I've worked with, and I highly recommend them.",
  },
];

export const TESTIMONIALS =
  process.env.NODE_ENV === "production"
    ? ENTRIES.filter((entry) => !entry.sample)
    : ENTRIES;
