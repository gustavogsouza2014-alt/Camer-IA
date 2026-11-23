# Camer IA — site

**Versão publicada:** a pasta `site/` (HTML puro, sem build). O Cloudflare publica essa pasta (veja `wrangler.jsonc`).

- `site/index.html`: o site inteiro, com a animação de cubos, as páginas legais (#privacidade, #termos, #cookies, #reembolso) e o aviso de cookies.
- Dados da empresa (nome, CPF/CNPJ, e-mail, cidade): edite o bloco `EMPRESA` no começo do `<script>` em `site/index.html`.
- `site/404.html`: página de erro em português.

A versão antiga em Next.js (pastas `app/`, `components/`, `lib/`) continua no repositório, mas não é mais a que vai ao ar. Para voltar para ela, troque `./site` por `./out` no `wrangler.jsonc`.

---

# Camer IA — site

Next.js 15 + React 19 + TypeScript + Tailwind CSS 4. Pronto para publicar na Vercel.

## Rodar no computador

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Publicar na Vercel (grátis)

1. Crie um repositório no GitHub e envie esta pasta.
2. Em vercel.com, clique em **Add New → Project**, escolha o repositório e clique em **Deploy**.
   A Vercel reconhece o Next.js sozinha, então não precisa mudar nenhuma configuração.

## O que editar antes de publicar

Tudo fica em `lib/site.ts`:

- **Blog**: troque os 3 posts de exemplo pelos seus (título, data e link) e mude
  `CONTEUDO_DE_EXEMPLO` para `false` (isso tira a etiqueta "Exemplo").
- Os links da Kiwify dos dois cursos já estão certos.

Outras trocas:

- **Sua foto**: coloque `foto.jpg` em `public/` e, em `components/Sections.tsx` (seção Bio),
  troque o círculo com o logo por `<img src="/foto.jpg" alt="" className="h-full w-full rounded-full object-cover" />`.
- **Imagens 3D**: as ilustrações em `components/Renders.tsx` são desenhadas em código.
  Se tiver renders 3D de verdade, coloque em `public/` e troque o componente por `<img>`.

## Animação de fundo

A animação que muda com a rolagem fica em `lib/film.ts` (desenho) e `components/Film.tsx`
(seção "Aprender. Imaginar. Transformar."). Quem usa o celular com "reduzir movimento"
ativado vê as cenas trocarem sem a transição.

## Estrutura

```
app/layout.tsx        fontes (EB Garamond + Host Grotesk) e SEO
app/page.tsx          ordem das seções
app/globals.css       cores, fontes e estilos base
components/Header.tsx cabeçalho + menu do celular
components/Sections.tsx todas as seções
components/Renders.tsx  ilustrações
lib/site.ts           textos, links e preços
```
