import type { Metadata } from "next";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/shared/PageHero";
import FAQ from "@/components/shared/FAQ";
import FinalCTA from "@/components/shared/FinalCTA";
import { Eyebrow } from "@/components/ui";
import { acompanhamentoInclui, faqAcompanhamento, processSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Acompanhamento",
  description:
    "Entenda como funciona o acompanhamento nutricional com Gabriella Ferreira: entendimento, avaliação, planejamento e acompanhamento contínuo.",
  alternates: { canonical: "/acompanhamento" },
};

export default function AcompanhamentoPage() {
  return (
    <>
      <PageHero
        eyebrow="Acompanhamento"
        title="Um acompanhamento pensado para a sua realidade."
        description="Antes de qualquer plano alimentar, existe um processo de escuta e avaliação. É esse processo que garante que a estratégia realmente faça sentido para você."
      />

      <section className="pb-20 md:pb-28">
        <Container>
          <ol className="grid grid-cols-1 gap-x-10 gap-y-14 border-t border-line pt-14 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} as="li" delay={i * 80}>
                <span className="font-serif-display text-4xl text-terracotta">{step.number}</span>
                <h2 className="mt-4 font-serif-display text-xl text-navy">{step.title}</h2>
                <p className="mt-3 max-w-[30ch] text-sm leading-relaxed text-warm-600">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-sand/60 py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>O que está incluído</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-balance-pretty mt-6 font-serif-display text-[clamp(1.9rem,3.4vw,2.75rem)] leading-[1.14] text-navy">
                O que faz parte do acompanhamento.
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2">
            {acompanhamentoInclui.map((item, i) => (
              <Reveal key={item.title} delay={i * 50} className="border-t border-line pt-6">
                <h3 className="font-serif-display text-lg text-navy">{item.title}</h3>
                <p className="mt-2 max-w-[46ch] text-sm leading-relaxed text-warm-600">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Perguntas frequentes</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-balance-pretty mt-6 font-serif-display text-[clamp(1.9rem,3.4vw,2.75rem)] leading-[1.14] text-navy">
                Dúvidas comuns sobre o acompanhamento.
              </h2>
            </Reveal>
          </div>
          <div className="mt-14 max-w-3xl">
            <FAQ items={faqAcompanhamento} />
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
