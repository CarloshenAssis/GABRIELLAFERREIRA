import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/content";

export default function AuthorityNumber() {
  return (
    <section className="border-y border-line py-24 md:py-32">
      <Container className="text-center">
        <Reveal>
          <p className="font-serif-display text-[clamp(4rem,14vw,9.5rem)] leading-none text-navy">
            +{site.livesAccompanied}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-4 max-w-xs text-sm uppercase tracking-[0.2em] text-warm-600">
            vidas acompanhadas
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
