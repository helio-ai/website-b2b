/* eslint-disable @next/next/no-img-element */
import { Container } from "@/components/ui";
import { customerLogos } from "@/lib/yourlio";

/** Scrolling row of customer logos, muted until hovered. */
export function Logos() {
  return (
    <section className="bg-surface py-14">
      <Container>
        <p className="mb-8 text-center text-sm font-medium text-text-2">Brands that run their customer conversations on YourLio</p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <ul className="animate-marquee flex w-max items-center gap-14 py-2 hover:[animation-play-state:paused] sm:gap-20" aria-label="YourLio customers">
            {[...customerLogos, ...customerLogos].map((l, i) => (
              <li key={i} aria-hidden={i >= customerLogos.length} className="group flex h-12 shrink-0 items-center">
                <img
                  src={l.src}
                  alt={i < customerLogos.length ? `${l.name} logo` : ""}
                  width={l.width}
                  height={l.height}
                  loading="lazy"
                  decoding="async"
                  style={{ width: l.width, height: l.height }}
                  className="object-contain opacity-60 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
