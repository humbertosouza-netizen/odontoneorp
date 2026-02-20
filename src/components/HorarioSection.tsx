"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_LINK } from "@/lib/constants";

function isOpenNow(): boolean {
  const now = new Date();
  const day = now.getDay(); // 1=seg, 5=sex
  const hour = now.getHours();
  return day >= 1 && day <= 5 && hour >= 8 && hour < 19;
}

const SCHEDULE = [
  { day: "Segunda-feira", time: "08:00 – 19:00", open: true },
  { day: "Terça-feira",   time: "08:00 – 19:00", open: true },
  { day: "Quarta-feira",  time: "08:00 – 19:00", open: true },
  { day: "Quinta-feira",  time: "08:00 – 19:00", open: true },
  { day: "Sexta-feira",   time: "08:00 – 19:00", open: true },
  { day: "Sábado",        time: "Fechado",        open: false },
  { day: "Domingo",       time: "Fechado",        open: false },
];

export default function HorarioSection() {
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    setAberto(isOpenNow());
  }, []);

  return (
    <section style={{ background: "#1F3A5F" }}>
      <div className="section">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
          {/* Texto */}
          <div>
            <span className="eyebrow-light mb-4 block">Disponibilidade</span>
            <h2 className="title-section-white mb-4">Horário de atendimento</h2>
            <p className="mb-8 text-base leading-relaxed text-white/60">
              Atendemos de segunda a sexta para que você possa cuidar do seu sorriso sem
              abrir mão da sua rotina.
            </p>

            {/* Status */}
            {aberto ? (
              <div
                className="inline-flex items-center gap-3 rounded-2xl px-5 py-3 text-sm font-bold"
                style={{ background: "rgba(37,211,102,0.15)", border: "1px solid rgba(37,211,102,0.35)" }}
              >
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wa opacity-50" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-wa" />
                </span>
                <span style={{ color: "#25D366" }}>Estamos abertos agora!</span>
              </div>
            ) : (
              <div
                className="inline-flex items-center gap-3 rounded-2xl px-5 py-3 text-sm font-bold"
                style={{ background: "rgba(255,100,100,0.12)", border: "1px solid rgba(255,100,100,0.25)" }}
              >
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="text-red-300">Fechado agora · Aberto Seg–Sex 08h–19h</span>
              </div>
            )}

            <div className="mt-8">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa">
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>

          {/* Tabela de horários */}
          <div
            className="overflow-hidden rounded-2xl"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            {SCHEDULE.map((s, i) => (
              <div
                key={s.day}
                className={`flex items-center justify-between px-5 py-3.5 ${
                  i < SCHEDULE.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <span className={`text-sm font-medium ${s.open ? "text-white/80" : "text-white/35"}`}>
                  {s.day}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${
                    s.open
                      ? "text-brand-gold"
                      : "text-white/30"
                  }`}
                  style={
                    s.open
                      ? { background: "rgba(212,161,30,0.15)", border: "1px solid rgba(212,161,30,0.3)" }
                      : { background: "rgba(255,255,255,0.05)" }
                  }
                >
                  {s.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
