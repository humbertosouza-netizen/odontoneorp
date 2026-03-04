"use client";

import { useEffect, useState, useCallback } from "react";
import { WHATSAPP_LINK } from "@/lib/constants";

type Slide = {
  id: number;
  eyebrow: string;
  headline: string;
  subtitle: string;
  cta: string;
  ctaHref: string;
  photo: string | null;
  photoAlt: string;
  overlay: string;
};

const SLIDES: Slide[] = [
  {
    id: 1,
    eyebrow: "Invisalign® e ortodontia de excelência",
    headline: "Ortodontia Invisível",
    subtitle: "Alinhe seus dentes com conforto e discrição. Resultado estético e funcional sem aparelho convencional.",
    cta: "Fale Conosco Aqui",
    ctaHref: WHATSAPP_LINK,
    photo: "/banner-alinhador.png",
    photoAlt: "Alinhador Transparente",
    overlay: "rgba(15,35,60,0.72)",
  },
  {
    id: 2,
    eyebrow: "Solução definitiva para dentes perdidos",
    headline: "Implante Dentário",
    subtitle: "Na OdontoNeo Infinity oferecemos a solução permanente e de alto padrão para o seu caso.",
    cta: "Agendar Avaliação",
    ctaHref: WHATSAPP_LINK,
    photo: "/foto-clinica-1.jpg",
    photoAlt: "Clínica OdontoNeo",
    overlay: "rgba(15,35,60,0.7)",
  },
  {
    id: 3,
    eyebrow: "Transforme seu sorriso em dias",
    headline: "Lentes de Contato Dental",
    subtitle: "Finas capas de porcelana que transformam cor, forma e tamanho dos dentes com resultado natural.",
    cta: "Saiba Mais",
    ctaHref: WHATSAPP_LINK,
    photo: "/recepcao.jpg",
    photoAlt: "OdontoNeo Infinity",
    overlay: "rgba(22,45,74,0.68)",
  },
];

const AUTO_PLAY_MS = 6000;

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

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
        >
          {/* Imagem de fundo em tela cheia */}
          <div className="absolute inset-0">
            {s.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={s.photo}
                alt={s.photoAlt}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full" style={{ background: "linear-gradient(135deg, #162D4A 0%, #1F3A5F 50%, #2B5080 100%)" }} />
            )}
            {/* Overlay escuro */}
            <div className="absolute inset-0" style={{ background: s.overlay }} />
          </div>

          {/* Conteúdo — alinhado à esquerda no terço inferior, igual ao Vitta */}
          <div className="relative flex min-h-[100vh] flex-col justify-end px-6 pb-28 sm:px-12 lg:px-20">
            <p
              className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em]"
              style={{ color: "#D4A11E" }}
            >
              {s.eyebrow}
            </p>
            <h1
              className="mb-5 font-serif font-semibold leading-[1.08] text-white"
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 5.2rem)",
                letterSpacing: "-0.01em",
                maxWidth: "14ch",
              }}
            >
              {s.headline}
            </h1>
            <p
              className="mb-12 text-base leading-relaxed text-white/70 sm:text-lg"
              style={{ maxWidth: "44ch" }}
            >
              {s.subtitle}
            </p>

            {/* CTA estilo Vitta: texto dourado + linha + seta */}
            <a
              href={s.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-col gap-3 self-start transition-opacity hover:opacity-75"
            >
              <span
                className="text-[11px] font-bold uppercase tracking-[0.28em]"
                style={{ color: "#D4A11E" }}
              >
                {s.cta}
              </span>
              {/* Linha + seta estilo Vitta */}
              <span className="flex items-center gap-3">
                <span
                  className="block h-px transition-all duration-500 group-hover:w-16"
                  style={{ width: 40, background: "#D4A11E" }}
                />
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D4A11E"
                  strokeWidth={1.5}
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      ))}

      {/* Setas */}
      <button
        type="button"
        aria-label="Slide anterior"
        onClick={prev}
        className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:left-6"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Próximo slide"
        onClick={next}
        className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:right-6"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ir para slide ${i + 1}`}
            onClick={() => goTo(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? 24 : 8,
              height: 8,
              background: i === current ? "#FFFFFF" : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
