import { WHATSAPP_LINK } from "@/lib/constants";

export default function BannerSection() {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* ── Foto de fundo ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/foto-principal.jpg"
        alt="OdontoNeo Infinity – Clínica Odontológica em São José do Rio Preto"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* ── Overlay escuro ── */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(5,10,22,0.82) 0%, rgba(5,10,22,0.45) 50%, rgba(5,10,22,0.15) 100%)" }}
      />

      {/* ── Conteúdo — terço inferior esquerdo, estilo Vitta ── */}
      <div className="relative flex min-h-[100vh] flex-col justify-end px-6 pb-28 sm:px-12 lg:px-20">

        {/* Eyebrow */}
        <p
          className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em]"
          style={{ color: "#D4A11E" }}
        >
          Odontologia de alto padrão · São José do Rio Preto – SP
        </p>

        {/* Título */}
        <h1
          className="mb-5 font-serif font-semibold leading-[1.08] text-white"
          style={{
            fontSize: "clamp(2.4rem, 5.5vw, 5.2rem)",
            letterSpacing: "-0.01em",
            maxWidth: "14ch",
          }}
        >
          O sorriso que você sempre sonhou
        </h1>

        {/* Subtítulo */}
        <p
          className="mb-12 text-base leading-relaxed text-white/70 sm:text-lg"
          style={{ maxWidth: "44ch" }}
        >
          Implantes, lentes de contato dental, clareamento e muito mais —
          com tecnologia de ponta e 0 dor.
        </p>

        {/* CTA estilo Vitta */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex flex-col gap-3 self-start transition-opacity hover:opacity-75"
        >
          <span
            className="text-[11px] font-bold uppercase tracking-[0.28em]"
            style={{ color: "#D4A11E" }}
          >
            Agendar avaliação gratuita
          </span>
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
    </section>
  );
}
