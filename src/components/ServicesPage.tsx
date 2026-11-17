import PageHeader from "./PageHeader";
import SiteShell from "./SiteShell";
import Services from "./Services";
import Process from "./Process";
import FAQ from "./FAQ";
import CallToAction from "./CallToAction";
import { EDITION as edition } from "@/lib/editions";

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHeader
        meta="Services"
        crumb={{ name: "Services", path: "/services" }}
        title={
          <>
            {edition.services.first}
            <span className="block font-normal text-ink-muted">
              {edition.services.second}
            </span>
          </>
        }
        lead={edition.services.lead}
      />
      <Services services={edition.services} showLink={false} />
      <Process steps={edition.process} />
      <FAQ items={edition.faq} />
      <CallToAction cta={edition.cta} />
    </SiteShell>
  );
}
