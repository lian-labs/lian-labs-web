"use client";

import { Fragment, useEffect, useRef, type ReactNode } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { cn } from "@/lib/cn";

/** Opacity of a word not yet reached. Low enough to read as "to come", high
 *  enough that a visitor who stops scrolling can still read the sentence. */
const UNREAD = 0.25;

type Segment = {
  words: string[];
  mark: boolean;
  spaceBefore: boolean;
  /** Index of the segment's first word in the whole sentence. */
  start: number;
};

/** Splits "plain *marked* plain" into runs of words, remembering where the
 *  source had whitespace so "*in days*," keeps its comma tight. */
function parse(text: string): Segment[] {
  const segments: Segment[] = [];
  let pendingSpace = false;
  let start = 0;
  for (const [i, raw] of text.split("*").entries()) {
    const words = raw.trim().split(/\s+/).filter(Boolean);
    if (words.length) {
      segments.push({
        words,
        mark: i % 2 === 1,
        spaceBefore: segments.length > 0 && (pendingSpace || /^\s/.test(raw)),
        start,
      });
      start += words.length;
    }
    pendingSpace = words.length ? /\s$/.test(raw) : pendingSpace || raw !== "";
  }
  return segments;
}

/**
 * A sentence that inks in word by word as it scrolls up the viewport, and
 * fades back on the way up. Two per page at most: it slows the reader down,
 * which only works if it's rare.
 *
 * Wrap a key phrase in asterisks to mark it: once the fill reaches it, the
 * phrase turns brand and a highlighter band sweeps in behind it. Keep marked
 * phrases short; each one stays on a single line.
 *
 * Reduced motion is handled in CSS, not with useReducedMotion: the hook
 * resolves on the client's first render, so the server's faint words would
 * fail to hydrate and stay faint.
 */
export function ScrollFill({
  children,
  className,
  as: Tag = "p",
  offset = ["start 0.9", "end 0.6"],
  onLoad,
}: {
  children: string;
  className?: string;
  /** "h1" when the sentence is the page's headline. */
  as?: "p" | "h1";
  /** Scroll range the fill runs over. The hero uses ["start 1", "end 1"] so
   *  everything visible on load is already inked. */
  offset?: NonNullable<Parameters<typeof useScroll>[0]>["offset"];
  /** Fill once on page load instead of on scroll, for text above the fold.
   *  `delay` and `duration` are in seconds. */
  onLoad?: { delay?: number; duration?: number };
}) {
  const ref = useRef<HTMLHeadingElement & HTMLParagraphElement>(null);
  const { scrollYProgress: scrolled } = useScroll({ target: ref, offset });
  const loaded = useMotionValue(0);
  const loadDelay = onLoad?.delay ?? 0;
  const loadDuration = onLoad?.duration ?? 2;
  const fillOnLoad = Boolean(onLoad);
  useEffect(() => {
    if (!fillOnLoad) return;
    const controls = animate(loaded, 1, {
      delay: loadDelay,
      duration: loadDuration,
      ease: "linear",
    });
    return () => controls.stop();
  }, [fillOnLoad, loadDelay, loadDuration, loaded]);
  const scrollYProgress = fillOnLoad ? loaded : scrolled;
  const segments = parse(children);
  const total = segments.reduce((n, s) => n + s.words.length, 0);

  return (
    <Tag ref={ref} className={cn("text-balance", className)}>
      {segments.map((segment, s) => {
        const { start } = segment;
        const end = start + segment.words.length;
        const words = segment.words.map((word, w) => (
          <Fragment key={w}>
            {w > 0 ? " " : null}
            <Word
              progress={scrollYProgress}
              range={[(start + w) / total, (start + w + 1) / total]}
            >
              {word}
            </Word>
          </Fragment>
        ));
        return (
          <Fragment key={s}>
            {segment.spaceBefore ? " " : null}
            {segment.mark ? (
              <Mark
                progress={scrollYProgress}
                range={[start / total, end / total]}
              >
                {words}
              </Mark>
            ) : (
              words
            )}
          </Fragment>
        );
      })}
    </Tag>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [UNREAD, 1]);
  return (
    <motion.span style={{ opacity }} className="motion-reduce:opacity-100!">
      {children}
    </motion.span>
  );
}

function Mark({
  children,
  progress,
  range,
}: {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const scaleX = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative isolate whitespace-nowrap text-brand-700">
      <motion.span
        aria-hidden
        style={{ scaleX }}
        className="absolute inset-x-[-0.12em] top-[0.12em] bottom-[0.02em] -z-10 origin-left rounded-[0.18em] bg-brand-100/70 motion-reduce:transform-none!"
      />
      {children}
    </span>
  );
}
