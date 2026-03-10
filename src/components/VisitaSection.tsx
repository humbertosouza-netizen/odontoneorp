import { ENDERECO, CIDADE, CEP } from "@/lib/constants";
import WhatsAppLink from "@/components/WhatsAppLink";

const DIFERENCIAIS = [
  { icon: "☕", title: "Café de boas-vindas",    desc: "Você é recebido com carinho desde a entrada." },
  { icon: "🛋️", title: "Sala de espera confortável", desc: "Ambiente acolhedor e tranquilo para você relaxar." },
  { icon: "🤝", title: "Atendimento sem pressa", desc: "Cada paciente recebe atenção exclusiva e individual." },
  { icon: "📍", title: "Localização central",   desc: `${ENDERECO} · ${CIDADE}` },
];

export default function VisitaSection() {
  return (
    <section className="bg-white">
      <div className="section">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
          {/* Foto placeholder mapa / fachada */}
          <div className="relative order-last lg:order-first">
            <div
              className="absolute -bottom-4 -left-4 h-full w-full rounded-3xl"
              style={{ background: "linear-gradient(135deg, #EAF0F6, #D6E3F0)", border: "2px solid #EAF0F6" }}
            />
            <div
              className="relative flex aspect-square w-full items-center justify-center rounded-3xl text-center"
              style={{ background: "#EAF0F6", overflow: "hidden" }}
            >
              <div style={{ color: "#7A8694" }}>
                <div className="mb-2 text-5xl">🏥</div>
                <p className="text-sm font-semibold">Fachada / Mapa</p>
                <p className="text-xs opacity-60 mt-1">{ENDERECO}</p>
                <p className="text-xs opacity-60">{CIDADE} · {CEP}</p>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div>
            <span className="eyebrow mb-4 block">Nossa Clínica</span>
            <h2 className="title-section mb-2">Faça-nos uma visita</h2>
            <div className="gold-bar" />
            <p className="mb-8 text-base leading-relaxed text-ink-secondary">
              Esperamos você com café quentinho, atendimento humanizado e uma equipe pronta
              para cuidar do seu sorriso em São José do Rio Preto – SP.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-4">
              {DIFERENCIAIS.map((d) => (
                <div key={d.title} className="flex flex-col gap-2">
                  <span className="text-2xl">{d.icon}</span>
                  <p className="text-sm font-bold text-ink">{d.title}</p>
                  <p className="text-xs leading-relaxed text-ink-secondary">{d.desc}</p>
                </div>
              ))}
            </div>

            <WhatsAppLink message="Olá! Gostaria de agendar uma consulta gratuita." section="Visita" addPathname className="btn-wa">
              Agende sua consulta gratuita
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
