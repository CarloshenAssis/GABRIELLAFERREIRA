import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ConteudosHub from "@/components/conteudos/ConteudosHub";
import Container from "@/components/Container";
import FinalCTA from "@/components/shared/FinalCTA";

export const metadata: Metadata = {
  title: "Conteúdos",
  description:
    "Conteúdos sobre metabolismo, emagrecimento, saúde intestinal, performance e rotina alimentar, escritos por Gabriella Ferreira, nutricionista clínica e esportiva.",
  alternates: { canonical: "/conteudos" },
};

export default function ConteudosPage() {
  return (
    <>
      <PageHero
        eyebrow="Conteúdos"
        title="Nutrição explicada com clareza."
        description="Reflexões e explicações sobre metabolismo, saúde intestinal, performance e rotina alimentar — conteúdos editoriais para entender a nutrição sem terrorismo alimentar."
      />
      <section className="pb-24 md:pb-32">
        <Container>
          <ConteudosHub />
        </Container>
      </section>
      <FinalCTA title="Prefere conversar diretamente sobre o seu caso?" />
    </>
  );
}
