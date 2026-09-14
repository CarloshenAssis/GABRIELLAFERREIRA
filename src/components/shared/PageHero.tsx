import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="pt-16 pb-16 md:pt-24 md:pb-20">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-balance-pretty mt-6 font-serif-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] text-navy">
              {title}
            </h1>
          </Reveal>
          {description ? (
            <Reveal delay={140}>
              <p className="text-balance-pretty mt-6 max-w-[54ch] text-[17px] leading-relaxed text-warm-600">
                {description}
              </p>
            </Reveal>
          ) : null}
          {children}
        </div>
      </Container>
    </section>
  );
}
