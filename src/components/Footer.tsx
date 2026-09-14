import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { navItems, site, waLinks } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-navy text-ivory">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/images/logo-gabriella-ferreira.png"
              alt={`${site.shortName} — Nutricionista`}
              width={168}
              height={64}
              className="h-11 w-auto object-contain brightness-0 invert"
            />
            <p className="mt-6 font-serif-display text-lg text-ivory/90">{site.shortName}</p>
            <p className="mt-1 text-sm text-ivory/60">
              {site.role}
              <br />
              {site.crn}
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory/65">
              Navegação
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ivory/75 transition-colors hover:text-terracotta-light">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory/65">
              Contato
            </p>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-ivory/75">
              <li>
                <a href={waLinks.default} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-terracotta-light">
                  {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-terracotta-light">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-terracotta-light">
                  {site.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ivory/65">
              Atendimento
            </p>
            <p className="mt-5 text-sm leading-relaxed text-ivory/75">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.neighborhood}
              <br />
              {site.address.city}
              <br />
              {site.address.zip}
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ivory/12 pt-8 text-xs text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.shortName} — Nutricionista Clínica e Esportiva · {site.crn}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacidade" className="transition-colors hover:text-terracotta-light">
              Privacidade
            </Link>
            <span>
              Atendimento em {site.city} e online
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
