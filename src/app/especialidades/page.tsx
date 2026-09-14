import type { Metadata } from "next";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/shared/PageHero";
import FinalCTA from "@/components/shared/FinalCTA";
import { CTAButton } from "@/components/ui";
import { specialties } from "@/lib/content";

export const metadata: Metadata = {
  title: "Especialidades",
  description:
    "Metabolismo, emagrecimento, saúde intestinal, composição corporal, performance esportiva e qualidade de vida — áreas de atuação da nutricionista Gabriella Ferreira.",
  alternates: { canonical: "/especialidades" },
};

export default function EspecialidadesPage() {
  return (
    <>
      <PageHero
        eyebrow="Especialidades"
        title="Nutrição personalizada para diferentes momentos e objetivos."
        description="Cada pessoa chega a uma consulta em um momento diferente da vida. As áreas abaixo orientam o ponto de partida — a estratégia é sempre construída caso a caso."
      >
        <Reveal delay={200}>
          <nav aria-label="Índice de especialidades" className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {specialties.map((item) => (
              <a
                key={item.slug}
                href={`#${item.slug}`}
                className="text-[13px] font-medium text-warm-600 underline decoration-line underline-offset-4 transition-colors hover:text-terracotta-2"
              >
                {item.number} {item.title}
              </a>
            ))}
          </nav>
        </Reveal>
      </PageHero>

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="border-t border-line">
            {specialties.map((item) => (
              <Reveal key={item.slug} as="div">
                <div
                  id={item.slug}
                  className="grid scroll-mt-28 grid-cols-1 gap-6 border-b border-line py-12 md:grid-cols-[minmax(0,140px)_1fr] md:gap-12 md:py-16"
                >
                  <span className="font-serif-display text-5xl text-terracotta-2 md:text-6xl">
                    {item.number}
                  </span>
                  <div className="max-w-2xl">
                    <h2 className="font-serif-display text-2xl text-navy sm:text-3xl">
                      {item.title}
                    </h2>
                    <p className="mt-5 text-[15px] leading-relaxed text-warm-600">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div className="mt-14 flex flex-col gap-4 sm:flex-row">
              <CTAButton href="/nutricao-clinica" variant="secondary">
                Conhecer abordagem clínica
              </CTAButton>
              <CTAButton href="/nutricao-esportiva" variant="secondary">
                Conhecer abordagem esportiva
              </CTAButton>
            </div>
          </Reveal>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
