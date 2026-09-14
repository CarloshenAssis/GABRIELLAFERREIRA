"use client";

import { useRef } from "react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { site, testimonials } from "@/lib/content";

export default function Testimonials() {
  const scrollerRef = useRef<HTMLUListElement>(null);

  function scrollByCards(direction: 1 | -1) {
    const node = scrollerRef.current;
    if (!node) return;
    const card = node.querySelector("li");
    const step = card ? card.clientWidth + 24 : node.clientWidth * 0.8;
    node.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <Eyebrow>Experiências reais</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-balance-pretty mt-6 font-serif-display text-[clamp(2rem,3.6vw,3rem)] leading-[1.12] text-navy">
                O que dizem sobre o acompanhamento.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-4 flex items-center gap-2 text-sm text-warm-600">
                <span className="text-terracotta-2" aria-hidden>
                  ★★★★★
                </span>
                {site.googleRating.average} · {site.googleRating.count} avaliações no Google
              </p>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="hidden gap-3 sm:flex">
              <button
                type="button"
                onClick={() => scrollByCards(-1)}
                aria-label="Depoimento anterior"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:border-navy hover:bg-navy hover:text-ivory"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollByCards(1)}
                aria-label="Próximo depoimento"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:border-navy hover:bg-navy hover:text-ivory"
              >
                →
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <ul
            ref={scrollerRef}
            tabIndex={0}
            aria-label="Depoimentos de pacientes — role para o lado para ver mais"
            className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
          >
            {testimonials.map((item) => (
              <li
                key={item.name}
                className="w-[85vw] shrink-0 snap-start rounded-[2px] border border-line bg-white p-8 sm:w-[420px]"
              >
                <span className="text-terracotta-2" aria-hidden>
                  ★★★★★
                </span>
                <p className="mt-5 text-[15px] leading-relaxed text-navy/85">
                  &ldquo;{item.text}&rdquo;
                </p>
                <p className="mt-6 text-sm font-semibold text-navy">{item.name}</p>
                <p className="text-xs uppercase tracking-[0.08em] text-warm-600">
                  Avaliação no Google
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
