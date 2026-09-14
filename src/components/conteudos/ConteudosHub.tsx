"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Reveal from "@/components/Reveal";
import { articleCategories, articles, type Article } from "@/lib/content";

const PAGE_SIZE = 4;

export default function ConteudosHub() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const featured = useMemo(() => articles.find((a) => a.featured) ?? articles[0], []);
  const pool = useMemo(() => articles.filter((a) => a.slug !== featured.slug), [featured]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return pool.filter((a) => {
      const matchesCategory = category ? a.category === category : true;
      const matchesQuery = q
        ? a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q)
        : true;
      return matchesCategory && matchesQuery;
    });
  }, [pool, query, category]);

  const showFeatured = !category && !query.trim();
  const visibleArticles = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  function handleFilterChange(next: string | null) {
    setCategory(next);
    setVisible(PAGE_SIZE);
  }

  function handleQueryChange(value: string) {
    setQuery(value);
    setVisible(PAGE_SIZE);
  }

  return (
    <div>
      {showFeatured ? <FeaturedArticle article={featured} /> : null}

      <div className="mt-4 flex flex-col gap-6 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => handleFilterChange(null)}
            className={`rounded-full border px-4 py-2 text-[12px] font-medium uppercase tracking-[0.06em] transition-colors ${
              category === null
                ? "border-navy bg-navy text-ivory"
                : "border-navy/20 text-warm-600 hover:border-navy/50"
            }`}
          >
            Todos
          </button>
          {articleCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => handleFilterChange(cat)}
              className={`rounded-full border px-4 py-2 text-[12px] font-medium uppercase tracking-[0.06em] transition-colors ${
                category === cat
                  ? "border-navy bg-navy text-ivory"
                  : "border-navy/20 text-warm-600 hover:border-navy/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <label className="relative w-full sm:w-64">
          <span className="sr-only">Buscar conteúdos</span>
          <input
            type="search"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder="Buscar conteúdo..."
            className="w-full rounded-full border border-navy/20 bg-white px-5 py-2.5 text-sm text-navy placeholder:text-warm-400 focus-visible:border-terracotta"
          />
        </label>
      </div>

      {visibleArticles.length === 0 ? (
        <p className="mt-16 text-sm text-warm-600">
          Nenhum conteúdo encontrado para essa busca.
        </p>
      ) : (
        <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
          {visibleArticles.map((article, i) => (
            <Reveal key={article.slug} as="li" delay={(i % PAGE_SIZE) * 60}>
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </ul>
      )}

      {hasMore ? (
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="inline-flex items-center gap-2 rounded-full border border-navy/25 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-navy transition-colors hover:border-navy hover:bg-navy hover:text-ivory"
          >
            Carregar mais conteúdos
          </button>
        </div>
      ) : null}
    </div>
  );
}

function FeaturedArticle({ article }: { article: Article }) {
  return (
    <Reveal>
      <Link href={`/conteudos/${article.slug}`} className="group block border-b border-line pb-14">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-terracotta">
          Destaque · {article.category}
        </span>
        <h2 className="text-balance-pretty mt-5 max-w-3xl font-serif-display text-[clamp(1.75rem,3.6vw,2.75rem)] leading-[1.14] text-navy transition-colors group-hover:text-terracotta">
          {article.title}
        </h2>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-warm-600">
          {article.excerpt}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-navy">
          Ler conteúdo <span aria-hidden>→</span>
        </span>
      </Link>
    </Reveal>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/conteudos/${article.slug}`} className="group block border-t border-line pt-6">
      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-warm-400">
        {article.category}
      </span>
      <h3 className="mt-3 font-serif-display text-xl leading-snug text-navy transition-colors group-hover:text-terracotta">
        {article.title}
      </h3>
      <p className="mt-3 max-w-[48ch] text-sm leading-relaxed text-warm-600">
        {article.excerpt}
      </p>
      <span className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.1em] text-warm-400">
        {article.readingTime} de leitura
      </span>
    </Link>
  );
}
