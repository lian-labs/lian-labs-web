import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Bezel } from "@/components/ui/bezel";
import { PanelTag } from "@/components/ui/panel";
import SectionIntro from "./SectionIntro";
import type { Edition } from "@/lib/editions";

/** The six service lines as a card grid. Used on the homepage and /services. */
export default function Services({
  services,
  showLink = true,
}: {
  services: Edition["services"];
  showLink?: boolean;
}) {
  return (
    <section id="services" className="band">
      <div className="wrap">
        <SectionIntro
          meta={services.meta}
          first={services.first}
          second={services.second}
        >
          <p>{services.lead}</p>
        </SectionIntro>

        <ul className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, i) => (
            <Reveal key={item.title} as="li" delay={(i % 3) * 0.08}>
              <Bezel
                className="h-full"
                innerClassName="flex h-full flex-col p-6 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <PanelTag>{item.tag}</PanelTag>
                  <span className="text-[12px] text-ink-faint tabular-nums">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-[clamp(21px,1.9vw,25px)] leading-snug font-medium tracking-[-0.015em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-[16px] leading-relaxed text-ink-muted sm:text-[17px]">
                  {item.body}
                </p>
                <ul className="mt-auto flex flex-col gap-2 pt-7">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 text-[14.5px] text-ink"
                    >
                      <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-50 text-[9px] text-brand-700">
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </Bezel>
            </Reveal>
          ))}
        </ul>

        {showLink ? (
          <Reveal delay={0.2}>
            <p className="mt-12 text-center text-[15.5px]">
              <Link
                href="/services"
                className="font-medium text-ink-muted underline decoration-hairline underline-offset-2 transition-colors hover:text-ink"
              >
                See how we deliver each service →
              </Link>
            </p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
