"use client";

import { useState } from "react";
import { WHATSAPP_NUMBER, WHATSAPP_LINK, WHATSAPP_DISPLAY } from "@/lib/constants";

export default function FormularioSection() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [idade, setIdade] = useState("");
  const [problema, setProblema] = useState("");
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Olá, meu nome é ${nome}${idade ? `, tenho ${idade} anos` : ""} e gostaria de uma avaliação odontológica na OdontoNeo São José do Rio Preto. Meu principal incômodo é ${problema || "avaliação geral"}.`;
    setEnviado(true);
    setTimeout(() => {
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
        "_blank",
        "noopener,noreferrer"
      );
    }, 1000);
  }

  return (
    <section id="agendamento" style={{ background: "#EAF0F6" }}>
      <div className="section">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
          {/* Esquerda – copy */}
          <div>
            <span className="eyebrow mb-4 block">Agendamento</span>
            <h2 className="title-section mb-4">
              Forneça seus dados para agendar uma avaliação
            </h2>
            <div className="gold-bar" />
            <p className="mb-8 text-base leading-relaxed text-ink-secondary">
              Preencha o formulário ao lado e nossa equipe entrará em contato pelo WhatsApp
              para confirmar o melhor horário para você.
            </p>

            {/* Benefícios */}
            {[
              "Avaliação gratuita e sem compromisso",
              "Atendimento em até 24 horas",
              "Explicação clara sobre o tratamento",
              "Sem pressão para decisão imediata",
            ].map((b) => (
              <div key={b} className="mb-3 flex items-center gap-3">
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ background: "#1F3A5F" }}
                >
                  ✓
                </span>
                <span className="text-sm text-ink-secondary">{b}</span>
              </div>
            ))}

            <div className="mt-8 flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl text-2xl"
                style={{ background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.3)" }}
              >
                <svg viewBox="0 0 24 24" fill="#25D366" className="h-6 w-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-ink-muted">Prefere ligar ou mandar mensagem?</p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-brand-blue hover:text-brand-gold"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </div>
            </div>
          </div>

          {/* Direita – formulário */}
          <div>
            {enviado ? (
              <div
                className="flex flex-col items-center rounded-3xl p-10 text-center"
                style={{ background: "#FFFFFF", border: "1px solid #EAF0F6", boxShadow: "0 2px 12px rgba(31,58,95,0.08)" }}
              >
                <div
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full text-3xl"
                  style={{ background: "#EAF0F6" }}
                >
                  ✅
                </div>
                <p className="text-xl font-bold text-brand-blue">Solicitação enviada!</p>
                <p className="mt-2 text-sm text-ink-secondary">
                  Você será redirecionado para o WhatsApp em instantes…
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 rounded-3xl p-8"
                style={{ background: "#FFFFFF", border: "1px solid #EAF0F6", boxShadow: "0 2px 12px rgba(31,58,95,0.08)" }}
              >
                <div>
                  <label htmlFor="f-nome" className="mb-1.5 block text-sm font-semibold text-ink">
                    Nome completo *
                  </label>
                  <input
                    id="f-nome"
                    type="text"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="input"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="f-tel" className="mb-1.5 block text-sm font-semibold text-ink">
                      WhatsApp *
                    </label>
                    <input
                      id="f-tel"
                      type="tel"
                      required
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                      className="input"
                      placeholder="(17) 99999-9999"
                    />
                  </div>
                  <div>
                    <label htmlFor="f-idade" className="mb-1.5 block text-sm font-semibold text-ink">
                      Idade
                    </label>
                    <input
                      id="f-idade"
                      type="text"
                      inputMode="numeric"
                      value={idade}
                      onChange={(e) => setIdade(e.target.value)}
                      className="input"
                      placeholder="Ex: 55"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="f-prob" className="mb-1.5 block text-sm font-semibold text-ink">
                    Principal incômodo
                  </label>
                  <input
                    id="f-prob"
                    type="text"
                    value={problema}
                    onChange={(e) => setProblema(e.target.value)}
                    className="input"
                    placeholder="Ex: falta de dente, dor, dentadura solta, estética"
                  />
                </div>

                <button type="submit" className="btn-wa w-full">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Solicitar Avaliação Gratuita
                </button>

                <p className="text-center text-xs text-ink-muted">
                  Ao solicitar, você concorda com nossa{" "}
                  <a href="#" className="underline hover:text-brand-blue">
                    Política de Privacidade
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
