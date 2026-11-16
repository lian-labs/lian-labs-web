/**
 * The site has two editions that share one theme and one set of components:
 * the global edition at `/` and the Ethiopia edition at `/et`. Pages that
 * differ per edition (home, services) take a `region`; shared pages
 * (products, about, contact) link back to whichever edition the reader
 * last chose through the header switch.
 */
export const REGIONS = ["world", "et"] as const;
export type Region = (typeof REGIONS)[number];

export const REGION_META: Record<
  Region,
  { label: string; short: string; base: string; flag: string | null }
> = {
  world: { label: "Global", short: "Global", base: "", flag: null },
  et: { label: "Ethiopia", short: "ET", base: "/et", flag: "/flags/rect/et.svg" },
};

/** Prefix a path with the edition's base, e.g. ("et", "/services") -> "/et/services". */
export function regionPath(region: Region, path = "/") {
  const base = REGION_META[region].base;
  if (path === "/") return base || "/";
  return `${base}${path}`;
}
