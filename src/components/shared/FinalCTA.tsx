import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { CTAButton } from "@/components/ui";
import { site } from "@/lib/content";

export default function FinalCTA({
  title = "Seu próximo passo começa com uma estratégia que faça sentido para você.",
}: {
  title?: string;
}) {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="rounded-[2px] bg-navy px-8 py-16 text-center sm:px-16 md:py-24">
          <Reveal>
            <h2 className="text-balance-pretty mx-auto max-w-2xl font-serif-display text-[clamp(1.9rem,4vw,3rem)] leading-[1.15] text-ivory">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10">
              <CTAButton href={site.whatsappLink} external variant="onDark">
                Agendar consulta
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
