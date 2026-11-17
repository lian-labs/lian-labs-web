/**
 * The copy in `editions.ts` exists in two versions: one for Ethiopia and one
 * for clients worldwide. This site runs on et.lian-labs.com and serves the
 * Ethiopia version only; the global audience is served by lian-labs.com.
 * Set SITE_REGION to "world" to serve the global copy instead.
 */
export type Region = "world" | "et";

export const SITE_REGION: Region = "et";
