import Link from "next/link";
import type { Metadata } from "next";
import WhatsAppLink from "@/components/WhatsAppLink";

export const metadata: Metadata = {
  title: "Tratamentos | OdontoNeo Infinity – São José do Rio Preto",
  description:
    "Implantes dentários, prótese protocolo, lentes de contato dental, alinhador transparente. Clínica odontológica premium em São José do Rio Preto – SP.",
};

const TRATAMENTOS = [
  {
    numero: "01",
    titulo: "Lentes de Contato\nDental",
    subtitulo: "Estética & Facetas de Porcelana",
    descricao:
      "Planejadas digitalmente para harmonizar com a simetria do seu rosto. Finas lâminas de porcelana que transformam cor, forma e tamanho em poucas sessões.",
    foto: "/lente.jpg",
    href: "/lentes-de-contato-dental",
    objectPosition: "center top",
  },
  {
    numero: "02",
    titulo: "Implantes e Prótese\nProtocolo",
    subtitulo: "Reabilitação Oral & Carga Imediata",
    descricao:
      "Recuperação rápida e precisão milimétrica para você mastigar com firmeza. Do dente único à reabilitação total — resultados definitivos.",
    foto: "/protose protoclo.jpg",
    href: "/implante-dentario-e-protocolo",
    objectPosition: "center center",
  },
  {
    numero: "03",
    titulo: "Alinhadores\nTransparentes",
    subtitulo: "Ortodontia Invisível",
    descricao:
      "O conforto da ortodontia invisível sem os fios metálicos. Removível, discreto e planejado digitalmente com previsão do resultado final.",
    foto: "/tratamentos.jpeg",
    href: "/alinhadores-invisiveis",
    objectPosition: "center center",
  },
];

export default function TratamentosPage() {
  return (
    <main className="min-h-screen bg-[#080F1E]">

      {/* ── Hero ── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: "clamp(280px, 40vh, 480px)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/protase-feita-4.jpeg"
          alt="Resultado real OdontoNeo"
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center 40%",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,15,30,1) 0%, rgba(8,15,30,0.55) 55%, rgba(8,15,30,0.1) 100%)" }} />

        <div className="relative z-10 w-full px-6 pb-14 sm:px-12 lg:px-20">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-white/40 transition-colors hover:text-white/70"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Voltar
          </Link>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: "#D4A11E" }}>
            OdontoNeo Infinity
          </p>
          <h1
            className="font-serif font-semibold text-white"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)", letterSpacing: "-0.02em", lineHeight: 1.08 }}
          >
            Nossos Tratamentos
          </h1>
        </div>
      </section>

      {/* ── Cards Netflix ── */}
      <section className="px-4 pb-16 pt-10 sm:px-8 lg:px-12 lg:pb-24">

        {/* Grid: 1 col mobile → 3 col desktop */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {TRATAMENTOS.map((t) => (
            <Link
              key={t.titulo}
              href={t.href}
              className="group relative overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A11E]"
              style={{
                display: "block",
                boxShadow: "0 4px 32px rgba(0,0,0,0.5)",
              }}
            >
              {/* Imagem de fundo — altura Netflix */}
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "2/3", minHeight: "420px" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.foto}
                  alt={t.titulo}
                  className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ objectFit: "cover", objectPosition: t.objectPosition }}
                />

                {/* Gradiente de legibilidade */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(5,10,22,0.97) 0%, rgba(5,10,22,0.6) 45%, rgba(5,10,22,0.1) 100%)",
                  }}
                />

                {/* Número + subtítulo — topo */}
                <div className="absolute left-5 top-5 flex items-center gap-2.5">
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-full font-mono text-[10px] font-bold"
                    style={{ background: "rgba(212,161,30,0.18)", border: "1px solid rgba(212,161,30,0.5)", color: "#D4A11E" }}
                  >
                    {t.numero}
                  </span>
                  <span
                    className="rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em]"
                    style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.5)" }}
                  >
                    {t.subtitulo}
                  </span>
                </div>

                {/* Conteúdo — bottom */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  {/* Linha dourada */}
                  <div
                    className="mb-3 h-px transition-all duration-500 group-hover:w-12"
                    style={{ width: "28px", background: "#D4A11E" }}
                  />

                  <h2
                    className="font-serif mb-3 whitespace-pre-line font-semibold leading-tight text-white"
                    style={{ fontSize: "clamp(1.35rem, 2.2vw, 1.75rem)", letterSpacing: "-0.01em" }}
                  >
                    {t.titulo}
                  </h2>

                  <p
                    className="mb-6 text-sm leading-relaxed transition-opacity duration-500 group-hover:opacity-100"
                    style={{ color: "rgba(255,255,255,0.55)", maxWidth: "34ch", opacity: 0.8 }}
                  >
                    {t.descricao}
                  </p>

                  {/* Botão "Saiba mais" */}
                  <span
                    className="inline-flex items-center gap-2.5 rounded-xl px-5 py-2.5 text-sm font-bold transition-all duration-300 group-hover:gap-4"
                    style={{
                      background: "rgba(212,161,30,0.12)",
                      border: "1px solid rgba(212,161,30,0.4)",
                      color: "#D4A11E",
                    }}
                  >
                    Saiba mais
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Rodapé dos cards */}
        <p className="mt-10 text-center text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
          Clique em cada tratamento para conhecer todos os detalhes
        </p>
      </section>

      {/* ── CTA Final ── */}
      <section
        className="relative overflow-hidden border-t py-24 text-center"
        style={{ background: "#0C1829", borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #D4A11E 0%, transparent 70%)" }}
          aria-hidden
        />
        <div className="relative px-6">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="block h-px w-10" style={{ background: "#D4A11E" }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: "#D4A11E" }}>
              Avaliação gratuita
            </span>
            <span className="block h-px w-10" style={{ background: "#D4A11E" }} />
          </div>
          <h2
            className="font-serif mx-auto mb-4 font-semibold text-white"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", maxWidth: "20ch", lineHeight: 1.15 }}
          >
            Ainda tem dúvidas sobre qual tratamento é o seu?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            Fale com nossa equipe. Em uma conversa rápida pelo WhatsApp, já identificamos
            o melhor caminho para o seu sorriso.
          </p>
          <WhatsAppLink
            className="inline-flex items-center gap-2.5 rounded-xl px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: "#25D366", boxShadow: "0 6px 24px rgba(37,211,102,0.35)" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Clique no botão abaixo e fale comigo
          </WhatsAppLink>
        </div>
      </section>
    </main>
  );
}
