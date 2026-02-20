"use client";

import { useState, useEffect, useCallback } from "react";
import { WHATSAPP_LINK } from "@/lib/constants";

/* ── Fotos da estrutura ── */
const ESTRUTURA: { src: string; alt: string; label: string; position?: string }[] = [
  { src: "/recepcao.jpg",        alt: "Recepção da OdontoNeo",       label: "Recepção" },
  { src: "/recepcao-ampla.jpg",  alt: "Recepção ampla OdontoNeo",    label: "Recepção Ampla" },
  { src: "/sala-atendimento.jpg",alt: "Sala de atendimento",         label: "Sala de Atendimento" },
  { src: "/foto-clinica-1.jpg",  alt: "Clínica OdontoNeo Infinity",  label: "Clínica" },
];

/* ── Imagens já montadas de Antes & Depois ──────────────
   Adicione mais objetos conforme for recebendo as fotos.
   Sugestão de nome: antes-depois-2.jpg, antes-depois-3.jpg …
─────────────────────────────────────────────────────── */
const CASOS = [
  { id: 1, src: "/antes-depois-1.jpg", paciente: "Paciente 01", tratamento: "Lentes de Contato Dental" },
  // { id: 2, src: "/antes-depois-2.jpg", paciente: "Paciente 02", tratamento: "Lentes de Contato Dental" },
  // { id: 3, src: "/antes-depois-3.jpg", paciente: "Paciente 03", tratamento: "Prótese Protocolo" },
];

export default function GaleriaSection() {
  /* ── Carrossel estrutura ── */
  const [slide, setSlide] = useState(0);
  const total = ESTRUTURA.length;

  const prev = useCallback(() => setSlide((s) => (s - 1 + total) % total), [total]);
  const next = useCallback(() => setSlide((s) => (s + 1) % total), [total]);

  useEffect(() => {
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [next]);

  /* ── Carrossel antes/depois ── */
  const [casoAtivo, setCasoAtivo] = useState(0);
  const prevCaso = () => setCasoAtivo((c) => (c - 1 + CASOS.length) % CASOS.length);
  const nextCaso = () => setCasoAtivo((c) => (c + 1) % CASOS.length);

  const caso = CASOS[casoAtivo];

  return (
    <section id="galeria" className="bg-white">
      {/* Cabeçalho */}
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-10 text-center sm:px-6 sm:pt-20 lg:px-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A11E" }}>
          Nossa Estrutura & Resultados
        </p>
        <h2
          className="mb-3 font-extrabold leading-tight"
          style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", color: "#0E0E0E", letterSpacing: "-0.015em" }}
        >
          Veja onde você vai ser atendido
          <br className="hidden sm:block" />
          <span style={{ color: "#1F3A5F" }}>e os resultados que entregamos</span>
        </h2>
        <p className="mx-auto max-w-xl text-sm text-[#4A4A4A] sm:text-base">
          Uma clínica premium, equipamentos modernos e transformações reais de pacientes que
          confiaram no Dr. Gustavo Giolo.
        </p>
      </div>

      {/* Grid principal */}
      <div className="mx-auto grid max-w-6xl gap-6 px-4 pb-16 sm:px-6 sm:pb-20 lg:grid-cols-2 lg:px-8 lg:pb-24">

        {/* ══ COLUNA ESQUERDA — Carrossel estrutura ══ */}
        <div className="flex flex-col">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#1F3A5F" }}>
            📍 Nossa Estrutura
          </p>

          <div
            className="relative overflow-hidden rounded-2xl shadow-lg"
            style={{ aspectRatio: "4/3", background: "#EAF0F6" }}
          >
            {ESTRUTURA.map((foto, i) => (
              <div
                key={foto.src}
                className="absolute inset-0 transition-opacity duration-700"
                style={{ opacity: i === slide ? 1 : 0, zIndex: i === slide ? 1 : 0 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={foto.src}
                  alt={foto.alt}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: foto.position ?? "center" }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-5 py-4"
                  style={{ background: "linear-gradient(to top, rgba(22,45,74,0.85) 0%, transparent 100%)" }}
                >
                  <p className="text-sm font-bold text-white">{foto.label}</p>
                </div>
              </div>
            ))}

            {/* Setas */}
            {([{ dir: "prev", onClick: prev, left: true }, { dir: "next", onClick: next, left: false }] as const).map(({ dir, onClick, left }) => (
              <button
                key={dir}
                onClick={onClick}
                aria-label={dir}
                className="absolute top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-white transition-opacity hover:opacity-100"
                style={{ [left ? "left" : "right"]: 12, background: "rgba(31,58,95,0.65)", backdropFilter: "blur(4px)", fontSize: 13 }}
              >
                {left ? "◀" : "▶"}
              </button>
            ))}

            {/* Dots */}
            <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-2">
              {ESTRUTURA.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                  className="rounded-full transition-all"
                  style={{ width: i === slide ? 20 : 8, height: 8, background: i === slide ? "#D4A11E" : "rgba(255,255,255,0.55)" }}
                />
              ))}
            </div>
          </div>

          {/* Miniaturas */}
          <div className="mt-3 grid grid-cols-3 gap-2">
            {ESTRUTURA.map((foto, i) => (
              <button
                key={foto.src}
                onClick={() => setSlide(i)}
                className="overflow-hidden rounded-xl transition-all"
                style={{ aspectRatio: "4/3", outline: i === slide ? "3px solid #D4A11E" : "2px solid transparent", outlineOffset: 2 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={foto.src}
                  alt={foto.alt}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: foto.position ?? "center" }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* ══ COLUNA DIREITA — Antes & Depois ══ */}
        <div className="flex flex-col">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A11E" }}>
            ✨ Antes & Depois — Resultados Reais
          </p>

          {/* Imagem já montada */}
          <div
            className="relative overflow-hidden rounded-2xl shadow-lg"
            style={{ aspectRatio: "4/3", background: "#EAF0F6" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={caso.src}
              src={caso.src}
              alt={`${caso.paciente} — ${caso.tratamento}`}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", transition: "opacity 0.5s" }}
            />

            {/* Badge paciente */}
            <div
              className="absolute left-4 top-4 rounded-xl px-3 py-1.5"
              style={{ background: "rgba(22,45,74,0.75)", backdropFilter: "blur(6px)" }}
            >
              <p className="text-xs font-bold text-white">{caso.paciente}</p>
              <p className="text-[10px] text-white/70">{caso.tratamento}</p>
            </div>

            {/* Setas — só aparecem se houver mais de 1 caso */}
            {CASOS.length > 1 && (
              <>
                <button
                  onClick={prevCaso}
                  aria-label="Caso anterior"
                  className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-white"
                  style={{ background: "rgba(31,58,95,0.65)", backdropFilter: "blur(4px)", fontSize: 13 }}
                >◀</button>
                <button
                  onClick={nextCaso}
                  aria-label="Próximo caso"
                  className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-white"
                  style={{ background: "rgba(31,58,95,0.65)", backdropFilter: "blur(4px)", fontSize: 13 }}
                >▶</button>
              </>
            )}

            {/* Dots */}
            {CASOS.length > 1 && (
              <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                {CASOS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCasoAtivo(i)}
                    aria-label={`Caso ${i + 1}`}
                    className="rounded-full transition-all"
                    style={{ width: i === casoAtivo ? 20 : 8, height: 8, background: i === casoAtivo ? "#D4A11E" : "rgba(255,255,255,0.55)" }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Miniaturas — só se houver mais de 1 */}
          {CASOS.length > 1 && (
            <div className="mt-3 grid gap-2" style={{ gridTemplateColumns: `repeat(${Math.min(CASOS.length, 4)}, 1fr)` }}>
              {CASOS.map((c, i) => (
                <button
                  key={c.src}
                  onClick={() => setCasoAtivo(i)}
                  className="overflow-hidden rounded-xl transition-all"
                  style={{ aspectRatio: "4/3", outline: i === casoAtivo ? "3px solid #D4A11E" : "2px solid transparent", outlineOffset: 2 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.src} alt={c.paciente} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </button>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-4 flex flex-col items-center gap-3 rounded-2xl px-6 py-5 text-center" style={{ background: "#EAF0F6" }}>
            <p className="text-sm font-bold" style={{ color: "#1F3A5F" }}>
              Quer um resultado assim?
            </p>
            <p className="text-xs text-[#4A4A4A]">
              Agende uma avaliação gratuita com o Dr. Gustavo Giolo e descubra o tratamento ideal para o seu sorriso.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white transition-all hover:opacity-90"
              style={{ background: "#25D366", boxShadow: "0 4px 14px rgba(37,211,102,0.35)" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Quero um resultado assim
            </a>
            <p className="text-[10px] text-[#7A8694]">* Resultados individuais. Fotos com autorização dos pacientes.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
