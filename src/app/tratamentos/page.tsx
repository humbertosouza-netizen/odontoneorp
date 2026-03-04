import Link from "next/link";
import { WHATSAPP_LINK } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tratamentos | OdontoNeo Infinity – São José do Rio Preto",
  description:
    "Conheça todos os tratamentos odontológicos da OdontoNeo Infinity: implante dentário, prótese protocolo, lentes de contato dental, clareamento, harmonização orofacial e muito mais.",
};

const TRATAMENTOS = [
  {
    foto: "/implante-dentario.png",
    titulo: "Implante Dentário",
    descricao:
      "A solução definitiva para quem perdeu um ou mais dentes. Oferecemos implantes de alto padrão com osseointegração segura e estética impecável.",
    destaques: ["Resultado permanente", "Aparência natural", "Sem dor durante o procedimento"],
  },
  {
    foto: "/protese-protocolo.png",
    titulo: "Prótese Protocolo",
    descricao:
      "Prótese fixa sobre implantes para quem perdeu todos ou quase todos os dentes. Recupere função mastigatória, fala e autoestima com segurança total.",
    destaques: ["Fixo e estável", "Sem usar cola ou adesivo", "Sorriso completo em dias"],
  },
  {
    foto: "/lentes-contato.jpg",
    titulo: "Lentes de Contato Dental",
    descricao:
      "Finas facetas de porcelana que transformam cor, forma e tamanho dos dentes. Resultado natural e duradouro com mínimo desgaste dental.",
    destaques: ["Alta estética", "Mínimo desgaste", "Resultado imediato"],
  },
  {
    foto: "/clareamento-dental.jpg",
    titulo: "Clareamento Dental",
    descricao:
      "Procedimento seguro que clareia os dentes em até 8 tons, com géis certificados e supervisão profissional em consultório ou em casa.",
    destaques: ["Até 8 tons mais claro", "Seguro e indolor", "Resultado rápido"],
  },
  {
    foto: "/tratamento-gengiva.jpg",
    titulo: "Tratamento de Gengiva",
    descricao:
      "Diagnóstico e tratamento de gengivite e periodontite. Gengiva saudável é a base de um sorriso bonito e de uma saúde bucal completa.",
    destaques: ["Diagnóstico preciso", "Controle do sangramento", "Saúde a longo prazo"],
  },
  {
    foto: "/harmonizacao-orofacial.jpg",
    titulo: "Harmonização Orofacial",
    descricao:
      "Procedimentos que equilibram proporções faciais valorizando o sorriso. Botox, preenchimento e bichectomia com resultados naturais.",
    destaques: ["Resultado natural", "Procedimento rápido", "Sem cirurgia"],
  },
  {
    foto: "/alinhador-transparente.jpg",
    titulo: "Alinhador Transparente",
    descricao:
      "Alinhe seus dentes com conforto e discrição. Sem aparelho fixo, sem restrições alimentares e com resultado estético e funcional.",
    destaques: ["Invisível", "Removível", "Confortável"],
  },
  {
    foto: "/tratamento-canal.jpg",
    titulo: "Tratamento de Canal",
    descricao:
      "Elimine a dor e salve o dente. Procedimento moderno, indolor com anestesia adequada e acompanhamento completo até a recuperação.",
    destaques: ["Sem dor", "Salva o dente natural", "Recuperação rápida"],
  },
];

export default function TratamentosPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: "clamp(280px, 40vh, 480px)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/sala-atendimento.jpg"
          alt="Sala de atendimento OdontoNeo"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,10,22,0.88) 0%, rgba(5,10,22,0.35) 100%)" }} />
        <div className="relative z-10 w-full px-6 pb-14 sm:px-12 lg:px-20">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-white/50 hover:text-white/80 transition-colors"
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
            className="font-serif font-semibold text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)", letterSpacing: "-0.01em", lineHeight: 1.1 }}
          >
            Nossos Tratamentos
          </h1>
        </div>
      </section>

      {/* ── Grid de tratamentos ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
        <p className="mx-auto mb-16 max-w-2xl text-center text-base leading-relaxed text-gray-500">
          Cada tratamento é planejado de forma individualizada com foco em resultado, conforto e saúde bucal a longo prazo.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {TRATAMENTOS.map((t) => (
            <div
              key={t.titulo}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
            >
              {/* Foto */}
              <div className="relative h-44 overflow-hidden bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.foto}
                  alt={t.titulo}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    transition: "transform 0.6s ease",
                  }}
                  className="group-hover:scale-105"
                />
              </div>

              {/* Conteúdo */}
              <div className="flex flex-1 flex-col p-5">
                <h2
                  className="font-serif mb-2 font-semibold"
                  style={{ fontSize: "1.05rem", color: "#1F3A5F" }}
                >
                  {t.titulo}
                </h2>
                <p className="mb-4 text-xs leading-relaxed text-gray-500">{t.descricao}</p>

                {/* Destaques */}
                <ul className="mb-5 space-y-1">
                  {t.destaques.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "#D4A11E" }} />
                      {d}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] transition-opacity hover:opacity-70"
                  style={{ color: "#D4A11E" }}
                >
                  Agendar Consulta
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section
        className="py-20 text-center"
        style={{ background: "#1F3A5F" }}
      >
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: "#D4A11E" }}>
          Próximo passo
        </p>
        <h2
          className="font-serif mx-auto mb-4 font-semibold text-white"
          style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", maxWidth: "18ch" }}
        >
          Pronto para transformar o seu sorriso?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-white/60">
          Agende uma avaliação gratuita com Dr. Gustavo Giolo e descubra o melhor tratamento para o seu caso.
        </p>
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
          Agendar Avaliação Gratuita
        </a>
      </section>
    </main>
  );
}
