"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase-client";

type Period = "7d" | "30d" | "90d";
type TipoObservacao = "observacao" | "promocao" | "data_sazonal";

export default function AnaliseCampanhaPage() {
  const [period, setPeriod] = useState<Period>("30d");
  const [loadingSupabase, setLoadingSupabase] = useState(false);
  const [metrics, setMetrics] = useState({
    users: 0,
    sessions: 0,
    bounceRate: 0,
    avgDuration: "—",
    conversions: 0,
  });
  const [topPages, setTopPages] = useState<{ path: string; title: string; views: number; users: number }[]>([]);
  const [sources, setSources] = useState<{ source: string; sessions: number }[]>([]);

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
  const periodDays = period === "7d" ? 7 : period === "30d" ? 30 : 90;

  const formatPageTitle = (path: string) => {
    switch (path) {
      case "/":
        return "Página inicial";
      case "/a-clinica":
        return "A clínica";
      case "/nossa-equipe":
        return "Nossa equipe";
      case "/tratamentos":
        return "Tratamentos";
      case "/resultados-reais":
        return "Resultados reais";
      case "/tecnologias":
        return "Tecnologias";
      case "/contato":
        return "Contato";
      case "/gestor":
        return "Painel do Gestor";
      case "/analisecampanha":
        return "Painel de campanhas";
      default:
        return path;
    }
  };

  /* Carrega dados reais do Supabase, se disponível.
     Espera tabela "analytics_events" com colunas:
     - event_type: "page_view" | "lead_click"
     - page_path: string
     - source: "google" | "facebook" | "instagram" | "whatsapp" | "direct" | "other"
     - created_at: timestamp
  */
  useEffect(() => {
    const load = async () => {
      if (!supabase) {
        return;
      }
      const client = supabase;
      setLoadingSupabase(true);
      try {
        const since = new Date();
        since.setDate(since.getDate() - periodDays);

        // Page views e leads por página
        const { data: events, error } = await client
          .from("analytics_events")
          .select("event_type,page_path,source,created_at")
          .gte("created_at", since.toISOString());

        if (error || !events) {
          setMetrics({
            users: 0,
            sessions: 0,
            bounceRate: 0,
            avgDuration: "—",
            conversions: 0,
          });
          setTopPages([]);
          setSources([]);
          return;
        }

        // Usuários/sessões/conversões aproximados a partir dos eventos
        const totalSessions = events.filter((e) => e.event_type === "page_view").length;
        const totalLeads = events.filter((e) => e.event_type === "lead_click").length;

        setMetrics((prev) => ({
          users: Math.max(Math.round(totalSessions * 0.6), 0),
          sessions: totalSessions || 0,
          // Mantém bounce/duração se você já tiver configurado via GA4 no futuro;
          // por enquanto, se vier de estado inicial, fica "—" / 0.
          bounceRate: prev.bounceRate || 0,
          avgDuration: prev.avgDuration || "—",
          conversions: totalLeads || 0,
        }));

        // Top páginas por visualizações
        const byPath: Record<string, { views: number; leadClicks: number }> = {};
        for (const ev of events) {
          const path = ev.page_path || "/";
          // Não exibimos o painel do gestor na lista de páginas mais visitadas
          if (path === "/gestor") continue;
          if (!byPath[path]) byPath[path] = { views: 0, leadClicks: 0 };
          if (ev.event_type === "page_view") byPath[path].views += 1;
          if (ev.event_type === "lead_click") byPath[path].leadClicks += 1;
        }
        const pagesArray = Object.entries(byPath)
          .map(([path, agg]) => ({
            path,
            title: formatPageTitle(path),
            views: agg.views,
            users: Math.max(Math.round(agg.views * 0.6), 1),
          }))
          .sort((a, b) => b.views - a.views)
          .slice(0, 10);

        setTopPages(pagesArray);

        // Fontes de tráfego (Direto e Outros são englobados em Google)
        const bySource: Record<string, number> = {};
        for (const ev of events) {
          const src = (ev.source || "other") as string;
          bySource[src] = (bySource[src] || 0) + 1;
        }
        const googleTotal =
          (bySource["google"] || 0) + (bySource["direct"] || 0) + (bySource["other"] || 0);
        const mappedSources = [
          { source: "Google", sessions: googleTotal },
          { source: "Facebook/Instagram", sessions: bySource["facebook"] || 0 },
          { source: "Instagram", sessions: bySource["instagram"] || 0 },
          { source: "WhatsApp", sessions: bySource["whatsapp"] || 0 },
        ].filter((s) => s.sessions > 0);

        setSources(mappedSources);
      } finally {
        setLoadingSupabase(false);
      }
    };

    load();
  }, [period, periodDays]);

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
      if (data.error) throw new Error(data.error);
      const agora = new Date();
      const dataFmt = agora.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      });
      const horaFmt = agora.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setResumoIA(`Performance registrada em ${dataFmt} às ${horaFmt}.`);
    } catch {
      setResumoIA("Não foi possível gerar a análise. Tente novamente.");
    } finally {
      setAnalisando(false);
    }
  };

  return (
    <main className="min-h-screen" style={{ background: "#EAF0F6" }}>
      <section className="section py-10 lg:py-16">
        {/* Cabeçalho da página */}
        <header className="mb-10">
          <span className="eyebrow mb-3 block">Relatórios de Marketing</span>
          <h1 className="title-section">Análise de Campanhas</h1>
          <p className="mt-3 max-w-2xl text-sm text-ink-secondary">
            Visão rápida da performance do site, origens de tráfego e resultados em dinheiro.
            Use este painel para tomar decisões semanais junto com os relatórios do Google Ads.
          </p>
        </header>

        <div className="space-y-8">
          {/* Filtro de período */}
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white px-4 py-4 shadow-sm lg:px-6">
            <p className="text-sm font-medium text-[#4A4A4A]">
              Período: <span className="font-bold text-[#1F3A5F]">{periodLabel}</span>
            </p>
            <div className="flex rounded-xl border border-[#D4DCE8] bg-[#F7F9FC] p-1">
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
            {loadingSupabase && (
              <p className="mb-3 text-xs font-medium text-[#7A8694]">
                Carregando dados reais do Supabase…
              </p>
            )}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { label: "Usuários (estimado)", value: metrics.users.toLocaleString("pt-BR"), icon: "👤" },
                { label: "Sessões / visualizações", value: metrics.sessions.toLocaleString("pt-BR"), icon: "📊" },
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
                    {topPages.map((row, i) => (
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
              {sources.map((s) => {
                const total = sources.reduce((acc, x) => acc + x.sessions, 0) || 1;
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
              Adicione observações, promoções ou datas sazonais. A mensagem será registrada para você.
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
                <p className="text-sm font-medium text-[#25D366]">
                  ✓ Mensagem registrada com sucesso.
                </p>
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
                Registrar performance
              </h2>
            </div>
            <p className="mb-5 text-sm text-[#4A4A4A]">
              Informe leads e faturamento do dia. Os dados são salvos para acompanhamento no painel do gestor.
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
              {analisando ? "Registrando…" : "Registrar performance"}
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
              href="https://analytics.google.com/analytics/web/?hl=pt-br#/a387022417p527705139/reports/explorer?params=_u..nav%3Dmaui%26_u.date00%3D20260308%26_u.date01%3D20260310%26_u.comparisonOption%3Ddisabled%26_r.explorerCard..columnFilters%3D%7B%22event%22:%22click%22%7D&collectionId=user&r=all-pages-and-screens"
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
      </section>
    </main>
  );
}
