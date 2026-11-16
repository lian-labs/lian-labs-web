import Link from "next/link";
import Logo from "./Logo";
import { Meta } from "@/components/visuals/bits";
import {
  COMPANY_GITHUB,
  COMPANY_LINKEDIN,
  CONTACT_EMAIL,
  HQ_LOCATION,
  SITE_NAME,
} from "@/lib/site";
import { PRODUCTS } from "@/lib/products";
import { REGIONS, REGION_META, type Region, regionPath } from "@/lib/regions";

type FooterLink = { label: string; href: string; external?: boolean };

function columns(region: Region): { heading: string; links: FooterLink[] }[] {
  return [
    {
      heading: "Company",
      links: [
        { label: "Services", href: regionPath(region, "/services") },
        { label: "Products", href: "/products" },
        { label: "Clients", href: `${regionPath(region)}#clients` },
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
      heading: "Editions",
      links: [
        ...REGIONS.map((r) => ({
          label: REGION_META[r].label,
          href: regionPath(r),
        })),
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
}

export default function Footer({ region = "world" }: { region?: Region }) {
  return (
    <footer className="pt-10">
      <div className="wrap">
        <div className="grid gap-12 border-t border-hairline py-14 md:grid-cols-[1fr_1.6fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-[14.5px] leading-relaxed text-ink-muted">
              A software company from Addis Ababa building web platforms,
              mobile apps and AI products for Ethiopia and the world.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 block text-[14px] text-ink-muted transition-colors hover:text-ink"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="mt-1 text-[14px] text-ink-faint">{HQ_LOCATION}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns(region).map((col) => (
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
