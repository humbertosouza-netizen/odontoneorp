
export default function BannerSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Vídeo de fundo YouTube — autoplay, mudo, sem cliques */}
      <style dangerouslySetInnerHTML={{ __html: `
        .banner-video-wrap { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
        .banner-video-wrap iframe { position: absolute; top: 50%; left: 50%; width: max(100vw, 56.25vh); height: max(177.78vw, 100vh); transform: translate(-50%, -50%); pointer-events: none; }
      ` }} />
      <div className="banner-video-wrap" aria-hidden>
        <iframe
          src="https://www.youtube.com/embed/2Ny4ZRMSPnY?autoplay=1&mute=1&loop=1&playlist=2Ny4ZRMSPnY&controls=0&showinfo=0&rel=0"
          title="Vídeo de fundo OdontoNeo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ border: 0, display: "block" }}
        />
      </div>

      {/* Overlay azul escuro mais intenso para leitura */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(5,10,22,0.97) 0%, rgba(10,22,50,0.78) 50%, rgba(10,22,50,0.52) 100%)",
        }}
      />

      {/* Conteúdo — alinhado à esquerda no terço inferior */}
      <div className="relative flex min-h-[100vh] flex-col justify-end px-6 pb-28 sm:px-12 lg:px-20">

        {/* Eyebrow */}
        <p
          className="mb-5 text-[11px] font-bold uppercase tracking-[0.28em]"
          style={{ color: "#D4A11E" }}
        >
          OdontoNeo Infinity · São José do Rio Preto
        </p>

        {/* Headline */}
        <h1
          className="font-serif mb-6 font-semibold leading-[1.06] text-white"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 5rem)",
            letterSpacing: "-0.02em",
            maxWidth: "20ch",
          }}
        >
          O sorriso que você sempre quis,{" "}
          <em
            className="not-italic"
            style={{ color: "#D4A11E" }}
          >
            com a tecnologia que você não sabia que existia
          </em>{" "}
          em São José do Rio Preto.
        </h1>

        {/* Sub-headline */}
        <p
          className="mb-12 text-base leading-relaxed sm:text-lg"
          style={{ color: "rgba(255,255,255,0.65)", maxWidth: "54ch" }}
        >
          Recupere sua autoconfiança com tratamentos odontológicos de alta precisão.
          De Implantes Protocolo a Lentes de Contato Dental: o padrão OdontoNeo Infinity
          de excelência para quem não aceita menos que o melhor.
        </p>

        {/* CTA — Saiba mais (scroll para próxima seção) */}
        <a
          href="#clinica"
          className="group inline-flex flex-col gap-2 self-start transition-opacity hover:opacity-70"
        >
          <span
            className="text-[11px] font-bold uppercase tracking-[0.28em]"
            style={{ color: "#D4A11E" }}
          >
            Saiba mais
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
