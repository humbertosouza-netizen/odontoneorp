import { WHATSAPP_DISPLAY, WHATSAPP_LINK, EMAIL, ENDERECO, CIDADE, CEP, INSTAGRAM_LINK, INSTAGRAM_HANDLE, GOOGLE_MAPS_LINK } from "@/lib/constants";
import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer style={{ background: "#162D4A" }}>
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-odontoneo.png"
                alt="OdontoNeo Infinity"
                style={{ height: 44, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p className="mb-5 max-w-xs text-sm leading-relaxed text-white/50">
              Clínica odontológica premium em São José do Rio Preto – SP. Cuidado, confiança
              e tecnologia a serviço do seu sorriso.
            </p>

            {/* Redes sociais */}
            <div className="mb-5 flex items-center gap-3">
              {/* Instagram */}
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram OdontoNeo"
                className="flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110"
                style={{ background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}
              >
                <svg viewBox="0 0 24 24" fill="white" className="h-5 w-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Google Meu Negócio */}
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="OdontoNeo no Google"
                className="flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110"
                style={{ background: "#fff" }}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp OdontoNeo"
                className="flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110"
                style={{ background: "#25D366" }}
              >
                <svg viewBox="0 0 24 24" fill="white" className="h-5 w-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>

            {/* Instagram handle */}
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-white/40 transition-colors hover:text-white/70"
            >
              {INSTAGRAM_HANDLE}
            </a>
          </div>

          {/* Links rápidos */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A11E" }}>
              Navegação
            </p>
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block py-1.5 text-sm text-white/55 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Contato */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A11E" }}>
              Contato
            </p>
            <div className="space-y-2 text-sm text-white/55">
              <p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  📞 {WHATSAPP_DISPLAY}
                </a>
              </p>
              <p>
                <a href={`mailto:${EMAIL}`} className="hover:text-white">
                  ✉️ {EMAIL}
                </a>
              </p>
              <p>
                <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  📍 {ENDERECO}
                </a>
              </p>
              <p className="pl-5">{CIDADE}</p>
              <p className="pl-5">{CEP}</p>
              <p>🕐 Seg – Sex: 08:00 – 19:00</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 border-t pt-6"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          {/* Linha principal */}
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} OdontoNeo Infinity – São José do Rio Preto – SP
            </p>
            <div className="flex gap-5 text-xs text-white/30">
              <a href="#" className="hover:text-white/70">Política de Privacidade</a>
              <a href="#" className="hover:text-white/70">Termos de Uso</a>
            </div>
          </div>

          {/* Crédito do desenvolvedor */}
          <p className="mt-3 text-center text-[11px] text-white/20">
            Feito com muito amor e carinho por:{" "}
            <span className="font-semibold text-white/35">Humberto Azambuja</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
