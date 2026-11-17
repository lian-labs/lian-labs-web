import Image from "next/image";
import { Meta } from "@/components/visuals/bits";
import { cn } from "@/lib/cn";

/*
 * Companies Lian has delivered for. Marks are cropped from the supplied logos
 * with the white ground removed; the name is set as text beside each one, so
 * it stays legible at strip size. Add a client by dropping its mark in
 * public/pics/clients and adding a row here.
 */
const CLIENTS = [
  {
    name: "Initium Future Technologies",
    logo: "/pics/clients/initium.png",
    width: 162,
    height: 136,
  },
  {
    name: "Amplitude Ventures",
    logo: "/pics/clients/amplitude.png",
    width: 170,
    height: 142,
  },
  {
    name: "Softylus Studio",
    logo: "/pics/clients/softylus.png",
    width: 140,
    height: 140,
    // A round mark has no baseline to sit the name on.
    center: true,
  },
  // A wordmark only, with no symbol, so the name stands on its own.
  { name: "Arkaya Venture" },
  { name: "Impakt" },
] as {
  name: string;
  logo?: string;
  width?: number;
  height?: number;
  center?: boolean;
}[];

/* Enough repeats that one half of the track is wider than the strip, so the
   loop never shows a gap however few clients there are. */
const PER_HALF = 6;
const HALF = Array.from(
  { length: Math.ceil(PER_HALF / CLIENTS.length) },
  () => CLIENTS,
).flat();

function Half({ hidden }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden} className="flex shrink-0 items-center">
      {HALF.map((client, i) => (
        <li
          key={`${client.name}-${i}`}
          // Only the first pass is announced; the repeats exist for the loop.
          aria-hidden={hidden || i >= CLIENTS.length ? true : undefined}
          className={cn(
            "flex h-10 gap-3.5 px-10 grayscale-[0.85] opacity-80 transition-[filter,opacity] duration-300 hover:opacity-100 hover:grayscale-0",
            client.center ? "items-center" : "items-end",
          )}
        >
          {client.logo ? (
            <Image
              src={client.logo}
              alt=""
              width={client.width}
              height={client.height}
              className="h-10 w-auto"
            />
          ) : null}
          <span
            className={cn(
              "leading-none whitespace-nowrap text-ink-muted",
              client.logo
                ? "text-[19px] font-medium"
                : "text-[25px] font-semibold tracking-[-0.02em]",
            )}
          >
            {client.name}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function LogoMarquee() {
  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-10">
      <p className="shrink-0">
        <Meta className="text-[16px]">Teams we&apos;ve built for</Meta>
      </p>
      <div
        className="w-full min-w-0 flex-1 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="marquee flex w-max">
          <Half />
          <Half hidden />
        </div>
      </div>
    </div>
  );
}
