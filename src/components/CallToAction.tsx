import { Reveal } from "@/components/motion/reveal";
import { PillLink } from "@/components/ui/pill";
import { Bezel } from "@/components/ui/bezel";
import { BOOK_CALL_URL, BOOK_CTA_LABEL, CONTACT_EMAIL } from "@/lib/links";
import type { Edition } from "@/lib/editions";

export default function CallToAction({ cta }: { cta: Edition["cta"] }) {
  return (
    <section className="band">
      <div className="wrap">
        <Reveal>
          <Bezel
            size="lg"
            innerClassName="px-7 py-16 text-center sm:px-12 sm:py-24"
          >
            <h2 className="text-display-2 mx-auto max-w-4xl text-balance">
              <span className="block font-medium text-ink">{cta.first}</span>
              <span className="block font-normal text-ink-muted">
                {cta.second}
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-relaxed text-ink-muted sm:text-[21px]">
              {cta.lead}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <PillLink
                href={BOOK_CALL_URL}
                size="lg"
                external
                className="min-w-56 justify-between!"
              >
                {BOOK_CTA_LABEL}
                <span aria-hidden>→</span>
              </PillLink>
              <PillLink
                href={`mailto:${CONTACT_EMAIL}`}
                size="lg"
                variant="light"
                external
                className="min-w-56"
              >
                {CONTACT_EMAIL}
              </PillLink>
            </div>

            <p className="mx-auto mt-7 max-w-lg text-[14px] leading-relaxed text-ink-faint sm:text-[15px]">
              {cta.fine}
            </p>
          </Bezel>
        </Reveal>
      </div>
    </section>
  );
}
