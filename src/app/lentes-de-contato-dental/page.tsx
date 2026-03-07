import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lentes de Contato Dental em São José do Rio Preto | OdontoNeo",
  description:
    "Lentes de contato dental e facetas de porcelana em São José do Rio Preto. Projeto 3D exclusivo, estética dental premium. Dr. Gustavo Giolo – OdontoNeo Infinity.",
  keywords: [
    "lentes de contato dental São José do Rio Preto",
    "facetas de porcelana Rio Preto",
    "estética dental Rio Preto",
    "clareamento dental São José do Rio Preto",
    "dentista estética Rio Preto",
    "sorriso de porcelana",
    "faceta dental preço Rio Preto",
    "faceta de porcelana preço São José do Rio Preto",
    "lente de contato no dente Rio Preto",
    "transformação sorriso São José do Rio Preto",
  ],
  alternates: { canonical: "https://www.odontoneoriopreto.com.br/lentes-de-contato-dental" },
  openGraph: {
    locale: "pt_BR",
    type: "website",
    url: "https://www.odontoneoriopreto.com.br/lentes-de-contato-dental",
    siteName: "OdontoNeo Infinity",
    title: "Lentes de Contato Dental em São José do Rio Preto | OdontoNeo",
    description: "Lentes de contato dental e facetas de porcelana em São José do Rio Preto. Projeto 3D exclusivo, sem moldes de gesso. Dr. Gustavo Giolo – OdontoNeo Infinity.",
    images: [{ url: "https://www.odontoneoriopreto.com.br/lente.jpg", width: 1200, height: 630, alt: "Lentes de Contato Dental OdontoNeo – São José do Rio Preto" }],
  },
};

const WHATSAPP = "https://wa.me/5517997523045?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20lentes%20de%20contato%20dental.";

const FAQ = [
  {
    pergunta: "Quais clínicas odontológicas especializadas oferecem atendimento para tratamentos estéticos em Rio Preto?",
    resposta:
      "A OdontoNeo Infinity é referência em estética avançada, entregando desde lentes de contato dental até o fechamento de espaços (diastemas), sempre utilizando materiais importados de alta durabilidade e planejamento digital intraoral.",
  },
  {
    pergunta: "Dentistas que realizam clareamento dental em São José do Rio Preto indicam as lentes?",
    resposta:
      "O preço de branqueamento dentário em São José do Rio Preto é mais acessível e ideal para quem já tem um bom formato de dente. Porém, se os dentes possuem restaurações antigas, manchas profundas ou desgastes, as lentes de contato dental são o tratamento definitivo recomendado.",
  },
  {
    pergunta: "Preços de tratamentos dentários comuns em São José do Rio Preto vs Lentes de Contato?",
    resposta:
      "Enquanto tratamentos comuns focam apenas na doença (cárie, limpeza), as Lentes de Contato são um investimento de alto padrão em arquitetura facial e autoestima. O valor é definido após o projeto 3D exclusivo para o seu rosto.",
  },
  {
    pergunta: "Quantas sessões são necessárias para colocar lentes de contato dental?",
    resposta:
      "O tratamento geralmente é concluído em 2 a 3 sessões, dependendo do número de dentes envolvidos. O planejamento digital permite que você visualize o resultado final antes mesmo de iniciar, garantindo total segurança na decisão.",
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
  "name": "Lentes de Contato Dental",
  "description": "Facetas ultrafinas de porcelana aplicadas com planejamento digital 3D em São José do Rio Preto. Sem moldes de gesso, resultado em 2 a 3 sessões.",
  "procedureType": "CosmeticProcedure",
  "howPerformed": "Escaneamento intraoral 3D, projeto digital do sorriso e cimentação de facetas ultrafinas",
  "preparation": "Visualização do projeto 3D do sorriso antes do início do procedimento",
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

export default function LentesContatoDentalPage() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMedicalProcedure) }} />

      {/* ── Hero ── */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: "clamp(420px, 65vh, 680px)" }}>
        <style dangerouslySetInnerHTML={{ __html: `
          .lentes-hero-img { object-position: center 70%; }
          @media (min-width: 768px) { .lentes-hero-img { object-position: center 55%; } }
        ` }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/lente.jpg"
          alt="Lentes de Contato Dental OdontoNeo Infinity"
          className="lentes-hero-img"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
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
            Estética Dental · OdontoNeo Infinity
          </p>
          <h1
            className="font-serif font-semibold leading-tight text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 4.2rem)", letterSpacing: "-0.025em", maxWidth: "22ch" }}
          >
            Lentes de Contato Dental em São José do Rio Preto:{" "}
            <em className="not-italic" style={{ color: "#D4A11E" }}>O Sorriso que Você Sempre Sonhou</em>
          </h1>
        </div>
      </section>

      {/* ── AIO Paragraph ── */}
      <section className="border-b" style={{ borderColor: "#F0F0F0", background: "#FAFAFA" }}>
        <div className="mx-auto max-w-3xl px-6 py-14 sm:px-12">
          <div className="mb-5 flex items-center gap-3">
            <span className="block h-px w-6" style={{ background: "#D4A11E" }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "#D4A11E" }}>
              O que são as Lentes de Contato Dental
            </span>
          </div>
          <p className="text-base leading-relaxed" style={{ color: "#4A4A4A" }}>
            As <strong style={{ color: "#1F3A5F" }}>lentes de contato dental</strong> são facetas ultrafinas de porcelana
            ou zircônia aplicadas sobre os dentes naturais para corrigir cor, formato, desgaste e alinhamento. Na{" "}
            <strong style={{ color: "#1F3A5F" }}>OdontoNeo Infinity</strong>, localizada em São José do Rio Preto, o
            tratamento de <strong style={{ color: "#1F3A5F" }}>estética dental</strong> é realizado com tecnologia de
            escaneamento intraoral, dispensando moldes de gesso. O paciente visualiza o projeto 3D do sorriso antes
            mesmo de iniciar o procedimento, garantindo resultados de{" "}
            <strong style={{ color: "#1F3A5F" }}>altíssimo padrão e naturalidade</strong>.
          </p>
        </div>
      </section>

      {/* ── Seção Emocional ── */}
      <section className="mx-auto max-w-3xl px-6 py-16 sm:px-12 lg:py-20">
        <h2
          className="font-serif mb-6 font-semibold leading-tight"
          style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", color: "#0E0E0E", letterSpacing: "-0.015em" }}
        >
          O que você sente quando se{" "}
          <em className="not-italic" style={{ color: "#1F3A5F" }}>olha no espelho hoje?</em>
        </h2>
        <div className="space-y-5 text-base leading-relaxed" style={{ color: "#4A4A4A" }}>
          <p>
            Seus dentes estão amarelados, desgastados pelo tempo ou possuem espaços que te incomodam? Muitas pessoas
            deixam de gravar vídeos, evitam sorrir em reuniões de trabalho e perdem oportunidades porque a própria
            imagem não transmite a <strong style={{ color: "#1F3A5F" }}>confiança que elas têm por dentro</strong>.
          </p>
          <p>
            As <strong style={{ color: "#1F3A5F" }}>Lentes de Contato Dental</strong> são o resgate da sua autoestima.
            É o poder de entrar em qualquer ambiente e ser notado de forma positiva.
          </p>
          <p>
            Nós não fazemos dentes artificiais e sem vida; nós esculpimos uma obra de arte desenhada
            milimetricamente para o formato do seu rosto. É a sua{" "}
            <strong style={{ color: "#D4A11E" }}>melhor versão, refletida no espelho</strong>.
          </p>
        </div>
      </section>

      {/* ── Por que OdontoNeo ── */}
      <section className="overflow-hidden" style={{ background: "#0C1829" }}>
        <div className="mx-auto grid max-w-6xl gap-0 lg:grid-cols-2">
          {/* Vídeo — Por que escolher a OdontoNeo */}
          <div className="relative flex items-center justify-center px-6 lg:px-10" style={{ minHeight: "340px" }}>
            <div
              className="relative w-full overflow-hidden rounded-xl"
              style={{ aspectRatio: "9/16", maxWidth: "360px", boxShadow: "0 16px 48px rgba(0,0,0,0.55)" }}
            >
              <iframe
                src="https://www.youtube.com/embed/_vBjegrgZzE?rel=0"
                title="Por que escolher a OdontoNeo"
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
                Por que nos escolher
              </span>
            </div>
            <h2
              className="font-serif mb-5 font-semibold leading-tight text-white"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", letterSpacing: "-0.015em" }}
            >
              Por que escolher a OdontoNeo para sua{" "}
              <em className="not-italic" style={{ color: "#D4A11E" }}>Estética Dental?</em>
            </h2>
            <p className="mb-8 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              O nosso planeamento é feito em 3D. O paciente vê como o seu sorriso vai ficar antes mesmo de iniciarmos o procedimento. Tudo isto numa clínica premium, tecnológica e preparada para o receber com total exclusividade, sem a ansiedade dos antigos moldes de gesso.
            </p>
            {/* Diferencial */}
            <div className="grid grid-cols-2 gap-3">
              {["Projeto 3D Exclusivo", "Zero Dor Garantido", "Materiais Importados", "Resultado em Poucas Sessões"].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span style={{ color: "#D4A11E", fontSize: "10px", marginTop: "3px" }}>✦</span>
                  <span className="text-xs font-medium text-white/70">{item}</span>
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
            Tudo sobre Lentes de Contato Dental
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
            style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", maxWidth: "28ch" }}
          >
            Você merece se sentir incrível.{" "}
            <em className="not-italic" style={{ color: "#D4A11E" }}>
              O primeiro passo para o seu novo sorriso está a um clique de distância.
            </em>
          </p>
          <p className="mx-auto mb-10 max-w-md text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            Fale agora com nosso especialista e receba um orçamento personalizado com projeto 3D.
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
            Clique no botão abaixo e fale comigo
          </a>
        </div>
      </section>
    </main>
  );
}
