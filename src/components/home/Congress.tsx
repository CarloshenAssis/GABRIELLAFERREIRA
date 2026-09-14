import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";

export default function Congress() {
  return (
    <section className="py-24 md:py-32">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <Reveal>
            <Eyebrow>Atualização constante</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-balance-pretty mt-6 font-serif-display text-[clamp(2rem,3.6vw,3rem)] leading-[1.12] text-navy">
              Conhecimento em constante evolução.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-[48ch] text-[15px] leading-relaxed text-warm-600">
              A nutrição é uma ciência em movimento. Participar de congressos e
              atualizações científicas é parte da prática — para que cada
              acompanhamento reflita o que há de mais atual, sem modismos.
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
  );
}
