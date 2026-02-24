const IMPLANTES = [
  { keyword: "implante dentário são josé do rio preto", volume: "250 – 400", intencao: "Alta conversão" },
  { keyword: "implante dentário rio preto", volume: "200 – 350", intencao: "Alta" },
  { keyword: "dentista implante são josé do rio preto", volume: "120 – 200", intencao: "Alta" },
  { keyword: "implante dentário preço rio preto", volume: "90 – 160", intencao: "Fundo de funil" },
  { keyword: "especialista em implante dentário rio preto", volume: "60 – 120", intencao: "Fundo de funil" },
  { keyword: "clínica de implantes dentários rio preto", volume: "70 – 130", intencao: "Fundo de funil" },
  { keyword: "implante dentário perto de mim", volume: "150 – 300", intencao: "Mobile" },
];

const ESTETICA = [
  { keyword: "estética dental são josé do rio preto", volume: "150 – 280", intencao: "Alta" },
  { keyword: "dentista estético rio preto", volume: "120 – 220", intencao: "Alta" },
  { keyword: "lentes de contato dental rio preto", volume: "200 – 350", intencao: "Fundo de funil" },
  { keyword: "facetas de porcelana rio preto", volume: "180 – 320", intencao: "Fundo de funil" },
  { keyword: "sorriso perfeito odontologia rio preto", volume: "60 – 120", intencao: "Branding" },
  { keyword: "clínica odontológica estética rio preto", volume: "90 – 160", intencao: "Alta" },
];

const MARCADAO = [
  { keyword: "dentista são josé do rio preto", volume: "500 – 900" },
  { keyword: "clínica odontológica rio preto", volume: "400 – 700" },
  { keyword: "dentista perto de mim", volume: "800 – 1.500" },
  { keyword: "marcar consulta dentista rio preto", volume: "70 – 140" },
  { keyword: "dentista particular rio preto", volume: "150 – 280" },
];

function Badge({ label, type }: { label: string; type: "alta" | "fundo" | "branding" | "mobile" }) {
  const styles = {
    alta: { bg: "#D4A11E", color: "#1F3A5F" },
    fundo: { bg: "#EAF0F6", color: "#1F3A5F" },
    branding: { bg: "#2B5080", color: "#fff" },
    mobile: { bg: "#25D366", color: "#fff" },
  };
  const s = styles[type] || styles.alta;
  return (
    <span
      className="inline-block rounded-lg px-2.5 py-0.5 text-xs font-bold"
      style={{ background: s.bg, color: s.color }}
    >
      {label}
    </span>
  );
}

function mapIntencao(intencao: string): "alta" | "fundo" | "branding" | "mobile" {
  if (intencao.includes("Alta") && !intencao.includes("conversão")) return "alta";
  if (intencao.includes("conversão")) return "alta";
  if (intencao.includes("Fundo")) return "fundo";
  if (intencao.includes("Branding")) return "branding";
  if (intencao.includes("Mobile")) return "mobile";
  return "alta";
}

export default function EstrategiaPage() {
  return (
    <div className="space-y-10">
      <div className="text-center">
        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#7A8694]">
          SEO & Campanhas pagas
        </p>
        <h2 className="text-xl font-extrabold sm:text-2xl" style={{ color: "#1F3A5F" }}>
          Palavras-chave para São José do Rio Preto
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-[#4A4A4A]">
          Volume mensal estimado (SJRP) e intenção de busca. Use em anúncios e conteúdo.
        </p>
      </div>

      {/* 1. Implantes Dentários */}
      <section className="rounded-2xl border border-[#E8EEF5] bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center gap-3">
          <span className="text-2xl">🦷</span>
          <div>
            <h3 className="text-lg font-extrabold" style={{ color: "#1F3A5F" }}>
              Implantes Dentários
            </h3>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4A11E]">
              Core money keyword
            </p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px] text-left text-sm">
            <thead>
              <tr style={{ background: "#F7F9FC" }}>
                <th className="px-4 py-3 font-bold text-[#1F3A5F]">Palavra-chave</th>
                <th className="px-4 py-3 font-bold text-[#1F3A5F]">Volume mensal (SJRP)</th>
                <th className="px-4 py-3 font-bold text-[#1F3A5F]">Intenção</th>
              </tr>
            </thead>
            <tbody>
              {IMPLANTES.map((row, i) => (
                <tr
                  key={row.keyword}
                  className="border-t border-[#E8EEF5]"
                  style={{ background: i % 2 === 0 ? "#fff" : "#FAFBFC" }}
                >
                  <td className="px-4 py-3 font-medium text-[#0E0E0E]">{row.keyword}</td>
                  <td className="px-4 py-3 text-[#4A4A4A]">{row.volume}</td>
                  <td className="px-4 py-3">
                    <Badge label={row.intencao} type={mapIntencao(row.intencao)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. Estética Dental */}
      <section className="rounded-2xl border border-[#E8EEF5] bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center gap-3">
          <span className="text-2xl">✨</span>
          <div>
            <h3 className="text-lg font-extrabold" style={{ color: "#1F3A5F" }}>
              Estética Dental
            </h3>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4A11E]">
              Escala + branding
            </p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px] text-left text-sm">
            <thead>
              <tr style={{ background: "#F7F9FC" }}>
                <th className="px-4 py-3 font-bold text-[#1F3A5F]">Palavra-chave</th>
                <th className="px-4 py-3 font-bold text-[#1F3A5F]">Volume mensal estimado</th>
                <th className="px-4 py-3 font-bold text-[#1F3A5F]">Intenção</th>
              </tr>
            </thead>
            <tbody>
              {ESTETICA.map((row, i) => (
                <tr
                  key={row.keyword}
                  className="border-t border-[#E8EEF5]"
                  style={{ background: i % 2 === 0 ? "#fff" : "#FAFBFC" }}
                >
                  <td className="px-4 py-3 font-medium text-[#0E0E0E]">{row.keyword}</td>
                  <td className="px-4 py-3 text-[#4A4A4A]">{row.volume}</td>
                  <td className="px-4 py-3">
                    <Badge label={row.intencao} type={mapIntencao(row.intencao)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Palavras de Marcação / Ação */}
      <section className="rounded-2xl border border-[#E8EEF5] bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center gap-3">
          <span className="text-2xl">📍</span>
          <div>
            <h3 className="text-lg font-extrabold" style={{ color: "#1F3A5F" }}>
              Palavras de Marcação / Ação
            </h3>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4A11E]">
              Ouro escondido — convertem muito mesmo com volume menor
            </p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[400px] text-left text-sm">
            <thead>
              <tr style={{ background: "#F7F9FC" }}>
                <th className="px-4 py-3 font-bold text-[#1F3A5F]">Palavra-chave</th>
                <th className="px-4 py-3 font-bold text-[#1F3A5F]">Volume</th>
              </tr>
            </thead>
            <tbody>
              {MARCADAO.map((row, i) => (
                <tr
                  key={row.keyword}
                  className="border-t border-[#E8EEF5]"
                  style={{ background: i % 2 === 0 ? "#fff" : "#FAFBFC" }}
                >
                  <td className="px-4 py-3 font-medium text-[#0E0E0E]">{row.keyword}</td>
                  <td className="px-4 py-3 font-semibold text-[#1F3A5F]">{row.volume}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-2xl border border-[#D4DCE8] bg-white p-6 text-center">
        <p className="mb-3 text-sm text-[#4A4A4A]">
          Use essas palavras em campanhas Google Ads, Meta e no conteúdo do site para ranquear melhor em São José do Rio Preto.
        </p>
        <a
          href="/analisecampanha"
          className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white transition-all hover:opacity-90"
          style={{ background: "#1F3A5F", boxShadow: "0 4px 16px rgba(31,58,95,0.3)" }}
        >
          Ir para Análise de Campanha
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </section>
    </div>
  );
}
