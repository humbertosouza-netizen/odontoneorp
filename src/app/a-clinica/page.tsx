import Link from "next/link";
import { WHATSAPP_LINK, ENDERECO, CIDADE, CEP, GOOGLE_MAPS_LINK } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Clínica | OdontoNeo Infinity – São José do Rio Preto",
  description:
    "Conheça a OdontoNeo Infinity: uma clínica odontológica premium em São José do Rio Preto – SP, com estrutura moderna, equipamentos de última geração e um atendimento verdadeiramente humanizado.",
};

const PILARES = [
  {
    numero: "01",
    titulo: "Tecnologia de ponta",
    descricao:
      "Scanner 3D, radiografia panorâmica digital, laser e anestesia computadorizada — para diagnósticos precisos e procedimentos sem desconforto.",
    foto: "/tecnologia-2.jpg",
    objectPosition: "center center",
  },
  {
    numero: "02",
    titulo: "Atendimento humanizado",
    descricao:
      "Cada paciente é único. Do primeiro contato ao resultado final, o foco é exclusivamente em você — com escuta genuína e planejamento individualizado.",
    foto: "/foto-principal.jpg",
    objectPosition: "center center",
  },
  {
    numero: "03",
    titulo: "Excelência estética",
    descricao:
      "Unimos ciência e arte para entregar sorrisos que transformam vidas. Do implante à lente de contato dental, o padrão de qualidade nunca é negociado.",
    foto: "/protase-feita-4.jpeg",
    objectPosition: "center top",
  },
  {
    numero: "04",
    titulo: "Ambiente premium",
    descricao:
      "Salas privativas, climatização, design contemporâneo e uma recepção que transmite acolhimento — porque a experiência começa antes mesmo do atendimento.",
    foto: "/recepcao-ampla.jpg",
    objectPosition: "center center",
  },
];

const FOTOS_ESTRUTURA = [
  "/Flow_IMG_20250430_174230_01_060.JPG",
  "/Flow_IMG_20250430_174244_01_063.JPG",
  "/Flow_IMG_20250430_174301_01_064.JPG",
  "/Flow_IMG_20250430_174435_01_073.JPG",
  "/Flow_IMG_20250430_174447_01_075.JPG",
  "/Flow_IMG_20250430_174459_01_077.JPG",
  "/Flow_IMG_20250430_174508_01_079.JPG",
  "/Flow_IMG_20250430_174515_01_080.JPG",
  "/Flow_IMG_20250430_174527_01_082.JPG",
  "/Flow_IMG_20250430_174537_01_083.JPG",
  "/Flow_IMG_20250430_174542_01_084.JPG",
  "/Flow_IMG_20250430_174556_01_085.JPG",
  "/Flow_IMG_20250430_174617_01_086.JPG",
  "/Flow_IMG_20250430_174641_01_088.JPG",
  "/Flow_IMG_20250430_174652_01_089.JPG",
  "/Flow_IMG_20250430_174707_01_090.JPG",
  "/Flow_IMG_20250430_174727_01_092.JPG",
  "/Flow_IMG_20250430_174730_01_093.JPG",
  "/Flow_IMG_20250430_174745_01_094.JPG",
  "/Flow_IMG_20250430_175235_01_132.JPG",
  "/Flow_IMG_20250430_175241_01_133.JPG",
  "/Flow_IMG_20250430_175253_01_134.JPG",
  "/Flow_IMG_20250430_175302_01_136.JPG",
  "/Flow_IMG_20250430_175309_01_137.JPG",
  "/Flow_IMG_20250430_175320_01_139.JPG",
  "/Flow_IMG_20250430_175333_01_141.JPG",
  "/Flow_IMG_20250430_175346_01_142.JPG",
  "/Flow_IMG_20250430_175438_01_143.JPG",
  "/Flow_IMG_20250430_175506_01_145.JPG",
  "/Flow_IMG_20250430_175555_01_150.JPG",
  "/Flow_IMG_20250430_175645_01_152.JPG",
  "/Flow_IMG_20250430_175653_01_154.JPG",
  "/Flow_IMG_20250430_175701_01_155.JPG",
  "/Flow_IMG_20250430_175718_01_157.JPG",
  "/Flow_IMG_20250430_175723_01_158.JPG",
  "/Flow_IMG_20250430_175729_01_159.JPG",
  "/Flow_IMG_20250430_175745_01_160.JPG",
  "/Flow_IMG_20250430_175834_01_161.JPG",
  "/Flow_IMG_20250430_175840_01_162.JPG",
  "/Flow_IMG_20250430_175952_01_166.JPG",
  "/Flow_IMG_20250430_180001_01_168.JPG",
  "/Flow_IMG_20250430_180331_01_175.JPG",
];

export default function AClinicaPage() {
  return (
    <main className="min-h-screen" style={{ background: "#080F1E" }}>

      {/* ── Hero ── */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: "clamp(340px, 55vh, 620px)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/recepcao-ampla.jpg"
          alt="Recepção da OdontoNeo Infinity"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,15,30,1) 0%, rgba(8,15,30,0.55) 55%, rgba(8,15,30,0.1) 100%)" }} />
        <div className="relative z-10 w-full px-6 pb-16 sm:px-12 lg:px-20">
          <Link href="/" className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-white/40 transition-colors hover:text-white/70">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Voltar
          </Link>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: "#D4A11E" }}>
            São José do Rio Preto – SP
          </p>
          <h1 className="font-serif font-semibold text-white" style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)", letterSpacing: "-0.02em", lineHeight: 1.08 }}>
            A Clínica
          </h1>
        </div>
      </section>

      {/* ── Nossa história — split com foto Netflix ── */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-28">
        {/* Texto */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="block h-px w-6" style={{ background: "#D4A11E" }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#D4A11E" }}>Nossa história</span>
          </div>
          <h2 className="font-serif mb-6 font-semibold italic leading-tight" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "#D4A11E", letterSpacing: "-0.01em" }}>
            OdontoNeo Infinity
          </h2>
          <p className="mb-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)", maxWidth: "46ch" }}>
            A OdontoNeo Infinity nasceu de um propósito claro: oferecer odontologia de verdadeiro
            alto padrão em São José do Rio Preto – SP, unindo tecnologia de última geração com
            um atendimento genuinamente humano.
          </p>
          <p className="mb-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.45)", maxWidth: "46ch" }}>
            Fundada pelo Dr. Gustavo Giolo, a clínica foi construída com atenção a cada detalhe —
            da estrutura física ao protocolo clínico — para que cada paciente sinta que está sendo
            cuidado de forma especial.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.45)", maxWidth: "46ch" }}>
            Hoje somos referência em implantodontia, estética dental e reabilitação oral na região,
            com centenas de pacientes que confiaram em nós para transformar seus sorrisos.
          </p>
        </div>

        {/* Foto Netflix — portrait */}
        <div
          className="group relative overflow-hidden rounded-2xl"
          style={{ aspectRatio: "3/4", boxShadow: "0 8px 48px rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/foto-principal.jpg"
            alt="OdontoNeo Infinity"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ objectPosition: "center center" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,15,30,0.8) 0%, rgba(8,15,30,0.1) 60%, transparent 100%)" }} />
          <div className="absolute bottom-5 left-5">
            <div className="mb-2 h-px w-8" style={{ background: "#D4A11E" }} />
            <p className="font-serif text-sm font-semibold text-white">OdontoNeo Infinity</p>
            <p className="text-[11px]" style={{ color: "rgba(212,161,30,0.8)" }}>São José do Rio Preto – SP</p>
          </div>
        </div>
      </section>

      {/* ── Pilares — 4 cards Netflix 2×2 ── */}
      <section className="border-t px-4 pb-16 pt-12 sm:px-8 lg:px-12" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="mx-auto mb-10 max-w-7xl">
          <div className="mb-3 flex items-center gap-3">
            <span className="block h-px w-6" style={{ background: "#D4A11E" }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#D4A11E" }}>Por que a OdontoNeo</span>
          </div>
          <h2 className="font-serif font-semibold text-white" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", letterSpacing: "-0.01em" }}>
            Nossos Pilares
          </h2>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {PILARES.map((p) => (
            <div
              key={p.numero}
              className="group relative overflow-hidden rounded-2xl"
              style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="relative w-full" style={{ aspectRatio: "2/3" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.foto}
                  alt={p.titulo}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ objectPosition: p.objectPosition }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,10,22,0.98) 0%, rgba(5,10,22,0.6) 45%, rgba(5,10,22,0.08) 100%)" }} />
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/15" />

                {/* Número topo */}
                <div className="absolute left-4 top-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full font-mono text-[10px] font-bold"
                    style={{ background: "rgba(212,161,30,0.18)", border: "1px solid rgba(212,161,30,0.5)", color: "#D4A11E" }}>
                    {p.numero}
                  </span>
                </div>

                {/* Conteúdo base */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="mb-3 h-px transition-all duration-500 group-hover:w-10" style={{ width: "20px", background: "#D4A11E" }} />
                  <h3 className="font-serif mb-2 font-semibold leading-tight text-white" style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)", letterSpacing: "-0.01em" }}>
                    {p.titulo}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)", maxWidth: "32ch" }}>
                    {p.descricao}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Nossa Estrutura — grid de fotos Netflix ── */}
      <section className="border-t px-4 pb-16 pt-12 sm:px-8 lg:px-12" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="mx-auto mb-10 max-w-7xl flex items-end justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="block h-px w-6" style={{ background: "#D4A11E" }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#D4A11E" }}>Estrutura</span>
            </div>
            <h2 className="font-serif font-semibold text-white" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", letterSpacing: "-0.01em" }}>
              Nossa Clínica
            </h2>
          </div>
          <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer"
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-70"
            style={{ color: "#D4A11E" }}>
            Ver no Maps
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
          {FOTOS_ESTRUTURA.map((src) => (
            <div
              key={src}
              className="group relative overflow-hidden rounded-xl"
              style={{ aspectRatio: "3/4", boxShadow: "0 4px 24px rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt="OdontoNeo Infinity"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: "center center" }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="border-t py-20 text-center" style={{ background: "#0C1829", borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #D4A11E 0%, transparent 70%)" }} aria-hidden />
          <div className="relative px-6">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: "#D4A11E" }}>Venha nos visitar</p>
            <h2 className="font-serif mx-auto mb-3 font-semibold text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", maxWidth: "20ch" }}>
              Conheça a clínica pessoalmente
            </h2>
            <p className="mx-auto mb-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)", maxWidth: "44ch" }}>
              {ENDERECO} — {CIDADE} — {CEP}
            </p>
            <p className="mx-auto mb-10 text-xs uppercase tracking-widest" style={{ color: "rgba(212,161,30,0.6)" }}>
              Seg – Sex 08h às 19h · Sáb 08h às 12h
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ background: "#25D366", boxShadow: "0 6px 24px rgba(37,211,102,0.4)" }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                Clique no botão abaixo e fale comigo
              </a>
              <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl border-2 px-8 py-4 text-sm font-bold text-white/70 transition-colors hover:text-white"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                Ver no Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
