export type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | ClassValue[];

/**
 * Minimal class joiner. Deliberately not clsx + tailwind-merge: nothing in
 * this app passes conflicting Tailwind utilities to `cn`, so merge semantics
 * would be dead weight. Keeps the dependency list shorter than the reference
 * app.
 */
export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];

  for (const input of inputs) {
    if (!input) continue;
    if (Array.isArray(input)) {
      const nested = cn(...input);
      if (nested) out.push(nested);
    } else {
      out.push(String(input));
    }
  }

  return out.join(" ");
}
