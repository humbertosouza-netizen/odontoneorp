import { WHATSAPP_LINK, DENTISTA, CRO } from "@/lib/constants";

const PROFISSIONAIS = [
  {
    foto: "/foto-dr-gustavo.jpeg",
    nome: "Dr. Gustavo Giolo",
    especialidade: "Implantodontista · Reabilitação Oral",
    cro: CRO,
    position: "top center",
  },
];

export default function DentistaDestaque() {

  return (
    <section
      id="dentista"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{ background: "#F7F4EE" }}
    >
      {/* Elemento decorativo — linhas douradas no fundo */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-10" aria-hidden>
        <svg viewBox="0 0 500 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <ellipse cx="400" cy="300" rx="280" ry="380" stroke="#D4A11E" strokeWidth="1" />
          <ellipse cx="400" cy="300" rx="220" ry="300" stroke="#D4A11E" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">

        {/* ── Esquerda: texto ── */}
        <div className="flex flex-col items-start">

          <div className="mb-6 flex items-center gap-3">
            <span className="block h-px w-8" style={{ background: "#D4A11E" }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#D4A11E" }}>
              Nossa equipe
            </span>
          </div>

          <h2
            className="font-serif mb-5 font-semibold italic leading-tight"
            style={{
              fontSize: "clamp(1.9rem, 3.2vw, 3rem)",
              color: "#D4A11E",
              letterSpacing: "-0.01em",
            }}
          >
            Profissionais<br />Especializados
          </h2>

          <p className="mb-3 text-base leading-relaxed" style={{ color: "#4A4A4A", maxWidth: "44ch" }}>
            Nossa equipe é especializada em cada área em que atua, com alto nível
            de conhecimento, preparo e dedicação a cada paciente.
          </p>
          <p className="mb-10 text-sm leading-relaxed" style={{ color: "#7A8694", maxWidth: "44ch" }}>
            Sob a liderança do {DENTISTA}, utilizamos as tecnologias mais avançadas
            para garantir resultados estéticos e funcionais de excelência —
            do implante mais complexo ao sorriso que você sempre sonhou.
          </p>

          {/* Botão outline estilo Vitta */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border px-7 py-3.5 text-sm font-medium transition-all duration-300 hover:bg-[#1F3A5F] hover:border-[#1F3A5F] hover:text-white"
            style={{ color: "#1F3A5F", borderColor: "#1F3A5F", borderRadius: "2px" }}
          >
            Agendar consulta gratuita
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

        {/* ── Direita: foto do Dr. Gustavo ── */}
        <div className="relative">
          <div
            className="group relative overflow-hidden rounded-xl"
            style={{
              height: "clamp(360px, 52vw, 520px)",
              border: "2px solid #D4A11E",
              boxShadow: "0 12px 48px rgba(0,0,0,0.18)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PROFISSIONAIS[0].foto}
              alt={PROFISSIONAIS[0].nome}
              className="group-hover:scale-105 transition-transform duration-700"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: PROFISSIONAIS[0].position,
              }}
            />

            {/* Overlay degradê no fundo */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(5,10,22,0.85) 0%, rgba(5,10,22,0.1) 55%, transparent 100%)",
              }}
            />

            {/* Nome + especialidade + CRO */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-serif text-xl font-semibold leading-tight text-white">
                {PROFISSIONAIS[0].nome}
              </p>
              <p className="mt-1 text-[12px] font-medium" style={{ color: "#D4A11E" }}>
                {PROFISSIONAIS[0].especialidade}
              </p>
              <p className="mt-1 text-[11px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                {PROFISSIONAIS[0].cro}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
