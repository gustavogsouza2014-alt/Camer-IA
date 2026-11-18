"use client";

import { useEffect, useState } from "react";
import { Btn, Logo } from "./ui";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#perguntas", label: "Perguntas" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-transparent bg-ground/85 backdrop-blur-md">
      <div className="wrap grid h-[76px] grid-cols-[1fr_auto] items-center lg:grid-cols-[1fr_auto_1fr]">
        <a href="#topo" className="flex items-center gap-2.5 font-display text-2xl font-medium tracking-[-0.01em]">
          <Logo />
          Camer IA
        </a>

        <nav aria-label="Principal" className="hidden gap-9 text-[15px] text-ink-2 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <Btn href="#cursos" size="sm">
            Ver cursos
          </Btn>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-edge lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true">
              {open ? (
                <path d="M5 5l10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path d="M3.5 7h13M3.5 13h13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Menu"
          className="fixed inset-x-0 top-[76px] bottom-0 z-40 bg-ground px-6 pt-6 lg:hidden"
        >
          <ul className="border-t border-hair">
            {links.map((l) => (
              <li key={l.href} className="border-b border-hair">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex h-16 items-center justify-between font-display text-3xl"
                >
                  {l.label}
                  <span aria-hidden="true" className="text-xl text-muted">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
