import SiteShell from "./SiteShell";
import Hero from "./Hero";
import Services from "./Services";
import Products from "./Products";
import Clients from "./Clients";
import WhyUs from "./WhyUs";
import Process from "./Process";
import Statement from "./Statement";
import FAQ from "./FAQ";
import CallToAction from "./CallToAction";
import JsonLd from "./JsonLd";
import { EDITIONS } from "@/lib/editions";
import type { Region } from "@/lib/regions";
import { faqSchema } from "@/lib/schema";

/** The homepage for either edition. Copy comes from `EDITIONS[region]`. */
export default function HomePage({ region }: { region: Region }) {
  const edition = EDITIONS[region];

  return (
    <SiteShell region={region}>
      <JsonLd data={faqSchema(edition.faq)} />
      <Hero hero={edition.hero} region={region} />
      <Services services={edition.services} region={region} />
      <Products />
      <Clients reach={edition.reach} />
      <Statement>{edition.statement}</Statement>
      <WhyUs why={edition.why} />
      <Process steps={edition.process} />
      <FAQ items={edition.faq} />
      <CallToAction cta={edition.cta} />
    </SiteShell>
  );
}
