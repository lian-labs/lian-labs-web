import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SiteShell from "@/components/SiteShell";
import Clients from "@/components/Clients";
import WhyUs from "@/components/WhyUs";
import Products from "@/components/Products";
import CallToAction from "@/components/CallToAction";
import { Reveal } from "@/components/motion/reveal";
import { Bezel } from "@/components/ui/bezel";
import { PanelTag } from "@/components/ui/panel";
import { EDITIONS } from "@/lib/editions";
import { HQ_LOCATION } from "@/lib/site";

const DESCRIPTION =
  "Lian Labs is a software company from Addis Ababa building web platforms, mobile apps and AI products for clients in Ethiopia and around the world.";

export const metadata: Metadata = {
  title: "About",
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: { title: "About Lian Labs", description: DESCRIPTION, url: "/about" },
};

const PILLARS = [
  {
    tag: "Client work",
    title: "We build products for other companies.",
    body: "Startups and established businesses bring us platforms, apps and AI features to design and build, from the first version to scale.",
  },
  {
    tag: "Our products",
    title: "We build and run our own software.",
    body: "Products like Lian SMS and Gojo keep us close to real users, real production systems and the long tail of support.",
  },
  {
    tag: "Talent",
    title: "We grow Ethiopian engineering talent.",
    body: "We hire, mentor and place senior engineers, and give them work on international products from day one.",
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHeader
        meta="About Lian Labs"
        crumb={{ name: "About", path: "/about" }}
        title={
          <>
            A software company
            <span className="block font-normal text-ink-muted">
              from Addis Ababa, for the world.
            </span>
          </>
        }
        lead={`Lian Labs is a product engineering company headquartered in ${HQ_LOCATION}. We design and build web platforms, mobile apps and AI-powered products for clients across North America, Europe and Africa, and we build products of our own.`}
      />

      <section className="band-tight">
        <div className="wrap">
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.tag} as="li" delay={i * 0.08}>
                <Bezel className="h-full" innerClassName="h-full p-6 sm:p-7">
                  <PanelTag>{p.tag}</PanelTag>
                  <h2 className="mt-5 text-[clamp(20px,1.8vw,24px)] leading-snug font-medium tracking-[-0.015em] text-ink">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-[16px] leading-relaxed text-ink-muted sm:text-[17px]">
                    {p.body}
                  </p>
                </Bezel>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Clients reach={EDITIONS.world.reach} />
      <Products />
      <WhyUs why={EDITIONS.world.why} />
      <CallToAction cta={EDITIONS.world.cta} />
    </SiteShell>
  );
}
