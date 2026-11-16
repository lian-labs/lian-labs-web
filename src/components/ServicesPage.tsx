import PageHeader from "./PageHeader";
import SiteShell from "./SiteShell";
import Services from "./Services";
import Process from "./Process";
import FAQ from "./FAQ";
import CallToAction from "./CallToAction";
import { EDITIONS } from "@/lib/editions";
import { type Region, regionPath } from "@/lib/regions";

export default function ServicesPage({ region }: { region: Region }) {
  const edition = EDITIONS[region];
  return (
    <SiteShell region={region}>
      <PageHeader
        meta="Services"
        crumb={{ name: "Services", path: regionPath(region, "/services") }}
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
      <Services services={edition.services} region={region} showLink={false} />
      <Process steps={edition.process} />
      <FAQ items={edition.faq} />
      <CallToAction cta={edition.cta} />
    </SiteShell>
  );
}
