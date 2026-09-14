"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "./Container";
import { navItems, site, waLinks } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        open
          ? "bg-ivory shadow-[0_1px_0_0_rgba(20,34,56,0.08)]"
          : scrolled
            ? "bg-ivory/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(20,34,56,0.08)]"
            : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between md:h-24">
        <Link href="/" className="relative z-10 flex items-center gap-3" aria-label={`${site.shortName} — Página inicial`}>
          <Image
            src="/images/logo-gabriella-ferreira.png"
            alt={`${site.shortName} — Nutricionista`}
            width={168}
            height={64}
            priority
            className="h-10 w-auto object-contain sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 text-[13px] font-medium uppercase tracking-[0.06em] transition-colors ${
                  active ? "text-terracotta-2" : "text-navy/80 hover:text-navy"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-terracotta transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={waLinks.default}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-ivory transition-colors duration-300 hover:bg-terracotta"
          >
            Agendar consulta
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="relative z-10 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-navy/15 lg:hidden"
        >
          <span
            className={`block h-px w-5 bg-navy transition-transform duration-300 ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-navy transition-transform duration-300 ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={`fixed inset-0 top-0 z-0 flex flex-col bg-ivory transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="h-20" aria-hidden />
        <Container className="flex flex-1 flex-col justify-between py-10">
          <nav className="flex flex-col gap-1" aria-label="Navegação mobile">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                className={`border-b border-line py-4 font-serif-display text-3xl text-navy transition-all duration-300 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-10 flex flex-col gap-4">
            <Link
              href={waLinks.default}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-ivory"
            >
              Agendar consulta pelo WhatsApp
            </Link>
            <a href={`tel:+${site.whatsappNumber}`} className="text-center text-sm text-warm-600">
              {site.whatsappDisplay}
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}
