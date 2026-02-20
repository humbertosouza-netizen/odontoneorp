import { WHATSAPP_LINK } from "@/lib/constants";

const DEPOIMENTOS = [
  {
    nome: "Maria Aparecida S.",
    idade: 62,
    texto: "Depois do implante, minha vida mudou completamente. Recuperei a confiança para sorrir e comer sem dor. O Dr. Gustavo foi extremamente atencioso.",
    stars: 5,
  },
  {
    nome: "João Carlos P.",
    idade: 58,
    texto: "Sempre tive medo de dentista, mas o atendimento da OdontoNeo me deixou tão à vontade que nem percebi a consulta passar. Recomendo demais!",
    stars: 5,
  },
  {
    nome: "Ana Luíza F.",
    idade: 45,
    texto: "Fiz o clareamento e as lentes de contato dental. O resultado foi incrível — melhor do que eu esperava. Ambiente lindo e equipe super profissional.",
    stars: 5,
  },
];

export default function DepoimentosSection() {
  return (
    <section style={{ background: "#1F3A5F" }}>
      <div className="section">
        {/* Cabeçalho */}
        <div className="mb-14 text-center">
          <span className="eyebrow-white mb-3 block">Depoimentos</span>
          <h2 className="title-section-white mb-3">É tudo sobre o seu sorriso!</h2>
          <p className="mx-auto max-w-xl text-base text-white/60">
            Veja os depoimentos de quem escolheu viver de frente com a OdontoNeo São José do Rio Preto!
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-3">
          {DEPOIMENTOS.map((d) => (
            <article
              key={d.nome}
              className="flex flex-col rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              {/* Estrelas */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: d.stars }).map((_, i) => (
                  <span key={i} style={{ color: "#D4A11E" }}>★</span>
                ))}
              </div>

              {/* Citação */}
              <blockquote className="mb-5 flex-1 text-sm leading-relaxed text-white/75">
                &ldquo;{d.texto}&rdquo;
              </blockquote>

              {/* Autor */}
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-lg"
                  style={{ background: "rgba(212,161,30,0.2)", border: "1px solid rgba(212,161,30,0.35)" }}
                >
                  😊
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{d.nome}</p>
                  <p className="text-xs text-white/45">{d.idade} anos · Paciente</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Placeholder vídeos */}
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex aspect-video items-center justify-center rounded-2xl text-sm font-medium text-white/30"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              ▶ Vídeo depoimento {i}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa">
            Agende sua consulta gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
