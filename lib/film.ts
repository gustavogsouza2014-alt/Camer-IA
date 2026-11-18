// Animação de fundo controlada pela rolagem.
// Centenas de "pixels" 3D passam por 3 formas conforme a pessoa rola:
// 0 = soltos no espaço (Aprender) · 1 = uma imagem (Imaginar) · 2 = a logo com o play (Transformar)

type RGB = [number, number, number];
type Cube = {
  pos: [number, number, number][]; // posição em cada forma
  col: RGB[]; // cor em cada forma
  delay: number;
  lift: number;
  drift: number;
};

const N = 260;
const LOGO_C = "M58.91 23.22A24 24 0 1 0 58.91 52.78L50.24 46.01A13 13 0 1 1 50.24 29.99Z";
const LOGO_PLAY = "M37 31.2 47.6 38 37 44.8Z";
const LOGO_SQ: [number, number, number][] = [
  [13, 4, 7],
  [25, 1, 5.5],
  [3, 14, 6],
  [12, 15.5, 5],
  [2, 25, 4.5],
];

const INK: RGB = [249, 248, 249];
const MINT: RGB = [110, 227, 173];

function rand(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

const mix = (a: number, b: number, t: number) => a + (b - a) * t;
const mixC = (a: RGB, b: RGB, t: number): RGB => [mix(a[0], b[0], t), mix(a[1], b[1], t), mix(a[2], b[2], t)];
const clamp = (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Pequena "imagem gerada": céu, sol e montanhas em tons de menta.
function imageColor(u: number, v: number): RGB {
  const sky = mixC([196, 247, 222], [31, 122, 85], v);
  const sun = Math.hypot(u - 0.7, v - 0.28) < 0.13;
  const ridge1 = 0.62 - 0.22 * Math.max(0, 1 - Math.abs(u - 0.32) * 2.6);
  const ridge2 = 0.74 - 0.14 * Math.max(0, 1 - Math.abs(u - 0.72) * 3.2);
  if (v > ridge2) return [11, 43, 31];
  if (v > ridge1) return [15, 61, 44];
  if (sun) return [234, 255, 244];
  return sky;
}

function logoPoints(): { p: [number, number]; c: RGB }[] {
  const cv = document.createElement("canvas");
  const ctx = cv.getContext("2d")!;
  const c = new Path2D(LOGO_C);
  const play = new Path2D(LOGO_PLAY);
  const sq = LOGO_SQ.map(([x, y, s]) => {
    const p = new Path2D();
    p.rect(x, y, s, s);
    return p;
  });
  const sample = (step: number) => {
    const out: { p: [number, number]; c: RGB }[] = [];
    for (let y = 0; y < 64; y += step)
      for (let x = 0; x < 64; x += step) {
        const px = x + step / 2;
        const py = y + step / 2;
        if (ctx.isPointInPath(c, px, py)) out.push({ p: [px, py], c: INK });
        else if (ctx.isPointInPath(play, px, py)) out.push({ p: [px, py], c: MINT });
        else if (sq.some((s) => ctx.isPointInPath(s, px, py))) out.push({ p: [px, py], c: MINT });
      }
    return out;
  };
  let step = 3.2;
  let pts = sample(step);
  while (pts.length < N && step > 1) {
    step -= 0.1;
    pts = sample(step);
  }
  // garante que os quadradinhos e o play existam mesmo com poucos pontos
  return pts;
}

function build(): Cube[] {
  const r = rand(7);
  const logo = logoPoints();
  // escolhe N pontos espalhados de forma regular
  const pick = Array.from({ length: N }, (_, i) => logo[Math.floor((i * logo.length) / N)]);
  const cols = 20;
  const rows = 13;
  const cubes: Cube[] = [];
  for (let i = 0; i < N; i++) {
    // 0: nuvem
    const th = r() * Math.PI * 2;
    const ph = Math.acos(2 * r() - 1);
    const rad = 0.8 + r() * 1.05;
    const cloud: [number, number, number] = [
      rad * Math.sin(ph) * Math.cos(th) * 1.25,
      rad * Math.cos(ph) * 0.8,
      rad * Math.sin(ph) * Math.sin(th),
    ];
    const g = r() * 0.35;
    const cloudCol: RGB = r() < 0.12 ? MINT : [60 + g * 255, 60 + g * 255, 60 + g * 255];
    // 1: imagem (grade); pixels a mais ficam atrás, apagados
    const gi = i % (cols * rows);
    const gx = gi % cols;
    const gy = Math.floor(gi / cols);
    const extra = i >= cols * rows;
    const grid: [number, number, number] = [
      (gx / (cols - 1) - 0.5) * 2.9,
      (gy / (rows - 1) - 0.5) * 1.85,
      extra ? -0.6 - r() : 0,
    ];
    const gridCol = extra ? ([30, 30, 30] as RGB) : imageColor(gx / (cols - 1), gy / (rows - 1));
    // 2: logo
    const lp = pick[i];
    const logoPos: [number, number, number] = [((lp.p[0] - 33) / 64) * 3.1, ((lp.p[1] - 32) / 64) * 3.1, 0];
    cubes.push({
      pos: [cloud, grid, logoPos],
      col: [cloudCol, gridCol, lp.c],
      delay: r(),
      lift: 0.4 + r() * 0.9,
      drift: r() * Math.PI * 2,
    });
  }
  return cubes;
}

// Em que forma a cena está (0 a 2), a partir do progresso dentro da seção do filme.
function stageFrom(f: number) {
  if (f < 0.14) return 0;
  if (f < 0.4) return ease((f - 0.14) / 0.26);
  if (f < 0.56) return 1;
  if (f < 0.82) return 1 + ease((f - 0.56) / 0.26);
  return 2;
}

export function startFilm(canvas: HTMLCanvasElement, film: HTMLElement, captions: HTMLElement[]) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cubes = build();
  let w = 0;
  let h = 0;
  let dpr = 1;
  let raf = 0;
  let current = -1;

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
  };
  resize();
  window.addEventListener("resize", resize);

  const draw = (time: number) => {
    const rect = film.getBoundingClientRect();
    const travel = rect.height - h;
    const f = clamp(-rect.top / Math.max(1, travel));
    let s = stageFrom(f);
    if (reduce) s = Math.round(s);

    // opacidade do fundo: média na abertura, total no filme, baixa no resto do site
    const before = rect.top > 0;
    const after = rect.bottom < h;
    let alpha = 1;
    if (before) alpha = mix(1, 0.26, clamp(rect.top / (h * 0.6)));
    else if (after) alpha = mix(1, 0.13, clamp((h - rect.bottom) / (h * 0.6)));
    canvas.style.opacity = String(alpha);

    // legendas
    const idx = s < 0.5 ? 0 : s < 1.5 ? 1 : 2;
    if (idx !== current) {
      captions.forEach((c, i) => c.toggleAttribute("data-on", i === idx));
      current = idx;
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    const wide = w >= 1024;
    const cx = wide ? w * 0.64 : w * 0.5;
    const cy = wide ? h * 0.52 : h * 0.4;
    const focal = Math.min(wide ? w * 0.5 : w * 0.95, h * 0.95) * 1.05;
    const cam = 4.2;
    const t = reduce ? 0 : time / 1000;
    const yaw = s < 1 ? mix(0.6 + Math.sin(t * 0.15) * 0.25, -0.32, ease(s)) : mix(-0.32, 0.3, ease(s - 1));
    const pitch = s < 1 ? mix(0.25, 0.1, s) : mix(0.1, -0.06, s - 1);
    const cyw = Math.cos(yaw);
    const syw = Math.sin(yaw);
    const cp = Math.cos(pitch);
    const sp = Math.sin(pitch);

    const pts: { x: number; y: number; z: number; size: number; c: RGB }[] = [];
    for (const k of cubes) {
      const a = Math.min(1, Math.floor(s));
      const b = Math.min(2, a + 1);
      const m = s - a;
      const local = clamp((m - k.delay * 0.35) / 0.65);
      const e = ease(local);
      const pa = k.pos[a];
      const pb = k.pos[b];
      let x = mix(pa[0], pb[0], e);
      let y = mix(pa[1], pb[1], e);
      let z = mix(pa[2], pb[2], e) + Math.sin(Math.PI * local) * k.lift;
      if (s < 0.999 && !reduce) {
        const d = (1 - e) * (a === 0 ? 1 : 0);
        x += Math.sin(t * 0.5 + k.drift) * 0.05 * d;
        y += Math.cos(t * 0.4 + k.drift) * 0.05 * d;
      }
      const c = mixC(k.col[a], k.col[b], e);
      // gira
      const x1 = x * cyw + z * syw;
      const z1 = -x * syw + z * cyw;
      const y1 = y * cp - z1 * sp;
      const z2 = y * sp + z1 * cp;
      const persp = focal / (cam - z2);
      pts.push({
        x: cx + x1 * persp,
        y: cy + y1 * persp,
        z: z2,
        size: (s < 1 ? mix(0.1, 0.12, s) : mix(0.12, 0.095, s - 1)) * persp,
        c,
      });
    }
    pts.sort((p, q) => p.z - q.z);

    for (const p of pts) {
      const sz = Math.max(1.5, p.size);
      const d = sz * 0.32; // profundidade do cubo
      const fog = clamp(0.55 + (p.z + 2) * 0.22, 0.35, 1);
      const [r0, g0, b0] = p.c;
      const front = `rgb(${r0 * fog | 0},${g0 * fog | 0},${b0 * fog | 0})`;
      const top = `rgb(${Math.min(255, r0 * fog * 1.18 + 14) | 0},${Math.min(255, g0 * fog * 1.18 + 14) | 0},${Math.min(255, b0 * fog * 1.18 + 14) | 0})`;
      const side = `rgb(${r0 * fog * 0.58 | 0},${g0 * fog * 0.58 | 0},${b0 * fog * 0.58 | 0})`;
      const x0 = p.x - sz / 2;
      const y0 = p.y - sz / 2;
      // luz vem de cima à esquerda: topo claro, lado direito escuro
      ctx.fillStyle = top;
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x0 + d, y0 - d);
      ctx.lineTo(x0 + sz + d, y0 - d);
      ctx.lineTo(x0 + sz, y0);
      ctx.fill();
      ctx.fillStyle = side;
      ctx.beginPath();
      ctx.moveTo(x0 + sz, y0);
      ctx.lineTo(x0 + sz + d, y0 - d);
      ctx.lineTo(x0 + sz + d, y0 + sz - d);
      ctx.lineTo(x0 + sz, y0 + sz);
      ctx.fill();
      ctx.fillStyle = front;
      ctx.fillRect(x0, y0, sz, sz);
    }
  };

  const loop = (time: number) => {
    draw(time);
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", resize);
  };
}
