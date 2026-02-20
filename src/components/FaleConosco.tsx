import { WHATSAPP_LINK, WHATSAPP_DISPLAY, EMAIL, ENDERECO, CIDADE, CEP } from "@/lib/constants";

const CONTACTS = [
  {
    icon: "📞",
    label: "Telefone & WhatsApp",
    value: WHATSAPP_DISPLAY,
    href: WHATSAPP_LINK,
    external: true,
  },
  {
    icon: "✉️",
    label: "E-mail",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    external: false,
  },
  {
    icon: "📍",
    label: "Endereço",
    value: `${ENDERECO} · ${CIDADE}`,
    sub: CEP,
    href: "https://maps.google.com/?q=Rua+Ondina+259+São+José+do+Rio+Preto+SP",
    external: true,
  },
];

export default function FaleConosco() {
  return (
    <section id="contato" style={{ background: "#EAF0F6" }}>
      <div className="section">
        <div className="mb-12 text-center">
          <span className="eyebrow mb-3 block">Entre em Contato</span>
          <h2 className="title-section">Fale Conosco</h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-ink-secondary">
            Estamos prontos para atender você e sua família com cuidado e atenção.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-3">
          {CONTACTS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              className="card-white group flex flex-col gap-4"
            >
              {/* Ícone */}
              <div
                className="icon-badge h-12 w-12 rounded-xl text-xl"
                style={{ transition: "background 0.2s" }}
              >
                {c.icon}
              </div>

              {/* Linha dourada */}
              <div className="gold-bar" />

              <div>
                <p className="mb-0.5 text-xs font-bold uppercase tracking-widest text-ink-muted">
                  {c.label}
                </p>
                <p className="text-base font-bold text-ink group-hover:text-brand-blue">
                  {c.value}
                </p>
                {c.sub && <p className="text-sm text-ink-secondary">{c.sub}</p>}
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agende sua consulta gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
