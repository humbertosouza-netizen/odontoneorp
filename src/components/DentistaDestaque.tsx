import Link from "next/link";
import { DENTISTA, CRO } from "@/lib/constants";

const PROFISSIONAIS = [
  {
    foto: "/foto-dr-gustavo-2.jpeg",
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
            className="font-serif mb-5 font-semibold leading-tight"
            style={{
              fontSize: "clamp(1.7rem, 3vw, 2.8rem)",
              color: "#0E0E0E",
              letterSpacing: "-0.01em",
            }}
          >
            A Excelência por trás do seu{" "}
            <em className="not-italic" style={{ color: "#D4A11E" }}>Novo Sorriso</em>
          </h2>

          <p className="mb-10 text-base leading-relaxed" style={{ color: "#4A4A4A", maxWidth: "44ch" }}>
            O nível de detalhe que o seu sorriso exige só pode ser entregue por
            profissionais especializados. Sob a liderança do{" "}
            <strong style={{ color: "#1F3A5F" }}>{DENTISTA} (Implantodontista e Especialista em Reabilitação Oral)</strong>,
            combinamos arte, ciência e tecnologia para entregar resultados estéticos
            inquestionáveis. Você está nas mãos de quem realmente entende do assunto.
          </p>

          {/* Botão outline estilo Vitta */}
          <Link
            href="/nossa-equipe"
            className="group inline-flex items-center gap-3 border px-7 py-3.5 text-sm font-medium transition-all duration-300 hover:bg-[#1F3A5F] hover:border-[#1F3A5F] hover:text-white"
            style={{ color: "#1F3A5F", borderColor: "#1F3A5F", borderRadius: "2px" }}
          >
            Conheça nossos profissionais
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* ── Direita: card Netflix — foto Dr. Gustavo ── */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="group relative w-full max-w-sm overflow-hidden rounded-2xl"
            style={{ aspectRatio: "3/4", boxShadow: "0 8px 48px rgba(0,0,0,0.28)", border: "1px solid rgba(212,161,30,0.2)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PROFISSIONAIS[0].foto}
              alt={PROFISSIONAIS[0].nome}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: "center 20%" }}
            />

            {/* Gradiente base */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,10,22,0.95) 0%, rgba(5,10,22,0.25) 50%, transparent 100%)" }} />

            {/* Badge CRO — topo direito */}
            <div
              className="absolute right-4 top-4 rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em]"
              style={{ background: "rgba(212,161,30,0.15)", border: "1px solid rgba(212,161,30,0.5)", color: "#D4A11E", backdropFilter: "blur(8px)" }}
            >
              {PROFISSIONAIS[0].cro}
            </div>

            {/* Nome + especialidade */}
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="mb-3 h-px w-8" style={{ background: "#D4A11E" }} />
              <p className="font-serif text-xl font-semibold leading-tight text-white">
                {PROFISSIONAIS[0].nome}
              </p>
              <p className="mt-1 text-[12px] font-medium" style={{ color: "#D4A11E" }}>
                {PROFISSIONAIS[0].especialidade}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
