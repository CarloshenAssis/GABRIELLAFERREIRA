import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/content";

export default function AuthorityStrip() {
  return (
    <section className="border-y border-line py-8">
      <Container>
        <Reveal>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center sm:justify-between">
            {site.education.map((item) => (
              <li
                key={item}
                className="text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-600 sm:text-[12px]"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
