import Link from "next/link";

const DIFERENCIAIS = [
  {
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    texto: "Anestesia indolor com tecnologia de microprecisão",
  },
  {
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    texto: "Atendimento humanizado e acolhedor em cada etapa",
  },
  {
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    texto: "Sedação consciente disponível para casos de ansiedade",
  },
  {
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    texto: "Equipamentos de última geração para diagnóstico preciso",
  },
];

export default function TecnologiaSection() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* Decorativo — gradiente dourado lateral */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-1 opacity-60"
        style={{ background: "linear-gradient(180deg, transparent, #D4A11E, transparent)" }}
        aria-hidden
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-28">

        {/* ── Esquerda: texto ── */}
        <div className="flex flex-col items-start">

          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="block h-px w-8" style={{ background: "#D4A11E" }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#D4A11E" }}>
              Sem dor. Sem medo.
            </span>
          </div>

          {/* Título */}
          <h2
            className="font-serif mb-5 font-semibold leading-tight"
            style={{
              fontSize: "clamp(1.9rem, 3.2vw, 3rem)",
              color: "#0E0E0E",
              letterSpacing: "-0.01em",
            }}
          >
            Tem medo de<br />
            <em className="not-italic" style={{ color: "#1F3A5F" }}>dentista?</em>{" "}
            <br className="hidden sm:block" />
            <span
              className="font-serif italic"
              style={{ color: "#D4A11E" }}
            >
              Acalme-se.
            </span>
          </h2>

          {/* Texto principal */}
          <p className="mb-4 text-base leading-relaxed" style={{ color: "#4A4A4A", maxWidth: "46ch" }}>
            Sabemos que muitos pacientes evitam o dentista por medo ou experiências
            dolorosas do passado. Na OdontoNeo Infinity, isso é diferente.
          </p>
          <p className="mb-10 text-base leading-relaxed" style={{ color: "#7A8694", maxWidth: "46ch" }}>
            Utilizamos tecnologias de ponta que garantem{" "}
            <strong style={{ color: "#1F3A5F" }}>0 dor durante os procedimentos</strong>,
            com um ambiente criado para que você se sinta seguro, acolhido e tranquilo
            desde o primeiro momento.
          </p>

          {/* Lista de diferenciais */}
          <ul className="mb-10 flex flex-col gap-3">
            {DIFERENCIAIS.map((d, i) => (
              <li key={i} className="flex items-center gap-3">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "#EAF0F6", color: "#1F3A5F" }}
                >
                  {d.icone}
                </span>
                <span className="text-sm leading-snug" style={{ color: "#4A4A4A" }}>
                  {d.texto}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA — botão outline estilo Vitta */}
          <Link
            href="/tecnologias"
            className="group inline-flex items-center gap-3 border px-7 py-3.5 text-sm font-medium transition-all duration-300 hover:bg-[#1F3A5F] hover:border-[#1F3A5F] hover:text-white"
            style={{ color: "#1F3A5F", borderColor: "#1F3A5F", borderRadius: "2px" }}
          >
            Ver nossas tecnologias
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* ── Direita: vídeo ── */}
        <div className="relative">
          {/* Elemento decorativo atrás do vídeo */}
          <div
            className="absolute -right-4 -top-4 h-full w-full rounded-2xl"
            style={{ background: "#EAF0F6", zIndex: 0 }}
          />

          <div
            className="relative overflow-hidden rounded-2xl"
            style={{ aspectRatio: "9/16", zIndex: 1, background: "#0C1829" }}
          >
            <video
              src="/resultado-enfase-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />

            {/* Badge flutuante — "0 Dor" */}
            <div
              className="absolute bottom-5 left-5 flex flex-col items-start rounded-xl bg-white px-5 py-4"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.14)", zIndex: 2 }}
            >
              <span
                className="font-serif text-3xl font-semibold leading-none"
                style={{ color: "#1F3A5F" }}
              >
                0 dor
              </span>
              <span className="mt-1 text-[11px] font-bold uppercase tracking-widest" style={{ color: "#D4A11E" }}>
                garantido
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
