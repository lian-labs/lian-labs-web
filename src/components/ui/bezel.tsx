import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/*
 * The frame around every card surface: a thick, frosted off-white bezel
 * (semi-transparent and blurred, so the grain wave or sky shows through), a
 * bright top edge, a hairline ring and a soft drop, around a white inner card.
 */

const SIZES = {
  lg: {
    pad: "p-2 sm:p-3 lg:p-3.5",
    outer: "rounded-[22px] sm:rounded-[30px]",
    inner: "rounded-[14px] sm:rounded-[18px]",
  },
  md: {
    pad: "p-2 sm:p-2.5",
    outer: "rounded-[20px] sm:rounded-[24px]",
    inner: "rounded-[13px] sm:rounded-[15px]",
  },
  sm: { pad: "p-1.5", outer: "rounded-[16px]", inner: "rounded-[11px]" },
} as const;

export function Bezel({
  children,
  className,
  innerClassName,
  size = "md",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  size?: keyof typeof SIZES;
  as?: "div" | "li" | "article";
}) {
  const s = SIZES[size];
  return (
    <Tag
      className={cn(
        "relative bg-white/55 backdrop-blur-xl",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(255,255,255,0.5),0_0_0_1px_rgba(15,23,42,0.07)]",
        s.pad,
        s.outer,
        className,
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-white shadow-[0_0_0_1px_rgba(15,23,42,0.08)]",
          s.inner,
          innerClassName,
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
