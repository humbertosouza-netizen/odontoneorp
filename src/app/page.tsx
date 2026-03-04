import Header from "@/components/Header";
import BannerSection from "@/components/BannerSection";
import ClinicaDestaque from "@/components/ClinicaDestaque";
import ServicosSection from "@/components/ServicosSection";
import DentistaDestaque from "@/components/DentistaDestaque";
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
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
