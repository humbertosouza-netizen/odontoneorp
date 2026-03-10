"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase-client";

type Observacao = {
  id: string;
  created_at: string;
  tipo: "observacao" | "promocao" | "data_sazonal";
  mensagem: string;
  data_sazonal: string | null;
};

type AnaliseIA = {
  id: string;
  created_at: string;
  leads_hoje: number;
  faturamento_hoje: number;
  periodo: string;
  observacoes: string | null;
  resumo_ia: string | null;
};

export default function GestorPage() {
  const [observacoes, setObservacoes] = useState<Observacao[]>([]);
  const [analises, setAnalises] = useState<AnaliseIA[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      if (!supabase) {
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const [{ data: obs }, { data: ia }] = await Promise.all([
          supabase
            .from("campanha_observacoes")
            .select("*")
            .order("created_at", { ascending: false })
            .limit(50),
          supabase
            .from("ia_analises_diarias")
            .select("*")
            .order("created_at", { ascending: false })
            .limit(30),
        ]);

        setObservacoes((obs as Observacao[]) || []);
        setAnalises((ia as AnaliseIA[]) || []);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <main className="min-h-screen" style={{ background: "#EAF0F6" }}>
      <section className="section py-10 lg:py-16">
        <header className="mb-10">
          <span className="eyebrow mb-3 block">Painel do Gestor</span>
          <h1 className="title-section">Resumo diário de campanhas</h1>
          <p className="mt-3 max-w-2xl text-sm text-ink-secondary">
            Veja rapidamente as observações, promoções e datas sazonais anotadas no painel, além
            dos registros diários de leads e faturamento informados na análise com IA.
          </p>
        </header>

        {loading && (
          <p className="text-sm text-[#7A8694] mb-6">
            Carregando dados reais do Supabase…
          </p>
        )}

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Coluna 1 – Observações para o gestor */}
          <section className="rounded-2xl border border-[#E8EEF5] bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-base font-bold uppercase tracking-widest text-[#7A8694]">
              Observações e promoções
            </h2>
            <p className="mb-4 text-sm text-[#4A4A4A]">
              Últimas anotações enviadas pelo painel &quot;Enviar para o gestor&quot;.
            </p>

            {observacoes.length === 0 ? (
              <p className="text-sm text-[#7A8694]">Nenhuma observação registrada ainda.</p>
            ) : (
              <ul className="space-y-4">
                {observacoes.map((obs) => (
                  <li
                    key={obs.id}
                    className="rounded-xl border border-[#E8EEF5] bg-[#F7F9FC] p-4 text-sm"
                  >
                    <div className="mb-1 flex items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#7A8694]">
                        {obs.tipo === "observacao"
                          ? "Observação"
                          : obs.tipo === "promocao"
                          ? "Promoção"
                          : "Data sazonal"}
                      </span>
                      <span className="text-[11px] text-[#7A8694]">
                        {new Date(obs.created_at).toLocaleString("pt-BR", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "2-digit",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    {obs.data_sazonal && (
                      <p className="mb-1 text-xs font-semibold text-[#1F3A5F]">
                        {obs.data_sazonal}
                      </p>
                    )}
                    <p className="text-[#0E0E0E] whitespace-pre-wrap">{obs.mensagem}</p>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Coluna 2 – Análises com IA / Faturamento diário */}
          <section className="rounded-2xl border border-[#E8EEF5] bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-base font-bold uppercase tracking-widest text-[#7A8694]">
              Leads, faturamento e IA
            </h2>
            <p className="mb-4 text-sm text-[#4A4A4A]">
              Registros diários preenchidos no bloco &quot;Análise com IA&quot; do painel.
            </p>

            {analises.length === 0 ? (
              <p className="text-sm text-[#7A8694]">
                Nenhuma análise registrada ainda. Preencha o painel de Análise com IA para começar
                a ver os dados aqui.
              </p>
            ) : (
              <div className="space-y-4">
                {analises.map((a) => (
                  <article
                    key={a.id}
                    className="rounded-xl border border-[#E8EEF5] bg-[#F7F9FC] p-4 text-sm"
                  >
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <div className="text-xs text-[#7A8694]">
                        <span className="font-bold uppercase tracking-widest">
                          {a.periodo}
                        </span>
                        <span className="ml-2">
                          ·{" "}
                          {new Date(a.created_at).toLocaleDateString("pt-BR", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "2-digit",
                          })}
                        </span>
                      </div>
                      <span className="text-[11px] font-medium text-[#1F3A5F]">
                        Leads: {a.leads_hoje} · Faturamento:{" "}
                        {a.faturamento_hoje.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </span>
                    </div>

                    {a.observacoes && (
                      <p className="mb-2 text-xs text-[#4A4A4A] whitespace-pre-wrap">
                        <span className="font-semibold text-[#1F3A5F]">Observações: </span>
                        {a.observacoes}
                      </p>
                    )}

                    {a.resumo_ia && (
                      <div className="mt-2 rounded-lg border border-[#D4DCE8] bg-white p-3 text-xs leading-relaxed">
                        <p className="mb-1 font-semibold text-[#1F3A5F]">
                          Resumo da IA:
                        </p>
                        <p className="whitespace-pre-wrap text-[#0E0E0E]">
                          {a.resumo_ia}
                        </p>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </section>
    </main>
  );
}

