"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "motion/react";
import { Bezel } from "@/components/ui/bezel";
import type { Testimonial } from "@/lib/testimonials";
import { cn } from "@/lib/cn";

const CARD = 340;
const GAP = 20;
/** Below this width the card shrinks to leave a sliver of each neighbour. */
const NARROW = 640;
/** The ring must be wider than any screen so cards never visibly wrap. */
const MIN_RING = 3200;
/** Drift speed in px per second. Slow enough to read the centre card. */
const SPEED = 26;

const REGIONS = new Intl.DisplayNames(["en"], { type: "region" });

function Stars({ rating }: { rating: number }) {
  return (
    <span
      role="img"
      aria-label={`${rating} out of 5 stars`}
      className="flex gap-0.5"
    >
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          aria-hidden
          className={cn(
            "size-4",
            i < rating ? "text-amber-400" : "text-ink/10",
          )}
        >
          <path
            fill="currentColor"
            d="M10 1.6l2.47 5.2 5.7.68-4.2 3.9 1.1 5.63L10 14.2 4.93 17l1.1-5.62-4.2-3.9 5.7-.68z"
          />
        </svg>
      ))}
    </span>
  );
}

function Card({
  review,
  index,
  ring,
  offset,
  hidden,
  card,
}: {
  review: Testimonial;
  index: number;
  card: number;
  ring: number;
  offset: MotionValue<number>;
  hidden: boolean;
}) {
  // Where this card sits on the ring, centred on the viewport.
  const x = useTransform(offset, (o) => {
    const pos =
      ((((index * (card + GAP) - o) % ring) + ring) % ring) - ring / 2;
    return pos - card / 2;
  });
  const country = REGIONS.of(review.country.toUpperCase());

  return (
    <motion.li
      aria-hidden={hidden || undefined}
      style={{ x, y: "-50%", width: card }}
      className="absolute top-1/2 left-1/2"
    >
      <Bezel>
        <figure className="p-6">
        <div className="flex items-center justify-between">
          <Stars rating={review.rating} />
          {review.sample ? (
            <span className="rounded-md bg-amber-50 px-1.5 py-0.5 text-[11.5px] font-medium text-amber-700">
              Sample
            </span>
          ) : null}
        </div>
        <blockquote className="mt-4 line-clamp-8 text-[15px] leading-relaxed text-ink">
          &ldquo;{review.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-5 flex items-center justify-between gap-3">
          <span className="text-[13.5px] leading-snug font-medium text-ink">
            {review.role}
          </span>
          <Image
            src={`/flags/rect/${review.country}.svg`}
            alt={country ?? review.country}
            width={24}
            height={16}
            unoptimized
            className="h-3.5 w-auto shrink-0 rounded-[2px]"
          />
        </figcaption>
        </figure>
      </Bezel>
    </motion.li>
  );
}

/**
 * Reviews drifting sideways, fading out at each end. Drift pauses
 * on hover, off screen and under reduced motion.
 */
export default function TestimonialStrip({
  reviews,
}: {
  reviews: Testimonial[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "100px" });
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const offset = useMotionValue(0);
  const [card, setCard] = useState(CARD);

  const step = card + GAP;
  const repeats = Math.max(1, Math.ceil(MIN_RING / (reviews.length * step)));
  const items = Array.from({ length: repeats }, () => reviews).flat();
  const ring = items.length * step;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      setCard(w < NARROW ? Math.min(CARD, w - 72) : CARD);
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useAnimationFrame((_, delta) => {
    if (!inView || hovered || reduce) return;
    offset.set((offset.get() + (SPEED * delta) / 1000) % ring);
  });

  return (
    <div
      ref={ref}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 18%, black 82%, transparent)",
      }}
      className="w-full overflow-hidden py-10"
    >
      <ul className="relative h-[380px]">
        {items.map((review, i) => (
          <Card
            key={i}
            review={review}
            index={i}
            ring={ring}
            offset={offset}
            card={card}
            hidden={i >= reviews.length}
          />
        ))}
      </ul>
    </div>
  );
}
