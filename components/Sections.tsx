import { CONTEUDO_DE_EXEMPLO, cursos, perguntas, posts, site } from "@/lib/site";
import { DocImage, StudioRender } from "./Renders";
import { Arrow, Btn, ExemploTag, Icons, Logo } from "./ui";

/* ---------------------------------- Hero ---------------------------------- */

export function Hero() {
  const numeros = [
    { n: "2", l: "cursos: imagens e vídeos" },
    { n: "24", l: "aulas em texto no total" },
    { n: "12", l: "aulas por curso, num só módulo" },
    { n: "29,90", pre: "R$", l: "por curso" },
  ];
  return (
    <section id="topo" className="wrap grid gap-14 pt-14 pb-16 lg:grid-cols-[7fr_5fr] lg:gap-[72px] lg:pt-28 lg:pb-24">
      <div>
        <h1 className="font-display text-[58px] leading-[1] font-medium tracking-[-0.025em] sm:text-[80px] lg:text-[84px] lg:leading-[.98] xl:text-[96px]">
          <span className="block">Crie imagens</span>
          <span className="block">
            e vídeos <br className="sm:hidden" />
            com IA
          </span>
        </h1>
        <p className="mt-7 max-w-[30em] text-lg leading-relaxed text-ink-2 lg:mt-8">
          Dois cursos curtos e práticos que levam você do primeiro prompt a um resultado pronto para postar.{" "}
          {site.slogan}
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3 lg:mt-10">
          <Btn href="#cursos">
            Ver os cursos <Arrow />
          </Btn>
          <Btn href="#como-funciona" variant="ghost">
            Como funciona
          </Btn>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-9 xl:gap-x-10 lg:gap-y-11 lg:pt-3.5">
        {numeros.map((x) => (
          <div key={x.l}>
            <p className="font-display text-[56px] leading-none font-medium tracking-[-0.02em] whitespace-nowrap lining-nums lg:text-[60px] xl:text-[80px]">
              {x.pre && <span className="mr-1 align-[0.95em] text-[0.42em] tracking-normal">{x.pre}</span>}
              {x.n}
            </p>
            <p className="mt-2.5 text-sm text-muted">{x.l}</p>
          </div>
        ))}
        <p className="col-span-2 flex items-center gap-2.5 border-t border-hair pt-5 text-sm text-muted">
          {Icons.shield}
          Pagamento seguro pela Kiwify
        </p>
      </div>
    </section>
  );
}

/* ----------------------------------- Bio ---------------------------------- */

export function Bio() {
  return (
    <section id="sobre" className="band">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-[72px]">
        {/* Troque por <img src="/foto.jpg" ...> quando tiver sua foto */}
        <div className="mx-auto aspect-square w-full max-w-[300px] lg:max-w-[360px]">
          <div
            className="flex h-full w-full items-center justify-center rounded-full border border-[#2c2c2c] text-ink"
            style={{ background: "radial-gradient(circle at 35% 28%, #262626 0%, #111 55%, #070707 100%)" }}
          >
            <Logo className="h-[48%] w-[48%] -translate-x-[3%] opacity-90" />
          </div>
        </div>

        <div className="max-w-[620px]">
          <p className="eyebrow">Quem ensina</p>
          <h2 className="h2 mt-3">Criador da Camer IA</h2>
          <p className="mt-2 text-ink-2">Professor e criador de imagens e vídeos com IA</p>
          <p className="mt-6 text-lg leading-relaxed text-ink-2">
            A Camer IA é um projeto de uma pessoa só. Eu escrevo cada aula, passo a passo, e sou eu quem
            responde as suas mensagens. A ideia é simples: mostrar o caminho mais curto entre uma ideia na
            cabeça e uma imagem ou um vídeo pronto, sem enrolação e por um preço que cabe no bolso.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
            <li>
              <a className="link-u" href={site.instagram} target="_blank" rel="noopener noreferrer">
                Instagram {site.instagramUsuario}
              </a>
            </li>
            <li>
              <a className="link-u" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a className="link-u" href="#blog">
                Blog
              </a>
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Btn href={site.whatsapp} external>
              Falar comigo no WhatsApp
            </Btn>
            <Btn href="#cursos" variant="ghost">
              Ver os cursos
            </Btn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Benefícios ------------------------------ */

const motivos = [
  {
    t: "Direto ao ponto",
    d: "Um módulo com 12 aulas em texto por curso. Você lê em poucos dias e já começa a criar.",
    icon: <path d="M4 12h13m-5-5 5 5-5 5" />,
  },
  {
    t: "Preço que cabe no bolso",
    d: "R$ 29,90 por curso, pago uma vez pela Kiwify.",
    icon: <path d="M12 4v16M16 7.5c-.8-1-2.2-1.5-4-1.5-2.2 0-3.8 1.1-3.8 2.8 0 4 7.8 2.2 7.8 6.2 0 1.8-1.7 3-4 3-1.9 0-3.4-.6-4.3-1.7" />,
  },
  {
    t: "Resultado para postar",
    d: "Cada aula termina com algo pronto: uma imagem, uma cena, um vídeo curto.",
    icon: <path d="M4.5 6.5h15v11h-15zM4.5 14.5l4-4 3.5 3.5 2.5-2.5 5 5" />,
  },
  {
    t: "Leia no seu tempo",
    d: "Aulas em texto para ler quando e onde quiser, e voltar ao passo a passo sempre que precisar.",
    icon: <path d="M12 4.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15ZM12 8v4.5l3 2" />,
  },
];

export function Benefits() {
  return (
    <section className="band">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[7fr_5fr] lg:gap-[72px]">
        <div>
          <h2 className="h2 max-w-[12em]">Por que aprender com a Camer IA</h2>
          <ul className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:mt-14">
            {motivos.map((m) => (
              <li key={m.t} className="border-t border-hair pt-5">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-ink"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {m.icon}
                </svg>
                <h3 className="mt-4 text-lg font-medium">{m.t}</h3>
                <p className="mt-1.5 text-ink-2">{m.d}</p>
              </li>
            ))}
          </ul>
        </div>
        <figure className="raised overflow-hidden p-2">
          <StudioRender className="block h-auto w-full rounded-[10px]" />
        </figure>
      </div>
    </section>
  );
}

/* ----------------------------------- Blog --------------------------------- */

function dataBR(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });
}

export function Blog() {
  return (
    <section id="blog" className="band">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex items-center gap-3">
            <h2 className="h2">Do blog</h2>
            {CONTEUDO_DE_EXEMPLO && <ExemploTag />}
          </div>
          <a className="link-u text-[15px]" href={site.instagram} target="_blank" rel="noopener noreferrer">
            Mais dicas no Instagram <Arrow />
          </a>
        </div>
        <ul className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-12">
          {posts.map((p, i) => (
            <li key={p.titulo}>
              <a href={p.href} className="raised group block h-full overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden rounded-t-[15px]">
                  <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]">
                    <DocImage variant={i as 0 | 1 | 2} />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted">
                    <time dateTime={p.data}>{dataBR(p.data)}</time> · {p.autor}
                  </p>
                  <h3 className="mt-2.5 font-display text-[26px] leading-[1.15] font-medium text-balance group-hover:underline group-hover:decoration-edge group-hover:decoration-1 group-hover:underline-offset-4">
                    {p.titulo}
                  </h3>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* --------------------------------- Processo ------------------------------- */

const passos = [
  { t: "Escolha o curso", d: "Imagens com IA, Vídeos com IA ou os dois. Cada um tem sua página de compra." },
  { t: "Pague pela Kiwify", d: "O pagamento é feito em ambiente seguro e o acesso chega no seu e‑mail." },
  { t: "Leia e crie", d: "Leia as 12 aulas na ordem e saia de cada uma com algo pronto para mostrar." },
];

export function Process() {
  return (
    <section id="como-funciona" className="band">
      <div className="wrap grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-[72px]">
        <div>
          <h2 className="h2">Como funciona</h2>
          <p className="mt-5 max-w-[26em] text-lg text-ink-2">
            Três passos entre você e a sua primeira criação com IA.
          </p>
        </div>
        <ol className="border-t border-hair">
          {passos.map((p, i) => (
            <li
              key={p.t}
              className="grid grid-cols-[56px_1fr] gap-x-6 border-b border-hair py-7 sm:grid-cols-[88px_1fr] lg:py-8"
            >
              <span className="font-display text-[44px] leading-none font-medium lining-nums sm:text-[56px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pt-1">
                <h3 className="text-xl font-medium">{p.t}</h3>
                <p className="mt-1.5 text-ink-2">{p.d}</p>
                {i === 0 && (
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Btn href={cursos.imagens.checkout} external size="sm">
                      Comprar Imagens com IA
                    </Btn>
                    <Btn href={cursos.videos.checkout} external size="sm">
                      Comprar Vídeos com IA
                    </Btn>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------------------------- Preços -------------------------------- */

export function Pricing() {
  const v = cursos.videos;
  const im = cursos.imagens;
  const itens = [
    "1 módulo com 12 aulas em texto",
    "Do prompt ao vídeo pronto",
    "Aulas em texto, no seu ritmo",
    "Acesso enviado por e‑mail",
    "Pagamento seguro pela Kiwify",
    "7 dias para desistir",
  ];
  return (
    <section id="cursos" className="band">
      <div className="wrap">
        <h2 className="h2 text-center">Dois cursos, o mesmo preço</h2>
        <p className="mx-auto mt-4 max-w-[34em] text-center text-lg text-ink-2">
          Comece pelo que você mais quer criar. Dá para fazer os dois.
        </p>

        <div className="mt-12 grid items-start gap-5 lg:mt-14 lg:grid-cols-[7fr_4fr]">
          <article className="raised p-7 sm:p-10">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-medium">{v.nome}</h3>
              <span className="inline-flex h-7 items-center rounded-full bg-inverse px-3 text-xs font-medium text-inverse-ink">
                Mais procurado
              </span>
            </div>
            <p className="mt-6 font-display text-[72px] leading-none font-medium tracking-[-0.02em] lining-nums sm:text-[88px]">
              <span className="mr-1.5 align-[0.9em] text-[0.36em] tracking-normal">R$</span>
              {v.preco}
            </p>
            <p className="mt-3 text-ink-2">
              Aprenda a transformar ideias e imagens em vídeos curtos, prontos para as redes.
            </p>
            <ul className="mt-8 grid gap-x-8 gap-y-3 border-t border-hair pt-7 sm:grid-cols-2">
              {itens.map((x) => (
                <li key={x} className="flex items-center gap-2.5 text-[15px] text-ink-2">
                  {Icons.check}
                  {x}
                </li>
              ))}
            </ul>
            <Btn href={v.checkout} external className="mt-9 w-full sm:w-auto">
              Comprar {v.nome} <Arrow />
            </Btn>
          </article>

          <article className="raised p-7 sm:p-8">
            <h3 className="text-xl font-medium">{im.nome}</h3>
            <p className="mt-4 font-display text-[52px] leading-none font-medium lining-nums">
              <span className="mr-1 align-[0.85em] text-[0.4em]">R$</span>
              {im.preco}
            </p>
            <p className="mt-3 text-ink-2">1 módulo com 12 aulas em texto para criar imagens do zero com IA.</p>
            <Btn href={im.checkout} external className="mt-7 w-full">
              Comprar {im.nome}
            </Btn>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- FAQ ---------------------------------- */

export function Faq() {
  return (
    <section id="perguntas" className="band">
      <div className="wrap grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-[72px]">
        <div>
          <h2 className="h2">Perguntas frequentes</h2>
          <p className="mt-5 text-lg text-ink-2">Não achou sua resposta?</p>
          <a className="link-u mt-2 inline-block text-[15px]" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
            Pergunte no WhatsApp <Arrow />
          </a>
        </div>
        <div className="border-t border-hair">
          {perguntas.map((q, i) => (
            <details key={q.p} className="faq group border-b border-hair" open={i === 0}>
              <summary className="flex min-h-[68px] cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg font-medium focus-visible:outline-offset-[-2px]">
                {q.p}
                <svg
                  viewBox="0 0 20 20"
                  className="faq-icon h-5 w-5 flex-none text-muted transition-transform duration-200"
                  aria-hidden="true"
                >
                  <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </summary>
              <p className="max-w-[40em] pb-6 text-ink-2">{q.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Rodapé --------------------------------- */

export function Footer() {
  const colunas = [
    {
      t: "Cursos",
      links: [
        { l: "Imagens com IA", h: cursos.imagens.checkout, ext: true },
        { l: "Vídeos com IA", h: cursos.videos.checkout, ext: true },
        { l: "Preços", h: "#cursos" },
      ],
    },
    {
      t: "Camer IA",
      links: [
        { l: "Sobre", h: "#sobre" },
        { l: "Blog", h: "#blog" },
        { l: "Como funciona", h: "#como-funciona" },
      ],
    },
    {
      t: "Contato",
      links: [
        { l: "WhatsApp", h: site.whatsapp, ext: true },
        { l: "Instagram", h: site.instagram, ext: true },
        { l: "Perguntas", h: "#perguntas" },
      ],
    },
  ];
  return (
    <footer id="contato" className="pt-16 pb-8 lg:pt-24">
      <div className="wrap">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:max-w-[720px]">
          {colunas.map((c) => (
            <div key={c.t}>
              <h2 className="text-sm text-muted">{c.t}</h2>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((x) => (
                  <li key={x.l}>
                    <a
                      href={x.h}
                      className="text-[15px] text-ink transition-colors hover:text-ink-2 hover:underline hover:underline-offset-4"
                      {...(x.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {x.l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p
          aria-hidden="true"
          className="mt-16 font-display text-[22vw] leading-[.85] font-medium tracking-[-0.035em] whitespace-nowrap lg:mt-24 lg:text-[min(17.5vw,252px)]"
        >
          Camer IA
        </p>

        <div className="mt-10 flex flex-col gap-5 border-t border-hair pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.nome} · {site.slogan}
          </p>
          <div className="flex items-center gap-2">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Camer IA"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-edge text-ink transition-colors hover:bg-btn"
            >
              {Icons.instagram}
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Camer IA"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-edge text-ink transition-colors hover:bg-btn"
            >
              {Icons.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
