import Link from "next/link";
import { WHATSAPP_LINK, DENTISTA, CRO } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nossa Equipe | OdontoNeo Infinity – São José do Rio Preto",
  description:
    "Conheça Dr. Gustavo Giolo e a equipe da OdontoNeo Infinity: especialistas em implantodontia, estética dental e reabilitação oral em São José do Rio Preto – SP.",
};


const DIFERENCIAIS = [
  {
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    texto: "Mais de 3.000 pacientes atendidos",
  },
  {
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    texto: "Referência em implantodontia na região",
  },
  {
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    texto: "Formação contínua em centros nacionais e internacionais",
  },
  {
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    texto: "Atendimento humanizado e foco total no paciente",
  },
];

export default function NossaEquipePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: "clamp(340px, 55vh, 620px)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/equipe.jpg" alt="Equipe OdontoNeo Infinity" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,10,22,0.92) 0%, rgba(5,10,22,0.45) 55%, rgba(5,10,22,0.05) 100%)" }} />
        <div className="relative z-10 w-full px-6 pb-16 sm:px-12 lg:px-20">
          <Link href="/" className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-white/50 transition-colors hover:text-white/80">
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

      {/* ── Perfil Dr. Gustavo — split layout ── */}
      <section className="mx-auto grid max-w-6xl items-start gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-28">

        {/* Foto */}
        <div className="relative lg:sticky lg:top-28">
          <div className="absolute -right-3 -top-3 h-full w-full rounded-2xl" style={{ background: "#EAF0F6", zIndex: 0 }} />
          <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4", zIndex: 1 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/foto-dr-gustavo-2.jpeg" alt={DENTISTA} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
            {/* Badge CRO */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-xl bg-white/95 px-4 py-3" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
              <span className="text-lg">🦷</span>
              <div>
                <p className="text-xs font-bold text-gray-800">{DENTISTA}</p>
                <p className="text-[11px] font-medium" style={{ color: "#D4A11E" }}>{CRO}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Conteúdo */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="block h-px w-8" style={{ background: "#D4A11E" }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#D4A11E" }}>Fundador & Responsável Técnico</span>
          </div>

          <h2 className="font-serif mb-6 font-semibold leading-tight" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "#0E0E0E", letterSpacing: "-0.01em" }}>
            Dr. Gustavo Giolo
          </h2>

          <p className="mb-4 text-base leading-relaxed" style={{ color: "#4A4A4A" }}>
            Especialista em implantodontia e reabilitação oral, o Dr. Gustavo fundou a OdontoNeo
            Infinity com o propósito de oferecer odontologia de alto padrão em São José do Rio
            Preto — unindo tecnologia, estética e um atendimento genuinamente humanizado.
          </p>
          <p className="mb-8 text-base leading-relaxed" style={{ color: "#7A8694" }}>
            Com uma abordagem acolhedora e foco total no bem-estar do paciente, utiliza os
            protocolos mais avançados para garantir resultados duradouros — do implante mais
            complexo ao sorriso que você sempre sonhou.
          </p>

          {/* Diferenciais */}
          <ul className="mb-10 flex flex-col gap-3">
            {DIFERENCIAIS.map((d, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ background: "#EAF0F6", color: "#1F3A5F" }}>
                  {d.icone}
                </span>
                <span className="text-sm leading-snug" style={{ color: "#4A4A4A" }}>{d.texto}</span>
              </li>
            ))}
          </ul>

          {/* CTA WhatsApp */}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 rounded-xl px-7 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ background: "#25D366", boxShadow: "0 6px 24px rgba(37,211,102,0.35)" }}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
            Agendar consulta
          </a>
        </div>
      </section>

      {/* ── Equipe ── */}
      <section className="py-20 sm:py-24" style={{ background: "#F7F4EE" }}>
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="block h-px w-8" style={{ background: "#D4A11E" }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#D4A11E" }}>Time completo</span>
              <span className="block h-px w-8" style={{ background: "#D4A11E" }} />
            </div>
            <h2 className="font-serif font-semibold" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", color: "#0E0E0E" }}>
              Toda a clínica a seu serviço
            </h2>
            <p className="mx-auto mt-3 text-sm leading-relaxed" style={{ color: "#7A8694", maxWidth: "44ch" }}>
              Nossa equipe completa inclui auxiliares, secretárias e especialistas parceiros treinados
              para oferecer a melhor experiência em cada visita.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="group relative overflow-hidden rounded-2xl w-full max-w-sm" style={{ aspectRatio: "3/4" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/foto-dr-gustavo-2.jpeg" alt="Dr. Gustavo Giolo" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", transition: "transform 0.5s ease" }} className="group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,10,22,0.85) 0%, rgba(5,10,22,0.1) 60%, transparent 100%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-serif text-base font-semibold text-white">Dr. Gustavo Giolo</p>
                <p className="text-[11px] font-medium" style={{ color: "#D4A11E" }}>Implantodontista · Diretor Clínico</p>
                <p className="mt-1 text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>{CRO}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="py-20 text-center" style={{ background: "#1F3A5F" }}>
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: "#D4A11E" }}>Próximo passo</p>
        <h2 className="font-serif mx-auto mb-4 font-semibold text-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", maxWidth: "20ch" }}>
          Agende com a OdontoNeo
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-white/55">
          Nossa equipe está pronta para oferecer uma avaliação gratuita e individualizada para o seu sorriso.
        </p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 rounded-xl px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ background: "#25D366", boxShadow: "0 6px 24px rgba(37,211,102,0.4)" }}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
          Agendar consulta gratuita
        </a>
      </section>
    </main>
  );
}
