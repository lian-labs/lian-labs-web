import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Bezel } from "@/components/ui/bezel";
import { PanelTag } from "@/components/ui/panel";
import SectionIntro from "./SectionIntro";
import { LogoMark } from "./Logo";
import { PRODUCTS, type Product } from "@/lib/products";
import { cn } from "@/lib/cn";

const STATUS_STYLE: Record<Product["status"], string> = {
  Live: "bg-emerald-50 text-emerald-700",
  Beta: "bg-amber-50 text-amber-700",
  "In development": "bg-brand-50 text-brand-700",
};

export function StatusBadge({ status }: { status: Product["status"] }) {
  return (
    <span
      className={cn(
        "rounded-md px-2 py-1 text-[12px] leading-none font-medium",
        STATUS_STYLE[status],
      )}
    >
      {status}
    </span>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block h-full">
      <Bezel
        size="lg"
        className="h-full transition-transform duration-300 group-hover:-translate-y-1"
        innerClassName="flex h-full flex-col p-6 sm:p-8"
      >
        <div className="flex items-center gap-3">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-950">
            <LogoMark className="size-7" inverted />
          </span>
          <div>
            <p className="text-[20px] font-medium tracking-[-0.015em] text-ink">
              {product.name}
            </p>
            <p className="text-[13.5px] text-ink-faint">{product.category}</p>
          </div>
          <span className="ml-auto">
            <StatusBadge status={product.status} />
          </span>
        </div>
        <p className="mt-6 text-[clamp(19px,1.7vw,23px)] leading-snug font-medium tracking-[-0.015em] text-ink text-balance">
          {product.tagline}
        </p>
        <p className="mt-3 text-[16px] leading-relaxed text-ink-muted">
          For {product.audience.toLowerCase()}.
        </p>
        <span className="mt-auto pt-8 text-[15px] font-medium text-brand-700">
          Learn more{" "}
          <span
            aria-hidden
            className="inline-block transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </Bezel>
    </Link>
  );
}

export default function Products() {
  return (
    <section id="products" className="band">
      <div className="wrap">
        <SectionIntro
          meta="Our products"
          first="We don't only build for clients."
          second="We build our own products too."
        >
          <p>
            Running our own software in production keeps us honest about what
            it takes to ship, scale and support a product.
          </p>
        </SectionIntro>

        <ul className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.slug} as="li" delay={i * 0.08}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.15}>
          <div className="mt-6 flex justify-center">
            <PanelTag>More products in development</PanelTag>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
