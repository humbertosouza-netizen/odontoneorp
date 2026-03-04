import Link from "next/link";
import { WHATSAPP_LINK } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resultados Reais | OdontoNeo Infinity – São José do Rio Preto",
  description:
    "Veja os resultados reais de pacientes da OdontoNeo Infinity: antes e depois de implantes, lentes de contato dental, clareamento e harmonização orofacial. Dr. Gustavo Giolo – CRO-SP 140.793.",
};

/* ─── Casos antes/depois ─────────────────────────────────────
   Para adicionar novos casos, basta incluir um objeto neste array
   com a imagem combinada (antes à esquerda, depois à direita).
   As imagens devem ser adicionadas na pasta /public.
──────────────────────────────────────────────────────────── */
const CASOS = [
  {
    id: "caso-01",
    paciente: "Paciente 01",
    tratamento: "Lentes de Contato Dental",
    descricao: "Transformação completa do sorriso com lentes de porcelana ultra-finas, corrigindo cor, forma e alinhamento dos dentes.",
    foto: "/antes-depois-1.jpg",
    categoria: "Estética",
  },
  {
    id: "caso-02",
    paciente: "Paciente 02",
    tratamento: "Clareamento Dental",
    descricao: "Resultado de clareamento profissional em consultório, com melhora de até 8 tons na cor dos dentes.",
    foto: "/clareamento-dental.jpg",
    categoria: "Estética",
  },
  {
    id: "caso-03",
    paciente: "Paciente 03",
    tratamento: "Implante Dentário",
    descricao: "Reabilitação oral com implante unitário. Resultado com aparência e função idênticas ao dente natural.",
    foto: "/implante-dentario.png",
    categoria: "Implantodontia",
  },
  {
    id: "caso-04",
    paciente: "Paciente 04",
    tratamento: "Prótese Protocolo",
    descricao: "Reabilitação total da arcada com prótese protocolo fixa sobre implantes. Paciente recuperou função e estética.",
    foto: "/protese-protocolo.png",
    categoria: "Implantodontia",
  },
];

const CATEGORIAS = ["Todos", "Estética", "Implantodontia"];

const DEPOIMENTOS = [
  {
    texto: "Depois do implante, minha vida mudou completamente. Recuperei a confiança para sorrir e comer sem dor. O Dr. Gustavo foi extremamente atencioso.",
    nome: "Maria Aparecida S.",
    detalhe: "62 anos · Implante Dentário",
  },
  {
    texto: "Sempre tive medo de dentista, mas o atendimento da OdontoNeo me deixou tão à vontade que nem percebi a consulta passar. Recomendo demais!",
    nome: "João Carlos P.",
    detalhe: "58 anos · Prótese Protocolo",
  },
  {
    texto: "Fiz o clareamento e as lentes de contato dental. O resultado foi incrível — melhor do que eu esperava. Ambiente lindo e equipe super profissional.",
    nome: "Ana Luíza F.",
    detalhe: "45 anos · Lentes de Contato",
  },
];

export default function ResultadosReaisPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: "clamp(300px, 45vh, 520px)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/antes-depois-1.jpg"
          alt="Resultados reais OdontoNeo Infinity"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,10,22,0.92) 0%, rgba(5,10,22,0.5) 55%, rgba(5,10,22,0.1) 100%)" }} />

        <div className="relative z-10 w-full px-6 pb-14 sm:px-12 lg:px-20">
          <Link href="/" className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-white/50 transition-colors hover:text-white/80">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Voltar
          </Link>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: "#D4A11E" }}>
            OdontoNeo Infinity
          </p>
          <h1
            className="font-serif mb-4 font-semibold text-white"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)", letterSpacing: "-0.02em", lineHeight: 1.08 }}
          >
            Resultados Reais
          </h1>
          <p className="text-sm leading-relaxed text-white/60" style={{ maxWidth: "44ch" }}>
            Fotos reais de pacientes que confiaram no Dr. Gustavo Giolo e transformaram seus sorrisos.
            Resultados individuais. Imagens publicadas com autorização.
          </p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="border-b py-10 text-center" style={{ borderColor: "#F0F0F0" }}>
        <div className="mx-auto max-w-2xl px-6">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="block h-px w-8" style={{ background: "#D4A11E" }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#D4A11E" }}>
              Antes & Depois
            </span>
            <span className="block h-px w-8" style={{ background: "#D4A11E" }} />
          </div>
          <p className="text-base leading-relaxed" style={{ color: "#4A4A4A" }}>
            Cada sorriso conta uma história. Aqui você encontra resultados reais de tratamentos
            realizados na OdontoNeo Infinity — com transparência e ética em cada caso.
          </p>
        </div>
      </section>

      {/* ── Grid de casos ── */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">

        {/* Filtros por categoria */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIAS.map((cat, i) => (
            <span
              key={cat}
              className="rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest"
              style={{
                background: i === 0 ? "#1F3A5F" : "#F7F4EE",
                color: i === 0 ? "#FFFFFF" : "#4A4A4A",
                border: i === 0 ? "none" : "1px solid #EDEDED",
              }}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Casos — grid com destaque no primeiro */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CASOS.map((caso, idx) => (
            <div
              key={caso.id}
              className={`group relative flex flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${idx === 0 ? "sm:col-span-2 lg:col-span-2" : ""}`}
              style={{ border: "1px solid #EDEDED", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
            >
              {/* Foto resultado */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: idx === 0 ? "16/9" : "4/3" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={caso.foto}
                  alt={`${caso.paciente} – ${caso.tratamento}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    transition: "transform 0.6s ease",
                  }}
                  className="group-hover:scale-[1.03]"
                />

                {/* Badge categoria */}
                <span
                  className="absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white"
                  style={{ background: "rgba(31,58,95,0.85)", backdropFilter: "blur(8px)" }}
                >
                  {caso.categoria}
                </span>

                {/* Labels Antes / Depois */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-between">
                  <span className="rounded-lg bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/80 backdrop-blur-sm">
                    Antes
                  </span>
                  <span className="rounded-lg px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm" style={{ background: "rgba(212,161,30,0.85)" }}>
                    Depois
                  </span>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#D4A11E" }} />
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#D4A11E" }}>
                    {caso.tratamento}
                  </span>
                </div>
                <h3 className="font-serif mb-2 font-semibold" style={{ fontSize: "1.05rem", color: "#1F3A5F" }}>
                  {caso.paciente}
                </h3>
                <p className="mb-5 text-xs leading-relaxed" style={{ color: "#7A8694" }}>
                  {caso.descricao}
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] transition-opacity hover:opacity-70"
                  style={{ color: "#D4A11E" }}
                >
                  Quero um resultado assim
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}

          {/* Card placeholder — para novos casos */}
          <div
            className="flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed py-12 text-center"
            style={{ borderColor: "#DEDEDE" }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ background: "#F7F4EE" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#D4A11E" strokeWidth={1.5} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
            <p className="text-xs font-semibold" style={{ color: "#B0B0B0" }}>Novos casos em breve</p>
            <p className="text-[11px]" style={{ color: "#C8C8C8" }}>Adicionamos resultados regularmente</p>
          </div>
        </div>

        <p className="mt-6 text-center text-[11px]" style={{ color: "#B0B0B0" }}>
          * Resultados individuais. Fotos publicadas com autorização dos pacientes. CRO-SP 140.793.
        </p>
      </section>

      {/* ── Depoimentos ── */}
      <section className="py-20 sm:py-24" style={{ background: "#F7F4EE" }}>
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="block h-px w-8" style={{ background: "#D4A11E" }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#D4A11E" }}>
                O que dizem nossos pacientes
              </span>
              <span className="block h-px w-8" style={{ background: "#D4A11E" }} />
            </div>
            <h2 className="font-serif font-semibold" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", color: "#0E0E0E" }}>
              Depoimentos
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {DEPOIMENTOS.map((d, i) => (
              <div
                key={i}
                className="flex flex-col rounded-2xl bg-white p-7"
                style={{ border: "1px solid #EDEDED", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
              >
                {/* Estrelas */}
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} viewBox="0 0 24 24" fill="#D4A11E" className="h-4 w-4">
                      <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  ))}
                </div>

                <p className="mb-6 flex-1 text-sm leading-relaxed" style={{ color: "#4A4A4A" }}>
                  &ldquo;{d.texto}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-serif text-sm font-semibold text-white"
                    style={{ background: "#1F3A5F" }}
                  >
                    {d.nome.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#0E0E0E" }}>{d.nome}</p>
                    <p className="text-[11px]" style={{ color: "#D4A11E" }}>{d.detalhe}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="relative overflow-hidden py-24 text-center" style={{ background: "#0C1829" }}>
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #D4A11E 0%, transparent 70%)" }} aria-hidden />

        <div className="relative px-6">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="block h-px w-10" style={{ background: "#D4A11E" }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: "#D4A11E" }}>
              Seu sorriso pode ser o próximo
            </span>
            <span className="block h-px w-10" style={{ background: "#D4A11E" }} />
          </div>
          <h2
            className="font-serif mx-auto mb-4 font-semibold text-white"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", maxWidth: "18ch", lineHeight: 1.15 }}
          >
            Agende sua avaliação gratuita
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            Descubra qual tratamento pode transformar o seu sorriso.
            Diagnóstico personalizado com Dr. Gustavo Giolo.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: "#25D366", boxShadow: "0 6px 24px rgba(37,211,102,0.4)" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Quero meu resultado
            </a>
            <Link
              href="/tratamentos"
              className="inline-flex items-center gap-2.5 rounded-xl border-2 px-8 py-4 text-sm font-bold text-white/70 transition-colors hover:text-white"
              style={{ borderColor: "rgba(255,255,255,0.2)" }}
            >
              Ver tratamentos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
