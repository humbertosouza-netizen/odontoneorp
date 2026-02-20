import Header from "@/components/Header";
import BannerSection from "@/components/BannerSection";
import ClinicaDestaque from "@/components/ClinicaDestaque";
import ServicosSection from "@/components/ServicosSection";
import DentistaDestaque from "@/components/DentistaDestaque";
import GaleriaSection from "@/components/GaleriaSection";
import DepoimentosSection from "@/components/DepoimentosSection";
import LocalizacaoSection from "@/components/LocalizacaoSection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Carrossel de banners */}
        <BannerSection />

        {/* Conforto que impressiona — blobs + ondas */}
        <ClinicaDestaque />

        {/* Consultas & Serviços — destaques + carrossel */}
        <ServicosSection />

        {/* Dr. Gustavo Giolo — destaque azul com triângulos */}
        <DentistaDestaque />

        {/* Galeria da clínica */}
        <GaleriaSection />

        {/* Depoimentos de pacientes */}
        <DepoimentosSection />

        {/* Como chegar — localização da clínica */}
        <LocalizacaoSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
