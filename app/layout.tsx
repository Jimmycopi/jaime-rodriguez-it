import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { OWNER_DATA, SERVICES_LIST, FAQS } from "@/data/siteData";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(OWNER_DATA.siteUrl),
  title: {
    default: "Jaime Rodríguez V | Soporte Técnico, Redes y Soluciones Informáticas en CDMX",
    template: "%s | Jaime Rodríguez V - Especialista IT",
  },
  description: "Lic. en Informática Jaime Rodríguez V. Soporte técnico empresarial y residencial en CDMX, redes LAN/WiFi, SQL Server, Access, Visual FoxPro, Excel avanzado y recuperación de datos.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: OWNER_DATA.siteUrl,
    siteName: "Jaime Rodríguez V - Soluciones Informáticas",
    title: "Jaime Rodríguez V | Especialista en Soporte Técnico y Soluciones IT",
    description: "Soluciones tecnológicas profesionales para empresas y particulares en Ciudad de México. Experiencia en OPTEC, INEGI, SEGOB, INEA y REPSS.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${OWNER_DATA.name} - Soluciones Informáticas`,
    url: OWNER_DATA.siteUrl,
    telephone: OWNER_DATA.phoneDisplay,
    email: OWNER_DATA.email,
    address: { "@type": "PostalAddress", addressLocality: "Ciudad de México", addressRegion: "CDMX", addressCountry: "MX" },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: SERVICES_LIST.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: { "@type": "Service", name: service.title, description: service.description, areaServed: "Ciudad de México" },
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
