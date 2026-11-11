import { Container } from "@/components/ui";
import { sections } from "@/lib/landing";

/** Sticky "on this page" bar that jumps to each section. */
export function SectionNav() {
  return (
    <nav aria-label="On this page" className="sticky top-[4.5rem] z-30 border-b border-line bg-white/90 backdrop-blur">
      <Container>
        <ul className="no-scrollbar flex gap-1 overflow-x-auto py-2 text-sm">
          {sections.map((s) => (
            <li key={s.id} className="shrink-0">
              <a href={`#${s.id}`} className="block rounded-lg px-3 py-1.5 text-text-2 hover:bg-muted hover:text-text">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
