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
import { EDITION as edition } from "@/lib/editions";
import { faqSchema } from "@/lib/schema";

/** The homepage. Copy comes from the edition this site serves. */
export default function HomePage() {
  return (
    <SiteShell>
      <JsonLd data={faqSchema(edition.faq)} />
      <Hero hero={edition.hero} />
      <Services services={edition.services} />
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
