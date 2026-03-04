"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_LINKS, WHATSAPP_LINK, WHATSAPP_DISPLAY, ENDERECO, CIDADE } from "@/lib/constants";
import AgendamentoModal from "@/components/AgendamentoModal";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  /* Trava scroll do body quando menu aberto */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ══ HEADER FIXO — sempre escuro, sem animação de scroll ══ */}
      <header
        className="fixed left-0 right-0 top-0 z-50"
        style={{
          background: "rgba(22,45,74,0.98)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">

          {/* Esquerda: botão menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2.5 transition-opacity hover:opacity-70"
            aria-label="Menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className="block h-px w-6 bg-white transition-all duration-300 origin-center"
                style={{ transform: menuOpen ? "translateY(5px) rotate(45deg)" : "none" }}
              />
              <span
                className="block h-px bg-white transition-all duration-300"
                style={{ width: menuOpen ? 24 : 16, opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block h-px w-6 bg-white transition-all duration-300 origin-center"
                style={{ transform: menuOpen ? "translateY(-5px) rotate(-45deg)" : "none" }}
              />
            </div>
            <span className="hidden text-[11px] font-bold uppercase tracking-[0.22em] text-white/80 sm:block">
              Menu
            </span>
          </button>

          {/* Centro: Logo */}
          <Link
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            onClick={() => setMenuOpen(false)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-odontoneo.png"
              alt="OdontoNeo Infinity"
              style={{ height: "clamp(32px, 4vw, 44px)", width: "auto", objectFit: "contain" }}
            />
          </Link>

          {/* Direita: Contato */}
          <div className="flex items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 text-sm font-medium text-white/80 transition-opacity hover:opacity-70 sm:flex"
            >
              Contato
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            {/* Mobile: agendar */}
            <button
              onClick={() => setModalOpen(true)}
              className="text-[11px] font-bold uppercase tracking-widest sm:hidden"
              style={{ color: "#D4A11E" }}
            >
              Agendar
            </button>
          </div>
        </div>
      </header>

      {/* ══ OVERLAY MENU FULLSCREEN ══ */}
      <div
        className="fixed inset-0 z-40 flex flex-col pt-20"
        style={{
          background: "#0A1628",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.45s ease",
        }}
      >
        {/* Imagem de fundo com opacidade baixa */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/equipe socios.jpg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
          style={{ opacity: 0.07 }}
        />

        {/* Linha dourada decorativa — topo */}
        <div
          className="absolute left-0 right-0 top-[72px] h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(212,161,30,0.4), transparent)" }}
        />

        {/* Elemento decorativo — número grande no fundo */}
        <div
          className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 select-none font-serif text-[20vw] font-semibold leading-none opacity-[0.03] text-white lg:right-16"
          aria-hidden
        >
          Neo
        </div>

        {/* ── Conteúdo principal: dois painéis ── */}
        <div className="flex flex-1 flex-col lg:flex-row">

          {/* Painel esquerdo — links de navegação */}
          <div className="flex flex-1 flex-col justify-center px-8 py-8 sm:px-14 lg:px-20 lg:py-0">

            {/* Eyebrow */}
            <p
              className="mb-8 text-[10px] font-bold uppercase tracking-[0.3em]"
              style={{
                color: "#D4A11E",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(12px)",
                transition: "all 0.4s ease 100ms",
              }}
            >
              Navegação
            </p>

            {/* Links */}
            <nav className="flex flex-col">
              {NAV_LINKS.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-baseline gap-4 border-b py-4 transition-all duration-300"
                  style={{
                    borderColor: "rgba(255,255,255,0.06)",
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateX(0)" : "translateX(-20px)",
                    transition: `opacity 0.4s ease ${100 + i * 60}ms, transform 0.4s ease ${100 + i * 60}ms, border-color 0.3s ease`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,161,30,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                  }}
                >
                  {/* Número */}
                  <span
                    className="shrink-0 font-mono text-[11px] font-bold transition-colors duration-300 group-hover:text-white/60"
                    style={{ color: "rgba(212,161,30,0.45)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Label */}
                  <span
                    className="font-serif font-light text-white/60 transition-all duration-300 group-hover:text-white group-hover:tracking-wide"
                    style={{ fontSize: "clamp(1.4rem, 3vw, 2.4rem)" }}
                  >
                    {l.label}
                  </span>
                  {/* Seta hover */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D4A11E"
                    strokeWidth={1.5}
                    className="ml-auto h-4 w-4 shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              ))}
            </nav>
          </div>

          {/* Painel direito — CTAs + info (desktop) */}
          <div
            className="hidden lg:flex lg:w-80 lg:flex-col lg:justify-center lg:border-l lg:px-14 xl:w-96"
            style={{
              borderColor: "rgba(255,255,255,0.06)",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateX(0)" : "translateX(20px)",
              transition: "all 0.5s ease 400ms",
            }}
          >
            <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: "#D4A11E" }}>
              Fale conosco
            </p>

            {/* CTA 1 — Agendar */}
            <button
              onClick={() => { setMenuOpen(false); setModalOpen(true); }}
              className="group mb-6 flex items-center gap-4 text-left transition-opacity hover:opacity-70"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                style={{ background: "rgba(212,161,30,0.15)", border: "1px solid rgba(212,161,30,0.3)" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#D4A11E" strokeWidth={1.5} className="h-4 w-4">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Agendar horário</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Escolha data e horário</p>
              </div>
            </button>

            {/* CTA 2 — WhatsApp */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="group mb-10 flex items-center gap-4 transition-opacity hover:opacity-70"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                style={{ background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.3)" }}
              >
                <svg viewBox="0 0 24 24" fill="#25D366" className="h-4 w-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">WhatsApp</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{WHATSAPP_DISPLAY}</p>
              </div>
            </a>

            {/* Info endereço */}
            <div className="border-t pt-8" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.3)" }}>
                {ENDERECO}<br />{CIDADE}
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-widest" style={{ color: "rgba(212,161,30,0.5)" }}>
                Seg – Sex · 08h às 19h
              </p>
            </div>
          </div>
        </div>

        {/* ── Rodapé mobile — CTAs compactos ── */}
        <div
          className="border-t px-8 py-5 lg:hidden"
          style={{
            borderColor: "rgba(255,255,255,0.07)",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(12px)",
            transition: `all 0.4s ease ${NAV_LINKS.length * 60 + 120}ms`,
          }}
        >
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => { setMenuOpen(false); setModalOpen(true); }}
              className="flex items-center gap-2 rounded-xl border px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10"
              style={{ borderColor: "rgba(212,161,30,0.4)", color: "#D4A11E" }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Agendar
            </button>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 rounded-xl border px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all hover:bg-white/10"
              style={{ borderColor: "rgba(37,211,102,0.4)", color: "#25D366" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <AgendamentoModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
