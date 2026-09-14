import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import FinalCTA from "@/components/shared/FinalCTA";
import { CTAButton } from "@/components/ui";
import { articles } from "@/lib/content";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/conteudos/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 2);
  const relatedFallback = related.length
    ? related
    : articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <article className="pt-16 pb-20 md:pt-24 md:pb-28">
        <Container>
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <Link
                href="/conteudos"
                className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-warm-600 transition-colors hover:text-terracotta"
              >
                ← Todos os conteúdos
              </Link>
            </Reveal>

            <Reveal delay={80}>
              <span className="mt-8 block text-[11px] font-semibold uppercase tracking-[0.18em] text-terracotta">
                {article.category}
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="text-balance-pretty mt-5 font-serif-display text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.1] text-navy">
                {article.title}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-xs uppercase tracking-[0.1em] text-warm-400">
                {article.readingTime} de leitura · Conteúdo editorial
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-12 flex flex-col gap-6 border-t border-line pt-10">
                {article.body.map((paragraph, i) => (
                  <p key={i} className="text-[17px] leading-relaxed text-navy/85">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-12 border-t border-line pt-8 text-sm leading-relaxed text-warm-600">
                Este conteúdo tem caráter educativo e não substitui uma avaliação
                nutricional individualizada. Cada acompanhamento é construído a
                partir da sua história e do seu contexto de saúde.
              </p>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-10">
                <CTAButton href="/acompanhamento" variant="secondary">
                  Conheça o acompanhamento
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </Container>
      </article>

      <section className="border-t border-line py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-600">
              Continue lendo
            </p>
            <ul className="mt-8 flex flex-col divide-y divide-line border-t border-line">
              {relatedFallback.map((item) => (
                <li key={item.slug}>
                  <Link href={`/conteudos/${item.slug}`} className="group flex flex-col gap-2 py-6">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-warm-400">
                      {item.category}
                    </span>
                    <span className="font-serif-display text-lg leading-snug text-navy transition-colors group-hover:text-terracotta">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
