import type { Metadata, Viewport } from "next";
import { EB_Garamond, Host_Grotesk } from "next/font/google";
import "./globals.css";

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-garamond",
  display: "swap",
});

const host = Host_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-host",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Camer IA — Cursos de imagens e vídeos com IA",
  description:
    "Dois cursos curtos e práticos para criar imagens e vídeos com inteligência artificial. 12 aulas em texto cada, R$ 29,90. Aprender. Imaginar. Transformar.",
  openGraph: {
    title: "Camer IA — Cursos de imagens e vídeos com IA",
    description: "12 aulas em texto por curso, R$ 29,90. Aprender. Imaginar. Transformar.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${garamond.variable} ${host.variable}`}>
      <body>{children}</body>
    </html>
  );
}
