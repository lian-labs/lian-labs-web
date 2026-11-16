import { Reveal } from "@/components/motion/reveal";
import { Bezel } from "@/components/ui/bezel";
import SectionIntro from "./SectionIntro";
import type { Edition } from "@/lib/editions";

export default function WhyUs({ why }: { why: Edition["why"] }) {
  return (
    <section id="why" className="band">
      <div className="wrap">
        <SectionIntro
          meta="Why Lian Labs"
          first="A partner, not a vendor."
          second="Here is what that means."
        />
        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {why.map((item, i) => (
            <Reveal key={item.title} as="li" delay={i * 0.06}>
              <Bezel className="h-full" innerClassName="h-full p-6 sm:p-7">
                <span className="flex size-9 items-center justify-center rounded-full bg-brand-950 text-[13px] font-semibold text-brand-100 tabular-nums">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-[20px] leading-snug font-medium tracking-[-0.015em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-[16px] leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </Bezel>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
