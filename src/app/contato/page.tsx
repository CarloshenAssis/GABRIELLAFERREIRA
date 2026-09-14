import type { Metadata } from "next";
import type { ReactNode } from "react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/contato/ContactForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com Gabriella Ferreira, nutricionista clínica e esportiva em São José dos Campos. WhatsApp, e-mail, endereço e formulário de contato.",
  alternates: { canonical: "/contato" },
};

const fullAddress = `${site.address.line1}, ${site.address.line2}, ${site.address.neighborhood}, ${site.address.city}, ${site.address.zip}`;
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre o seu próximo passo?"
        description="Preencha o formulário ou fale diretamente pelo WhatsApp. O agendamento e as primeiras dúvidas podem ser resolvidos por lá."
      />

      <section className="pb-24 md:pb-32">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div className="order-2 lg:order-1">
            <Reveal>
              <div className="border-t border-line pt-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-600">
                  Formulário
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>

          <div className="order-1 flex flex-col gap-10 lg:order-2">
            <Reveal>
              <InfoBlock label="WhatsApp">
                <a
                  href={site.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-navy transition-colors hover:text-terracotta sm:text-2xl"
                >
                  {site.whatsappDisplay}
                </a>
              </InfoBlock>
            </Reveal>

            <Reveal delay={60}>
              <InfoBlock label="E-mail">
                <a
                  href={`mailto:${site.email}`}
                  className="text-xl text-navy transition-colors hover:text-terracotta sm:text-2xl"
                >
                  {site.email}
                </a>
              </InfoBlock>
            </Reveal>

            <Reveal delay={120}>
              <InfoBlock label="Instagram">
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-navy transition-colors hover:text-terracotta sm:text-2xl"
                >
                  {site.instagramHandle}
                </a>
              </InfoBlock>
            </Reveal>

            <Reveal delay={180}>
              <InfoBlock label="Endereço">
                <p className="text-[17px] leading-relaxed text-navy">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.neighborhood} — {site.address.city}
                  <br />
                  {site.address.zip}
                </p>
              </InfoBlock>
            </Reveal>

            <Reveal delay={240} className="overflow-hidden rounded-[2px] border border-line">
              <iframe
                title="Localização do consultório de Gabriella Ferreira"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full grayscale-[15%]"
              />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

function InfoBlock({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="border-t border-line pt-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-600">{label}</p>
      <div className="mt-3">{children}</div>
    </div>
  );
}
