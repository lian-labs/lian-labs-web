"use client";

import { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";

/**
 * Counts from 0 to `value` once, the first time it scrolls into view.
 *
 * The final figure is server-rendered, so crawlers, screen readers and
 * no-JS visitors get the real number. Digits are written straight to the DOM
 * from the animation frame rather than through state, so the count does not
 * re-render the tree sixty times a second.
 */
export function CountUp({
  value,
  duration = 2,
  delay = 0,
  className,
}: {
  value: number;
  duration?: number;
  /** Seconds to hold at 0, so the count is not spent behind a fade-in. */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView || reduce) return;

    let frame = 0;
    let start: number | null = null;
    const tick = (now: number) => {
      start ??= now;
      const t = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = String(Math.round(value * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    el.textContent = "0";
    const timer = window.setTimeout(() => {
      frame = requestAnimationFrame(tick);
    }, delay * 1000);
    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
      el.textContent = String(value);
    };
  }, [inView, reduce, value, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
