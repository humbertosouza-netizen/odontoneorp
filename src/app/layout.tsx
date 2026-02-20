import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "OdontoNeo Infinity | Dentista em São José do Rio Preto – SP",
  description:
    "Clínica odontológica premium em São José do Rio Preto – SP. Implante dentário, prótese protocolo, lentes de contato dental, clareamento e harmonização orofacial. Dr. Gustavo Giolo – CRO-SP 140.793. Agende pelo WhatsApp (17) 99667-8007.",
  keywords:
    "dentista São José do Rio Preto, implante dentário Rio Preto, prótese dentária, clareamento dental, harmonização orofacial, lentes de contato dental, OdontoNeo Infinity, Dr Gustavo Giolo",
  openGraph: {
    locale: "pt_BR",
    title: "OdontoNeo Infinity | Dentista em São José do Rio Preto – SP",
    description:
      "Clínica odontológica premium em São José do Rio Preto. Implantes, próteses, clareamento, harmonização. Dr. Gustavo Giolo – CRO-SP 140.793.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  );
}
