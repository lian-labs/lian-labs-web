import { TextReveal } from "@/components/motion/text-reveal";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow, PillLink } from "@/components/ui/pill";
import LogoMarquee from "./LogoMarquee";
import { BOOK_CALL_URL, BOOK_CTA_LABEL } from "@/lib/links";
import type { Edition } from "@/lib/editions";
import { type Region, regionPath } from "@/lib/regions";

export default function Hero({
  hero,
  region,
}: {
  hero: Edition["hero"];
  region: Region;
}) {
  return (
    <section className="flex min-h-svh flex-col pt-28 pb-10 sm:pt-36 sm:pb-14">
      <div className="wrap flex flex-1 flex-col justify-between">
        <div className="my-auto py-8 sm:py-12 lg:py-16">
          <div className="w-full text-center">
            <Reveal>
              <Eyebrow>{hero.eyebrow}</Eyebrow>
            </Reveal>

            <h1 className="mx-auto mt-6 max-w-6xl text-center text-[clamp(42px,6.2vw,86px)] leading-[1.04] tracking-[-0.035em] text-balance">
              <TextReveal
                per="word"
                speedReveal={1.1}
                className="font-medium text-ink"
              >
                {hero.first}
              </TextReveal>{" "}
              <TextReveal
                per="word"
                delay={0.2}
                speedReveal={1.1}
                className="font-normal text-ink-muted"
              >
                {hero.second}
              </TextReveal>
            </h1>

            <Reveal
              delay={0.35}
              className="mx-auto mt-6 max-w-4xl sm:mt-8 lg:max-w-5xl"
            >
              <p className="text-[18px] leading-[1.55] text-ink-muted text-balance sm:text-[21px] lg:text-[23px]">
                {hero.lead}
              </p>
            </Reveal>

            <Reveal
              delay={0.45}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row sm:gap-5"
            >
              <PillLink
                href={BOOK_CALL_URL}
                external
                size="lg"
                className="min-w-[240px] justify-between sm:min-w-[260px]"
              >
                {BOOK_CTA_LABEL}
                <span aria-hidden>→</span>
              </PillLink>
              <PillLink
                href={`${regionPath(region)}#products`}
                variant="light"
                size="lg"
                className="min-w-[240px] justify-between sm:min-w-[260px]"
              >
                See our products
                <span aria-hidden>↓</span>
              </PillLink>
            </Reveal>

            <Reveal
              delay={0.55}
              className="mx-auto mt-16 w-full sm:mt-20 lg:mt-24"
            >
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-hairline">
                {hero.metrics.map(({ value, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center px-4 py-2 text-center sm:px-8 lg:px-12"
                  >
                    <span className="text-[34px] font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-[42px] lg:text-[48px]">
                      {value}
                    </span>
                    <span className="mt-2.5 text-[16px] font-medium text-ink-muted sm:text-[18px] lg:text-[19px]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <div className="hero-strip pt-6 sm:pt-10">
          <LogoMarquee />
        </div>
      </div>
    </section>
  );
}
