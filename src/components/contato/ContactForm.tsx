"use client";

import { FormEvent, ReactNode, useState } from "react";
import { site } from "@/lib/content";

const topics = [
  "Nutrição clínica",
  "Nutrição esportiva",
  "Ainda não sei — quero entender melhor",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [topic, setTopic] = useState(topics[0]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name.trim() || !contact.trim()) {
      setError("Preencha nome e um contato (WhatsApp ou e-mail) para continuar.");
      return;
    }
    setError(null);

    const lines = [
      `Olá, Gabriella! Meu nome é ${name.trim()}.`,
      `Contato: ${contact.trim()}`,
      `Assunto: ${topic}`,
      message.trim() ? `Mensagem: ${message.trim()}` : null,
    ].filter(Boolean);

    const url = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Nome" htmlFor="contact-name">
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-b border-navy/25 bg-transparent py-3 text-[15px] text-navy outline-none transition-colors focus:border-terracotta"
            placeholder="Seu nome"
          />
        </Field>
        <Field label="WhatsApp ou e-mail" htmlFor="contact-info">
          <input
            id="contact-info"
            name="contact"
            type="text"
            autoComplete="email"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full border-b border-navy/25 bg-transparent py-3 text-[15px] text-navy outline-none transition-colors focus:border-terracotta"
            placeholder="(12) 90000-0000 ou seu@email.com"
          />
        </Field>
      </div>

      <Field label="Assunto" htmlFor="contact-topic">
        <select
          id="contact-topic"
          name="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full border-b border-navy/25 bg-transparent py-3 text-[15px] text-navy outline-none transition-colors focus:border-terracotta"
        >
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Mensagem (opcional)" htmlFor="contact-message">
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-none border-b border-navy/25 bg-transparent py-3 text-[15px] text-navy outline-none transition-colors focus:border-terracotta"
          placeholder="Conte um pouco sobre o que você procura"
        />
      </Field>

      {error ? <p className="text-sm text-terracotta-2">{error}</p> : null}

      <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2.5 rounded-full bg-navy px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-ivory transition-colors duration-300 hover:bg-terracotta"
        >
          Enviar pelo WhatsApp <span aria-hidden>→</span>
        </button>
        <p className="text-xs text-warm-600">
          Você será direcionado ao WhatsApp para finalizar o envio.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-[11px] font-semibold uppercase tracking-[0.14em] text-warm-600">
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
