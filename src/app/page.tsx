import type { Metadata } from "next";
import Header from "@/components/Header";
import BannerSection from "@/components/BannerSection";
import ClinicaDestaque from "@/components/ClinicaDestaque";
import DepoimentosVideoSection from "@/components/DepoimentosVideoSection";
import ServicosSection from "@/components/ServicosSection";
import DentistaDestaque from "@/components/DentistaDestaque";
import AgendaSection from "@/components/AgendaSection";
import TecnologiaSection from "@/components/TecnologiaSection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export const metadata: Metadata = {
  title: "OdontoNeo Infinity | Dentista em São José do Rio Preto – SP",
  description:
    "Clínica odontológica premium em São José do Rio Preto – SP. Implante dentário, prótese protocolo, lentes de contato dental, alinhadores e sedação endovenosa. Dr. Gustavo Giolo – CRO-SP 140.793. Agende: (17) 99752-3045.",
  keywords: [
    "dentista São José do Rio Preto",
    "implante dentário São José do Rio Preto",
    "prótese protocolo Rio Preto",
    "lentes de contato dental São José do Rio Preto",
    "alinhador transparente Rio Preto",
    "sedação endovenosa dentista Rio Preto",
    "clínica odontológica premium Rio Preto",
    "OdontoNeo Infinity",
    "Dr Gustavo Giolo CRO-SP",
    "reabilitação oral São José do Rio Preto",
    "facetas de porcelana Rio Preto",
    "estética dental Rio Preto",
  ],
  openGraph: {
    locale: "pt_BR",
    type: "website",
    url: "https://www.odontoneoriopreto.com.br",
    siteName: "OdontoNeo Infinity",
    title: "OdontoNeo Infinity | Dentista em São José do Rio Preto – SP",
    description:
      "Clínica odontológica premium em São José do Rio Preto. Implantes, próteses, lentes de contato dental, alinhadores e sedação. Dr. Gustavo Giolo – CRO-SP 140.793.",
    images: [
      {
        url: "https://www.odontoneoriopreto.com.br/foto-principal.jpg",
        width: 1200,
        height: 630,
        alt: "OdontoNeo Infinity – Clínica Odontológica São José do Rio Preto",
      },
    ],
  },
  alternates: {
    canonical: "https://www.odontoneoriopreto.com.br",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <BannerSection />
        <ClinicaDestaque />
        <DepoimentosVideoSection />
        <ServicosSection />
        <DentistaDestaque />
        <TecnologiaSection />
        <AgendaSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
