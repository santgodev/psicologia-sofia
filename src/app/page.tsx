"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import NavbarSofia from "@/components/NavbarSofia";
import HeroSofia from "@/components/HeroSofia";
import ManifestoStrip from "@/components/ManifestoStrip";
import AboutSofia from "@/components/AboutSofia";
import HowIWork from "@/components/HowIWork";
import ServicesSofia from "@/components/ServicesSofia";
import HowToStart from "@/components/HowToStart";
import FaqSofia from "@/components/FaqSofia";
import ContactFormSofia from "@/components/ContactFormSofia";
import BlogSofia from "@/components/BlogSofia";
import FooterSofia from "@/components/FooterSofia";

// Secciones retiradas en el rediseño (archivos conservados por si se reutilizan):
// DirectoryBar (directorios sin verificar), SoftPinkBanner y PanoramaBanner (CTA repetidos),
// ResilienceArch + TeamSofia (fusionadas en AboutSofia), ApproachSlider (→ HowIWork).

// =========================================================================
// MÓDULOS DE MUÑECOS / MASCOTAS ANIMADAS (DISPONIBLES PARA INTEGRAR DESPUÉS)
// El usuario solicitó mantenerlos fuera de la vista principal por ahora,
// pero 100% listos y preservados para integrarse cuando se desee.
// =========================================================================
const GentleeCard = dynamic(() => import("@/components/GentleeCard"), { ssr: false });
const CompanionMascot = dynamic(() => import("@/components/CompanionMascot"), { ssr: false });
const WeeklyToolsPinterest = dynamic(() => import("@/components/WeeklyToolsPinterest"), { ssr: false });

export default function Home() {
  // Cambiar a `true` si deseas mostrar la sección interactiva de los muñecos animados
  const [showMascotsSection] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-stone-800 selection:bg-lime selection:text-ink">
      {/* 1. Header & Navegación */}
      <NavbarSofia />

      <main className="flex-1 flex flex-col items-center w-full">
        {/* 2. Hero: escenario editorial + tarjetas con mascotas por especialidad */}
        <HeroSofia />

        {/* 3. Manifiesto visual en píldoras */}
        <ManifestoStrip />

        {/* 4. Conoce a Sofía */}
        <AboutSofia />

        {/* 4. Cómo trabajo */}
        <HowIWork />

        {/* 5. Modalidades de acompañamiento (cuadrícula conectada al selector) */}
        <ServicesSofia />

        {/* 6. Cómo empezar (3 pasos) */}
        <HowToStart />

        {/* 7. Preguntas frecuentes */}
        <FaqSofia />

        {/* 8. Contacto (única sección rosa) */}
        <ContactFormSofia />

        {/* 9. Blog y recursos */}
        <BlogSofia />

        {/* =================================================================== */}
        {/* SECCIÓN DE MUÑECOS ANIMADOS (PRESERVADA PARA ACTIVACIÓN FUTURA)     */}
        {/* =================================================================== */}
        {showMascotsSection && (
          <section id="tarjetas-bienestar" className="w-full max-w-[1240px] mx-auto py-16 px-6">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-stone-100 border border-stone-200 text-stone-700 uppercase tracking-widest">
                Compañeros Emocionales
              </span>
              <h2 className="font-serif text-3xl font-medium mt-3 text-stone-900">
                Herramientas y Mascotas Guiadas
              </h2>
            </div>
            <GentleeCard />
            <WeeklyToolsPinterest />
          </section>
        )}
      </main>

      {/* Mascota Compañera Emocional Flotante en la esquina inferior derecha */}
      <CompanionMascot />

      {/* 13. Footer Oscuro Sofia Therapy */}
      <FooterSofia />
    </div>
  );
}
