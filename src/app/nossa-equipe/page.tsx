import Link from "next/link";
import { DENTISTA, CRO } from "@/lib/constants";
import WhatsAppLink from "@/components/WhatsAppLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nossa Equipe | OdontoNeo Infinity – São José do Rio Preto",
  description:
    "Conheça Dr. Gustavo Giolo e a equipe da OdontoNeo Infinity: especialistas em implantodontia, estética dental e reabilitação oral em São José do Rio Preto – SP.",
};

const DIFERENCIAIS = [
  { texto: "Mais de 3.000 pacientes atendidos" },
  { texto: "Referência em implantodontia na região" },
  { texto: "Formação contínua em centros nacionais e internacionais" },
  { texto: "Atendimento humanizado e foco total no paciente" },
];

export default function NossaEquipePage() {
  return (
    <main className="min-h-screen" style={{ background: "#080F1E" }}>

      {/* ── Hero ── */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: "clamp(340px, 55vh, 620px)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/equipe.jpg" alt="Equipe OdontoNeo Infinity"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,15,30,1) 0%, rgba(8,15,30,0.55) 55%, rgba(8,15,30,0.1) 100%)" }} />
        <div className="relative z-10 w-full px-6 pb-16 sm:px-12 lg:px-20">
          <Link href="/" className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-white/40 transition-colors hover:text-white/70">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Voltar
          </Link>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: "#D4A11E" }}>OdontoNeo Infinity</p>
          <h1 className="font-serif font-semibold text-white" style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)", letterSpacing: "-0.02em", lineHeight: 1.08 }}>
            Nossa Equipe
          </h1>
        </div>
      </section>

      {/* ── Perfil Dr. Gustavo — card Netflix + texto ── */}
      <section className="mx-auto grid max-w-6xl items-start gap-10 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-28">

        {/* Card Netflix — foto portrait */}
        <div className="lg:sticky lg:top-28">
          <div
            className="group relative overflow-hidden rounded-2xl"
            style={{ aspectRatio: "3/4", boxShadow: "0 8px 48px rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/foto-dr-gustavo-2.jpeg"
              alt={DENTISTA}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: "top center" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,15,30,0.95) 0%, rgba(8,15,30,0.15) 55%, transparent 100%)" }} />

            {/* Badge CRO */}
            <div className="absolute left-4 top-4">
              <span
                className="rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em]"
                style={{ background: "rgba(212,161,30,0.18)", border: "1px solid rgba(212,161,30,0.5)", color: "#D4A11E" }}
              >
                {CRO}
              </span>
            </div>

            {/* Info base do card */}
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="mb-3 h-px w-8" style={{ background: "#D4A11E" }} />
              <p className="font-serif text-lg font-semibold text-white">{DENTISTA}</p>
              <p className="mt-1 text-[11px] font-medium" style={{ color: "rgba(212,161,30,0.85)" }}>
                Implantodontista · Reabilitação Oral · Fundador
              </p>
            </div>
          </div>
        </div>

        {/* Conteúdo textual */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="block h-px w-6" style={{ background: "#D4A11E" }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#D4A11E" }}>Fundador &amp; Responsável Técnico</span>
          </div>

          <h2 className="font-serif mb-6 font-semibold leading-tight text-white" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", letterSpacing: "-0.01em" }}>
            Dr. Gustavo Giolo
          </h2>

          <p className="mb-4 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            Especialista em implantodontia e reabilitação oral, o Dr. Gustavo fundou a OdontoNeo
            Infinity com o propósito de oferecer odontologia de alto padrão em São José do Rio
            Preto — unindo tecnologia, estética e um atendimento genuinamente humanizado.
          </p>
          <p className="mb-10 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            Com uma abordagem acolhedora e foco total no bem-estar do paciente, utiliza os
            protocolos mais avançados para garantir resultados duradouros — do implante mais
            complexo ao sorriso que você sempre sonhou.
          </p>

          {/* Diferenciais */}
          <ul className="mb-10 flex flex-col gap-3">
            {DIFERENCIAIS.map((d, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "rgba(212,161,30,0.15)", border: "1px solid rgba(212,161,30,0.4)" }}
                >
                  <svg viewBox="0 0 12 12" fill="none" stroke="#D4A11E" strokeWidth={1.8} className="h-3 w-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l2.5 2.5L10 3.5" />
                  </svg>
                </span>
                <span className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.6)" }}>{d.texto}</span>
              </li>
            ))}
          </ul>

          {/* CTA WhatsApp */}
          <WhatsAppLink
            message="Olá! Gostaria de mais informações sobre a equipe."
            page="Nossa Equipe"
            section="CTA equipe"
            className="inline-flex items-center gap-3 rounded-xl px-7 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: "#25D366", boxShadow: "0 6px 24px rgba(37,211,102,0.35)" }}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
            Clique no botão abaixo e fale comigo
          </WhatsAppLink>
        </div>
      </section>

      {/* ── Time ── */}
      <section className="border-t px-4 pb-16 pt-12 sm:px-8 lg:px-12" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="mx-auto mb-10 max-w-7xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="block h-px w-8" style={{ background: "#D4A11E" }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#D4A11E" }}>Time completo</span>
            <span className="block h-px w-8" style={{ background: "#D4A11E" }} />
          </div>
          <h2 className="font-serif font-semibold text-white" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
            Toda a clínica a seu serviço
          </h2>
          <p className="mx-auto mt-2 text-sm" style={{ color: "rgba(255,255,255,0.35)", maxWidth: "44ch" }}>
            Auxiliares, secretárias e especialistas parceiros treinados para oferecer a melhor experiência.
          </p>
        </div>

        <div className="mx-auto flex max-w-sm justify-center">
          <div
            className="group relative w-full overflow-hidden rounded-2xl"
            style={{ aspectRatio: "3/4", boxShadow: "0 4px 32px rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/foto-dr-gustavo-2.jpeg"
              alt="Dr. Gustavo Giolo"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: "top center" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,15,30,0.95) 0%, rgba(8,15,30,0.1) 55%, transparent 100%)" }} />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="mb-2 h-px w-6" style={{ background: "#D4A11E" }} />
              <p className="font-serif text-base font-semibold text-white">Dr. Gustavo Giolo</p>
              <p className="text-[11px] font-medium" style={{ color: "#D4A11E" }}>Implantodontista · Diretor Clínico</p>
              <p className="mt-1 text-[10px]" style={{ color: "rgba(255,255,255,0.35)" }}>{CRO}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="border-t py-20 text-center" style={{ background: "#1F3A5F", borderColor: "rgba(255,255,255,0.06)" }}>
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: "#D4A11E" }}>Próximo passo</p>
        <h2 className="font-serif mx-auto mb-4 font-semibold text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", maxWidth: "20ch" }}>
          Agende com a OdontoNeo
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-white/55">
          Nossa equipe está pronta para oferecer um atendimento individualizado para o seu sorriso.
        </p>
        <WhatsAppLink
          message="Olá! Gostaria de agendar uma avaliação."
          page="Nossa Equipe"
          section="CTA final"
          className="inline-flex items-center gap-2.5 rounded-xl px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
          style={{ background: "#25D366", boxShadow: "0 6px 24px rgba(37,211,102,0.4)" }}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
          Clique no botão abaixo e fale comigo
        </WhatsAppLink>
      </section>
    </main>
  );
}
