"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  type Transition,
  type UseInViewOptions,
  type Variants,
} from "motion/react";

type MotionTag = keyof typeof motion;

export type InViewProps = {
  children: React.ReactNode;
  variants?: Variants;
  transition?: Transition;
  viewOptions?: UseInViewOptions;
  as?: MotionTag | string;
  /** Re-animate every time the element re-enters the viewport. Off by default. */
  once?: boolean;
  className?: string;
};

/**
 * Scroll-triggered animation wrapper.
 *
 * When `once` is set, `useInView` is forced into `once: true` so its boolean
 * latches on the first intersection. Deriving "has played" from that latch
 * rather than from a separate `useState` in an effect avoids a render where the
 * element is already in view but the latch is still false.
 */
export function InView({
  children,
  variants,
  transition,
  viewOptions,
  as = "div",
  once = true,
  className,
}: InViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, ...viewOptions });

  const Component = motion[as as MotionTag] as typeof motion.div;

  return (
    <Component
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
    >
      {children}
    </Component>
  );
}
