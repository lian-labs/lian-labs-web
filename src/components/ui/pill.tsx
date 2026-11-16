import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Bezel } from "@/components/ui/bezel";

/**
 * Pills are the primary action shape on this site. Both variants carry an inset
 * 1px white highlight on the top edge: without it a dark pill reads as a flat
 * silhouette, and the highlight is what makes it look lit from above.
 */
const BASE =
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap " +
  "transition-[background-color,box-shadow,opacity,transform] duration-200 active:scale-[0.98] " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const VARIANTS = {
  dark: "bg-ink text-white shadow-pill hover:bg-[#1c1a45]",
  light:
    "bg-white/75 text-ink backdrop-blur-md shadow-pill-light hover:bg-white",
  violet: "bg-brand-700 text-white shadow-pill hover:bg-brand-900",
} as const;

const SIZES = {
  sm: "h-10 px-5 text-[14px]",
  md: "min-h-[50px] sm:min-h-[54px] px-6 sm:px-8 text-[15.5px] sm:text-[16.5px]",
  lg: "min-h-[60px] sm:min-h-[64px] px-8 sm:px-10 text-[17px] sm:text-[18.5px]",
} as const;

export type PillProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  className?: string;
  external?: boolean;
};

export function PillLink({
  href,
  children,
  variant = "dark",
  size = "md",
  className,
  external,
}: PillProps) {
  const classes = cn(BASE, VARIANTS[variant], SIZES[size], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  const isHash = href.startsWith("#");
  if (isHash) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function PillButton({
  children,
  variant = "dark",
  size = "md",
  className,
  ...props
}: {
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
} & ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className={cn(BASE, VARIANTS[variant], SIZES[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

const EYEBROW_VARIANTS = {
  pill: "inline-flex h-8 items-center gap-2 rounded-full bg-white/75 px-3.5 text-[13px] text-ink-muted backdrop-blur-md shadow-pill-light",
  plain:
    "inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-ink-faint uppercase",
} as const;

/** Label above a heading: a light pill, or plain uppercase small caps. */
export function Eyebrow({
  children,
  variant = "pill",
  className,
}: {
  children: ReactNode;
  variant?: keyof typeof EYEBROW_VARIANTS;
  className?: string;
}) {
  return (
    <span className={cn(EYEBROW_VARIANTS[variant], className)}>{children}</span>
  );
}

/**
 * The two-tone heading: first line at 500 in ink, second at 400 in muted.
 * Lets a headline state a claim and its qualifier at different volumes
 * without either one competing.
 */
export function TwoTone({
  first,
  second,
  as: Tag = "h2",
  className,
}: {
  first: ReactNode;
  second?: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag className={cn("h2 text-balance", className)}>
      <span className="block font-medium text-ink">{first}</span>
      {second ? (
        <span className="block font-normal text-ink-muted">{second}</span>
      ) : null}
    </Tag>
  );
}

/** Small meta label: section numbers, category tags, fine print. */
export function Meta({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "text-[12px] tracking-[0.02em] text-ink-faint tabular-nums",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Card surface. One definition so the bezel stays consistent. */
export function Card({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  return (
    <Tag className={className}>
      <Bezel innerClassName="p-7">{children}</Bezel>
    </Tag>
  );
}
