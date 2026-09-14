import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

export default function Manifesto() {
  return (
    <section className="bg-navy py-24 text-ivory md:py-36">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-terracotta-light">
              Manifesto
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-balance-pretty mt-6 font-serif-display text-[clamp(2rem,4.6vw,3.25rem)] italic leading-[1.15]">
              Existe uma forma diferente de viver a nutrição.
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <div className="mx-auto mt-12 flex max-w-xl flex-col gap-3 font-serif-display text-xl text-ivory/80 sm:text-2xl">
              <p>Sem extremismo.</p>
              <p>Sem terrorismo alimentar.</p>
              <p>Sem protocolos genéricos.</p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mx-auto mt-12 h-px w-16 bg-ivory/25" />
            <p className="mx-auto mt-12 max-w-xl text-[17px] leading-relaxed text-ivory/65">
              A nutrição é ciência, mas também é escuta, estratégia e respeito.
            </p>
            <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-ivory/65">
              Cada corpo tem uma história. Cada fase exige uma abordagem.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
