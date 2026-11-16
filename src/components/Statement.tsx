import { ScrollFill } from "@/components/motion/scroll-fill";

/** A band holding one scroll-filled sentence: a claim big enough to stand
 *  between two sections on its own. */
export default function Statement({ children }: { children: string }) {
  return (
    <section className="py-40 sm:py-56 lg:py-64">
      <div className="wrap">
        <ScrollFill className="mx-auto text-center text-display-1 font-medium text-ink">
          {children}
        </ScrollFill>
      </div>
    </section>
  );
}
