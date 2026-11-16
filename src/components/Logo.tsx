type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  /** Renders the mark in mono lavender-on-transparent for dark surfaces. */
  inverted?: boolean;
};

export function LogoMark({
  className = "h-8 w-8",
  inverted = false,
}: Pick<LogoProps, "className" | "inverted">) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Lian"
    >
      <rect
        width="100"
        height="100"
        rx="10"
        fill={inverted ? "transparent" : "var(--brand-950)"}
      />
      <path
        d="M17.9 24.6 L55.8 75"
        stroke="var(--brand-100)"
        strokeWidth="22.4"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="80.5" cy="54" r="10.5" fill="var(--brand-100)" />
    </svg>
  );
}

export default function Logo({
  className = "",
  showWordmark = true,
  inverted = false,
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark className="h-7 w-7 shrink-0" inverted={inverted} />
      {showWordmark && (
        <span
          className={`flex flex-col font-(--font-display) ${
            inverted ? "text-white" : "text-ink-plum"
          }`}
        >
          <span className="text-[20px] leading-[0.82] font-semibold tracking-[-0.04em]">
            Lian
          </span>
          <span className="mt-1 self-center text-center text-[8px] leading-none font-light tracking-[0.46em] uppercase">
            Labs
          </span>
        </span>
      )}
    </span>
  );
}
