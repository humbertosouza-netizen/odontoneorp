export const WHATSAPP_NUMBER = "5517997523045";
export const WHATSAPP_DISPLAY = "(17) 99752-3045";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

/** Prefixo para metrificar contatos vindos do site / Google Ads */
export const WHATSAPP_ORIGEM_SITE = "Contato vindo do site OdontoNeo";

/**
 * Gera o link do WhatsApp com mensagem pré-preenchida para identificar origem (site) e página/seção.
 * Use em todos os CTAs para metrificar quais leads vieram do site e de qual página.
 */
export function getWhatsAppHref(
  opts:
    | { mensagem: string; pagina?: string; secao?: string }
    | string
): string {
  const base = WHATSAPP_LINK;
  if (typeof opts === "string") {
    return `${base}?text=${encodeURIComponent(opts)}`;
  }
  const partes = [opts.mensagem, `(${WHATSAPP_ORIGEM_SITE}`];
  if (opts.pagina) partes.push(` - Página: ${opts.pagina}`);
  if (opts.secao) partes.push(` - Seção: ${opts.secao}`);
  partes.push(")");
  const texto = partes.join("");
  return `${base}?text=${encodeURIComponent(texto)}`;
}
export const EMAIL = "odontoneoriopreto@gmail.com";
export const ENDERECO = "Rua Ondina, 259 – Vila Redentora";
export const CIDADE = "São José do Rio Preto – SP";
export const CEP = "CEP 15015-205";
export const CRO = "CRO-SP 140.793";
export const DENTISTA = "Dr. Gustavo Giolo";

export const INSTAGRAM_LINK = "https://www.instagram.com/odontoneosjriopreto/";
export const INSTAGRAM_HANDLE = "@odontoneosjriopreto";
export const GOOGLE_MAPS_LINK = "https://share.google/GVcRtHTS1HqbMcAet";

export const NAV_LINKS = [
  { label: "Home page",    href: "/" },
  { label: "A clínica",   href: "/a-clinica" },
  { label: "Nossa equipe", href: "/nossa-equipe" },
  { label: "Tratamentos", href: "/tratamentos" },
  { label: "Resultados Reais", href: "/resultados-reais" },
  { label: "Contato",     href: "/contato" },
] as const;
