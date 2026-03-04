"use client";

import { useEffect, useCallback } from "react";

type Props = {
  src: string;
  alt: string;
  onClose: () => void;
};

export default function ImageLightbox({ src, alt, onClose }: Props) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: "rgba(5,10,22,0.94)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      {/* Botão fechar */}
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Imagem */}
      <div
        className="relative flex max-h-[90vh] max-w-[92vw] items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          style={{
            maxHeight: "90vh",
            maxWidth: "92vw",
            objectFit: "contain",
            borderRadius: "12px",
            boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
          }}
        />
      </div>

      {/* Hint ESC */}
      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/30">
        Clique fora ou pressione ESC para fechar
      </p>
    </div>
  );
}
