import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <SiteShell>
      <section className="pt-40 pb-20">
        <div className="wrap">
          <p className="text-[12px] tracking-[0.02em] text-ink-faint tabular-nums">
            404
          </p>
          <h1 className="mt-3 text-display-1 text-balance">
            That page is not here.
          </h1>
          <p className="mt-5 max-w-md text-body text-ink-muted">
            It may have moved. Go back home, see our services or our
            products.
          </p>
          <div className="mt-8 flex flex-wrap gap-5 text-sm font-medium text-brand-700">
            <Link href="/">← Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/products">Products</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
