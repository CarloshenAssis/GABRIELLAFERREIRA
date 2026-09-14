import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import AuthorityStrip from "@/components/home/AuthorityStrip";
import Manifesto from "@/components/home/Manifesto";
import SpecialtiesEditorial from "@/components/home/SpecialtiesEditorial";
import AboutTeaser from "@/components/home/AboutTeaser";
import AuthorityNumber from "@/components/home/AuthorityNumber";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import AthleteStory from "@/components/home/AthleteStory";
import Congress from "@/components/home/Congress";
import Recognition from "@/components/home/Recognition";
import ContentTeaser from "@/components/home/ContentTeaser";
import FinalCTA from "@/components/shared/FinalCTA";

export const metadata: Metadata = {
  title: "Nutricionista Clínica e Esportiva em São José dos Campos",
  description:
    "Nutrição com estratégia para saúde, metabolismo e performance. Acompanhamento individualizado com Gabriella Ferreira Schmalh — São José dos Campos e online.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AuthorityStrip />
      <Manifesto />
      <SpecialtiesEditorial />
      <AboutTeaser />
      <AuthorityNumber />
      <Process />
      <Testimonials />
      <AthleteStory />
      <Congress />
      <Recognition />
      <ContentTeaser />
      <FinalCTA />
    </>
  );
}
