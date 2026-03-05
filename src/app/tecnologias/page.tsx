import Link from "next/link";
import { WHATSAPP_LINK } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tecnologias | OdontoNeo Infinity – São José do Rio Preto",
  description:
    "Conheça as tecnologias de ponta da OdontoNeo Infinity: scanner intraoral, radiografia panorâmica, sedação endovenosa, laser e planejamento digital 3D. 0 dor e máximo conforto.",
};

const TECNOLOGIAS: {
  numero: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  tag: string;
  media: { tipo: "imagem" | "video"; src: string; objectPosition?: string };
}[] = [
  {
    numero: "01",
    titulo: "Sedação Endovenosa",
    subtitulo: "Você dorme. Nós cuidamos de tudo.",
    descricao:
      "Para quem tem ansiedade ou fobia dental. O paciente fica completamente relaxado — muitas vezes dormindo — sem sentir qualquer desconforto durante o procedimento.",
    tag: "Conforto Total",
    media: { tipo: "video", src: "/resultado-enfase-video.mp4" },
  },
  {
    numero: "02",
    titulo: "Anestesia Computadorizada",
    subtitulo: "Microprecisão sem desconforto",
    descricao:
      "Anestésico liberado de forma lenta e controlada, eliminando praticamente toda a sensação de picada. Zero dor, zero susto — aplicada com equipamento de fluxo computadorizado.",
    tag: "Zero Dor",
    media: { tipo: "imagem", src: "/sala-atendimento.jpg", objectPosition: "center center" },
  },
  {
    numero: "03",
    titulo: "Scanner Intraoral",
    subtitulo: "Sem massinha. Sem desconforto.",
    descricao:
      "O Dr. Gustavo digitaliza toda a arcada em segundos com o scanner intraoral, gerando modelos 3D para coroas cerâmicas, próteses e alinhadores com velocidade e precisão milimétrica.",
    tag: "Tecnologia 3D",
    media: { tipo: "imagem", src: "/foto-dr-gustavo-2.jpeg", objectPosition: "center top" },
  },
  {
    numero: "04",
    titulo: "Radiografia Panorâmica Digital",
    subtitulo: "Diagnóstico completo em uma imagem",
    descricao:
      "Captura todos os dentes, maxilares e estruturas adjacentes em alta resolução. O Dr. Gustavo analisa o resultado ainda na consulta para um diagnóstico claro e preciso.",
    tag: "Diagnóstico",
    media: { tipo: "imagem", src: "/foto-clinica-1.jpg", objectPosition: "center center" },
  },
  {
    numero: "05",
    titulo: "Laser Odontológico",
    subtitulo: "Sem bisturi. Sem sangramento.",
    descricao:
      "Procedimentos gengivais, tratamento de aftas, desinfecção de canais e clareamento sem cortes — com recuperação muito mais rápida e mínimo desconforto pós-operatório.",
    tag: "Inovação",
    media: { tipo: "imagem", src: "/recepcao-ampla.jpg", objectPosition: "center center" },
  },
  {
    numero: "06",
    titulo: "Câmera Intraoral e Planejamento Digital",
    subtitulo: "Veja seu sorriso em 3D antes de começar",
    descricao:
      "A câmera intraoral registra cada detalhe em tempo real. Aliada ao software 3D, simula o resultado final do seu sorriso antes de qualquer procedimento. Você aprova — depois executamos.",
    tag: "Planejamento",
    media: { tipo: "imagem", src: "/tecnologia-2.jpg", objectPosition: "center center" },
  },
];

export default function TecnologiasPage() {
  return (
    <main className="min-h-screen" style={{ background: "#080F1E" }}>

      {/* ── Hero ── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: "clamp(280px, 42vh, 500px)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/tecnologia-2.jpg"
          alt="Tecnologia OdontoNeo Infinity"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,15,30,1) 0%, rgba(8,15,30,0.55) 55%, rgba(8,15,30,0.15) 100%)" }} />
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
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)", letterSpacing: "-0.01em", lineHeight: 1.1 }}
          >
            Nossas Tecnologias
          </h1>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="px-6 py-12 text-center sm:px-10">
        <p className="mx-auto max-w-2xl text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
          Investimos continuamente em tecnologia de última geração para garantir que cada visita seja
          confortável, precisa e livre de dor.
        </p>
        <div className="mt-5 flex items-center justify-center gap-3">
          <span className="block h-px w-10" style={{ background: "#D4A11E" }} />
          <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#D4A11E" }}>
            0 dor · 100% conforto · Planejamento digital
          </span>
          <span className="block h-px w-10" style={{ background: "#D4A11E" }} />
        </div>
      </section>

      {/* ── Cards Netflix — 3×2 grid ── */}
      <section className="px-4 pb-16 pt-4 sm:px-8 lg:px-12">

        {/* Grid: 1 col mobile → 2 col sm → 3 col desktop */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {TECNOLOGIAS.map((t) => (
            <div
              key={t.numero}
              className="group relative overflow-hidden rounded-2xl"
              style={{
                boxShadow: "0 4px 32px rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Mídia — aspecto 2:3 (retrato, como Netflix) */}
              <div className="relative w-full" style={{ aspectRatio: "2/3" }}>

                {/* Imagem ou vídeo como fundo */}
                {t.media.tipo === "video" ? (
                  <video
                    src={t.media.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={t.media.src}
                    alt={t.titulo}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ objectPosition: t.media.objectPosition ?? "center center" }}
                  />
                )}

                {/* Gradiente permanente da base */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(5,10,22,0.98) 0%, rgba(5,10,22,0.65) 45%, rgba(5,10,22,0.08) 100%)",
                  }}
                />

                {/* Overlay extra no hover */}
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/15" />

                {/* Número + tag — topo */}
                <div className="absolute left-4 top-4 flex items-center gap-2.5">
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-full font-mono text-[10px] font-bold"
                    style={{ background: "rgba(212,161,30,0.18)", border: "1px solid rgba(212,161,30,0.5)", color: "#D4A11E" }}
                  >
                    {t.numero}
                  </span>
                  <span
                    className="rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.15em]"
                    style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.45)", backdropFilter: "blur(6px)" }}
                  >
                    {t.tag}
                  </span>
                </div>

                {/* Ícone play para o card de vídeo */}
                {t.media.tipo === "video" && (
                  <div className="absolute right-4 top-4">
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-full"
                      style={{ background: "rgba(212,161,30,0.25)", border: "1px solid rgba(212,161,30,0.5)" }}
                    >
                      <svg viewBox="0 0 24 24" fill="#D4A11E" className="h-3.5 w-3.5 translate-x-0.5">
                        <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                      </svg>
                    </span>
                  </div>
                )}

                {/* Conteúdo — base do card */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  {/* Linha dourada */}
                  <div
                    className="mb-3 h-px transition-all duration-500 group-hover:w-12"
                    style={{ width: "24px", background: "#D4A11E" }}
                  />

                  {/* Subtítulo */}
                  <p
                    className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em]"
                    style={{ color: "rgba(212,161,30,0.8)" }}
                  >
                    {t.subtitulo}
                  </p>

                  {/* Título */}
                  <h2
                    className="font-serif mb-3 font-semibold leading-tight text-white"
                    style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)", letterSpacing: "-0.01em" }}
                  >
                    {t.titulo}
                  </h2>

                  {/* Descrição — aparece com mais opacidade no hover */}
                  <p
                    className="text-xs leading-relaxed transition-opacity duration-500"
                    style={{ color: "rgba(255,255,255,0.55)", maxWidth: "36ch" }}
                  >
                    {t.descricao}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-7xl text-center text-[11px]" style={{ color: "rgba(255,255,255,0.15)" }}>
          * Todas as tecnologias disponíveis na OdontoNeo Infinity – São José do Rio Preto. CRO-SP 140.793.
        </p>
      </section>

      {/* ── CTA Final ── */}
      <section
        className="relative overflow-hidden border-t py-24 text-center"
        style={{ background: "#1F3A5F", borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #D4A11E 0%, transparent 70%)" }}
          aria-hidden
        />
        <div className="relative px-6">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="block h-px w-8" style={{ background: "#D4A11E" }} />
            <p className="text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: "#D4A11E" }}>
              Sem dor. Sem medo.
            </p>
            <span className="block h-px w-8" style={{ background: "#D4A11E" }} />
          </div>
          <h2
            className="font-serif mx-auto mb-4 font-semibold text-white"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", maxWidth: "22ch" }}
          >
            Venha conhecer a clínica pessoalmente
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-white/60">
            Agende uma visita e veja como nossa estrutura foi pensada para que você se sinta
            completamente à vontade.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-xl px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: "#25D366", boxShadow: "0 6px 24px rgba(37,211,102,0.4)" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Agendar visita gratuita
          </a>
        </div>
      </section>
    </main>
  );
}
