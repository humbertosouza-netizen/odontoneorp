"use client";

const PANELS = [
  {
    id: "tratamentos",
    label: "Tratamentos",
    sub: "Soluções completas para o seu sorriso",
    cta: "Ver Tratamentos",
    href: "/tratamentos",
    photo: "/sala-atendimento.jpg",
    alt: "Sala de atendimento OdontoNeo Infinity",
  },
  {
    id: "tecnologias",
    label: "Tecnologias",
    sub: "Equipamentos de última geração",
    cta: "Ver Tecnologias",
    href: "#dentista",
    photo: "/recepcao-ampla.jpg",
    alt: "Estrutura moderna da OdontoNeo Infinity",
  },
];

export default function ServicosSection() {
  return (
    <section className="w-full" aria-label="Tratamentos e Tecnologias">
      <div className="flex flex-col lg:flex-row" style={{ minHeight: "clamp(380px, 55vh, 620px)" }}>
        {PANELS.map((panel, idx) => (
          <a
            key={panel.id}
            href={panel.href}
            className="group relative flex flex-1 overflow-hidden"
            style={{ minHeight: "clamp(280px, 45vh, 620px)" }}
          >
            {/* ── Foto de fundo ── */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={panel.photo}
              alt={panel.alt}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
              className="group-hover:scale-105"
            />

            {/* ── Overlay escuro ── */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(5,10,22,0.88) 0%, rgba(5,10,22,0.45) 50%, rgba(5,10,22,0.2) 100%)",
                transition: "background 0.4s ease",
              }}
              className="group-hover:[background:linear-gradient(to_top,rgba(5,10,22,0.92)_0%,rgba(5,10,22,0.55)_50%,rgba(5,10,22,0.25)_100%)]"
            />

            {/* ── Separador orgânico entre os painéis (apenas no 1º, no desktop) ── */}
            {idx === 0 && (
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden lg:block" style={{ width: 60 }}>
                <svg
                  viewBox="0 0 60 100"
                  preserveAspectRatio="none"
                  className="h-full w-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0 Q40 50 0 100 L60 100 L60 0 Z" fill="white" fillOpacity="0" />
                </svg>
              </div>
            )}

            {/* ── Conteúdo — posicionado no rodapé esquerdo ── */}
            <div
              className="relative z-10 flex h-full w-full flex-col justify-end px-8 pb-12 sm:px-12 sm:pb-14 lg:px-14 lg:pb-16"
            >
              {/* Número indicador (detalhe premium) */}
              <span
                className="mb-4 block text-[11px] font-bold uppercase tracking-[0.3em]"
                style={{ color: "rgba(212,161,30,0.7)" }}
              >
                0{idx + 1}
              </span>

              {/* Título serif */}
              <h2
                className="font-serif mb-1 font-semibold text-white transition-all duration-300 group-hover:text-white"
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3.4rem)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                }}
              >
                {panel.label}
              </h2>

              {/* Subtítulo */}
              <p
                className="mb-6 text-sm font-light text-white/55 transition-colors duration-300 group-hover:text-white/70"
                style={{ letterSpacing: "0.02em" }}
              >
                {panel.sub}
              </p>

              {/* CTA estilo Vitta — linha + texto + seta */}
              <div className="flex items-center gap-3">
                <span
                  className="block h-px transition-all duration-500 group-hover:w-14"
                  style={{ width: 32, background: "#D4A11E" }}
                />
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.28em] transition-colors duration-300"
                  style={{ color: "#D4A11E" }}
                >
                  {panel.cta}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D4A11E"
                  strokeWidth={1.5}
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
