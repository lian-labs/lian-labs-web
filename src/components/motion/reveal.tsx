"use client";

import type { ReactNode } from "react";
import { InView } from "./in-view";

/**
 * The section entrance used across the site: fade + rise + unblur as the band
 * enters the viewport, once. The blur is what separates this from a plain
 * fade — a soft focus pull reads as depth rather than as a loading state.
 *
 * The negative bottom margin on the viewport opts the trigger in slightly late,
 * so a band animates only once it is properly on screen and not merely
 * clipping the fold.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: string;
}) {
  return (
    <InView
      as={as}
      once
      className={className}
      viewOptions={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={{
        hidden: { opacity: 0, y, filter: "blur(10px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </InView>
  );
}
