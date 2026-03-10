"use client";

import { usePathname } from "next/navigation";
import { WHATSAPP_LINK, getWhatsAppHref } from "@/lib/constants";
import { trackConversion } from "@/lib/gtag";

interface WhatsAppLinkProps {
  /** URL completa (sobrescreve message/addPathname se informado) */
  href?: string;
  /** Mensagem pré-preenchida. Inclui automaticamente identificação "Contato vindo do site OdontoNeo". */
  message?: string;
  /** Nome da página para metrificação (ex: "Tratamentos", "Implante Dentário") */
  page?: string;
  /** Nome da seção (ex: "CTA final", "Agenda") */
  section?: string;
  /** Se true, adiciona o pathname atual ao final da mensagem (ex: " | URL: /tratamentos") */
  addPathname?: boolean;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function WhatsAppLink({
  href: hrefProp,
  message,
  page,
  section,
  addPathname,
  className,
  style,
  "aria-label": ariaLabel,
  onClick,
  children,
}: WhatsAppLinkProps) {
  const handleClick = () => {
    trackConversion();
    onClick?.();
  };
  const pathname = usePathname();

  const href =
    hrefProp ??
    (message
      ? getWhatsAppHref({
          mensagem:
            message +
            (addPathname && pathname ? ` | URL: ${pathname}` : ""),
          pagina: page,
          secao: section,
        })
      : addPathname && pathname
        ? getWhatsAppHref(
            `Olá! Gostaria de mais informações. (Contato vindo do site OdontoNeo | URL: ${pathname})`
          )
        : WHATSAPP_LINK);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
