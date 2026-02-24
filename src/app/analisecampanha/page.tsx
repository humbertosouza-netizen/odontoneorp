"use client";

import { useState } from "react";

type Period = "7d" | "30d" | "90d";
type TipoObservacao = "observacao" | "promocao" | "data_sazonal";

/* Dados de exemplo – substitua por chamada à API do GA4 quando configurar.
   Veja README ou .env.example para NEXT_PUBLIC_GA4_PROPERTY_ID e credenciais. */
const MOCK_METRICS = {
  "7d": { users: 342, sessions: 518, bounceRate: 42, avgDuration: "2m 15s", conversions: 28 },
  "30d": { users: 1284, sessions: 1922, bounceRate: 44, avgDuration: "2m 08s", conversions: 98 },
  "90d": { users: 3456, sessions: 5210, bounceRate: 45, avgDuration: "2m 02s", conversions: 267 },
};

const MOCK_TOP_PAGES = [
  { path: "/", title: "Página inicial", views: 1842, users: 1203 },
  { path: "/#galeria", title: "Galeria / Antes e Depois", views: 892, users: 601 },
  { path: "/#contato", title: "Como chegar", views: 756, users: 512 },
  { path: "/#dentista", title: "Dr. Gustavo Giolo", views: 634, users: 445 },
  { path: "/#tratamentos", title: "Tratamentos", views: 521, users: 398 },
];

const MOCK_SOURCES = [
  { source: "Google", sessions: 982 },
  { source: "Direto", sessions: 456 },
  { source: "Instagram", sessions: 312 },
  { source: "WhatsApp", sessions: 89 },
  { source: "Outros", sessions: 83 },
];

export default function AnaliseCampanhaPage() {
  const [period, setPeriod] = useState<Period>("30d");
  const metrics = MOCK_METRICS[period];

  /* Chat / Observações – envio para o gestor */
  const [tipoObs, setTipoObs] = useState<TipoObservacao>("observacao");
  const [mensagemObs, setMensagemObs] = useState("");
  const [dataSazonal, setDataSazonal] = useState("");
  const [enviandoObs, setEnviandoObs] = useState(false);
  const [obsEnviada, setObsEnviada] = useState(false);

  /* Painel IA – leads + faturamento + análise */
  const [leadsHoje, setLeadsHoje] = useState("");
  const [faturamentoHoje, setFaturamentoHoje] = useState("");
  const [observacoesIA, setObservacoesIA] = useState("");
  const [analisando, setAnalisando] = useState(false);
  const [resumoIA, setResumoIA] = useState<string | null>(null);

  const periodLabel = period === "7d" ? "Últimos 7 dias" : period === "30d" ? "Últimos 30 dias" : "Últimos 90 dias";

  const enviarObservacao = async () => {
    if (!mensagemObs.trim()) return;
    setEnviandoObs(true);
    setObsEnviada(false);
    try {
      const res = await fetch("/api/campanha-observacoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tipo: tipoObs,
          mensagem: mensagemObs.trim(),
          ...(tipoObs === "data_sazonal" && dataSazonal ? { data: dataSazonal } : {}),
        }),
      });
      const data = await res.json();
      if (data.ok) {
        setMensagemObs("");
        setDataSazonal("");
        setObsEnviada(true);
      } else throw new Error(data.error);
    } catch {
      setObsEnviada(false);
    } finally {
      setEnviandoObs(false);
    }
  };

  const analisarPerformance = async () => {
    setAnalisando(true);
    setResumoIA(null);
    try {
      const res = await fetch("/api/analise-ia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadsHoje: Number(leadsHoje.replace(/\D/g, "")) || 0,
          faturamentoHoje: Number(faturamentoHoje.replace(/\D/g, "").replace(",", ".")) || 0,
          periodo: periodLabel,
          observacoes: observacoesIA.trim() || undefined,
        }),
      });
      const data = await res.json();
      if (data.resumo) setResumoIA(data.resumo);
      else throw new Error(data.error);
    } catch {
      setResumoIA("Não foi possível gerar a análise. Tente novamente.");
    } finally {
      setAnalisando(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Filtro de período */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm font-medium text-[#4A4A4A]">
          Período: <span className="font-bold text-[#1F3A5F]">{periodLabel}</span>
        </p>
        <div className="flex rounded-xl border border-[#D4DCE8] bg-white p-1">
          {(["7d", "30d", "90d"] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className="rounded-lg px-4 py-2 text-sm font-semibold transition-all"
              style={{
                background: period === p ? "#1F3A5F" : "transparent",
                color: period === p ? "#fff" : "#4A4A4A",
              }}
            >
              {p === "7d" ? "7 dias" : p === "30d" ? "30 dias" : "90 dias"}
            </button>
          ))}
        </div>
      </div>

      {/* Cards de métricas principais */}
      <section>
        <h2 className="mb-4 text-base font-bold uppercase tracking-widest text-[#7A8694]">
          Visão geral
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { label: "Usuários", value: metrics.users.toLocaleString("pt-BR"), icon: "👤" },
            { label: "Sessões", value: metrics.sessions.toLocaleString("pt-BR"), icon: "📊" },
            { label: "Taxa de rejeição", value: `${metrics.bounceRate}%`, icon: "↩️" },
            { label: "Duração média", value: metrics.avgDuration, icon: "⏱️" },
            { label: "Conversões (CTA)", value: metrics.conversions.toString(), icon: "✅" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[#E8EEF5] bg-white p-5 shadow-sm transition-shadow hover:shadow-card"
            >
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#7A8694]">
                {item.label}
              </p>
              <p className="text-2xl font-extrabold" style={{ color: "#1F3A5F" }}>
                {item.value}
              </p>
              <span className="mt-2 block text-2xl opacity-60">{item.icon}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Páginas mais visitadas */}
      <section>
        <h2 className="mb-4 text-base font-bold uppercase tracking-widest text-[#7A8694]">
          Páginas mais visitadas
        </h2>
        <div className="overflow-hidden rounded-2xl border border-[#E8EEF5] bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[400px] text-left text-sm">
              <thead>
                <tr style={{ background: "#F7F9FC" }}>
                  <th className="px-5 py-3 font-bold text-[#1F3A5F]">Página</th>
                  <th className="px-5 py-3 font-bold text-[#1F3A5F]">Visualizações</th>
                  <th className="px-5 py-3 font-bold text-[#1F3A5F]">Usuários únicos</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_TOP_PAGES.map((row, i) => (
                  <tr
                    key={row.path}
                    className="border-t border-[#E8EEF5]"
                    style={{ background: i % 2 === 0 ? "#fff" : "#FAFBFC" }}
                  >
                    <td className="px-5 py-3">
                      <span className="font-medium text-[#0E0E0E]">{row.title}</span>
                      <p className="text-xs text-[#7A8694]">{row.path}</p>
                    </td>
                    <td className="px-5 py-3 font-semibold text-[#1F3A5F]">
                      {row.views.toLocaleString("pt-BR")}
                    </td>
                    <td className="px-5 py-3 text-[#4A4A4A]">
                      {row.users.toLocaleString("pt-BR")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Origem do tráfego */}
      <section>
        <h2 className="mb-4 text-base font-bold uppercase tracking-widest text-[#7A8694]">
          Origem do tráfego
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MOCK_SOURCES.map((s) => {
            const total = MOCK_SOURCES.reduce((acc, x) => acc + x.sessions, 0);
            const pct = Math.round((s.sessions / total) * 100);
            return (
              <div
                key={s.source}
                className="rounded-2xl border border-[#E8EEF5] bg-white p-5 shadow-sm"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-bold text-[#0E0E0E]">{s.source}</span>
                  <span className="text-sm font-semibold text-[#1F3A5F]">
                    {s.sessions.toLocaleString("pt-BR")} sessões
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-[#EAF0F6]">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${pct}%`, background: "linear-gradient(90deg, #1F3A5F, #2B5080)" }}
                  />
                </div>
                <p className="mt-1 text-xs text-[#7A8694]">{pct}% do total</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Chat: Observações, promoções e datas sazonais (vão para o gestor) ── */}
      <section className="rounded-2xl border border-[#E8EEF5] bg-white p-6 shadow-sm">
        <h2 className="mb-2 text-base font-bold uppercase tracking-widest text-[#7A8694]">
          Enviar para o gestor
        </h2>
        <p className="mb-5 text-sm text-[#4A4A4A]">
          Adicione observações, promoções ou datas sazonais. A mensagem será enviada para você (gestor).
        </p>

        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-[#4A4A4A]">
              Tipo
            </label>
            <div className="flex flex-wrap gap-2">
              {(
                [
                  { value: "observacao" as const, label: "Observação" },
                  { value: "promocao" as const, label: "Promoção" },
                  { value: "data_sazonal" as const, label: "Data sazonal" },
                ] as const
              ).map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setTipoObs(opt.value)}
                  className="rounded-xl border px-4 py-2 text-sm font-semibold transition-all"
                  style={{
                    borderColor: tipoObs === opt.value ? "#1F3A5F" : "#D4DCE8",
                    background: tipoObs === opt.value ? "#1F3A5F" : "#fff",
                    color: tipoObs === opt.value ? "#fff" : "#4A4A4A",
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {tipoObs === "data_sazonal" && (
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-[#4A4A4A]">
                Data (ex.: Black Friday, Natal, Dia das Mães)
              </label>
              <input
                type="text"
                value={dataSazonal}
                onChange={(e) => setDataSazonal(e.target.value)}
                placeholder="Ex: Black Friday – 29/11"
                className="w-full max-w-sm rounded-xl border border-[#D4DCE8] px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#1F3A5F]/30"
              />
            </div>
          )}

          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-[#4A4A4A]">
              Mensagem
            </label>
            <textarea
              value={mensagemObs}
              onChange={(e) => setMensagemObs(e.target.value)}
              placeholder="Ex: Próxima semana teremos 20% em clareamento. Ou: Anotar que em dezembro a demanda caiu."
              rows={4}
              className="w-full resize-none rounded-xl border border-[#D4DCE8] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#1F3A5F]/30"
            />
          </div>

          {obsEnviada && (
            <p className="text-sm font-medium text-[#25D366]">✓ Mensagem enviada. Você receberá no e-mail configurado.</p>
          )}

          <button
            onClick={enviarObservacao}
            disabled={enviandoObs || !mensagemObs.trim()}
            className="rounded-xl px-6 py-3 text-sm font-bold text-white transition-all hover:opacity-90 disabled:opacity-50"
            style={{ background: "#1F3A5F", boxShadow: "0 4px 16px rgba(31,58,95,0.3)" }}
          >
            {enviandoObs ? "Enviando…" : "Enviar para mim"}
          </button>
        </div>
      </section>

      {/* ── Painel IA: resultados + leads + faturamento → performance em dinheiro ── */}
      <section className="rounded-2xl border border-[#E8EEF5] bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <span className="text-xl">🤖</span>
          <h2 className="text-base font-bold uppercase tracking-widest text-[#7A8694]">
            Análise com IA
          </h2>
        </div>
        <p className="mb-5 text-sm text-[#4A4A4A]">
          Informe leads e faturamento do dia. A IA cruza com os resultados das campanhas e suas observações para avaliar a performance em resultado de dinheiro e rede de anúncios.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-[#4A4A4A]">
              Leads hoje
            </label>
            <input
              type="number"
              min={0}
              value={leadsHoje}
              onChange={(e) => setLeadsHoje(e.target.value)}
              placeholder="Ex: 12"
              className="w-full rounded-xl border border-[#D4DCE8] px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#1F3A5F]/30"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-[#4A4A4A]">
              Faturamento hoje (R$)
            </label>
            <input
              type="text"
              inputMode="decimal"
              value={faturamentoHoje}
              onChange={(e) => setFaturamentoHoje(e.target.value)}
              placeholder="Ex: 3500,00"
              className="w-full rounded-xl border border-[#D4DCE8] px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#1F3A5F]/30"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-[#4A4A4A]">
            Observações / contexto (opcional)
          </label>
          <textarea
            value={observacoesIA}
            onChange={(e) => setObservacoesIA(e.target.value)}
            placeholder="Ex: Muitos pedidos de orçamento para implante. Campanha do Google performou melhor."
            rows={2}
            className="w-full resize-none rounded-xl border border-[#D4DCE8] px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#1F3A5F]/30"
          />
        </div>

        <button
          onClick={analisarPerformance}
          disabled={analisando}
          className="mt-4 rounded-xl px-6 py-3 text-sm font-bold text-white transition-all hover:opacity-90 disabled:opacity-50"
          style={{ background: "linear-gradient(135deg, #1F3A5F, #2B5080)", boxShadow: "0 4px 16px rgba(31,58,95,0.3)" }}
        >
          {analisando ? "Analisando…" : "Analisar performance"}
        </button>

        {resumoIA && (
          <div
            className="mt-6 rounded-xl border p-5 text-sm leading-relaxed"
            style={{ borderColor: "#E8EEF5", background: "#F7F9FC" }}
          >
            <p className="whitespace-pre-wrap text-[#0E0E0E]">{resumoIA}</p>
          </div>
        )}
      </section>

      {/* CTA para GA completo */}
      <section className="rounded-2xl border border-[#D4DCE8] bg-white p-6 text-center">
        <p className="mb-2 text-sm text-[#4A4A4A]">
          Para relatórios completos, segmentação avançada e tempo real, acesse o Google Analytics.
        </p>
        <a
          href="https://analytics.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white transition-all hover:opacity-90"
          style={{ background: "#1F3A5F", boxShadow: "0 4px 16px rgba(31,58,95,0.3)" }}
        >
          Abrir Google Analytics
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </section>
    </div>
  );
}
