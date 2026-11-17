import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SiteShell from "@/components/SiteShell";
import { ProductCard } from "@/components/Products";
import CallToAction from "@/components/CallToAction";
import { Reveal } from "@/components/motion/reveal";
import { EDITION } from "@/lib/editions";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Software products built and run by Lian Labs, including Lian SMS for schools, Lian Property for landlords and the Gojo dating app.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <SiteShell>
      <PageHeader
        meta="Products"
        crumb={{ name: "Products", path: "/products" }}
        title={
          <>
            Products we build
            <span className="block font-normal text-ink-muted">
              and run ourselves.
            </span>
          </>
        }
        lead="Alongside client work, we design, ship and operate our own software. Each product is a chance to prove our engineering in production, with real users."
      />
      <section className="band-tight">
        <div className="wrap">
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product, i) => (
              <Reveal key={product.slug} as="li" delay={i * 0.08}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <CallToAction cta={EDITION.cta} />
    </SiteShell>
  );
}
