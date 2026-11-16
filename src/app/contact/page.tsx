import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { Bezel } from "@/components/ui/bezel";
import { Meta } from "@/components/visuals/bits";
import SiteShell from "@/components/SiteShell";
import { contactPageSchema } from "@/lib/schema";
import { BOOK_CALL_URL, BOOK_CTA_LABEL, CONTACT_EMAIL } from "@/lib/site";

const DESCRIPTION =
  "Talk to Lian Labs about a new product, a platform rebuild, one of our products, or extending your team.";

export const metadata: Metadata = {
  title: "Contact",
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    title: "Contact Lian Labs",
    description: DESCRIPTION,
    url: "/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Lian Labs",
    description: DESCRIPTION,
  },
};

export default function ContactPage() {
  return (
    <SiteShell>
      <JsonLd data={contactPageSchema()} />
      <section className="pt-28 pb-8 sm:pt-36">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
          <Meta className="mt-2 block">Contact</Meta>
          <h1 className="mt-3 max-w-3xl text-display-1 text-balance">
            Tell us what
            <span className="block font-normal text-ink-muted">
              you want to build.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-body text-ink-muted">
            Whether you are in Addis Ababa or anywhere else in the world, a
            short call is the fastest way to start. Tell us about the product,
            the users and the timeline, and we will come back with an approach
            and a rough plan within one business day.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
            >
              <Bezel
                className="h-full transition-transform duration-300 group-hover:-translate-y-0.5"
                innerClassName="h-full p-7"
              >
                <p className="text-sm text-ink-muted">To talk it through</p>
                <h2 className="mt-2 text-xl text-ink">{BOOK_CTA_LABEL}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  Thirty minutes on your idea, your users and your timeline.
                  No pushy sales, just straightforward technical advice.
                </p>
              </Bezel>
            </a>

            <a href={`mailto:${CONTACT_EMAIL}`} className="group block h-full">
              <Bezel
                className="h-full transition-transform duration-300 group-hover:-translate-y-0.5"
                innerClassName="h-full p-7"
              >
                <p className="text-sm text-ink-muted">For everything else</p>
                <h2 className="mt-2 text-xl text-ink">Email Lian Labs</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  Send a brief, request an NDA or a product demo, or ask
                  anything you would rather put in writing.
                </p>
                <p className="mt-3 text-sm text-brand-700">{CONTACT_EMAIL}</p>
              </Bezel>
            </a>
          </div>

        </div>
      </section>
    </SiteShell>
  );
}
