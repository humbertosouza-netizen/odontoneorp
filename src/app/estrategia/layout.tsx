import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Estratégia de Palavras-chave | OdontoNeo Infinity",
  description: "Estratégia de SEO e campanhas – palavras-chave para implantes, estética e marca em São José do Rio Preto.",
  robots: "noindex, nofollow",
};

export default function EstrategiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen" style={{ background: "#EAF0F6" }}>
      <header
        className="sticky top-0 z-40 border-b"
        style={{ background: "#1F3A5F", borderColor: "rgba(255,255,255,0.1)" }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Voltar ao site"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </Link>
            <div>
              <h1 className="text-lg font-bold text-white">Estratégia de Palavras-chave</h1>
              <p className="text-xs text-white/50">SEO & Campanhas · OdontoNeo Infinity</p>
            </div>
          </div>
          <Link
            href="/analisecampanha"
            className="hidden rounded-xl px-4 py-2 text-xs font-bold text-white/80 transition-colors hover:bg-white/10 hover:text-white sm:inline-flex"
          >
            Análise de Campanha →
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
