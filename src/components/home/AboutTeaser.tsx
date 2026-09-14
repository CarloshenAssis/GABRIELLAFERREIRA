import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { CTAButton, Eyebrow } from "@/components/ui";
import { site } from "@/lib/content";

export default function AboutTeaser() {
  return (
    <section className="py-24 md:py-32">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal className="relative aspect-[3/4] w-full max-w-[420px] overflow-hidden rounded-[2px] bg-sand lg:max-w-none">
          <Image
            src="/images/gabriella-consultorio-jaleco.png"
            alt="Gabriella Ferreira em seu consultório, em São José dos Campos"
            fill
            sizes="(min-width: 1024px) 38vw, 90vw"
            className="object-cover"
          />
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow>Sobre</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-balance-pretty mt-6 font-serif-display text-[clamp(2rem,3.6vw,3rem)] leading-[1.12] text-navy">
              Ciência, estratégia e uma nutrição que faz sentido para você.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-warm-600">
              Formada pela UNESP, com passagem pela Universidad de Santiago de
              Compostela, Gabriella construiu uma abordagem que une nutrição clínica
              integrativa funcional e nutrição esportiva — sempre a partir da
              individualidade de cada paciente.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <ul className="mt-8 flex flex-col gap-3 border-t border-line pt-8">
              {site.education.map((item) => (
                <li key={item} className="flex items-baseline gap-3 text-sm text-navy">
                  <span className="h-px w-4 shrink-0 bg-terracotta" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-10">
              <CTAButton href="/sobre" variant="secondary">
                Conheça a Gabriella
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
