import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { specialties } from "@/lib/content";

function linkFor(slug: string) {
  return slug === "performance-esportiva" ? "/nutricao-esportiva" : `/especialidades#${slug}`;
}

export default function SpecialtiesEditorial() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <Eyebrow>Especialidades</Eyebrow>
              <h2 className="text-balance-pretty mt-6 font-serif-display text-[clamp(2rem,3.6vw,3rem)] leading-[1.1] text-navy">
                Uma estratégia para cada objetivo.
              </h2>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-warm-600">
                Nenhum acompanhamento é padronizado. Cada área é um ponto de partida
                para uma estratégia construída em torno de quem você é.
              </p>
              <Link
                href="/especialidades"
                className="mt-8 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-navy transition-colors hover:text-terracotta"
              >
                Ver todas as especialidades <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>

          <ul className="border-t border-line">
            {specialties.map((item, i) => (
              <Reveal key={item.slug} as="li" delay={i * 60}>
                <Link
                  href={linkFor(item.slug)}
                  className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-6 gap-y-2 border-b border-line py-7 transition-colors sm:gap-x-8"
                >
                  <span className="font-serif-display text-lg text-warm-400 sm:text-xl">
                    {item.number}
                  </span>
                  <span>
                    <span className="block font-serif-display text-xl text-navy transition-colors group-hover:text-terracotta sm:text-2xl">
                      {item.title}
                    </span>
                    <span className="mt-2 block max-w-[52ch] text-sm leading-relaxed text-warm-600">
                      {item.short}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="row-start-1 self-center text-lg text-navy/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-terracotta sm:row-start-auto"
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
