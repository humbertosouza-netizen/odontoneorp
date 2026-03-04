import { WHATSAPP_LINK } from "@/lib/constants";

export default function ClinicaDestaque() {
  return (
    <section id="clinica" className="relative overflow-hidden bg-white py-24 lg:py-36">

      {/* ── Elemento decorativo abstrato (canto direito) — igual ao Vitta ── */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 opacity-20"
        style={{ width: "clamp(120px, 18vw, 280px)" }}
        aria-hidden
      >
        <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M180 10 C140 60, 60 80, 80 140 C100 200, 190 200, 170 270 C150 340, 60 340, 40 390"
            stroke="#D4A11E"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M160 30 C120 80, 40 100, 60 160 C80 220, 170 220, 150 290 C130 360, 40 360, 20 400"
            stroke="#D4A11E"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.5"
          />
          <circle cx="80" cy="140" r="3" fill="#D4A11E" />
          <circle cx="170" cy="270" r="2" fill="#D4A11E" opacity="0.6" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">

        {/* ── Foto — esquerda, retrato sem recorte ── */}
        <div className="relative">
          <div
            className="relative overflow-hidden"
            style={{ borderRadius: "4px", aspectRatio: "4/5" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/recepcao-ampla.jpg"
              alt="Clínica OdontoNeo Infinity — São José do Rio Preto"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
            />
          </div>

          {/* Badge flutuante — detalhe premium */}
          <div
            className="absolute -bottom-5 -right-4 hidden flex-col items-center justify-center rounded-full bg-white shadow-lg lg:flex"
            style={{
              width: 96,
              height: 96,
              border: "2px solid #D4A11E",
              boxShadow: "0 8px 28px rgba(212,161,30,0.2)",
            }}
          >
            <span
              className="font-serif text-2xl font-semibold leading-none"
              style={{ color: "#D4A11E" }}
            >
              10+
            </span>
            <span className="mt-0.5 text-center text-[9px] font-bold uppercase leading-tight tracking-wide text-gray-500">
              anos de<br />excelência
            </span>
          </div>
        </div>

        {/* ── Conteúdo — direita ── */}
        <div className="flex flex-col items-start">

          {/* Linha dourada + eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="block h-px w-8" style={{ background: "#D4A11E" }} />
            <span
              className="text-[10px] font-bold uppercase tracking-[0.25em]"
              style={{ color: "#D4A11E" }}
            >
              Sobre a clínica
            </span>
          </div>

          {/* Título — serif itálico igual ao Vitta */}
          <h2
            className="font-serif mb-6 font-semibold italic leading-tight"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
              color: "#D4A11E",
              letterSpacing: "-0.01em",
            }}
          >
            OdontoNeo Infinity
          </h2>

          {/* Texto descritivo */}
          <p
            className="mb-4 text-base leading-relaxed"
            style={{ color: "#4A4A4A", maxWidth: "46ch" }}
          >
            A OdontoNeo Infinity nasceu do sonho de oferecer uma odontologia de
            verdadeiro alto padrão em São José do Rio Preto – SP, unindo tecnologia
            de última geração com um atendimento humanizado e acolhedor.
          </p>
          <p
            className="mb-10 text-base leading-relaxed"
            style={{ color: "#7A8694", maxWidth: "46ch" }}
          >
            Nossa estrutura foi projetada para que você se sinta confortável desde
            a chegada: ambientes climatizados, salas privativas e equipamentos dos
            melhores protocolos do mercado, tudo para valorizar o seu sorriso.
          </p>

          {/* CTA outline — igual ao Vitta */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border px-7 py-3.5 text-sm font-medium transition-all duration-300 hover:bg-[#1F3A5F] hover:border-[#1F3A5F] hover:text-white"
            style={{
              color: "#1F3A5F",
              borderColor: "#1F3A5F",
              borderRadius: "2px",
            }}
          >
            Conheça a Clínica
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
