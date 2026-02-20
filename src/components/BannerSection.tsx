"use client";

import { useEffect, useState, useCallback } from "react";
import { WHATSAPP_LINK } from "@/lib/constants";

type Slide = {
  id: number;
  eyebrow: string;
  title: string;
  titleBold: string;
  cta: string;
  href: string;
  /* cores do lado direito */
  bgRight: string;
  circleColor: string;
  /* foto: coloque o path da imagem em /public e use aqui */
  photo: string | null;
  photoAlt: string;
  /* overlay azul no lado esquerdo */
  overlayColor: string;
  /* ícone decorativo (enquanto não tem foto real) */
  placeholderIcon: string;
};

const SLIDES: Slide[] = [
  {
    id: 1,
    eyebrow: "Invisalign® e ortodontia de excelência",
    title: "Ortodontia",
    titleBold: "Invisível",
    cta: "Fale Conosco Aqui",
    href: WHATSAPP_LINK,
    bgRight: "#C9A96E",
    circleColor: "rgba(255,255,255,0.18)",
    photo: "/banner-alinhador.png",
    photoAlt: "Alinhador Transparente OdontoNeo",
    overlayColor: "rgba(31,58,95,0.45)",
    placeholderIcon: "🦷",
  },
  {
    id: 2,
    eyebrow: "Solução definitiva para dentes perdidos",
    title: "Implante",
    titleBold: "Dentário",
    cta: "Agendar Avaliação",
    href: WHATSAPP_LINK,
    bgRight: "#1F3A5F",
    circleColor: "rgba(212,161,30,0.25)",
    photo: null, // ex: "/banners/implante.jpg"
    photoAlt: "Implante Dentário",
    overlayColor: "rgba(15,35,60,0.65)",
    placeholderIcon: "😁",
  },
  {
    id: 3,
    eyebrow: "Transforme seu sorriso em dias",
    title: "Lentes de",
    titleBold: "Contato Dental",
    cta: "Saiba Mais",
    href: WHATSAPP_LINK,
    bgRight: "#2B5080",
    circleColor: "rgba(212,161,30,0.2)",
    photo: null, // ex: "/banners/lentes.jpg"
    photoAlt: "Lentes de Contato Dental",
    overlayColor: "rgba(26,50,80,0.65)",
    placeholderIcon: "✨",
  },
];

const AUTO_PLAY_MS = 5000;

export default function BannerSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % SLIDES.length), []);
  const prev = () => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  const goTo = (i: number) => setCurrent(i);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTO_PLAY_MS);
    return () => clearInterval(id);
  }, [paused, next]);

  const slide = SLIDES[current];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "clamp(220px, 38vw, 480px)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Slides ────────────────────────────────── */}
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 flex transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
        >
          {/* METADE ESQUERDA — foto + overlay */}
          <div className="relative w-1/2 overflow-hidden">
            {s.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={s.photo}
                alt={s.photoAlt}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              /* Placeholder enquanto não tem foto real */
              <div
                className="absolute inset-0 flex items-center justify-center text-6xl sm:text-8xl"
                style={{ background: "#D6E3F0" }}
              >
                {s.placeholderIcon}
              </div>
            )}
            {/* Overlay colorido */}
            <div
              className="absolute inset-0"
              style={{ background: s.overlayColor }}
            />
          </div>

          {/* METADE DIREITA — conteúdo */}
          <div
            className="relative flex w-1/2 items-center overflow-hidden px-6 sm:px-10 lg:px-16"
            style={{ background: s.bgRight }}
          >
            {/* Círculo decorativo de fundo */}
            <div
              className="pointer-events-none absolute -right-16 -top-16 rounded-full"
              style={{
                width: "clamp(140px, 30vw, 380px)",
                height: "clamp(140px, 30vw, 380px)",
                background: s.circleColor,
              }}
            />
            <div
              className="pointer-events-none absolute -bottom-10 right-10 rounded-full opacity-40"
              style={{
                width: "clamp(60px, 12vw, 150px)",
                height: "clamp(60px, 12vw, 150px)",
                background: s.circleColor,
              }}
            />

            {/* Texto */}
            <div className="relative z-10">
              <p
                className="mb-1 font-medium text-white/70"
                style={{ fontSize: "clamp(9px, 1.2vw, 14px)" }}
              >
                {s.eyebrow}
              </p>
              <h2
                className="font-light leading-tight text-white"
                style={{ fontSize: "clamp(18px, 3.2vw, 52px)", letterSpacing: "-0.02em" }}
              >
                {s.title}
              </h2>
              <h2
                className="font-extrabold leading-none text-white"
                style={{ fontSize: "clamp(20px, 3.6vw, 58px)", letterSpacing: "-0.025em" }}
              >
                {s.titleBold}
              </h2>

              {/* Botão CTA */}
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-lg font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                style={{
                  background: "#1F3A5F",
                  padding: "clamp(6px,0.9vw,11px) clamp(14px,2vw,28px)",
                  fontSize: "clamp(10px,1.1vw,14px)",
                  boxShadow: "0 3px 12px rgba(0,0,0,0.25)",
                }}
              >
                {s.cta}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* ── Setas ─────────────────────────────────── */}
      <button
        type="button"
        aria-label="Slide anterior"
        onClick={prev}
        className="absolute left-2 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm transition-all hover:bg-black/40 sm:left-4"
        style={{ width: "clamp(28px,3vw,44px)", height: "clamp(28px,3vw,44px)" }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} style={{ width: "clamp(12px,1.4vw,20px)" }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Próximo slide"
        onClick={next}
        className="absolute right-2 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm transition-all hover:bg-black/40 sm:right-4"
        style={{ width: "clamp(28px,3vw,44px)", height: "clamp(28px,3vw,44px)" }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} style={{ width: "clamp(12px,1.4vw,20px)" }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* ── Dots ──────────────────────────────────── */}
      <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-4">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            aria-label={`Ir para slide ${i + 1}`}
            onClick={() => goTo(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width:  i === current ? "clamp(18px,2vw,28px)" : "clamp(6px,0.7vw,9px)",
              height: "clamp(6px,0.7vw,9px)",
              background: i === current ? "#FFFFFF" : "rgba(255,255,255,0.45)",
            }}
          />
        ))}
      </div>

      {/* ── Barra de progresso ─────────────────────── */}
      {!paused && (
        <div
          key={current}
          className="absolute bottom-0 left-0 z-20 h-[3px]"
          style={{
            background: "#D4A11E",
            animation: `progress-bar ${AUTO_PLAY_MS}ms linear forwards`,
          }}
        />
      )}

      <style>{`
        @keyframes progress-bar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
}
