import type { ReactNode } from "react";

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  size?: "md" | "sm";
  external?: boolean;
  className?: string;
};

export function Btn({ href, children, variant = "primary", size = "md", external, className = "" }: BtnProps) {
  const base =
    "inline-flex items-center justify-center gap-2.5 rounded-full font-medium whitespace-nowrap transition-colors focus-visible:outline-offset-4";
  const sizes = size === "sm" ? "h-10 px-5 text-sm" : "h-12 px-6 text-[15px]";
  const variants =
    variant === "primary"
      ? "bg-btn text-btn-label border border-edge hover:bg-btn-hover hover:border-[#5a5a5a] active:bg-[#141414]"
      : "text-ink border border-transparent hover:border-edge active:bg-surface";
  return (
    <a
      href={href}
      className={`${base} ${sizes} ${variants} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export function Logo({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="currentColor" aria-hidden="true">
      <path d="M58.91 23.22A24 24 0 1 0 58.91 52.78L50.24 46.01A13 13 0 1 1 50.24 29.99Z" />
      <path d="M37 31.2 47.6 38 37 44.8Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      <rect x="13" y="4" width="7" height="7" rx="1" />
      <rect x="25" y="1" width="5.5" height="5.5" rx="1" />
      <rect x="3" y="14" width="6" height="6" rx="1" />
      <rect x="12" y="15.5" width="5" height="5" rx="1" opacity=".55" />
      <rect x="2" y="25" width="4.5" height="4.5" rx="1" opacity=".55" />
    </svg>
  );
}

export function ExemploTag() {
  return (
    <span className="inline-flex h-6 items-center rounded-full border border-edge px-2.5 text-xs text-muted">
      Exemplo
    </span>
  );
}

export function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export const Icons = {
  instagram: (
    <svg viewBox="0 0 20 20" className="h-[18px] w-[18px]" aria-hidden="true">
      <rect x="2.5" y="2.5" width="15" height="15" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="10" cy="10" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="14.4" cy="5.6" r="0.9" fill="currentColor" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 20 20" className="h-[18px] w-[18px]" aria-hidden="true">
      <path
        d="M3.2 16.8 4.3 13.6A7.2 7.2 0 1 1 6.6 15.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M7.6 6.9c.2-.4.6-.4.8 0l.6 1.3c.1.3 0 .5-.2.7l-.4.4c.4.9 1.2 1.7 2.1 2.1l.4-.4c.2-.2.5-.3.7-.2l1.3.6c.4.2.4.6 0 .8-.6.5-1.3.7-2 .5-1.8-.6-3.3-2.1-3.9-3.9-.2-.7 0-1.4.6-1.9Z"
        fill="currentColor"
      />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 16 16" className="h-4 w-4 flex-none" aria-hidden="true">
      <path d="m3.5 8.3 2.9 2.9 6.1-6.4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 16 16" className="h-4 w-4 flex-none" aria-hidden="true">
      <path
        d="M8 1.5 13.5 3.5V7.6c0 3.2-2.3 5.9-5.5 6.9-3.2-1-5.5-3.7-5.5-6.9V3.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="m5.6 8 1.7 1.7 3.2-3.4" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
};
