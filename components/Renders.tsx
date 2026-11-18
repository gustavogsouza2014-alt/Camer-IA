// Ilustrações em SVG no estilo de render 3D. São desenhadas em código, não são fotos.
// Para usar renders reais, coloque o arquivo em /public e troque o componente por <img>.

export function StudioRender({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 640"
      className={className}
      role="img"
      aria-label="Ilustração: painel de um gerador de IA flutuando, com imagens e um vídeo criados a partir de um prompt"
    >
      <defs>
        <radialGradient id="sr-stage" cx="38%" cy="22%" r="85%">
          <stop offset="0" stopColor="#1d1d1d" />
          <stop offset=".55" stopColor="#0c0c0c" />
          <stop offset="1" stopColor="#050505" />
        </radialGradient>
        <radialGradient id="sr-floor" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#000" stopOpacity=".95" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sr-panel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a2a2a" />
          <stop offset="1" stopColor="#141414" />
        </linearGradient>
        <linearGradient id="sr-edge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5a5a5a" />
          <stop offset=".4" stopColor="#262626" />
          <stop offset="1" stopColor="#141414" />
        </linearGradient>
        <linearGradient id="sr-t1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#b9f5d8" />
          <stop offset=".5" stopColor="#6ee3ad" />
          <stop offset="1" stopColor="#1f7a55" />
        </linearGradient>
        <linearGradient id="sr-t2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0f3d2c" />
          <stop offset="1" stopColor="#06150f" />
        </linearGradient>
        <linearGradient id="sr-t3" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6ee3ad" />
          <stop offset="1" stopColor="#0e3526" />
        </linearGradient>
        <radialGradient id="sr-sphere" cx="35%" cy="30%" r="70%">
          <stop offset="0" stopColor="#d9fbe9" />
          <stop offset=".35" stopColor="#6ee3ad" />
          <stop offset="1" stopColor="#123f2d" />
        </radialGradient>
        <linearGradient id="sr-cubeTop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c8f7e0" />
          <stop offset="1" stopColor="#7fe6b7" />
        </linearGradient>
        <clipPath id="sr-screen">
          <rect x="0" y="0" width="300" height="360" rx="18" />
        </clipPath>
      </defs>

      <rect width="560" height="640" fill="url(#sr-stage)" />
      <ellipse cx="290" cy="560" rx="210" ry="30" fill="url(#sr-floor)" />

      {/* Painel flutuante em perspectiva */}
      <g transform="matrix(0.94 -0.16 0.10 0.97 118 150)">
        <rect x="-6" y="8" width="312" height="372" rx="22" fill="#060606" />
        <rect x="0" y="0" width="300" height="360" rx="18" fill="url(#sr-edge)" />
        <rect x="1.5" y="1.5" width="297" height="357" rx="17" fill="url(#sr-panel)" />
        <g clipPath="url(#sr-screen)">
          {/* barra do app */}
          <circle cx="22" cy="22" r="4" fill="#3b3b3b" />
          <circle cx="36" cy="22" r="4" fill="#3b3b3b" />
          <circle cx="50" cy="22" r="4" fill="#3b3b3b" />
          {/* prompt */}
          <rect x="16" y="40" width="268" height="44" rx="22" fill="#0b0b0b" stroke="#2c2c2c" />
          <rect x="34" y="57" width="150" height="6" rx="3" fill="#6b6b6b" />
          <rect x="34" y="68" width="96" height="5" rx="2.5" fill="#3b3b3b" />
          <circle cx="262" cy="62" r="14" fill="#6ee3ad" />
          <path d="m257 62 4 4 7-8" fill="none" stroke="#06150f" strokeWidth="2" strokeLinecap="round" />
          {/* imagens geradas */}
          <rect x="16" y="98" width="130" height="130" rx="12" fill="url(#sr-t1)" />
          <circle cx="104" cy="134" r="16" fill="#eafff4" opacity=".9" />
          <path d="M16 198 58 156 92 190 112 172 146 206V216a12 12 0 0 1-12 12H28a12 12 0 0 1-12-12Z" fill="#0f3d2c" />
          <rect x="154" y="98" width="130" height="130" rx="12" fill="url(#sr-t2)" />
          <circle cx="219" cy="163" r="40" fill="url(#sr-sphere)" />
          <rect x="16" y="236" width="268" height="108" rx="12" fill="url(#sr-t3)" />
          <path d="M16 316c50-30 90 10 140-14s80-26 128-6v36a12 12 0 0 1-12 12H28a12 12 0 0 1-12-12Z" fill="#0b2b1f" opacity=".85" />
          <circle cx="150" cy="282" r="20" fill="#000" opacity=".55" />
          <path d="M144 272v20l16-10Z" fill="#f9f8f9" />
          <rect x="30" y="328" width="240" height="3" rx="1.5" fill="#000" opacity=".4" />
          <rect x="30" y="328" width="92" height="3" rx="1.5" fill="#eafff4" />
        </g>
      </g>

      {/* objetos flutuantes, luz de cima à esquerda */}
      <g>
        <ellipse cx="452" cy="520" rx="40" ry="7" fill="#000" opacity=".7" />
        <circle cx="452" cy="420" r="44" fill="url(#sr-sphere)" />
        <ellipse cx="438" cy="398" rx="14" ry="8" fill="#fff" opacity=".35" />
      </g>
      <g transform="translate(76 470)">
        <ellipse cx="34" cy="74" rx="34" ry="6" fill="#000" opacity=".7" />
        <path d="M34 0 66 16 34 32 2 16Z" fill="url(#sr-cubeTop)" />
        <path d="M2 16 34 32V62L2 46Z" fill="#3fae7d" />
        <path d="M66 16 34 32V62L66 46Z" fill="#1f6e4c" />
      </g>
    </svg>
  );
}

const docVariants = [
  { rot: -5, x: 70, accent: "prompt" },
  { rot: 4, x: 92, accent: "frames" },
  { rot: -2, x: 80, accent: "list" },
] as const;

export function DocImage({ variant = 0 }: { variant?: 0 | 1 | 2 }) {
  const v = docVariants[variant];
  const id = `doc${variant}`;
  return (
    <svg viewBox="0 0 400 250" className="block h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1a1a1a" />
          <stop offset="1" stopColor="#0d0d0d" />
        </linearGradient>
        <linearGradient id={`${id}-paper`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f3f2f3" />
          <stop offset="1" stopColor="#d9d8d9" />
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill={`url(#${id}-bg)`} />
      <g transform={`translate(${v.x} 40) rotate(${v.rot} 130 110)`}>
        <rect x="6" y="10" width="250" height="260" rx="6" fill="#000" opacity=".55" />
        <rect width="250" height="260" rx="6" fill={`url(#${id}-paper)`} />
        <rect x="24" y="26" width="120" height="9" rx="2" fill="#2a2a2a" />
        <rect x="24" y="44" width="70" height="5" rx="2" fill="#8a8a8a" />
        {v.accent === "prompt" && (
          <>
            <rect x="24" y="66" width="202" height="38" rx="19" fill="none" stroke="#9a9a9a" />
            <rect x="40" y="81" width="120" height="6" rx="3" fill="#555" />
            {[120, 132, 144, 156, 168].map((y, i) => (
              <rect key={y} x="24" y={y} width={[202, 180, 196, 150, 188][i]} height="5" rx="2" fill="#a9a9a9" />
            ))}
          </>
        )}
        {v.accent === "frames" && (
          <>
            {[0, 1, 2].map((i) => (
              <rect key={i} x={24 + i * 70} y="66" width="62" height="46" rx="4" fill="#3a3a3a" />
            ))}
            {[0, 1].map((i) => (
              <path key={i} d={`M${86 + i * 70} 89h-4`} stroke="#3a3a3a" />
            ))}
            {[128, 140, 152, 164].map((y, i) => (
              <rect key={y} x="24" y={y} width={[196, 170, 190, 120][i]} height="5" rx="2" fill="#a9a9a9" />
            ))}
          </>
        )}
        {v.accent === "list" && (
          <>
            {[70, 96, 122, 148, 174].map((y, i) => (
              <g key={y}>
                <text x="24" y={y + 6} fontSize="11" fontFamily="Georgia, serif" fill="#2a2a2a">
                  {i + 1}.
                </text>
                <rect x="42" y={y} width={[170, 140, 182, 128, 160][i]} height="6" rx="3" fill="#8f8f8f" />
              </g>
            ))}
          </>
        )}
      </g>
    </svg>
  );
}
