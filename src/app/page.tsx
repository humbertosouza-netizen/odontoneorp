import Header from "@/components/Header";
import BannerSection from "@/components/BannerSection";
import ClinicaDestaque from "@/components/ClinicaDestaque";
import ServicosSection from "@/components/ServicosSection";
import DentistaDestaque from "@/components/DentistaDestaque";
import AgendaSection from "@/components/AgendaSection";
import TecnologiaSection from "@/components/TecnologiaSection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <BannerSection />
        <ClinicaDestaque />
        <ServicosSection />
        <DentistaDestaque />
        <AgendaSection />
        <TecnologiaSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
