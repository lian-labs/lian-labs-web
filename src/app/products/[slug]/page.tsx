import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import SiteShell from "@/components/SiteShell";
import CallToAction from "@/components/CallToAction";
import { StatusBadge } from "@/components/Products";
import { Reveal } from "@/components/motion/reveal";
import { Bezel } from "@/components/ui/bezel";
import { PanelTag } from "@/components/ui/panel";
import { PillLink } from "@/components/ui/pill";
import { EDITIONS } from "@/lib/editions";
import { getProduct, PRODUCTS } from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name}: ${product.category}`,
    description: product.tagline,
    alternates: { canonical: `/products/${product.slug}` },
  };
}

export default async function ProductPage({
  params,
}: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <SiteShell>
      <PageHeader
        meta={product.category}
        crumb={{ name: product.name, path: `/products/${product.slug}` }}
        title={
          <>
            {product.name}
            <span className="block font-normal text-ink-muted">
              {product.tagline}
            </span>
          </>
        }
        lead={product.description}
      >
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <StatusBadge status={product.status} />
          <PanelTag>For {product.audience.toLowerCase()}</PanelTag>
        </div>
        {product.url ? (
          <div className="mt-8">
            <PillLink href={product.url} external>
              Visit {product.name} <span aria-hidden>↗</span>
            </PillLink>
          </div>
        ) : null}
      </PageHeader>

      <section className="band-tight">
        <div className="wrap">
          <Reveal>
            <Bezel size="lg" innerClassName="p-7 sm:p-10">
              <h2 className="text-display-3 font-medium text-ink">
                What it does
              </h2>
              <ul className="mt-6 grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-[17px] leading-relaxed text-ink"
                  >
                    <span className="mt-1.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-50 text-[9px] text-brand-700">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Bezel>
          </Reveal>
        </div>
      </section>

      <CallToAction
        cta={{
          first: `Interested in ${product.name}?`,
          second: "Let's talk.",
          lead: "Book a short call for a demo, pricing or a custom setup for your organisation.",
          fine: EDITIONS.world.cta.fine,
        }}
      />
    </SiteShell>
  );
}
