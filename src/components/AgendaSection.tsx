import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from "@/lib/constants";
import WhatsAppLink from "@/components/WhatsAppLink";

const PHONE_LINK = `tel:+${WHATSAPP_NUMBER}`;

export default function AgendaSection() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden"
      style={{ background: "#1F3A5F" }}
    >
      {/* ── Linha dourada no topo ── */}
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, #D4A11E 50%, transparent 100%)" }}
      />

      {/* ── Textura sutil — pontos em diagonal ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      {/* ── Elemento decorativo — elipse dourada ── */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #D4A11E 0%, transparent 70%)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #D4A11E 0%, transparent 70%)" }}
        aria-hidden
      />

      {/* ── Conteúdo ── */}
      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center sm:py-24 lg:px-10 lg:py-28">

        {/* Eyebrow */}
        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="block h-px w-8" style={{ background: "#D4A11E" }} />
          <span className="text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: "#D4A11E" }}>
            Vagas limitadas por mês
          </span>
          <span className="block h-px w-8" style={{ background: "#D4A11E" }} />
        </div>

        {/* Título */}
        <h2
          className="font-serif mb-4 font-semibold text-white"
          style={{
            fontSize: "clamp(1.9rem, 3.5vw, 3.2rem)",
            letterSpacing: "-0.01em",
            lineHeight: 1.12,
          }}
        >
          Pronto para elevar o nível<br />
          <em className="not-italic" style={{ color: "#D4A11E" }}>do seu sorriso?</em>
        </h2>

        {/* Subtítulo */}
        <p
          className="mx-auto mb-12 text-base leading-relaxed"
          style={{ color: "rgba(255,255,255,0.55)", maxWidth: "52ch" }}
        >
          O Dr. Gustavo Giolo realiza um número limitado de reabilitações por mês
          para garantir o padrão de excelência da OdontoNeo. Veja como é simples
          marcar sua consulta com nossa equipe e{" "}
          <strong style={{ color: "rgba(255,255,255,0.85)" }}>garanta seu horário agora antes que a agenda feche.</strong>
        </p>

        {/* Botões lado a lado */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">

          {/* WhatsApp */}
          <WhatsAppLink
            message="Olá! Gostaria de agendar uma avaliação."
            page="Inicial"
            section="Agenda"
            className="group flex w-full max-w-xs items-center justify-center gap-3 rounded-xl px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl sm:w-auto"
            style={{
              background: "#25D366",
              boxShadow: "0 6px 24px rgba(37,211,102,0.35)",
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Clique no botão abaixo e fale comigo
          </WhatsAppLink>

          {/* Telefone */}
          <a
            href={PHONE_LINK}
            className="group flex w-full max-w-xs items-center justify-center gap-3 rounded-xl border-2 px-7 py-4 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
            style={{
              color: "#FFFFFF",
              borderColor: "rgba(255,255,255,0.3)",
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5 shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Ligar agora · {WHATSAPP_DISPLAY}
          </a>
        </div>

        {/* Rodapé discreto */}
        <p className="mt-10 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
          Atendimento Seg–Sex 08h às 19h · Sáb 08h às 12h
        </p>
      </div>
    </section>
  );
}
