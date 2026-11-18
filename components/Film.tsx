"use client";

import { useEffect, useRef } from "react";
import { startFilm } from "@/lib/film";
import { Arrow, Btn } from "./ui";

const cenas = [
  { t: "Aprender.", d: "Cada aula em texto é uma peça. Você lê no seu ritmo e entende, passo a passo, como a IA pensa." },
  { t: "Imaginar.", d: "As peças se juntam. Do prompt certo nasce a imagem que estava só na sua cabeça." },
  { t: "Transformar.", d: "E a imagem ganha movimento. Do zero ao vídeo pronto para postar." },
];

export default function Film() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!canvas.current || !section.current) return;
    const caps = Array.from(section.current.querySelectorAll<HTMLElement>("[data-cena]"));
    return startFilm(canvas.current, section.current, caps);
  }, []);

  return (
    <>
      <canvas ref={canvas} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 h-screen w-screen" />
      <section ref={section} id="filme" aria-label="Aprender, imaginar, transformar" className="film relative h-[400vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="wrap relative h-full">
            {cenas.map((c, i) => (
              <div
                key={c.t}
                data-cena=""
                {...(i === 0 ? { "data-on": "" } : {})}
                className="film-cap absolute inset-x-6 bottom-[8vh] lg:inset-x-auto lg:top-1/2 lg:bottom-auto lg:left-6 lg:w-[520px] lg:-translate-y-1/2"
              >
                <p className="text-sm text-muted lining-nums">
                  {String(i + 1).padStart(2, "0")} <span className="text-edge">/</span> 03
                </p>
                <h2 className="mt-3 font-display text-[64px] leading-none font-medium tracking-[-0.025em] lg:text-[96px]">
                  {c.t}
                </h2>
                <p className="mt-5 max-w-[24em] text-lg text-ink-2">{c.d}</p>
                {i === 2 && (
                  <div className="mt-8">
                    <Btn href="#cursos">
                      Ver os cursos <Arrow />
                    </Btn>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
