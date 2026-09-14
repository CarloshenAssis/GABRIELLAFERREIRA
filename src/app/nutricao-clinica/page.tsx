import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/shared/PageHero";
import FAQ from "@/components/shared/FAQ";
import FinalCTA from "@/components/shared/FinalCTA";
import { CTAButton, Eyebrow } from "@/components/ui";
import { faqClinica, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Nutrição Clínica",
  description:
    "Nutrição clínica individualizada em São José dos Campos: metabolismo, emagrecimento, saúde intestinal, composição corporal e qualidade de vida.",
  alternates: { canonical: "/nutricao-clinica" },
};

const clinicalAreas = [
  {
    title: "Metabolismo",
    text: "Compreender como o seu corpo utiliza energia — considerando histórico, rotina e composição corporal — é a base para qualquer estratégia nutricional coerente.",
  },
  {
    title: "Emagrecimento",
    text: "Um processo conduzido com consistência, sem extremismos, construído a partir da sua rotina e do que é possível manter no longo prazo.",
  },
  {
    title: "Saúde intestinal",
    text: "Sinais como desconforto digestivo e irregularidade intestinal são avaliados em contexto, com orientação alimentar individualizada.",
  },
  {
    title: "Composição corporal",
    text: "Acompanhar massa magra e gordura corporal ao longo do tempo, como referência mais completa do que o peso isolado.",
  },
  {
    title: "Relação com a alimentação",
    text: "Construir uma relação mais tranquila com a comida, sem culpa e sem restrições desnecessárias.",
  },
  {
    title: "Rotina e qualidade de vida",
    text: "Estratégias alimentares que sustentam energia e disposição dentro da sua rotina real — não de uma rotina ideal.",
  },
];

export default function NutricaoClinicaPage() {
  return (
    <>
      <PageHero
        eyebrow="Nutrição clínica"
        title="Nutrição clínica para entender o seu corpo e construir estratégias sustentáveis."
        description="A nutrição clínica trabalha as bases: metabolismo, composição corporal, saúde intestinal e a relação com a alimentação — sempre a partir de uma avaliação individual."
      >
        <Reveal delay={200}>
          <div className="mt-10">
            <CTAButton href={site.whatsappLink} external variant="primary">
              Agendar consulta
            </CTAButton>
          </div>
        </Reveal>
      </PageHero>

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid grid-cols-1 gap-x-12 gap-y-12 border-t border-line pt-14 sm:grid-cols-2">
            {clinicalAreas.map((area, i) => (
              <Reveal key={area.title} delay={i * 50} className="border-l-2 border-terracotta/40 pl-6">
                <h2 className="font-serif-display text-xl text-navy sm:text-2xl">{area.title}</h2>
                <p className="mt-3 max-w-[46ch] text-[15px] leading-relaxed text-warm-600">
                  {area.text}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>Individualização</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-balance-pretty mt-6 font-serif-display text-[clamp(1.9rem,3.4vw,2.75rem)] leading-[1.14] text-navy">
                Cada acompanhamento é único — porque cada pessoa é única.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-[48ch] text-[15px] leading-relaxed text-warm-600">
                Não existe plano alimentar padrão. A estratégia nutricional é
                construída a partir da sua avaliação, do seu histórico e da sua
                rotina — nunca de um modelo genérico aplicado a todos os pacientes.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-9">
                <CTAButton href="/acompanhamento" variant="secondary">
                  Conheça o acompanhamento
                </CTAButton>
              </div>
            </Reveal>
          </div>
          <Reveal className="relative aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[2px] bg-sand lg:ml-auto lg:max-w-none">
            <Image
              src="/images/gabriella-consultorio-jaleco.png"
              alt="Gabriella Ferreira em atendimento clínico"
              fill
              sizes="(min-width: 1024px) 42vw, 90vw"
              className="object-cover"
            />
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Perguntas frequentes</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-balance-pretty mt-6 font-serif-display text-[clamp(1.9rem,3.4vw,2.75rem)] leading-[1.14] text-navy">
                Dúvidas sobre nutrição clínica.
              </h2>
            </Reveal>
          </div>
          <div className="mt-14 max-w-3xl">
            <FAQ items={faqClinica} />
          </div>
        </Container>
      </section>

      <FinalCTA title="Entenda o seu corpo e construa uma estratégia que faça sentido para você." />
    </>
  );
}
