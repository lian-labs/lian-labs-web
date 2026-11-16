import { Reveal } from "@/components/motion/reveal";
import { PanelTag } from "@/components/ui/panel";
import SectionIntro from "./SectionIntro";
import type { Edition } from "@/lib/editions";

/** How a project runs, as four numbered steps on a hairline timeline. */
export default function Process({ steps }: { steps: Edition["process"] }) {
  return (
    <section id="process" className="band">
      <div className="wrap">
        <SectionIntro
          meta="How we work"
          first="From first call"
          second="to a product in production."
        />
        <ol className="mt-14 grid grid-cols-1 border-t border-hairline sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal
              key={step.title}
              as="li"
              delay={i * 0.08}
              className="border-b border-hairline py-8 sm:px-6 lg:border-b-0 lg:border-l lg:first:border-l-0 lg:first:pl-0"
            >
              <div className="flex flex-wrap items-center gap-2">
                <PanelTag>Step 0{i + 1}</PanelTag>
                <span className="rounded-md bg-brand-50 px-2 py-1 text-[12px] leading-none font-medium text-brand-700">
                  {step.when}
                </span>
              </div>
              <h3 className="mt-5 text-display-3 font-medium text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-[16px] leading-relaxed text-ink-muted sm:text-[17px]">
                {step.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
