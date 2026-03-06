"use client";

import { useState } from "react";
import ImageLightbox from "./ImageLightbox";

const TAG_TRATAMENTO = "Implantes Dentários e Prótese Protocolo";

const FOTOS = [
  { src: "/resultado-implante.jpeg",    alt: "Resultado implante dentário",     tag: TAG_TRATAMENTO, numero: "01" },
  { src: "/resultados-5-destaque.jpeg", alt: "Resultado destaque OdontoNeo",    tag: TAG_TRATAMENTO, numero: "02" },
  { src: "/resultados-2.jpeg",          alt: "Resultado paciente",              tag: TAG_TRATAMENTO, numero: "03" },
  { src: "/resultados-4.jpeg",          alt: "Resultado paciente",              tag: TAG_TRATAMENTO, numero: "04" },
  { src: "/resultados-6.jpeg",          alt: "Resultado paciente",              tag: TAG_TRATAMENTO, numero: "05" },
  { src: "/resultados-7.jpeg",          alt: "Resultado paciente",              tag: TAG_TRATAMENTO, numero: "06" },
  { src: "/resultados-8.jpeg",          alt: "Resultado paciente",              tag: TAG_TRATAMENTO, numero: "07" },
  { src: "/antes-depois-1.jpg",         alt: "Antes e depois lentes de contato", tag: TAG_TRATAMENTO, numero: "08" },
];

const VIDEOS = [
  { src: "/resultado-enfase-video.mp4",    titulo: "Resultado em Destaque",        subtitulo: "Transformação completa do sorriso" },
  { src: "/porque-escolher-odontoneo.mp4", titulo: "Por que escolher a OdontoNeo", subtitulo: "Conheça nossa história e diferenciais" },
];

export default function GaleriaResultados() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      {/* ── Galeria de Fotos — estilo Netflix ── */}
      <section className="px-4 pb-6 pt-12 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mx-auto mb-8 max-w-7xl">
          <div className="mb-3 flex items-center gap-3">
            <span className="block h-px w-6" style={{ background: "#D4A11E" }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#D4A11E" }}>
              Antes &amp; Depois
            </span>
          </div>
          <h2
            className="font-serif font-semibold text-white"
            style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", letterSpacing: "-0.01em" }}
          >
            Galeria de Resultados
          </h2>
          <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
            Clique em qualquer foto para ampliar · Imagens com autorização dos pacientes
          </p>
        </div>

        {/* Grid Netflix — 4 col desktop, 2 col mobile */}
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {FOTOS.map((foto, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setLightbox(foto)}
              aria-label={`Ampliar: ${foto.alt}`}
              className="group relative overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A11E]"
              style={{
                display: "block",
                boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Imagem com proporção 3:4 */}
              <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={foto.src}
                  alt={foto.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  style={{ objectPosition: "center top" }}
                />

                {/* Gradiente permanente para legibilidade */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(5,10,22,0.85) 0%, rgba(5,10,22,0.1) 55%, rgba(5,10,22,0.0) 100%)" }}
                />

                {/* Overlay extra no hover */}
                <div
                  className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20"
                />

                {/* Número — topo esquerdo */}
                <div
                  className="absolute left-3 top-3 flex h-6 w-6 items-center justify-center rounded-full font-mono text-[9px] font-bold"
                  style={{ background: "rgba(212,161,30,0.2)", border: "1px solid rgba(212,161,30,0.5)", color: "#D4A11E" }}
                >
                  {foto.numero}
                </div>

                {/* Ícone ampliar — aparece no hover, centro */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full"
                    style={{ background: "rgba(255,255,255,0.14)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)" }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                    </svg>
                  </div>
                </div>

                {/* Tag do tratamento — base */}
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <div className="mb-1.5 h-px w-5" style={{ background: "#D4A11E" }} />
                  <span
                    className="inline-block rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.15em]"
                    style={{ background: "rgba(212,161,30,0.15)", color: "#D4A11E", border: "1px solid rgba(212,161,30,0.3)" }}
                  >
                    {foto.tag}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-7xl text-center text-[11px]" style={{ color: "rgba(255,255,255,0.15)" }}>
          * Resultados individuais. Fotos publicadas com autorização dos pacientes. CRO-SP 140.793.
        </p>
      </section>

      {/* ── Galeria de Vídeos — estilo Netflix ── */}
      <section className="px-4 pb-6 pt-16 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mx-auto mb-8 max-w-7xl">
          <div className="mb-3 flex items-center gap-3">
            <span className="block h-px w-6" style={{ background: "#D4A11E" }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#D4A11E" }}>
              Em vídeo
            </span>
          </div>
          <h2
            className="font-serif font-semibold text-white"
            style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", letterSpacing: "-0.01em" }}
          >
            Transformações em Vídeo
          </h2>
          <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
            Veja o processo e o resultado real dos nossos pacientes
          </p>
        </div>

        {/* Grid vídeos — 2 col desktop, 1 col mobile */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {VIDEOS.map((v, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-2xl"
              style={{
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "0 4px 32px rgba(0,0,0,0.5)",
                background: "#050A16",
              }}
            >
              <div className="relative" style={{ aspectRatio: "9/16", maxHeight: "560px" }}>
                <video
                  src={v.src}
                  controls
                  playsInline
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              {/* Card footer */}
              <div className="flex items-start gap-3 px-5 py-4">
                <div
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-[9px] font-bold"
                  style={{ background: "rgba(212,161,30,0.15)", border: "1px solid rgba(212,161,30,0.4)", color: "#D4A11E" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <p className="font-serif text-sm font-semibold text-white">{v.titulo}</p>
                  <p className="mt-0.5 text-[11px] font-medium" style={{ color: "rgba(212,161,30,0.75)" }}>{v.subtitulo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <ImageLightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </>
  );
}
