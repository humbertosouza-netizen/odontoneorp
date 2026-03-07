"use client";

import { WHATSAPP_LINK } from "@/lib/constants";
import { trackConversion } from "@/lib/gtag";

interface WhatsAppLinkProps {
  href?: string;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
  children: React.ReactNode;
}

export default function WhatsAppLink({
  href = WHATSAPP_LINK,
  className,
  style,
  "aria-label": ariaLabel,
  children,
}: WhatsAppLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
      aria-label={ariaLabel}
      onClick={trackConversion}
    >
      {children}
    </a>
  );
}
