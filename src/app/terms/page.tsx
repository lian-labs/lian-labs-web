import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SiteShell from "@/components/SiteShell";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

const TITLE = "Website Terms";
const DESCRIPTION = `Terms for using the ${SITE_NAME} website.`;
const PATH = "/terms";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: "website",
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: PATH,
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
  },
};

export default function TermsPage() {
  return (
    <SiteShell>
      <article className="pb-8">
        <PageHeader
          width="prose"
          meta="Last updated 6 October 2026"
          crumb={{ name: "Terms", path: "/terms" }}
          title="Website terms"
        />
        <div className="wrap-prose">
          <div className="prose-lian">
            <p>
              These terms apply when you use the {SITE_NAME} website. Any work
              we do for your company is governed by the written agreement we
              sign with you, not by this page.
            </p>
            <h2>Website content</h2>
            <p>
              This website gives general information and guides. It is not
              legal, security, compliance or financial advice. The scope of
              work, rates, dates and promises only become binding once they are
              agreed in writing.
            </p>
            <h2>Confidentiality and client relationships</h2>
            <p>
              {SITE_NAME} contracts directly with companies, startups and
              organisations. All client work is performed under comprehensive mutual NDAs,
              and our clients retain full ownership and control over their
              products and business terms.
            </p>
            <h2>Intellectual property</h2>
            <p>
              Unless stated otherwise, {SITE_NAME} owns the design and written
              content of this website. Who owns project work, source code and the
              related intellectual property is governed by the project agreement.
              Unless agreed otherwise, delivered work and IP belong to the client.
            </p>
            <h2>Availability and external links</h2>
            <p>
              We work to keep the site accurate and online, but we do not
              promise it will always be available. Outside services and links
              are run by their own providers.
            </p>
            <h2>Contact</h2>
            <p>
              Send questions about these terms to{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
