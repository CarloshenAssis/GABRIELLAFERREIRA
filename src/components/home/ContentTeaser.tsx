import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { CTAButton, Eyebrow } from "@/components/ui";
import { articles } from "@/lib/content";

export default function ContentTeaser() {
  const featured = articles.find((a) => a.featured) ?? articles[0];
  const rest = articles.filter((a) => a.slug !== featured.slug).slice(0, 3);

  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <Eyebrow>Conteúdos</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-balance-pretty mt-6 font-serif-display text-[clamp(2rem,3.6vw,3rem)] leading-[1.12] text-navy">
                Nutrição explicada com clareza.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <CTAButton href="/conteudos" variant="ghost">
              Ver todos os conteúdos
            </CTAButton>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <Reveal>
            <Link href={`/conteudos/${featured.slug}`} className="group block">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-navy">
                <div className="flex h-full flex-col justify-end p-8 sm:p-10">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-terracotta">
                    {featured.category}
                  </span>
                  <h3 className="mt-4 max-w-md font-serif-display text-2xl leading-snug text-ivory transition-colors group-hover:text-terracotta sm:text-3xl">
                    {featured.title}
                  </h3>
                  <span className="mt-5 text-xs uppercase tracking-[0.1em] text-ivory/50">
                    {featured.readingTime} de leitura
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>

          <ul className="flex flex-col divide-y divide-line border-t border-line">
            {rest.map((article, i) => (
              <Reveal key={article.slug} as="li" delay={i * 70}>
                <Link href={`/conteudos/${article.slug}`} className="group flex flex-col gap-2 py-6">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-warm-400">
                    {article.category}
                  </span>
                  <span className="font-serif-display text-lg leading-snug text-navy transition-colors group-hover:text-terracotta">
                    {article.title}
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
