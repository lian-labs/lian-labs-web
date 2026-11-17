"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { BOOK_CALL_URL, BOOK_CTA_LABEL } from "@/lib/links";
import { cn } from "@/lib/cn";
const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Clients", href: "/#clients" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/**
 * Three floating pieces on a transparent bar rather than one full-width bar:
 * the logo on the left gutter, the nav in a frosted capsule centred over the
 * page, and the call CTA on the right. The capsule is what reads as "header",
 * so it alone firms up on scroll.
 *
 * The mobile disclosure closes on route change and on Escape, and locks body
 * scroll while open.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  const capsule = cn(
    "transition-[background-color,box-shadow] duration-300",
    scrolled || open
      ? "bg-white/75 shadow-[0_0_0_1px_rgba(12,10,46,0.06)] backdrop-blur-xl"
      : "bg-white/45 shadow-[0_0_0_1px_rgba(12,10,46,0.04)] backdrop-blur-md",
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
      <div className="wrap grid grid-cols-[auto_1fr] items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          aria-label="Lian Labs home"
          onClick={() => setOpen(false)}
          className="flex h-13 shrink-0 items-center"
        >
          <Logo />
        </Link>

        <nav
          aria-label="Main"
          className={cn(
            "hidden h-13 sm:h-14 items-center gap-1 justify-self-center rounded-full px-3 lg:flex",
            capsule,
          )}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-[15px] font-medium whitespace-nowrap text-ink-muted transition-colors hover:bg-ink/[0.05] hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <a
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics="consultation_click"
            className={cn(
              "hidden h-13 sm:h-14 items-center rounded-full px-6 text-[15px] sm:text-[15.5px] font-semibold whitespace-nowrap text-ink hover:bg-white/90 sm:inline-flex",
              capsule,
            )}
          >
            {BOOK_CTA_LABEL}
          </a>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "flex size-13 items-center justify-center rounded-full text-ink lg:hidden",
              capsule,
            )}
          >
            <span className="relative block h-3 w-4">
              <span
                className={cn(
                  "absolute left-0 block h-[1.5px] w-full rounded-full bg-current transition-transform duration-300",
                  open ? "top-1.5 rotate-45" : "top-0.5",
                )}
              />
              <span
                className={cn(
                  "absolute top-1.5 left-0 block h-[1.5px] w-full rounded-full bg-current transition-opacity duration-200",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-[1.5px] w-full rounded-full bg-current transition-transform duration-300",
                  open ? "top-1.5 -rotate-45" : "top-2.5",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className={cn(
          "wrap mt-3 lg:hidden",
          open ? "opacity-100" : "opacity-0",
        )}
      >
        <nav
          aria-label="Mobile"
          className={cn("flex flex-col rounded-3xl p-3", capsule)}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-5 py-3.5 text-[16px] font-medium text-ink-muted transition-colors hover:bg-ink/[0.05] hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics="consultation_click"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center rounded-full bg-ink px-6 py-4 text-[16px] font-semibold text-white shadow-pill"
          >
            {BOOK_CTA_LABEL}
          </a>
        </nav>
      </div>
    </header>
  );
}
