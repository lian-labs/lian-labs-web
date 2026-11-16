import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";
import { TwoTone } from "@/components/ui/pill";
import { cn } from "@/lib/cn";

/**
 * The centred section opener: a small label between two hairlines, the
 * two-tone heading, and an optional muted paragraph.
 */
export default function SectionIntro({
  meta,
  first,
  second,
  children,
  className,
}: {
  meta: string;
  first: ReactNode;
  second?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={cn("mx-auto max-w-4xl text-center", className)}>
      <p className="flex items-center justify-center gap-4 text-[14px] font-medium tracking-wider uppercase text-ink-faint">
        <span aria-hidden className="h-px w-16 bg-ink/10 sm:w-24" />
        {meta}
        <span aria-hidden className="h-px w-16 bg-ink/10 sm:w-24" />
      </p>
      <TwoTone className="mt-4" first={first} second={second} />
      {children ? (
        <div className="mx-auto mt-6 max-w-2xl text-[18px] leading-relaxed text-ink-muted sm:text-[20px]">
          {children}
        </div>
      ) : null}
    </Reveal>
  );
}
