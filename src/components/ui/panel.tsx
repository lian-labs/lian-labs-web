import type { ReactNode } from "react";

/*
 * What is left of the old flat panel after every card moved to Bezel: the
 * label that sits at the top of a card, and the class for the small UI
 * fragments floating inside a card visual.
 */

/** Small grey label at the top of a card. */
export function PanelTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-6 items-center rounded-md bg-ink/[0.05] px-2 text-[12px] text-ink-muted">
      {children}
    </span>
  );
}

/** A floating UI fragment inside a card visual. */
export const SKETCH = "rounded-xl bg-white ring-1 ring-ink/[0.08]";
