"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, WHATSAPP_LINK } from "@/lib/constants";
import AgendamentoModal from "@/components/AgendamentoModal";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: "#1F3A5F",
        boxShadow: scrolled ? "0 4px 24px rgba(22,45,74,0.5)" : "none",
      }}
    >
      {/* Top bar */}
      <div
        className="hidden border-b border-white/10 text-xs text-white/60 sm:block"
        style={{ background: "#162D4A" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1.5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <span className="text-brand-gold">📍</span>
              Rua Ondina, 259 – Vila Redentora – São José do Rio Preto – SP
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="text-brand-gold">🕐</span>
              Seg – Sex: 08:00 às 19:00
            </span>
            <span className="h-3.5 w-px bg-white/20" />
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-medium text-white/80 transition-colors hover:text-wa"
            >
              <span className="text-wa">📞</span>
              (17) 99667-8007
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#inicio" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-odontoneo.png"
            alt="OdontoNeo Infinity"
            style={{ height: "clamp(36px, 4vw, 52px)", width: "auto", objectFit: "contain" }}
          />
        </a>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-white/75 transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-brand-gold after:transition-all hover:after:w-full"
              style={{ paddingBottom: "2px" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Botão agendamento automático */}
          <button
            onClick={() => setModalOpen(true)}
            className="hidden items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-bold transition-all hover:opacity-90 active:scale-95 lg:inline-flex"
            style={{
              background: "linear-gradient(135deg, #D4A11E, #F0C84E)",
              color: "#1F3A5F",
              boxShadow: "0 4px 14px rgba(212,161,30,0.4)",
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-4 w-4">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Agende agora
          </button>

          {/* CTA WhatsApp desktop */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa hidden text-sm lg:inline-flex"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendar Avaliação
          </a>

          {/* Hamburger */}
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-white/80 transition-colors hover:bg-white/10 lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="border-t border-white/10 px-4 pb-5 pt-3 lg:hidden"
          style={{ background: "#162D4A" }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-white/75 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => { setOpen(false); setModalOpen(true); }}
            className="mt-3 w-full rounded-2xl py-3.5 text-sm font-bold transition-all hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #D4A11E, #F0C84E)",
              color: "#1F3A5F",
              boxShadow: "0 4px 14px rgba(212,161,30,0.35)",
            }}
          >
            📅 Agende agora seu horário
          </button>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-wa mt-2 w-full text-sm"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      )}

      <AgendamentoModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </header>
  );
}
