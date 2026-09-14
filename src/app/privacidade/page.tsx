import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/shared/PageHero";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacidade",
  description: "Como os dados enviados por meio deste site são utilizados.",
  alternates: { canonical: "/privacidade" },
  robots: { index: false, follow: true },
};

export default function PrivacidadePage() {
  return (
    <>
      <PageHero eyebrow="Privacidade" title="Privacidade e uso de dados" />
      <section className="pb-24 md:pb-32">
        <Container>
          <div className="max-w-2xl border-t border-line pt-10 text-[15px] leading-relaxed text-warm-600">
            <p>
              Este site é um canal de apresentação profissional de Gabriella
              Ferreira Schmalh. Os dados preenchidos no formulário de contato
              (nome, contato e mensagem) são utilizados exclusivamente para
              encaminhar o seu atendimento via WhatsApp e não são armazenados
              neste site nem compartilhados com terceiros para fins comerciais.
            </p>
            <p className="mt-6">
              Informações de saúde discutidas em consulta são tratadas com o
              sigilo profissional previsto no Código de Ética do Nutricionista e
              na legislação vigente, incluindo a Lei Geral de Proteção de Dados
              (LGPD).
            </p>
            <p className="mt-6">
              Em caso de dúvidas sobre o uso de dados neste site, entre em
              contato pelo e-mail{" "}
              <a href={`mailto:${site.email}`} className="text-navy underline decoration-line underline-offset-4 hover:text-terracotta-2">
                {site.email}
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
