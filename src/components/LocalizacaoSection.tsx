import { ENDERECO, CIDADE, CEP } from "@/lib/constants";

const MAPS_LINK =
  "https://www.google.com/maps/search/Rua+Ondina+259+Vila+Redentora+São+José+do+Rio+Preto+SP";

export default function LocalizacaoSection() {
  return (
    <section id="contato" className="relative overflow-hidden bg-white">
      <div className="flex min-h-[420px] flex-col lg:flex-row">

        {/* ── Coluna esquerda — conteúdo bege ── */}
        <div
          className="relative z-10 flex w-full flex-col justify-center px-8 py-16 sm:px-12 sm:py-20 lg:w-[52%] lg:px-16 lg:py-24"
          style={{ background: "#F2E9D0" }}
        >
          {/* Eyebrow */}
          <p
            className="mb-3 text-sm font-bold uppercase tracking-widest"
            style={{ color: "#1F3A5F" }}
          >
            Onde fica?
          </p>

          {/* Título */}
          <h2
            className="mb-5 font-extrabold leading-tight"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              color: "#1F3A5F",
              letterSpacing: "-0.02em",
            }}
          >
            No coração de{" "}
            <br className="hidden sm:block" />
            São José do Rio Preto
          </h2>

          {/* Descrição */}
          <p
            className="mb-7 max-w-sm text-sm leading-relaxed sm:text-base"
            style={{ color: "rgba(31,58,95,0.75)" }}
          >
            Estamos localizados no bairro Vila Redentora, um dos endereços mais
            acessíveis e bem referenciados da cidade. Fácil acesso, estacionamento
            próximo e toda a comodidade que você merece para cuidar do seu sorriso.
          </p>

          {/* Endereço em destaque */}
          <div className="mb-8 border-l-4 pl-4" style={{ borderColor: "#D4A11E" }}>
            <p className="text-sm font-bold leading-snug" style={{ color: "#1F3A5F" }}>
              {ENDERECO}
            </p>
            <p className="text-sm font-bold leading-snug" style={{ color: "#1F3A5F" }}>
              {CIDADE} &nbsp;·&nbsp; {CEP}
            </p>
          </div>

          {/* Botão */}
          <div>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-7 py-3 text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95"
              style={{
                background: "#1F3A5F",
                boxShadow: "0 4px 16px rgba(31,58,95,0.3)",
              }}
            >
              {/* Pin icon */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Como chegar
            </a>
          </div>

          {/* Curva orgânica — borda direita da coluna esquerda */}
          <div
            className="pointer-events-none absolute right-0 top-0 hidden h-full lg:block"
            style={{ width: 80, transform: "translateX(50%)" }}
            aria-hidden
          >
            <svg
              viewBox="0 0 80 800"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <path
                d="M80,0 C30,200 10,400 80,800 L0,800 L0,0 Z"
                fill="#F2E9D0"
              />
            </svg>
          </div>
        </div>

        {/* ── Coluna direita — foto ── */}
        <div className="relative min-h-[300px] w-full lg:min-h-0 lg:w-[48%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/foto-clinica-1.jpg"
            alt="Fachada da OdontoNeo Infinity em São José do Rio Preto"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          {/* Gradiente suave na borda esquerda para integrar com a curva */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-20"
            style={{
              background: "linear-gradient(to right, #F2E9D0 0%, transparent 100%)",
            }}
          />
        </div>

      </div>
    </section>
  );
}
