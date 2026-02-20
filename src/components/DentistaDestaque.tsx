import { DENTISTA, CRO, WHATSAPP_LINK } from "@/lib/constants";

export default function DentistaDestaque() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#1F3A5F" }}
    >
      {/* ── Triângulos decorativos brancos — topo ── */}
      <div className="pointer-events-none absolute left-0 right-0 top-0">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full"
          style={{ height: "clamp(32px,5vw,80px)" }}
        >
          {/* triângulo esquerdo */}
          <polygon points="0,0 420,0 0,80" fill="white" />
          {/* triângulo direito */}
          <polygon points="1440,0 1020,0 1440,80" fill="white" />
        </svg>
      </div>

      {/* ── Triângulos decorativos brancos — base ── */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full"
          style={{ height: "clamp(32px,5vw,80px)" }}
        >
          <polygon points="0,80 420,80 0,0" fill="white" />
          <polygon points="1440,80 1020,80 1440,0" fill="white" />
        </svg>
      </div>

      {/* ── Conteúdo ── */}
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">

        {/* ── Foto blob — esquerda ── */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Sombra bege/dourada atrás do blob */}
            <div
              style={{
                position: "absolute",
                inset: "-20px",
                borderRadius: "48% 52% 42% 58% / 44% 56% 44% 56%",
                background: "#C8A96A",
                zIndex: 0,
              }}
            />

            {/* Blob foto */}
            <div
              className="relative overflow-hidden"
              style={{
                width: "clamp(240px, 28vw, 400px)",
                height: "clamp(280px, 36vw, 500px)",
                borderRadius: "48% 52% 42% 58% / 44% 56% 44% 56%",
                background: "#D6E6F2",
                border: "5px solid rgba(255,255,255,0.25)",
                zIndex: 1,
                boxShadow: "0 16px 48px rgba(0,0,0,0.25)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/dr-gustavo-2.jpg"
                alt="Dr. Gustavo Giolo"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
              />
            </div>

          </div>
        </div>

        {/* ── Texto — direita ── */}
        <div>
          <p
            className="mb-3 text-xs font-semibold"
            style={{ color: "#C8A96A" }}
          >
            Proprietário da{" "}
            <span className="font-bold text-white">OdontoNeo Infinity</span>
          </p>

          <h2
            className="mb-6 text-white"
            style={{
              fontSize: "clamp(1.9rem, 3.5vw, 3.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
            }}
          >
            Dr.{" "}
            <span style={{ color: "#C8A96A" }}>Gustavo Giolo</span>
          </h2>

          {/* Linha dourada */}
          <div
            className="mb-6 h-[3px] w-12 rounded-full"
            style={{ background: "linear-gradient(90deg, #D4A11E, #F0C84E)" }}
          />

          <div className="space-y-4 text-sm leading-relaxed sm:text-base">
            <p style={{ color: "rgba(255,255,255,0.85)" }}>
              Especialista em transformar sorrisos com odontologia humanizada e de alta
              performance em São José do Rio Preto – SP.
            </p>
            <p style={{ color: "rgba(255,255,255,0.75)" }}>
              Com uma abordagem acolhedora e foco total no bem-estar do paciente, o
              Dr. Gustavo utiliza tecnologia de ponta e os materiais mais avançados para
              garantir resultados estéticos e funcionais de excelência — do implante
              mais complexo ao sorriso que você sempre sonhou.
            </p>
            <p style={{ color: "rgba(255,255,255,0.75)" }}>
              Reconhecido em São José do Rio Preto pela dedicação ao atendimento
              personalizado, está entre os dentistas que mais realizam{" "}
              <strong className="text-white">
                implantes e reabilitações orais completas
              </strong>{" "}
              na região.
            </p>
          </div>

          {/* CRO */}
          <div
            className="mb-7 mt-6 inline-flex items-center gap-2 rounded-xl px-4 py-2"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <span className="text-base">🦷</span>
            <span className="text-xs font-semibold text-white/70">
              {DENTISTA} · <span className="text-white">{CRO}</span>
            </span>
          </div>

          <br />

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold transition-all hover:opacity-90"
            style={{
              background: "#C8A96A",
              color: "#1F3A5F",
              boxShadow: "0 4px 16px rgba(200,169,106,0.4)",
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendar consulta gratuita
          </a>
        </div>

      </div>
    </section>
  );
}
