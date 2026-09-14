import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/shared/FAQ";
import FinalCTA from "@/components/shared/FinalCTA";
import { CTAButton, Eyebrow } from "@/components/ui";
import { faqEsportiva, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Nutrição Esportiva",
  description:
    "Nutrição esportiva em São José dos Campos: estratégia alimentar para treino, recuperação e rotina de quem pratica esporte com regularidade.",
  alternates: { canonical: "/nutricao-esportiva" },
};

const esportivaTopics = [
  { title: "Nutrição esportiva", text: "Estratégia alimentar aplicada à prática esportiva, do início da rotina de treinos à competição." },
  { title: "Composição corporal", text: "Acompanhamento de massa muscular e gordura corporal como referência para ajustes de performance." },
  { title: "Performance", text: "Energia disponível, recuperação e consistência como pilares da evolução no esporte." },
  { title: "Estratégia alimentar", text: "Timing de refeições, hidratação e ajustes conforme volume e intensidade de treino." },
  { title: "Rotina esportiva", text: "Um plano que respeita horários de treino, competições e a vida fora do esporte." },
  { title: "Consistência", text: "Resultados no esporte também dependem de hábitos alimentares sustentados ao longo do tempo." },
];

export default function NutricaoEsportivaPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-8 pb-16 sm:pt-12 md:pb-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div className="order-2 lg:order-1">
            <Reveal>
              <Eyebrow>Nutrição esportiva</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-balance-pretty mt-6 font-serif-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.06] text-navy">
                Performance começa muito antes do treino.
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="text-balance-pretty mt-6 max-w-[48ch] text-[17px] leading-relaxed text-warm-600">
                Energia para treinar, recuperação muscular e consistência ao longo
                das semanas dependem de uma estratégia alimentar construída para a
                sua rotina esportiva.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-9 flex flex-wrap gap-4">
                <CTAButton href={site.whatsappLink} external variant="primary">
                  Agendar consulta
                </CTAButton>
                <CTAButton href="#topicos" variant="secondary">
                  Ver abordagem
                </CTAButton>
              </div>
            </Reveal>
          </div>

          <Reveal className="order-1 relative aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-[2px] bg-sand lg:order-2 lg:ml-auto lg:max-w-none">
            <Image
              src="/images/gabriella-corrida-run-series.png"
              alt="Gabriella Ferreira correndo em prova de rua"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
            <span className="absolute bottom-5 left-5 rounded-full bg-terracotta px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-ivory">
              Nutricionista e atleta
            </span>
          </Reveal>
        </Container>
      </section>

      <section id="topicos" className="scroll-mt-24 border-t border-line py-20 md:py-28">
        <Container>
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow>Nutrição para quem leva o esporte a sério</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-balance-pretty mt-6 font-serif-display text-[clamp(1.9rem,3.4vw,2.75rem)] leading-[1.14] text-navy">
                Estratégia alimentar aplicada ao treino e à recuperação.
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
            {esportivaTopics.map((topic, i) => (
              <Reveal
                key={topic.title}
                delay={i * 50}
                className="border-t border-line py-8"
              >
                <span className="font-serif-display text-3xl text-terracotta">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-serif-display text-lg text-navy">{topic.title}</h3>
                <p className="mt-2 max-w-[32ch] text-sm leading-relaxed text-warm-600">
                  {topic.text}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-20 text-ivory md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-terracotta">
                Também sou atleta
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-balance-pretty mt-6 font-serif-display text-[clamp(1.75rem,3.6vw,2.5rem)] italic leading-[1.2]">
                Corro provas de rua e entendo, na prática, o que é sustentar uma
                rotina de treino.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-ivory/65">
                Essa vivência não substitui a técnica, mas aproxima a orientação da
                realidade de quem treina — os imprevistos, o cansaço e a
                importância de um plano possível de seguir.
              </p>
            </Reveal>
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
                Dúvidas sobre nutrição esportiva.
              </h2>
            </Reveal>
          </div>
          <div className="mt-14 max-w-3xl">
            <FAQ items={faqEsportiva} />
          </div>
        </Container>
      </section>

      <FinalCTA title="Leve sua performance a sério — comece pela estratégia alimentar." />
    </>
  );
}
