"use client";

import { useState, useEffect, useCallback } from "react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

/* ── Configurações da clínica ────────────────────────── */
const TRATAMENTOS = [
  "Implante Dentário",
  "Prótese Protocolo",
  "Lentes de Contato Dental",
  "Clareamento Dental",
  "Tratamento de Gengiva",
  "Harmonização Orofacial",
  "Alinhador Transparente",
  "Tratamento de Canal",
  "Consulta / Avaliação",
  "Outro",
];

/* Horários disponíveis (Seg–Sex 08–18h) */
const HORARIOS = [
  "08:00", "09:00", "10:00", "11:00",
  "13:00", "14:00", "15:00", "16:00", "17:00", "18:00",
];

const DIAS_SEMANA = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const MESES = [
  "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
  "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro",
];

/* ────────────────────────────────────────────────────── */

type Step = 1 | 2 | 3 | 4;

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AgendamentoModal({ open, onClose }: Props) {
  const [step, setStep] = useState<Step>(1);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [tratamento, setTratamento] = useState("");
  const [problema, setProblema] = useState("");
  const [calMes, setCalMes] = useState(() => new Date());
  const [dataSel, setDataSel] = useState<Date | null>(null);
  const [horaSel, setHoraSel] = useState("");

  /* Fecha com Esc */
  useEffect(() => {
    if (!open) return;
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [open, onClose]);

  /* Trava scroll */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* Reset ao fechar */
  const handleClose = useCallback(() => {
    onClose();
    setTimeout(() => {
      setStep(1); setNome(""); setTelefone(""); setTratamento("");
      setProblema(""); setDataSel(null); setHoraSel("");
    }, 300);
  }, [onClose]);

  /* Formatar telefone */
  const fmtTel = (v: string) => {
    const d = v.replace(/\D/g, "").slice(0, 11);
    if (d.length <= 2) return d;
    if (d.length <= 7) return `(${d.slice(0,2)}) ${d.slice(2)}`;
    return `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`;
  };

  /* Calendário */
  const hoje = new Date(); hoje.setHours(0,0,0,0);

  const diasNoMes = (ano: number, mes: number) => new Date(ano, mes + 1, 0).getDate();
  const primeiroDia = (ano: number, mes: number) => new Date(ano, mes, 1).getDay();

  const isDisabled = (d: Date) => {
    const dow = d.getDay();
    return d < hoje || dow === 0; // desativa passado e domingos
  };

  const isSel = (d: Date) =>
    dataSel !== null &&
    d.getFullYear() === dataSel.getFullYear() &&
    d.getMonth() === dataSel.getMonth() &&
    d.getDate() === dataSel.getDate();

  const isHoje = (d: Date) =>
    d.getFullYear() === hoje.getFullYear() &&
    d.getMonth() === hoje.getMonth() &&
    d.getDate() === hoje.getDate();

  const buildCalendar = () => {
    const ano = calMes.getFullYear();
    const mes = calMes.getMonth();
    const total = diasNoMes(ano, mes);
    const offset = primeiroDia(ano, mes);
    const cells: (Date | null)[] = [];
    for (let i = 0; i < offset; i++) cells.push(null);
    for (let i = 1; i <= total; i++) cells.push(new Date(ano, mes, i));
    return cells;
  };

  /* Confirmação → WhatsApp */
  const confirmar = () => {
    const dataFmt = dataSel
      ? dataSel.toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "long", year: "numeric" })
      : "";
    const msg = [
      "Olá! Quero agendar uma consulta na OdontoNeo Infinity.",
      "",
      `*Nome:* ${nome}`,
      `*Telefone:* ${telefone}`,
      `*Tratamento:* ${tratamento}`,
      problema ? `*Descrição:* ${problema}` : "",
      `*Data preferida:* ${dataFmt}`,
      `*Horário preferido:* ${horaSel}`,
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    handleClose();
  };

  const step1Ok = nome.trim().length >= 2 && telefone.replace(/\D/g,"").length >= 10 && tratamento;
  const step2Ok = dataSel !== null;
  const step3Ok = horaSel !== "";

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: "rgba(14,14,14,0.7)", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-3xl shadow-2xl"
        style={{ background: "#fff", maxHeight: "90vh", overflowY: "auto" }}
      >
        {/* Header do modal */}
        <div
          className="sticky top-0 z-10 flex items-center justify-between px-6 py-4"
          style={{ background: "#1F3A5F" }}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/60">
              OdontoNeo Infinity
            </p>
            <p className="text-base font-extrabold text-white">
              Agende seu Horário
            </p>
          </div>
          <button
            onClick={handleClose}
            aria-label="Fechar"
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Barra de progresso */}
        <div className="flex gap-1 px-6 pt-4">
          {([1,2,3] as const).map((s) => (
            <div
              key={s}
              className="h-1.5 flex-1 rounded-full transition-all duration-300"
              style={{ background: step >= s ? "#D4A11E" : "#E8EEF5" }}
            />
          ))}
        </div>
        <p className="px-6 pt-1 pb-3 text-xs text-[#7A8694]">
          {step === 1 && "Passo 1 de 3 — Seus dados"}
          {step === 2 && "Passo 2 de 3 — Escolha a data"}
          {step === 3 && "Passo 3 de 3 — Escolha o horário"}
          {step === 4 && "Tudo pronto! Confirme seu agendamento"}
        </p>

        {/* ══ STEP 1 — Dados do lead ══ */}
        {step === 1 && (
          <div className="px-6 pb-6">
            <h3 className="mb-4 text-lg font-extrabold" style={{ color: "#1F3A5F" }}>
              Como podemos te chamar?
            </h3>

            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-[#4A4A4A]">
                  Nome completo *
                </label>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Ex: Maria da Silva"
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all focus:ring-2"
                  style={{
                    borderColor: "#D4DCE8",
                    color: "#0E0E0E",
                    background: "#FAFBFC",
                    // @ts-expect-error CSS variable
                    "--tw-ring-color": "#D4A11E",
                  }}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-[#4A4A4A]">
                  WhatsApp / Telefone *
                </label>
                <input
                  type="tel"
                  value={telefone}
                  onChange={(e) => setTelefone(fmtTel(e.target.value))}
                  placeholder="(17) 99999-9999"
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all focus:ring-2"
                  style={{ borderColor: "#D4DCE8", color: "#0E0E0E", background: "#FAFBFC" }}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-[#4A4A4A]">
                  Tratamento de interesse *
                </label>
                <select
                  value={tratamento}
                  onChange={(e) => setTratamento(e.target.value)}
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all focus:ring-2"
                  style={{ borderColor: "#D4DCE8", color: tratamento ? "#0E0E0E" : "#7A8694", background: "#FAFBFC" }}
                >
                  <option value="" disabled>Selecione o tratamento…</option>
                  {TRATAMENTOS.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-[#4A4A4A]">
                  Descreva seu caso (opcional)
                </label>
                <textarea
                  value={problema}
                  onChange={(e) => setProblema(e.target.value)}
                  placeholder="Ex: Perdi um dente e quero fazer implante…"
                  rows={3}
                  className="w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition-all focus:ring-2"
                  style={{ borderColor: "#D4DCE8", color: "#0E0E0E", background: "#FAFBFC" }}
                />
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!step1Ok}
              className="mt-5 w-full rounded-2xl py-4 text-sm font-bold text-white transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
              style={{ background: "#1F3A5F", boxShadow: "0 4px 16px rgba(31,58,95,0.3)" }}
            >
              Próximo — Escolher Data →
            </button>
          </div>
        )}

        {/* ══ STEP 2 — Calendário ══ */}
        {step === 2 && (
          <div className="px-6 pb-6">
            <h3 className="mb-4 text-lg font-extrabold" style={{ color: "#1F3A5F" }}>
              Qual data prefere?
            </h3>

            {/* Navegação mês */}
            <div className="mb-3 flex items-center justify-between">
              <button
                onClick={() => setCalMes(new Date(calMes.getFullYear(), calMes.getMonth() - 1, 1))}
                className="flex h-8 w-8 items-center justify-center rounded-full text-[#1F3A5F] transition-colors hover:bg-[#EAF0F6]"
              >
                ◀
              </button>
              <p className="text-sm font-bold" style={{ color: "#1F3A5F" }}>
                {MESES[calMes.getMonth()]} {calMes.getFullYear()}
              </p>
              <button
                onClick={() => setCalMes(new Date(calMes.getFullYear(), calMes.getMonth() + 1, 1))}
                className="flex h-8 w-8 items-center justify-center rounded-full text-[#1F3A5F] transition-colors hover:bg-[#EAF0F6]"
              >
                ▶
              </button>
            </div>

            {/* Cabeçalho dias */}
            <div className="mb-1 grid grid-cols-7 text-center">
              {DIAS_SEMANA.map((d) => (
                <p key={d} className="text-[10px] font-bold uppercase tracking-widest text-[#7A8694]">{d}</p>
              ))}
            </div>

            {/* Grade de dias */}
            <div className="grid grid-cols-7 gap-1">
              {buildCalendar().map((d, i) => {
                if (!d) return <div key={`empty-${i}`} />;
                const disabled = isDisabled(d);
                const sel = isSel(d);
                const eh = isHoje(d);
                return (
                  <button
                    key={d.toISOString()}
                    onClick={() => !disabled && setDataSel(d)}
                    disabled={disabled}
                    className="flex h-9 w-full items-center justify-center rounded-xl text-sm font-medium transition-all"
                    style={{
                      background: sel ? "#1F3A5F" : eh ? "#EAF0F6" : "transparent",
                      color: sel ? "#fff" : disabled ? "#C4CFD8" : "#0E0E0E",
                      fontWeight: eh || sel ? 700 : 500,
                      outline: eh && !sel ? "1px solid #1F3A5F" : "none",
                      cursor: disabled ? "not-allowed" : "pointer",
                    }}
                  >
                    {d.getDate()}
                  </button>
                );
              })}
            </div>

            <p className="mt-3 text-[11px] text-[#7A8694]">
              * Atendimento Seg – Sex. Domingos não disponíveis.
            </p>

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 rounded-2xl border py-3.5 text-sm font-bold transition-all hover:bg-[#EAF0F6]"
                style={{ borderColor: "#D4DCE8", color: "#1F3A5F" }}
              >
                ← Voltar
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!step2Ok}
                className="flex-1 rounded-2xl py-3.5 text-sm font-bold text-white transition-all hover:opacity-90 disabled:opacity-40"
                style={{ background: "#1F3A5F" }}
              >
                Próximo — Horário →
              </button>
            </div>
          </div>
        )}

        {/* ══ STEP 3 — Horários ══ */}
        {step === 3 && (
          <div className="px-6 pb-6">
            <h3 className="mb-1 text-lg font-extrabold" style={{ color: "#1F3A5F" }}>
              Qual horário prefere?
            </h3>
            {dataSel && (
              <p className="mb-4 text-sm text-[#4A4A4A]">
                {dataSel.toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "long" })}
              </p>
            )}

            <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
              {HORARIOS.map((h) => (
                <button
                  key={h}
                  onClick={() => setHoraSel(h)}
                  className="rounded-xl py-2.5 text-sm font-bold transition-all hover:scale-105"
                  style={{
                    background: horaSel === h ? "#D4A11E" : "#EAF0F6",
                    color: horaSel === h ? "#fff" : "#1F3A5F",
                    boxShadow: horaSel === h ? "0 4px 12px rgba(212,161,30,0.35)" : "none",
                  }}
                >
                  {h}
                </button>
              ))}
            </div>

            <div className="mt-5 flex gap-3">
              <button
                onClick={() => setStep(2)}
                className="flex-1 rounded-2xl border py-3.5 text-sm font-bold transition-all hover:bg-[#EAF0F6]"
                style={{ borderColor: "#D4DCE8", color: "#1F3A5F" }}
              >
                ← Voltar
              </button>
              <button
                onClick={() => setStep(4)}
                disabled={!step3Ok}
                className="flex-1 rounded-2xl py-3.5 text-sm font-bold text-white transition-all hover:opacity-90 disabled:opacity-40"
                style={{ background: "#1F3A5F" }}
              >
                Revisar →
              </button>
            </div>
          </div>
        )}

        {/* ══ STEP 4 — Confirmação ══ */}
        {step === 4 && (
          <div className="px-6 pb-6">
            <div className="mb-5 flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full text-2xl"
                style={{ background: "#EAF0F6" }}
              >
                📋
              </div>
              <div>
                <h3 className="text-lg font-extrabold" style={{ color: "#1F3A5F" }}>
                  Confirme seu agendamento
                </h3>
                <p className="text-xs text-[#7A8694]">Você será redirecionado ao WhatsApp</p>
              </div>
            </div>

            {/* Resumo */}
            <div className="mb-5 space-y-3 rounded-2xl p-4" style={{ background: "#F7F9FC", border: "1px solid #E8EEF5" }}>
              {[
                { label: "Nome", value: nome },
                { label: "Telefone", value: telefone },
                { label: "Tratamento", value: tratamento },
                problema && { label: "Descrição", value: problema },
                {
                  label: "Data",
                  value: dataSel
                    ? dataSel.toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "long", year: "numeric" })
                    : "",
                },
                { label: "Horário", value: horaSel },
              ].filter(Boolean).map((item) => item && (
                <div key={item.label} className="flex items-start gap-3">
                  <p className="w-24 shrink-0 text-xs font-bold uppercase tracking-widest text-[#7A8694]">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-[#0E0E0E]">{item.value}</p>
                </div>
              ))}
            </div>

            <p className="mb-4 text-xs text-[#4A4A4A]">
              Ao clicar em <strong>Confirmar</strong>, vamos abrir o WhatsApp com todos os seus dados preenchidos. Nossa equipe retornará para confirmar o horário em até 1h útil.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(3)}
                className="flex-1 rounded-2xl border py-3.5 text-sm font-bold transition-all hover:bg-[#EAF0F6]"
                style={{ borderColor: "#D4DCE8", color: "#1F3A5F" }}
              >
                ← Editar
              </button>
              <button
                onClick={confirmar}
                className="flex-1 rounded-2xl py-3.5 text-sm font-bold text-white transition-all hover:opacity-90"
                style={{ background: "#25D366", boxShadow: "0 4px 16px rgba(37,211,102,0.35)" }}
              >
                ✅ Confirmar no WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
