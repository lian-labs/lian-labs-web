/**
 * Countries we have delivered for. `code` is ISO 3166-1 alpha-2 in lower
 * case and picks public/flags/rect/<code>.svg; add the flag file with the row.
 */
export const COUNTRIES = [
  { code: "us", name: "United States" },
  { code: "gb", name: "United Kingdom" },
  { code: "de", name: "Germany" },
  { code: "it", name: "Italy" },
  { code: "et", name: "Ethiopia" },
] as const;

export const STATS = [
  { value: 18, suffix: "+", label: "Projects delivered" },
  { value: 5, suffix: "+", label: "Countries served" },
  { value: 5, suffix: "+", label: "Years building software" },
  { value: 100, suffix: "%", label: "Code and IP owned by clients" },
] as const;
