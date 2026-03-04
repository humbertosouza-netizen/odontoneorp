import Link from "next/link";
import { WHATSAPP_LINK } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tratamentos | OdontoNeo Infinity – São José do Rio Preto",
  description:
    "Implantes dentários, prótese protocolo, lentes de contato dental, alinhador transparente Invisalign. Clínica odontológica premium em São José do Rio Preto – SP.",
};

const CATEGORIAS = [
  {
    id: "implantodontia",
    numero: "01",
    label: "Implantodontia",
    descricao:
      "Soluções definitivas para reabilitação oral com implantes de alta performance. Do dente único à reabilitação total da boca.",
    cor: "#1F3A5F",
    tratamentos: [
      {
        titulo: "Implante Unitário",
        subtitulo: "Substitua um dente com raiz artificial",
        foto: "/resultado-implante.jpeg",
        descricao:
          "O implante unitário é a solução mais próxima de um dente natural. Um parafuso de titânio é inserido no osso e serve de raiz para uma coroa de porcelana com aparência e função idênticas ao dente original.",
        destaques: [
          "Resultado permanente e natural",
          "Preserva os dentes adjacentes",
          "Integração total com o osso (osseointegração)",
          "Sem necessidade de prótese removível",
        ],
      },
      {
        titulo: "Prótese Protocolo",
        subtitulo: "Dentes fixos sobre implantes",
        foto: "/protese-protocolo-foto.jpeg",
        descricao:
          "Ideal para quem perdeu todos ou quase todos os dentes, a prótese protocolo é uma prótese fixa e permanente ancorada em implantes. Volte a sorrir, falar e mastigar com total segurança.",
        destaques: [
          "Totalmente fixa, sem remover",
          "4 a 6 implantes sustentam a arcada inteira",
          "Alta resistência e estética impecável",
          "Recuperação rápida com qualidade de vida imediata",
        ],
      },
    ],
  },
  {
    id: "estetica",
    numero: "02",
    label: "Estética Dental",
    descricao:
      "Transforme o seu sorriso com procedimentos estéticos de alta precisão. Forma, harmonia e beleza para que você se sinta incrível.",
    cor: "#D4A11E",
    tratamentos: [
      {
        titulo: "Lentes de Contato Dental",
        subtitulo: "Transformação completa do sorriso",
        foto: "/lentes-3.jpeg",
        descricao:
          "Finas lâminas de porcelana coladas na face dos dentes que transformam cor, forma, tamanho e proporção. O resultado é um sorriso harmonioso e natural com mínimo desgaste do dente original.",
        destaques: [
          "Espessura ultra-fina (0,3 a 0,5 mm)",
          "Cor, forma e tamanho personalizados",
          "Alta durabilidade e resistência",
          "Resultado duradouro e natural",
        ],
      },
      {
        titulo: "Alinhador Transparente",
        subtitulo: "O aparelho invisível tipo Invisalign®",
        foto: "/tratamentos.jpeg",
        descricao:
          "Os alinhadores transparentes movimentam os dentes de forma gradual, discreta e confortável, sem os arames e brackets do aparelho convencional. Ideais para corrigir apinhamentos, espaçamentos e mordidas desalinhadas.",
        destaques: [
          "Praticamente invisível no dia a dia",
          "Removível para comer e escovar os dentes",
          "Sem restrições alimentares",
          "Planejamento digital com previsão do resultado final",
        ],
      },
    ],
  },
];

export default function TratamentosPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: "clamp(300px, 45vh, 520px)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/protase-feita-4.jpeg"
          alt="Resultado real OdontoNeo"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,10,22,0.92) 0%, rgba(5,10,22,0.4) 60%, rgba(5,10,22,0.1) 100%)" }} />

        <div className="relative z-10 w-full px-6 pb-14 sm:px-12 lg:px-20">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-white/50 transition-colors hover:text-white/80"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Voltar
          </Link>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: "#D4A11E" }}>
            OdontoNeo Infinity
          </p>
          <h1
            className="font-serif mb-5 font-semibold text-white"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)", letterSpacing: "-0.02em", lineHeight: 1.08 }}
          >
            Nossos<br />Tratamentos
          </h1>

          {/* Navegação rápida pelas categorias */}
          <div className="flex flex-wrap gap-3">
            {CATEGORIAS.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/70 transition-all hover:text-white"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}
              >
                <span className="text-[10px]" style={{ color: "#D4A11E" }}>{c.numero}</span>
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categorias de tratamento ── */}
      {CATEGORIAS.map((cat, catIdx) => (
        <section
          key={cat.id}
          id={cat.id}
          className="scroll-mt-20"
          style={{ background: catIdx % 2 === 0 ? "#FFFFFF" : "#F7F4EE" }}
        >
          {/* Cabeçalho da categoria */}
          <div
            className="border-b px-6 py-10 sm:px-12 lg:px-20"
            style={{ borderColor: "#EDEDED" }}
          >
            <div className="mx-auto max-w-6xl">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span
                      className="font-serif text-6xl font-semibold leading-none opacity-10"
                      style={{ color: cat.cor }}
                    >
                      {cat.numero}
                    </span>
                    <div>
                      <h2
                        className="font-serif font-semibold"
                        style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", color: "#0E0E0E", letterSpacing: "-0.01em" }}
                      >
                        {cat.label}
                      </h2>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#7A8694", maxWidth: "54ch" }}>
                    {cat.descricao}
                  </p>
                </div>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex shrink-0 items-center gap-2.5 self-start rounded-xl px-5 py-3 text-xs font-bold text-white transition-opacity hover:opacity-90 sm:self-auto"
                  style={{ background: "#25D366" }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Agendar consulta
                </a>
              </div>
            </div>
          </div>

          {/* Tratamentos da categoria */}
          <div className="mx-auto max-w-6xl px-6 py-12 sm:px-12 lg:px-20 lg:py-16">
            <div className="flex flex-col gap-12 lg:gap-16">
              {cat.tratamentos.map((t, tIdx) => (
                <div
                  key={t.titulo}
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                    tIdx % 2 === 1 ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  {/* Foto */}
                  <div
                    className="relative overflow-hidden rounded-2xl lg:[direction:ltr]"
                    style={{ aspectRatio: "3/4" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.foto}
                      alt={t.titulo}
                      className="transition-transform duration-700 hover:scale-105"
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center top",
                        display: "block",
                      }}
                    />
                    {/* Overlay sutil para integrar com o layout */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(5,10,22,0.08) 100%)" }}
                    />
                  </div>

                  {/* Conteúdo */}
                  <div className="flex flex-col lg:[direction:ltr]">
                    {/* Eyebrow */}
                    <div className="mb-4 flex items-center gap-2.5">
                      <span className="block h-px w-6" style={{ background: cat.cor }} />
                      <span
                        className="text-[10px] font-bold uppercase tracking-[0.22em]"
                        style={{ color: cat.cor }}
                      >
                        {t.subtitulo}
                      </span>
                    </div>

                    {/* Título */}
                    <h3
                      className="font-serif mb-4 font-semibold"
                      style={{
                        fontSize: "clamp(1.4rem, 2.2vw, 2rem)",
                        color: "#0E0E0E",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.15,
                      }}
                    >
                      {t.titulo}
                    </h3>

                    {/* Descrição */}
                    <p className="mb-6 text-sm leading-relaxed sm:text-base" style={{ color: "#4A4A4A" }}>
                      {t.descricao}
                    </p>

                    {/* Destaques */}
                    <ul className="mb-8 flex flex-col gap-2.5">
                      {t.destaques.map((d) => (
                        <li key={d} className="flex items-start gap-3">
                          <span
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ background: cat.cor }}
                          />
                          <span className="text-sm leading-snug" style={{ color: "#4A4A4A" }}>{d}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex w-fit items-center gap-3 border border-[#1F3A5F] px-6 py-3 text-sm font-medium text-[#1F3A5F] transition-all duration-300 hover:bg-[#1F3A5F] hover:text-white"
                      style={{ borderRadius: "2px" }}
                    >
                      Agendar avaliação
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA Final ── */}
      <section
        className="relative overflow-hidden py-24 text-center"
        style={{ background: "#0C1829" }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #D4A11E 0%, transparent 70%)" }}
          aria-hidden
        />
        <div className="relative px-6">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="block h-px w-10" style={{ background: "#D4A11E" }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: "#D4A11E" }}>
              Próximo passo
            </span>
            <span className="block h-px w-10" style={{ background: "#D4A11E" }} />
          </div>
          <h2
            className="font-serif mx-auto mb-4 font-semibold text-white"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", maxWidth: "18ch", lineHeight: 1.15 }}
          >
            Pronto para transformar o seu sorriso?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            Agende uma avaliação gratuita com Dr. Gustavo Giolo e receba um diagnóstico
            personalizado para o seu caso.
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
              Agendar pelo WhatsApp
            </a>
            <Link
              href="/tecnologias"
              className="inline-flex items-center gap-2.5 rounded-xl border-2 px-8 py-4 text-sm font-bold text-white/70 transition-colors hover:text-white"
              style={{ borderColor: "rgba(255,255,255,0.2)" }}
            >
              Ver nossas tecnologias
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
