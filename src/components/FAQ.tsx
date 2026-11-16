import { Reveal } from "@/components/motion/reveal";
import { CONTACT_EMAIL } from "@/lib/links";
import SectionIntro from "./SectionIntro";

export default function FAQ({
  items,
}: {
  items: readonly { question: string; answer: string }[];
}) {
  return (
    <section id="faq" className="band">
      <div className="wrap">
        <SectionIntro meta="FAQ" first="Frequently asked" second="questions.">
          <p>
            If yours is not here, write to{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-ink underline decoration-hairline underline-offset-2 transition-colors hover:decoration-ink"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </SectionIntro>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-3xl border-t border-hairline">
            {items.map((item) => (
              <details
                key={item.question}
                className="group border-b border-hairline"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[17px] font-medium text-ink transition-colors hover:text-brand-700 sm:text-[18.5px] [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span
                    aria-hidden
                    className="shrink-0 text-2xl leading-none text-ink-faint transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-3xl pb-7 text-[16px] leading-relaxed text-ink-muted sm:text-[17px]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
