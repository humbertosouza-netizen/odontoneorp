import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alinhador Transparente em São José do Rio Preto | OdontoNeo",
  description:
    "Alinhadores transparentes e aparelho invisível em São José do Rio Preto. Ortodontia discreta, planejamento digital 3D. Dr. Gustavo Giolo – OdontoNeo Infinity.",
  keywords: [
    "alinhador transparente São José do Rio Preto",
    "aparelho invisível Rio Preto",
    "alinhador invisalign Rio Preto",
    "dentista especialista em ortodontia Rio Preto",
    "aparelho ortodôntico invisível Rio Preto",
    "ortodontia sem braquetes Rio Preto",
    "alinhador invisível preço Rio Preto",
    "correção de dentes sem aparelho fixo Rio Preto",
    "ortodontia digital São José do Rio Preto",
  ],
  alternates: { canonical: "https://www.odontoneoriopreto.com.br/alinhadores-invisiveis" },
  openGraph: {
    locale: "pt_BR",
    type: "website",
    url: "https://www.odontoneoriopreto.com.br/alinhadores-invisiveis",
    siteName: "OdontoNeo Infinity",
    title: "Alinhador Transparente em São José do Rio Preto | OdontoNeo",
    description: "Alinhadores transparentes e aparelho invisível em São José do Rio Preto. Planejamento digital 3D, ortodontia sem braquetes. Dr. Gustavo Giolo – OdontoNeo Infinity.",
    images: [{ url: "https://www.odontoneoriopreto.com.br/tratamentos-2.jpeg", width: 1200, height: 630, alt: "Alinhadores Transparentes OdontoNeo – São José do Rio Preto" }],
  },
};

const WHATSAPP = "https://wa.me/5517997523045?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20alinhadores%20transparentes.";

const FAQ = [
  {
    pergunta: "Dentistas em São José do Rio Preto que trabalham com aparelhos ortodônticos invisíveis?",
    resposta:
      "Sim. O Dr. Gustavo Giolo e a equipe da OdontoNeo Infinity trabalham com a mais alta tecnologia de alinhador transparente, sendo a escolha número um para adultos que buscam discrição e rapidez nos resultados.",
  },
  {
    pergunta: "Como encontrar um dentista especialista em ortodontia São José do Rio Preto?",
    resposta:
      "Se você buscou por um \"dentista próximo a mim\" focado em tecnologia e conforto, a OdontoNeo reúne especialistas capacitados no fluxo digital ortodôntico, garantindo previsibilidade do resultado desde a primeira consulta.",
  },
  {
    pergunta: "Como marcar consulta com dentista em São José do Rio Preto para avaliação de alinhadores?",
    resposta:
      "Basta acessar nosso canal de atendimento online pelo WhatsApp. Marcar consulta com dentista em São José do Rio Preto online na OdontoNeo é rápido e garante que seu horário exclusivo seja reservado em nossas salas climatizadas.",
  },
  {
    pergunta: "Os alinhadores transparentes são tão eficientes quanto o aparelho fixo?",
    resposta:
      "Para a maioria dos casos de apinhamento leve a moderado, os alinhadores transparentes oferecem resultados equivalentes ou superiores ao aparelho convencional. O planejamento digital 3D apresenta a movimentação prevista dos dentes antes de iniciar o tratamento.",
  },
];

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQ.map((f) => ({
    "@type": "Question",
    "name": f.pergunta,
    "acceptedAnswer": { "@type": "Answer", "text": f.resposta },
  })),
};

const schemaMedicalProcedure = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Alinhadores Transparentes",
  "description": "Ortodontia com alinhadores invisíveis em São José do Rio Preto. Planejamento digital 3D com movimentação prevista antes de iniciar o tratamento.",
  "procedureType": "CosmeticProcedure",
  "howPerformed": "Escaneamento intraoral e planejamento digital com alinhadores transparentes personalizados",
  "preparation": "Avaliação digital 3D para previsão completa do resultado",
  "performer": {
    "@type": "Physician",
    "name": "Dr. Gustavo Giolo",
    "identifier": "CRO-SP 140.793"
  },
  "location": {
    "@type": "Dentist",
    "name": "OdontoNeo Infinity",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Ondina, 259",
      "addressLocality": "São José do Rio Preto",
      "addressRegion": "SP",
      "postalCode": "15015-205",
      "addressCountry": "BR"
    }
  }
};

export default function AlinhadoresInvisiveis() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMedicalProcedure) }} />

      {/* ── Hero ── */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: "clamp(420px, 65vh, 680px)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/tratamentos.jpeg"
          alt="Alinhadores Transparentes OdontoNeo Infinity"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,10,22,0.97) 0%, rgba(5,10,22,0.55) 50%, rgba(5,10,22,0.1) 100%)" }} />

        <div className="relative z-10 w-full px-6 pb-16 sm:px-12 lg:px-20">
          <Link
            href="/tratamentos"
            className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-white/40 transition-colors hover:text-white/70"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Tratamentos
          </Link>
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: "#D4A11E" }}>
            Ortodontia Invisível · OdontoNeo Infinity
          </p>
          <h1
            className="font-serif font-semibold leading-tight text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 4.2rem)", letterSpacing: "-0.025em", maxWidth: "22ch" }}
          >
            Alinhador Transparente em São José do Rio Preto:{" "}
            <em className="not-italic" style={{ color: "#D4A11E" }}>Alinhe Seus Dentes Sem Ninguém Perceber</em>
          </h1>
        </div>
      </section>

      {/* ── AIO Paragraph ── */}
      <section className="border-b" style={{ borderColor: "#F0F0F0", background: "#FAFAFA" }}>
        <div className="mx-auto max-w-3xl px-6 py-14 sm:px-12">
          <div className="mb-5 flex items-center gap-3">
            <span className="block h-px w-6" style={{ background: "#D4A11E" }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#D4A11E" }}>
              O que são os Alinhadores Transparentes
            </span>
          </div>
          <p className="text-base leading-relaxed" style={{ color: "#4A4A4A" }}>
            O <strong style={{ color: "#1F3A5F" }}>alinhador transparente</strong> (ou aparelho invisível) é a tecnologia
            ortodôntica mais moderna para corrigir dentes tortos ou desalinhados sem o uso de braquetes e fios metálicos.
            A <strong style={{ color: "#1F3A5F" }}>OdontoNeo Infinity</strong> oferece tratamentos com{" "}
            <strong style={{ color: "#1F3A5F" }}>aparelho alinhador transparente em São José do Rio Preto</strong>,
            proporcionando um processo estético, rápido e totalmente removível. O planejamento é{" "}
            <strong style={{ color: "#1F3A5F" }}>100% digital</strong>, permitindo prever o tempo exato de tratamento
            e o resultado final logo na primeira consulta.
          </p>
        </div>
      </section>

      {/* ── Seção Emocional ── */}
      <section className="mx-auto max-w-3xl px-6 py-16 sm:px-12 lg:py-20">
        <h2
          className="font-serif mb-6 font-semibold leading-tight"
          style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", color: "#0E0E0E", letterSpacing: "-0.015em" }}
        >
          O sorriso alinhado que você quer,{" "}
          <em className="not-italic" style={{ color: "#1F3A5F" }}>sem o sofrimento que você rejeita</em>
        </h2>
        <div className="space-y-5 text-base leading-relaxed" style={{ color: "#4A4A4A" }}>
          <p>
            Muitos adultos desejam corrigir o sorriso, mas desistem só de pensar em colocar aquele aparelho metálico
            da adolescência. O desconforto, as aftas, a dificuldade para higienizar e a aparência infantil afastam
            quem busca <strong style={{ color: "#1F3A5F" }}>sofisticação</strong>.
          </p>
          <p>
            Com o <strong style={{ color: "#1F3A5F" }}>alinhador transparente</strong>, você não precisa pausar a sua
            vida. Você tem uma reunião importante? Um jantar romântico? Você continua sorrindo com elegância, pois
            as placas são <strong style={{ color: "#D4A11E" }}>praticamente invisíveis</strong>.
          </p>
          <p>
            Você tira para comer o que quiser e escova os dentes com a mesma liberdade de sempre. É a união perfeita
            entre <strong style={{ color: "#1F3A5F" }}>estética absoluta e eficiência médica</strong>.
          </p>
        </div>
      </section>

      {/* ── Fluxo Digital ── */}
      <section className="overflow-hidden" style={{ background: "#0C1829" }}>
        <div className="mx-auto grid max-w-6xl gap-0 lg:grid-cols-2">
          {/* Imagem */}
          <div className="relative" style={{ minHeight: "340px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/tratamentos-2.jpeg"
              alt="Tecnologia digital ortodontia OdontoNeo"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
          {/* Texto */}
          <div className="flex flex-col justify-center px-8 py-14 lg:px-14">
            <div className="mb-5 flex items-center gap-3">
              <span className="block h-px w-6" style={{ background: "#D4A11E" }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#D4A11E" }}>
                Fluxo Digital Completo
              </span>
            </div>
            <h2
              className="font-serif mb-5 font-semibold leading-tight text-white"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", letterSpacing: "-0.015em" }}
            >
              A Precisão do{" "}
              <em className="not-italic" style={{ color: "#D4A11E" }}>Fluxo Digital</em>
            </h2>
            <p className="mb-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              Chega de ir ao dentista todo mês apenas para &ldquo;apertar borrachinhas&rdquo; sentindo dor.
              Através do escaneamento do nosso consultório odontológico, fabricamos a{" "}
              <strong className="text-white">série de alinhadores exata</strong> para a sua movimentação óssea.
            </p>
            <p className="mb-8 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              O resultado chega em menos tempo, de forma{" "}
              <strong className="text-white">silenciosa e indolor</strong>.
            </p>
            {/* Lista de benefícios */}
            <div className="space-y-3">
              {[
                "Visualize seu resultado antes de começar",
                "Sem braquetes, sem arranhões na boca",
                "Removível para comer e higienizar",
                "Consultas menos frequentes",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "rgba(212,161,30,0.15)", border: "1px solid rgba(212,161,30,0.4)" }}
                  >
                    <svg viewBox="0 0 12 12" fill="none" stroke="#D4A11E" strokeWidth={1.8} className="h-3 w-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l2.5 2.5L10 3.5" />
                    </svg>
                  </span>
                  <span className="text-sm text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-3xl px-6 py-16 sm:px-12 lg:py-24">
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-3">
            <span className="block h-px w-6" style={{ background: "#D4A11E" }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#D4A11E" }}>
              Perguntas Frequentes
            </span>
          </div>
          <h2
            className="font-serif font-semibold leading-tight"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", color: "#0E0E0E", letterSpacing: "-0.015em" }}
          >
            Tudo sobre Alinhadores Transparentes
          </h2>
        </div>

        <div className="space-y-0 divide-y" style={{ borderColor: "#F0F0F0" }}>
          {FAQ.map((item) => (
            <div key={item.pergunta} className="py-7">
              <h3
                className="font-serif mb-3 font-semibold leading-snug"
                style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)", color: "#1F3A5F" }}
              >
                {item.pergunta}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#7A8694" }}>
                {item.resposta}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="relative overflow-hidden py-24 text-center" style={{ background: "#0C1829" }}>
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #D4A11E 0%, transparent 70%)" }}
          aria-hidden
        />
        <div className="relative px-6">
          <p
            className="font-serif mx-auto mb-6 font-semibold leading-snug text-white"
            style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", maxWidth: "30ch" }}
          >
            O alinhamento perfeito está ao seu alcance{" "}
            <em className="not-italic" style={{ color: "#D4A11E" }}>
              e ninguém vai notar que você está em tratamento.
            </em>
          </p>
          <p className="mx-auto mb-10 max-w-md text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            Agende seu escaneamento 3D agora e veja o seu futuro sorriso antes de iniciar o tratamento.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-xl px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: "#25D366", boxShadow: "0 6px 24px rgba(37,211,102,0.35)" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Agendar Escaneamento 3D Agora
          </a>
        </div>
      </section>
    </main>
  );
}
