import Link from "next/link";
import {
  WHATSAPP_LINK, WHATSAPP_DISPLAY, WHATSAPP_NUMBER, EMAIL,
  ENDERECO, CIDADE, CEP,
  INSTAGRAM_LINK, INSTAGRAM_HANDLE, GOOGLE_MAPS_LINK,
} from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | OdontoNeo Infinity – São José do Rio Preto",
  description:
    "Entre em contato com a OdontoNeo Infinity. WhatsApp, telefone, e-mail e endereço completo. Rua Ondina, 259 – Vila Redentora, São José do Rio Preto – SP.",
};

const CANAIS = [
  {
    numero: "01",
    icone: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
    tag: "Mais rápido",
    label: "WhatsApp",
    valor: WHATSAPP_DISPLAY,
    sub: "Seg – Sex 08h às 19h · Sáb 08h às 12h",
    href: WHATSAPP_LINK,
    externo: true,
    accentColor: "#25D366",
    foto: "/foto-principal.jpg",
  },
  {
    numero: "02",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    tag: "Telefone",
    label: "Ligue agora",
    valor: WHATSAPP_DISPLAY,
    sub: "Atendimento humano direto",
    href: `tel:+55${WHATSAPP_NUMBER}`,
    externo: false,
    accentColor: "#D4A11E",
    foto: "/recepcao-ampla.jpg",
  },
  {
    numero: "03",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    tag: "E-mail",
    label: "Escreva para nós",
    valor: EMAIL,
    sub: "Resposta em até 1 dia útil",
    href: `mailto:${EMAIL}`,
    externo: false,
    accentColor: "#D4A11E",
    foto: "/sala-atendimento.jpg",
  },
  {
    numero: "04",
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    tag: "Endereço",
    label: "Como chegar",
    valor: ENDERECO,
    sub: `${CIDADE} · ${CEP}`,
    href: GOOGLE_MAPS_LINK,
    externo: true,
    accentColor: "#D4A11E",
    foto: "/recepcao.jpg",
  },
];

const HORARIOS = [
  { dia: "Segunda",   horario: "08:00 – 19:00", aberto: true  },
  { dia: "Terça",     horario: "08:00 – 19:00", aberto: true  },
  { dia: "Quarta",    horario: "08:00 – 19:00", aberto: true  },
  { dia: "Quinta",    horario: "08:00 – 19:00", aberto: true  },
  { dia: "Sexta",     horario: "08:00 – 19:00", aberto: true  },
  { dia: "Sábado",    horario: "08:00 – 12:00", aberto: true  },
  { dia: "Domingo",   horario: "Fechado",        aberto: false },
];

export default function ContatoPage() {
  return (
    <main className="min-h-screen" style={{ background: "#080F1E" }}>

      {/* ── Hero ── */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: "clamp(260px, 38vh, 480px)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/recepcao.jpg" alt="Recepção OdontoNeo Infinity"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,15,30,1) 0%, rgba(8,15,30,0.55) 55%, rgba(8,15,30,0.1) 100%)" }} />
        <div className="relative z-10 w-full px-6 pb-14 sm:px-12 lg:px-20">
          <Link href="/" className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-white/40 transition-colors hover:text-white/70">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Voltar
          </Link>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: "#D4A11E" }}>OdontoNeo Infinity</p>
          <h1 className="font-serif font-semibold text-white" style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)", letterSpacing: "-0.02em", lineHeight: 1.08 }}>
            Contato
          </h1>
        </div>
      </section>

      {/* ── Canais — 4 cards Netflix ── */}
      <section className="px-4 pb-6 pt-12 sm:px-8 lg:px-12">
        <div className="mx-auto mb-8 max-w-7xl">
          <div className="mb-3 flex items-center gap-3">
            <span className="block h-px w-6" style={{ background: "#D4A11E" }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#D4A11E" }}>
              Escolha como quer falar
            </span>
          </div>
          <h2 className="font-serif font-semibold text-white" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", letterSpacing: "-0.01em" }}>
            Canais de Atendimento
          </h2>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {CANAIS.map((c) => (
            <a
              key={c.numero}
              href={c.href}
              target={c.externo ? "_blank" : undefined}
              rel={c.externo ? "noopener noreferrer" : undefined}
              className="group relative overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A11E]"
              style={{ display: "block", boxShadow: "0 4px 32px rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="relative w-full" style={{ aspectRatio: "2/3" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.foto}
                  alt={c.label}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ objectPosition: "center center" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,10,22,0.98) 0%, rgba(5,10,22,0.65) 45%, rgba(5,10,22,0.1) 100%)" }} />
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/15" />

                {/* Número + tag — topo */}
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full font-mono text-[10px] font-bold"
                    style={{ background: "rgba(212,161,30,0.18)", border: "1px solid rgba(212,161,30,0.5)", color: "#D4A11E" }}>
                    {c.numero}
                  </span>
                  <span className="rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em]"
                    style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.45)", backdropFilter: "blur(6px)" }}>
                    {c.tag}
                  </span>
                </div>

                {/* Ícone — centro superior */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 transition-opacity duration-300 group-hover:opacity-30">
                  <div style={{ color: c.accentColor }}>{c.icone}</div>
                </div>

                {/* Conteúdo base */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="mb-3 h-px transition-all duration-500 group-hover:w-10" style={{ width: "20px", background: "#D4A11E" }} />
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: "rgba(212,161,30,0.8)" }}>
                    {c.label}
                  </p>
                  <p className="font-serif text-sm font-semibold leading-tight text-white">{c.valor}</p>
                  <p className="mt-1.5 text-[10px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{c.sub}</p>

                  {/* Arrow CTA */}
                  <div className="mt-4 flex items-center gap-2 transition-all duration-300 group-hover:gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "#D4A11E" }}>Acessar</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#D4A11E" strokeWidth={1.8} className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── Horários + Localização ── */}
      <section className="border-t px-4 pb-16 pt-12 sm:px-8 lg:px-12" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Horários */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="block h-px w-6" style={{ background: "#D4A11E" }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#D4A11E" }}>Horário de atendimento</span>
            </div>
            <div className="overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.07)", background: "#0A1628" }}>
              {HORARIOS.map((h, i) => (
                <div key={h.dia}
                  className="flex items-center justify-between px-5 py-3.5"
                  style={{ borderBottom: i < HORARIOS.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                  <span className="text-sm" style={{ color: h.aberto ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.2)" }}>
                    {h.dia}
                  </span>
                  <span className="text-sm font-semibold" style={{ color: h.aberto ? "#D4A11E" : "rgba(255,255,255,0.2)" }}>
                    {h.horario}
                  </span>
                  {h.aberto && <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#25D366" }} />}
                </div>
              ))}
            </div>
          </div>

          {/* Localização */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="block h-px w-6" style={{ background: "#D4A11E" }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#D4A11E" }}>Como chegar</span>
            </div>
            <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/recepcao-ampla.jpg" alt="Localização OdontoNeo"
                style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(40%) brightness(0.5)" }} />
              <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ background: "rgba(8,15,30,0.5)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#D4A11E" strokeWidth={1.5} className="mb-3 h-10 w-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p className="font-serif text-lg font-semibold text-white">{ENDERECO}</p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{CIDADE}</p>
                <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-white/10"
                  style={{ border: "1px solid rgba(212,161,30,0.4)", color: "#D4A11E" }}>
                  Abrir no Google Maps
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.3)" }}>
              Vila Redentora — fácil acesso e estacionamento próximo. Próximo à Av. Henrique Pavi.
            </p>
          </div>
        </div>
      </section>

      {/* ── Redes Sociais ── */}
      <section className="border-t px-6 py-12 sm:px-10" style={{ borderColor: "rgba(255,255,255,0.06)", background: "#0A1628" }}>
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#D4A11E" }}>Nos acompanhe</p>
            <h3 className="font-serif font-semibold text-white" style={{ fontSize: "1.2rem" }}>Siga a OdontoNeo nas redes</h3>
          </div>
          <div className="flex items-center gap-4">
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl px-5 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}>
              <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              {INSTAGRAM_HANDLE}
            </a>
            <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl border px-5 py-3 text-sm font-bold transition-all hover:bg-white/5"
              style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)" }}>
              Google
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
