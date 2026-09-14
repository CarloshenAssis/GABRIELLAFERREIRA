import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { CTAButton, Eyebrow } from "@/components/ui";

export default function AthleteStory() {
  return (
    <section className="py-24 md:py-32">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div className="order-2 lg:order-1">
          <Reveal>
            <Eyebrow>Também é rotina</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-balance-pretty mt-6 font-serif-display text-[clamp(2rem,3.6vw,3rem)] leading-[1.12] text-navy">
              Mãe. Atleta. Nutricionista.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-[50ch] text-[15px] leading-relaxed text-warm-600">
              Conciliar treinos, rotina familiar e trabalho faz parte da vida de
              Gabriella tanto quanto da vida de muitas pacientes. Correr provas de
              rua é também uma forma de viver, na prática, os mesmos desafios de
              consistência e adaptação que orientam cada acompanhamento.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 max-w-[50ch] text-[15px] leading-relaxed text-warm-600">
              Essa vivência aproxima a orientação profissional da rotina real —
              longe de fórmulas genéricas e perto do que de fato é possível manter.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-9">
              <CTAButton href="/nutricao-esportiva" variant="ghost">
                Conheça a nutrição esportiva
              </CTAButton>
            </div>
          </Reveal>
        </div>

        <Reveal
          className="order-1 relative aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[2px] bg-sand lg:order-2 lg:ml-auto lg:max-w-none"
        >
          <Image
            src="/images/gabriella-corrida-run-series.png"
            alt="Gabriella Ferreira correndo em prova de rua, a Run Series"
            fill
            sizes="(min-width: 1024px) 42vw, 90vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
