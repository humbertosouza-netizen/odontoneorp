import Link from "next/link";
import { WHATSAPP_LINK } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tecnologias | OdontoNeo Infinity – São José do Rio Preto",
  description:
    "Conheça as tecnologias de ponta da OdontoNeo Infinity: scanner 3D, CBCT, anestesia indolor, laser e equipamentos de última geração para garantir 0 dor e máximo conforto.",
};

const TECNOLOGIAS = [
  {
    numero: "01",
    titulo: "Anestesia Indolor",
    subtitulo: "Microprecisão sem desconforto",
    descricao:
      "Utilizamos sistemas de anestesia computadorizada de fluxo controlado, que liberam o anestésico de forma lenta e precisa, eliminando praticamente toda a sensação de picada. Resultado: 0 dor, 0 desconforto.",
    foto: "/sala-atendimento.jpg",
    tag: "Conforto",
  },
  {
    numero: "02",
    titulo: "Tomografia CBCT 3D",
    subtitulo: "Diagnóstico com máxima precisão",
    descricao:
      "A tomografia computadorizada de feixe cônico (CBCT) fornece imagens tridimensionais dos dentes, ossos e tecidos em altíssima resolução. Diagnósticos mais precisos, planejamentos mais seguros.",
    foto: "/recepcao-ampla.jpg",
    tag: "Diagnóstico",
  },
  {
    numero: "03",
    titulo: "Scanner Intraoral",
    subtitulo: "Moldagem digital sem silicone",
    descricao:
      "Adeus às moldagens com silicone desconfortáveis. Nosso scanner intraoral capta a geometria dos dentes em segundos com altíssima precisão, gerando modelos digitais 3D para próteses e alinhadores.",
    foto: "/foto-clinica-1.jpg",
    tag: "Tecnologia",
  },
  {
    numero: "04",
    titulo: "Laser Odontológico",
    subtitulo: "Tratamentos sem bisturi",
    descricao:
      "O laser permite realizar procedimentos gengivais, tratamento de aftas, clareamento e desinfecção de canais sem cortes, sem sangramento e com recuperação muito mais rápida.",
    foto: "/recepcao.jpg",
    tag: "Inovação",
  },
  {
    numero: "05",
    titulo: "Sedação Consciente",
    subtitulo: "Para quem tem medo de dentista",
    descricao:
      "Para pacientes com ansiedade ou fobia dental, oferecemos sedação inalatória com óxido nitroso. O paciente permanece consciente, relaxado e sem memória do procedimento.",
    foto: "/sala-atendimento.jpg",
    tag: "Bem-estar",
  },
  {
    numero: "06",
    titulo: "Planejamento Digital",
    subtitulo: "Visualize seu sorriso antes do tratamento",
    descricao:
      "Com software de planejamento digital, o Dr. Gustavo simula o resultado final do seu sorriso antes mesmo de iniciar o tratamento. Você aprova, depois executamos.",
    foto: "/foto-clinica-1.jpg",
    tag: "Inovação",
  },
];

export default function TecnologiasPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: "clamp(280px, 40vh, 480px)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/recepcao-ampla.jpg"
          alt="Estrutura moderna OdontoNeo Infinity"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,10,22,0.9) 0%, rgba(5,10,22,0.35) 100%)" }} />
        <div className="relative z-10 w-full px-6 pb-14 sm:px-12 lg:px-20">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-white/50 transition-colors hover:text-white/80"
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
      <section className="border-b px-6 py-16 text-center sm:px-10" style={{ borderColor: "#EDEDED" }}>
        <p className="mx-auto max-w-2xl text-base leading-relaxed" style={{ color: "#4A4A4A" }}>
          Investimos continuamente em tecnologia de última geração para garantir que cada visita à clínica
          seja confortável, precisa e livre de dor. Você merece o melhor — e a ciência nos permite entregar isso.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="block h-px w-10" style={{ background: "#D4A11E" }} />
          <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#D4A11E" }}>
            0 dor. 100% conforto.
          </span>
          <span className="block h-px w-10" style={{ background: "#D4A11E" }} />
        </div>
      </section>

      {/* ── Lista de tecnologias ── */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
        <div className="flex flex-col gap-0">
          {TECNOLOGIAS.map((t, i) => (
            <div
              key={t.numero}
              className={`grid items-center gap-10 border-b py-14 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
              style={{ borderColor: "#F0F0F0" }}
            >
              {/* Foto */}
              <div className="relative overflow-hidden rounded-xl lg:[direction:ltr]" style={{ aspectRatio: "16/10" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.foto}
                  alt={t.titulo}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                />
                <span
                  className="absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white"
                  style={{ background: "rgba(31,58,95,0.85)" }}
                >
                  {t.tag}
                </span>
              </div>

              {/* Texto */}
              <div className="lg:[direction:ltr]">
                <span
                  className="mb-4 block font-serif text-5xl font-semibold leading-none opacity-15"
                  style={{ color: "#1F3A5F" }}
                >
                  {t.numero}
                </span>
                <div className="mb-2 flex items-center gap-3">
                  <span className="block h-px w-6" style={{ background: "#D4A11E" }} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: "#D4A11E" }}>
                    {t.subtitulo}
                  </span>
                </div>
                <h2
                  className="font-serif mb-4 font-semibold"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", color: "#0E0E0E", letterSpacing: "-0.01em" }}
                >
                  {t.titulo}
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "#4A4A4A", maxWidth: "44ch" }}>
                  {t.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="py-20 text-center" style={{ background: "#1F3A5F" }}>
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: "#D4A11E" }}>
          Sem dor. Sem medo.
        </p>
        <h2
          className="font-serif mx-auto mb-4 font-semibold text-white"
          style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", maxWidth: "20ch" }}
        >
          Venha conhecer a clínica pessoalmente
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-white/60">
          Agende uma visita e veja como nossa estrutura foi pensada para que você se sinta completamente à vontade.
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
      </section>
    </main>
  );
}
