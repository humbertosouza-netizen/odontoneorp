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
      "Investimos continuamente nos melhores equipamentos do mercado — scanner 3D, tomografia CBCT, laser e anestesia indolor — para garantir diagnósticos precisos e procedimentos confortáveis.",
  },
  {
    numero: "02",
    titulo: "Atendimento humanizado",
    descricao:
      "Cada paciente é único. Nosso protocolo começa pela escuta, passa pelo planejamento individualizado e chega ao resultado que você sempre desejou — com cuidado em cada etapa.",
  },
  {
    numero: "03",
    titulo: "Excelência estética",
    descricao:
      "Unimos ciência e arte para entregar sorrisos que transformam vidas. Do implante à lente de contato dental, o padrão de qualidade é sempre o mais alto disponível.",
  },
  {
    numero: "04",
    titulo: "Ambiente premium",
    descricao:
      "A clínica foi projetada para que você se sinta acolhido desde a chegada. Salas privativas, climatização, design contemporâneo e um ambiente que transmite confiança.",
  },
];


export default function AClinicaPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: "clamp(340px, 55vh, 620px)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/recepcao-ampla.jpg"
          alt="Recepção da OdontoNeo Infinity"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,10,22,0.92) 0%, rgba(5,10,22,0.4) 60%, rgba(5,10,22,0.05) 100%)" }} />
        <div className="relative z-10 w-full px-6 pb-16 sm:px-12 lg:px-20">
          <Link href="/" className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-white/50 transition-colors hover:text-white/80">
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

      {/* ── Apresentação — layout Vitta ── */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-28">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="block h-px w-8" style={{ background: "#D4A11E" }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#D4A11E" }}>
              Nossa história
            </span>
          </div>
          <h2 className="font-serif mb-6 font-semibold italic leading-tight" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "#D4A11E", letterSpacing: "-0.01em" }}>
            OdontoNeo Infinity
          </h2>
          <p className="mb-4 text-base leading-relaxed" style={{ color: "#4A4A4A", maxWidth: "46ch" }}>
            A OdontoNeo Infinity nasceu de um propósito claro: oferecer odontologia de verdadeiro
            alto padrão em São José do Rio Preto – SP, unindo tecnologia de última geração com
            um atendimento genuinamente humano.
          </p>
          <p className="mb-4 text-base leading-relaxed" style={{ color: "#7A8694", maxWidth: "46ch" }}>
            Fundada pelo Dr. Gustavo Giolo, a clínica foi construída com atenção a cada detalhe —
            da estrutura física ao protocolo clínico — para que cada paciente sinta que está sendo
            cuidado de forma especial.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#7A8694", maxWidth: "46ch" }}>
            Hoje somos referência em implantodontia, estética dental e reabilitação oral na região,
            com centenas de pacientes que confiaram em nós para transformar seus sorrisos e,
            com isso, suas vidas.
          </p>
        </div>

        {/* Foto */}
        <div className="relative">
          <div className="absolute -right-3 -top-3 h-full w-full rounded-2xl" style={{ background: "#EAF0F6", zIndex: 0 }} />
          <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "4/5", zIndex: 1 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/foto-principal.jpg" alt="OdontoNeo Infinity" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
          </div>
        </div>
      </section>

      {/* ── Pilares ── */}
      <section className="py-20 sm:py-24 lg:py-28" style={{ background: "#F7F4EE" }}>
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
          <div className="mb-14 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="block h-px w-8" style={{ background: "#D4A11E" }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#D4A11E" }}>Por que a OdontoNeo</span>
              <span className="block h-px w-8" style={{ background: "#D4A11E" }} />
            </div>
            <h2 className="font-serif font-semibold" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", color: "#0E0E0E", letterSpacing: "-0.01em" }}>
              Nossos Pilares
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILARES.map((p) => (
              <div key={p.numero} className="rounded-2xl bg-white p-7" style={{ border: "1px solid #EDEDED", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <span className="font-serif mb-4 block text-4xl font-semibold leading-none opacity-15" style={{ color: "#1F3A5F" }}>
                  {p.numero}
                </span>
                <div className="mb-3 h-px w-8" style={{ background: "#D4A11E" }} />
                <h3 className="font-serif mb-3 font-semibold" style={{ fontSize: "1rem", color: "#0E0E0E" }}>
                  {p.titulo}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#7A8694" }}>{p.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Estrutura em fotos ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="font-serif font-semibold" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "#0E0E0E" }}>
            Nossa Estrutura
          </h2>
          <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-70" style={{ color: "#D4A11E" }}>
            Ver no Maps
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: "/recepcao-ampla.jpg", label: "Recepção Ampla", span: "lg:col-span-2" },
            { src: "/sala-atendimento.jpg", label: "Sala de Atendimento", span: "" },
            { src: "/recepcao.jpg", label: "Recepção", span: "" },
            { src: "/foto-clinica-1.jpg", label: "Área Interna", span: "lg:col-span-2" },
          ].map((f) => (
            <div key={f.src} className={`group relative overflow-hidden rounded-2xl ${f.span}`} style={{ aspectRatio: "16/10" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={f.src} alt={f.label} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", transition: "transform 0.5s ease" }} className="group-hover:scale-105" />
              <div className="absolute inset-0 flex items-end" style={{ background: "linear-gradient(to top, rgba(5,10,22,0.6) 0%, transparent 50%)" }}>
                <span className="px-5 py-4 text-xs font-bold uppercase tracking-widest text-white/80">{f.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 text-center" style={{ background: "#0C1829" }}>
        <div className="h-px mb-0 w-full" style={{ background: "linear-gradient(90deg, transparent, #D4A11E, transparent)" }} />
        <div className="px-6 py-16">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: "#D4A11E" }}>Venha nos visitar</p>
          <h2 className="font-serif mx-auto mb-3 font-semibold text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", maxWidth: "20ch" }}>
            Conheça a clínica pessoalmente
          </h2>
          <p className="mx-auto mb-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)", maxWidth: "44ch" }}>
            {ENDERECO} — {CIDADE} — {CEP}
          </p>
          <p className="mx-auto mb-10 text-xs uppercase tracking-widest" style={{ color: "rgba(212,161,30,0.6)" }}>
            Seg – Sex · 08h às 19h
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 rounded-xl px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ background: "#25D366", boxShadow: "0 6px 24px rgba(37,211,102,0.4)" }}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              Agendar visita
            </a>
            <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 rounded-xl border-2 px-8 py-4 text-sm font-bold text-white/70 transition-colors hover:text-white" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
              Ver no Google Maps
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
