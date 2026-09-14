import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/shared/PageHero";
import FinalCTA from "@/components/shared/FinalCTA";
import { CTAButton, Eyebrow, Stat } from "@/components/ui";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sobre Gabriella Ferreira",
  description:
    "Conheça a trajetória, formação e filosofia de trabalho de Gabriella Ferreira Schmalh, nutricionista clínica e esportiva em São José dos Campos.",
  alternates: { canonical: "/sobre" },
};

const philosophyPoints = [
  {
    title: "Ciência",
    text: "Cada orientação é construída a partir de conhecimento técnico atualizado — sem modismos.",
  },
  {
    title: "Individualidade",
    text: "Nenhum corpo, rotina ou objetivo é igual ao outro. A estratégia parte disso.",
  },
  {
    title: "Rotina",
    text: "Um plano só funciona se couber na vida real de quem vai segui-lo.",
  },
  {
    title: "Estratégia",
    text: "Decisões nutricionais com propósito claro, não regras soltas.",
  },
  {
    title: "Consistência",
    text: "Resultados sustentáveis vêm de hábitos possíveis de manter — não de perfeição.",
  },
  {
    title: "Relação saudável com a alimentação",
    text: "Sem culpa, sem medo, sem terrorismo alimentar.",
  },
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre"
        title="Conheça Gabriella Ferreira"
        description="Nutricionista clínica e esportiva, com uma abordagem construída sobre ciência, escuta e estratégia."
      />

      <section className="pb-24 md:pb-32">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal className="relative aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[2px] bg-sand lg:max-w-none">
            <Image
              src="/images/gabriella-retrato.png"
              alt="Retrato de Gabriella Ferreira Schmalh"
              fill
              sizes="(min-width: 1024px) 38vw, 90vw"
              className="object-cover"
            />
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow>A profissional por trás da consulta</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-balance-pretty mt-6 font-serif-display text-[clamp(1.9rem,3.4vw,2.75rem)] leading-[1.14] text-navy">
                Uma trajetória construída entre a ciência da nutrição e a rotina real de quem é atendida.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-[54ch] text-[15px] leading-relaxed text-warm-600">
                Gabriella Ferreira Schmalh é nutricionista formada pela UNESP, com
                passagem pela Universidad de Santiago de Compostela. Ao longo da
                carreira, construiu uma abordagem que une nutrição clínica
                integrativa funcional e nutrição esportiva, acompanhando pacientes
                em São José dos Campos e online.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 max-w-[54ch] text-[15px] leading-relaxed text-warm-600">
                Já são mais de {site.livesAccompanied} vidas acompanhadas — cada
                uma com uma história, uma rotina e um objetivo diferente. É essa
                individualidade que orienta cada consulta.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-10 border-t border-line pt-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-600">
                  Formação
                </p>
                <ul className="mt-5 flex flex-col gap-3">
                  {site.education.map((item) => (
                    <li key={item} className="flex items-baseline gap-3 text-[15px] text-navy">
                      <span className="h-px w-4 shrink-0 bg-terracotta" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-24 text-ivory md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-terracotta-light">
                Filosofia
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-balance-pretty mt-6 font-serif-display text-[clamp(1.9rem,4vw,3rem)] italic leading-[1.18]">
                &ldquo;Nutrição não é sobre seguir regras. É sobre entender o que
                funciona para você.&rdquo;
              </h2>
            </Reveal>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {philosophyPoints.map((point, i) => (
              <Reveal key={point.title} delay={i * 60} className="border-t border-ivory/15 pt-6">
                <h3 className="font-serif-display text-lg text-ivory">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/60">{point.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-10 border-y border-line py-14 sm:grid-cols-3">
            <Reveal>
              <Stat value={`+${site.livesAccompanied}`} label="vidas acompanhadas" />
            </Reveal>
            <Reveal delay={80}>
              <Stat value={site.crn} label="registro profissional" />
            </Reveal>
            <Reveal delay={160}>
              <Stat value="SJC + online" label="modalidades de atendimento" />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>Atualização</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-balance-pretty mt-6 font-serif-display text-[clamp(1.9rem,3.4vw,2.75rem)] leading-[1.14] text-navy">
                Atualização científica como parte da prática.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-[50ch] text-[15px] leading-relaxed text-warm-600">
                Participar de congressos e formações continuadas, como o Congresso
                Internacional de Nutrição Funcional, garante que o acompanhamento
                oferecido reflita o conhecimento mais atual da área — sem abrir mão
                de critério técnico.
              </p>
            </Reveal>
          </div>
          <Reveal className="relative aspect-[4/3] w-full overflow-hidden rounded-[2px] bg-sand">
            <Image
              src="/images/gabriella-congresso-nutricao-funcional.png"
              alt="Gabriella Ferreira no Congresso Internacional de Nutrição Funcional"
              fill
              sizes="(min-width: 1024px) 48vw, 90vw"
              className="object-cover"
            />
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="relative aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[2px] bg-sand lg:max-w-none">
            <Image
              src="/images/gabriella-corrida-run-series.png"
              alt="Gabriella Ferreira correndo em prova de rua"
              fill
              sizes="(min-width: 1024px) 42vw, 90vw"
              className="object-cover"
            />
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>Mãe, atleta e profissional</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-balance-pretty mt-6 font-serif-display text-[clamp(1.9rem,3.4vw,2.75rem)] leading-[1.14] text-navy">
                A mesma rotina que orienta quem atende.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-[50ch] text-[15px] leading-relaxed text-warm-600">
                Entre a rotina familiar, os treinos e o consultório, Gabriella
                vivencia na prática os mesmos desafios de consistência que orientam
                cada acompanhamento — o que aproxima a orientação profissional da
                realidade de quem é atendido.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-9">
                <CTAButton href="/acompanhamento" variant="secondary">
                  Conheça uma abordagem diferente
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
