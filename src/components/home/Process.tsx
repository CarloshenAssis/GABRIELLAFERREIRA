import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { CTAButton, Eyebrow } from "@/components/ui";
import { processSteps } from "@/lib/content";

export default function Process() {
  return (
    <section className="bg-sand/60 py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Como funciona</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-balance-pretty mt-6 font-serif-display text-[clamp(2rem,3.6vw,3rem)] leading-[1.12] text-navy">
              Do entendimento ao acompanhamento.
            </h2>
          </Reveal>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} as="li" delay={i * 80} className="relative pl-0">
              <span className="font-serif-display text-4xl text-terracotta">{step.number}</span>
              <h3 className="mt-4 font-serif-display text-xl text-navy">{step.title}</h3>
              <p className="mt-3 max-w-[30ch] text-sm leading-relaxed text-warm-600">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <div className="mt-14">
            <CTAButton href="/acompanhamento" variant="ghost">
              Conheça o acompanhamento
            </CTAButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
