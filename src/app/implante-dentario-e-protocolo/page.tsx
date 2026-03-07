import Link from "next/link";
import type { Metadata } from "next";
import WhatsAppLink from "@/components/WhatsAppLink";

export const metadata: Metadata = {
  title: "Implantes Dentários e Prótese Protocolo em São José do Rio Preto | OdontoNeo",
  description:
    "Prótese protocolo e implantes dentários em São José do Rio Preto. Reabilitação oral com carga imediata, sedação endovenosa e zero dor. Dr. Gustavo Giolo – CRO-SP 140.793.",
  keywords: [
    "implante dentário São José do Rio Preto",
    "prótese protocolo Rio Preto",
    "implante dentário valor",
    "implante dentário preço",
    "reabilitação oral São José do Rio Preto",
    "carga imediata implante",
    "dentista implante Rio Preto",
    "prótese fixa São José do Rio Preto",
    "sedação endovenosa dentista Rio Preto",
    "implante de titânio Rio Preto",
  ],
  alternates: { canonical: "https://www.odontoneoriopreto.com.br/implante-dentario-e-protocolo" },
  openGraph: {
    locale: "pt_BR",
    type: "website",
    url: "https://www.odontoneoriopreto.com.br/implante-dentario-e-protocolo",
    siteName: "OdontoNeo Infinity",
    title: "Implantes Dentários e Prótese Protocolo em São José do Rio Preto | OdontoNeo",
    description: "Prótese protocolo e implantes dentários em São José do Rio Preto. Reabilitação oral com carga imediata, sedação endovenosa. Dr. Gustavo Giolo – CRO-SP 140.793.",
    images: [{ url: "https://www.odontoneoriopreto.com.br/resultados-8.jpeg", width: 1200, height: 630, alt: "Implante Dentário OdontoNeo – São José do Rio Preto" }],
  },
};

const WHATSAPP = "https://wa.me/5517997523045?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20implante%20dent%C3%A1rio.";

const FAQ = [
  {
    pergunta: "Como solicitar um orçamento para implante dentário online em Rio Preto?",
    resposta:
      "Para garantir a segurança do seu tratamento, o implante dentário valor não é tabelado sem avaliação. Você pode solicitar um pré-agendamento de orçamento online pelo nosso WhatsApp, onde nossa equipe agendará seu escaneamento 3D para um diagnóstico preciso e personalizado.",
  },
  {
    pergunta: "Onde encontro as melhores avaliações de dentistas em São José do Rio Preto para implantes dentários?",
    resposta:
      "A OdontoNeo Infinity orgulha-se de possuir nota máxima e dezenas de avaliações positivas de pacientes que transformaram suas vidas com o Dr. Gustavo Giolo. O cuidado humanizado nos coloca entre os melhores dentistas em São José do Rio Preto.",
  },
  {
    pergunta: "Qual a durabilidade de uma Prótese Protocolo?",
    resposta:
      "Com a higiene correta e visitas regulares ao seu dentista próximo a mim, os implantes de titânio podem durar a vida toda, sendo um investimento definitivo na sua saúde. A osseointegração garante fixação permanente na estrutura óssea.",
  },
  {
    pergunta: "O que é carga imediata em implante dentário?",
    resposta:
      "A carga imediata é a técnica em que os dentes provisórios são instalados no mesmo dia da cirurgia de implante. Assim, você não fica sem dentes nem um único dia. Na OdontoNeo, esse protocolo é executado com planejamento digital 3D para máxima precisão.",
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
  "name": "Implante Dentário e Prótese Protocolo",
  "description": "Reabilitação oral completa com implantes de titânio e prótese fixa parafusada, com carga imediata e sedação endovenosa em São José do Rio Preto.",
  "procedureType": "SurgicalProcedure",
  "followup": "Acompanhamento periódico com Dr. Gustavo Giolo",
  "howPerformed": "Cirurgia guiada por planejamento digital 3D com sedação consciente",
  "preparation": "Escaneamento intraoral e tomografia digital",
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

export default function ImplantePage() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMedicalProcedure) }} />

      {/* ── Hero ── */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: "clamp(420px, 65vh, 680px)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/resultados-8.jpeg"
          alt="Prótese Protocolo OdontoNeo Infinity"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 70%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,10,22,0.97) 0%, rgba(5,10,22,0.6) 50%, rgba(5,10,22,0.15) 100%)" }} />

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
            Reabilitação Oral · OdontoNeo Infinity
          </p>
          <h1
            className="font-serif font-semibold leading-tight text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 4.2rem)", letterSpacing: "-0.025em", maxWidth: "22ch" }}
          >
            Implantes Dentários e Prótese Protocolo em São José do Rio Preto:{" "}
            <em className="not-italic" style={{ color: "#D4A11E" }}>O Resgate da sua Liberdade</em>
          </h1>
        </div>
      </section>

      {/* ── AIO Paragraph ── */}
      <section className="border-b" style={{ borderColor: "#F0F0F0", background: "#FAFAFA" }}>
        <div className="mx-auto max-w-3xl px-6 py-14 sm:px-12">
          <div className="mb-5 flex items-center gap-3">
            <span className="block h-px w-6" style={{ background: "#D4A11E" }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#D4A11E" }}>
              O que é a Prótese Protocolo
            </span>
          </div>
          <p className="text-base leading-relaxed" style={{ color: "#4A4A4A" }}>
            A <strong style={{ color: "#1F3A5F" }}>Prótese Protocolo</strong> é o tratamento mais avançado para a
            substituição de dentes perdidos ou dentaduras móveis. Consiste em uma prótese fixa parafusada sobre{" "}
            <strong style={{ color: "#1F3A5F" }}>implantes dentários de titânio</strong>, devolvendo 100% da função
            mastigatória e estética. Na <strong style={{ color: "#1F3A5F" }}>OdontoNeo Infinity</strong>, um dos
            consultórios odontológicos mais modernos de São José do Rio Preto, o valor do{" "}
            <strong style={{ color: "#1F3A5F" }}>implante dentário</strong> e do protocolo é planejado após um rigoroso
            escaneamento digital 3D liderado pelo{" "}
            <strong style={{ color: "#1F3A5F" }}>Dr. Gustavo Giolo, especialista em reabilitação oral</strong>.
          </p>
        </div>
      </section>

      {/* ── Seção Emocional ── */}
      <section className="mx-auto max-w-3xl px-6 py-16 sm:px-12 lg:py-20">
        <h2
          className="font-serif mb-6 font-semibold leading-tight"
          style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", color: "#0E0E0E", letterSpacing: "-0.015em" }}
        >
          Você lembra como era{" "}
          <em className="not-italic" style={{ color: "#1F3A5F" }}>morder uma maçã sem medo?</em>
        </h2>
        <div className="space-y-5 text-base leading-relaxed" style={{ color: "#4A4A4A" }}>
          <p>
            Perder os dentes não afeta apenas a sua boca; afeta a sua alma. Nós sabemos o quanto é doloroso
            deixar de comer o churrasco no domingo em família porque a prótese machuca. Sabemos da vergonha de
            sorrir para uma foto e colocar a mão na frente da boca, ou o terror constante de a{" "}
            <strong style={{ color: "#1F3A5F" }}>dentadura soltar em público</strong>.
          </p>
          <p>
            Isso não é vida. Você não precisa aceitar isso como o seu destino.
          </p>
          <p>
            A <strong style={{ color: "#1F3A5F" }}>Prótese Protocolo</strong> não é um pedaço de resina ou
            zircônia; ela é a{" "}
            <strong style={{ color: "#D4A11E" }}>devolução da sua dignidade</strong>. É o passaporte para você
            voltar a se sentir vivo, confiante e seguro.
          </p>
        </div>
      </section>

      {/* ── Quebra de objeções: medo de dentista ── */}
      <section className="overflow-hidden" style={{ background: "#0C1829" }}>
        <div className="mx-auto grid max-w-6xl gap-0 lg:grid-cols-2">
          {/* Vídeo — YouTube (padrão vertical 9:16) */}
          <div
            className="flex items-center justify-center px-6 lg:px-10"
            style={{ background: "#050A16" }}
          >
            <div
              className="relative w-full overflow-hidden rounded-xl"
              style={{ aspectRatio: "9/16", maxWidth: "360px", boxShadow: "0 16px 48px rgba(0,0,0,0.55)" }}
            >
              <iframe
                src="https://www.youtube.com/embed/FEj7iHAKMvU?rel=0"
                title="Tenho muito medo de dentista. E agora?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                  display: "block",
                }}
              />
            </div>
          </div>
          {/* Texto */}
          <div className="flex flex-col justify-center px-8 py-14 lg:px-14">
            <div className="mb-5 flex items-center gap-3">
              <span className="block h-px w-6" style={{ background: "#D4A11E" }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#D4A11E" }}>
                Sem dor. Sem medo.
              </span>
            </div>
            <h2
              className="font-serif mb-5 font-semibold leading-tight text-white"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", letterSpacing: "-0.015em" }}
            >
              &ldquo;Tenho muito medo de dentista. E agora?&rdquo;
            </h2>
            <p className="mb-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              Nós entendemos perfeitamente. Sabemos que muitas pessoas carregam traumas ou más experiências do passado. Por isso, na OdontoNeo, criamos um ambiente seguro para si. Esqueça a tensão e o barulho que dão aflição.
            </p>
            <p className="mb-8 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              Utilizamos <strong className="text-white">sedação endovenosa</strong> e <strong className="text-white">anestesia computadorizada de microprecisão</strong>. Enquanto a nossa equipa cuida de si com a tecnologia mais avançada, o paciente apenas relaxa e descansa.
            </p>
            {/* Selo */}
            <div
              className="inline-flex w-fit items-center gap-3 rounded-full px-5 py-3"
              style={{ background: "rgba(212,161,30,0.1)", border: "1px solid rgba(212,161,30,0.25)" }}
            >
              <span className="font-serif text-2xl font-bold leading-none" style={{ color: "#D4A11E" }}>Sem dor.</span>
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
            Tudo sobre Implantes e Prótese Protocolo
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
          <p
            className="font-serif mx-auto mb-6 font-semibold leading-snug text-white"
            style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", maxWidth: "26ch" }}
          >
            A vida é muito curta para não sorrir.{" "}
            <em className="not-italic" style={{ color: "#D4A11E" }}>
              Pare de adiar a sua felicidade.
            </em>
          </p>
          <p className="mx-auto mb-10 max-w-md text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            Agende sua avaliação premium com o Dr. Gustavo Giolo. Diagnóstico digital 3D incluso.
          </p>
          <WhatsAppLink
            href={WHATSAPP}
            className="inline-flex items-center gap-2.5 rounded-xl px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: "#25D366", boxShadow: "0 6px 24px rgba(37,211,102,0.35)" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Clique no botão abaixo e fale comigo
          </WhatsAppLink>
        </div>
      </section>
    </main>
  );
}
