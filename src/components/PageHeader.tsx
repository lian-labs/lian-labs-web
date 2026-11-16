import Breadcrumbs from "./Breadcrumbs";
import { Meta } from "@/components/visuals/bits";

/**
 * Shared interior-page header. Keeps the top-of-page rhythm identical across
 * services, guides and legal pages: breadcrumbs, meta label, two-tone title,
 * lead paragraph.
 */
export default function PageHeader({
  meta,
  title,
  lead,
  crumb,
  width = "wide",
  children,
}: {
  meta: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  crumb: { name: string; path: string };
  /** `prose` matches the `.wrap-prose` column used by long-form pages. */
  width?: "wide" | "prose";
  children?: React.ReactNode;
}) {
  return (
    <header className="pt-28 pb-8 sm:pt-36">
      <div className={width === "prose" ? "wrap-prose" : "wrap"}>
        <Breadcrumbs items={[crumb]} />
        <Meta className="mt-2 block">{meta}</Meta>
        <h1 className="mt-3 max-w-3xl text-display-1 text-balance">{title}</h1>
        {lead ? (
          <p className="mt-6 max-w-2xl text-body text-ink-muted">{lead}</p>
        ) : null}
        {children}
      </div>
    </header>
  );
}
