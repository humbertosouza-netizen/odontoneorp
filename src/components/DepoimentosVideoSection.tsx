"use client";

import { useRef, useState } from "react";

const DEPOIMENTOS = [
  {
    src: "/depoimento-moacir.mp4",
    nome: "Sr. Moacir",
    tratamento: "Implante Dentário",
  },
  {
    src: "/depoimento-joana.mp4",
    nome: "Sra. Joana",
    tratamento: "Estética Dental",
  },
  {
    src: "/depoimento-edvirges.mp4",
    nome: "Sra. Edvirges",
    tratamento: "Prótese Protocolo",
  },
];

export default function DepoimentosVideoSection() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollTo = (i: number) => {
    setActive(i);
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i] as HTMLElement;
    if (card) {
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
    }
  };

  const prev = () => scrollTo(Math.max(0, active - 1));
  const next = () => scrollTo(Math.min(DEPOIMENTOS.length - 1, active + 1));

  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28" style={{ background: "#0C1829" }}>

      {/* Gradiente dourado decorativo */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,161,30,0.5), transparent)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #D4A11E 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">

        {/* Cabeçalho */}
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="block h-px w-8" style={{ background: "#D4A11E" }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: "#D4A11E" }}>
                Histórias reais
              </span>
            </div>
            <h2
              className="font-serif font-semibold leading-tight text-white"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
                letterSpacing: "-0.01em",
                maxWidth: "24ch",
              }}
            >
              Vidas transformadas na OdontoNeo{" "}
              <em className="not-italic" style={{ color: "#D4A11E" }}>São José do Rio Preto</em>
            </h2>
          </div>

          {/* Setas de navegação desktop */}
          <div className="hidden items-center gap-3 sm:flex">
            <button
              onClick={prev}
              disabled={active === 0}
              aria-label="Anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 disabled:opacity-30"
              style={{ borderColor: "rgba(212,161,30,0.4)", color: "#D4A11E" }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={next}
              disabled={active === DEPOIMENTOS.length - 1}
              aria-label="Próximo"
              className="flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 disabled:opacity-30"
              style={{ borderColor: "rgba(212,161,30,0.4)", color: "#D4A11E" }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carrossel */}
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto pb-4"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {DEPOIMENTOS.map((d, i) => (
            <div
              key={d.nome}
              onClick={() => setActive(i)}
              className="shrink-0 cursor-pointer transition-all duration-500"
              style={{
                scrollSnapAlign: "start",
                width: "clamp(260px, 38vw, 360px)",
                opacity: i === active ? 1 : 0.55,
                transform: i === active ? "scale(1)" : "scale(0.96)",
              }}
            >
              {/* Card vídeo */}
              <div
                className="overflow-hidden rounded-2xl"
                style={{
                  border: i === active ? "2px solid #D4A11E" : "2px solid rgba(255,255,255,0.08)",
                  boxShadow: i === active ? "0 12px 48px rgba(212,161,30,0.2)" : "none",
                  background: "#050A16",
                }}
              >
                <video
                  src={d.src}
                  controls
                  playsInline
                  style={{
                    width: "100%",
                    aspectRatio: "9/16",
                    objectFit: "cover",
                    display: "block",
                    maxHeight: "480px",
                  }}
                />

                {/* Info abaixo do vídeo */}
                <div className="px-5 py-4">
                  <p className="font-serif text-base font-semibold text-white">{d.nome}</p>
                  <p className="mt-0.5 text-[11px] font-medium" style={{ color: "rgba(212,161,30,0.85)" }}>
                    {d.tratamento}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {DEPOIMENTOS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Depoimento ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? 28 : 8,
                height: 8,
                background: i === active ? "#D4A11E" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
