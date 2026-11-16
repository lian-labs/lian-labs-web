import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SiteShell from "@/components/SiteShell";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

const TITLE = "Privacy";
const DESCRIPTION = `How ${SITE_NAME} handles data from this website and from people who contact us.`;
const PATH = "/privacy";

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
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <SiteShell>
      <article className="pb-8">
        <PageHeader
          width="prose"
          meta="Last updated 6 October 2026"
          crumb={{ name: "Privacy", path: "/privacy" }}
          title="Privacy"
        />
        <div className="wrap-prose">
          <div className="prose-lian">
            <p>
              This notice explains how {SITE_NAME} handles your information
              when you visit this website, ask for a partner rate, email us or
              book a call.
            </p>
            <h2>Information we receive</h2>
            <p>
              We receive the information you choose to give us in an email, a
              booking form or the partner rate request form. Our hosting and
              analytics providers may also process basic information about your
              device, the pages you view and how the site performs.
            </p>
            <h2>How we use it</h2>
            <p>
              We use this information to reply to you, to decide whether we are
              a good fit to work together, to prepare a rate card, to run and
              secure the website, and to understand which pages are useful. We
              do not sell personal information. We do not add people who
              contact us to a mailing list.
            </p>
            <h2>Service providers and retention</h2>
            <p>
              The website may use Vercel for hosting and analytics. It may use
              Microsoft Clarity to understand how visitors use pages, including
              heatmaps and session recordings (with anything typed into forms
              hidden). It may use Resend to send partner rate request emails,
              and Cal.com for bookings. These providers process information
              under their own privacy terms. We keep records of your messages
              only as long as we need them for the conversation, to meet legal
              obligations, and for legitimate business records.
            </p>
            <h2>Client confidentiality and project data</h2>
            <p>
              We protect proprietary information and project data with mutual
              non-disclosure agreements (NDAs) signed before receiving any
              system access or codebase details. Without your written
              permission, we do not publish project details, use your brand for
              marketing, or share technical secrets with anyone outside the
              team doing the work.
            </p>
            <h2>Your choices</h2>
            <p>
              You can ask to see, correct or delete the information we hold
              about you, as allowed by applicable law. Contact{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
