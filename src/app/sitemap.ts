import type { MetadataRoute } from "next";
import { articles, site } from "@/lib/content";

const staticRoutes = [
  "",
  "/sobre",
  "/especialidades",
  "/acompanhamento",
  "/nutricao-clinica",
  "/nutricao-esportiva",
  "/conteudos",
  "/contato",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${site.url}/conteudos/${article.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...articlePages];
}
