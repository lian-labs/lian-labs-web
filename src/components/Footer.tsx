import Link from "next/link";
import Logo from "./Logo";
import { Meta } from "@/components/visuals/bits";
import {
  COMPANY_GITHUB,
  COMPANY_LINKEDIN,
  CONTACT_EMAIL,
  OFFICE,
  OFFICE_ADDRESS,
  SITE_NAME,
} from "@/lib/site";
import { PRODUCTS } from "@/lib/products";

type FooterLink = { label: string; href: string; external?: boolean };

const COLUMNS: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "Company",
    links: [
      { label: "Services", href: "/services" },
      { label: "Products", href: "/products" },
      { label: "Clients", href: "/#clients" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Products",
    links: PRODUCTS.map((p) => ({
      label: p.name,
      href: `/products/${p.slug}`,
    })),
  },
  {
    heading: "Follow",
    links: [
      { label: "LinkedIn", href: COMPANY_LINKEDIN, external: true },
      { label: "GitHub", href: COMPANY_GITHUB, external: true },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="pt-10">
      <div className="wrap">
        <div className="grid gap-12 border-t border-hairline py-14 md:grid-cols-[1fr_1.6fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-[14.5px] leading-relaxed text-ink-muted">
              A software company from Addis Ababa building web platforms, mobile
              apps and AI products for Ethiopia and the world.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 block text-[14px] text-ink-muted transition-colors hover:text-ink"
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={OFFICE.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block max-w-xs text-[14px] leading-relaxed text-ink-faint transition-colors hover:text-ink"
            >
              {OFFICE_ADDRESS}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <Meta>{col.heading}</Meta>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[14px] text-ink transition-colors hover:text-ink-muted"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-[14px] text-ink transition-colors hover:text-ink-muted"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-2 border-t border-hairline py-6 sm:flex-row">
          <Meta>
            © {new Date().getFullYear()} {SITE_NAME}
          </Meta>
          <Meta>Built in Ethiopia, for the world.</Meta>
        </div>
      </div>
    </footer>
  );
}
