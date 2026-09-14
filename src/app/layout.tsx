import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/content";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} — Nutricionista Clínica e Esportiva em ${site.city}`,
    template: `%s — ${site.shortName}`,
  },
  description:
    "Nutrição com estratégia para saúde, metabolismo e performance. Acompanhamento individualizado com Gabriella Ferreira Schmalh, nutricionista clínica e esportiva em São José dos Campos e online.",
  keywords: [
    "nutricionista em São José dos Campos",
    "nutricionista clínica São José dos Campos",
    "nutricionista esportiva São José dos Campos",
    "nutrição esportiva",
    "nutricionista metabolismo",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.shortName,
    url: site.url,
    title: `${site.shortName} — Nutricionista Clínica e Esportiva`,
    description:
      "Acompanhamento nutricional individualizado, baseado em ciência e adaptado à sua rotina, aos seus objetivos e ao funcionamento do seu corpo.",
    images: [{ url: "/images/gabriella-retrato.png", width: 1200, height: 1500 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.shortName} — Nutricionista Clínica e Esportiva`,
    description:
      "Acompanhamento nutricional individualizado, baseado em ciência e adaptado à sua rotina.",
    images: ["/images/gabriella-retrato.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/images/logo-gabriella-ferreira.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${manrope.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-ivory text-navy antialiased">
        <JsonLd />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-navy focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-ivory"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
