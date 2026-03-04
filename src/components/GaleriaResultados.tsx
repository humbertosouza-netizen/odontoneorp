"use client";

import { useState } from "react";
import ImageLightbox from "./ImageLightbox";

const FOTOS = [
  { src: "/resultado-implante.jpeg",    alt: "Resultado implante dentário" },
  { src: "/resultados-5-destaque.jpeg", alt: "Resultado destaque OdontoNeo" },
  { src: "/resultados-2.jpeg",          alt: "Resultado paciente 02" },
  { src: "/resultados-4.jpeg",          alt: "Resultado paciente 04" },
  { src: "/resultados-6.jpeg",          alt: "Resultado paciente 06" },
  { src: "/resultados-7.jpeg",          alt: "Resultado paciente 07" },
  { src: "/resultados-8.jpeg",          alt: "Resultado paciente 08" },
  { src: "/antes-depois-1.jpg",         alt: "Antes e depois lentes de contato" },
];

const VIDEOS = [
  { src: "/resultado-enfase-video.mp4",      titulo: "Resultado em destaque",        subtitulo: "Transformação completa do sorriso" },
  { src: "/porque-escolher-odontoneo.mp4",   titulo: "Por que escolher a OdontoNeo", subtitulo: "Conheça nossa história e diferenciais" },
];

export default function GaleriaResultados() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      {/* ── Galeria de Fotos ── */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
        {/* Header da seção */}
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-3">
            <span className="block h-px w-8" style={{ background: "#D4A11E" }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#D4A11E" }}>
              Antes &amp; Depois
            </span>
          </div>
          <h2 className="font-serif font-semibold" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", color: "#0E0E0E", letterSpacing: "-0.01em" }}>
            Galeria de Resultados
          </h2>
          <p className="mt-2 text-sm" style={{ color: "#7A8694" }}>
            Clique em qualquer foto para ampliar. Imagens com autorização dos pacientes.
          </p>
        </div>

        {/* Grid masonry-like */}
        <div className="columns-2 gap-3 sm:columns-3 lg:columns-4" style={{ columnFill: "balance" }}>
          {FOTOS.map((foto, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setLightbox(foto)}
              aria-label={`Ampliar: ${foto.alt}`}
              className="group relative mb-3 block w-full overflow-hidden rounded-xl"
              style={{ breakInside: "avoid" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={foto.src}
                alt={foto.alt}
                className="w-full transition-transform duration-500 group-hover:scale-105"
                style={{ display: "block" }}
              />
              {/* Overlay hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.35)" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        <p className="mt-6 text-center text-[11px]" style={{ color: "#B0B0B0" }}>
          * Resultados individuais. Fotos publicadas com autorização dos pacientes. CRO-SP 140.793.
        </p>
      </section>

      {/* ── Galeria de Vídeos ── */}
      <section className="py-16 sm:py-20" style={{ background: "#F7F4EE" }}>
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-3">
              <span className="block h-px w-8" style={{ background: "#D4A11E" }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#D4A11E" }}>
                Em vídeo
              </span>
            </div>
            <h2 className="font-serif font-semibold" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", color: "#0E0E0E", letterSpacing: "-0.01em" }}>
              Galeria de Vídeos
            </h2>
            <p className="mt-2 text-sm" style={{ color: "#7A8694" }}>
              Transformações reais em vídeo — veja o processo e o resultado final.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {VIDEOS.map((v, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl"
                style={{ background: "#0C1829", boxShadow: "0 8px 32px rgba(0,0,0,0.16)" }}
              >
                <video
                  src={v.src}
                  controls
                  playsInline
                  style={{
                    width: "100%",
                    aspectRatio: "9/16",
                    objectFit: "cover",
                    display: "block",
                    maxHeight: "520px",
                  }}
                />
                <div className="px-5 py-4">
                  <p className="font-serif text-base font-semibold text-white">{v.titulo}</p>
                  <p className="mt-0.5 text-[11px]" style={{ color: "rgba(212,161,30,0.8)" }}>{v.subtitulo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <ImageLightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </>
  );
}
