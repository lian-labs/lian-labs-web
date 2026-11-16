import type { ReactNode, SVGProps } from "react";
import { cn } from "@/lib/cn";

/** Oversized opening quotation mark shared by buyer-voice cards. */
export function QuoteMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden viewBox="0 0 33 24" {...props}>
      <path
        fill="currentColor"
        d="M0 24V14.4C0 6.6 4.3 1.8 12.4 0l1.4 3.4C9.5 4.8 7.4 7.6 7.2 11.2H13V24H0Zm19 0V14.4C19 6.6 23.3 1.8 31.4 0l1.4 3.4c-4.3 1.4-6.4 4.2-6.6 7.8H32V24H19Z"
      />
    </svg>
  );
}

/**
 * Three-node horizontal flow. Below `sm` it stacks and the connectors rotate
 * to point down, so the left-to-right reading order survives on a phone.
 */
export function NodeFlow({ nodes }: { nodes: readonly ReactNode[] }) {
  return (
    <ol className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-6">
      {nodes.map((node, i) => (
        <li key={i} className="relative flex flex-col">
          {i < nodes.length - 1 ? (
            <span
              aria-hidden
              className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-[15px] text-ink-faint sm:block"
            >
              →
            </span>
          ) : null}
          {node}
          {i < nodes.length - 1 ? (
            <span
              aria-hidden
              className="my-0.5 text-center text-[15px] text-ink-faint sm:hidden"
            >
              ↓
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

/** Compact chip. Used for fit signals and rate-card inputs. */
export function Tag({
  children,
  tone = "default",
  className,
}: {
  children: ReactNode;
  tone?: "default" | "accent" | "faint";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1.5 text-[13.5px]",
        tone === "default" && "border border-hairline bg-white text-ink-muted",
        tone === "accent" && "border border-hairline bg-bg-tint text-ink",
        tone === "faint" && "bg-white/60 text-ink-faint",
        className,
      )}
    >
      {children}
    </span>
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
