import { DENTISTA, CRO, WHATSAPP_LINK } from "@/lib/constants";

const BULLETS = [
  { icon: "🎓", text: "Especialista em Implantodontia e Reabilitação Oral" },
  { icon: "⭐", text: "Atendimento personalizado com escuta ativa e paciência" },
  { icon: "🏆", text: "Clínica equipada com tecnologia de ponta" },
  { icon: "❤️", text: "Foco em pacientes adultos, idosos e famílias" },
];

const TECHS = [
  { label: "Implantes de titânio" },
  { label: "Protocolo All-on-4" },
  { label: "Planejamento digital" },
  { label: "Radiografia panorâmica" },
];

export default function DentistaSection() {
  return (
    <section id="dentista" className="bg-white">
      <div className="section">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">

          {/* ── Foto ── */}
          <div className="relative">
            <div
              className="absolute -left-3 -top-3 h-full w-full rounded-3xl"
              style={{ background: "#EAF0F6", border: "2px solid #D4E3F0" }}
            />
            <div className="photo-box relative aspect-[3/4] w-full rounded-3xl overflow-hidden">
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-center">
                <span className="text-5xl">📷</span>
                <p className="text-sm font-semibold">{DENTISTA}</p>
                <p className="text-xs opacity-60">Foto profissional do dentista</p>
              </div>
            </div>

            {/* Badge CRO */}
            <div
              className="absolute -right-4 bottom-8 rounded-2xl bg-white px-4 py-3"
              style={{ boxShadow: "0 8px 24px rgba(31,58,95,0.18)", border: "1px solid #EAF0F6" }}
            >
              <p className="text-[10px] font-semibold text-[#4A4A4A]">Registro Profissional</p>
              <p className="text-sm font-extrabold" style={{ color: "#1F3A5F" }}>{CRO}</p>
            </div>
          </div>

          {/* ── Conteúdo ── */}
          <div>
            <span className="eyebrow mb-4 block">Expertise técnica com sensibilidade humana</span>

            <h2 className="title-section mb-2">
              Seu sorriso renovado com tecnologia e cuidado
            </h2>
            <p className="mb-2 text-xl font-bold" style={{ color: "#D4A11E" }}>{DENTISTA}</p>
            <div className="gold-bar" />

            <p className="mb-6 text-base leading-relaxed text-[#4A4A4A]">
              Na OdontoNeo Infinity, realizamos tratamentos com tecnologia de ponta e cuidado
              humanizado. Nossa estrutura premium garante previsibilidade, conforto e
              longevidade para cada tratamento, do mais simples ao mais complexo.
            </p>

            {/* Bullets */}
            <ul className="mb-7 space-y-3">
              {BULLETS.map((b) => (
                <li key={b.text} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-sm"
                    style={{ background: "#EAF0F6" }}
                  >
                    {b.icon}
                  </span>
                  <span className="text-sm leading-relaxed text-[#4A4A4A]">{b.text}</span>
                </li>
              ))}
            </ul>

            {/* Tecnologias */}
            <div
              className="mb-7 rounded-2xl px-5 py-4"
              style={{ background: "#F7FAFD", border: "1px solid #E8EEF5" }}
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#1F3A5F]">
                Tecnologias e técnicas utilizadas
              </p>
              <div className="flex flex-wrap gap-2">
                {TECHS.map((t) => (
                  <span key={t.label} className="pill-blue text-xs">
                    {t.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa">
                Agende sua consulta gratuita
              </a>
              <a href="#agendamento" className="btn-outline">
                Saiba mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
