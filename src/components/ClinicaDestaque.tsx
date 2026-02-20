import { WHATSAPP_LINK } from "@/lib/constants";

/* ─── Blob shapes via border-radius orgânico ────────────
   Substitua os <div class="photo-blob"> por <img> ou
   <Image> do Next.js apontando para /public/clinica-X.jpg
──────────────────────────────────────────────────────── */

export default function ClinicaDestaque() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#C8A96A" }}>

      {/* ── Onda superior (branca) ── */}
      <div className="pointer-events-none absolute left-0 right-0 top-0">
        <svg
          viewBox="0 0 1440 90"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full"
          style={{ height: "clamp(36px, 6vw, 90px)" }}
        >
          <path
            d="M0,0 C360,90 1080,90 1440,0 L1440,0 L0,0 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* ── Onda inferior (branca) ── */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 90"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full"
          style={{ height: "clamp(36px, 6vw, 90px)" }}
        >
          <path
            d="M0,90 C360,0 1080,0 1440,90 L1440,90 L0,90 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* ── Conteúdo ── */}
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-20 sm:gap-10 sm:px-6 sm:py-24 lg:grid-cols-3 lg:px-8 lg:py-28">

        {/* ── Blob foto 1 — esquerda ── */}
        <div className="flex justify-center">
          <div
            className="relative flex items-center justify-center overflow-hidden"
            style={{
              width:  "clamp(200px, 22vw, 320px)",
              height: "clamp(220px, 26vw, 360px)",
              /* Blob orgânico */
              borderRadius: "62% 38% 46% 54% / 44% 55% 45% 56%",
              border: "5px solid #1F3A5F",
              background: "#D6E6F2",
              boxShadow: "0 8px 32px rgba(31,58,95,0.22)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/recepcao.jpg"
              alt="Recepção da OdontoNeo Infinity"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>

        {/* ── Texto central ── */}
        <div className="text-center lg:text-left">
          <p
            className="mb-2 text-xs font-bold uppercase tracking-widest"
            style={{ color: "#1F3A5F" }}
          >
            OdontoNeo Infinity
          </p>

          <h2
            className="mb-5 leading-tight"
            style={{
              fontSize: "clamp(1.7rem, 3.2vw, 3rem)",
              letterSpacing: "-0.02em",
              color: "#1F3A5F",
            }}
          >
            Conforto que{" "}
            <span className="font-extrabold" style={{ color: "#1F3A5F" }}>
              impressiona
            </span>
          </h2>

          <p
            className="mb-3 text-sm leading-relaxed sm:text-base"
            style={{ color: "rgba(31,58,95,0.85)" }}
          >
            A OdontoNeo Infinity foi projetada para oferecer uma experiência
            odontológica de alto padrão em São José do Rio Preto – SP.
          </p>
          <p
            className="mb-7 text-sm leading-relaxed sm:text-base"
            style={{ color: "rgba(31,58,95,0.75)" }}
          >
            Nossa estrutura conta com equipamentos de última geração, ambientes
            climatizados, salas privativas e um design que valoriza o seu
            bem‑estar desde o primeiro momento.
          </p>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl px-7 py-3 text-sm font-bold text-white transition-all hover:opacity-90"
            style={{
              background: "#1F3A5F",
              boxShadow: "0 4px 16px rgba(31,58,95,0.3)",
            }}
          >
            Conheça a Clínica
          </a>
        </div>

        {/* ── Blob foto 2 — direita ── */}
        <div className="flex justify-center">
          <div
            className="relative flex items-center justify-center overflow-hidden"
            style={{
              width:  "clamp(200px, 22vw, 320px)",
              height: "clamp(220px, 26vw, 360px)",
              /* Blob orgânico espelhado */
              borderRadius: "38% 62% 54% 46% / 55% 44% 56% 45%",
              border: "5px solid #1F3A5F",
              background: "#D6E6F2",
              boxShadow: "0 8px 32px rgba(31,58,95,0.22)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/foto-clinica-1.jpg"
              alt="Clínica OdontoNeo Infinity"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
