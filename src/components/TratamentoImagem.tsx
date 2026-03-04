"use client";

import { useState } from "react";
import ImageLightbox from "./ImageLightbox";

type Props = {
  src: string;
  alt: string;
};

export default function TratamentoImagem({ src, alt }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Ver imagem completa: ${alt}`}
        className="group relative w-full overflow-hidden rounded-2xl"
        style={{ aspectRatio: "3/4", display: "block" }}
      >
        {/* Foto */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="transition-transform duration-700 group-hover:scale-105"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
          }}
        />

        {/* Grid overlay sutil — visível sempre, mais forte no hover */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
            opacity: 0.6,
          }}
        />

        {/* Escurecimento no hover */}
        <div
          className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/30"
        />

        {/* Ícone expandir — aparece no hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-full"
            style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.3)" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>
          </div>
        </div>

        {/* Degradê inferior leve */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(5,10,22,0.12) 100%)" }}
        />
      </button>

      {open && (
        <ImageLightbox src={src} alt={alt} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
