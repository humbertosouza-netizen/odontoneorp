"use client";

import { useState } from "react";
import { WHATSAPP_LINK } from "@/lib/constants";

/* ── Serviços em destaque (coluna esquerda) ────────── */
const DESTAQUES = [
  {
    iconImg: "/implante-dentario.png",
    titulo: "Implante Dentário",
    desc: "A solução definitiva para quem perdeu um ou mais dentes ou deseja substituir as dentaduras. Na OdontoNeo Infinity oferecemos a solução permanente e de alto padrão para o seu caso.",
  },
  {
    iconImg: "/protese-protocolo.png",
    titulo: "Prótese Protocolo",
    desc: "Prótese fixa sobre implantes indicada para quem perdeu todos ou quase todos os dentes. Volte a sorrir, falar e mastigar com total segurança e confiança.",
  },
];

/* ── Serviços do carrossel (abaixo) ─────────────────── */
const CARROSSEL = [
  {
    icon: "✨",
    iconImg: "/lentes-contato.jpg",
    imgPosition: "center 60%",
    titulo: "Lentes de Contato Dental",
    desc: "Finas capas de porcelana que transformam cor, forma e tamanho dos dentes com resultado natural e duradouro.",
  },
  {
    icon: "💎",
    iconImg: "/clareamento-dental.jpg",
    titulo: "Clareamento Dental",
    desc: "Procedimento seguro que clareia os dentes em até 8 tons, realizado com géis certificados e supervisão profissional.",
  },
  {
    icon: "🌿",
    iconImg: "/tratamento-gengiva.jpg",
    titulo: "Tratamento de Gengiva",
    desc: "Diagnóstico e tratamento de gengivite e periodontite. Gengiva saudável é a base de um sorriso bonito.",
  },
  {
    icon: "💆",
    iconImg: "/harmonizacao-orofacial.jpg",
    titulo: "Harmonização Orofacial",
    desc: "Procedimentos que harmonizam o rosto valorizando o seu sorriso. Mais autoestima com resultados naturais.",
  },
  {
    icon: "🪥",
    iconImg: "/alinhador-transparente.jpg",
    titulo: "Alinhador Transparente",
    desc: "Alinhe seus dentes com conforto e discrição. Resultado estético e funcional sem uso de aparelho convencional.",
  },
  {
    icon: "💉",
    iconImg: "/tratamento-canal.jpg",
    titulo: "Tratamento de Canal",
    desc: "Elimine a dor e salve o dente. Procedimento indolor com anestesia adequada e acompanhamento completo.",
  },
];

/* ── Número de cards visíveis por breakpoint ─────────
   Controlado por JS: 1 mobile, 3 desktop (simulado)    */
const VISIBLE = 3;

export default function ServicosSection() {
  const [start, setStart] = useState(0);
  const max = CARROSSEL.length - VISIBLE;

  const prev = () => setStart((s) => Math.max(s - 1, 0));
  const next = () => setStart((s) => Math.min(s + 1, max));

  const visible = CARROSSEL.slice(start, start + VISIBLE);

  return (
    <section
      className="relative overflow-hidden bg-white"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V16L28 0l28 16v34z' fill='none' stroke='%231F3A5F' stroke-width='0.5' stroke-opacity='0.07'/%3E%3Cpath d='M28 100L0 84V50l28-16 28 16v34z' fill='none' stroke='%231F3A5F' stroke-width='0.5' stroke-opacity='0.07'/%3E%3C/svg%3E")`,
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        {/* ══════════════════════════════════════════
            PARTE SUPERIOR — destaques + blob foto
        ══════════════════════════════════════════ */}
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Coluna esquerda — texto */}
          <div>
            <p
              className="mb-2 text-xs font-bold uppercase tracking-widest"
              style={{ color: "#D4A11E" }}
            >
              Como Podemos Ajudar Você
            </p>
            <h2
              className="mb-10"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
                color: "#1F3A5F",
              }}
            >
              Consultas &amp; Serviços
            </h2>

            <div className="space-y-8">
              {DESTAQUES.map((s) => (
                <div key={s.titulo} className="flex gap-4">
                  {/* Ícone badge */}
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl p-2"
                    style={{
                      background: "linear-gradient(135deg, #1F3A5F, #2B5080)",
                      boxShadow: "0 4px 12px rgba(31,58,95,0.25)",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.iconImg}
                      alt={s.titulo}
                      style={{ width: "100%", height: "100%", objectFit: "contain", filter: "brightness(0) invert(1)" }}
                    />
                  </div>

                  {/* Conteúdo */}
                  <div>
                    <h3
                      className="mb-1 text-base font-bold sm:text-lg"
                      style={{ color: "#1F3A5F" }}
                    >
                      {s.titulo}
                    </h3>
                    <p className="mb-3 text-sm leading-relaxed text-[#4A4A4A]">
                      {s.desc}
                    </p>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg px-5 py-2 text-xs font-bold text-white transition-all hover:opacity-90"
                      style={{
                        background: "#1F3A5F",
                        boxShadow: "0 3px 10px rgba(31,58,95,0.25)",
                      }}
                    >
                      Saiba Mais
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna direita — blob foto sticky */}
          <div className="flex justify-center lg:sticky lg:top-24">
            <div className="relative">
              {/* Sombra bege atrás */}
              <div
                style={{
                  position: "absolute",
                  inset: "-18px",
                  borderRadius: "42% 58% 38% 62% / 52% 44% 56% 48%",
                  background: "#C8A96A",
                  zIndex: 0,
                }}
              />
              {/* Blob */}
              <div
                className="relative overflow-hidden"
                style={{
                  width: "clamp(260px, 30vw, 420px)",
                  height: "clamp(300px, 38vw, 520px)",
                  borderRadius: "42% 58% 38% 62% / 52% 44% 56% 48%",
                  border: "5px solid #1F3A5F",
                  background: "#D6E6F2",
                  zIndex: 1,
                  boxShadow: "0 12px 40px rgba(31,58,95,0.22)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/dr-gustavo.jpg"
                  alt="Dr. Gustavo Giolo"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            PARTE INFERIOR — carrossel de serviços
        ══════════════════════════════════════════ */}
        <div className="relative mt-20">
          {/* Seta esquerda */}
          <button
            type="button"
            aria-label="Anterior"
            onClick={prev}
            disabled={start === 0}
            className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border text-[#1F3A5F] transition-all hover:bg-[#1F3A5F] hover:text-white disabled:opacity-25 sm:-left-6"
            style={{ background: "#FFFFFF", borderColor: "#D4DCE8", boxShadow: "0 2px 8px rgba(31,58,95,0.12)" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {visible.map((s) => (
              <div
                key={s.titulo}
                className="flex flex-col items-center rounded-3xl px-5 pb-7 pt-6 text-center transition-all hover:-translate-y-1"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E8EEF5",
                  boxShadow: "0 2px 12px rgba(31,58,95,0.07)",
                }}
              >
                {/* Blob mini foto */}
                <div
                  className="mb-5 flex items-center justify-center overflow-hidden"
                  style={{
                    width: 110,
                    height: 120,
                    borderRadius: "44% 56% 50% 50% / 52% 48% 52% 48%",
                    border: "3px solid #1F3A5F",
                    background: "#EAF0F6",
                    boxShadow: "0 4px 16px rgba(31,58,95,0.15)",
                  }}
                >
                  {"iconImg" in s && s.iconImg ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={s.iconImg}
                      alt={s.titulo}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "imgPosition" in s && s.imgPosition ? s.imgPosition : "center",
                      }}
                    />
                  ) : (
                    <span className="text-3xl">{s.icon}</span>
                  )}
                </div>

                <h3
                  className="mb-2 text-sm font-bold sm:text-base"
                  style={{ color: "#1F3A5F" }}
                >
                  {s.titulo}
                </h3>
                <p className="mb-4 text-xs leading-relaxed text-[#4A4A4A]">
                  {s.desc}
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-2 text-xs font-bold text-[#1F3A5F] transition-all hover:opacity-80"
                  style={{
                    background: "#C8A96A",
                  }}
                >
                  Saiba mais
                </a>
              </div>
            ))}
          </div>

          {/* Seta direita */}
          <button
            type="button"
            aria-label="Próximo"
            onClick={next}
            disabled={start >= max}
            className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border text-[#1F3A5F] transition-all hover:bg-[#1F3A5F] hover:text-white disabled:opacity-25 sm:-right-6"
            style={{ background: "#FFFFFF", borderColor: "#D4DCE8", boxShadow: "0 2px 8px rgba(31,58,95,0.12)" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: max + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Página ${i + 1}`}
                onClick={() => setStart(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width:  i === start ? 24 : 8,
                  height: 8,
                  background: i === start ? "#1F3A5F" : "#D4DCE8",
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
