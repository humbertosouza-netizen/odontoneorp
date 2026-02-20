import { WHATSAPP_LINK } from "@/lib/constants";

const STEPS = [
  {
    num: "01",
    title: "Avaliação",
    desc: "Exame clínico e de imagem completo para identificar a melhor solução para o seu caso, com explicação clara e sem pressão.",
    icon: "🔍",
  },
  {
    num: "02",
    title: "Planejamento",
    desc: "O Dr. Gustavo apresenta o plano de tratamento detalhado, com prazos e investimento, para você decidir com segurança.",
    icon: "📋",
  },
  {
    num: "03",
    title: "Tratamento e Acompanhamento",
    desc: "Procedimento realizado com tecnologia de ponta e acompanhamento contínuo até o resultado final do seu sorriso.",
    icon: "✅",
  },
];

export default function ProcessSection() {
  return (
    <section style={{ background: "#F7FAFD" }}>
      <div className="section">
        {/* Cabeçalho */}
        <div className="mb-14 text-center">
          <span className="eyebrow mb-3 block">Como funciona</span>
          <h2 className="title-section mb-3">
            3 passos para a transformação do seu sorriso
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-[#4A4A4A]">
            Nosso processo é transparente, humanizado e pensado para que você entenda
            cada etapa antes de iniciar o tratamento.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mx-auto max-w-5xl">
          {/* Linha conectora (desktop) */}
          <div
            className="absolute left-0 right-0 top-[2.75rem] hidden h-px lg:block"
            style={{ background: "linear-gradient(90deg, transparent, #D4A11E 20%, #D4A11E 80%, transparent)" }}
          />

          <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
            {STEPS.map((step) => (
              <div key={step.num} className="relative flex flex-col items-center text-center lg:items-center">
                {/* Número */}
                <div
                  className="relative z-10 mb-6 flex h-[5.5rem] w-[5.5rem] flex-col items-center justify-center rounded-full"
                  style={{
                    background: "#FFFFFF",
                    border: "3px solid #1F3A5F",
                    boxShadow: "0 4px 16px rgba(31,58,95,0.15)",
                  }}
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4A11E]">
                    PASSO
                  </span>
                  <span
                    className="text-2xl font-extrabold leading-none"
                    style={{ color: "#1F3A5F", letterSpacing: "-0.02em" }}
                  >
                    {step.num}
                  </span>
                </div>

                {/* Ícone + título + descrição */}
                <div className="px-2">
                  <span className="mb-2 block text-2xl">{step.icon}</span>
                  <h3 className="mb-2 text-lg font-bold text-[#0E0E0E]">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-[#4A4A4A]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendar avaliação gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
