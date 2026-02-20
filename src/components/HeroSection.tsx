import { WHATSAPP_LINK } from "@/lib/constants";

const BENEFITS = [
  { icon: "🤝", label: "Atendimento humanizado" },
  { icon: "💎", label: "Clínica premium" },
  { icon: "🏆", label: "Resultado duradouro" },
];

export default function HeroSection() {
  return (
    <section id="inicio" className="overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-0 pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* ── Coluna de texto ── */}
          <div className="order-2 lg:order-1">
            <span className="eyebrow mb-5 block">
              Dentista em São José do Rio Preto – SP
            </span>

            <h1 className="title-hero mb-6">
              Recupere seu sorriso e sua <em>confiança.</em>
            </h1>

            <p className="mb-8 max-w-lg text-lg leading-relaxed text-[#4A4A4A]">
              O implante dentário é a solução definitiva para quem perdeu um ou mais dentes ou
              deseja substituir dentaduras. Um pino de titânio substitui a raiz, é integrado
              ao osso e devolve aparência e função natural.
            </p>

            {/* Pills de benefício */}
            <div className="mb-8 flex flex-wrap gap-3">
              {BENEFITS.map((b) => (
                <span key={b.label} className="pill-blue gap-2">
                  <span>{b.icon}</span> {b.label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar Avaliação Gratuita
              </a>
              <a href="#tratamentos" className="btn-outline">
                Ver tratamentos
              </a>
            </div>
          </div>

          {/* ── Coluna de foto ── */}
          <div className="relative order-1 lg:order-2">
            {/* Sombra decorativa */}
            <div
              className="absolute -right-4 -top-4 h-full w-full rounded-3xl"
              style={{ background: "#EAF0F6" }}
            />
            <div className="photo-box relative aspect-[4/5] w-full rounded-3xl overflow-hidden">
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-center">
                <span className="text-5xl">📷</span>
                <p className="text-sm font-semibold">Foto principal</p>
                <p className="text-xs opacity-60">Paciente sorrindo / dentista / clínica</p>
              </div>
            </div>

            {/* Selo flutuante — pacientes */}
            <div
              className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-5 py-4"
              style={{ boxShadow: "0 8px 28px rgba(31,58,95,0.14)", border: "1px solid #EAF0F6" }}
            >
              <p className="text-2xl font-extrabold" style={{ color: "#1F3A5F", letterSpacing: "-0.02em" }}>3.000+</p>
              <p className="text-xs font-semibold text-[#4A4A4A]">Pacientes atendidos</p>
            </div>

            {/* Selo flutuante — avaliação */}
            <div
              className="absolute -right-3 top-8 rounded-2xl bg-white px-4 py-3"
              style={{ boxShadow: "0 8px 28px rgba(31,58,95,0.14)", border: "1px solid #EAF0F6" }}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">⭐</span>
                <div>
                  <p className="text-sm font-extrabold text-[#0E0E0E]">4.9 / 5.0</p>
                  <p className="text-[10px] text-[#4A4A4A]">Avaliação média</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Barra de stats ── */}
        <div
          className="mt-14 grid grid-cols-2 overflow-hidden rounded-t-2xl sm:grid-cols-4"
          style={{ background: "#1F3A5F" }}
        >
          {[
            { value: "3.000+", label: "Pacientes atendidos" },
            { value: "10+",    label: "Anos de experiência" },
            { value: "98%",    label: "Satisfação" },
            { value: "7",      label: "Especialidades" },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center px-6 py-6 text-center ${i < 3 ? "border-r border-white/10" : ""} ${i >= 2 ? "border-t border-white/10 sm:border-t-0" : ""}`}
            >
              <span
                className="text-2xl font-extrabold sm:text-3xl"
                style={{ color: "#D4A11E", letterSpacing: "-0.02em" }}
              >
                {s.value}
              </span>
              <span className="mt-1 text-xs text-white/55">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
