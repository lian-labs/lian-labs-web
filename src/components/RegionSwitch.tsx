"use client";

import Image from "next/image";
import Link from "next/link";
import { REGIONS, REGION_META, type Region, regionPath } from "@/lib/regions";
import { cn } from "@/lib/cn";

/** Two-way segmented switch between the global and the Ethiopia edition. */
export default function RegionSwitch({
  region,
  className,
  onNavigate,
}: {
  region: Region;
  className?: string;
  onNavigate?: () => void;
}) {
  return (
    <div
      role="group"
      aria-label="Choose site edition"
      className={cn("h-13 items-center gap-1 rounded-full p-1.5 sm:h-14", className)}
    >
      {REGIONS.map((r) => {
        const meta = REGION_META[r];
        const active = r === region;
        return (
          <Link
            key={r}
            href={regionPath(r)}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex h-full items-center gap-1.5 rounded-full px-3.5 text-[14px] font-medium whitespace-nowrap transition-colors",
              active
                ? "bg-ink text-white shadow-pill"
                : "text-ink-muted hover:bg-ink/[0.05] hover:text-ink",
            )}
          >
            {meta.flag ? (
              <Image
                src={meta.flag}
                alt=""
                width={18}
                height={12}
                unoptimized
                className="h-3 w-auto rounded-[2px]"
              />
            ) : (
              <GlobeIcon />
            )}
            {meta.label}
          </Link>
        );
      })}
    </div>
  );
}

function GlobeIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="size-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
    </svg>
  );
}
