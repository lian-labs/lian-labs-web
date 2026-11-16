"use client";

import { memo } from "react";
import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/cn";

type Per = "char" | "word" | "line";

const STAGGER: Record<Per, number> = {
  char: 0.03,
  word: 0.05,
  line: 0.1,
};

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

/**
 * Per-word reveal. Used for the hero headline, where a whole-line fade loses the
 * sense of the sentence resolving.
 *
 * `sr-only` copy of the full string is rendered alongside the split spans so
 * screen readers and search engines get one clean sentence rather than a
 * sequence of fragments.
 */
export function TextReveal({
  children,
  per = "word",
  delay = 0,
  className,
  speedReveal = 1.1,
}: {
  children: string;
  per?: Per;
  delay?: number;
  className?: string;
  speedReveal?: number;
}) {
  const segments =
    per === "line" ? children.split("\n") : children.split(/(\s+)/);

  return (
    <motion.span
      className={cn("block", className)}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: container.hidden,
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: STAGGER[per] / speedReveal,
            delayChildren: delay,
          },
        },
      }}
    >
      <span className="sr-only">{children}</span>
      <span aria-hidden>
        {segments.map((segment, index) => (
          <Segment key={`${index}-${segment}`} segment={segment} per={per} />
        ))}
      </span>
    </motion.span>
  );
}

const Segment = memo(function Segment({
  segment,
  per,
}: {
  segment: string;
  per: Per;
}) {
  const variants: Variants = {
    hidden: { opacity: 0, y: 18, filter: "blur(12px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  if (per === "line") {
    return (
      <motion.span variants={variants} className="block">
        {segment}
      </motion.span>
    );
  }

  if (per === "char") {
    return (
      <motion.span className="inline-block whitespace-pre">
        {segment.split("").map((char, charIndex) => (
          <motion.span
            key={`c-${charIndex}`}
            variants={variants}
            className="inline-block whitespace-pre"
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  // A space must stay a normal text node: as an inline-block it becomes an
  // unbreakable box that can wrap to the start of the next line.
  if (!segment.trim()) return " ";

  return (
    <motion.span variants={variants} className="inline-block whitespace-pre">
      {segment}
    </motion.span>
  );
});
