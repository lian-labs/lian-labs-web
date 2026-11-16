import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { CountUp } from "@/components/motion/count-up";
import SectionIntro from "./SectionIntro";
import TestimonialStrip from "./TestimonialStrip";
import { COUNTRIES, STATS } from "@/lib/clients";
import { TESTIMONIALS } from "@/lib/testimonials";
import type { Edition } from "@/lib/editions";

/**
 * Where we have worked: the numbers, the countries, and what clients said.
 */
export default function Clients({ reach }: { reach: Edition["reach"] }) {
  return (
    <section id="clients" className="band">
      <div className="wrap">
        <SectionIntro
          meta="Clients worldwide"
          first={reach.first}
          second={reach.second}
        >
          <p>{reach.lead}</p>
        </SectionIntro>

        <Reveal delay={0.1}>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            {COUNTRIES.map((c) => (
              <li
                key={c.code}
                className="inline-flex h-10 items-center gap-2.5 rounded-full bg-white/75 px-4 text-[14.5px] font-medium text-ink shadow-pill-light backdrop-blur-md"
              >
                <Image
                  src={`/flags/rect/${c.code}.svg`}
                  alt=""
                  width={21}
                  height={14}
                  unoptimized
                  className="h-3.5 w-auto rounded-[2px]"
                />
                {c.name}
              </li>
            ))}
          </ul>
        </Reveal>

        <ul className="mx-auto mt-16 grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-y-0">
          {STATS.map((stat, i) => (
            <li
              key={stat.label}
              className="flex flex-col items-center border-l border-hairline px-3 text-center odd:border-l-0 sm:odd:border-l sm:first:border-l-0"
            >
              <p className="text-[clamp(40px,5vw,60px)] leading-none tracking-[-0.04em] text-ink tabular-nums">
                <CountUp
                  value={stat.value}
                  delay={0.15 + i * 0.1}
                  duration={1.8}
                />
                {stat.suffix}
              </p>
              <p className="mt-3 text-[14.5px] leading-snug text-ink-muted sm:text-[16px]">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>

        {TESTIMONIALS.length > 0 ? (
          <Reveal delay={0.15} y={32} className="mt-16">
            <TestimonialStrip reviews={TESTIMONIALS} />
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
