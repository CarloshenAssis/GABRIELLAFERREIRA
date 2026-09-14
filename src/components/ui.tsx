import Link from "next/link";
import { ReactNode } from "react";

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-terracotta ${className}`}
    >
      <span className="h-px w-6 bg-terracotta" aria-hidden />
      {children}
    </span>
  );
}

export function KickerLine({ children }: { children: ReactNode }) {
  return (
    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-600">
      {children}
    </span>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

export function CTAButton({ href, children, variant = "primary", className = "", external }: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2";
  const variants: Record<string, string> = {
    primary:
      "bg-navy text-ivory hover:bg-terracotta shadow-[0_1px_0_0_rgba(20,34,56,0.05)]",
    secondary:
      "border border-navy/25 text-navy hover:border-navy hover:bg-navy hover:text-ivory",
    ghost: "text-navy hover:text-terracotta px-0 py-0",
  };

  const content = (
    <>
      {children}
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </>
  );

  const cls = `${variant === "ghost" ? "inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em]" : base + " " + variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return <hr className={`border-0 border-t border-line ${className}`} />;
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-serif-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-navy">
        {value}
      </div>
      <p className="mt-3 max-w-[16ch] text-sm text-warm-600">{label}</p>
    </div>
  );
}
