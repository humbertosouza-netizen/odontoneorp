import Link from "next/link";

const ICONE_CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const DIFERENCIAIS = [
  { icone: ICONE_CHECK, texto: "Sedação Endovenosa" },
  { icone: ICONE_CHECK, texto: "Scanner Intraoral" },
  { icone: ICONE_CHECK, texto: "Radiografia Panorâmica Digital" },
  { icone: ICONE_CHECK, texto: "Câmera Intraoral e Planejamento Digital" },
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
              fontSize: "clamp(1.7rem, 3vw, 2.8rem)",
              color: "#0E0E0E",
              letterSpacing: "-0.01em",
            }}
          >
            <em className="not-italic" style={{ color: "#1F3A5F" }}>&ldquo;Tenho medo de dentista.</em>{" "}
            <span style={{ color: "#D4A11E" }}>E agora?&rdquo;</span>
          </h2>

          {/* Texto principal */}
          <p className="mb-4 text-base leading-relaxed" style={{ color: "#4A4A4A", maxWidth: "46ch" }}>
            Nós entendemos. Por isso, criamos o{" "}
            <strong style={{ color: "#1F3A5F" }}>Protocolo Confort</strong>. Esqueça as agulhas
            assustadoras e o barulho que dá aflição. Utilizamos{" "}
            <strong style={{ color: "#1F3A5F" }}>sedação consciente</strong> e{" "}
            <strong style={{ color: "#1F3A5F" }}>anestesia computadorizada de microprecisão</strong>.
          </p>
          <p className="mb-10 text-base leading-relaxed" style={{ color: "#7A8694", maxWidth: "46ch" }}>
            Você relaxa em um ambiente seguro enquanto nós cuidamos de tudo. O único
            &ldquo;risco&rdquo; é você sair daqui querendo sorrir para todo mundo.
          </p>

          {/* Selo 0 Dor */}
          <div
            className="mb-10 inline-flex items-center gap-3 rounded-full px-5 py-3"
            style={{ background: "rgba(31,58,95,0.08)", border: "1px solid rgba(31,58,95,0.15)" }}
          >
            <span
              className="font-serif text-2xl font-bold leading-none"
              style={{ color: "#D4A11E" }}
            >
              0
            </span>
            <div>
              <p className="text-sm font-bold" style={{ color: "#1F3A5F" }}>Dor Garantido.</p>
              <p className="text-[10px] uppercase tracking-widest" style={{ color: "#7A8694" }}>Protocolo Confort OdontoNeo</p>
            </div>
          </div>

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
            <iframe
              src="https://www.youtube.com/embed/FEj7iHAKMvU?rel=0"
              title="Tenho medo de dentista. E agora? — Protocolo Confort"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: 0,
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
