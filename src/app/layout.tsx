import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// Fraunces: serif variable con ejes SOFT/WONK para titulares con personalidad
const serifFont = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sofía Noriega | Psicología Integral · Ansiedad, Dependencia Emocional & Vínculos",
  description:
    "Sofía Noriega, psicóloga clínica. Psicoterapia basada en evidencia y calidez humana especializada en dependencia emocional, relaciones sanas y manejo de ansiedad.",
  keywords: [
    "Sofía Noriega",
    "Sofía Noriega psicóloga",
    "psicóloga ansiedad",
    "dependencia emocional terapia",
    "terapia de pareja",
    "psicología integral",
    "ejercicios para la ansiedad",
    "apego ansioso sanar",
  ],
  openGraph: {
    title: "Sofía Noriega | Psicología Integral & Bienestar Emocional",
    description:
      "Una forma más serena de comprender tu mente y sanar. Sofía Noriega, especialista en dependencia emocional, relaciones y ansiedad.",
    type: "website",
    locale: "es_ES",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Sofía Noriega - Psicología Integral",
    "description":
      "Servicios de psicoterapia individual y de pareja especializada en ansiedad, dependencia emocional y regulación del sistema nervioso.",
    "medicalSpecialty": "Psychiatric",
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Terapia para Dependencia Emocional",
      },
      {
        "@type": "MedicalProcedure",
        "name": "Manejo Clínico de la Ansiedad y Sobrepensamiento",
      },
      {
        "@type": "MedicalProcedure",
        "name": "Terapia de Pareja y Vínculos de Apego",
      },
    ],
  };

  return (
    <html
      lang="es"
      className={`${sansFont.variable} ${serifFont.variable} scroll-smooth antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Titan+One&family=DynaPuff:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-background text-stone-800 selection:bg-lime selection:text-ink">
        {children}
      </body>
    </html>
  );
}
