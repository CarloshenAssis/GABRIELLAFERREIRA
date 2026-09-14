import Image from "next/image";
import { CTAButton, Eyebrow } from "@/components/ui";
import Container from "@/components/Container";
import { site } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 sm:pt-12 md:pb-28 lg:pb-32">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-16">
        <div className="order-2 lg:order-1">
          <Eyebrow>Nutrição clínica e esportiva</Eyebrow>
          <h1 className="text-balance-pretty mt-6 font-serif-display text-[clamp(2.5rem,5.4vw,4.25rem)] font-normal leading-[1.05] text-navy">
            Nutrição com estratégia para saúde, metabolismo e performance.
          </h1>
          <p className="text-balance-pretty mt-7 max-w-[46ch] text-[17px] leading-relaxed text-warm-600">
            Um acompanhamento individualizado, baseado em ciência e adaptado à sua
            rotina, aos seus objetivos e ao funcionamento do seu corpo.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTAButton href={site.whatsappLink} external variant="primary">
              Agendar consulta
            </CTAButton>
            <CTAButton href="/sobre" variant="secondary">
              Conheça meu trabalho
            </CTAButton>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-3">
            <div>
              <dt className="font-serif-display text-2xl text-navy">+{site.livesAccompanied}</dt>
              <dd className="mt-1 text-xs uppercase tracking-[0.1em] text-warm-600">
                vidas acompanhadas
              </dd>
            </div>
            <div>
              <dt className="font-serif-display text-2xl text-navy">UNESP | USC</dt>
              <dd className="mt-1 text-xs uppercase tracking-[0.1em] text-warm-600">
                formação acadêmica
              </dd>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <dt className="font-serif-display text-2xl text-navy">SJC + online</dt>
              <dd className="mt-1 text-xs uppercase tracking-[0.1em] text-warm-600">
                atendimento
              </dd>
            </div>
          </dl>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[480px] overflow-hidden rounded-[2px] bg-sand lg:ml-auto lg:max-w-none">
            <Image
              src="/images/gabriella-retrato.png"
              alt="Gabriella Ferreira Schmalh, nutricionista clínica e esportiva"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
