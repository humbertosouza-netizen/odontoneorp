import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import AnalyticsPageView from "@/components/AnalyticsPageView";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "OdontoNeo Infinity | Dentista em São José do Rio Preto – SP",
  description:
    "Clínica odontológica premium em São José do Rio Preto – SP. Implante dentário, prótese protocolo, lentes de contato dental, clareamento e harmonização orofacial. Dr. Gustavo Giolo – CRO-SP 140.793. Agende pelo WhatsApp (17) 99752-3045.",
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

const schemaLocalBusiness = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Dentist", "LocalBusiness", "MedicalOrganization"],
      "@id": "https://www.odontoneoriopreto.com.br/#organization",
      "name": "OdontoNeo Infinity",
      "url": "https://www.odontoneoriopreto.com.br",
      "logo": "https://www.odontoneoriopreto.com.br/logo-odontoneo.png",
      "image": "https://www.odontoneoriopreto.com.br/foto-principal.jpg",
      "description": "Clínica odontológica premium em São José do Rio Preto – SP. Implantes, prótese protocolo, lentes de contato dental, alinhadores e sedação endovenosa. Dr. Gustavo Giolo – CRO-SP 140.793.",
      "telephone": "+55-17-99752-3045",
      "email": "odontoneoriopreto@gmail.com",
      "priceRange": "$$$$",
      "currenciesAccepted": "BRL",
      "paymentAccepted": "Cash, Credit Card, Debit Card",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Ondina, 259",
        "addressLocality": "São José do Rio Preto",
        "addressRegion": "SP",
        "postalCode": "15015-205",
        "addressCountry": "BR",
        "addressNeighborhood": "Vila Redentora"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-20.8197",
        "longitude": "-49.3794"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "08:00",
          "closes": "12:00"
        }
      ],
      "sameAs": [
        "https://www.instagram.com/odontoneosjriopreto",
        "https://share.google/GVcRtHTS1HqbMcAet"
      ],
      "hasMap": "https://share.google/GVcRtHTS1HqbMcAet",
      "medicalSpecialty": [
        "Implantodontia",
        "Reabilitação Oral",
        "Estética Dental",
        "Ortodontia",
        "Sedação Endovenosa"
      ],
      "areaServed": {
        "@type": "City",
        "name": "São José do Rio Preto",
        "addressRegion": "SP",
        "addressCountry": "BR"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "150"
      }
    },
    {
      "@type": "Physician",
      "@id": "https://www.odontoneoriopreto.com.br/#dentist",
      "name": "Dr. Gustavo Giolo",
      "jobTitle": "Implantodontista e Especialista em Reabilitação Oral",
      "identifier": "CRO-SP 140.793",
      "worksFor": { "@id": "https://www.odontoneoriopreto.com.br/#organization" },
      "medicalSpecialty": ["Implantodontia", "Reabilitação Oral", "Estética Dental"],
      "image": "https://www.odontoneoriopreto.com.br/foto-dr-gustavo-2.jpeg"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness) }}
        />
      </head>
      <body className="min-h-screen bg-white">
        <AnalyticsPageView />
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17999725494"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17999725494');
            gtag('config', 'AW-17999725494/eeyBCMDPsYQcELaH-IZD', {
              'phone_conversion_number': '+${WHATSAPP_NUMBER}'
            });
          `}
        </Script>
      </body>
    </html>
  );
}
